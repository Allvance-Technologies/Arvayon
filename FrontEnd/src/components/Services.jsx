import React from 'react';
import { Link } from 'react-router-dom';
import service2d from '../assets/service-2d-new.png';
import service3d from '../assets/service-3d-new.png';
import serviceInterior from '../assets/service-interior-new.png';
import serviceStructural from '../assets/service-structural.png';
import serviceEstimation from '../assets/service-estimation.png';
import serviceBim from '../assets/service-bim.png';
import serviceApproval from '../assets/service-approval.png';

export const servicesData = [
    {
        id: '2d-plans',
        title: '2D Plans & Drawings',
        image: service2d,
        description: 'Detailed 2D floor plans and architectural drawings that serve as the foundation for your construction project. accurate measurements and layout planning.',
        details: [
            'Architectural Floor Plans',
            'Furniture Layouts',
            'Site Plans',
            'Working Drawings'
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: '3d-modelling',
        title: '3D Modelling & Rendering',
        image: service3d,
        description: 'Photorealistic 3D elevations and walkthroughs that help you visualize the final look of your property before construction begins.',
        details: [
            'Exterior Elevation (Day/Night)',
            '3D Walkthrough Animation',
            'Landscape Design',
            'Bird\'s Eye View'
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
    {
        id: 'interior-design',
        title: 'Interior & Exterior Design',
        image: serviceInterior,
        description: 'Custom interior and exterior design solutions that reflect your personal style while ensuring functionality and comfort.',
        details: [
            'Living Room & Bedroom Design',
            'Modular Kitchens',
            'False Ceiling Designs',
            'Lighting Layouts'
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        id: 'structural',
        title: 'Structural Design & Detailing',
        image: serviceStructural,
        description: 'Robust structural designs aimed at safety, durability, and cost-efficiency, complying with all safety standards.',
        details: [],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        id: 'estimation',
        title: 'Estimation & Quantity Surveying',
        image: serviceEstimation,
        description: 'Precise material and cost estimation to help you plan your budget effectively and avoid overruns.',
        details: [],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: 'bim',
        title: 'BIM Detailing & Consulting',
        image: serviceBim,
        description: 'Advanced Building Information Modeling (BIM) services for better project coordination and visualization.',
        details: [],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
        ),
    },
    {
        id: 'approval',
        title: 'Government Plan Approval',
        image: serviceApproval,
        description: 'Hassle-free liaison services to get your building plans approved by local government authorities.',
        details: [],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

const Services = () => {
    return (
        <section id="services" className="section-padding bg-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <Link
                            to={`/services/${service.id}`}
                            key={index}
                            className="bg-primary p-8 rounded-xl border border-white/5 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden block"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start h-full">
                                <div className="w-16 h-16 bg-secondary/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors duration-300 text-accent">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                                    Read more &rarr;
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
