
// import React, { useCallback, useEffect, useRef, useState } from 'react'
// import {
//   Users,
//   GraduationCap,
//   Landmark,
//   ArrowLeft,
//   ArrowRight,
//   User,
// } from 'lucide-react'
// import { motion, useReducedMotion } from 'framer-motion'

// // ============================================================
// // LEADERSHIP IMAGE IMPORTS
// // ============================================================

// const leadershipImages = import.meta.glob(
//   '../../assets/leadership/*.{png,jpg,jpeg,webp,avif}',
//   {
//     eager: true,
//     import: 'default',
//   }
// )

// const getLeadershipImage = (fileName) => {
//   if (!fileName) return ''

//   const imagePath = Object.keys(leadershipImages).find((path) =>
//     path.endsWith(`/${fileName}`)
//   )

//   return imagePath ? leadershipImages[imagePath] : ''
// }

// // ============================================================
// // LEADERSHIP DATA
// // ============================================================

// const BOARDS_DATA = [
//   {
//     id: 'trustees',
//     title: 'Board of Trustees',
//     description:
//       "The core leadership guiding the foundation's mission and long-term vision.",
//     icon: Users,
//     badgeStyle: 'pill',
//     members: [
//       {
//         id: 't-1',
//         name: 'Dr. Sibgath Ulla Sharieff R',
//         role: 'President / Author',
//         image: 'sibgath-ulla-sharieff.png',
//       },
//       {
//         id: 't-2',
//         name: 'Dr. Sayed Moinuddin Abdul Gani',
//         role: 'Vice President',
//         image: 'sayed-moinuddin.png',
//       },
//       {
//         id: 't-3',
//         name: 'Mr. Divakara D Shetty',
//         role: 'General Secretary',
//         image: 'divakara-shetty.png',
//       },
//       {
//         id: 't-4',
//         name: 'Mr. Nagendra Shanbhag',
//         role: 'Joint Secretary',
//         image: 'nagendra-shanbhag.png',
//       },
//       {
//         id: 't-5',
//         name: 'Dr. Akhil Manoj',
//         role: 'Chief Executive Officer',
//         image: 'akhil-manoj.png',
//       },
//     ],
//   },
//   {
//     id: 'advisors',
//     title: 'Board of Advisors',
//     description:
//       'Esteemed experts providing strategic guidance and counsel.',
//     icon: GraduationCap,
//     badgeStyle: 'text',
//     members: [
//       {
//         id: 'a-1',
//         name: 'Dr. G M Kanthi',
//         role: null,
//         image: 'gm-kanthi.png',
//       },
//       {
//         id: 'a-2',
//         name: 'Dr. Channabasavarajappa',
//         role: null,
//         image: 'channabasavarajappa.png',
//       },
//       {
//         id: 'a-3',
//         name: 'Dr. A Revanna Swamy',
//         role: 'Mauritius',
//         image: 'revanna-swamy.png',
//       },
//       {
//         id: 'a-4',
//         name: 'Dr. Farha Ansari',
//         role: 'Maldives',
//         image: 'farha-ansari.png',
//       },
//     ],
//   },
//   {
//     id: 'directors',
//     title: 'Board of Directors',
//     description:
//       "A diverse team of professionals driving the foundation's initiatives and governance.",
//     icon: Landmark,
//     badgeStyle: 'text',
//     members: [
//       {
//         id: 'd-1',
//         name: 'Dr. Vijaykumar Halli',
//         role: null,
//         image: 'vijaykumar-halli.png',
//       },
//       {
//         id: 'd-2',
//         name: 'Dr. Murgesh Sunkad',
//         role: null,
//         image: 'murgesh-sunkad.png',
//       },
//       {
//         id: 'd-3',
//         name: 'Dr. HariKrishna DS',
//         role: null,
//         image: 'harikrishna-ds.png',
//       },
//       {
//         id: 'd-4',
//         name: 'Dr. Anamika Das',
//         role: null,
//         image: 'anamika-das.png',
//       },
//       {
//         id: 'd-5',
//         name: 'Dr. Namira Sheikh',
//         role: null,
//         image: 'namira-sheikh.png',
//       },
//       {
//         id: 'd-6',
//         name: 'Dr. Azma Ansar',
//         role: null,
//         image: 'azma-ansar.png',
//       },
//       {
//         id: 'd-7',
//         name: 'Mr. Ramananda Shirva',
//         role: null,
//         image: 'ramananda-shirva.png',
//       },
//       {
//         id: 'd-8',
//         name: 'Mr. Asrar Ahmed Katingeri',
//         role: null,
//         image: 'asrar-ahmed.png',
//       },
//       {
//         id: 'd-9',
//         name: 'Mr. Habibur Rahman Jemai',
//         role: null,
//         image: 'habibur-rahman.png',
//       },
//       {
//         id: 'd-10',
//         name: 'Mr. Farhathunnisa',
//         role: null,
//         image: 'farhathunnisa.png',
//       },
//       {
//         id: 'd-11',
//         name: 'Mrs. Shabana Winfinith',
//         role: null,
//         image: 'shabana-winfinith.png',
//       },
//       {
//         id: 'd-12',
//         name: 'Mrs. Farhana Razvi',
//         role: null,
//         image: 'farhana-razvi.png',
//       },
//     ],
//   },
// ]

