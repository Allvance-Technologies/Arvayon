import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import ProjectScroll from '../components/ProjectScroll'; // New
import OfferAd from '../components/OfferAd'; // New
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot'; // New

const Home = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <Navbar />
            <div className="pt-24">
                <OfferAd />
            </div>
            <Hero />
            <About />
            <VisionMission />
            {/* ProjectScroll moved to Hero background */}
            <Services />
            {/* Packages section removed as per request */}
            <WhyChooseUs />
            <Portfolio />
            <Contact />
            <Footer />
            <ChatBot />
        </div>
    );
};

export default Home;
