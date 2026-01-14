import React from 'react';
import projectPlanning from '../assets/project-planning.png';
import projectBuilding from '../assets/project-building.png';

const PMCFeature = ({ title, description, image }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-black/5 hover:border-[#D4B878] transition-all duration-300 group h-full flex flex-col">
        <div className="h-48 overflow-hidden relative">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#D4B878] transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

const PMCServices = () => {
    const features = [
        {
            title: 'Project Planning & Scheduling',
            description: 'Comprehensive timeline creation, resource allocation, and critical path analysis to ensure timely project delivery.',
            image: projectPlanning
        },
        {
            title: 'Cost Management',
            description: 'Detailed budgeting, cash flow monitoring, and expense tracking to keep your project strictly within financial targets.',
            image: projectBuilding
        },
        {
            title: 'Quality Control',
            description: 'Rigorous on-site inspections and material testing to guarantee construction meets the highest industry standards.',
            image: projectPlanning
        },
        {
            title: 'Vendor Management',
            description: 'Efficient coordination with contractors, suppliers, and stakeholders to streamline procurement and execution.',
            image: projectBuilding
        }
    ];

    return (
        <section className="section-padding bg-[#FDFBF7] relative overflow-hidden border-t border-white/50">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4B878]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4B878]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="inline-block">
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#D4B878] m-0">
                                PMC Services
                            </h2>
                        </div>
                    </div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Expert Project Management Consultancy to deliver your vision with precision, quality, and efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <PMCFeature
                            key={index}
                            {...feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PMCServices;
