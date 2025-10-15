import React from 'react';

const VisionPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-yellow-50 p-8 sm:p-12 rounded-2xl shadow-xl border-2 border-amber-200 text-stone-700">
        <h1 className="text-4xl font-bold text-center text-stone-800 mb-8">Our Vision</h1>

        <p className="text-center text-lg text-stone-600 leading-relaxed">
            To create a global ecosystem that unites industries and innovators through the powerful intersection of technology, business, and media.
        </p>

        <div className="w-24 h-1 bg-amber-300 mx-auto my-8 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-bold text-amber-700 text-xl mb-2">Artificial Intelligence</h3>
                <p className="text-sm">For smart connections and actionable insights.</p>
            </div>
             <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-bold text-amber-700 text-xl mb-2">GIS & Data Visualization</h3>
                <p className="text-sm">For demonstrating real-world impact and opportunities.</p>
            </div>
             <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-bold text-amber-700 text-xl mb-2">Digital Media</h3>
                <p className="text-sm">For compelling storytelling and global exposure.</p>
            </div>
        </div>

        <div className="mt-12 bg-amber-100 border-l-4 border-amber-500 p-6 rounded-r-lg">
           <blockquote className="text-xl italic text-stone-800 font-semibold leading-relaxed">
             “VirelBiz is not just a business directory or platform — it’s a growth ecosystem. Our goal is to give businesses and innovators the power to connect globally, collaborate meaningfully, and grow sustainably.”
           </blockquote>
           <p className="text-right mt-2 font-bold text-amber-800">Dev R - Founder & CEO, DroneTV.in | VirelBiz</p>
        </div>
      </div>
    </main>
  );
};

export default VisionPage;