// // ============================================================
// // HELPERS
// // ============================================================

// const getInitials = (name) => {
//   const cleaned = name.replace(
//     /^(Dr\.|Mr\.|Mrs\.|Ms\.)\s*/i,
//     ''
//   )

//   const parts = cleaned.trim().split(/\s+/)

//   if (parts.length >= 2) {
//     return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
//   }

//   return cleaned.slice(0, 2).toUpperCase()
// }

// // ============================================================
// // MEMBER CARD
// // ============================================================

// function MemberCard({ member, badgeStyle, shouldReduceMotion }) {
//   const [imgError, setImgError] = useState(false)

//   const imageUrl = getLeadershipImage(member.image)

//   return (
//     <motion.div
//       whileHover={shouldReduceMotion ? undefined : { y: -5 }}
//       transition={{ duration: 0.3, ease: 'easeOut' }}
//       className="group h-full w-full"
//     >
//       <div className="relative flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.09] p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition-all duration-300 hover:border-saffron/50 hover:bg-white/[0.14] hover:shadow-[0_14px_35px_rgba(0,0,0,0.18)]">

//         {/* Portrait */}
//         <div className="relative mb-3 aspect-[4/3.8] w-full overflow-hidden rounded-xl bg-white/10">
//           {!imgError && imageUrl ? (
//             <img
//               src={imageUrl}
//               alt={member.name}
//               loading="lazy"
//               decoding="async"
//               onError={() => setImgError(true)}
//               className={`h-full w-full object-cover object-top transition-transform duration-500 ease-out ${
//                 shouldReduceMotion ? '' : 'group-hover:scale-105'
//               }`}
//             />
//           ) : (
//             <div className="flex h-full w-full flex-col items-center justify-center bg-white/10 text-white/80">
//               <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
//                 <span className="font-editorial text-lg font-bold text-saffron">
//                   {getInitials(member.name)}
//                 </span>
//               </div>

//               <User className="h-4 w-4 text-white/40" />
//             </div>
//           )}

//           {/* Image Hover Overlay */}
//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//         </div>

//         {/* Member Details */}
//         <div className="flex min-h-[76px] flex-grow flex-col items-center justify-center px-1.5 pb-1.5 text-center">
//           <h4 className="line-clamp-2 font-editorial text-[15px] font-bold leading-snug tracking-tight text-white sm:text-base">
//             {member.name}
//           </h4>

//           {member.role && (
//             <div className="mt-2 flex w-full justify-center">
//               {badgeStyle === 'pill' ? (
//                 <span className="inline-block w-full max-w-[95%] truncate rounded-full bg-saffron/20 px-2.5 py-1 text-[11px] font-semibold text-saffron">
//                   {member.role}
//                 </span>
//               ) : (
//                 <span className="text-xs font-medium tracking-wide text-white/65">
//                   {member.role}
//                 </span>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// // ============================================================
// // BOARD CAROUSEL
// // ============================================================

// function BoardRow({ board, shouldReduceMotion }) {
//   const scrollContainerRef = useRef(null)

//   const [activeIndex, setActiveIndex] = useState(0)
//   const [canScrollPrev, setCanScrollPrev] = useState(false)
//   const [canScrollNext, setCanScrollNext] = useState(false)
//   const [totalPages, setTotalPages] = useState(board.members.length)

//   const IconComponent = board.icon

//   // Check whether current viewport is mobile
//   const isMobile = () =>
//     typeof window !== 'undefined' &&
//     window.matchMedia('(max-width: 639px)').matches

//   // Update carousel states
//   const updateScrollMetrics = useCallback(() => {
//     const container = scrollContainerRef.current
//     if (!container) return

//     const cards = Array.from(
//       container.querySelectorAll('[data-carousel-card]')
//     )

//     if (!cards.length) return

