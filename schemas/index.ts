import homePage from './documents/homePage'
import post from './documents/post'
import testimonial from './documents/testimonial'
import caseStudy from './documents/caseStudy'
import faq from './documents/faq'
import pricing from './documents/pricing'

// sections
import heroSection from './sections/heroSection'
import painPointsSection from './sections/painPointsSection'
import servicesSection from './sections/servicesSection'
import processSection from './sections/processSection'
import ctaSection from './sections/ctaSection'

// reusable objects
import seo from './objects/seo'
import link from './objects/link'
import stat from './objects/stat'
import serviceCard from './objects/serviceCard'
import processStep from './objects/processStep'

export const schemaTypes = [
  // documents
  homePage,
  post,
  testimonial,
  caseStudy,
  faq,
  pricing,

  // sections (CRITICAL)
  heroSection,
  painPointsSection,
  servicesSection,
  processSection,
  ctaSection,

  // objects
  seo,
  link,
  stat,
  serviceCard,
  processStep,
]