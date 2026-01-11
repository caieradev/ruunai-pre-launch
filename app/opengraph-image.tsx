import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'RuunAI - Your AI Running Coach'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '120px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            <span style={{ color: '#FFFFFF' }}>R</span>
            <span style={{ color: '#00E5A0' }}>A</span>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          Your AI Running Coach
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: 400,
            color: '#A0A0A0',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          Personalized training plans that adapt to you
        </div>

        {/* Accent bar */}
        <div
          style={{
            width: '200px',
            height: '6px',
            background: '#00E5A0',
            marginTop: '60px',
            borderRadius: '3px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
