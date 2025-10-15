import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-yellow-50 p-8 sm:p-12 rounded-2xl shadow-xl border-2 border-amber-200 text-stone-700">
        <h1 className="text-4xl font-bold text-center text-stone-800 mb-2">Contact Us</h1>
        <p className="text-center text-stone-500 mb-8">For Media & Partnership Inquiries</p>
        
        <div className="w-24 h-1 bg-amber-300 mx-auto my-8 rounded-full"></div>

        <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-8 text-center space-y-4">
          <p className="text-lg text-stone-600">We'd love to hear from you. Please reach out to our business development team for more information.</p>
          
          <div className="font-semibold text-xl text-stone-800 !mt-6">
             <p>
                Email: <a href="mailto:bd@virelbiz.com" className="text-amber-700 hover:underline">bd@virelbiz.com</a>
            </p>
             <p>
                Phone: <a href="tel:+917520123555" className="text-amber-700 hover:underline">+91 7520123555</a>
            </p>
             <p>
                Website: <a href="http://www.dronetv.in" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline">www.dronetv.in</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;