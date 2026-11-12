import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const slideImages = Object.entries(
  import.meta.glob('../../assets/about-us-hero-silder/*.{png,jpg,jpeg,webp,avif}', {
    eager: true,
    import: 'default',
  })
)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([, image]) => image)

export default function AboutUsHeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (slideImages.length < 2 || shouldReduceMotion) return undefined

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideImages.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [shouldReduceMotion])

  if (!slideImages.length) return null

  const showSlide = (index) => {
    setActiveSlide((index + slideImages.length) % slideImages.length)
  }

  return (
    <section
      aria-label="About Kalima Foundation (R.)"
      className="relative isolate overflow-hidden bg-forest-deep pb-8 pt-[92px] text-white sm:pb-10 sm:pt-[108px] lg:pb-14 lg:pt-[120px]"
    >
      {/* Ambient background behind the fixed navbar and around the image card. */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_28rem_at_15%_-10%,rgba(239,161,43,0.18),transparent_65%),radial-gradient(48rem_26rem_at_100%_0%,rgba(114,199,185,0.14),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative h-[clamp(380px,55svh,520px)] w-full overflow-hidden rounded-2xl bg-forest shadow-[0_28px_70px_rgba(2,24,19,0.45)] ring-1 ring-white/10 sm:h-[clamp(480px,65svh,650px)] sm:rounded-[1.75rem] lg:h-[clamp(560px,72svh,760px)]">          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide}
              src={slideImages[activeSlide]}
              alt="Kalima Foundation (R.) community and healthcare initiative"
              className="absolute inset-0 size-full object-cover object-center"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' }}
              fetchPriority={activeSlide === 0 ? 'high' : 'auto'}
              decoding="async"
            />
          </AnimatePresence>

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03231c]/92 via-[#03231c]/25 to-[#03231c]/10"
            aria-hidden="true"
          />

          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-4 p-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:p-6 lg:p-8">
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-saffron sm:text-[10px]">
                <span className="size-1.5 rounded-full bg-saffron" aria-hidden="true" />
                About Kalima (R.) FCT(R.)
              </p>

              <p className="font-editorial mt-2 max-w-[34rem] text-[clamp(1.15rem,4.4vw,2rem)] leading-[1.12] tracking-[-0.03em] text-white">
                Compassion in action, across communities.
              </p>
            </div>

            <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => showSlide(activeSlide - 1)}
                aria-label="Show previous image"
                className="grid size-9 place-items-center rounded-full border border-white/45 bg-forest-deep/35 text-white backdrop-blur transition hover:bg-white hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:size-11"
              >
                <ArrowLeft className="size-4 sm:size-5" />
              </button>

              <div
                className="flex items-center gap-1.5"
                aria-label="Image navigation"
                aria-live="polite"
              >
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => showSlide(index)}
                    aria-label="Show image"
                    aria-current={activeSlide === index ? 'true' : undefined}
                    className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      activeSlide === index ? 'w-6 bg-saffron' : 'w-2 bg-white/65 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => showSlide(activeSlide + 1)}
                aria-label="Show next image"
                className="grid size-9 place-items-center rounded-full border border-white/45 bg-forest-deep/35 text-white backdrop-blur transition hover:bg-white hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:size-11"
              >
                <ArrowRight className="size-4 sm:size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
