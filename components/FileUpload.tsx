
import React, { useState } from 'react';
// Added GraduationCap to fix the error: Cannot find name 'GraduationCap'
import { Upload, FileText, CheckCircle2, AlertCircle, GraduationCap } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  isLoading: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, isLoading }) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateAndSelect = (file: File) => {
    if (file.name.endsWith('.docx')) {
      setError(null);
      onFileSelect(file);
    } else {
      setError("Please upload a .docx file.");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSelect(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      validateAndSelect(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Transform Documents into <span className="text-indigo-600">Smart Tests</span>
        </h1>
        <p className="text-lg text-slate-600">
          Upload your course materials in .docx format and our AI will generate a comprehensive assessment for your students in seconds.
        </p>
      </div>

      <div 
        className={`relative border-2 border-dashed rounded-2xl p-12 transition-all flex flex-col items-center justify-center text-center
          ${dragActive ? 'border-indigo-500 bg-indigo-50/50 scale-[1.01]' : 'border-slate-300 bg-white'}
          ${isLoading ? 'opacity-50 pointer-events-none' : 'hover:border-indigo-400'}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className={`p-4 rounded-full mb-4 ${dragActive ? 'bg-indigo-100' : 'bg-slate-100'}`}>
          <Upload className={`w-8 h-8 ${dragActive ? 'text-indigo-600' : 'text-slate-500'}`} />
        </div>
        <p className="text-xl font-semibold text-slate-800 mb-1">
          {isLoading ? 'Processing your document...' : 'Drop your .docx file here'}
        </p>
        <p className="text-slate-500 mb-6">Or click to browse your computer</p>
        
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".docx"
          onChange={handleChange}
          disabled={isLoading}
        />
        <label
          htmlFor="file-upload"
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 active:bg-indigo-800 transition-all cursor-pointer shadow-lg shadow-indigo-200"
        >
          Select Document
        </label>

        {error && (
          <div className="mt-4 flex items-center gap-2 text-red-600 animate-in fade-in slide-in-from-top-1">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">{error}</span>
          </div>
        )}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <FileText className="text-blue-500" />, title: "Full Extraction", desc: "Reads all text from your docx file seamlessly." },
          { icon: <CheckCircle2 className="text-green-500" />, title: "Instant Grading", desc: "Students get results the moment they finish." },
          { icon: <GraduationCap className="text-purple-500" />, title: "AI Powered", desc: "Powered by Gemini 3 for high-quality reasoning." }
        ].map((item, i) => (
          <div key={i} className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="mb-2">{item.icon}</div>
            <h3 className="font-bold text-slate-800">{item.title}</h3>
            <p className="text-sm text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
