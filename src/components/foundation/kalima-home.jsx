import { DonationSection } from './donation-section'
import { HeroSection } from './hero-section'
import { MedicalCitySection } from './medical-city-section'
import { FloatingDonate, ValuesMarquee } from './premium-ui'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'
import { SiteMotion } from './site-motion'

import {
  AboutSection,
  FocusSection,
  MedicalCollegeCitySection,
  MultiResearchCentreSection,
  ResearchDevelopmentSection,
  VisionMissionSection,
  WhoWeServeSection,
} from './story-sections'

import { VolunteerSection } from './volunteer-section'

export function KalimaHome() {
  return (
    <>
      <SiteMotion />

      <SiteHeader />

      <main>
        <HeroSection />
        <ValuesMarquee />
        <AboutSection />
        <VisionMissionSection />
        <FocusSection />
        <MultiResearchCentreSection />
        <MedicalCollegeCitySection />
        <ResearchDevelopmentSection />
        <WhoWeServeSection />

        <MedicalCitySection />
        <DonationSection />
        <VolunteerSection />
      </main>

      <FloatingDonate />
      <SiteFooter />
    </>
  )
}