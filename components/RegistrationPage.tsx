import React from 'react';

interface RegistrationPageProps {
  onNavigate: (page: string) => void;
}

const industries = ["Technology", "Fashion", "Healthcare", "Manufacturing", "Retail", "Agriculture", "Other"];
const businessTypes = ["Manufacturer", "Wholesaler", "Retailer", "Sourcing Agent", "E-commerce", "Other"];
const hearAboutUsOptions = ["Social Media", "Search Engine", "Friend or Colleague", "Advertisement", "Other"];
const countries = ["United States", "China", "India", "Germany", "United Kingdom", "Japan", "Canada", "Other"];

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onNavigate }) => {
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Thank you for registering for early access!');
    onNavigate('home');
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto bg-yellow-50 p-8 rounded-2xl shadow-2xl border-2 border-amber-200">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-stone-800">Sign Up for Early Access</h1>
          <p className="text-stone-600 mt-2">Be the first to know when we launch. Join our community of innovators and suppliers.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Form Fields */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
            <input type="text" id="fullName" required className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-stone-700 mb-1">Company Name</label>
            <input type="text" id="companyName" required className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
            <input type="email" id="email" required className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
           <div>
            <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
            <input type="tel" id="phone" className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-stone-700 mb-1">Industry</label>
            <select id="industry" required className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
              {industries.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-stone-700 mb-1">Business Type</label>
            <select id="businessType" required className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
              {businessTypes.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-stone-700 mb-1">Job Title</label>
            <input type="text" id="jobTitle" required className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-stone-700 mb-1">Country</label>
            <select id="country" required className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
              {countries.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="hearAboutUs" className="block text-sm font-medium text-stone-700 mb-1">How did you hear about us?</label>
            <select id="hearAboutUs" required className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
              {hearAboutUsOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          
          {/* Buttons */}
          <div className="md:col-span-2 flex flex-col items-center justify-center mt-6">
            <button type="submit" className="w-full md:w-1/2 bg-amber-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors text-lg shadow-md">
              Get Early Access
            </button>
            <button 
              type="button" 
              onClick={() => onNavigate('home')} 
              className="mt-4 text-sm text-stone-600 hover:text-amber-700 hover:underline">
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;