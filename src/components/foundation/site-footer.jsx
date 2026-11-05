import { ArrowUpRight, Heart, ShieldCheck } from 'lucide-react'
import { foundationAssets } from './assets'
import { BrandLogo } from './brand-logo'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Vision & Mission', href: '#mission' },
  { label: 'Our Initiatives', href: '#work' },
  { label: 'Global Medical City', href: '#medical-city' },
  { label: 'Donate Now', href: '#donate' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Contact Us', href: '#connect' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100069531152861', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/kalima_fct', icon: 'instagram' },
  { label: 'Telegram', href: 'https://t.me/kalimafct', icon: 'telegram' },
  { label: 'YouTube', href: 'https://www.youtube.com/@kalima-fct', icon: 'youtube' },
]

function SocialIcon({ type }) {
  if (type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.75V3.94c-.3-.04-1.34-.14-2.56-.14-2.54 0-4.28 1.55-4.28 4.4V10H7v3h2.91v8h3.59Z" />
      </svg>
    )
  }

  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current" strokeWidth="1.8">
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.45" cy="6.65" r="1" className="fill-current stroke-none" />
      </svg>
    )
  }

  if (type === 'telegram')
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="m21.6 4.25-3.1 15.07c-.23 1.06-.87 1.32-1.76.82l-4.85-3.58-2.34 2.25c-.26.26-.48.48-.98.48l.35-4.94 8.99-8.12c.39-.35-.09-.55-.61-.2L6.18 12.98l-4.77-1.5c-1.04-.33-1.06-1.04.22-1.54L20.3 3.2c.88-.33 1.65.2 1.3 1.05Z" />
    </svg>
  )

  if (type === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.05 0 12 0 12s0 3.95.5 5.8a3 3 0 0 0 2.1 2.1c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.95 24 12 24 12s0-3.95-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    )
  }

  return null
}

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-forest-deep text-white">
      <div className="relative border-b border-white/10">
        {/*
        <img
          src={foundationAssets.volunteersAid}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover object-center opacity-25"
          loading="lazy"
          decoding="async"
        />
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/92 to-forest-deep/55" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_85%_20%,rgba(239,161,43,0.16),transparent_70%)]" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div data-reveal="left">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-saffron">A little kindness goes a long way</p>
            <h2 className="font-editorial mt-3 max-w-[760px] text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.04] tracking-[-0.04em] text-white">
              Your kindness can become <em className="font-normal text-saffron">someone&apos;s tomorrow.</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3" data-reveal="right">
            <a
              href="#donate"
              data-magnetic
              data-magnetic-strength="0.14"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-saffron px-7 text-[13px] font-bold text-forest-deep shadow-[0_14px_35px_rgba(239,161,43,0.24)] transition-colors hover:bg-[#f6b342]"
            >
              Donate Now
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#volunteer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 text-[13px] font-semibold text-white backdrop-blur-sm transition-colors hover:border-saffron/60 hover:bg-white/10"
            >
              Volunteer
            </a>
          </div>
        </div>
      </div>
{/* footer bg-Kalima-text */}
      <div className="relative">
        <img
          src={foundationAssets.wordmarkLight}
          alt=""
          aria-hidden="true"
          width="2570"
          height="482"
          className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-[1600px] -translate-x-1/2 opacity-[0.045]"
          loading="lazy"
          decoding="async"
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.25fr_0.7fr_0.62fr_1fr] lg:gap-12">
          <div data-reveal="left">
            <a href="#home" aria-label="Kalima Foundation & Charitable Trust home" className="group inline-flex items-center">
              {/* Logo size: change width here, or LOGO_WIDTH in brand-logo.jsx */}
              <BrandLogo width={92} radius={16} alt="Kalima Foundation & Charitable Trust emblem" />
            </a>
            <p className="font-editorial mt-6 text-xl leading-snug text-white/90">Building Hope Through Healthcare.</p>
            <p className="mt-3 max-w-[360px] text-xs leading-6 text-white/70">
              Working towards a healthier, educated and empowered society through compassion, service and community development.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="premium-tag">
                <ShieldCheck aria-hidden="true" className="size-3" />
                Registered trust
              </span>
              <span className="premium-tag border-mint/25 bg-mint/10 text-mint">
                <Heart aria-hidden="true" className="size-3" />
                Since 2023
              </span>
            </div>
          </div>

          <div data-reveal="up">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-saffron">Explore</p>
            <nav aria-label="Footer explore navigation" className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.slice(0, 4).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline text-xs text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div data-reveal="up">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-saffron">Support</p>
            <nav aria-label="Footer support navigation" className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.slice(4).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline text-xs text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div data-reveal="right">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-saffron">Our motto</p>
            <p className="font-editorial mt-5 text-xl leading-snug text-white/90">
              “From the People, By the People, To the People.”
            </p>
            <nav aria-label="Footer social media" className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex size-9 items-center justify-center rounded-full border border-white/20 text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-saffron hover:bg-saffron hover:text-forest-deep"
                >
                  <SocialIcon type={link.icon} />
                </a>
              ))}
            </nav>
            <p className="mt-5 text-[10px] leading-5 text-white/65">
              All donations and activities are subject to applicable laws, regulations and the Trust&apos;s charitable objectives.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[10px] text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 Kalima Foundation &amp; Charitable Trust (R.). All Rights Reserved.</span>
          <span className="inline-flex items-center gap-1.5">
            Built with compassion
            <Heart aria-hidden="true" className="size-3 fill-saffron/80 text-saffron" />
          </span>
        </div>
      </div>
    </footer>
  )
}
