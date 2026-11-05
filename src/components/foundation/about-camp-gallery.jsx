import { useCallback, useEffect, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const campImages = Object.entries(
  import.meta.glob('../../assets/camp_imges-about_us/*.{png,jpg,jpeg,webp,avif}', {
    eager: true,
    import: 'default',
  })
)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([path, image]) => ({
    src: image,
    name: path.split('/').pop() ?? 'camp-image',
  }))

const campCaptions = [
  'Free medical camp',
  'Community health outreach',
  'Health check-up drive',
  'Care in the community',
  'Serving families',
  'Moments from the field',
  'Together for better health',
]

const getCardSpan = (index) => {
  if (index === 0) return 'sm:col-span-2 lg:col-span-2 lg:row-span-2'
  if (index === 6) return 'sm:col-span-2 lg:col-span-2'
  return ''
}

export default function AboutCampGallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const shouldReduceMotion = useReducedMotion()

  const closeLightbox = useCallback(() => setActiveIndex(null), [])

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + campImages.length) % campImages.length
    )
  }, [])

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % campImages.length
    )
  }, [])

  useEffect(() => {
    if (activeIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, closeLightbox, showNext, showPrevious])

  if (!campImages.length) return null

  const activeImage = activeIndex === null ? null : campImages[activeIndex]

  return (
    <section
      id="camp-gallery"
      aria-label="Moments from our medical camps"
      className="section-glow relative overflow-hidden bg-paper py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          data-reveal="left"
          className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="eyebrow">Our camps</p>

            <h2 className="font-editorial mt-4 max-w-[620px] text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.06] tracking-[-0.045em] text-forest">
              Moments from the{' '}
              <em className="font-normal text-saffron">ground.</em>
            </h2>

            <p className="mt-4 max-w-[620px] text-sm leading-7 text-ink/75 sm:text-base">
              A glimpse into our free medical camps, health check-ups and
              community outreach programmes — where care reaches the people who
              need it most.
            </p>
          </div>

          
        </div>

        <div className="grid grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-2 sm:gap-5 lg:auto-rows-[200px] lg:grid-cols-4 xl:auto-rows-[225px]">
          {campImages.map((image, index) => (
            <motion.figure
              key={image.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : Math.min(index, 6) * 0.07,
                ease: 'easeOut',
              }}
              className={`h-[250px] sm:h-full ${getCardSpan(index)}`}
            >
              <motion.button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open photograph ${index + 1} of ${campImages.length}`}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="image-frame group relative block h-full w-full overflow-hidden rounded-2xl bg-forest/10 text-left shadow-[0_12px_32px_rgba(7,62,51,0.14)] ring-1 ring-forest/10 transition-shadow duration-300 hover:shadow-[0_22px_50px_rgba(7,62,51,0.26)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron sm:rounded-3xl"
              >
                <img
                  src={image.src}
                  alt={`Free medical camp organised by Kalima Foundation (R.), photograph ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#052e26]/90 via-[#052e26]/25 to-[#052e26]/5 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center rounded-full border border-white/25 bg-forest-deep/45 px-2.5 py-1 text-[10px] font-extrabold tracking-[0.14em] text-white/90 backdrop-blur-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <span className="min-w-0 text-left">
                    <span className="block text-[9px] font-extrabold uppercase tracking-[0.18em] text-saffron">
                      Camp diary
                    </span>
                    <span className="mt-1 block truncate text-sm font-semibold text-white sm:text-[15px]">
                      {campCaptions[index % campCaptions.length]}
                    </span>
                  </span>

                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-saffron group-hover:text-forest-deep">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </span>

                <span
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-saffron/45 sm:rounded-3xl"
                  aria-hidden="true"
                />
              </motion.button>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Photograph ${activeIndex + 1} of ${campImages.length}`}
            className="fixed inset-0 z-[100] flex flex-col bg-[#03231c]/95 backdrop-blur-md"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
            onClick={closeLightbox}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">
                {String(activeIndex + 1).padStart(2, '0')} / {String(campImages.length).padStart(2, '0')}
              </span>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close gallery"
                className="grid size-10 place-items-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-8 sm:pb-8">
              <motion.img
                key={activeImage.name}
                src={activeImage.src}
                alt={`Free medical camp organised by Kalima Foundation (R.), photograph ${activeIndex + 1}`}
                className="max-h-full max-w-full rounded-xl object-contain shadow-2xl sm:rounded-2xl"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
                onClick={(event) => event.stopPropagation()}
              />
            </div>

            <div
              className="flex items-center justify-center gap-3 px-4 pb-6 sm:pb-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Show previous photograph"
                className="grid size-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronLeft className="size-5" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Show next photograph"
                className="grid size-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
