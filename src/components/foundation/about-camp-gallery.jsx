import { useCallback, useEffect, useState } from 'react'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Grid,
  LayoutGrid,
  Pause,
  Play,
  Rows3,
  X,
} from 'lucide-react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'

const campImages = Object.entries(
  import.meta.glob('../../assets/camp_imges-about_us/*.{png,jpg,jpeg,webp,avif}', {
    eager: true,
    import: 'default',
  })
)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([path, image], idx) => ({
    src: image,
    name: path.split('/').pop() ?? `camp-image-${idx}`,
    id: idx,
  }))

const campMeta = [
  {
    caption: 'Free medical camp',
    detail: 'On-site doctor consultations, vital screenings, and free medicine distribution.',
  },
  {
    caption: 'Community health outreach',
    detail: 'Bringing preventive healthcare directly to underserved rural neighbourhoods.',
  },
  {
    caption: 'Health check-up drive',
    detail: 'Early detection screenings for blood pressure, diabetes, and general wellness.',
  },
  {
    caption: 'Care in the community',
    detail: 'Dedicated volunteers and clinicians working side by side with local families.',
  },
  {
    caption: 'Serving families',
    detail: 'Accessible pediatric, maternal, and elder care guidance under one roof.',
  },
  {
    caption: 'Moments from the field',
    detail: 'Building lasting trust through compassionate, grassroots health initiatives.',
  },
  {
    caption: 'Together for better health',
    detail: 'Empowering communities with health awareness and continuous follow-up support.',
  },
]

// Clean, predictable bento spans without aspect-ratio distortion
const getBentoSpan = (index, total) => {
  const remaining = total - index
  const remainder = total % 7

  if (remainder === 1 && remaining === 1) return 'sm:col-span-2 lg:col-span-4'
  if (remainder === 2 && remaining <= 2) return 'sm:col-span-1 lg:col-span-2'
  if (remainder === 3 && remaining === 1) return 'sm:col-span-2 lg:col-span-2'
  if (remainder === 5 && remaining === 1) return 'sm:col-span-2 lg:col-span-4'
  if (remainder === 6 && remaining === 1) return 'sm:col-span-2 lg:col-span-3'

  const pattern = index % 7
  if (pattern === 0) return 'sm:col-span-2 lg:col-span-2 lg:row-span-2'
  if (pattern === 3) return 'sm:col-span-2 lg:col-span-2'
  if (pattern === 6) return 'sm:col-span-2 lg:col-span-2'
  return 'col-span-1 row-span-1'
}

