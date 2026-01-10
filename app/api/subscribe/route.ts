import { NextRequest, NextResponse } from 'next/server'
import mailchimp from '@mailchimp/mailchimp_marketing'

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
})

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
    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID) {
      console.error('Mailchimp credentials not configured')
      return NextResponse.json(
        { error: 'Service configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    // Split name into first and last name
    const nameParts = name.trim().split(' ')
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''

    // Add subscriber to Mailchimp
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID as string,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
        tags: ['Early Access', 'Landing Page'],
      }
    )

    console.log('✅ Subscriber added to Mailchimp:', name, email)

    return NextResponse.json(
      {
        success: true,
        message: "Thanks! We'll be in touch soon.",
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Mailchimp API Error:', error)

    // Handle duplicate email (already subscribed)
    if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
      return NextResponse.json(
        {
          success: true,
          message: "You're already on the list! We'll be in touch soon.",
        },
        { status: 200 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      {
        error: 'Failed to subscribe. Please try again.',
      },
      { status: 500 }
    )
  }
}
