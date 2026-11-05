import { ArrowUpRight, Building2, HeartPulse, MapPin, Route, Sparkles } from 'lucide-react'
import { foundationAssets } from './assets'
import { SpotlightCard } from './premium-ui'

const proposedFacilities = [
  'General and Multispecialty Hospitals',
  'Cardiology and Oncology',
  'Orthopedics and Neurology',
  'Advanced Diagnostic Centres',
  'Emergency and Surgical Services',
  'Medical Research & Development',
  'Nursing and Medical Education',
  'Rehabilitation and Wellness Services',
  'Healthcare Training Facilities',
]

const projectGoals = [
  'Improve healthcare access for rural and underserved communities.',
  'Reduce the need for long-distance travel for specialized treatment.',
  'Encourage medical education and research.',
  'Create healthcare employment opportunities.',
  'Develop partnerships with medical institutions and healthcare professionals.',
  'Promote medical tourism and wellness opportunities.',
]

const growthPlan = [
  'Healthcare Infrastructure Development',
  'Medical Camps and Patient Assistance',
  'Education and Research Initiatives',
  'Community Development Programs',
  'Strategic Partnerships and Collaborations',
  'Technology Integration in Healthcare',
  'Long-Term Sustainable Development',
]

const rolloutStages = [
  'Preparation and Site Development',
  'Main Construction Works',
  'Structural Progress',
  'Interior Development',
  'Equipment Procurement and Installation',
  'Quality Checks and Rectifications',
  'Final Completion and Handover',
]

