import React from 'react';
import { useNavigate } from 'react-router-dom';
import pmcCostLeakage from '../assets/pmc-cost-leakage.png';
import pmcContractorControl from '../assets/pmc-contractor-control.png';
import pmcQualityInspection from '../assets/pmc-quality-inspection.png';
import pmcTimelineSchedule from '../assets/pmc-timeline-schedule.png';
import {
    ShieldCheck,
    Compass,
    BarChart3,
    CheckCircle2,
    Building2,
    Globe,
    Home,
    ArrowRight,
    Search,
    UserCheck,
    CheckCircle
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Workprocess from './Workprocess';

const PMCServices = () => {
    const navigate = useNavigate();

    const handleConsultation = () => {
        navigate('/contact');
        // Optional: Scroll to the consultation form if needed
        setTimeout(() => {
            const element = document.getElementById('book-consultation');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Hello Arvayon, I am interested in your PMC services. I'd like to book a consultation.");
        window.open(`https://wa.me/919363035048?text=${message}`, '_blank');
    };

    const failures = [
        {
            title: 'Cost Leakages',
            desc: 'Poor planning and uncontrolled decisions inflate budgets.',
            image: pmcCostLeakage
        },
        {
            title: 'Contractor Dependency',
            desc: 'Clients lose control when contractors manage everything.',
            image: pmcContractorControl
        },
        {
            title: 'Quality Issues',
            desc: 'Material substitutions and weak supervision reduce quality.',
            image: pmcQualityInspection
        },
        {
            title: 'Timeline Delays',
            desc: 'Lack of coordination causes unnecessary project delays.',
            image: pmcTimelineSchedule
        }
    ];

    const valueProps = [
        {
            title: 'Design-Led PMC',
            desc: 'Architecture and engineering guide every decision.',
            icon: <Compass className="w-6 h-6" />
        },
        {
            title: 'Transparent Costing',
            desc: 'No hidden margins or material manipulation.',
            icon: <Search className="w-6 h-6" />
        },
        {
            title: 'Execution Discipline',
            desc: 'Regular site inspections and technical checks.',
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: 'Clear Reporting',
            desc: 'Written reports instead of verbal promises.',
            icon: <BarChart3 className="w-6 h-6" />
        }
    ];

    const scopes = [
        {
            title: 'Pre-Construction',
            items: ['Feasibility', 'Budgeting', 'BOQ Review', 'Contractor Evaluation']
        },
        {
            title: 'Execution',
            items: ['Site Supervision', 'Coordination', 'Quality Monitoring']
        },
        {
            title: 'Monitoring',
            items: ['Progress Tracking', 'Cost Control', 'Reporting']
        },
        {
            title: 'Closure',
            items: ['Final Inspections', 'Snag List', 'Handover Support']
        }
    ];

    const targetAudience = [
        { title: 'Home Owners', category: '₹40L+', icon: <Home className="w-5 h-5" /> },
        { title: 'Professionals', category: 'Busy Lives', icon: <UserCheck className="w-5 h-5" /> },
        { title: 'NRI Clients', category: 'Remote Control', icon: <Globe className="w-5 h-5" /> },
        { title: 'Commercial', category: 'Large Projects', icon: <Building2 className="w-5 h-5" /> }
    ];

    return (
        <section className="section-padding bg-white relative overflow-hidden" id="pmc">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#FDFBF7] to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Hero Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1 bg-[#D4B878]/10 text-[#D4B878] text-sm font-bold uppercase tracking-wider rounded-full mb-4">
                            Efficiency & Control
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-gray-900 leading-[0.9] mb-6">
                            Project Management <br />
                            <span className="text-[#D4B878]">Consultancy (PMC)</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium">
                            Build with clarity. Control every stage of your construction project with structured planning, transparent monitoring, and disciplined execution.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={handleConsultation}
                            className="px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest hover:bg-[#D4B878] transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
                        >
                            Book PMC Consultation
                        </button>
                    </div>
                </div>

                {/* Problem Awareness Section - Reverted to Card + Image Style */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold uppercase tracking-widest text-[#D4B878] mb-2">The Reality Check</h3>
                        <h4 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase">Why Most Construction Projects Fail</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {failures.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg border border-black/5 hover:border-[#D4B878] transition-all duration-300 group h-full flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h5 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#D4B878] transition-colors duration-300">
                                        {item.title}
                                    </h5>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Definition & Control Flow Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D4B878]/5 rounded-full blur-3xl"></div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">What is Project Management Consultancy?</h3>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                <span className="font-bold text-[#D4B878]">PMC</span> is a professional system where your project is planned, monitored, and controlled from design finalization to handover.
                            </p>
                            <p>
                                PMC works in the <span className="italic font-medium">client’s best interest</span>, ensuring cost control, quality assurance, and timeline discipline.
                            </p>
                        </div>

                        {/* Control Flow Visual */}
                        <div className="mt-10 p-8 bg-gray-900 rounded-2xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldCheck className="w-24 h-24" />
                            </div>
                            <h5 className="text-[#D4B878] font-bold uppercase tracking-wider text-sm mb-6">PMC Control Flow</h5>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="px-4 py-2 border border-white/20 rounded bg-white/5 font-bold">Client</div>
                                <ArrowRight className="hidden md:block text-[#D4B878]" />
                                <div className="px-6 py-3 bg-[#D4B878] text-gray-900 rounded font-black shadow-lg shadow-[#D4B878]/20">PMC</div>
                                <ArrowRight className="hidden md:block text-[#D4B878]" />
                                <div className="px-4 py-2 border border-white/20 rounded bg-white/5 font-bold text-center">Contractors & Vendors</div>
                            </div>
                            <p className="mt-6 text-sm text-gray-400 text-center md:text-left">All decisions are validated, documented, and monitored.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {valueProps.map((item, idx) => (
                            <div key={idx} className="p-6 bg-white border-l-4 border-[#D4B878] shadow-sm hover:shadow-md transition-all">
                                <div className="text-[#D4B878] mb-4">{item.icon}</div>
                                <h6 className="font-bold text-gray-900 mb-2">{item.title}</h6>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scope of Services */}
                <div className="mb-24 p-1 rounded-3xl bg-gradient-to-br from-[#D4B878]/10 via-transparent to-[#D4B878]/5">
                    <div className="bg-[#FDFBF7] p-8 md:p-16 rounded-[calc(1.5rem-4px)]">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">PMC Scope of Services</h3>
                            <div className="w-20 h-1.5 bg-[#D4B878] mx-auto md:mx-0"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {scopes.map((scope, idx) => (
                                <div key={idx}>
                                    <h5 className="font-black text-[#D4B878] uppercase tracking-tighter text-xl mb-6">{scope.title}</h5>
                                    <ul className="space-y-4">
                                        {scope.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-[#D4B878]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Working Progress Integrated */}
                <div className="mb-24 rounded-3xl overflow-hidden shadow-2xl">
                    <Workprocess light={true} />
                </div>

                {/* Target Audience & Footer CTA */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 w-full">
                        <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter">Who Should Take PMC?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {targetAudience.map((item, idx) => (
                                <div key={idx} className="p-8 bg-white border border-gray-100 flex items-center gap-6 group hover:bg-gray-900 hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl">
                                    <div className="text-[#D4B878] transform group-hover:scale-110 transition-transform duration-500">
                                        {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                                    </div>
                                    <div>
                                        <div className="font-black text-xl md:text-2xl leading-tight uppercase tracking-tight">{item.title}</div>
                                        <div className="text-xs md:text-sm uppercase font-bold tracking-[0.2em] text-[#D4B878] group-hover:text-white/60 transition-colors">
                                            {item.category}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full bg-[#D4B878] p-12 text-gray-900 rounded-2xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <h3 className="text-4xl font-black uppercase mb-6 leading-[0.9] tracking-tighter">Construction <br /> with PMC <br /> is Control</h3>
                        <p className="mb-10 text-lg font-bold opacity-80 max-w-sm">Schedule a professional PMC consultation and build without stress.</p>
                        <button
                            onClick={handleWhatsApp}
                            className="inline-flex items-center gap-4 px-10 py-5 bg-gray-900 text-white font-black uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all rounded-sm shadow-xl"
                        >
                            <FaWhatsapp className="text-2xl" />
                            WhatsApp Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Horizontal divider/end of section */}
            <div className="mt-24 border-t border-gray-100"></div>
        </section>
    );
};

export default PMCServices;
