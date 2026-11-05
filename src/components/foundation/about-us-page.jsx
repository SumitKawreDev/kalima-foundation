import { useEffect } from 'react'
import LeadershipSection from './LeadershipSection'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'
import { SiteMotion } from './site-motion'

export default function AboutUsPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'About Us | Kalima Foundation & Charitable Trust'

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <>
      <SiteMotion />
      <SiteHeader />
      <main className="pt-[82px] sm:pt-[92px]">
        <LeadershipSection />
      </main>
      <SiteFooter />
    </>
  )
}
