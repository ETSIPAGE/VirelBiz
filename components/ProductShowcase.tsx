import React from 'react';

// --- Data for the component ---

const choiceProducts = {
    title: "Analyst's Choice",
    subtitle: "Goods & services handpicked by B2B sourcing & procurement specialists",
    items: [
        { name: "Trending", description: "AI Vision Systems", image: "https://i.ibb.co/L5BfKcm/ai-vision-system.jpg" },
        { name: "Hot Picks", description: "Long-Range Drones", image: "https://i.ibb.co/yqVqFbf/long-range-drone.jpg" },
        { name: "Innovative", description: "Drone Swarm Controllers", image: "https://i.ibb.co/qYn02zM/drone-swarm.jpg" }
    ]
};

const moqProducts = {
    title: "Low MOQ",
    subtitle: "Find products from certified low MOQ manufacturers & wholesale suppliers",
    items: [
        { name: "New Arrivals", description: "AI Chipsets", image: "https://i.ibb.co/M8P5b5q/ai-chipset.jpg" },
        { name: "Quick Response", description: "Custom Drone Frames", image: "https://i.ibb.co/tZ7XgW9/drone-frame.jpg" },
        { name: "Best Sellers", description: "FPV Goggles", image: "https://i.ibb.co/nLTTj7N/fpv-goggles.jpg" }
    ]
};

const oemProducts = {
    title: "OEM Products",
    subtitle: "Reliable OEM companies offering thousands of popular OEM parts & items",
    items: [
        { name: "US$ 55", description: "Quadcopter Motors", image: "https://i.ibb.co/GvxB2sR/quadcopter-motor.jpg", subInfo: "5 Pieces" },
        { name: "US$ 52", description: "Flight Control Boards", image: "https://i.ibb.co/kH5gY1z/flight-controller.jpg", subInfo: "100 Pieces" },
        { name: "US$ 4.1", description: "High-Res Drone Cameras", image: "https://i.ibb.co/xGL1FNs/drone-camera.jpg", subInfo: "1000 Boxes" }
    ]
};

const newProducts = [
    { name: "Agricultural Spraying Drone with 30L tank", price: "3,500 - 3,800", moq: "1 Piece", image: "https://i.ibb.co/RSC1x5N/agricultural-drone.jpg" },
    { name: "AI-Powered Autonomous Security Drone", price: "1,200 - 1,500", moq: "2 Pieces", image: "https://i.ibb.co/fHnL9yK/security-drone-2.jpg" },
    { name: "Professional Cinematic FPV Drone Kit", price: "628 - 676", moq: "5 Pieces", image: "https://i.ibb.co/xX4bJ8G/fpv-kit.jpg" },
    { name: "Autonomous Delivery Drone for Logistics", price: "5,000 - 5,500", moq: "1 Piece", image: "https://i.ibb.co/JqKz3vj/delivery-drone-2.jpg" },
    { name: "Industrial Inspection Drone with Thermal Cam", price: "2,200 - 2,450", moq: "1 Piece", image: "https://i.ibb.co/F8bV3S4/industrial-drone.jpg" },
    { name: "AI Image Processing Module for Robotics", price: "293 - 345", moq: "10 Pieces", image: "https://i.ibb.co/b3wJ2k3/ai-processor-module.jpg" }
];

const services = [
    { name: "Sourcing & Procurement", description: "End-to-end assistance", category: "Consulting", image: "https://i.ibb.co/gJF9zYk/sourcing-service.jpg" },
    { name: "Quality Control & Inspection", description: "Ensure product standards", category: "Verification", image: "https://i.ibb.co/yY5tC0G/quality-control-service.jpg" },
    { name: "Logistics & Shipping", description: "Global freight solutions", category: "Logistics", image: "https://i.ibb.co/4Z5fLqG/logistics-service.jpg" },
    { name: "Customs & Compliance", description: "Navigate trade regulations", category: "Legal", image: "https://i.ibb.co/FmP7P0f/customs-service.jpg" },
    { name: "Private Labeling Service", description: "Build your own brand", category: "Branding", image: "https://i.ibb.co/gZ7kG2r/private-label-service.jpg" },
    { name: "IP & Patent Protection", description: "Safeguard your innovations", category: "Legal", image: "https://i.ibb.co/M600fSg/ip-service.jpg" },
];

