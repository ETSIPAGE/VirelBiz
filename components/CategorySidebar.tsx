import React from 'react';
import { ChevronRightIcon, MenuIcon } from './icons/Icons';

const categories = [
  'Auto Vehicle & Accessories',
  'Beauty & Personal Care',
  'Consumer Electronics',
  'Electronic Components',
  'Fashion Accessories & Footwear',
  'Fashion Apparel & Fabrics',
  'Food & Beverages',
  'Furniture & Home Decor',
  'Gifts, Festival & Hobbies',
  'Hardware',
  'Health Care',
];

const CategoryItem: React.FC<{ category: string }> = ({ category }) => (
  <a href="#" className="flex justify-between items-center py-2 px-3 text-sm text-stone-800 hover:bg-yellow-200 hover:text-amber-700 rounded-md transition-colors">
    <span>{category}</span>
    <ChevronRightIcon className="h-4 w-4 text-stone-400" />
  </a>
);

const CategorySidebar: React.FC = () => {
  return (
    <div className="bg-yellow-100 rounded-lg p-4 h-full border border-yellow-200">
      <div className="flex items-center mb-4 pb-2 border-b border-yellow-200">
        <MenuIcon className="h-6 w-6 mr-2 text-stone-700" />
        <h3 className="font-bold text-lg text-stone-900">Categories</h3>
      </div>
      <div className="space-y-1">
        {categories.map((cat) => (
          <CategoryItem key={cat} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;