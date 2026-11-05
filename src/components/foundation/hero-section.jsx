import { useEffect, useRef } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { foundationAssets } from './assets'
import { CircularBadge } from './circular-badge'

const heroHighlights = [
  { value: '2023', label: 'Founded', detail: '18 July 2023' },
  { value: '06', label: 'Focus areas', detail: 'Healthcare to skills' },
  { value: 'GMCP', label: 'Flagship project', detail: 'Global Medical City' },
]

export function HeroSection() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const mediaWrap = hero.querySelector('[data-hero-media-wrap]')
    const glow = hero.querySelector('.hero-glow')
    const spotlight = hero.querySelector('[data-hero-spotlight]')
    const badge = hero.querySelector('[data-hero-badge]')
    const ring = hero.querySelector('[data-hero-ring]')

    if (spotlight) gsap.set(spotlight, { xPercent: -50, yPercent: -50, x: 0, y: 0 })

    const mover = (element, property, duration) =>
      element ? gsap.quickTo(element, property, { duration, ease: 'power3.out' }) : null

    const moveMediaX = mover(mediaWrap, 'x', 1)
    const moveMediaY = mover(mediaWrap, 'y', 1)
    const moveGlowX = mover(glow, 'x', 1.4)
    const moveGlowY = mover(glow, 'y', 1.4)
    const moveSpotX = mover(spotlight, 'x', 0.45)
    const moveSpotY = mover(spotlight, 'y', 0.45)
    const moveSpotOpacity = mover(spotlight, 'opacity', 0.5)
    const moveBadgeX = mover(badge, 'x', 0.9)
    const moveBadgeY = mover(badge, 'y', 0.9)
    const moveRingX = mover(ring, 'x', 1.2)
    const moveRingY = mover(ring, 'y', 1.2)

    const handleMove = (event) => {
      if (event.pointerType !== 'mouse') return

      const rect = hero.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const nx = x / rect.width - 0.5
      const ny = y / rect.height - 0.5

      moveMediaX?.(nx * -22)
      moveMediaY?.(ny * -16)
      moveGlowX?.(nx * 64)
      moveGlowY?.(ny * 44)
      moveSpotX?.(x)
      moveSpotY?.(y)
      moveSpotOpacity?.(1)
      moveBadgeX?.(nx * 26)
      moveBadgeY?.(ny * 20)
      moveRingX?.(nx * -36)
      moveRingY?.(ny * -28)
    }

    const handleLeave = (event) => {
      if (event.pointerType !== 'mouse') return

      moveMediaX?.(0)
      moveMediaY?.(0)
      moveGlowX?.(0)
      moveGlowY?.(0)
      moveSpotOpacity?.(0)
      moveBadgeX?.(0)
      moveBadgeY?.(0)
      moveRingX?.(0)
      moveRingY?.(0)
    }

    hero.addEventListener('pointermove', handleMove)
    hero.addEventListener('pointerleave', handleLeave)

    return () => {
      hero.removeEventListener('pointermove', handleMove)
      hero.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate flex h-[100svh] max-h-[980px] min-h-[740px] items-center overflow-hidden bg-forest text-white"
    >
      <div data-hero-media-wrap className="absolute inset-0 scale-105" aria-hidden="true">
        <img
          src={foundationAssets.healthCamp}
          alt=""
          className="size-full object-cover object-[54%_center]"
          fetchPriority="high"
          decoding="async"
          data-parallax
          data-hero-media
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#06271f]/85 via-[#06271f]/65 to-[#06271f]/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#063b30]/75" aria-hidden="true" />
      <div
        data-hero-spotlight
        className="pointer-events-none absolute left-0 top-0 z-[1] size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(239,161,43,0.16),transparent_65%)] opacity-0 blur-2xl"
        aria-hidden="true"
      />
      <div className="hero-glow absolute -right-32 top-1/4 size-[28rem] rounded-full bg-saffron/10 blur-3xl" aria-hidden="true" />

      <div className="hero-badge absolute right-5 top-1/2 z-10 hidden lg:right-8 lg:block">
        <div data-hero-badge>
          <CircularBadge className="text-white/75" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-24 sm:px-8 lg:pb-28 lg:pt-28">
        <div className="hero-copy max-w-[920px]">
          <p data-hero-copy className="font-editorial text-base text-saffron sm:text-lg lg:text-xl">
            परोपकारार्थ इदं शरीरम्
          </p>
          <span data-hero-copy className="mt-4 block h-px w-16 bg-gradient-to-r from-saffron via-saffron/60 to-transparent" aria-hidden="true" />
          <h1 className="font-editorial mt-6 max-w-[920px] text-[clamp(2.35rem,5.6vw,5.35rem)] leading-[1.02] tracking-[-0.045em] text-[#fffaf0] sm:mt-7">
            <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
              <span data-hero-line className="block will-change-transform">
                Together, We Can Build
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
              <span data-hero-line className="block will-change-transform">
                a Healthier and More
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.22em] -mb-[0.22em]">
              <em data-hero-line className="block font-normal text-saffron will-change-transform">
                Hopeful Tomorrow.
              </em>
            </span>
          </h1>
          <p data-hero-copy className="mt-7 max-w-[680px] text-[15px] leading-7 text-white/80 sm:text-base sm:leading-7">
            Kalima Foundation &amp; Charitable Trust is committed to uplifting humanity through healthcare, education, social welfare and community development.
          </p>
          <div data-hero-copy className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#donate"
              data-magnetic
              data-magnetic-strength="0.14"
              className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-saffron px-7 text-[13px] font-bold text-forest-deep shadow-[0_12px_35px_rgba(239,161,43,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#f6b342]"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Donate Now
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
            </a>
            <a
              href="#mission"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 text-[13px] font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-saffron/60 hover:bg-white/20"
            >
              Explore Our Mission
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
            <a
              href="#volunteer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 text-[13px] font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/15"
            >
              Become a Volunteer
            </a>
          </div>
          <p
            data-hero-copy
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45 lg:hidden"
          >
            <span>Est. 2023</span>
            <span aria-hidden="true">·</span>
            <span>Karnataka, India</span>
          </p>
        </div>
      </div>

      <a
        href="#about"
        data-hero-copy
        className="group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/50 transition-colors hover:text-saffron lg:bottom-28"
      >
        
      </a>

      <div
        data-hero-stats
        className="absolute inset-x-0 bottom-0 z-20 hidden border-t border-white/15 bg-[#04231d]/55 backdrop-blur-md lg:block"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/15 px-5 sm:px-8">
          {heroHighlights.map((item) => (
            <div
              key={item.label}
              data-hero-stat
              className="group flex min-w-0 items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.04] first:pl-0 last:pr-0 xl:gap-5"
            >
              <span className="font-editorial text-2xl text-saffron transition-transform duration-300 group-hover:-translate-y-0.5">
                {item.value}
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">{item.label}</span>
                <span className="mt-0.5 truncate text-[11px] text-white/45 transition-colors group-hover:text-white/70">
                  {item.detail}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
