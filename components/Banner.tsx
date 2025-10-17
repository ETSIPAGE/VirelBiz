import React from 'react';

const UpcomingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2H6v6l5 4-5 4v6h12v-6l-5-4 5-4V2z" />
    </svg>
);

const categories = [
    {
        name: 'Products',
        image: 'https://i.ibb.co/ZBTX3Yf/smart-manufacturing.jpg',
    },
    {
        name: 'Services',
        image: 'https://i.ibb.co/gJF9zYk/sourcing-service.jpg',
    },
    {
        name: 'Professionals',
        image: 'https://i.ibb.co/yqgZ0z3/prof-john-smith.jpg',
    },
    {
        name: 'Events',
        image: 'https://i.ibb.co/k57Gq2G/electronics-event.jpg',
    }
];

const ShowCard: React.FC<{ name: string; image: string; }> = ({ name, image }) => (
    <div className="bg-yellow-50 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 group border border-amber-700/20 h-full flex flex-col">
        {/* Image Part */}
        <div className="flex-grow relative bg-gradient-to-br from-amber-500 to-orange-600">
            {/* The image itself */}
            <img className="absolute inset-0 h-full w-full object-cover" src={image} alt={name} />
            
            {/* "Upcoming" Tag */}
            <div className="absolute top-3 left-3 bg-orange-500/90 text-white text-xs px-2.5 py-1 rounded-full flex items-center font-medium z-10">
                <UpcomingIcon />
                Upcoming
            </div>
            
            {/* Title on the image */}
            <h3 className="absolute top-10 left-4 text-white font-bold text-lg leading-tight w-10/12 z-10">{name}</h3>
        </div>
        
        {/* Bottom white part */}
        <div className="p-3 bg-yellow-50 flex-shrink-0">
            <p className="text-stone-800 font-semibold truncate group-hover:text-amber-700 transition-colors text-sm">{name}</p>
        </div>
    </div>
);


const Banner: React.FC = () => {
    return (
        <div className="p-4 rounded-2xl shadow-2xl bg-gradient-to-br from-stone-800 to-amber-900 border border-amber-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
                {/* Left Banner Section */}
                <div className="relative lg:col-span-2 p-8 rounded-2xl bg-[url('https://i.ibb.co/zV9XwKk/tech-show-background.jpg')] bg-cover bg-center text-white flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/70 to-amber-800/80"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold leading-tight">VirelBiz Webinar on AI Technology</h2>
                        <p className="mt-3 text-base text-amber-200">Explore the future of AI with industry leaders.</p>
                    </div>
                    <div className="relative z-10 mt-6">
                         <button className="bg-yellow-50 text-amber-800 font-bold py-2 px-6 rounded-full hover:bg-yellow-100 transition-all shadow-md self-start">
                            View More
                        </button>
                    </div>
                </div>

                {/* Right Cards Section */}
                <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map(category => (
                        <ShowCard key={category.name} name={category.name} image={category.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;