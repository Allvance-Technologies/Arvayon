import React, { useState } from 'react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Pop-up Message Bubble */}
            {!isOpen && (
                <div className="mb-4 bg-white text-primary px-4 py-2 rounded-xl rounded-br-none shadow-xl transform transition-all duration-300 animate-bounce">
                    <p className="font-bold text-sm whitespace-nowrap">May I help you !!!!</p>
                </div>
            )}

            {/* Chat Window (Mockup) */}
            {isOpen && (
                <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 origin-bottom-right">
                    <div className="bg-primary p-4 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xs">
                                AI
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Assistant</h3>
                                <p className="text-accent text-xs">Online</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="h-64 bg-gray-50 p-4 overflow-y-auto">
                        <div className="flex justify-start mb-4">
                            <div className="bg-gray-200 text-gray-800 rounded-lg rounded-tl-none py-2 px-3 text-sm max-w-[80%]">
                                Hello! How can I assist you with your project today?
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border-t border-gray-100 bg-white">
                        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="bg-transparent flex-1 text-sm outline-none text-gray-700"
                                disabled
                            />
                            <button className="text-primary opacity-50 cursor-not-allowed">
                                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-accent hover:bg-yellow-400 text-primary rounded-full shadow-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110 focus:outline-none"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                ) : (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default ChatBot;
