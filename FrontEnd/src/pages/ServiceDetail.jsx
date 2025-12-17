import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../components/Services';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return (
            <div className="bg-primary min-h-screen text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
                    <Link to="/" className="text-accent underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-primary min-h-screen text-white">
            <Navbar />

            {/* Hero Section for Service */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/70"></div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 animate-fade-in-up">
                        {service.title}
                    </h1>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Professional, high-quality, and reliable {service.title} services.
                    </p>
                </div>
            </div>

            {/* Service Content */}
            <section className="py-20 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-accent">About This Service</h2>
                            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                {service.description}
                            </p>
                            <p className="text-gray-400 mb-8">
                                At Arvayon Pro Build Studio, we ensure that every aspect of {service.title} is handled with precision and care.
                                Our team of experts utilizes the latest technology and standards to deliver exceptional results.
                            </p>

                            <div className="bg-primary p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">Key Features</h3>
                                <ul className="space-y-3">
                                    {service.details && service.details.length > 0 ? (
                                        service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center text-gray-300">
                                                <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                {detail}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-gray-400 italic">Customized solutions tailored to your needs.</li>
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="rounded-2xl shadow-2xl border-4 border-accent/20"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 opacity-20"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full -z-10 border border-white/10"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-primary text-center">
                <h2 className="text-3xl font-bold mb-8">Ready to Start?</h2>
                <Link to="/contact" className="btn-primary inline-block px-10 py-4 text-lg">
                    Get a Quote for {service.title}
                </Link>
            </section>

            <Footer />
        </div>
    );
};

export default ServiceDetail;