//     const currentScroll = container.scrollLeft
//     const maxScroll = Math.max(
//       0,
//       container.scrollWidth - container.clientWidth
//     )

//     setCanScrollPrev(currentScroll > 8)
//     setCanScrollNext(currentScroll < maxScroll - 8)

//     // Find the nearest card to the current scroll position
//     const firstCardLeft = cards[0].offsetLeft

//     let nearestIndex = 0
//     let nearestDistance = Infinity

//     cards.forEach((card, index) => {
//       const cardPosition = card.offsetLeft - firstCardLeft
//       const distance = Math.abs(cardPosition - currentScroll)

//       if (distance < nearestDistance) {
//         nearestDistance = distance
//         nearestIndex = index
//       }
//     })

//     setActiveIndex(nearestIndex)

//     // Mobile: one pagination dot per member
//     if (isMobile()) {
//       setTotalPages(cards.length)
//       return
//     }

//     // Desktop/tablet: preserve multiple visible cards
//     const containerRect = container.getBoundingClientRect()

//     const visibleCards = cards.filter((card) => {
//       const rect = card.getBoundingClientRect()

//       return (
//         rect.right > containerRect.left + 8 &&
//         rect.left < containerRect.right - 8
//       )
//     })

//     const visibleCount = Math.max(1, visibleCards.length)
//     const pages = Math.max(1, cards.length - visibleCount + 1)

//     setTotalPages(pages)
//   }, [])

//   // Resize observer
//   useEffect(() => {
//     const container = scrollContainerRef.current
//     if (!container) return

//     updateScrollMetrics()

//     const resizeObserver = new ResizeObserver(() => {
//       updateScrollMetrics()
//     })

//     resizeObserver.observe(container)

//     const cards = container.querySelectorAll('[data-carousel-card]')
//     cards.forEach((card) => resizeObserver.observe(card))

//     window.addEventListener('resize', updateScrollMetrics)

//     return () => {
//       resizeObserver.disconnect()
//       window.removeEventListener('resize', updateScrollMetrics)
//     }
//   }, [updateScrollMetrics])

//   // Navigate one member on mobile, preserve desktop behavior
//   const scrollByStep = (direction) => {
//     const container = scrollContainerRef.current
//     if (!container) return

//     const cards = Array.from(
//       container.querySelectorAll('[data-carousel-card]')
//     )

//     if (!cards.length) return

//     if (isMobile()) {
//       const nextIndex = Math.max(
//         0,
//         Math.min(activeIndex + direction, cards.length - 1)
//       )

//       scrollToPage(nextIndex)
//       return
//     }

//     const firstCard = cards[0]
//     const cardWidth = firstCard.getBoundingClientRect().width
//     const computedStyle = window.getComputedStyle(container)
//     const gap = parseFloat(computedStyle.columnGap) || 16

//     container.scrollBy({
//       left: (cardWidth + gap) * direction,
//       behavior: shouldReduceMotion ? 'auto' : 'smooth',
//     })
//   }

//   // Navigate to selected card
//   const scrollToPage = (index) => {
//     const container = scrollContainerRef.current
//     if (!container) return

//     const cards = Array.from(
//       container.querySelectorAll('[data-carousel-card]')
//     )

//     const card = cards[index]
//     if (!card) return

//     const firstCardLeft = cards[0].offsetLeft
//     const targetPosition = card.offsetLeft - firstCardLeft

//     container.scrollTo({
//       left: targetPosition,
//       behavior: shouldReduceMotion ? 'auto' : 'smooth',
//     })
//   }

//   return (
//     <div className="rounded-3xl border border-white/15 bg-forest p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:p-7 lg:p-9">

//       <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-10">

//         {/* Board Introduction */}
//         <div className="flex w-full shrink-0 flex-col justify-center lg:w-[250px] xl:w-[285px]">

//           <div className="mb-3 flex items-center gap-3.5">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-saffron">
//               <IconComponent className="h-6 w-6 stroke-[2]" />
//             </div>

//             <div>
//               <h3 className="font-editorial text-xl font-bold leading-tight text-white sm:text-2xl">
//                 {board.title}
//               </h3>

//               <div className="mt-2 h-1 w-8 rounded-full bg-saffron" />
//             </div>
//           </div>

//           <p className="mt-1 text-sm leading-relaxed text-white/75 sm:text-[15px]">
//             {board.description}
//           </p>

//           <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-saffron">
//             {board.members.length} Members
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative min-w-0 flex-1">

//           <div className="relative flex items-center">

