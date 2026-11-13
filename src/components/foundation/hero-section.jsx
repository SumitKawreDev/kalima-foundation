import { useEffect, useRef } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { foundationAssets } from './assets'
import { CircularBadge } from './circular-badge'

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
      className="relative isolate flex min-h-[100svh] items-start overflow-hidden bg-forest text-white lg:h-[100svh] lg:max-h-[980px] lg:min-h-[740px] lg:items-center"
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

      <div className="hero-badge absolute right-4 top-[5.5rem] z-10 lg:right-8">
        <div data-hero-badge>
          <CircularBadge className="text-white/75" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:pb-28 lg:pt-48">
        <div className="hero-copy max-w-[920px]">
          <p data-hero-copy className="font-editorial text-base text-saffron sm:text-lg lg:text-xl">
           || परोपकारार्थं इदं शरीरम् ||
          </p>
         
          <span data-hero-copy className="mt-2 block h-px w-16 bg-gradient-to-r from-saffron via-saffron/60 to-transparent" aria-hidden="true" />
          <h1 className="font-editorial mt-5 max-w-[920px] text-balance text-[clamp(1.9rem,5.2vw,3.75rem)] leading-[1.08] tracking-[-0.045em] text-[#fffaf0] sm:mt-7 sm:text-[clamp(2.25rem,4.4vw,3.75rem)]">
            <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
              <span data-hero-line className="block will-change-transform">A Healthier Future,</span>
            </span>
            <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
              <span data-hero-line className="block will-change-transform">Built <span className="text-saffron/90">Together.</span></span>
            </span>
          </h1>
          <p data-hero-copy className="mt-2 max-w-[680px] text-balance font-editorial text-base leading-6 text-saffron/90 sm:text-lg sm:leading-7">
            Healthcare, education and community development, rooted in humanity.
          </p>
          <p data-hero-copy className="mt-4 max-w-[680px] text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
            Kalima (R.) FCT(R.) is a charitable organization working to make healthcare more accessible through free medical camps, free medicine distribution and patient assistance.
          </p>

          <p data-hero-copy className="mt-3 max-w-[680px] text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
We are building a Global Medical City that unites care, education, and research to heal communities.          </p>

          <p data-hero-copy className="mt-4 font-editorial text-base text-saffron sm:text-lg lg:text-xl">
            Patients first. Humanity always.
          </p>
          <span data-hero-copy className="mt-2 block h-px w-16 bg-gradient-to-r from-saffron via-saffron/60 to-transparent" aria-hidden="true" />
          <div data-hero-copy className="mt-6 flex w-full max-w-[520px] flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#mission"
              data-magnetic
              data-magnetic-strength="0.14"
              className="group relative inline-flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-saffron px-7 text-[13px] font-bold text-forest-deep shadow-[0_12px_35px_rgba(239,161,43,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#f6b342] sm:w-auto"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Support Our Mission
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </span>
            </a>
            <a
              href="#donate"
              data-magnetic
              data-magnetic-strength="0.14"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 text-[13px] font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-saffron/60 hover:bg-white/20 sm:w-auto"
            >
              Donate Now <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="#medical-city"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 text-[13px] font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/15 sm:w-auto"
            >
              Explore Global Medical City
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              />
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

      {/* <a
        href="#about"
        data-hero-copy
        className="group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/50 transition-colors hover:text-saffron lg:bottom-28"
      >
        <span className="sr-only">Scroll to About</span>
        <ChevronDown aria-hidden="true" className="size-4" />
      </a> */}

    </section>
  )
}
