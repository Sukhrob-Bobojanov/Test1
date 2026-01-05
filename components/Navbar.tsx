
import React from 'react';
import { BookOpenCheck, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onTeacherPortalClick?: () => void;
  isTeacher?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onTeacherPortalClick, isTeacher }) => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
            <div className="p-2 bg-indigo-600 rounded-lg">
              <BookOpenCheck className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">RANCH Tibbiyotda AT</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {!isTeacher && (
              <button 
                onClick={onTeacherPortalClick}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full hover:bg-indigo-600 hover:text-white transition-all font-bold text-sm"
              >
                <GraduationCap className="w-4 h-4" />
                Teacher Portal
              </button>
            )}
            {isTeacher && (
              <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 border border-green-100 rounded-full text-xs font-bold shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                O'qituvchi rejimi
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
