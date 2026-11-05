import { useEffect } from 'react'
import LeadershipSection from './LeadershipSection'
import AboutUsHeroSlider from './about-us-hero-slider'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'
import { SiteMotion } from './site-motion'

export default function AboutUsPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'About Us | Kalima Foundation (R.) & Charitable Trust'

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <>
      <SiteMotion />
      <SiteHeader />
      <main>
        <AboutUsHeroSlider />
        <LeadershipSection />
      </main>
      <SiteFooter />
    </>
  )
}
