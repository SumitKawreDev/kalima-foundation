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
      className="relative isolate flex h-[72svh] min-h-[420px] max-h-[720px] items-start overflow-hidden bg-forest text-white lg:items-center"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={activeSlide}
          src={slideImages[activeSlide]}
          alt={`Kalima Foundation (R.) community and healthcare initiative, image ${activeSlide + 1}`}
          className="absolute inset-0 size-full object-cover object-top"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' }}
          fetchPriority={activeSlide === 0 ? 'high' : 'auto'}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-[#052e26]/85 via-[#052e26]/40 to-[#052e26]/10" />
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-7xl justify-end gap-5 px-5 pb-8 sm:px-8 sm:pb-10 lg:px-8 lg:pb-12">
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => showSlide(activeSlide - 1)}
            aria-label="Show previous image"
            className="grid size-10 place-items-center rounded-full border border-white/50 bg-forest/30 text-white backdrop-blur transition hover:bg-white hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:size-12"
          >
            <ArrowLeft className="size-4 sm:size-5" />
          </button>
          <div className="flex items-center gap-1.5" aria-label={`Slide ${activeSlide + 1} of ${slideImages.length}`}>
            {slideImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => showSlide(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={activeSlide === index ? 'true' : undefined}
                className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${activeSlide === index ? 'w-6 bg-saffron' : 'w-2 bg-white/70 hover:bg-white'}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => showSlide(activeSlide + 1)}
            aria-label="Show next image"
            className="grid size-10 place-items-center rounded-full border border-white/50 bg-forest/30 text-white backdrop-blur transition hover:bg-white hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:size-12"
          >
            <ArrowRight className="size-4 sm:size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
