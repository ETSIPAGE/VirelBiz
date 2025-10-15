import React from 'react';

const SynergyPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-yellow-50 p-8 sm:p-12 rounded-2xl shadow-xl border-2 border-amber-200 text-stone-700">
        <h1 className="text-4xl font-bold text-center text-stone-800 mb-2">Synergy with DroneTV.in</h1>
        <p className="text-center text-stone-500 mb-8">Integrating Business Networking with Digital Storytelling</p>

        <div className="w-24 h-1 bg-amber-300 mx-auto my-8 rounded-full"></div>
        
        <div className="text-base leading-relaxed space-y-4">
            <p>
                As a global extension of <a href="http://www.dronetv.in" target="_blank" rel="noopener noreferrer" className="font-bold text-amber-700 hover:underline">DroneTV.in</a>, VirelBiz integrates business networking with powerful digital storytelling. This unique synergy positions the VirelBiz brand as a one-stop hub for business promotion, collaboration, and industry recognition.
            </p>
            <p>
                DroneTV will continue to be the exclusive media partner, featuring interviews, company showcases, and live event coverage of VirelBiz partners. This ensures that the stories of innovation and growth happening on the platform gain the global visibility they deserve.
            </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-bold text-amber-700 text-xl mb-2">VirelBiz Provides</h3>
                <p>The platform for connection, collaboration, and commerce.</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-bold text-amber-700 text-xl mb-2">DroneTV Delivers</h3>
                <p>The media visibility and storytelling to amplify success.</p>
            </div>
        </div>
      </div>
    </main>
  );
};

export default SynergyPage;