//             {/* Desktop Previous Arrow */}
//             <motion.button
//               type="button"
//               onClick={() => scrollByStep(-1)}
//               disabled={!canScrollPrev}
//               whileHover={
//                 shouldReduceMotion || !canScrollPrev
//                   ? undefined
//                   : { scale: 1.08 }
//               }
//               whileTap={
//                 shouldReduceMotion || !canScrollPrev
//                   ? undefined
//                   : { scale: 0.95 }
//               }
//               aria-label={`Previous ${board.title} members`}
//               className={`absolute -left-3 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-forest-deep text-white shadow-md transition-all duration-200 sm:flex lg:-left-4 ${
//                 canScrollPrev
//                   ? 'cursor-pointer hover:border-saffron hover:text-saffron'
//                   : 'cursor-not-allowed opacity-35'
//               }`}
//             >
//               <ArrowLeft className="h-4 w-4" />
//             </motion.button>

//             {/* Horizontal Scroll Track */}
//             <div
//               ref={scrollContainerRef}
//               onScroll={updateScrollMetrics}
//               className="no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-0 overflow-x-auto px-0 py-2 sm:gap-4 sm:px-1"
//               style={{
//                 scrollbarWidth: 'none',
//                 msOverflowStyle: 'none',
//                 scrollSnapStop: 'always',
//               }}
//             >
//               {board.members.map((member) => (
//                 <div
//                   key={member.id}
//                   data-carousel-card
//                   className="w-full shrink-0 snap-center sm:w-[195px] sm:snap-start md:w-[200px]"
//                 >
//                   <MemberCard
//                     member={member}
//                     badgeStyle={board.badgeStyle}
//                     shouldReduceMotion={shouldReduceMotion}
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Desktop Next Arrow */}
//             <motion.button
//               type="button"
//               onClick={() => scrollByStep(1)}
//               disabled={!canScrollNext}
//               whileHover={
//                 shouldReduceMotion || !canScrollNext
//                   ? undefined
//                   : { scale: 1.08 }
//               }
//               whileTap={
//                 shouldReduceMotion || !canScrollNext
//                   ? undefined
//                   : { scale: 0.95 }
//               }
//               aria-label={`Next ${board.title} members`}
//               className={`absolute -right-3 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-forest-deep text-white shadow-md transition-all duration-200 sm:flex lg:-right-4 ${
//                 canScrollNext
//                   ? 'cursor-pointer hover:border-saffron hover:text-saffron'
//                   : 'cursor-not-allowed opacity-35'
//               }`}
//             >
//               <ArrowRight className="h-4 w-4" />
//             </motion.button>
//           </div>

//           {/* Pagination + Mobile Controls */}
//           <div className="mt-4 flex items-center justify-center gap-3">

//             {/* Mobile Previous Arrow */}
//             <button
//               type="button"
//               onClick={() => scrollByStep(-1)}
//               disabled={!canScrollPrev}
//               aria-label={`Previous ${board.title} members`}
//               className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition-all duration-200 hover:border-saffron hover:text-saffron sm:hidden ${
//                 canScrollPrev
//                   ? 'opacity-100'
//                   : 'cursor-not-allowed opacity-30'
//               }`}
//             >
//               <ArrowLeft className="h-4 w-4" />
//             </button>

//             {/* Pagination Dots */}
//             <div className="flex max-w-[65%] items-center justify-center gap-1.5 overflow-hidden">
//               {Array.from({ length: totalPages }).map((_, index) => (
//                 <button
//                   key={index}
//                   type="button"
//                   aria-label={`Go to member ${index + 1} in ${board.title}`}
//                   aria-current={activeIndex === index ? 'true' : undefined}
//                   onClick={() => scrollToPage(index)}
//                   className={`h-2 shrink-0 rounded-full transition-all duration-300 ${
//                     activeIndex === index
//                       ? 'w-6 bg-saffron'
//                       : 'w-2 bg-white/30 hover:bg-white/60'
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Mobile Next Arrow */}
//             <button
//               type="button"
//               onClick={() => scrollByStep(1)}
//               disabled={!canScrollNext}
//               aria-label={`Next ${board.title} members`}
//               className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition-all duration-200 hover:border-saffron hover:text-saffron sm:hidden ${
//                 canScrollNext
//                   ? 'opacity-100'
//                   : 'cursor-not-allowed opacity-30'
//               }`}
//             >
//               <ArrowRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ============================================================
// // MAIN LEADERSHIP SECTION
// // ============================================================

// export default function LeadershipSection() {
//   const shouldReduceMotion = useReducedMotion()

