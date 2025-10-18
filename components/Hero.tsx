import React from 'react';

const industries = [
    { name: 'AI & Robotics', image: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/d1.jpg' },
    { name: 'Aerospace & Drones', image: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/d2.jpg' },
    { name: 'Biotechnology', image: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/d3.jpg' },
    { name: 'Renewable Energy', image: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/d4.jpg' },
    { name: 'FinTech Solutions', image: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/d5.jpg' },
    { name: 'Cybersecurity', image: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/d6.jpg' },
    { name: 'AR/VR Solutions', image: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/d7.jpg' },
    { name: 'Smart Manufacturing', image: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/d8.jpg' },
    { name: 'IoT & Smart Devices', image: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/d9.jpg' },
    { name: 'GIS & Geospatial Tech', image: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/d10.jpg' },
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