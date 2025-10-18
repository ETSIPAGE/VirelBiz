import React from 'react';

interface AnnouncementProps {
  onNavigate: (page: string) => void;
}

const Announcement: React.FC<AnnouncementProps> = ({ onNavigate }) => {
  return (
    <div className="bg-gradient-to-r from-stone-800 to-amber-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-center text-center">
        <p className="text-sm font-medium">
          <span className="font-bold mr-2 bg-yellow-400 text-stone-900 px-2 py-0.5 rounded">NEW!</span>
          Early Bird Registration is now open! Register your company today for exclusive benefits.
          <a href="#" onClick={(e) => {e.preventDefault(); onNavigate('register');}} className="font-bold underline ml-2 hover:text-yellow-300 transition-colors">Register Now &rarr;</a>
        </p>
      </div>
    </div>
  );
};

export default Announcement;