//   return (
//     <section
//       id="leadership"
//       className="relative w-full overflow-hidden bg-white py-20 lg:py-28"
//     >
//       <style>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div data-reveal="left" className="mb-16 lg:mb-20">
//           <p className="eyebrow">OUR LEADERSHIP</p>

//           <h2 className="font-editorial mt-5 max-w-[690px] text-[clamp(2.7rem,5vw,4rem)] leading-[1.06] tracking-[-0.045em] text-forest">
//             Foundation{' '}
//             <em className="font-normal text-saffron">Leadership.</em>
//           </h2>

//           <p className="mt-3 max-w-[650px] text-sm leading-6 text-ink/75">
//             Meet the dedicated leaders, advisors and professionals whose
//             experience and commitment guide our foundation towards a
//             meaningful and lasting impact.
//           </p>
//         </div>

//         {/* Board Rows */}
//         <div className="flex flex-col gap-7 lg:gap-9">
//           {BOARDS_DATA.map((board, index) => (
//             <motion.div
//               key={board.id}
//               initial={
//                 shouldReduceMotion ? false : { opacity: 0, y: 24 }
//               }
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: '-60px' }}
//               transition={{
//                 duration: 0.55,
//                 delay: shouldReduceMotion ? 0 : index * 0.12,
//                 ease: 'easeOut',
//               }}
//             >
//               <BoardRow
//                 board={board}
//                 shouldReduceMotion={shouldReduceMotion}
//               />
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }


import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Users,
  GraduationCap,
  Landmark,
  ArrowLeft,
  ArrowRight,
  User,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

// ============================================================
// LEADERSHIP IMAGES
// ============================================================

const leadershipImages = import.meta.glob(
  '../../assets/leadership/*.{png,jpg,jpeg,webp,avif}',
  {
    eager: true,
    import: 'default',
  }
)

const getLeadershipImage = (fileName) => {
  if (!fileName) return ''

  const imagePath = Object.keys(leadershipImages).find((path) =>
    path.endsWith(`/${fileName}`)
  )

  return imagePath ? leadershipImages[imagePath] : ''
}

// ============================================================
// LEADERSHIP DATA
// ============================================================

const BOARDS_DATA = [
  {
    id: 'trustees',
    title: 'Board of Trustees',
    description:
      "The core leadership guiding the foundation's mission and long-term vision.",
    icon: Users,
    badgeStyle: 'pill',
    members: [
      { id: 't-1', name: 'Dr. Sibgath Ulla Sharieff R', role: 'President / Author', image: 'sibgath-ulla-sharieff.png' },
      { id: 't-2', name: 'Dr. Sayed Moinuddin Abdul Gani', role: 'Vice President', image: 'sayed-moinuddin.png' },
      { id: 't-3', name: 'Mr. Divakara D Shetty', role: 'General Secretary', image: 'divakara-shetty.png' },
      { id: 't-4', name: 'Mr. Nagendra Shanbhag', role: 'Joint Secretary', image: 'nagendra-shanbhag.png' },
      { id: 't-5', name: 'Dr. Akhil Manoj', role: 'Chief Executive Officer', image: 'akhil-manoj.png' },
    ],
  },
  {
    id: 'advisors',
    title: 'Board of Advisors',
    description:
      'Esteemed experts providing strategic guidance and counsel.',
    icon: GraduationCap,
    badgeStyle: 'text',
    members: [
      { id: 'a-1', name: 'Dr. G M Kanthi', role: null, image: 'gm-kanthi.png' },
      { id: 'a-2', name: 'Dr. Channabasavarajappa', role: null, image: 'channabasavarajappa.png' },
      { id: 'a-3', name: 'Dr. A Revanna Swamy', role: 'Mauritius', image: 'revanna-swamy.png' },
      { id: 'a-4', name: 'Dr. Farha Ansari', role: 'Maldives', image: 'farha-ansari.png' },
    ],
  },
  {
    id: 'directors',
    title: 'Board of Directors',
    description:
      "A diverse team of professionals driving the foundation's initiatives and governance.",
    icon: Landmark,
    badgeStyle: 'text',
    members: [
      { id: 'd-1', name: 'Dr. Vijaykumar Halli', role: null, image: 'vijaykumar-halli.png' },
      { id: 'd-2', name: 'Dr. Murgesh Sunkad', role: null, image: 'murgesh-sunkad.png' },
      { id: 'd-3', name: 'Dr. HariKrishna DS', role: null, image: 'harikrishna-ds.png' },
      { id: 'd-4', name: 'Dr. Anamika Das', role: null, image: 'anamika-das.png' },
      { id: 'd-5', name: 'Dr. Namira Sheikh', role: null, image: 'namira-sheikh.png' },
      { id: 'd-6', name: 'Dr. Azma Andar', role: null, image: 'azma-ansar.png' },
      { id: 'd-7', name: 'Mr. Ramananda Shirva', role: null, image: 'ramananda-shirva.png' },
      { id: 'd-8', name: 'Mr. Asrar Ahmed Katingeri', role: null, image: 'asrar-ahmed.png' },
      { id: 'd-9', name: 'Mr. Habibur Rahman Jemai', role: null, image: 'habibur-rahman.png' },
      { id: 'd-10', name: 'Mr. Farhathunnisa', role: null, image: 'farhathunnisa.png' },
      { id: 'd-11', name: 'Mrs. Shabana Winfinith', role: null, image: 'shabana-winfinith.png' },
      { id: 'd-12', name: 'Mrs. Farhana Razvi', role: null, image: 'farhana-razvi.png' },
    ],
  },
]

