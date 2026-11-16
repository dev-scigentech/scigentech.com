import Hero from "./components/Hero"
import EspaStrip from "./components/EspaStrip"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"

export default function Home() {
  return (
    <>
      <EspaStrip />
      <Hero />
      <WearYourStory />
      <div id="why">
        <FeatureCarousel />
      </div>
      <div id="work">
        <PortfolioGrid />
      </div>
      <Timeline />
      <Marquee />
      <div id="contact">
        <ContactForm />
      </div>
      {/* <NewsletterSubscribe /> */}
    </>
  )
}
