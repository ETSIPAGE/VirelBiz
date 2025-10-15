import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-yellow-50 p-8 sm:p-12 rounded-2xl shadow-xl border-2 border-amber-200 text-stone-700">
        <h1 className="text-4xl font-bold text-center text-stone-800 mb-8">About VirelBiz</h1>

        <div className="w-24 h-1 bg-amber-300 mx-auto my-8 rounded-full"></div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-stone-800 mb-3">A Global Business Acceleration Ecosystem</h2>
            <p className="mb-4 text-base leading-relaxed">
              VirelBiz is a global business acceleration ecosystem that brings together companies, creators, and industry experts to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-600 bg-yellow-100 p-4 rounded-lg border border-yellow-200">
                <li>Showcase their products, services, and innovations to a worldwide audience.</li>
                <li>Build AI-powered business microsites and professional portfolios.</li>
                <li>Collaborate with verified partners and industry professionals.</li>
                <li>Engage in webinars, expos, and interviews featured through DroneTV media coverage.</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed">
              The platform merges marketplace, technology, and media visibility, helping businesses transform ideas into real opportunities. Evolving from the success of DroneTV.in, which has been a strong voice in promoting Drone, AI, and GIS technologies, VirelBiz now expands that vision globally — creating a unified space for all categories of products, services, and professionals.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-4 text-center">
              Our Tagline: <span className="text-amber-700">Connect. Collaborate. Grow.</span>
            </h2>
            <p className="text-base leading-relaxed">
              The tagline reflects the true essence of global business today — connectivity, collaboration, and growth. VirelBiz empowers every business and professional to expand their reach, strengthen partnerships, and achieve measurable results through AI, digital tools, and media engagement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
