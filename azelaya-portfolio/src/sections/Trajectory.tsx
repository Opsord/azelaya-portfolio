import { useLanguage } from '../context/LanguageContext';

interface RoadmapItem {
    title: string;
    organization: string;
    period: string;
    location: string;
    description: string;
}

const Trajectory = () => {
    const { trad } = useLanguage();
    
    const roadmapItems = trad('trajectory.items') as RoadmapItem[];

    return (
        <section id="trajectory" className="min-h-screen px-4 py-20">
            <h2 className="text-3xl font-semibold mb-6 text-center">{trad('trajectory.title')}</h2>
            <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
                {roadmapItems.map((item) => (
                    <div key={`${item.title}-${item.organization}`} className="border-l-4 border-cyan-400 pl-4">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <div className="text-cyan-300 font-semibold">{item.organization}</div>
                        <div className="text-gray-400 text-sm">{item.period} · {item.location}</div>
                        <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trajectory;