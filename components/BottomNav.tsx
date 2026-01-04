
import React from 'react';

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 z-50 w-full max-w-[480px] bg-white border-t border-gray-100 flex items-center justify-around py-2 px-2">
      <button className="p-2 text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 101.414 1.414L4 12.414V21a1 1 0 001 1h5a1 1 0 001-1v-6h2v6a1 1 0 001 1h5a1 1 0 001-1v-8.586l.293.293a1 1 0 001.414-1.414l-9-9z" />
        </svg>
      </button>
      <button className="p-2 text-gray-400 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      <button className="p-2 text-gray-400 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      <button className="p-2 text-gray-400 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      <button className="p-1">
        <div className="w-8 h-8 rounded-full border border-gray-300 overflow-hidden">
          <img src="https://picsum.photos/id/1027/50/50" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </button>
    </nav>
  );
};

export default BottomNav;
