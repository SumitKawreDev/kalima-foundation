import {
  ArrowUpRight,
  Check,
  Heart,
  HeartHandshake,
  HeartPulse,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'
import { foundationAssets } from './assets'
import { BrandLogo } from './brand-logo'
import { SpotlightCard } from './premium-ui'

const approachAreas = [
  'Free Medical Camps',
  'Free Generic Medicines',
  'Patient Assistance',
  'Healthcare Awareness',
  'Medical Education',
  'Research & Development',
]

const focusAreas = [
  {
    icon: HeartPulse,
    title: 'Free Medical Camps',
    description:
      'Bringing basic health check-ups, medical guidance and healthcare awareness closer to underserved communities.',
  },
  {
    icon: Heart,
    title: 'Free Generic Medicine Distribution',
    description:
      'Helping people who cannot easily afford essential generic medicines by distributing them free of cost.',
  },
  {
    icon: HeartHandshake,
    title: 'Patient Assistance',
    description:
      'Supporting deserving patients and families who need help accessing medical care and assistance.',
  },
  {
    icon: Sparkles,
    title: 'Healthcare Awareness',
    description:
      'Encouraging preventive healthcare, early diagnosis, medical consultation and healthy living.',
  },
  {
    icon: Users,
    title: 'Community Healthcare',
    description:
      'Reaching underserved communities and working to ensure financial difficulties do not stand in the way of care.',
  },
]

const missionGoals = [
  'Organize free medical camps for underserved communities.',
  'Distribute generic medicines free of cost to deserving patients.',
  'Support individuals and families who need medical assistance.',
  'Develop an integrated Global Medical City.',
  'Establish medical education and college facilities.',
  'Promote multidisciplinary medical research.',
  'Encourage innovation through dedicated R&D facilities.',
  'Build collaborations with healthcare professionals and institutions.',
  'Support preventive healthcare and public awareness.',
  'Make quality healthcare more accessible and affordable.',
]

const communities = [
  {
    title: 'Economically Disadvantaged Families',
    description:
      'Families who face financial barriers to healthcare and essential support.',
  },
  {
    title: 'Rural and Underserved Communities',
    description:
      'People in communities with limited access to healthcare services and assistance.',
  },
  {
    title: 'Patients Requiring Medical Assistance',
    description:
      'Individuals who need help accessing medical care and patient assistance.',
  },
  {
    title: 'Children from Disadvantaged Backgrounds',
    description:
      'Children who face barriers to essential healthcare and community support.',
  },
  {
    title: 'Women and Mothers',
    description:
      'Women and mothers who need access to healthcare and patient assistance.',
  },
  {
    title: 'Senior Citizens',
    description:
      'Older people who may need accessible healthcare and community support.',
  },
  {
    title: 'People with Limited Healthcare Access',
    description:
      'Individuals and families who have difficulty reaching essential healthcare services.',
  },
  {
    title: 'Future Healthcare Professionals',
    description:
      'Students aspiring to pursue healthcare education and professional development.',
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-glow bg-paper py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
          <div data-reveal="left" className="min-w-0">
            <p className="eyebrow">Who we are</p>

            <h2 className="font-editorial mt-5 max-w-[620px] break-words text-[clamp(2.7rem,5vw,3.9rem)] leading-[1.05] tracking-[-0.045em] text-forest">
              A healthier future, built{' '}
              <em className="font-normal text-saffron">together.</em>
            </h2>

            <p className="mt-6 max-w-[600px] break-words text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              Kalima Foundation &amp; Charitable Trust (R.), established on{' '}
              <strong className="font-bold text-forest">
                18 July 2023
              </strong>
              , is a charitable organization dedicated to humanity, healthcare,
              education and community development.
            </p>

            <p className="mt-5 max-w-[620px] break-words text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              We believe every person deserves proper medical care, essential
              medicines and opportunities for a better life. We organize free
              medical camps and distribute generic medicines free of cost to
              people in need.
            </p>
            <p className="mt-5 max-w-[620px] break-words text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              Our philosophy is simple:{' '}
              <strong className="font-bold text-forest">
                From the People, By the People, To the People.
              </strong>
            </p>
            <p className="mt-5 max-w-[620px] break-words text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              Our long-term vision is a Global Medical City integrating patient
              care, medical education, research, innovation and healthcare
              infrastructure, with patient welfare at its heart.
            </p>
            <p className="mt-5 max-w-[620px] break-words text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              We are committed to making healthcare accessibility and patient
              welfare the heart of every initiative.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest/55">
                <span className="size-1.5 shrink-0 rounded-full bg-saffron" />
                Patients first
              </span>

              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest/55">
                <span className="size-1.5 shrink-0 rounded-full bg-mint" />
                Humanity always
              </span>

              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest/55">
                <span className="size-1.5 shrink-0 rounded-full bg-saffron" />
                Healthcare access
              </span>
            </div>
          </div>

          {/* ABOUT IMAGE */}
          <figure
            data-reveal="scale"
            className="image-frame group relative block min-h-[420px] w-full min-w-0 overflow-hidden rounded-[2rem] bg-forest shadow-[0_28px_70px_rgba(22,67,52,0.2)] sm:min-h-[500px] lg:min-h-[560px]"
          >
            <img
              src={foundationAssets.aboutCommunity}
              alt="Mothers and children gathered at a community programme"
              className="absolute inset-0 block h-full w-full max-w-none object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-[#052e26]/95 via-[#052e26]/50 to-[#052e26]/20"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-110"
              aria-hidden="true"
            />

            {/* TOP BRAND */}
            <div className="absolute inset-x-0 top-0 z-20 flex min-w-0 items-center gap-3 p-5 sm:p-7">
              {/* Logo size: change width here, or LOGO_WIDTH in brand-logo.jsx */}
              <BrandLogo width={84} radius={14} alt="" />
            </div>

            {/* BOTTOM TEXT */}
            <figcaption className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7">
              <div className="w-full min-w-0 max-w-[520px]">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-saffron sm:text-[10px]">
                  Our promise
                </p>

                <blockquote className="font-editorial mt-2 w-full max-w-full break-words text-[clamp(1.35rem,5vw,1.9rem)] italic leading-[1.12] text-white">
                  &ldquo;From the People, By the People,
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  To the People.&rdquo;
                </blockquote>

                <p className="mt-3 max-w-full break-words text-[10px] leading-5 text-white/65 sm:text-[11px]">
                  Serving communities with compassion since 18 July 2023.
                </p>
              </div>
            </figcaption>
          </figure>
        </div>

        {/* APPROACH */}
        <div data-reveal="up" className="mt-12 sm:mt-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <p className="eyebrow">Our approach</p>

            <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-forest/35 sm:block">
              Six principles, one purpose
            </span>
          </div>

          <div className="grid border-t border-forest/15 sm:grid-cols-2 lg:grid-cols-3">
            {approachAreas.map((area, index) => (
              <div
                key={area}
                className="group flex min-w-0 items-center gap-4 border-b border-forest/15 py-5 transition-colors duration-300 hover:bg-forest/[0.035] sm:px-5 lg:px-7"
              >
                <span className="font-editorial shrink-0 text-xl text-mint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
                  0{index + 1}
                </span>

                <p className="min-w-0 break-words text-sm font-semibold leading-6 text-forest">
                  {area}
                </p>

                <ArrowUpRight
                  aria-hidden="true"
                  className="ml-auto size-4 shrink-0 text-forest/25 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function VisionMissionSection() {
  return (
    <section
      id="mission"
      className="section-glow relative isolate overflow-hidden bg-forest py-10 text-white sm:py-14 lg:py-16"
    >
      <div
        className="absolute -right-32 -top-48 -z-10 size-[520px] rounded-full bg-white/[0.035] sm:size-[700px]"
        aria-hidden="true"
      />

      <div
        className="absolute -right-8 top-20 -z-10 size-[320px] rounded-full border border-white/[0.08] sm:size-[450px]"
        aria-hidden="true"
      />

      <div
        className="absolute -left-24 bottom-0 -z-10 size-[360px] rounded-full bg-saffron/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div data-reveal="left" className="min-w-0">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-saffron">
              Our vision
            </p>

            <h2 className="font-editorial mt-5 max-w-[610px] break-words text-[clamp(2.5rem,4.7vw,3.75rem)] leading-[1.08] tracking-[-0.035em] text-white">
              A Global Medical Hub for Humanity
            </h2>

            <p className="mt-6 max-w-[570px] break-words text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Our vision is to establish a Global Medical City bringing
              healthcare services, medical education, specialized treatment,
              research and development together.
            </p>

            <p className="mt-4 max-w-[570px] break-words text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              We aim to connect patients, doctors, medical professionals,
              researchers, students and healthcare institutions to advance
              medical science and human well-being.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Accessible healthcare for every individual',
                'Patient-first medical services',
                'Global-standard medical education',
                'Multispecialty healthcare facilities',
                'Advanced medical research centres',
                'Research and Development (R&D)',
                'Affordable and free healthcare initiatives',
                'Sustainable medical infrastructure',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-white/75">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-saffron" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal="right" className="min-w-0">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-saffron">
              Our mission
            </p>

            <h3 className="font-editorial mt-5 max-w-[620px] break-words text-[clamp(2.5rem,4.7vw,3.75rem)] leading-[1.08] tracking-[-0.035em] text-white">
              Healthcare First. Patients Always.
            </h3>

            <p className="mt-6 max-w-[570px] break-words text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Our mission is to serve humanity by improving healthcare
              accessibility and creating opportunities for medical
              advancement.
            </p>

            <div className="mt-8 flex min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 backdrop-blur-sm">
              <Quote
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-saffron"
              />

              <p className="min-w-0 break-words text-sm leading-6 text-white/75">
                No patient should be left behind because of financial
                difficulties.
              </p>
            </div>
          </div>
        </div>

        <div
          data-reveal="scale"
          className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.1] p-6 sm:mt-12 sm:p-8 lg:p-9"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-white/80">
              We aim to:
            </p>

            <span className="premium-tag">
           
              Our shared purpose
            </span>
          </div>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {missionGoals.map((goal, index) => (
              <li
                key={goal}
                className="group flex min-w-0 items-start gap-3 rounded-xl border-t border-white/15 pt-4 text-sm leading-6 text-white/85 transition-colors duration-300 hover:border-saffron/50 hover:text-white"
              >
                <span className="font-editorial shrink-0 text-lg text-saffron transition-transform duration-300 group-hover:-translate-y-0.5">
                  0{index + 1}
                </span>

                <span className="min-w-0 break-words">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function FocusSection() {
  return (
    <section
      id="work"
      className="section-glow bg-paper py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="mx-auto max-w-[780px] text-center">
          <p className="eyebrow">Our current healthcare initiatives</p>

          <h2 className="font-editorial mt-5 break-words text-[clamp(2.6rem,5vw,4rem)] leading-[1.08] tracking-[-0.04em] text-forest">
            Serving humanity through{' '}
            <em className="font-normal text-saffron">free healthcare.</em>
          </h2>
        </div>

        <figure
          data-reveal="scale"
          data-image-reveal
          className="image-frame group relative mt-10 min-h-[340px] overflow-hidden rounded-[1.75rem] bg-forest sm:mt-12 sm:min-h-[380px] sm:rounded-[2rem] lg:min-h-[440px]"
        >
          <img
            src={foundationAssets.healthCheckup}
            alt="A doctor checking a patient with a stethoscope at a clinic"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-[#052e26] via-[#052e26]/55 to-transparent"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-saffron/10 to-transparent lg:block"
            aria-hidden="true"
          />

          <figcaption className="absolute inset-x-0 bottom-0 z-10 max-w-[560px] p-6 sm:p-9 lg:p-10">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-saffron">
              Care that reaches people
            </p>

            <p className="font-editorial mt-2 break-words text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.15] text-white">
              No patient should be left behind because of financial difficulties.
            </p>
          </figcaption>

          <span className="absolute right-6 top-6 z-10 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:inline-flex">
            <HeartPulse
              aria-hidden="true"
              className="size-3.5 text-saffron"
            />
            Care in action
          </span>
        </figure>

        <p className="mx-auto mt-8 max-w-[760px] text-center text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
          Kalima Foundation &amp; Charitable Trust is committed to taking
          healthcare closer to people facing financial and access barriers.
        </p>

        <div className="mt-5 grid min-w-0 gap-4 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-5">
          {focusAreas.map(
            ({ icon: Icon, title, description }, index) => (
              <SpotlightCard
                key={title}
                data-reveal="up"
                className="premium-card group relative flex min-h-[220px] min-w-0 flex-col overflow-hidden rounded-[1.6rem] border border-forest/10 bg-white p-5 shadow-[0_14px_40px_rgba(23,71,54,0.045)] hover:border-saffron/40 hover:shadow-[0_28px_70px_rgba(23,71,54,0.12)] sm:p-6 lg:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-saffron/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex min-w-0 items-start justify-between gap-3">
                  <span className="card-icon flex size-11 shrink-0 items-center justify-center rounded-2xl text-forest transition-all duration-500 group-hover:bg-forest group-hover:text-saffron sm:size-12">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.7}
                    />
                  </span>

                  <span className="card-number shrink-0 font-editorial text-sm text-forest/25 transition-colors duration-300 group-hover:text-saffron/80">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-editorial mt-5 min-w-0 break-words text-[19px] leading-[1.2] text-forest sm:text-[21px]">
                  {title}
                </h3>

                <p className="mt-2 min-w-0 flex-1 break-words text-[13px] leading-6 text-ink/70 sm:text-[14px] sm:leading-7">
                  {description}
                </p>

                <span className="mt-4 flex min-w-0 items-center gap-2 text-[8px] font-extrabold uppercase tracking-[0.16em] text-forest/50 transition-colors duration-300 group-hover:text-forest/80 sm:text-[9px]">
                  <span className="min-w-0 truncate">
                    Our commitment
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </SpotlightCard>
            ),
          )}
        </div>
        <p data-reveal="up" className="font-editorial mx-auto mt-8 max-w-[780px] text-center text-xl leading-snug text-forest sm:text-2xl">
          No Patient Should Be Left Behind Because of Financial Difficulties.
        </p>
      </div>
    </section>
  )
}

export function MultiResearchCentreSection() {
  return (
    <section id="research" className="section-glow bg-paper py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <div data-reveal="left" className="min-w-0">
          <p className="eyebrow">Multidisciplinary research centre</p>

          <h2 className="font-editorial mt-5 max-w-[570px] break-words text-[clamp(2.7rem,4.8vw,3.8rem)] leading-[1.06] tracking-[-0.04em] text-forest">
            Advancing Medical Knowledge Through Research
          </h2>

          <p className="mt-6 max-w-[560px] break-words text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
            Research is a fundamental pillar of our Global Medical City
            vision. We aim to bring medical professionals, researchers,
            academic institutions and healthcare experts together to improve
            healthcare practices and contribute to medical science.
          </p>

          <div className="group relative mt-8 max-w-[540px] overflow-hidden rounded-[1.5rem] bg-saffron/20 px-6 py-6 transition-colors duration-500 hover:bg-saffron/25 sm:px-8 sm:py-7">
            <span
              className="absolute inset-y-0 left-0 w-1 bg-saffron"
              aria-hidden="true"
            />

            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest/65">
              Our research vision
            </p>

            <p className="font-editorial mt-3 break-words text-[22px] leading-snug text-forest sm:text-[27px]">
              Our objective is to encourage innovation, improve healthcare practices and contribute to medical science.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.18em] text-forest/50">
              <HeartPulse
                aria-hidden="true"
                className="size-3.5 shrink-0 text-forest/70"
              />
              Research for humanity
            </span>
          </div>
        </div>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          {[
            'Clinical and medical research',
            'Public health research',
            'Preventive healthcare',
            'Medical technology innovation',
            'Healthcare infrastructure research',
            'Diagnostic and treatment research',
            'Medical education and training',
            'Interdisciplinary research collaboration',
          ].map((area, index) => (
            <SpotlightCard
              key={area}
              data-reveal="up"
              className="premium-card group flex min-h-[96px] min-w-0 items-start gap-3 rounded-[1.25rem] border border-forest/5 bg-white px-4 py-5 shadow-[0_10px_30px_rgba(23,71,54,0.035)] hover:border-saffron/30 hover:shadow-[0_20px_50px_rgba(23,71,54,0.09)] sm:px-5"
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-mint/15 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-saffron">
                <Check
                  aria-hidden="true"
                  className="size-3.5"
                  strokeWidth={2.4}
                />
              </span>

              <div className="min-w-0 flex-1">
                <p className="break-words text-[13px] font-medium leading-6 text-ink/75 sm:text-sm">
                  {area}
                </p>

                <span className="mt-1 block text-[8px] font-extrabold uppercase tracking-[0.14em] text-forest/25 transition-colors duration-300 group-hover:text-saffron/70 sm:text-[9px]">
                  Response 0{index + 1}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

const medicalCollegeObjectives = [
  'Medical education institutions.',
  'Nursing and healthcare colleges.',
  'Medical training and skill development.',
  'Academic and research collaborations.',
  'Medical laboratories and research facilities.',
  'Professional healthcare development.',
  'Knowledge exchange and innovation.',
]

export function MedicalCollegeCitySection() {
  return (
    <section id="medical-education" className="bg-white py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
        <div data-reveal="left" className="min-w-0">
          <p className="eyebrow">Global Medical College City</p>
          <h2 className="font-editorial mt-5 max-w-[620px] break-words text-[clamp(2.7rem,4.8vw,3.8rem)] leading-[1.06] tracking-[-0.04em] text-forest">
            Education. Research. Innovation. Healthcare.
          </h2>
          <p className="mt-6 max-w-[600px] text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
            Kalima Foundation aims to develop the Global Medical City as a
            medical education and healthcare destination. The proposed Medical
            College City will create opportunities for students, doctors,
            researchers and healthcare professionals.
          </p>
          <p className="mt-4 max-w-[600px] text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
            We envision a connected ecosystem where medical education and
            practical healthcare experience complement each other.
          </p>
        </div>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          {medicalCollegeObjectives.map((objective, index) => (
            <SpotlightCard
              key={objective}
              data-reveal="up"
              className="premium-card group flex min-h-[88px] min-w-0 items-start gap-3 rounded-[1.25rem] border border-forest/5 bg-paper px-4 py-5 shadow-[0_10px_30px_rgba(23,71,54,0.035)] hover:border-saffron/30 hover:shadow-[0_20px_50px_rgba(23,71,54,0.09)] sm:px-5"
            >
              <span className="font-editorial shrink-0 text-lg text-saffron">0{index + 1}</span>
              <span className="min-w-0 text-sm leading-6 text-ink/75">{objective}</span>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

const researchDevelopmentObjectives = [
  'Support medical research initiatives.',
  'Encourage healthcare innovation.',
  'Explore advanced medical technologies.',
  'Promote collaboration with research institutions.',
  'Support medical education and scientific development.',
  'Improve healthcare accessibility through innovation.',
  'Encourage research-driven healthcare solutions.',
]

export function ResearchDevelopmentSection() {
  return (
    <section id="research-development" className="section-glow bg-paper py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="mx-auto max-w-[820px] text-center">
          <p className="eyebrow">Research &amp; Development – an important part of GMC</p>
          <h2 className="font-editorial mt-5 break-words text-[clamp(2.7rem,5vw,4rem)] leading-[1.06] tracking-[-0.045em] text-forest">
            Innovating Today for{' '}
            <em className="font-normal text-saffron">Better Healthcare Tomorrow.</em>
          </h2>
          <p className="mt-5 text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
            Research and Development will form an essential part of the Global
            Medical City. We aim to encourage new ideas, medical innovation,
            scientific research and technology-driven healthcare solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {researchDevelopmentObjectives.map((objective, index) => (
            <SpotlightCard
              key={objective}
              data-reveal="up"
              className="premium-card flex min-h-[92px] min-w-0 items-start gap-3 rounded-[1.25rem] border border-forest/5 bg-white px-4 py-5 shadow-[0_10px_30px_rgba(23,71,54,0.035)] sm:px-5"
            >
              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-forest" />
              <span className="min-w-0 flex-1 text-sm leading-6 text-ink/75">{objective}</span>
              <span className="font-editorial shrink-0 text-sm text-forest/30">0{index + 1}</span>
            </SpotlightCard>
          ))}
        </div>

        <p data-reveal="up" className="font-editorial mx-auto mt-10 max-w-[850px] text-center text-xl leading-snug text-forest sm:text-2xl">
          Research Creates Knowledge. Innovation Creates Possibilities.
          Healthcare Creates Hope.
        </p>
      </div>
    </section>
  )
}

export function WhoWeServeSection() {
  return (
    <section className="section-glow bg-paper pb-10 sm:pb-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.68fr] lg:gap-14">
          <div data-reveal="left" className="min-w-0 max-w-[800px]">
            <p className="eyebrow">Who we serve</p>

            <h2 className="font-editorial mt-5 break-words text-[clamp(2.7rem,5vw,3.9rem)] leading-[1.06] tracking-[-0.04em] text-forest">
              For those who need us the most.
            </h2>

            <p className="mt-5 max-w-[730px] break-words text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              We aim to serve people who deserve dignity, care and an
              opportunity for a healthier future.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                'Families facing financial barriers',
                'Rural communities',
                'Patients',
                'Children',
                'Women and mothers',
                'Senior citizens',
                'People with limited healthcare access',
                'Healthcare students',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-forest/12 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-forest/60 transition-colors duration-300 hover:border-saffron/50 hover:text-forest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <figure
            data-reveal="right"
            data-image-reveal
            className="image-frame group relative mx-auto    min-h-[300px] w-full max-w-[440px] overflow-hidden rounded-[1.5rem] bg-forest shadow-[0_20px_55px_rgba(22,67,52,0.16)] sm:min-h-[360px] sm:rounded-[1.75rem] lg:mx-0 lg:min-h-[380px] lg:max-w-none"
          >
            <img
              src={foundationAssets.ruralClassroom}
              alt="Children learning together in a rural classroom"
              className="absolute inset-0 h-full   w-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-[#052e26] via-[#052e26]/25 to-transparent"
              aria-hidden="true"
            />

            <figcaption className="absolute inset-x-0 bottom-0 z-10 box-border p-5 text-emerald-100 sm:p-6">
              Education opens the door to a better future.
            </figcaption>

            <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md">
              Hope in motion
            </span>
          </figure>
        </div>

        <div className="mt-10 border-t border-forest/15">
          {communities.map(({ title, description }, index) => (
            <article
              key={title}
              data-reveal="up"
              className="group grid min-w-0 gap-3 border-b border-forest/15 py-5 transition-colors duration-300 hover:bg-forest/[0.025] sm:py-6 md:grid-cols-[72px_minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-6"
            >
              <span className="font-editorial shrink-0 text-[28px] leading-none text-mint transition-transform duration-300 group-hover:-translate-y-0.5">
                0{index + 1}
              </span>

              <h3 className="min-w-0 break-words font-editorial text-[20px] leading-[1.15] text-forest sm:text-[24px]">
                {title}
              </h3>

              <div className="flex min-w-0 items-start justify-between gap-3">
                <p className="min-w-0 break-words text-[13px] leading-6 text-ink/75 sm:text-sm">
                  {description}
                </p>

                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-forest/25 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const momentImages = [
  {
    src: foundationAssets.healthCamp,
    alt: 'A community health camp with families waiting for care',
    caption: 'Care that travels to where it is needed most.',
    label: 'Health camps',
    figureClass: 'lg:col-span-7 lg:row-span-2   ',
    minH: 'min-h-[340px] sm:min-h-[400px] lg:min-h-[560px]  ',
  },
  {
    src: foundationAssets.aboutCommunity,
    alt: 'Mothers and children at a community gathering',
    caption: 'Togetherness is where change begins.',
    label: 'Community',
    figureClass: 'lg:col-span-5',
    minH: 'min-h-[280px] sm:min-h-[300px] lg:min-h-[272px]',
  },
  {
    src: foundationAssets.ruralClassroom,
    alt: 'Children learning in a rural classroom',
    caption: 'A classroom can change a whole future.',
    label: 'Education',
    figureClass: 'lg:col-span-5',
    minH: 'min-h-[280px] sm:min-h-[300px] lg:min-h-[272px]',
  },
]

export function MomentsSection() {
  return (
    <section
      id="moments"
      data-nav-section="work"
      className="relative isolate overflow-hidden bg-forest-deep py-10 text-white sm:py-14"
    >
      <div
        className="absolute -left-24 top-0 -z-10 size-[420px] rounded-full bg-mint/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-24 bottom-0 -z-10 size-[420px] rounded-full bg-saffron/[0.08] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12">
          <div data-reveal="left" className="min-w-0">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-saffron">
              Moments of hope
            </p>

            <h2 className="font-editorial mt-5 max-w-[720px] break-words text-[clamp(2.6rem,5vw,4rem)] leading-[1.06] tracking-[-0.04em] text-white">
              Small acts.{' '}
              <em className="font-normal text-saffron">
                Lasting change.
              </em>
            </h2>
          </div>

          <p
            data-reveal="right"
            className="min-w-0 max-w-[430px] break-words text-sm leading-7 text-white/65 sm:text-base sm:leading-8 md:justify-self-end"
          >
            Behind every initiative is a real person, a real family and a
            reason to keep going. These are the moments your kindness makes
            possible.
          </p>
        </div>

        <div className="mt-10 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {momentImages.map((image, index) => (
            <figure
              key={image.src}
              data-reveal="scale"
              data-image-reveal
              className={`image-frame group relative min-w-0   overflow-hidden rounded-[1.6rem] bg-forest sm:rounded-[2rem] ${image.figureClass} ${image.minH}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-[#031f19] via-[#031f19]/65 to-[#031f19]/5"
                aria-hidden="true"
              />

              <span className="absolute left-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md sm:left-6 sm:top-6">
                0{index + 1}
              </span>

              <figcaption className="absolute inset-x-0 bottom-0 z-20 flex min-w-0 items-end justify-between gap-3 p-5 sm:gap-4 sm:p-6 lg:p-7">
                <div className="min-w-0 flex-1">
                  <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-saffron sm:text-[9px] sm:tracking-[0.2em]">
                    {image.label}
                  </p>

                  <p className="font-editorial mt-1.5 max-w-full break-words text-[17px] leading-[1.2] text-white sm:mt-2 sm:text-[20px] lg:text-[clamp(1.1rem,1.6vw,1.5rem)]">
                    {image.caption}
                  </p>
                </div>

                <span className="mb-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 group-hover:border-saffron group-hover:bg-saffron group-hover:text-forest-deep sm:size-9">
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 sm:size-4"
                  />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          data-reveal="up"
          className="mt-10 flex min-w-0 flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.055] px-5 py-6 backdrop-blur-sm sm:flex-row sm:items-center sm:px-8"
        >
          <div className="flex min-w-0 items-start gap-4">
            <span className="card-icon--dark flex size-11 shrink-0 items-center justify-center rounded-full text-saffron">
              <HeartHandshake
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.7}
              />
            </span>

            <div className="min-w-0">
              <p className="font-editorial break-words text-[22px] leading-snug text-white sm:text-[26px]">
                Be part of the next moment.
              </p>

              <p className="mt-1 break-words text-xs leading-5 text-white/70">
                Your time, your support or your voice can become someone&apos;s
                turning point.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap gap-3 sm:w-auto">
            <a
              href="#donate"
              data-magnetic
              data-magnetic-strength="0.16"
              className="group inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-saffron px-5 text-[12px] font-bold text-forest-deep transition-colors hover:bg-[#f6b342] sm:flex-none"
            >
              Donate

              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#volunteer"
              className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-full border border-white/25 px-5 text-[12px] font-semibold text-white transition-colors hover:border-saffron/60 hover:bg-white/10 sm:flex-none"
            >
              Volunteer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
