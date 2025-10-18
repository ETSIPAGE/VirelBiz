
import React, { useEffect } from 'react';
import { XIcon } from './icons/Icons';

type Submission = {
  [key: string]: any;
};

interface SubmissionDetailModalProps {
  submission: Submission;
  onClose: () => void;
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-lg font-bold text-stone-800 border-b-2 border-amber-200 pb-2 mb-3">{title}</h3>
        <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-sm">
            {children}
        </dl>
    </div>
);

const DetailItem: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => {
    if (!value) return null;
    return (
        <div className="flex flex-col">
            <dt className="font-semibold text-stone-600">{label}</dt>
            <dd className="text-stone-800 break-words">{value}</dd>
        </div>
    );
};

const SubmissionDetailModal: React.FC<SubmissionDetailModalProps> = ({ submission, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-yellow-50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border-2 border-amber-200"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex justify-between items-center p-4 border-b border-amber-200">
                    <h2 className="text-2xl font-bold text-stone-800">{submission.companyName || 'Submission Details'}</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-yellow-200 text-stone-600 hover:text-amber-700">
                        <XIcon className="h-6 w-6" />
                    </button>
                </header>
                <main className="p-6 overflow-y-auto custom-scrollbar">
                    <DetailSection title="Company Information">
                        <DetailItem label="Company Name" value={submission.companyName} />
                        <DetailItem label="Brand Name" value={submission.brandName} />
                        <DetailItem label="Website" value={submission.websiteUrl && <a href={submission.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">{submission.websiteUrl}</a>} />
                        <DetailItem label="Date of Incorporation" value={submission.incorporationDate ? new Date(submission.incorporationDate).toLocaleDateString() : null} />
                        <DetailItem label="Industry" value={submission.industry} />
                        {submission.otherIndustry && <DetailItem label="Other Industry" value={submission.otherIndustry} />}
                        <DetailItem label="Promotional Code" value={submission.promoCode} />
                        <DetailItem label="Submitted On" value={submission.createdAt ? new Date(submission.createdAt).toLocaleString() : 'N/A'} />
                    </DetailSection>

                    <DetailSection title="Trade Information">
                        <DetailItem label="GSTIN" value={submission.gstin} />
                        <DetailItem label="PAN" value={submission.pan} />
                        <DetailItem label="CIN" value={submission.cin} />
                        <DetailItem label="UDYAM" value={submission.udyam} />
                        <DetailItem label="Operating Hours" value={submission.operatingHours} />
                    </DetailSection>

                    <DetailSection title="Founder/MD Information">
                        <DetailItem label="Founder Name" value={submission.founderName} />
                        <DetailItem label="Founder Phone" value={submission.founderPhone && <a href={`tel:${submission.founderPhone}`} className="text-amber-600 hover:underline">{submission.founderPhone}</a>} />
                        <DetailItem label="Director Email" value={submission.directorEmail && <a href={`mailto:${submission.directorEmail}`} className="text-amber-600 hover:underline">{submission.directorEmail}</a>} />
                    </DetailSection>
                    
                     <DetailSection title="Alternative Contact">
                        <DetailItem label="Contact Person" value={submission.contactPersonName} />
                        <DetailItem label="Contact Phone" value={submission.contactPhone && <a href={`tel:${submission.contactPhone}`} className="text-amber-600 hover:underline">{submission.contactPhone}</a>} />
                        <DetailItem label="Contact Email" value={submission.contactEmail && <a href={`mailto:${submission.contactEmail}`} className="text-amber-600 hover:underline">{submission.contactEmail}</a>} />
                    </DetailSection>

                    <DetailSection title="Address Information">
                        <DetailItem label="Office Address" value={submission.officeAddress} />
                        <DetailItem label="City" value={submission.city} />
                        <DetailItem label="State" value={submission.state} />
                        <DetailItem label="Country" value={submission.country} />
                        <DetailItem label="Postal Code" value={submission.postalCode} />
                    </DetailSection>
                    
                    <DetailSection title="Support Contact">
                         <DetailItem label="Support Email" value={submission.supportEmail && <a href={`mailto:${submission.supportEmail}`} className="text-amber-600 hover:underline">{submission.supportEmail}</a>} />
                         <DetailItem label="Support Contact" value={submission.supportContact && <a href={`tel:${submission.supportContact}`} className="text-amber-600 hover:underline">{submission.supportContact}</a>} />
                    </DetailSection>

                    <DetailSection title="Social Media Links">
                        <DetailItem label="LinkedIn" value={submission.linkedin && <a href={submission.linkedin} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">View Profile</a>} />
                        <DetailItem label="Facebook" value={submission.facebook && <a href={submission.facebook} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">View Page</a>} />
                        <DetailItem label="Instagram" value={submission.instagram && <a href={submission.instagram} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">View Profile</a>} />
                        <DetailItem label="Twitter/X" value={submission.twitter && <a href={submission.twitter} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">View Profile</a>} />
                        <DetailItem label="YouTube" value={submission.youtube && <a href={submission.youtube} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">View Channel</a>} />
                    </DetailSection>
                </main>
            </div>
        </div>
    );
};

export default SubmissionDetailModal;