const events = [
    { name: "Global Sources Electronics Show", date: "Oct 11-14, 2025", location: "Hong Kong", image: "https://i.ibb.co/k57Gq2G/electronics-event.jpg" },
    { name: "AI & Robotics Summit", date: "Nov 5-7, 2025", location: "Shenzhen", image: "https://i.ibb.co/BGC76Cg/robotics-event.jpg" },
    { name: "Smart Home Expo", date: "Nov 18-21, 2025", location: "Online", image: "https://i.ibb.co/0JbHqgM/smart-home-event.jpg" },
    { name: "Fashion & Lifestyle Fair", date: "Dec 1-3, 2025", location: "Shanghai", image: "https://i.ibb.co/fH1w1sF/fashion-event.jpg" },
    { name: "Industrial Automation Meetup", date: "Jan 15-17, 2026", location: "Online", image: "https://i.ibb.co/zQ6ZJ1B/industrial-event.jpg" },
    { name: "Medical Tech Conference", date: "Feb 22-24, 2026", location: "Singapore", image: "https://i.ibb.co/fC5f4Tj/medical-event.jpg" },
];

const webinars = [
    { name: "The Future of AI in Manufacturing", topic: "AI & Automation", host: "TechForward", image: "https://i.ibb.co/9q0D0C7/ai-webinar.jpg" },
    { name: "Sustainable Sourcing Strategies", topic: "Sustainability", host: "GreenTrade", image: "https://i.ibb.co/51b0gD6/sustainability-webinar.jpg" },
    { name: "Navigating Global Logistics in 2026", topic: "Logistics", host: "ShipRight", image: "https://i.ibb.co/RzFp26w/logistics-webinar.jpg" },
    { name: "E-commerce Growth Hacks", topic: "E-commerce", host: "SellSmart", image: "https://i.ibb.co/T1W7c07/ecommerce-webinar.jpg" },
    { name: "Protecting Your Brand Internationally", topic: "IP Protection", host: "LegalEagle", image: "https://i.ibb.co/yQ5Gf7x/ip-webinar.jpg" },
    { name: "Top Trends in Consumer Electronics", topic: "Market Trends", host: "VirelBiz Insights", image: "https://i.ibb.co/D9M8gP8/tech-webinar.jpg" },
];

// --- Sub-components ---

interface CategoryCardProps {
    title: string;
    subtitle: string;
    items: {
        name: string;
        description: string;
        image: string;
        subInfo?: string;
    }[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, subtitle, items }) => (
    <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-3">
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-xs text-stone-500">{subtitle}</p>
            </div>
            <a href="#" className="text-sm text-stone-600 hover:text-amber-600">See All</a>
        </div>
        <div className="grid grid-cols-3 gap-3">
            {items.map(item => (
                <div key={item.name} className="text-center">
                    <div className="bg-yellow-100 rounded-md aspect-square flex items-center justify-center overflow-hidden">
                        <img src={item.image} alt={item.description} className="w-full h-full object-cover"/>
                    </div>
                    <h4 className="font-semibold text-sm mt-2">{item.name}</h4>
                    <p className="text-xs text-stone-500 truncate">{item.description}</p>
                    {item.subInfo && <p className="text-xs text-stone-500">{item.subInfo}</p>}
                </div>
            ))}
        </div>
    </div>
);


interface ShowcaseItemCardProps {
    image: string;
    name: string;
    line1: React.ReactNode;
    line2: React.ReactNode;
    buttonText: string;
}

