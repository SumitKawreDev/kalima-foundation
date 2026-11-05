import { ArrowUpRight, HeartHandshake, Sparkles } from 'lucide-react'
import { foundationAssets } from './assets'
import { SpotlightCard } from './premium-ui'

const waysToHelp = [
  'Medical and healthcare assistance.',
  'Education and student support.',
  'Social awareness campaigns.',
  'Community welfare activities.',
  'Event management and volunteering.',
  'Fundraising and outreach.',
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100069531152861' },
  { label: 'Instagram', href: 'https://www.instagram.com/kalima_fct' },
  { label: 'Telegram', href: 'https://t.me/kalimafct' },
  { label: 'YouTube', href: 'https://www.youtube.com/@kalima-fct' },
]

export function VolunteerSection() {
  return (
    <>
      <section id="volunteer" className="section-glow bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div data-reveal="left">
            <p className="eyebrow">Become a volunteer</p>
            <h2 className="font-editorial mt-5 max-w-[690px] text-[clamp(2.7rem,5vw,4rem)] leading-[1.06] tracking-[-0.045em] text-forest">
              Your Time Can Change <em className="font-normal text-saffron">Someone&apos;s Life.</em>
            </h2>
            <p className="mt-5 max-w-[620px] text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
              Join hands with Kalima Foundation &amp; Charitable Trust and become part of a community committed to humanity.
            </p>
            <a
              href="https://t.me/kalimafct"
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              data-magnetic-strength="0.16"
              className="group mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-saffron px-6 text-[13px] font-bold text-forest-deep shadow-[0_14px_35px_rgba(239,161,43,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#f6b342]"
            >
              Join as a Volunteer
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest/45">
                {/* <Sparkles aria-hidden="true" className="size-3.5 text-saffron" /> */}
                Give your time
              </span>
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest/45">
                <HeartHandshake aria-hidden="true" className="size-3.5 text-mint" />
                Share your skills
              </span>
            </div>
          </div>

          <div data-reveal="right" className="lg:pt-3">
            <p className="text-sm font-semibold text-forest/80">We welcome individuals who wish to contribute through:</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {waysToHelp.map((way, index) => (
                <SpotlightCard
                  key={way}
                  as="li"
                  className="premium-card group flex min-h-[76px] items-center gap-3 rounded-[1.25rem] border border-transparent bg-white px-5 py-4 text-sm font-medium leading-6 text-forest shadow-[0_10px_30px_rgba(23,71,54,0.045)] hover:border-saffron/30 hover:shadow-[0_18px_42px_rgba(23,71,54,0.09)]"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-saffron">
                    <HeartHandshake aria-hidden="true" className="size-4" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0">{way}</span>
                  <span className="ml-auto text-[9px] font-extrabold tracking-[0.12em] text-forest/20 transition-colors duration-300 group-hover:text-saffron/70">
                    0{index + 1}
                  </span>
                </SpotlightCard>
              ))}
            </ul>
            <p className="font-editorial mt-6 text-xl italic text-forest sm:text-2xl">Together, We Can Make a Difference.</p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-5 sm:mt-14 sm:px-8">
          <figure
            data-reveal="scale"
            data-image-reveal
            className="image-frame group relative overflow-hidden rounded-[1.75rem] bg-forest sm:rounded-[2rem]"
          >
            <img
              src={foundationAssets.volunteersAid}
              alt="Volunteers serving food and water at a community aid station"
              className="h-[260px] w-full object-cover object-center sm:h-[360px] lg:h-[420px]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#052e26]/95 via-[#052e26]/55 to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-y-0 left-0 flex max-w-[520px] flex-col justify-center p-6 text-white sm:p-9 lg:p-12">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-saffron">Volunteers in action</p>
              <p className="font-editorial mt-2 text-[clamp(1.5rem,2.8vw,2.2rem)] leading-tight">
                Every hour given becomes hope for a family.
              </p>
              <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                <HeartHandshake aria-hidden="true" className="size-3.5 text-saffron" />
                Join the movement
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="connect" className="relative isolate overflow-hidden border-t border-forest/10 bg-white py-14 sm:py-16">
        <div className="absolute -right-20 -top-24 -z-10 size-64 rounded-full bg-saffron/[0.06] blur-3xl" aria-hidden="true" />
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div data-reveal="left">
            <p className="eyebrow">Connect with us</p>
            <h2 className="font-editorial mt-3 text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-forest">Let&apos;s Work Together for Humanity.</h2>
            <p className="mt-3 max-w-[650px] text-sm leading-6 text-ink/75">
              Follow our activities, initiatives and updates through our official social media channels.
            </p>
          </div>
          <nav aria-label="Social media" className="flex flex-wrap gap-3" data-reveal="right">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-forest/15 px-5 text-xs font-semibold text-forest transition-all duration-300 hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-white hover:shadow-[0_12px_28px_rgba(23,71,54,0.18)]"
              >
                {label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </nav>
        </div>
      </section>
    </>
  )
}
