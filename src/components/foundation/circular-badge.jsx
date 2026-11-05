import { useId } from 'react'

export function CircularBadge({ className = '' }) {
  const pathId = `circular-badge-path-${useId().replaceAll(':', '')}`

  return (
    <div className={`circular-badge ${className}`} role="img" aria-label="Our mission, our responsibility, our humanity">
      <svg viewBox="0 0 180 180" role="img" aria-hidden="true">
        <defs>
          <path id={pathId} d="M 90,90 m -67,0 a 67,67 0 1,1 134,0 a 67,67 0 1,1 -134,0" />
        </defs>
        <circle cx="90" cy="90" r="77" fill="none" stroke="currentColor" strokeOpacity="0.35" />
        <text className="circular-badge__text">
          <textPath href={`#${pathId}`}>
            OUR MISSION • OUR RESPONSIBILITY • OUR HUMANITY •
          </textPath>
        </text>
      </svg>
      {/* <span className="circular-badge__center">KALIMA</span> */}
    </div>
  )
}
