import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-serif font-bold text-white mb-2">
                            ARVAYON <span className="text-accent">PRO BUILD STUDIO</span>
                        </h2>
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Arvayon Pro Build Studio. All rights reserved.
                        </p>
                    </div>

                    {/* Social icons removed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
