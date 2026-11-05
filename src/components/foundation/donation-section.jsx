import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  Check,
  Copy,
  Heart,
  HeartPulse,
  Maximize2,
  QrCode,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import { foundationAssets } from './assets'
import { SpotlightCard } from './premium-ui'

const accounts = [
  {
    bank: 'Bank of Baroda',
    account: '74520100007694',
    ifsc: 'BARB0VJMMAN',
    micr: '576012020',
    branch: 'Manipal Branch',
    qr: foundationAssets.barodaQr,
    qrAlt: 'Bank of Baroda QR code to donate',
    upi: 'kalim95352694@barodampay',
  },
  {
    bank: 'Axis Bank',
    account: '923020062661915',
    ifsc: 'UTIB0005199',
    micr: '576211008',
    branch: 'Brahmavara Branch',
    qr: foundationAssets.axisQr,
    qrAlt: 'Axis Bank QR code to donate',
  },
]

const donationCategories = [
  {
    title: 'Healthcare Initiatives',
    icon: HeartPulse,
    items: [
      'Medical treatment assistance.',
      'Medicines and hospital care support.',
      'Free medical camps and health awareness programs.',
      'Healthcare infrastructure development.',
    ],
  },
  {
    title: 'Education Programs',
    icon: BookOpen,
    items: [
      'Books and educational materials.',
      'Scholarships and education assistance.',
      'Literacy and learning initiatives.',
    ],
  },
  {
    title: 'Community Development',
    icon: Users,
    items: [
      'Community welfare initiatives.',
      'Collaboration with NGOs and local institutions.',
      'Volunteer and social development activities.',
    ],
  },
  {
    title: 'Operational & Administrative Support',
    icon: ShieldCheck,
    items: [
      'Program management.',
      'Essential operational expenses.',
      'Administrative and coordination costs.',
    ],
  },
]

