import React, { useState } from 'react';

interface RegistrationPageProps {
  onNavigate: (page: string) => void;
}

// Helper components for form fields
const InputField: React.FC<{ label: string; id: string; type?: string; placeholder: string; required?: boolean; }> = ({ label, id, type = "text", placeholder, required = false }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-stone-700 mb-1">
            {label}{required && <span className="text-red-500">*</span>}
        </label>
        <input type={type} id={id} name={id} placeholder={placeholder} required={required} className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
    </div>
);

const SelectField: React.FC<{ label: string; id: string; options: string[]; required?: boolean; }> = ({ label, id, options, required = false }) => (
     <div>
        <label htmlFor={id} className="block text-sm font-medium text-stone-700 mb-1">
            {label}{required && <span className="text-red-500">*</span>}
        </label>
        <select id={id} name={id} required={required} className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
             <option value="">Select {label}</option>
            {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
    </div>
);

const FormSection: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
    <fieldset className="col-span-1 md:col-span-2 lg:col-span-3 border-t-2 border-amber-200 pt-6 mt-6 first:mt-0 first:border-t-0 first:pt-0">
        <legend className="text-xl font-bold text-stone-800 px-2">{title}</legend>
        {subtitle && <p className="text-stone-500 mb-6 -mt-2 px-2 text-sm">{subtitle}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {children}
        </div>
    </fieldset>
);


const industries = [
    "Information Technology & Services", "Healthcare & Pharmaceuticals", "Automotive", "Manufacturing & Industrial", "Consumer Goods & FMCG", "Fashion & Apparel", "Agriculture & Agribusiness", "Real Estate & Construction", "Financial Services", "Education", "Other"
];
const countries = ["India", "United States", "China", "Germany", "United Kingdom", "Japan", "Canada"];
const indianStates = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onNavigate }) => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('https://e201jmhxij.execute-api.ap-south-1.amazonaws.com/post/registrations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            setSubmitStatus('success');
            setSubmitMessage('Thank you for registering! You will be redirected to the homepage shortly.');
            setTimeout(() => {
                onNavigate('home');
            }, 3000);
        } else {
            let errorMessage = `HTTP error! status: ${response.status}`;
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || JSON.stringify(errorData);
            } catch (e) {
                const textError = await response.text();
                errorMessage = textError || errorMessage;
            }
            setSubmitStatus('error');
            setSubmitMessage(`Registration failed: ${errorMessage}`);
        }
    } catch (error) {
        setSubmitStatus('error');
        setSubmitMessage('Registration failed due to a network error. Please check your connection and try again.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto bg-yellow-50 p-8 rounded-2xl shadow-2xl border-2 border-amber-200">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-stone-800">Early Bird Registration</h1>
          <p className="text-stone-600 mt-2">Join our platform early and get exclusive benefits by filling out your company details below.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-3 gap-6">
            <FormSection title="Company Information">
              <InputField label="Company Name" id="companyName" placeholder="Enter your company name" required />
              <InputField label="Date of Incorporation" id="incorporationDate" type="date" placeholder="" />
              <InputField label="Website URL" id="websiteUrl" placeholder="https://www.yourcompany.com" type="url" required />
              <InputField label="Promotional Code" id="promoCode" placeholder="Enter promotional code" />
            </FormSection>

            <FormSection title="Trade Information" subtitle="(Optional)">
              <InputField label="Brand Name" id="brandName" placeholder="If different from company name" />
              <InputField label="GSTIN" id="gstin" placeholder="GST number" />
              <InputField label="Operating Hours" id="operatingHours" placeholder="Mon-Sat 10:00-18:00" />
              <InputField label="CIN" id="cin" placeholder="Corporate Identity Number" />
              <InputField label="UDYAM" id="udyam" placeholder="UDYAM Registration Number" />
              <InputField label="PAN" id="pan" placeholder="PAN Number" />
            </FormSection>

            <FormSection title="Founder/MD Information">
              <InputField label="Founder Name" id="founderName" placeholder="Full name" required />
              <InputField label="Founder Phone" id="founderPhone" placeholder="+91XXXXXXXXXX" type="tel" required />
              <InputField label="Director Email" id="directorEmail" placeholder="director@company.com" type="email" required />
            </FormSection>

            <FormSection title="Alternative Contact">
              <InputField label="Contact Person Name" id="contactPersonName" placeholder="Full name" required />
              <InputField label="Contact Phone" id="contactPhone" placeholder="+91XXXXXXXXXX" type="tel" required />
              <InputField label="Contact Email" id="contactEmail" placeholder="contact@company.com" type="email" required />
            </FormSection>

            <FormSection title="Address Information">
              <div className="lg:col-span-3">
                <InputField label="Office Address" id="officeAddress" placeholder="Complete office address" required />
              </div>
              <SelectField label="Country" id="country" options={countries} required />
              <SelectField label="State" id="state" options={indianStates} required />
              <InputField label="City" id="city" placeholder="City" required />
              <InputField label="Postal Code" id="postalCode" placeholder="PIN Code" required />
            </FormSection>

            <FormSection title="Industry">
              <div className="lg:col-span-2">
                <label htmlFor="industry" className="block text-sm font-medium text-stone-700 mb-1">Select your Industry<span className="text-red-500">*</span></label>
                <select id="industry" name="industry" value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)} required className="w-full px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option value="">Select an Industry</option>
                  {industries.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              {selectedIndustry === "Other" && (
                <div className="lg:col-span-1">
                  {/* FIX: Removed the invalid 'name' prop. The InputField component does not accept a 'name' prop, as it internally uses the 'id' for the input's name attribute. */}
                  <InputField label="Please specify your industry" id="otherIndustry" placeholder="Your Industry" required />
                </div>
              )}
            </FormSection>

            <FormSection title="Social Media Links" subtitle="(Optional)">
              <InputField label="LinkedIn Profile" id="linkedin" placeholder="https://linkedin.com/company/yourcompany" />
              <InputField label="Facebook Page" id="facebook" placeholder="https://facebook.com/yourcompany" />
              <InputField label="Instagram Profile" id="instagram" placeholder="https://instagram.com/yourcompany" />
              <InputField label="Twitter/X Profile" id="twitter" placeholder="https://twitter.com/yourcompany" />
              <InputField label="YouTube Channel" id="youtube" placeholder="https://youtube.com/@yourcompany" />
            </FormSection>

            <FormSection title="Support Contact" subtitle="(Optional)">
              <InputField label="Support Email" id="supportEmail" placeholder="support@company.com" type="email" />
              <InputField label="Support Contact Number" id="supportContact" placeholder="+919876543210" type="tel" />
            </FormSection>
          </div>

          <div className="md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center mt-10">
            {submitStatus !== 'idle' && (
              <div className={`text-center p-4 mb-4 rounded-md w-full md:w-1/2 ${submitStatus === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                  {submitMessage}
              </div>
            )}
            <button type="submit" disabled={isSubmitting} className="w-full md:w-1/2 bg-amber-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors text-lg shadow-md disabled:bg-amber-400 disabled:cursor-not-allowed">
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
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