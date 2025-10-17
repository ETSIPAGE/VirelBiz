import React from 'react';

const industries = [
    { name: 'AI & Robotics', image: 'https://i.ibb.co/b3wJ2k3/ai-processor-module.jpg' },
    { name: 'Aerospace & Drones', image: 'https://i.ibb.co/yqVqFbf/long-range-drone.jpg' },
    { name: 'Biotechnology', image: 'https://i.ibb.co/yWjHwHw/biotechnology.jpg' },
    { name: 'Renewable Energy', image: 'https://i.ibb.co/FgnP7N2/renewable-energy.jpg' },
    { name: 'FinTech Solutions', image: 'https://i.ibb.co/zZJ223B/fintech.jpg' },
    { name: 'Cybersecurity', image: 'https://i.ibb.co/3mN5x4H/cybersecurity.jpg' },
    { name: 'AR/VR Solutions', image: 'https://i.ibb.co/kMV0c0c/ar-vr.jpg' },
    { name: 'Smart Manufacturing', image: 'https://i.ibb.co/ZBTX3Yf/smart-manufacturing.jpg' },
    { name: 'IoT & Smart Devices', image: 'https://i.ibb.co/B2v5YyC/smartwatch.png' },
    { name: 'GIS & Geospatial Tech', image: 'https://i.ibb.co/Gcx70y2/gis-geospatial.jpg' },
];

const IndustryCard: React.FC<{ name: string; image: string; }> = ({ name, image }) => (
    <div className="flex-shrink-0 w-48 bg-yellow-50 rounded-xl shadow-md overflow-hidden text-center transform hover:-translate-y-1 transition-transform duration-300 group">
        <div className="h-40 flex items-center justify-center p-4">
             <img className="max-h-full max-w-full object-contain" src={image} alt={name} />
        </div>
        <div className="p-4 border-t border-yellow-100">
            <p className="text-stone-800 font-semibold text-sm group-hover:text-amber-700 transition-colors">{name}</p>
        </div>
    </div>
);


const Hero: React.FC = () => {
    return (
        <div className="mt-8 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-amber-600 to-orange-700 text-white flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">VirelBiz Top Industries</h2>
                    <p className="text-amber-200 text-sm">Highlighting innovation and technology leaders</p>
                </div>
                <button className="bg-yellow-50 text-amber-800 font-bold py-2 px-6 rounded-full hover:bg-yellow-100 transition-all shadow-md flex-shrink-0">
                    View More
                </button>
            </div>
            <div className="bg-yellow-100 p-6">
                <div className="flex space-x-6 pb-4 overflow-x-auto custom-scrollbar">
                    {industries.map((industry, index) => (
                        <IndustryCard key={`${industry.name}-${index}`} name={industry.name} image={industry.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;