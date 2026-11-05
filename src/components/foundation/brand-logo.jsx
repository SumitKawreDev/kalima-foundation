import { foundationAssets } from './assets'

/* --------------------------------------------------------------------------
 * LOGO SIZE CONTROLS
 * --------------------------------------------------------------------------
 * Change LOGO_WIDTH (px) to resize the Kalima logo everywhere at once.
 * You can also size one instance: <BrandLogo width={96} radius={18} />
 *
 * LOGO_WIDTH  – rendered width of the white logo tile
 * LOGO_RADIUS – corner curve, so the white tile does not look like a box
 * LOGO_ASPECT – height/width of the logo artwork (keeps the logo unstretched)
 * ------------------------------------------------------------------------ */
export const LOGO_WIDTH = 72
export const LOGO_RADIUS = 14

const LOGO_ASPECT = 2304 / 2712
const LOGO_PADDING_RATIO = 0.055

export function BrandLogo({
  width = LOGO_WIDTH,
  radius = LOGO_RADIUS,
  className = '',
  alt = 'Kalima Foundation & Charitable Trust',
  loading = 'lazy',
}) {
  const height = Math.round(width * LOGO_ASPECT)

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden bg-white shadow-[0_10px_28px_rgba(0,0,0,0.28)] ring-1 ring-white/35 transition-transform duration-500 group-hover:scale-[1.03] ${className}`}
      style={{
        width,
        height,
        borderRadius: radius,
        padding: Math.max(3, Math.round(width * LOGO_PADDING_RATIO)),
      }}
    >
      <img
        src={foundationAssets.logoMark}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className="h-full w-full object-contain"
      />
    </span>
  )
}
