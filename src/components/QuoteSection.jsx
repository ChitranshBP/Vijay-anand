import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection = ({ quoteId, quotes }) => {
    // Find the specific quote by ID
    const quote = quotes?.find(q => q.id === quoteId);

    // If no quote found, don't render anything
    if (!quote) return null;

    return (
        <section className="py-4 sm:py-5 md:py-6 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto relative"
                >
                    {/* Decorative Quote Marks */}
                    <div className="hidden sm:block absolute -top-2 -left-3 sm:-left-4 md:-left-6 text-medical-blue/10 text-4xl sm:text-5xl md:text-6xl font-serif leading-none select-none pointer-events-none">
                        "
                    </div>
                    <div className="hidden sm:block absolute -bottom-2 -right-3 sm:-right-4 md:-right-6 text-medical-blue/10 text-4xl sm:text-5xl md:text-6xl font-serif leading-none select-none pointer-events-none rotate-180">
                        "
                    </div>
                    <blockquote className="text-center">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-light leading-relaxed sm:leading-relaxed md:leading-relaxed mb-3 sm:mb-4 px-2 sm:px-4">
                            {quote.quote}
                        </p>

                        {/* Decorative Divider */}
                        <div className="flex items-center justify-center mb-2 sm:mb-3">
                            <div className="h-px w-6 sm:w-8 md:w-10 bg-gradient-to-r from-transparent via-medical-blue to-transparent"></div>
                            <div className="mx-2 sm:mx-3 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-medical-blue"></div>
                            <div className="h-px w-6 sm:w-8 md:w-10 bg-gradient-to-l from-transparent via-medical-blue to-transparent"></div>
                        </div>

                        {/* Author Attribution */}
                        <footer className="text-center px-4">
                            {quote.author && (
                                <cite className="text-medical-blue font-medium text-xs sm:text-sm md:text-base not-italic block mb-0.5 sm:mb-1">
                                    {quote.author}
                                </cite>
                            )}
                            {quote.name && (
                                <p className="text-gray-500 text-xs sm:text-xs md:text-sm font-light">
                                    {quote.name}
                                </p>
                            )}
                        </footer>
                    </blockquote>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteSection;
