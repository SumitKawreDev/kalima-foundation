import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Heart } from 'lucide-react'
import { foundationAssets } from './assets'

const wordmarkSources = {
  light: foundationAssets.wordmarkLight,
  gold: foundationAssets.wordmarkGold,
  dark: foundationAssets.wordmark,
}

export function BrandWordmark({
  variant = 'light',
  className = '',
  alt = 'Kalima',
  eager = false,
}) {
  return (
    <img
      src={wordmarkSources[variant] ?? wordmarkSources.light}
      alt={alt}
      width="2570"
      height="482"
      className={`brand-wordmark ${className}`}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}

export function SpotlightCard({ as: Tag = 'article', className = '', children, ...props }) {
  const cardRef = useRef(null)

  const handlePointerMove = useCallback((event) => {
    const node = cardRef.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    node.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`)
    node.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`)
  }, [])

  return (
    <Tag
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`spotlight-card ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

const values = [
  'Compassion',
  'Dignity',
  'Healthcare',
  'Education',
  'Community',
  'Hope',
  'Service',
  'Unity',
]

export function ValuesMarquee() {
  const row = [...values, ...values]

  return (
    <div className="values-marquee border-y border-forest/10 bg-[#f5f0e5]" aria-hidden="true">
      <div className="values-marquee__track">
        {row.map((value, index) => (
          <span key={`${value}-${index}`} className="values-marquee__item">
            <span className="values-marquee__diamond" />
            {value}
          </span>
        ))}
      </div>
    </div>
  )
}

export function FloatingDonate() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const donateSection = document.getElementById('donate')
      const donateRect = donateSection?.getBoundingClientRect()
      const donateInView = donateRect
        ? donateRect.top < window.innerHeight * 0.92 && donateRect.bottom > 0
        : false
      const nearFooter =
        window.scrollY + window.innerHeight >
        document.documentElement.scrollHeight - 260
      const pastHero = window.scrollY > window.innerHeight * 0.78

      setVisible(pastHero && !donateInView && !nearFooter)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <a
      href="#donate"
      aria-label="Donate to Kalima Foundation"
      data-magnetic
      data-magnetic-strength="0.18"
      className={`floating-donate ${visible ? 'is-visible' : ''}`}
    >
      <span className="floating-donate__pulse" aria-hidden="true" />
      <Heart aria-hidden="true" className="size-4 fill-current" />
      <span>Donate</span>
      <ArrowUpRight aria-hidden="true" className="size-3.5" />
    </a>
  )
}

export function PremiumLink({ href, children, className = '', ...props }) {
  return (
    <a href={href} className={`link-underline ${className}`} {...props}>
      {children}
    </a>
  )
}
