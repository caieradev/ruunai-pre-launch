'use client'

import { useState, FormEvent } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function EmailCaptureSection() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')

    // Basic validation
    if (!email || !email.includes('@')) {
      setError(t.emailCapture.errorInvalidEmail)
      return
    }

    if (!name || name.trim().length < 2) {
      setError(t.emailCapture.errorInvalidName)
      return
    }

    setIsLoading(true)

    try {
      // Call Mailchimp API
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      })

      const data = await response.json()

      if (response.ok) {
        // Success!
        console.log('✅ Subscriber added:', name, email)
        setSuccessMessage(data.message || t.emailCapture.successMessage)
        setIsSubmitted(true)
        setName('')
        setEmail('')

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setSuccessMessage('')
        }, 5000)
      } else {
        // API returned an error
        setError(data.error || t.emailCapture.errorGeneric)
      }
    } catch (err) {
      console.error('Subscription error:', err)
      setError(t.emailCapture.errorConnection)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="early-access" className="bg-dark-bg py-20 sm:py-28">
      <Container size="sm">
        <SectionHeading
          title={t.emailCapture.heading}
          subtitle={t.emailCapture.subheading}
        />

        <form onSubmit={handleSubmit} className="mx-auto max-w-md">
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder={t.emailCapture.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitted || isLoading}
              required
            />
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder={t.emailCapture.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitted || isLoading}
                required
              />
              <Button
                type="submit"
                disabled={isSubmitted || isLoading}
                className="sm:whitespace-nowrap"
              >
                {isLoading ? t.emailCapture.buttonTextLoading : t.emailCapture.buttonText}
              </Button>
            </div>
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
          </div>

          {isSubmitted && successMessage && (
            <div className="mt-4 animate-slide-up rounded-lg bg-accent-primary/10 border border-accent-primary p-4 text-center">
              <p className="text-accent-primary">{successMessage}</p>
            </div>
          )}
        </form>
      </Container>
    </section>
  )
}
