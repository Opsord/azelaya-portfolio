import { useLanguage } from '../context/LanguageContext';
import React, { useState } from 'react';

const Contact = () => {
    const { trad } = useLanguage();
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple form handling simulation
        setStatus('success');
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-surface relative overflow-hidden">
            {/* Background glowing gradients */}
            <div className="absolute top-[10%] left-[5%] w-[25vw] h-[25vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />

            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop z-10 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background mb-4">
                        {trad('contact.title')}
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto"></div>
                </div>

                {/* Contact Box Layout */}
                <div className="bg-surface-container border border-outline-variant/30 rounded-sm p-8 md:p-16 relative overflow-hidden clip-chamfer-tr max-w-5xl mx-auto shadow-xl shadow-surface-container-lowest/50">
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">
                        
                        {/* Left Side: Contact Information */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-on-background mb-6">
                                    {trad('contact.heading')}
                                </h3>
                                <p className="font-sans text-sm md:text-base text-on-surface-variant mb-12 max-w-md leading-relaxed">
                                    {trad('contact.description')}
                                </p>

                                <div className="space-y-6">
                                    {/* Email */}
                                    <a 
                                        href="mailto:andres.zelaya@usach.cl" 
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200 shadow-sm">
                                            <span className="material-symbols-outlined text-lg">mail</span>
                                        </div>
                                        <span className="font-mono text-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                                            andres.zelaya@usach.cl
                                        </span>
                                    </a>

                                    {/* Location */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                                            <span className="material-symbols-outlined text-lg">location_on</span>
                                        </div>
                                        <span className="font-mono text-sm text-on-surface font-semibold">
                                            {trad('contact.location')}
                                        </span>
                                    </div>

                                    {/* Socials */}
                                    <div className="flex gap-4 pt-4 border-t border-outline-variant/10 max-w-[200px]">
                                        <a 
                                            href="https://github.com/Opsord" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 group text-on-surface-variant hover:text-primary transition-colors text-xs font-mono font-medium"
                                        >
                                            <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="h-5 object-contain group-hover:scale-105 transition-transform" />
                                            GitHub
                                        </a>
                                        <a 
                                            href="https://linkedin.com/in/andrés-z-161685129/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 group text-on-surface-variant hover:text-primary transition-colors text-xs font-mono font-medium"
                                        >
                                            <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="h-5 object-contain group-hover:scale-105 transition-transform" />
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form Panel */}
                        <div className="flex-1 w-full max-w-md bg-surface-dim p-8 border border-outline-variant/40 rounded-sm shadow-inner">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                                        {trad('contact.formName')}
                                    </label>
                                    <input 
                                        required
                                        className="w-full bg-surface border border-outline-variant/65 rounded-sm p-3 text-sm text-on-surface placeholder-on-surface-variant/35 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                                        type="text"
                                        placeholder="..."
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                                        {trad('contact.formEmail')}
                                    </label>
                                    <input 
                                        required
                                        className="w-full bg-surface border border-outline-variant/65 rounded-sm p-3 text-sm text-on-surface placeholder-on-surface-variant/35 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                                        type="email"
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                                        {trad('contact.formMessage')}
                                    </label>
                                    <textarea 
                                        required
                                        rows={4}
                                        className="w-full bg-surface border border-outline-variant/65 rounded-sm p-3 text-sm text-on-surface placeholder-on-surface-variant/35 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" 
                                        placeholder="..."
                                    />
                                </div>
                                
                                {status === 'success' && (
                                    <div className="text-emerald-700 font-mono text-xs text-center py-2 bg-emerald-50 border border-emerald-200 rounded-sm">
                                        ✓ Message sent successfully!
                                    </div>
                                )}

                                <button 
                                    className="w-full bg-primary text-white font-mono text-xs font-bold py-4 rounded-sm hover:brightness-110 active:scale-95 transition-all clip-chamfer-btn shadow-md shadow-primary/20 cursor-pointer" 
                                    type="submit"
                                >
                                    {trad('contact.formSubmit')}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;