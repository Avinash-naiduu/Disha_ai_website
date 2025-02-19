import React from 'react'
import Banners from '../components/Banners'
import Hero from '../components/Hero'
import StatisticsSection from '../components/StatisticsSection'
import VisionSection from '../components/VisionSection'
import OfferingsSection from '../components/OfferingsSection'
import BenefitsSection from '../components/BenefitsSection'
import AboutUs from '../components/aboutus'
import ReachUs from '../components/ReachUs'
import TestimonialsSlider from '../components/Testimonials'

const Home = () => {
    //x
    return (
        <div>
            <Banners />
            <Hero />
            <StatisticsSection />
            <VisionSection/>
            <OfferingsSection/>
            <BenefitsSection/>
            <AboutUs/>
            <TestimonialsSlider/>
            <ReachUs/>
        </div>
    )
}

export default Home