export default function AboutCampGallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [viewMode, setViewMode] = useState('uniform') // 'uniform' | 'bento' | 'showcase'
  const [showcaseIndex, setShowcaseIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [direction, setDirection] = useState(0)

  const shouldReduceMotion = useReducedMotion()

  const enrichedImages = campImages.map((img, idx) => {
    const meta = campMeta[idx % campMeta.length]
    return {
      ...img,
      ...meta,
    }
  })

  const closeLightbox = useCallback(() => {
    setActiveIndex(null)
    setIsAutoPlaying(false)
  }, [])

  const showPrevious = useCallback(() => {
    setDirection(-1)
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + enrichedImages.length) % enrichedImages.length
    )
  }, [enrichedImages.length])

  const showNext = useCallback(() => {
    setDirection(1)
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % enrichedImages.length
    )
  }, [enrichedImages.length])

  // Auto-play timer for Lightbox or Showcase mode
  useEffect(() => {
    if (!isAutoPlaying) return undefined

    const timer = setInterval(() => {
      if (activeIndex !== null) {
        showNext()
      } else if (viewMode === 'showcase') {
        setShowcaseIndex((prev) => (prev + 1) % enrichedImages.length)
      }
    }, 3600)

    return () => clearInterval(timer)
  }, [isAutoPlaying, activeIndex, viewMode, showNext, enrichedImages.length])

  // Keyboard navigation & scroll lock for Lightbox
  useEffect(() => {
    if (activeIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
      if (event.key === ' ') {
        event.preventDefault()
        setIsAutoPlaying((prev) => !prev)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, closeLightbox, showNext, showPrevious])

  if (!enrichedImages.length) return null

  const activeImage = activeIndex === null ? null : enrichedImages[activeIndex]
  const featuredImage = enrichedImages[showcaseIndex] || enrichedImages[0]

  return (
    <section
      id="camp-gallery"
      aria-label="Moments from our medical camps"
      className="section-glow relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24"
    >
      {/* Ambient background decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 size-96 rounded-full bg-saffron/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-0 size-96 rounded-full bg-forest/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header Section */}
        <div className="mb-9 flex flex-col gap-6 sm:mb-11 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-3.5 py-1.5 shadow-sm">
              <span className="size-1.5 rounded-full bg-saffron" aria-hidden="true" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest">
                Our Camps 
              </span>
            </div>

            <h2 className="font-editorial mt-4 max-w-[640px] text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.05] tracking-[-0.045em] text-forest">
              Moments from the{' '}
              <em className="font-normal text-saffron">ground.</em>
            </h2>

            <p className="mt-4 max-w-[600px] text-sm leading-7 text-ink/70 sm:text-base">
              A glimpse into our free medical camps, health check-ups and community outreach
              programmes — where care reaches the people who need it most.
            </p>
          </div>

          {/* Interactive View & Slideshow Controls */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
            <div
              role="group"
              aria-label="Gallery layout"
              className="inline-flex items-center rounded-full border border-forest/15 bg-white/80 p-1 shadow-sm backdrop-blur-sm"
            >
              <button
                type="button"
                onClick={() => {
                  setViewMode('uniform')
                  setIsAutoPlaying(false)
                }}
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  viewMode === 'uniform'
                    ? 'bg-forest text-white shadow-sm'
                    : 'text-forest/75 hover:text-forest'
                }`}
              >
                <Grid className="size-3.5" />
                Uniform Cards
              </button>

              {/* <button
                type="button"
                onClick={() => {
                  setViewMode('bento')
                  setIsAutoPlaying(false)
                }}
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  viewMode === 'bento'
                    ? 'bg-forest text-white shadow-sm'
                    : 'text-forest/75 hover:text-forest'
                }`}
              >
                <LayoutGrid className="size-3.5" />
                Bento Grid
              </button> */}

              <button
                type="button"
                onClick={() => setViewMode('showcase')}
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  viewMode === 'showcase'
                    ? 'bg-forest text-white shadow-sm'
                    : 'text-forest/75 hover:text-forest'
                }`}
              >
                <Rows3 className="size-3.5" />
                Spotlight
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveIndex(0)
                setIsAutoPlaying(true)
              }}
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-4 py-2 text-xs font-bold uppercase tracking-wider text-forest shadow-sm transition hover:bg-saffron/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              <Play className="size-3.5 fill-current" />
              Play Story
            </button>
          </div>
        </div>

        {/* VIEW 1 & 2: Uniform Card Grid OR Balanced Bento Grid */}
        {viewMode !== 'showcase' ? (
          <LayoutGroup>
            <motion.div
              layout
              className={
                viewMode === 'uniform'
                  ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'
                  : 'grid grid-cols-1 gap-4 sm:auto-rows-[240px] sm:grid-cols-2 sm:gap-5 lg:auto-rows-[230px] lg:grid-cols-4'
              }
            >
              <AnimatePresence mode="popLayout">
                {enrichedImages.map((image, idx) => {
                  const spanClasses =
                    viewMode === 'bento'
                      ? `h-[260px] sm:h-full ${getBentoSpan(idx, enrichedImages.length)}`
                      : 'aspect-[4/3] w-full'

                  return (
                    <motion.figure
                      layout
                      key={image.name}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 20, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{
                        duration: 0.4,
                        delay: shouldReduceMotion ? 0 : Math.min(idx, 8) * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={spanClasses}
                    >
                      <motion.button
                        type="button"
                        onClick={() => setActiveIndex(image.id)}
                        aria-label={`Open photograph: ${image.caption}`}
                        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="group relative block size-full overflow-hidden rounded-2xl bg-[#062820] text-left shadow-[0_10px_26px_rgba(7,62,51,0.08)] ring-1 ring-forest/10 transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(7,62,51,0.20)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron sm:rounded-[24px]"
                      >
                        {/* Edge-to-edge uniform cover image (eliminates black bars) */}
                        <img
                          src={image.src}
                          alt={`${image.caption} — Kalima Foundation (R.)`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Consistent multi-stop dark gradient for crisp text legibility */}
                        <span
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#021914]/90 via-[#021914]/25 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95"
                          aria-hidden="true"
                        />

                        {/* Bottom Content Bar */}
                        <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-4 sm:p-5">
                          <span className="flex items-end justify-between gap-3">
                            {viewMode !== 'uniform' && (
                              <span className="min-w-0 flex-1 text-left">
                                <span className="block truncate text-base font-semibold tracking-tight text-white sm:text-lg">
                                  {image.caption}
                                </span>
                              </span>
                            )}

                            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-saffron group-hover:bg-saffron group-hover:text-forest">
                              <ArrowUpRight className="size-4" aria-hidden="true" />
                            </span>
                          </span>
                        </span>

                        {/* Subtle inner border highlight on hover */}
                        <span
                          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15 transition-all duration-300 group-hover:ring-2 group-hover:ring-saffron/70 sm:rounded-[24px]"
                          aria-hidden="true"
                        />
                      </motion.button>
                    </motion.figure>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        ) : (
          /* VIEW 3: Interactive Spotlight / Filmstrip Stage */
          <div className="overflow-hidden rounded-3xl border border-forest/15 bg-[#042820] p-4 text-white shadow-2xl sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              {/* Main Featured Stage */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#021914] lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={featuredImage.name}
                    src={featuredImage.src}
                    alt={featuredImage.caption}
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="size-full object-cover object-center"
                  />
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                <button
                  type="button"
                  onClick={() => setActiveIndex(featuredImage.id)}
                  aria-label="Inspect full screen"
                  className="absolute top-4 right-4 grid size-10 place-items-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-md transition hover:bg-saffron hover:text-forest"
                >
                  <Expand className="size-4" />
                </button>
              </div>

              {/* Story Details & Controls */}
              <div className="flex flex-col justify-between space-y-6 lg:col-span-4 lg:px-2">
                <div>
                  <h3 className="font-editorial text-2xl leading-tight text-white sm:text-3xl">
                    {featuredImage.caption}
                  </h3>
                  <p className="mt-3 max-w-prose text-sm leading-7 text-white/75">
                    {featuredImage.detail}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      setShowcaseIndex(
                        (prev) => (prev - 1 + enrichedImages.length) % enrichedImages.length
                      )
                    }
                    aria-label="Previous spotlight photo"
                    className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-forest"
                  >
                    <ChevronLeft className="size-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setShowcaseIndex((prev) => (prev + 1) % enrichedImages.length)
                    }
                    aria-label="Next spotlight photo"
                    className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-forest"
                  >
                    <ChevronRight className="size-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsAutoPlaying((prev) => !prev)}
                    className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-saffron hover:text-forest"
                  >
                    {isAutoPlaying ? (
                      <>
                        <Pause className="size-3.5 fill-current" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="size-3.5 fill-current" />
                        Autoplay
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Thumbnail Filmstrip */}
            <div className="mt-6 flex gap-3 overflow-x-auto pt-2 pb-1">
              {enrichedImages.map((img, idx) => {
                const isCurrent = idx === showcaseIndex
                return (
                  <button
                    key={img.name}
                    type="button"
                    onClick={() => setShowcaseIndex(idx)}
                    className={`group relative h-16 w-24 shrink-0 overflow-hidden rounded-xl transition-all duration-300 sm:h-20 sm:w-28 ${
                      isCurrent
                        ? 'scale-105 ring-2 ring-saffron ring-offset-2 ring-offset-[#042820]'
                        : 'opacity-55 hover:opacity-90'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="size-full object-cover"
                    />
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal (Preserves full uncropped aspect ratio when clicked) */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Camp photograph viewer"
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#021914]/95 backdrop-blur-xl"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
            onClick={closeLightbox}
          >
            {/* Lightbox Top Bar */}
            <div
              className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3.5 sm:px-8 sm:py-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">{activeImage.caption}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying((prev) => !prev)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
                    isAutoPlaying
                      ? 'border-saffron bg-saffron text-forest'
                      : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="size-3.5 fill-current" />
                      Playing
                    </>
                  ) : (
                    <>
                      <Play className="size-3.5 fill-current" />
                      Slideshow
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Main Interactive Image Stage */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-4 sm:px-16">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  closeLightbox()
                }}
                aria-label="Close photo and return to gallery"
                className="absolute top-4 right-4 z-30 grid size-11 place-items-center rounded-full border border-white/30 bg-[#021914]/80 text-white shadow-xl backdrop-blur-md transition hover:border-saffron hover:bg-saffron hover:text-forest sm:top-6 sm:right-8"
              >
                <X className="size-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  showPrevious()
                }}
                aria-label="Show previous photograph"
                className="absolute left-4 z-20 hidden size-12 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-saffron hover:text-forest sm:grid"
              >
                <ChevronLeft className="size-5" />
              </button>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={activeImage.name}
                  src={activeImage.src}
                  alt={activeImage.caption}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) showNext()
                    if (info.offset.x > 60) showPrevious()
                  }}
                  className="max-h-full max-w-full cursor-grab rounded-xl object-contain shadow-2xl active:cursor-grabbing sm:rounded-2xl"
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: direction >= 0 ? 40 : -40, scale: 0.96 }
                  }
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: direction >= 0 ? -40 : 40, scale: 0.96 }
                  }
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  onClick={(event) => event.stopPropagation()}
                />
              </AnimatePresence>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  showNext()
                }}
                aria-label="Show next photograph"
                className="absolute right-4 z-20 hidden size-12 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-saffron hover:text-forest sm:grid"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            {/* Lightbox Bottom Thumbnail Dock */}
            <div
              className="border-t border-white/10 bg-black/30 px-4 py-3 sm:px-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mx-auto flex max-w-4xl items-center justify-center gap-2.5 overflow-x-auto py-1">
                {enrichedImages.map((img, idx) => {
                  const isSelected = idx === activeIndex
                  return (
                    <button
                      key={img.name}
                      type="button"
                      onClick={() => {
                        setDirection(idx > activeIndex ? 1 : -1)
                        setActiveIndex(idx)
                      }}
                      aria-label={`View ${img.caption}`}
                      className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg transition-all duration-200 sm:h-14 sm:w-20 ${
                        isSelected
                          ? 'scale-105 ring-2 ring-saffron'
                          : 'opacity-45 hover:opacity-85'
                      }`}
                    >
                      <img src={img.src} alt="" className="size-full object-cover" />
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
