import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';

import ProjectScroll from '../components/ProjectScroll';
import Services from '../components/Services';
import PMCServices from '../components/PMCServices';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';


const Home = () => {
    return (
        <div className="min-h-screen pb-20 md:pb-0">
            <Navbar />
            <div className="pt-20">
                <Hero />
                <About />

                <PMCServices />
                <Services />
                {/* Workprocess moved inside PMCServices */}
                <Portfolio />
                <Contact />

            </div>
        </div>
    );
};

export default Home;