function CopyButton({ value, label, onCopy, copied }) {
  return (
    <button
      type="button"
      onClick={() => onCopy(value)}
      aria-label={`Copy ${label}`}
      className="inline-flex min-h-8 shrink-0 items-center gap-1.5 rounded-full border border-white/25 px-2.5 text-[10px] font-semibold text-white/85 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
    >
      {copied ? <Check aria-hidden="true" className="size-3.5" /> : <Copy aria-hidden="true" className="size-3.5" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

function DetailTile({ label, value, className = '', onCopy, copied }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3.5 ${className}`}>
      <dt className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/60">{label}</dt>
      <dd className="mt-1.5 flex items-start justify-between gap-2.5">
        <span className="min-w-0 break-all text-[13px] font-semibold leading-5 text-white/95 sm:text-sm">{value}</span>
        <CopyButton value={value} label={label.toLowerCase()} onCopy={onCopy} copied={copied} />
      </dd>
    </div>
  )
}

export function DonationSection() {
  const [copiedValue, setCopiedValue] = useState(null)
  const [copyFailed, setCopyFailed] = useState(false)
  const [enlarged, setEnlarged] = useState(null)

  async function copyValue(value) {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedValue(value)
      setCopyFailed(false)
      window.setTimeout(() => setCopiedValue((current) => (current === value ? null : current)), 1800)
    } catch {
      setCopyFailed(true)
    }
  }

  useEffect(() => {
    if (!enlarged) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setEnlarged(null)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [enlarged])

  return (
    <>
      <section id="donation-utilisation" className="section-glow bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div data-reveal="up" className="max-w-[800px]">
            <p className="eyebrow">Donation utilisation</p>
            <h2 className="font-editorial mt-5 text-[clamp(2.7rem,5vw,4rem)] leading-[1.06] tracking-[-0.045em] text-forest">
              Your Contribution Can Make a Difference
            </h2>
            <p className="mt-5 max-w-[760px] text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              Every contribution can support meaningful social initiatives and help improve the lives of people in need. Donations are intended to support the following areas:
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {donationCategories.map(({ title, icon: Icon, items }, index) => (
              <SpotlightCard
                key={title}
                data-reveal="up"
                className="premium-card group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-forest/10 bg-white p-5 shadow-[0_14px_40px_rgba(23,71,54,0.04)] hover:border-saffron/40 hover:shadow-[0_26px_60px_rgba(23,71,54,0.1)] sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-saffron/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="card-icon flex size-10 items-center justify-center rounded-xl text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-saffron">
                    <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.8} />
                  </span>
                  <span className="font-editorial text-xs text-forest/25 transition-colors duration-300 group-hover:text-saffron/80">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-editorial mt-5 text-[20px] leading-tight text-forest sm:text-[22px]">{title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] leading-6 text-ink/75">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-mint transition-colors duration-300 group-hover:bg-saffron" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto pt-5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-forest/45 transition-colors duration-300 group-hover:text-forest/70">
                  {index === 3 ? 'Responsible stewardship' : 'Your support at work'}
                </span>
              </SpotlightCard>
            ))}
          </div>

          <p data-reveal="up" className="mt-7 flex items-start gap-2.5 text-xs leading-6 text-ink/65">
            <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-forest/65" />
            Kalima Foundation &amp; Charitable Trust aims to utilize contributions responsibly and efficiently in support of its charitable objectives.
          </p>
        </div>
      </section>

      <section id="donate" className="bg-paper px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest px-5 py-10 text-white sm:rounded-[2.5rem] sm:px-8 sm:py-14 lg:px-16 lg:py-20">
          <div className="absolute -bottom-32 -left-24 size-80 rounded-full bg-white/[0.045]" aria-hidden="true" />
          <div className="absolute -right-24 -top-32 size-96 rounded-full border border-white/[0.08]" aria-hidden="true" />
          <div className="relative">
            <div data-reveal="up" className="max-w-[820px]">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-saffron sm:text-xs">Support our cause – donate now</p>
                <span className="premium-tag">
               
                  Give with confidence
                </span>
              </div>
              <h2
                aria-label="Be a Part of Someone's Hope."
                className="donation-title font-editorial mt-5 max-w-[760px] text-[clamp(2.35rem,5vw,4rem)] leading-[1.06] tracking-[-0.04em] text-white"
              >
                {['Be', 'a', 'Part', 'of', "Someone's"].map((word) => (
                  <span key={word} data-donation-word className="inline-block">
                    {word}{' '}
                  </span>
                ))}
                <em data-donation-word className="inline-block font-normal text-saffron">Hope.</em>
              </h2>
              <p className="mt-5 max-w-[820px] text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8">
                Your support can help provide healthcare assistance, educational opportunities and essential community support to people who need it. Whether you contribute financially, volunteer your time or help spread awareness, every effort matters.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3" data-reveal="up">
              {[
                { icon: ShieldCheck, label: 'Official trust accounts' },
                { icon: QrCode, label: 'Scan & pay securely' },
                { icon: Heart, label: 'Every contribution matters' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-saffron/30 hover:bg-white/[0.08]"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                    <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
                  </span>
                  <span className="text-[11px] font-semibold leading-5 text-white/80">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3" data-reveal="up">
              <Heart aria-hidden="true" className="size-4 text-saffron" />
              <h3 className="text-sm font-semibold text-saffron">Bank Transfer &amp; UPI Donations</h3>
            </div>

            <div className="mt-5 grid gap-5 lg:gap-6">
              {accounts.map((account) => (
                <article
                  key={account.bank}
                  data-reveal="scale"
                  className="group overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.055] shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-colors duration-500 hover:border-saffron/30"
                >
                  <div className="grid lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
                    <div className="flex flex-col border-b border-white/10 bg-white p-4 text-forest sm:p-5 lg:border-b-0 lg:border-r">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-forest/65">Scan &amp; pay</p>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/5 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.14em] text-forest/65">
                          <QrCode aria-hidden="true" className="size-3.5" />
                          UPI QR
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setEnlarged(account)}
                        aria-label={`Enlarge ${account.bank} QR code`}
                        className="group relative mt-3 block w-full cursor-zoom-in overflow-hidden rounded-xl bg-white ring-1 ring-forest/10 transition-shadow hover:shadow-[0_12px_35px_rgba(7,62,51,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                      >
                        <img
                          src={account.qr}
                          alt={account.qrAlt}
                          className="block h-auto w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="pointer-events-none absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-forest-deep/85 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white opacity-90 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                          <Maximize2 aria-hidden="true" className="size-3" />
                          Enlarge
                        </span>
                      </button>

                      <div className="mt-3 flex flex-col items-center gap-1 text-center">
                        <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-forest/55">
                          <Maximize2 aria-hidden="true" className="size-3" />
                          Tap the code to enlarge
                        </p>
                        <p className="text-[11px] leading-5 text-ink/65">Open any UPI app, scan, and confirm the amount.</p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-editorial text-[26px] leading-tight text-white sm:text-[30px] lg:text-[34px]">{account.bank}</h3>
                          <p className="mt-1 text-[11px] text-white/70">Verified donation account</p>
                        </div>
                        <span className="rounded-full border border-saffron/35 bg-saffron/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-saffron">
                          Trust account
                        </span>
                      </div>

                      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                        <DetailTile
                          className="sm:col-span-2"
                          label="Account name"
                          value="Kalima Foundation and Charitable Trust"
                          onCopy={copyValue}
                          copied={copiedValue === 'Kalima Foundation and Charitable Trust'}
                        />
                        <DetailTile
                          label="Account number"
                          value={account.account}
                          onCopy={copyValue}
                          copied={copiedValue === account.account}
                        />
                        <DetailTile label="IFSC code" value={account.ifsc} onCopy={copyValue} copied={copiedValue === account.ifsc} />
                        <DetailTile label="MICR code" value={account.micr} onCopy={copyValue} copied={copiedValue === account.micr} />
                        <DetailTile label="Branch" value={account.branch} onCopy={copyValue} copied={copiedValue === account.branch} />
                        {account.upi ? (
                          <DetailTile
                            className="sm:col-span-2"
                            label="UPI ID"
                            value={account.upi}
                            onCopy={copyValue}
                            copied={copiedValue === account.upi}
                          />
                        ) : null}
                      </dl>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 max-w-[1000px] text-xs leading-6 text-white/80">
              Use the official Bank of Baroda or Axis Bank QR code displayed on this website to make a UPI payment. After making a donation, donors may contact the Trust through its official communication channels for donation confirmation and receipt-related assistance.
            </p>
            <p className="mt-3 min-h-5 text-xs text-white/75" aria-live="polite" role="status">
              {copyFailed ? 'Copy is unavailable. Please select and copy the details manually.' : copiedValue ? 'Copied to clipboard.' : ''}
            </p>
          </div>
        </div>

        {enlarged ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${enlarged.bank} donation QR code`}
            onClick={() => setEnlarged(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-deep/90 p-4 backdrop-blur-md sm:p-6"
          >
            <div className="w-full max-w-[520px]" onClick={(event) => event.stopPropagation()}>
              <div className="mb-3 flex items-center justify-between gap-3 text-white">
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-saffron">Scan &amp; pay</p>
                  <p className="font-editorial mt-1 text-xl leading-tight sm:text-2xl">{enlarged.bank}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setEnlarged(null)}
                  aria-label="Close QR preview"
                  autoFocus
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                >
                  <X aria-hidden="true" className="size-5" />
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <img
                  src={enlarged.qr}
                  alt={enlarged.qrAlt}
                  className="mx-auto block h-auto max-h-[82vh] w-auto max-w-full rounded-xl object-contain"
                />
              </div>

              <p className="mt-3 text-center text-[11px] leading-5 text-white/60">
                Verify the account name before confirming your donation.
              </p>
            </div>
          </div>
        ) : null}
      </section>
    </>
  )
}