export function MedicalCitySection() {
  return (
    <section id="medical-city" className="section-glow bg-paper py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="max-w-[850px]">
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">Global Medical City Project – Murudeshwar</p>
            <span className="premium-tag border-forest/20 bg-forest/[0.04] text-forest/60">
         
              Flagship initiative
            </span>
          </div>
          <h2 className="font-editorial mt-5 text-[clamp(2.7rem,5vw,4rem)] leading-[1.06] tracking-[-0.045em] text-forest">
            Building a Future of <em className="font-normal text-saffron">Accessible</em> Healthcare
          </h2>
          <p className="mt-6 max-w-[780px] text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
            One of the major proposed initiatives of Kalima Foundation &amp; Charitable Trust is the Global Medical City Project (GMCP) at Murudeshwar, Uttara Kannada District, Karnataka.
          </p>
        </div>

        <figure
          data-reveal="scale"
          data-image-reveal
          className="image-frame group relative mt-10 overflow-hidden rounded-[1.75rem] bg-forest sm:mt-14 sm:rounded-[2.25rem]"
        >
          <img
            src={foundationAssets.medicalCity}
            alt="Artistic impression of a coastal medical city campus"
            className="aspect-[1.2] w-full object-cover object-center sm:aspect-[2.15]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#052e26]/95 via-[#052e26]/55 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-saffron/10 to-transparent" aria-hidden="true" />
          <figcaption className="absolute inset-x-0 bottom-0 max-w-[760px] p-6 text-sm leading-6 text-white sm:p-9 sm:text-base sm:leading-7 lg:p-12">
            A healthcare-focused ecosystem that combines medical services, specialized treatment, research, education and community healthcare.
          </figcaption>
          <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:right-7 sm:top-7">
            <Building2 aria-hidden="true" className="size-3.5 text-saffron" />
            A future healthcare hub
          </span>
        </figure>

        <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-5">
          <SpotlightCard
            data-reveal="up"
            className="premium-card group rounded-[1.5rem] bg-white p-6 shadow-[0_14px_40px_rgba(23,71,54,0.07)] hover:shadow-[0_24px_55px_rgba(23,71,54,0.12)] sm:p-8"
          >
            <div className="flex items-start justify-between">
              <p className="font-editorial text-[42px] leading-none text-forest sm:text-[52px]">
                <span data-count="12">12</span>
                <span className="ml-1 text-[20px] text-saffron">km</span>
              </p>
              <Route aria-hidden="true" className="size-5 text-forest/20 transition-colors duration-300 group-hover:text-saffron" />
            </div>
            <p className="mt-3 text-[15px] text-ink/75">from Bhatkal</p>
          </SpotlightCard>
          <SpotlightCard
            data-reveal="up"
            className="premium-card group rounded-[1.5rem] bg-white p-6 shadow-[0_14px_40px_rgba(23,71,54,0.07)] hover:shadow-[0_24px_55px_rgba(23,71,54,0.12)] sm:p-8"
          >
            <div className="flex items-start justify-between">
              <p className="font-editorial text-[42px] leading-none text-forest sm:text-[52px]">
                <span data-count="26">26</span>
                <span className="ml-1 text-[20px] text-saffron">km</span>
              </p>
              <MapPin aria-hidden="true" className="size-5 text-forest/20 transition-colors duration-300 group-hover:text-saffron" />
            </div>
            <p className="mt-3 text-[15px] text-ink/75">from Honnavara</p>
          </SpotlightCard>
          <SpotlightCard
            data-reveal="up"
            className="premium-card group rounded-[1.5rem] bg-white p-6 shadow-[0_14px_40px_rgba(23,71,54,0.07)] hover:shadow-[0_24px_55px_rgba(23,71,54,0.12)] sm:p-8"
          >
            <div className="flex items-start justify-between">
              <p className="font-editorial text-[42px] leading-none text-forest sm:text-[52px]">NH-66</p>
              <HeartPulse aria-hidden="true" className="size-5 text-forest/20 transition-colors duration-300 group-hover:text-saffron" />
            </div>
            <p className="mt-3 text-[15px] leading-7 text-ink/75">National Highway &amp; Konkan Railway access</p>
          </SpotlightCard>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div data-reveal="left">
            <h3 className="font-editorial text-[28px] leading-tight text-forest sm:text-[32px]">Proposed Development Areas</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {proposedFacilities.map((facility) => (
                <span
                  key={facility}
                  className="group inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-4 py-2.5 text-xs font-medium leading-5 text-forest/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-saffron/50 hover:text-forest hover:shadow-[0_8px_20px_rgba(23,71,54,0.08)]"
                >
                  <span className="size-1.5 rounded-full bg-mint transition-colors duration-300 group-hover:bg-saffron" aria-hidden="true" />
                  {facility}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-[600px] text-sm leading-7 text-ink/70">
              Murudeshwar offers a strategic location with road and railway connectivity, tourism potential and opportunities for healthcare development. The region&apos;s natural beauty, tourism and connectivity provide opportunities for a future healthcare development hub.
            </p>
          </div>

          <div data-reveal="right">
            <h3 className="font-editorial text-[28px] leading-tight text-forest sm:text-[32px]">Our Goals</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {projectGoals.map((goal) => (
                <li key={goal} className="group flex items-start gap-3 text-sm leading-6 text-ink/75">
                  <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-saffron transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-forest/10 pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-20">
          <div data-reveal="left">
            <p className="eyebrow">Our growth &amp; development plan</p>
            <h3 className="font-editorial mt-5 max-w-[620px] text-[clamp(2.6rem,4.7vw,3.8rem)] leading-[1.06] tracking-[-0.04em] text-forest">
              A Roadmap Towards Sustainable Social Impact
            </h3>
            <p className="mt-5 max-w-[600px] text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
              Our development vision focuses on healthcare infrastructure, education, community empowerment and strategic collaborations.
            </p>
            <ol className="mt-7 flex flex-col gap-3">
              {growthPlan.map((step, index) => (
                <li
                  key={step}
                  className="group flex items-center gap-4 rounded-[1.25rem] border border-transparent bg-white px-4 py-4 shadow-[0_10px_30px_rgba(23,71,54,0.045)] transition-all duration-300 hover:-translate-y-0.5 hover:border-saffron/30 hover:shadow-[0_16px_38px_rgba(23,71,54,0.09)] sm:px-5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold text-white transition-colors duration-300 group-hover:bg-saffron group-hover:text-forest-deep">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-forest">{step}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-auto size-4 shrink-0 text-forest/20 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </li>
              ))}
            </ol>
          </div>

          <div data-reveal="right">
            <p className="eyebrow">Global Medical City – proposed rollout stages</p>
            <ol className="mt-6 border-l border-saffron/70 pl-6 sm:pl-8">
              {rolloutStages.map((stage, index) => (
                <li key={stage} className="group relative pb-6 last:pb-0">
                  <span
                    className="absolute -left-[calc(1.5rem+4px)] top-1.5 size-2.5 rounded-full border-2 border-paper bg-saffron transition-transform duration-300 group-hover:scale-150 sm:-left-[calc(2rem+4px)]"
                    aria-hidden="true"
                  />
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-mint">Phase {index + 1}</p>
                  <p className="font-editorial mt-1 text-[19px] leading-snug text-forest transition-colors duration-300 group-hover:text-saffron sm:text-[21px]">
                    {stage}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p data-reveal="up" className="mt-12 flex items-start gap-3 rounded-2xl border border-dashed border-forest/20 px-5 py-4 text-xs leading-6 text-ink/70 sm:px-6">
          <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-forest/65" />
          The Global Medical City is presented as a proposed development initiative. Its implementation, infrastructure, facilities and timelines will depend on feasibility, approvals, partnerships and available resources. Project execution will be subject to land, approvals, funding, infrastructure readiness and other applicable requirements.
        </p>
      </div>
    </section>
  )
}
