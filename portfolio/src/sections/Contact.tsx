import { useLanguage } from '../hooks/useLanguage';
import { useState, type FormEvent } from 'react';
import { TechIcon } from '../components/TechIcon';

const Contact = () => {
    const { trad } = useLanguage();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const recipientEmail = 'andres.zelaya@usach.cl';

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const subject = `Portfolio contact from ${name || 'Visitor'}`;
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
            subject,
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
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
                                        href={`mailto:${recipientEmail}`}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-200 shadow-sm">
                                            <span className="material-symbols-outlined text-lg" aria-hidden="true">mail</span>
                                        </div>
                                        <span className="font-mono text-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                                            {recipientEmail}
                                        </span>
                                    </a>

                                    {/* Location */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                                            <span className="material-symbols-outlined text-lg" aria-hidden="true">location_on</span>
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
                                            <span className="group-hover:scale-110 transition-transform">
                                                <TechIcon name="github" size={20} />
                                            </span>
                                            GitHub
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/andrés-z-161685129/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 group text-on-surface-variant hover:text-primary transition-colors text-xs font-mono font-medium"
                                        >
                                            <span className="group-hover:scale-110 transition-transform">
                                                <TechIcon name="linkedin" size={20} />
                                            </span>
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form Panel */}
                        <div className="flex-1 w-full max-w-md bg-surface-dim p-8 border border-outline-variant/40 rounded-sm shadow-inner">
                            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                                <div>
                                    <label htmlFor="contact-name" className="block font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                                        {trad('contact.formName')}
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-surface border border-outline-variant/65 rounded-sm p-3 text-sm text-on-surface placeholder-on-surface-variant/35 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        type="text"
                                        placeholder="..."
                                        autoComplete="name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                                        {trad('contact.formEmail')}
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-surface border border-outline-variant/65 rounded-sm p-3 text-sm text-on-surface placeholder-on-surface-variant/35 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        type="email"
                                        placeholder="email@example.com"
                                        autoComplete="email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                                        {trad('contact.formMessage')}
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-surface border border-outline-variant/65 rounded-sm p-3 text-sm text-on-surface placeholder-on-surface-variant/35 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                        placeholder="..."
                                    />
                                </div>

                                <p className="font-sans text-[11px] text-on-surface-variant/80 leading-relaxed">
                                    {trad('contact.formHelp')}{' '}
                                    <span className="block mt-1">
                                        {trad('contact.formFallback')}{' '}
                                        <a
                                            href={`mailto:${recipientEmail}`}
                                            className="text-primary hover:underline font-mono"
                                        >
                                            {recipientEmail}
                                        </a>
                                    </span>
                                </p>

                                <button
                                    className="w-full bg-primary text-on-primary font-mono text-xs font-bold py-4 rounded-sm hover:brightness-110 active:scale-95 transition-all clip-chamfer-btn shadow-md shadow-primary/20 cursor-pointer"
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
