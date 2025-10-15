import React from 'react';

const products = [
    { name: 'Consumer Electronics', image: 'https://i.ibb.co/bF9gVz6/headphones.png' },
    { name: 'Electronic Components', image: 'https://i.ibb.co/k1g2gXZ/circuit-board.png' },
    { name: 'Gaming', image: 'https://i.ibb.co/Jq6QyT3/gaming-chair.png' },
    { name: 'Mobile Electronics', image: 'https://i.ibb.co/B2v5YyC/smartwatch.png' },
    { name: 'Smart Home, Security & Appliances', image: 'https://i.ibb.co/M57M1N4/smart-lock.png' },
    { name: 'Lifestyle', image: 'https://i.ibb.co/MnvR2rC/pet-feeder.png' },
    { name: 'Home & Kitchen', image: 'https://i.ibb.co/f2sKzX5/kitchen-utensils.png' },
    { name: 'Sports & Outdoor', image: 'https://i.ibb.co/Y0RzWzR/tent.png' },
    { name: 'Auto Parts', image: 'https://i.ibb.co/Yh4hSTt/brake-disc.png' },
    { name: 'Fashion', image: 'https://i.ibb.co/pQGqJdG/handbag.png' },
];

const ProductCard: React.FC<{ name: string; image: string; }> = ({ name, image }) => (
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
                    <h2 className="text-2xl font-bold">October 2025 VirelBiz Hong Kong Shows</h2>
                    <p className="text-amber-200 text-sm">Hot products, new trends, more sourcing opportunities</p>
                </div>
                <button className="bg-yellow-50 text-amber-800 font-bold py-2 px-6 rounded-full hover:bg-yellow-100 transition-all shadow-md flex-shrink-0">
                    View More
                </button>
            </div>
            <div className="bg-yellow-100 p-6">
                <div className="flex space-x-6 pb-4 overflow-x-auto custom-scrollbar">
                    {products.map((product, index) => (
                        <ProductCard key={`${product.name}-${index}`} name={product.name} image={product.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;