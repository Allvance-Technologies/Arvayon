import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';


const ContactPage = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <Navbar />
            <div className="pt-24">
                <Contact />
            </div>

        </div>
    );
};

export default ContactPage;
