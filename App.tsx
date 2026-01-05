
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import StudentLogin from './components/StudentLogin';
import TestTaker from './components/TestTaker';
import Results from './components/Results';
import TeacherDashboard from './components/TeacherDashboard';
import TeacherLoginModal from './components/TeacherLoginModal';
import { AppState, TestData, UserAnswer, StudentInfo, TestRecord } from './types';
import { extractTextFromDocx } from './services/docx';
import { generateTestFromText } from './services/gemini';
import { Loader2, Settings, GraduationCap, ClipboardList, Lock, LogOut, UserCircle } from 'lucide-react';

const TEACHER_PIN = "2025"; 

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('HOME');
  const [isTeacher, setIsTeacher] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [variants, setVariants] = useState<Record<number, TestData>>({});
  const [currentVariantId, setCurrentVariantId] = useState<number | null>(null);
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [results, setResults] = useState<UserAnswer[]>([]);
  const [records, setRecords] = useState<TestRecord[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [uploadingVariantId, setUploadingVariantId] = useState<number>(1);

  useEffect(() => {
    const savedRecords = localStorage.getItem('test_records');
    if (savedRecords) setRecords(JSON.parse(savedRecords));
    
    const savedVariants = localStorage.getItem('test_variants');
    if (savedVariants) setVariants(JSON.parse(savedVariants));

    const teacherSession = sessionStorage.getItem('is_teacher');
    if (teacherSession === 'true') setIsTeacher(true);
  }, []);

  const saveRecord = (record: TestRecord) => {
    const newRecords = [record, ...records];
    setRecords(newRecords);
    localStorage.setItem('test_records', JSON.stringify(newRecords));
  };

  const handleTeacherLogin = (pin: string) => {
    if (pin === TEACHER_PIN) {
      setIsTeacher(true);
      sessionStorage.setItem('is_teacher', 'true');
      setShowLoginModal(false);
      setState('TEACHER_DASHBOARD');
    } else {
      alert("PIN-kod noto'g'ri!");
    }
  };

  const handleLogout = () => {
    setIsTeacher(false);
    sessionStorage.removeItem('is_teacher');
    setState('HOME');
  };

  const handleFileSelect = async (file: File) => {
    setState('LOADING');
    setError(null);
    try {
      const text = await extractTextFromDocx(file);
      const test = await generateTestFromText(text, uploadingVariantId);
      
      const newVariants = { ...variants, [uploadingVariantId]: test };
      setVariants(newVariants);
      localStorage.setItem('test_variants', JSON.stringify(newVariants));
      
      setState('TEACHER_UPLOAD');
      alert(`${uploadingVariantId}-variant muvaffaqiyatli yuklandi!`);
    } catch (err: any) {
      setError(err.message || "Xatolik yuz berdi.");
      setState('TEACHER_UPLOAD');
    }
  };

  const startTest = (info: StudentInfo) => {
    if (!variants[info.variantId]) {
      alert("Bu variant hali yuklanmagan!");
      return;
    }
    setStudentInfo(info);
    setCurrentVariantId(info.variantId);
    setState('TAKING');
  };

  const handleTestSubmit = (answers: UserAnswer[]) => {
    if (!studentInfo || currentVariantId === null) return;
    
    const test = variants[currentVariantId];
    const score = answers.reduce((acc, ans, idx) => {
      return ans.selectedOption === test.questions[idx].correctAnswer ? acc + 1 : acc;
    }, 0);

    const record: TestRecord = {
      id: Date.now().toString(),
      studentName: studentInfo.fullName,
      group: studentInfo.group,
      variantId: currentVariantId,
      score: score,
      total: test.questions.length,
      date: new Date().toISOString()
    };

    saveRecord(record);
    setResults(answers);
    setState('RESULTS');
  };

  const clearRecords = () => {
    const confirmClear = window.confirm("Barcha talabalar natijalarini butunlay o'chirib tashlaysizmi? Bu amalni ortga qaytarib bo'lmaydi.");
    if (confirmClear) {
      setRecords([]);
      localStorage.removeItem('test_records');
      alert("Barcha natijalar muvaffaqiyatli tozalandi.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar 
        onTeacherPortalClick={() => setShowLoginModal(true)} 
        isTeacher={isTeacher} 
      />
      
      {showLoginModal && (
        <TeacherLoginModal 
          onLogin={handleTeacherLogin} 
          onClose={() => setShowLoginModal(false)} 
        />
      )}
      
      <div className="bg-white border-b border-slate-100 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-2">
            <button 
              onClick={() => setState('HOME')}
              className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${state === 'HOME' || state === 'STUDENT_LOGIN' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <GraduationCap className="w-4 h-4" /> Talabalar portali
            </button>
            
            {isTeacher && (
              <>
                <button 
                  onClick={() => setState('TEACHER_DASHBOARD')}
                  className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${state === 'TEACHER_DASHBOARD' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  <ClipboardList className="w-4 h-4" /> Natijalar paneli
                </button>
                <button 
                  onClick={() => setState('TEACHER_UPLOAD')}
                  className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${state === 'TEACHER_UPLOAD' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  <Settings className="w-4 h-4" /> Variantlarni boshqarish
                </button>
              </>
            )}
          </div>

          {!isTeacher ? (
            <button 
              onClick={() => setShowLoginModal(true)}
              className="text-slate-400 hover:text-indigo-600 text-sm font-bold flex items-center gap-2 transition-colors px-4 py-2"
            >
              <Lock className="w-4 h-4" /> O'qituvchi kirishi
            </button>
          ) : (
            <button 
              onClick={handleLogout}
              className="text-red-400 hover:text-red-600 text-sm font-bold flex items-center gap-2 transition-colors px-4 py-2"
            >
              <LogOut className="w-4 h-4" /> Chiqish
            </button>
          )}
        </div>
      </div>

      <main className="flex-1">
        {state === 'HOME' && (
          <div className="py-20 text-center">
            <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Onlayn Imtihon Tizimi</h1>
            <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto italic">
              "Tibbiyotda axborot texnologiyalari" fanidan bilimingizni sinab ko'ring.
            </p>
            <button 
              onClick={() => setState('STUDENT_LOGIN')}
              className="group relative px-16 py-6 bg-indigo-600 text-white rounded-2xl font-black text-2xl shadow-2xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 active:translate-y-0 transition-all overflow-hidden"
            >
              <span className="relative z-10">Imtihonni boshlash</span>
            </button>
            
            <div className="mt-20 max-w-lg mx-auto grid grid-cols-3 gap-6 px-4">
              {[1, 2, 3].map(v => (
                <div key={v} className={`p-6 rounded-2xl border-2 transition-all ${variants[v] ? 'border-green-100 bg-green-50/50' : 'border-slate-100 bg-white opacity-40 grayscale'}`}>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Variant {v}</p>
                  <p className={`font-bold ${variants[v] ? 'text-green-600' : 'text-slate-300'}`}>{variants[v] ? 'FAOL' : 'YUKLANMAGAN'}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {state === 'TEACHER_UPLOAD' && isTeacher && (
          <div className="py-12">
            <div className="max-w-2xl mx-auto px-4 mb-8">
              <h2 className="text-3xl font-black text-slate-800 mb-6">Variantlarni boshqarish</h2>
              <div className="flex gap-4 mb-10">
                {[1, 2, 3].map(v => (
                  <button
                    key={v}
                    onClick={() => setUploadingVariantId(v)}
                    className={`flex-1 py-5 rounded-2xl font-bold border-2 transition-all ${uploadingVariantId === v ? 'border-indigo-600 bg-indigo-50 text-indigo-600 shadow-md shadow-indigo-50' : 'border-slate-100 bg-white text-slate-400 hover:border-slate-200'}`}
                  >
                    {v}-Variant {variants[v] && '✅'}
                  </button>
                ))}
              </div>
            </div>
            <FileUpload onFileSelect={handleFileSelect} isLoading={false} />
          </div>
        )}

        {state === 'STUDENT_LOGIN' && (
          <StudentLogin 
            availableVariants={Object.keys(variants).map(Number)} 
            onStart={startTest} 
            records={records}
          />
        )}

        {state === 'LOADING' && (
          <div className="h-[calc(100vh-160px)] flex flex-col items-center justify-center p-4 text-center">
            <div className="relative">
              <Loader2 className="w-20 h-20 text-indigo-600 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center font-black text-indigo-600 text-xs">AI</div>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mt-6">Variant {uploadingVariantId} shakllantirilmoqda...</h2>
            <p className="text-slate-500 mt-2 max-w-sm">Tibbiy ma'lumotlar tahlil qilinmoqda. Dr. Bobojanov tomonidan tasdiqlangan savollar generatsiyasi...</p>
          </div>
        )}

        {state === 'TAKING' && currentVariantId && variants[currentVariantId] && (
          <TestTaker test={variants[currentVariantId]} onSubmit={handleTestSubmit} />
        )}

        {state === 'RESULTS' && currentVariantId && variants[currentVariantId] && (
          <Results 
            test={variants[currentVariantId]} 
            answers={results} 
            onRestart={() => setState('HOME')} 
          />
        )}

        {state === 'TEACHER_DASHBOARD' && isTeacher && (
          <TeacherDashboard records={records} onClear={clearRecords} />
        )}
      </main>

      <footer className="py-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <UserCircle className="w-4 h-4 text-indigo-400" />
            <span>Raqamli texnologiyalar kafedrasi 2026 • Dr. Bobojanov</span>
          </div>
          <div className="flex gap-6">
            <span>Urinishlar: Max 3</span>
            <span>RANCH Tibbiyotda AT</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition-colors" onClick={() => setShowLoginModal(true)}>
            <Lock className="w-3 h-3" /> Teacher Login
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