const ShowcaseItemCard: React.FC<ShowcaseItemCardProps> = ({ image, name, line1, line2, buttonText }) => (
    <div className="bg-yellow-50 rounded-lg overflow-hidden group">
        <div className="bg-yellow-100 aspect-[4/3] flex items-center justify-center overflow-hidden">
             <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
        </div>
        <div className="p-3 flex flex-col" style={{minHeight: '160px'}}>
            <p className="text-sm text-stone-700 line-clamp-2 mb-2 h-10 flex-grow">{name}</p>
            <div className="flex-shrink-0">
                {line1}
                {line2}
            </div>
            <button className="w-full text-center text-sm border border-yellow-300 rounded-md py-1.5 mt-auto hover:bg-yellow-100 hover:border-yellow-400 transition-colors">
                {buttonText}
            </button>
        </div>
    </div>
);

interface ShowcaseSectionProps {
    id: string;
    title: React.ReactNode;
    subtitle: string;
    items: any[];
    renderItem: (item: any, index: number) => React.ReactNode;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ id, title, subtitle, items, renderItem }) => (
     <div id={id} className="bg-yellow-50 p-4 rounded-lg shadow-sm">
         <div className="flex justify-between items-center mb-4">
            <div>
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="text-sm text-stone-500">{subtitle}</p>
            </div>
            <a href="#" className="text-sm text-stone-600 hover:text-amber-600">See All</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {items.map((item, index) => renderItem(item, index))}
        </div>
    </div>
);


// --- Main Component ---

const ProductShowcase: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Top row of category cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CategoryCard {...choiceProducts} />
                <CategoryCard {...moqProducts} />
                <CategoryCard {...oemProducts} />
            </div>

            {/* New Products section */}
            <ShowcaseSection
                id="products"
                title={<><span className="text-amber-600">New</span> Products</>}
                subtitle="Explore the hottest releases in the past two weeks"
                items={newProducts}
                renderItem={(product) => (
                    <ShowcaseItemCard
                        key={product.name}
                        image={product.image}
                        name={product.name}
                        line1={<p className="font-bold text-stone-800">US$ {product.price} <span className="font-normal text-stone-500 text-sm">/ Piece</span></p>}
                        line2={<p className="text-xs text-stone-500 mb-3">{product.moq} (MOQ)</p>}
                        buttonText="Inquire Now"
                    />
                )}
            />

             {/* Professional Services section */}
            <ShowcaseSection
                id="services"
                title="Professional Services"
                subtitle="Connect with experts for your sourcing needs"
                items={services}
                renderItem={(service) => (
                     <ShowcaseItemCard
                        key={service.name}
                        image={service.image}
                        name={service.name}
                        line1={<p className="text-sm text-stone-600 h-10">{service.description}</p>}
                        line2={<p className="text-xs text-stone-500 mb-3 font-semibold">{service.category}</p>}
                        buttonText="Learn More"
                    />
                )}
            />

            {/* Events section */}
             <ShowcaseSection
                id="events"
                title="Events"
                subtitle="Join our global trade shows and sourcing events"
                items={events}
                renderItem={(event) => (
                     <ShowcaseItemCard
                        key={event.name}
                        image={event.image}
                        name={event.name}
                        line1={<p className="text-sm font-semibold text-stone-700">{event.date}</p>}
                        line2={<p className="text-xs text-stone-500 mb-3">{event.location}</p>}
                        buttonText="Register Now"
                    />
                )}
            />

            {/* Webinars section */}
            <ShowcaseSection
                id="webinars"
                title="Webinars"
                subtitle="Gain insights from industry leaders online"
                items={webinars}
                renderItem={(webinar) => (
                     <ShowcaseItemCard
                        key={webinar.name}
                        image={webinar.image}
                        name={webinar.name}
                        line1={<p className="text-sm font-semibold text-stone-700">{webinar.topic}</p>}
                        line2={<p className="text-xs text-stone-500 mb-3">Host: {webinar.host}</p>}
                        buttonText="Watch Now"
                    />
                )}
            />
        </div>
    );
};

export default ProductShowcase;