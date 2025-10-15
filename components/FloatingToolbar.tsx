import React, { useState } from 'react';
import { StoreIcon, QuestionIcon, DocumentTextIcon, ClipboardListIcon, ChevronDoubleLeftIcon } from './icons/Icons';

interface ToolbarItemProps {
    icon: React.ReactNode;
    tooltipText: string;
    isBottom?: boolean;
}

const ToolbarItem: React.FC<ToolbarItemProps> = ({ icon, tooltipText, isBottom }) => (
    <div className="relative group w-full">
        <button className={`p-3 hover:bg-yellow-200 text-stone-600 hover:text-amber-600 transition-colors w-full ${!isBottom ? 'border-b border-yellow-200' : ''}`}>
            {icon}
        </button>
        <div className="absolute top-1/2 -translate-y-1/2 right-full mr-2 w-max bg-white rounded-md shadow-lg px-3 py-1.5 text-sm font-semibold text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {tooltipText}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-5px] h-3 w-3 bg-white transform rotate-45"></div>
        </div>
    </div>
);


const FloatingToolbar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="fixed top-1/2 -translate-y-1/2 right-0 flex flex-col items-center bg-yellow-50 shadow-lg rounded-l-lg border border-r-0 border-yellow-200 z-40">
            <div className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${isCollapsed ? 'max-h-0' : 'max-h-96'}`}>
                <ToolbarItem icon={<StoreIcon className="h-6 w-6 mx-auto" />} tooltipText="Become a Supplier" />
                <ToolbarItem icon={<QuestionIcon className="h-6 w-6 mx-auto" />} tooltipText="Leave us Feedback" />
                <ToolbarItem icon={<DocumentTextIcon className="h-6 w-6 mx-auto" />} tooltipText="Sourcing Requests" />
                <ToolbarItem icon={<ClipboardListIcon className="h-6 w-6 mx-auto" />} tooltipText="Take Our Survey" isBottom={true} />
            </div>
            <div 
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="bg-amber-600 text-white p-2 w-full cursor-pointer rounded-bl-lg"
            >
                <ChevronDoubleLeftIcon className={`h-5 w-5 mx-auto transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
            </div>
        </div>
    );
}

export default FloatingToolbar;