// ============================================================
// HELPERS
// ============================================================

const getInitials = (name) => {
  const cleaned = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s*/i, '')
  const parts = cleaned.trim().split(/\s+/)

  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  }

  return cleaned.slice(0, 2).toUpperCase()
}

// ============================================================
// MEMBER CARD
// ============================================================

function MemberCard({ member, badgeStyle, shouldReduceMotion }) {
  const [imgError, setImgError] = useState(false)
  const imageUrl = getLeadershipImage(member.image)

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group h-full w-full"
    >
      <div className="relative flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.09] p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition-all duration-300 hover:border-saffron/50 hover:bg-white/[0.14] hover:shadow-[0_14px_35px_rgba(0,0,0,0.18)]">
        <div className="relative mb-3 aspect-[4/3.8] w-full overflow-hidden rounded-xl bg-white/10">
          {!imgError && imageUrl ? (
            <img
              src={imageUrl}
              alt={member.name}
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
              className={`h-full w-full object-cover object-top transition-transform duration-500 ease-out ${
                shouldReduceMotion ? '' : 'group-hover:scale-105'
              }`}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-white/10 text-white/80">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <span className="font-editorial text-lg font-bold text-saffron">
                  {getInitials(member.name)}
                </span>
              </div>
              <User className="h-4 w-4 text-white/40" />
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex min-h-[76px] flex-grow flex-col items-center justify-center px-1.5 pb-1.5 text-center">
          <h4 className="line-clamp-2 font-editorial text-[15px] font-bold leading-snug tracking-tight text-white sm:text-base">
            {member.name}
          </h4>

          {member.role && (
            <div className="mt-2 flex w-full justify-center">
              {badgeStyle === 'pill' ? (
                <span className="inline-block w-full max-w-[95%] truncate rounded-full bg-saffron/20 px-2.5 py-1 text-[11px] font-semibold text-saffron">
                  {member.role}
                </span>
              ) : (
                <span className="text-xs font-medium tracking-wide text-white/65">
                  {member.role}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ============================================================
// BOARD CAROUSEL
// ============================================================

function BoardRow({ board, shouldReduceMotion }) {
  const scrollContainerRef = useRef(null)
  const activeIndexRef = useRef(0)
  const manualInteractionRef = useRef(false)
  const resumeTimeoutRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [totalPages, setTotalPages] = useState(board.members.length)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const IconComponent = board.icon

  // Get card positions relative to the scroll container.
  const getCardPositions = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return []

    const cards = Array.from(
      container.querySelectorAll('[data-carousel-card]')
    )

    const containerRect = container.getBoundingClientRect()

    return cards.map((card) => {
      const cardRect = card.getBoundingClientRect()

      return (
        cardRect.left -
        containerRect.left +
        container.scrollLeft
      )
    })
  }, [])

  // Calculate how many cards are visible and the last valid position.
  // This ensures even the 4-member Advisors carousel can move.
  const getMaxStartIndex = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return 0

    const cards = Array.from(
      container.querySelectorAll('[data-carousel-card]')
    )

    if (!cards.length) return 0

    const cardWidth = cards[0].getBoundingClientRect().width
    const gap = parseFloat(
      window.getComputedStyle(container).columnGap
    ) || 0

    const visibleCards = Math.max(
      1,
      Math.floor(
        (container.clientWidth + gap) / (cardWidth + gap)
      )
    )

    return Math.max(0, cards.length - visibleCards)
  }, [])

  // Scroll to selected card position.
  const scrollToPage = useCallback(
    (index, behavior = 'smooth') => {
      const container = scrollContainerRef.current
      if (!container) return

      const positions = getCardPositions()
      if (!positions.length) return

      const maxIndex = getMaxStartIndex()
      const safeIndex = Math.max(0, Math.min(index, maxIndex))

      const maxScroll = Math.max(
        0,
        container.scrollWidth - container.clientWidth
      )

      const targetPosition = Math.min(
        positions[safeIndex],
        maxScroll
      )

      activeIndexRef.current = safeIndex
      setActiveIndex(safeIndex)

      container.scrollTo({
        left: targetPosition,
        behavior: shouldReduceMotion ? 'auto' : behavior,
      })
    },
    [getCardPositions, getMaxStartIndex, shouldReduceMotion]
  )

  // Update pagination and arrow states.
  const updateScrollMetrics = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const positions = getCardPositions()
    if (!positions.length) return

    const currentScroll = container.scrollLeft
    const maxIndex = getMaxStartIndex()

    let nearestIndex = 0
    let nearestDistance = Infinity

    positions.forEach((position, index) => {
      const distance = Math.abs(position - currentScroll)

      if (distance < nearestDistance) {
        nearestDistance = distance
        nearestIndex = index
      }
    })

    const safeIndex = Math.min(nearestIndex, maxIndex)

    activeIndexRef.current = safeIndex
    setActiveIndex(safeIndex)
    setTotalPages(maxIndex + 1)

    const maxScroll = Math.max(
      0,
      container.scrollWidth - container.clientWidth
    )

    setCanScrollPrev(currentScroll > 8)
    setCanScrollNext(currentScroll < maxScroll - 8)
  }, [getCardPositions, getMaxStartIndex])

  // Resize observer.
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    updateScrollMetrics()

    const resizeObserver = new ResizeObserver(() => {
      updateScrollMetrics()
    })

    resizeObserver.observe(container)

    container
      .querySelectorAll('[data-carousel-card]')
      .forEach((card) => resizeObserver.observe(card))

    window.addEventListener('resize', updateScrollMetrics)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateScrollMetrics)
    }
  }, [updateScrollMetrics])

  // Pause auto-scroll after manual interaction.
  const pauseAutoSlide = useCallback(() => {
    manualInteractionRef.current = true

    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current)
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      manualInteractionRef.current = false
    }, 2500)
  }, [])

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current)
      }
    }
  }, [])

  // Manual arrow navigation.
  const scrollByStep = (direction) => {
    pauseAutoSlide()

    const maxIndex = getMaxStartIndex()

    const nextIndex = Math.max(
      0,
      Math.min(activeIndexRef.current + direction, maxIndex)
    )

    scrollToPage(nextIndex)
  }

  // ==========================================================
  // AUTO SCROLL - ALL DEVICES - EVERY 1 SECOND
  // ==========================================================

  useEffect(() => {
    const autoSlide = window.setInterval(() => {
      if (manualInteractionRef.current) return

      const container = scrollContainerRef.current
      if (!container) return

      const maxIndex = getMaxStartIndex()

      if (maxIndex <= 0) return

      const currentIndex = activeIndexRef.current

      const nextIndex =
        currentIndex >= maxIndex ? 0 : currentIndex + 1

      scrollToPage(nextIndex, 'smooth')
    }, 2000)

    return () => window.clearInterval(autoSlide)
  }, [getMaxStartIndex, scrollToPage])

  const handleTouchStart = () => {
    pauseAutoSlide()
  }

  const handleTouchEnd = () => {
    pauseAutoSlide()
  }

  const handleDotClick = (index) => {
    pauseAutoSlide()
    scrollToPage(index)
  }

  return (
    <div className="rounded-3xl border border-white/15 bg-forest p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:p-7 lg:p-9">
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-10">

        {/* Board Introduction */}
        <div className="flex w-full shrink-0 flex-col justify-center lg:w-[250px] xl:w-[285px]">
          <div className="mb-3 flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-saffron">
              <IconComponent className="h-6 w-6 stroke-[2]" />
            </div>

            <div>
              <h3 className="font-editorial text-xl font-bold leading-tight text-white sm:text-2xl">
                {board.title}
              </h3>
              <div className="mt-2 h-1 w-8 rounded-full bg-saffron" />
            </div>
          </div>

          <p className="mt-1 text-sm leading-relaxed text-white/75 sm:text-[15px]">
            {board.description}
          </p>

          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-saffron">
            {board.members.length} Members
          </p>
        </div>

        {/* Carousel */}
        <div className="relative min-w-0 flex-1 lg:max-w-[720px]">
          <div className="relative flex items-center">

            {/* Previous Arrow */}
            <motion.button
              type="button"
              onClick={() => scrollByStep(-1)}
              disabled={!canScrollPrev}
              whileHover={
                shouldReduceMotion || !canScrollPrev
                  ? undefined
                  : { scale: 1.08 }
              }
              whileTap={
                shouldReduceMotion || !canScrollPrev
                  ? undefined
                  : { scale: 0.95 }
              }
              aria-label={`Previous ${board.title} members`}
              className={`absolute -left-3 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-forest-deep text-white shadow-md transition-all duration-200 sm:flex lg:-left-4 ${
                canScrollPrev
                  ? 'cursor-pointer hover:border-saffron hover:text-saffron'
                  : 'cursor-not-allowed opacity-35'
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
            </motion.button>

            {/* Horizontal Scroll Track */}
            <div
              ref={scrollContainerRef}
              onScroll={updateScrollMetrics}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={pauseAutoSlide}
              onMouseLeave={() => {
                manualInteractionRef.current = false

                if (resumeTimeoutRef.current) {
                  window.clearTimeout(resumeTimeoutRef.current)
                }
              }}
              className="no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-0 overflow-x-auto px-0 py-2 sm:gap-4 sm:px-1"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollSnapStop: 'always',
              }}
            >
              {board.members.map((member) => (
                <div
                  key={member.id}
                  data-carousel-card
                  className="w-full shrink-0 snap-center sm:w-[195px] sm:snap-start md:w-[200px]"
                >
                  <MemberCard
                    member={member}
                    badgeStyle={board.badgeStyle}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </div>
              ))}
            </div>

            {/* Next Arrow */}
            <motion.button
              type="button"
              onClick={() => scrollByStep(1)}
              disabled={!canScrollNext}
              whileHover={
                shouldReduceMotion || !canScrollNext
                  ? undefined
                  : { scale: 1.08 }
              }
              whileTap={
                shouldReduceMotion || !canScrollNext
                  ? undefined
                  : { scale: 0.95 }
              }
              aria-label={`Next ${board.title} members`}
              className={`absolute -right-3 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-forest-deep text-white shadow-md transition-all duration-200 sm:flex lg:-right-4 ${
                canScrollNext
                  ? 'cursor-pointer hover:border-saffron hover:text-saffron'
                  : 'cursor-not-allowed opacity-35'
              }`}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Pagination + Mobile Controls */}
          <div className="mt-4 flex items-center justify-center gap-3">

            {/* Mobile Previous Arrow */}
            <button
              type="button"
              onClick={() => scrollByStep(-1)}
              disabled={!canScrollPrev}
              aria-label={`Previous ${board.title} members`}
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition-all duration-200 hover:border-saffron hover:text-saffron sm:hidden ${
                canScrollPrev
                  ? 'opacity-100'
                  : 'cursor-not-allowed opacity-30'
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex max-w-[65%] items-center justify-center gap-1.5 overflow-hidden">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to position ${index + 1} in ${board.title}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 shrink-0 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-6 bg-saffron'
                      : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Mobile Next Arrow */}
            <button
              type="button"
              onClick={() => scrollByStep(1)}
              disabled={!canScrollNext}
              aria-label={`Next ${board.title} members`}
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition-all duration-200 hover:border-saffron hover:text-saffron sm:hidden ${
                canScrollNext
                  ? 'opacity-100'
                  : 'cursor-not-allowed opacity-30'
              }`}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// MAIN LEADERSHIP SECTION
// ============================================================

export default function LeadershipSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="leadership"
      className="relative w-full overflow-hidden bg-white py-20 lg:py-28"
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div data-reveal="left" className="mb-16 lg:mb-20">
          <p className="eyebrow">OUR LEADERSHIP</p>

          <h2 className="font-editorial mt-5 max-w-[690px] text-[clamp(2.7rem,5vw,4rem)] leading-[1.06] tracking-[-0.045em] text-forest">
            Foundation{' '}
            <em className="font-normal text-saffron">Leadership.</em>
          </h2>

          <p className="mt-3 max-w-[650px] text-sm leading-6 text-ink/75">
            Meet the dedicated leaders, advisors and professionals whose
            experience and commitment guide our foundation towards a
            meaningful and lasting impact.
          </p>
        </div>

        {/* Board Rows */}
        <div className="flex flex-col gap-7 lg:gap-9">
          {BOARDS_DATA.map((board, index) => (
            <motion.div
              key={board.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: 'easeOut',
              }}
            >
              <BoardRow
                board={board}
                shouldReduceMotion={shouldReduceMotion}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}