import {
  ArrowUpRight,
  BookOpen,
  Building2,
  HeartPulse,
  Microscope,
  ScanLine,
  ShieldPlus,
  Sparkles,
  Stethoscope,
} from 'lucide-react'
import { foundationAssets } from './assets'
import { SpotlightCard } from './premium-ui'

const proposedFacilities = [
  {
    icon: HeartPulse,
    title: 'Multispecialty Hospitals',
    description: 'Advanced facilities across medical specialties to support patients with diverse healthcare needs.',
  },
  {
    icon: BookOpen,
    title: 'Global Medical City',
    description: 'Medical city, healthcare training, professional development and academic collaboration.',
  },
  {
    icon: Microscope,
    title: 'Multidisciplinary Research Centre',
    description: 'A collaborative research environment for medical specialties and healthcare sciences.',
  },
  {
    icon: Sparkles,
    title: 'Research & Development',
    description: 'Medical innovation, healthcare technology and the advancement of medical knowledge.',
  },
  {
    icon: ScanLine,
    title: 'Advanced Diagnostic Centres',
    description: 'Proposed diagnostic facilities to support medical testing, investigations and early detection.',
  },
  {
    icon: ShieldPlus,
    title: 'Emergency & Critical Care',
    description: 'A vision for accessible emergency services and specialized patient care.',
  },
  {
    icon: Stethoscope,
    title: 'Veterinary nursing & Healthcare',
    description: 'Education and professional development for nurses, healthcare professionals and students.',
  },
  {
    icon: Building2,
    title: 'Rehabilitation & Wellness',
    description: 'Rehabilitation and wellness services to support recovery and long-term patient care.',
  },
]

export function MedicalCitySection() {
  return (
    <section id="medical-city" className="section-glow bg-paper py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="max-w-[850px]">
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">Our flagship vision</p>
            <span className="premium-tag border-forest/20 bg-forest/[0.04] text-forest/60">
              Proposed development
            </span>
          </div>
          <p className="mt-4 text-sm font-semibold text-forest/70 sm:text-base">
            Our Dream. Our Vision. Our Mission.
          </p>
          <h2 className="font-editorial mt-5 text-[clamp(2.7rem,5vw,4rem)] leading-[1.06] tracking-[-0.045em] text-forest">
            Global Medical City:{' '}
            <em className="font-normal text-saffron">Care, Learning & Discovery.</em>
          </h2>
          <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.16em] text-forest/55 sm:text-sm">
            Building a Global Hub for Healthcare, Medical Education &amp; Research.
          </p>
          <p className="mt-6 max-w-[780px] text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
            The Global Medical City (GMC) is the flagship development vision of Kalima (R.) FCT(R.). Our aim is to establish an integrated medical ecosystem bringing healthcare and medical development facilities together. More than a hospital campus, GMC is envisioned as a comprehensive medical city where healthcare delivery, education, innovation, research and development work together.
          </p>
        </div>

        <figure
          data-reveal="scale"
          data-image-reveal
          className="image-frame group relative mt-7 overflow-hidden rounded-[1.75rem] bg-forest sm:mt-8 sm:rounded-[2.25rem]"
        >
          <img
            src={foundationAssets.medicalCity}
            alt="Conceptual image representing an integrated medical city"
            className="aspect-[1.15] w-full object-cover object-center sm:aspect-[2.15]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#052e26]/95 via-[#052e26]/45 to-transparent" aria-hidden="true" />
          <figcaption className="absolute inset-x-0 bottom-0 max-w-[800px] p-5 text-sm leading-6 text-white sm:p-9 sm:text-base sm:leading-7 lg:p-12">
            Our dream. Our vision. Our mission: a global hub for healthcare, medical education, research and development.
          </figcaption>
        </figure>

        <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {proposedFacilities.map(({ icon: Icon, title, description }, index) => (
            <SpotlightCard
              key={title}
              data-reveal="up"
              className="premium-card group flex min-h-[220px] min-w-0 flex-col rounded-[1.5rem] border border-forest/10 bg-white p-5 shadow-[0_14px_40px_rgba(23,71,54,0.06)] hover:border-saffron/35 hover:shadow-[0_24px_55px_rgba(23,71,54,0.12)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="card-icon flex size-11 shrink-0 items-center justify-center rounded-2xl text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-saffron">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                </span>
                <span className="font-editorial text-sm text-forest/30">0{index + 1}</span>
              </div>
              <h3 className="font-editorial mt-5 text-[19px] leading-tight text-forest sm:text-[21px]">{title}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-6 text-ink/70 sm:text-sm sm:leading-7">{description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-forest/50">
                Proposed component
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </span>
            </SpotlightCard>
          ))}
        </div>

        <p data-reveal="up" className="mt-8 rounded-2xl border border-dashed border-forest/20 px-5 py-4 text-xs leading-6 text-ink/70 sm:px-6">
          All proposed development activities are subject to feasibility, applicable approvals, regulatory compliance, partnerships and resource availability.
        </p>
      </div>
    </section>
  )
}
