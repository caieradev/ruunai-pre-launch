import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Validate name
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide your name' },
        { status: 400 }
      )
    }

    // Check for required environment variables
    if (!process.env.MAILER_LITE_API_KEY) {
      console.error('MailerLite API key not configured')
      return NextResponse.json(
        { error: 'Service configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    // Split name into first and last name
    const nameParts = name.trim().split(' ')
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''

    // Prepare request body
    const requestBody: {
      email: string
      fields: {
        name: string
        last_name: string
      }
      status: string
      groups?: string[]
    } = {
      email: email,
      fields: {
        name: firstName,
        last_name: lastName,
      },
      status: 'active',
    }

    // Add group if provided
    if (process.env.MAILER_LITE_GROUP_ID) {
      requestBody.groups = [process.env.MAILER_LITE_GROUP_ID]
    }

    // Add subscriber to MailerLite
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.MAILER_LITE_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    })

    const data = await response.json()

    // MailerLite returns 201 for new subscriber, 200 for existing (updated)
    if (response.ok) {
      console.log('✅ Subscriber added to MailerLite:', name, email)

      return NextResponse.json(
        {
          success: true,
          message: "Thanks! We'll be in touch soon.",
        },
        { status: 200 }
      )
    }

    // Handle validation errors
    if (response.status === 422) {
      console.error('MailerLite validation error:', data)
      return NextResponse.json(
        {
          error: data.message || 'Invalid email or data. Please check and try again.',
        },
        { status: 400 }
      )
    }

    // Handle authentication errors
    if (response.status === 401) {
      console.error('MailerLite authentication failed')
      return NextResponse.json(
        { error: 'Service configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    // Handle other errors
    console.error('MailerLite API Error:', data)
    return NextResponse.json(
      {
        error: 'Failed to subscribe. Please try again.',
      },
      { status: 500 }
    )
  } catch (error: any) {
    console.error('MailerLite API Error:', error)

    return NextResponse.json(
      {
        error: 'Failed to subscribe. Please try again.',
      },
      { status: 500 }
    )
  }
}
