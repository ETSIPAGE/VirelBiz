import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  moq: string;
  imageUrl: string;
}

const popularProducts: Product[] = [
  {
    id: 1,
    name: 'Factory produce phone 7.3 Inch S...',
    price: 'US$ 70.00 - ...',
    moq: '1 Box (MOQ)',
    imageUrl: 'https://picsum.photos/100/100?random=10',
  },
  {
    id: 2,
    name: 'Solid doll for men full body non-...',
    price: 'US$ 545.00 - ...',
    moq: '10 Pieces (MOQ)',
    imageUrl: 'https://picsum.photos/100/100?random=11',
  },
  {
    id: 3,
    name: 'Factory Price ANC for AirPod pro 2n...',
    price: 'US$ 4.89 - 6.8...',
    moq: '100 Units (MOQ)',
    imageUrl: 'https://picsum.photos/100/100?random=12',
  },
];

const ProductItem: React.FC<{ product: Product; index: number }> = ({ product, index }) => (
  <a href="#" className="flex items-start space-x-3 py-2 hover:bg-yellow-200/50 rounded-lg">
    <div className="relative">
      <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded-md border border-yellow-200" />
      <div className="absolute -top-1 -left-1 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
        {index + 1}
      </div>
    </div>
    <div className="text-sm">
      <p className="text-stone-800 hover:text-amber-600 line-clamp-2">{product.name}</p>
      <p className="font-bold text-lg text-amber-600 my-1">{product.price}</p>
      <p className="text-stone-500">{product.moq}</p>
    </div>
  </a>
);

const PopularProducts: React.FC = () => {
  return (
    <div className="bg-yellow-100 rounded-lg p-4 h-full border border-yellow-200">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-yellow-200">
        <h3 className="font-bold text-lg text-stone-900">Most Popular</h3>
        <a href="#" className="text-sm text-amber-600 hover:underline">See All</a>
      </div>
      <div className="space-y-2">
        {popularProducts.map((product, index) => (
          <ProductItem key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;