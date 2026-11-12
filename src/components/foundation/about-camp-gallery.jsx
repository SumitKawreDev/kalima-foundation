import { useCallback, useEffect, useState } from 'react'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  LayoutGrid,
  Pause,
  Play,
  Rows3,
  Sparkles,
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
    tag: 'Medical Care',
    detail: 'On-site doctor consultations, vital screenings, and free medicine distribution.',
  },
  {
    caption: 'Community health outreach',
    tag: 'Outreach',
    detail: 'Bringing preventive healthcare directly to underserved rural neighbourhoods.',
  },
  {
    caption: 'Health check-up drive',
    tag: 'Diagnostics',
    detail: 'Early detection screenings for blood pressure, diabetes, and general wellness.',
  },
  {
    caption: 'Care in the community',
    tag: 'Medical Care',
    detail: 'Dedicated volunteers and clinicians working side by side with local families.',
  },
  {
    caption: 'Serving families',
    tag: 'Family Health',
    detail: 'Accessible pediatric, maternal, and elder care guidance under one roof.',
  },
  {
    caption: 'Moments from the field',
    tag: 'Outreach',
    detail: 'Building lasting trust through compassionate, grassroots health initiatives.',
  },
  {
    caption: 'Together for better health',
    tag: 'Family Health',
    detail: 'Empowering communities with health awareness and continuous follow-up support.',
  },
]

const CATEGORIES = ['All', 'Medical Care', 'Outreach', 'Diagnostics', 'Family Health']

// Repeating editorial bento pattern that scales cleanly for any number of images
const getBentoSpan = (index) => {
  const pattern = index % 7
  if (pattern === 0) return 'sm:col-span-2 lg:col-span-2 lg:row-span-2'
  if (pattern === 3) return 'sm:col-span-2 lg:col-span-2'
  if (pattern === 6) return 'sm:col-span-2 lg:col-span-2'
  return 'col-span-1 row-span-1'
}

export default function AboutCampGallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [selectedTag, setSelectedTag] = useState('All')
  const [viewMode, setViewMode] = useState('bento') // 'bento' | 'showcase'
  const [showcaseIndex, setShowcaseIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [direction, setDirection] = useState(0)

  const shouldReduceMotion = useReducedMotion()

  const enrichedImages = campImages.map((img, idx) => {
    const meta = campMeta[idx % campMeta.length]
    return {
      ...img,
      ...meta,
    }
  })

  const filteredImages =
    selectedTag === 'All'
      ? enrichedImages
      : enrichedImages.filter((img) => img.tag === selectedTag)

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
        <div className="mb-8 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-forest/5 px-3.5 py-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
                Our Camps 
              </span>
            </div>

            <h2 className="font-editorial mt-4 max-w-[640px] text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.05] tracking-[-0.045em] text-forest">
              Moments from the{' '}
              <em className="font-normal text-saffron">ground.</em>
            </h2>

            <p className="mt-4 max-w-[600px] text-sm leading-7 text-ink/75 sm:text-base">
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
              </button>

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

        {/* Category Filter Pills (Active in Bento View) */}
        {/* {viewMode === 'bento' && (
          <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((category) => {
              const isSelected = selectedTag === category
              const count =
                category === 'All'
                  ? enrichedImages.length
                  : enrichedImages.filter((item) => item.tag === category).length

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedTag(category)}
                  className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    isSelected
                      ? 'text-white'
                      : 'border border-forest/15 bg-white/60 text-forest/80 hover:border-forest/35 hover:bg-white'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full bg-forest shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {category}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-forest/10 text-forest/70'
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        )} */}

        {/* VIEW 1: Animated Bento Grid */}
        {viewMode === 'bento' ? (
          <LayoutGroup>
            <motion.div
              layout
              className="grid grid-cols-1 gap-4 sm:auto-rows-[230px] sm:grid-cols-2 sm:gap-5 lg:auto-rows-[215px] lg:grid-cols-4 xl:auto-rows-[235px]"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, idx) => {
                  const isDimmed = hoveredIndex !== null && hoveredIndex !== image.id

                  return (
                    <motion.figure
                      layout
                      key={image.name}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
                      animate={{
                        opacity: isDimmed ? 0.65 : 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{
                        duration: 0.45,
                        delay: shouldReduceMotion ? 0 : Math.min(idx, 8) * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onMouseEnter={() => setHoveredIndex(image.id)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`h-[260px] sm:h-full ${
                        selectedTag === 'All' ? getBentoSpan(idx) : 'col-span-1 row-span-1'
                      }`}
                    >
                      <motion.button
                        type="button"
                        onClick={() => setActiveIndex(image.id)}
                        aria-label={`Open photograph: ${image.caption}`}
                        whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="group relative block size-full overflow-hidden rounded-2xl bg-forest/10 text-left shadow-[0_12px_32px_rgba(7,62,51,0.12)] ring-1 ring-forest/10 transition-shadow duration-500 hover:shadow-[0_24px_54px_rgba(7,62,51,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron sm:rounded-3xl"
                      >
                        {/* Image with Ken Burns zoom effect on hover */}
                        <img
                          src={image.src}
                          alt={`${image.caption} — Kalima Foundation (R.)`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        {/* Multi-layered rich gradient overlay */}
                        <span
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03231c]/95 via-[#03231c]/35 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95"
                          aria-hidden="true"
                        />

                        {/* Bottom Bar: Caption, Expandable Description & Action Icon */}
                        <span className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 sm:p-5">
                          <span className="flex items-end justify-between gap-3">
                            <span className="min-w-0 text-left">
                              <span className="mt-1 block truncate text-base font-semibold text-white sm:text-lg">
                                {image.caption}
                              </span>
                            </span>

                            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-saffron group-hover:bg-saffron group-hover:text-forest">
                              <ArrowUpRight className="size-4" aria-hidden="true" />
                            </span>
                          </span>

                        </span>

                        {/* Inner glowing border on hover */}
                        <span
                          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-2 group-hover:ring-saffron/60 sm:rounded-3xl"
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
          /* VIEW 2: Interactive Spotlight / Filmstrip Stage */
          <div className="overflow-hidden rounded-3xl border border-forest/15 bg-[#042820] p-4 text-white shadow-2xl sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              {/* Main Featured Stage */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black/40 lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={featuredImage.name}
                    src={featuredImage.src}
                    alt={featuredImage.caption}
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="size-full object-cover"
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
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">
                    Field Spotlight
                  </p>
                  <h3 className="font-editorial mt-2 text-2xl leading-tight text-white sm:text-3xl">
                    {featuredImage.caption}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
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
                        ? 'ring-2 ring-saffron ring-offset-2 ring-offset-[#042820] scale-105'
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

      {/* Enhanced Lightbox Modal with Thumbnails, Swipe & Slideshow */}
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
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-white">{activeImage.caption}</p>
                  <p className="text-xs text-white/60">{activeImage.detail}</p>
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

            {/* Main Interactive Image Stage (Supports Touch/Mouse Drag Swipe) */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-4 sm:px-16">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  closeLightbox()
                }}
                aria-label="Close photo and return to Moments from the ground"
                title="Back to Moments from the ground"
                className="absolute right-4 top-4 z-30 grid size-12 place-items-center rounded-full border-2 border-white/80 bg-[#021914] text-white shadow-xl transition hover:border-saffron hover:bg-saffron hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8 sm:top-6"
              >
                <X className="size-6" aria-hidden="true" />
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
