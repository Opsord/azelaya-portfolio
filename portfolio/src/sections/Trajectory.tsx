import { useLanguage } from '../hooks/useLanguage';

interface RoadmapItem {
    title: string;
    organization: string;
    period: string;
    location: string;
    description: string;
}

const Trajectory = () => {
    const { trad, tradTyped } = useLanguage();
    const roadmapItems = tradTyped<RoadmapItem[]>('trajectory.items');

    return (
        <section id="trajectory" className="py-24 bg-surface relative overflow-hidden">
            {/* Background glowing gradient */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop z-10 relative">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background mb-4">
                        {trad('trajectory.title')}
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                </div>

                {/* Timeline Container */}
                <div className="max-w-4xl mx-auto px-margin-mobile relative timeline-line">
                    {roadmapItems.map((item, idx) => {
                        const isEven = idx % 2 === 1;
                        
                        // Dynamically split description paragraph into sentences to act as list items
                        const bullets = item.description
                            .split('. ')
                            .map(s => s.trim())
                            .filter(s => s.length > 0)
                            .map(s => s.endsWith('.') ? s : s + '.');

                        return (
                            <div 
                                key={`${item.title}-${item.organization}-${idx}`} 
                                className="relative flex flex-col md:flex-row items-start mb-16 gap-8 group"
                            >
                                {/* Left Side: Text Info on Odd, Bullets on Even */}
                                <div className={`md:w-1/2 ${
                                    isEven 
                                        ? 'order-2 md:order-1 md:text-right pr-0 md:pr-12 pl-12 md:pl-0' 
                                        : 'md:text-right pr-0 md:pr-12 pl-12 md:pl-0'
                                }`}>
                                    {!isEven ? (
                                        // Odd index: details go on the left
                                        <div>
                                            <span className="font-mono text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 inline-block">
                                                {item.period}
                                            </span>
                                            <h3 className="font-display text-lg font-bold text-on-background group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="font-mono text-xs text-on-surface-variant mt-2 font-medium">
                                                {item.organization} · {item.location}
                                            </p>
                                        </div>
                                    ) : (
                                        // Even index: bullets go on the left
                                        <ul className="font-sans text-sm text-on-surface-variant space-y-3">
                                            {bullets.map((bullet) => (
                                                <li 
                                                    key={bullet} 
                                                    className="flex items-start md:flex-row-reverse gap-3 text-left md:text-right"
                                                >
                                                    <span className="material-symbols-outlined icon-filled text-primary text-lg leading-none mt-px shrink-0">
                                                        check_circle
                                                    </span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Center Dot Node */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform z-10 shadow-sm shadow-primary/45" />

                                {/* Right Side: Bullets on Odd, Text Info on Even */}
                                <div className={`md:w-1/2 pl-12 md:pl-0 ${
                                    isEven ? 'order-1 md:order-3 pl-12 md:pl-12' : 'pl-12'
                                }`}>
                                    {isEven ? (
                                        // Even index: details go on the right
                                        <div>
                                            <span className="font-mono text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 inline-block">
                                                {item.period}
                                            </span>
                                            <h3 className="font-display text-lg font-bold text-on-background group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="font-mono text-xs text-on-surface-variant mt-2 font-medium">
                                                {item.organization} · {item.location}
                                            </p>
                                        </div>
                                    ) : (
                                        // Odd index: bullets go on the right
                                        <ul className="font-sans text-sm text-on-surface-variant space-y-3">
                                            {bullets.map((bullet) => (
                                                <li key={bullet} className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined icon-filled text-primary text-lg leading-none mt-px shrink-0">
                                                        check_circle
                                                    </span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Trajectory;