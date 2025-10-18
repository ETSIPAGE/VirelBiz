import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const TopBanner: React.FC<FooterProps> = ({ onNavigate }) => (
  <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg p-6 flex items-center justify-between text-white mb-8">
    <div>
      <h3 className="text-2xl font-bold">VirelBiz Global Launch | Virtual Expo</h3>
      <p className="text-sm text-amber-200 mt-1">
        <span className="bg-orange-500 text-white text-xs font-semibold mr-2 px-2.5 py-1 rounded">Beta Access: November 2025</span>
        <span className="bg-yellow-50 text-amber-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded">Join the Global Business Ecosystem</span>
        World-class AI, innovation and lifestyle sourcing
      </p>
    </div>
    <div className="flex items-center space-x-4">
        <img src="https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/Logo's+(344+x+169+px).gif" alt="Trade show attendees" className="h-16" />
        <button 
            onClick={() => onNavigate('register')}
            className="bg-yellow-50 text-amber-800 font-bold py-2 px-6 rounded-md hover:bg-yellow-100 transition-all shadow-md flex-shrink-0">
            Register Now
        </button>
    </div>
  </div>
);

const RecommendedProducts: React.FC = () => {
    const products = [
        'T Rex Aero 3s', '3 Wheel Electric Scooter', 'Colored Wine Glasses', 'Monster Energy Drink',
        'Unbreakable Oil Burner Pipe', '150cc Scooter', 'Wpc Wall Panel', 'Riding Lawn Mower',
        'Spiderman Bongs', '4x4 Utv', 'R410A Refrigerant', 'Used Laptop',
        'Sweet Puff', 'Original Samsung Charger', '1 Gallon Water Jug', 'Used Phone',
        'Fidget Packs', 'Wallet Tracker', '5 Gallon Water Dispenser', 'Unlocked Phone',
    ];
    return (
        <div className="mb-8">
            <h3 className="font-bold text-lg mb-4 text-stone-800">Recommended Product List</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 text-sm text-stone-600">
                {products.map(product => <a href="#" key={product} className="hover:text-amber-600">{product}</a>)}
            </div>
        </div>
    );
}

const SubscriptionForm: React.FC = () => (
  <div className="text-center my-8">
    <h3 className="font-bold text-xl mb-2">Free Alerts on newly added products!</h3>
    <div className="inline-flex items-center border border-amber-500 rounded-full overflow-hidden max-w-md mx-auto bg-yellow-50">
        <input type="email" placeholder="Your Email" className="px-4 py-2 w-full focus:outline-none bg-transparent"/>
        <button className="bg-amber-600 text-white font-bold px-8 py-2 hover:bg-amber-700 transition-colors">Subscribe</button>
    </div>
  </div>
);

const FooterLinks: React.FC<FooterProps> = ({ onNavigate }) => {
    const columns = {
        'Find Suppliers Online': [
            'Browse Product Categories', 'Browse Supplier Categories', 'Wholesale Catalog', 'Ready to Order', 'New Product Rollouts'
        ],
        'Meet Suppliers Face-to-Face': ['Trade Shows', 'VirelBiz MATCH'],
        'Supplier Tools': [
            'Reach Qualified Buyers', 'Join as a Free Supplier', 'Become a Verified Supplier', 'Sell Your Products', 'Contact Our International Team'
        ],
        'Buyer Tools': [
            'VirelBiz Apps', 'Import & Export Services', 'Sourcing Knowledge Center', 'Sourcing e-Magazines', 'RFQ'
        ],
        'Help': [
            'Help Center', 'What Every Buyer Needs to Know', 'Ask the Sourcing Experts', 'Report Intellectual Property Infringement', 'Latest Policy on Mercury-Related Products'
        ],
    };
    
    const aboutLinks = [
        { title: 'About VirelBiz', page: 'about' },
        { title: 'Our Vision', page: 'vision' },
        { title: 'Synergy with DroneTV.in', page: 'synergy' },
        { title: 'Media & Partnership Inquiries', page: 'contact' },
    ];


    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
            <div className="space-y-4 col-span-1">
                <h4 className="font-bold text-base">Find Suppliers Online</h4>
                {columns['Find Suppliers Online'].map(link => <a key={link} href="#" className="block text-stone-600 hover:text-amber-600">{link}</a>)}
                <h4 className="font-bold text-base pt-4">Meet Suppliers Face-to-Face</h4>
                {columns['Meet Suppliers Face-to-Face'].map(link => <a key={link} href="#" className="block text-stone-600 hover:text-amber-600">{link}</a>)}
            </div>
            <div>
                 <h4 className="font-bold text-base mb-4">Supplier Tools</h4>
                {columns['Supplier Tools'].map(link => <a key={link} href="#" className="block text-stone-600 hover:text-amber-600 mb-2">{link}</a>)}
            </div>
            <div>
                 <h4 className="font-bold text-base mb-4">Buyer Tools</h4>
                {columns['Buyer Tools'].map(link => <a key={link} href="#" className="block text-stone-600 hover:text-amber-600 mb-2">{link}</a>)}
            </div>
            <div>
                 <h4 className="font-bold text-base mb-4">Help</h4>
                {columns['Help'].map(link => <a key={link} href="#" className="block text-stone-600 hover:text-amber-600 mb-2">{link}</a>)}
            </div>
            <div>
                 <h4 className="font-bold text-base mb-4">About Us</h4>
                {aboutLinks.map(link => <a key={link.title} href="#" onClick={(e) => {e.preventDefault(); onNavigate(link.page)}} className="block text-stone-600 hover:text-amber-600 mb-2">{link.title}</a>)}
            </div>
        </div>
    );
};


const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-yellow-50 border-t border-yellow-200 mt-8">
        <div className="max-w-screen-xl mx-auto px-4 pt-8">
            <TopBanner onNavigate={onNavigate} />
            <RecommendedProducts />
        </div>
        <div className="bg-yellow-100 border-t border-b border-yellow-200">
            <div className="max-w-screen-xl mx-auto px-4">
                <SubscriptionForm />
            </div>
        </div>
         <div className="max-w-screen-xl mx-auto px-4 py-8">
            <FooterLinks onNavigate={onNavigate} />
        </div>
        <div className="bg-stone-800 text-yellow-200 text-xs py-4">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} VirelBiz. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
