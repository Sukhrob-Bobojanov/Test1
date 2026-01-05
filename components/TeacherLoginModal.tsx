
import React, { useState } from 'react';
import { Lock, ShieldCheck, X } from 'lucide-react';

interface TeacherLoginModalProps {
  onLogin: (pin: string) => void;
  onClose: () => void;
}

const TeacherLoginModal: React.FC<TeacherLoginModalProps> = ({ onLogin, onClose }) => {
  const [pin, setPin] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(pin);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="bg-indigo-600 p-6 text-center relative">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 backdrop-blur-md">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">O'qituvchi kirishi</h2>
          <p className="text-indigo-100 text-sm mt-1">Boshqaruv paneliga kirish uchun PIN-kodni kiriting</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-6">
            <input
              autoFocus
              type="password"
              placeholder="••••"
              className="w-full text-center text-4xl tracking-[1em] font-black py-4 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={4}
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-100"
          >
            <ShieldCheck className="w-5 h-5" /> Tizimga kirish
          </button>
          
          <p className="mt-4 text-center text-xs text-slate-400 font-medium">
            Faqat vakolatli o'qituvchilar uchun
          </p>
        </form>
      </div>
    </div>
  );
};

export default TeacherLoginModal;
