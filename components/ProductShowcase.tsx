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

const mostOfferedServices = {
    title: "Most Offered Services",
    subtitle: "Find providers for logistics, inspection & more",
    items: [
        { name: "Sourcing", description: "Sourcing & Procurement", image: "https://i.ibb.co/gJF9zYk/sourcing-service.jpg" },
        { name: "Quality Control", description: "Inspection Services", image: "https://i.ibb.co/yY5tC0G/quality-control-service.jpg" },
        { name: "Logistics", description: "Shipping & Freight", image: "https://i.ibb.co/4Z5fLqG/logistics-service.jpg" }
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
    { name: "Agricultural Spraying Drone with 30L tank", price: "3,500 - 3,800", moq: "1 Piece", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Agricultural+Sprayer+Drone.jpg" },
    { name: "AI-Powered Autonomous Security Drone", price: "1,200 - 1,500", moq: "2 Pieces", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/AI-Powered+Autonomus+Security.png" },
    { name: "Professional Cinematic FPV Drone Kit", price: "628 - 676", moq: "5 Pieces", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Drone.jpg" },
    { name: "Autonomous Delivery Drone for Logistics", price: "5,000 - 5,500", moq: "1 Piece", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Medical.jpg" },
    { name: "Industrial Inspection Drone with Thermal Cam", price: "2,200 - 2,450", moq: "1 Piece", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Solar+Product.jpg" },
    { name: "AI Image Processing Module for Robotics", price: "293 - 345", moq: "10 Pieces", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/AI-Tool's.png" }
];

const services = [
    { name: "Sourcing & Procurement", description: "End-to-end assistance", category: "Consulting", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Service+1.jpg" },
    { name: "Quality Control & Inspection", description: "Ensure product standards", category: "Verification", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Service+2.jpg" },
    { name: "Logistics & Shipping", description: "Global freight solutions", category: "Logistics", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Service+3.jpg" },
    { name: "Customs & Compliance", description: "Navigate trade regulations", category: "Legal", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Service+4.jpg" },
    { name: "Private Labeling Service", description: "Build your own brand", category: "Branding", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Service+5.jpg" },
    { name: "IP & Patent Protection", description: "Safeguard your innovations", category: "Legal", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Service+6.jpg" },
];
const companies = [
    { name: "Dronetv Simulator", industry: "Software Devlopment", logo: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Dronesimulator.png" },
    { name: "Drone Acadamy", industry: "Drone Acadamy", logo: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/IDA.png" },
    { name: "IPage UMS Solutions", industry: "Drone Services", logo: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/473835922_1460897314830430_6571106853468755997_n.jpg" },
    { name: "IPage Vision", industry: "Architecture", logo: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/ipagevisionlogo.png" },
    { name: "DroneTv", industry: "Media", logo: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Drone+tv+.in.png" },
    // { name: "Visionary Designs", industry: "Branding & Marketing", logo: "https://i.ibb.co/tZJ5rYj/logo-visionary-designs.png" },
];

const professionals = [
    { name: "Jane Doe", title: "AI Ethics Consultant", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/istockphoto-2218963506-2048x2048.jpg" },
    { name: "John Smith", title: "Logistics Optimizer", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/pr4.jpg" },
    { name: "Emily Chen", title: "Lead Product Designer", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/austin-distel-7uoMmzPd2JA-unsplash.jpg" },
    { name: "Michael B.", title: "Manufacturing Expert", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/christina-wocintechchat-com-PlikkWB79qs-unsplash.jpg" },
    { name: "Sofia Khan", title: "IP Attorney", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/pr1.jpg" },
    { name: "David Lee", title: "Growth Marketing", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/pr2.jpg" },
];
const events = [
    { name: "Global Sources Electronics Show", date: "Oct 11-14, 2025", location: "Hong Kong", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.48+PM.jpeg" },
    { name: "AI & Robotics Summit", date: "Nov 5-7, 2025", location: "Shenzhen", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM+(1).jpeg" },
    { name: "Smart Home Expo", date: "Nov 18-21, 2025", location: "Online", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM+(2).jpeg" },
    { name: "Fashion & Lifestyle Fair", date: "Dec 1-3, 2025", location: "Shanghai", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/1.jpeg" },
    { name: "Industrial Automation Meetup", date: "Jan 15-17, 2026", location: "Online", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM+(4).jpeg" },
    { name: "Medical Tech Conference", date: "Feb 22-24, 2026", location: "Singapore", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM+(5).jpeg" },
];

const webinars = [
    { name: "The Future of AI in Manufacturing", topic: "AI & Automation", host: "TechForward", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM+(6).jpeg" },
    { name: "Sustainable Sourcing Strategies", topic: "Sustainability", host: "GreenTrade", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM+(7).jpeg" },
    { name: "Navigating Global Logistics in 2026", topic: "Logistics", host: "ShipRight", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/p3.jpg" },
    { name: "E-commerce Growth Hacks", topic: "E-commerce", host: "SellSmart", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM+(9).jpeg" },
    { name: "Protecting Your Brand Internationally", topic: "IP Protection", host: "LegalEagle", image: "https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM.jpeg" },
    // { name: "Top Trends in Consumer Electronics", topic: "Market Trends", host: "VirelBiz Insights", image: "https://i.ibb.co/D9M8gP8/tech-webinar.jpg" },
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
    imageContain?: boolean;
}

const ShowcaseItemCard: React.FC<ShowcaseItemCardProps> = ({ image, name, line1, line2, buttonText, imageContain = false }) => (
    <div className="bg-yellow-50 rounded-lg overflow-hidden group">
        <div className="bg-yellow-100 aspect-[4/3] flex items-center justify-center overflow-hidden">
             <img src={image} alt={name} className={`w-full h-full ${imageContain ? 'object-contain p-4' : 'object-cover'} group-hover:scale-105 transition-transform duration-300`}/>
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
                <CategoryCard {...mostOfferedServices} />
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

            {/* Companies section */}
            <ShowcaseSection
                id="companies"
                title="Featured Companies"
                subtitle="Discover leading companies across various industries"
                items={companies}
                renderItem={(company) => (
                    <ShowcaseItemCard
                        key={company.name}
                        image={company.logo}
                        name={company.name}
                        line1={<p className="text-sm font-semibold text-stone-700">{company.industry}</p>}
                        line2={<p className="text-xs text-stone-500 mb-3">Verified Partner</p>}
                        buttonText="View Profile"
                        imageContain={true}
                    />
                )}
            />

            {/* Professionals section */}
            <ShowcaseSection
                id="professionals"
                title="Industry Professionals"
                subtitle="Connect with verified experts and consultants"
                items={professionals}
                renderItem={(prof) => (
                     <ShowcaseItemCard
                        key={prof.name}
                        image={prof.image}
                        name={prof.name}
                        line1={<p className="text-sm font-semibold text-stone-700">{prof.title}</p>}
                        line2={<p className="text-xs text-stone-500 mb-3">Top Rated</p>}
                        buttonText="Connect"
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