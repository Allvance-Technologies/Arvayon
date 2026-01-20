import React from 'react';

const VisionMission = () => {
    return (
        <section className="py-20 bg-[#C6A868] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Vision */}
                    <div className="bg-[#FDFBF7] p-10 rounded-xl border border-accent/20 hover:border-accent transition-all duration-300 shadow-lg hover:shadow-xl relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 border border-accent/20">
                                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To provide design-driven Project Management Consultancy that unites architecture, engineering, and execution into a single, structured system.                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="bg-[#FDFBF7] p-10 rounded-xl border border-accent/20 hover:border-accent transition-all duration-300 shadow-lg hover:shadow-xl relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 border border-accent/20">
                                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Delivering complete solutions under one roof, blending creativity with functionality, while ensuring transparency, quality, and timely delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
