// import { DonationSection } from './donation-section'
// import { HeroSection } from './hero-section'
// import { MedicalCitySection } from './medical-city-section'
// import { FloatingDonate, ValuesMarquee } from './premium-ui'
// import { SiteFooter } from './site-footer'
// import { SiteHeader } from './site-header'
// import { SiteMotion } from './site-motion'
// import {
//   AboutSection,
//   FocusSection,
//   HealthcareApproachSection,
//   MomentsSection,
//   VisionMissionSection,
//   WhoWeServeSection,
// } from './story-sections'
// import { VolunteerSection } from './volunteer-section'
// import { LeadershipSection } from './LeadershipSection'

// export function KalimaHome() {
//   return (
//     <>
//       <SiteMotion />
//       <SiteHeader />
//       <main>
//         <HeroSection />
//         <ValuesMarquee />
//         <AboutSection />
//         <VisionMissionSection />
//         <FocusSection />
//         <HealthcareApproachSection />
//         <WhoWeServeSection />
//         {/* <MomentsSection /> */}
//         <MedicalCitySection />
//         <DonationSection />
//         <VolunteerSection />
//         <LeadershipSection />
//       </main>
//       <FloatingDonate />
//       <SiteFooter />
//     </>
//   )
// }





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
  HealthcareApproachSection,
  MomentsSection,
  VisionMissionSection,
  WhoWeServeSection,
} from './story-sections'

import { VolunteerSection } from './volunteer-section'

// Correct: Default import (without curly braces)
import LeadershipSection from './LeadershipSection'

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
        <HealthcareApproachSection />
        <WhoWeServeSection />

        {/* <MomentsSection /> */}

        <MedicalCitySection />
        <DonationSection />
        <VolunteerSection />
        <LeadershipSection />
      </main>

      <FloatingDonate />
      <SiteFooter />
    </>
  )
}