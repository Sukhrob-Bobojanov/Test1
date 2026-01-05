
import React, { useState } from 'react';
import { StudentInfo, TestRecord } from '../types';
import { User, Users, AlertCircle } from 'lucide-react';

interface StudentLoginProps {
  availableVariants: number[];
  onStart: (info: StudentInfo) => void;
  records: TestRecord[];
}

const StudentLogin: React.FC<StudentLoginProps> = ({ availableVariants, onStart, records }) => {
  const [info, setInfo] = useState<StudentInfo>({
    fullName: '',
    group: '',
    variantId: availableVariants[0] || 1
  });

  const [attemptError, setAttemptError] = useState<string | null>(null);

  const checkAttemptsAndStart = () => {
    // Ism va guruh bo'yicha urinishlarni sanash
    const studentAttempts = records.filter(
      r => r.studentName.toLowerCase().trim() === info.fullName.toLowerCase().trim() && 
           r.group.toLowerCase().trim() === info.group.toLowerCase().trim()
    );

    if (studentAttempts.length >= 3) {
      setAttemptError("Sizda test topshirish uchun urinishlar qolmagan (maksimal 3 marta).");
      return;
    }

    setAttemptError(null);
    onStart(info);
  };

  const isComplete = info.fullName.trim() !== '' && info.group.trim() !== '';

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Testga kirish</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">F.I.SH</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Ism va Familiyangizni kiriting"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                value={info.fullName}
                onChange={e => setInfo({...info, fullName: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Guruh</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Guruh nomini kiriting"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                value={info.group}
                onChange={e => setInfo({...info, group: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Variantni tanlang</label>
            <div className="grid grid-cols-3 gap-3">
              {availableVariants.map(v => (
                <button
                  key={v}
                  onClick={() => setInfo({...info, variantId: v})}
                  className={`py-3 rounded-xl font-bold border-2 transition-all
                    ${info.variantId === v 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                      : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200'}
                  `}
                >
                  {v}-Variant
                </button>
              ))}
            </div>
          </div>

          {attemptError && (
            <div className="p-4 bg-red-50 rounded-xl flex gap-3 items-center text-red-700 border border-red-100 animate-in fade-in zoom-in-95">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">{attemptError}</p>
            </div>
          )}

          <button
            onClick={checkAttemptsAndStart}
            disabled={!isComplete}
            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            Testni boshlash
          </button>
          
          <p className="text-center text-xs text-slate-400 font-medium">
            Maksimal urinishlar soni: 3 ta
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
