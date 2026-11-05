import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { BrandLogo } from './brand-logo'

const navigation = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Mission', href: '#mission', id: 'mission' },
  { label: 'Initiatives', href: '#work', id: 'work' },
  { label: 'Medical City', href: '#medical-city', id: 'medical-city' },
  { label: 'Volunteer', href: '#volunteer', id: 'volunteer' },
  { label: 'Contact', href: '#connect', id: 'connect' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const progressRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const sections = Array.from(document.querySelectorAll('main section[id]'))

    const update = () => {
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`
      }

      const isScrolled = scrollY > 24
      setScrolled((current) => (current === isScrolled ? current : isScrolled))

      let currentSection = ''
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 140) {
          currentSection = section.dataset.navSection || section.id
        } else {
          break
        }
      }
      setActiveSection((current) => (current === currentSection ? current : currentSection))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const handleChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }

    desktop.addEventListener('change', handleChange)
    return () => desktop.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return

    const timeout = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ block: 'start', behavior: 'instant' })
    }, 80)

    return () => window.clearTimeout(timeout)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const solid = scrolled || menuOpen
  const donateActive = activeSection === 'donate' || activeSection === 'donation-utilisation'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid
          ? 'bg-forest-deep/95 shadow-[0_18px_60px_rgba(4,32,26,0.35)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-[height] duration-500 sm:px-8 ${
          solid ? 'h-[68px] sm:h-[76px]' : 'h-[82px] sm:h-[92px]'
        }`}
      >
        <a
          href="#home"
          aria-label="Kalima Foundation & Charitable Trust home"
          className="group flex shrink-0 items-center"
          onClick={closeMenu}
        >
          {/* Logo size: change width here, or LOGO_WIDTH in brand-logo.jsx */}
          <BrandLogo width={68} radius={13} loading="eager" />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navigation.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={`group relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  isActive ? 'text-saffron' : 'text-white/85 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-saffron transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            )
          })}
          <a
            href="#donate"
            aria-current={donateActive ? 'true' : undefined}
            data-magnetic
            data-magnetic-strength="0.16"
            className={`group relative ml-2 inline-flex min-h-10 items-center gap-2 overflow-hidden rounded-full px-6 text-[13px] font-bold text-forest-deep transition-all duration-300 hover:-translate-y-0.5 ${
              donateActive ? 'bg-[#f6b342] shadow-[0_10px_28px_rgba(239,161,43,0.3)]' : 'bg-saffron hover:bg-[#f6b342]'
            }`}
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
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-300 hover:rotate-6 hover:border-saffron/60 hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        inert={!menuOpen}
        aria-hidden={!menuOpen}
        className={`absolute inset-x-0 top-full overflow-hidden border-t border-white/15 bg-forest-deep/95 shadow-[0_24px_60px_rgba(2,24,19,0.45)] backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          menuOpen ? 'max-h-[620px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-5 pb-5 pt-3">
          {navigation.map((item, index) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                onClick={closeMenu}
                style={{ transitionDelay: menuOpen ? `${80 + index * 40}ms` : '0ms' }}
                className={`rounded-xl px-3 py-3 text-sm font-medium transition-all duration-300 ${
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                } ${isActive ? 'bg-white/10 text-saffron' : 'text-white/90 hover:bg-white/10 hover:text-saffron'}`}
              >
                {item.label}
              </a>
            )
          })}
          <a
            href="#donate"
            onClick={closeMenu}
            style={{ transitionDelay: menuOpen ? `${80 + navigation.length * 40}ms` : '0ms' }}
            className={`mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-saffron px-5 text-sm font-bold text-forest-deep transition-all duration-300 ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            Donate Now <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </nav>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden bg-white/10" aria-hidden="true">
        <div
          ref={progressRef}
          className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-saffron via-[#f6b342] to-mint will-change-transform"
        />
      </div>
    </header>
  )
}
