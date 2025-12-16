import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection = ({ quoteId, quotes }) => {
    // Find the specific quote by ID
    const quote = quotes?.find(q => q.id === quoteId);

    // If no quote found, don't render anything
    if (!quote) return null;

    return (
        <section className="py-8 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
            {/* Decorative Quote Marks */}
            <div className="absolute top-4 left-4 md:left-1/4 text-medical-blue/8 text-6xl md:text-8xl font-serif leading-none select-none pointer-events-none">
                "
            </div>
            <div className="absolute bottom-4 right-4 md:right-1/4 text-medical-blue/8 text-6xl md:text-8xl font-serif leading-none select-none pointer-events-none rotate-180">
                "
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <blockquote className="text-center">
                        <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-4 px-4">
                            {quote.quote}
                        </p>

                        {/* Decorative Divider */}
                        <div className="flex items-center justify-center mb-3">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent via-medical-blue to-transparent"></div>
                            <div className="mx-3 w-1.5 h-1.5 rounded-full bg-medical-blue"></div>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent via-medical-blue to-transparent"></div>
                        </div>

                        {/* Author Attribution */}
                        <footer className="text-center">
                            {quote.author && (
                                <cite className="text-medical-blue font-medium text-sm md:text-base not-italic block mb-1">
                                    {quote.author}
                                </cite>
                            )}
                            {quote.name && (
                                <p className="text-gray-500 text-xs md:text-sm font-light">
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
