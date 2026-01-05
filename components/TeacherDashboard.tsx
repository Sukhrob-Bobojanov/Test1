
import React from 'react';
import { TestRecord } from '../types';
import { Download, Trash2, Calendar, UserCheck } from 'lucide-react';

interface TeacherDashboardProps {
  records: TestRecord[];
  onClear: () => void;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ records, onClear }) => {
  const downloadCSV = () => {
    if (records.length === 0) {
      alert("Yuklab olish uchun natijalar mavjud emas.");
      return;
    }
    const headers = "F.I.SH,Guruh,Variant,Ball,Jami,Sana\n";
    const csvContent = records.map(r => 
      `${r.studentName},${r.group},${r.variantId},${r.score},${r.total},${new Date(r.date).toLocaleDateString()}`
    ).join("\n");
    
    const blob = new Blob([headers + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `test_natijalari_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Talabalar natijalari</h2>
          <p className="text-slate-500">Jami topshirganlar: <span className="text-indigo-600 font-bold">{records.length} ta</span></p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button 
            onClick={downloadCSV}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-md active:scale-95"
          >
            <Download className="w-5 h-5" /> Excel yuklash
          </button>
          <button 
            onClick={() => onClear()}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-red-50 text-red-600 border border-red-100 rounded-xl font-bold hover:bg-red-100 transition-all shadow-sm active:scale-95"
          >
            <Trash2 className="w-5 h-5" /> Tozalash
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Talaba</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Guruh</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider text-center">Variant</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider text-center">Natija</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider text-right">Sana</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {records.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-slate-400">
                    <div className="flex flex-col items-center gap-2">
                      <Calendar className="w-10 h-10 opacity-20" />
                      <p className="text-lg font-medium">Hali natijalar mavjud emas</p>
                    </div>
                  </td>
                </tr>
              ) : (
                records.map(record => (
                  <tr key={record.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                          {record.studentName.charAt(0)}
                        </div>
                        <span className="font-semibold text-slate-800">{record.studentName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-medium">{record.group}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600">
                        V-{record.variantId}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className={`text-lg font-bold ${record.score / record.total >= 0.7 ? 'text-green-600' : 'text-orange-500'}`}>
                          {record.score} / {record.total}
                        </span>
                        <div className="w-16 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                          <div 
                            className={`h-full ${record.score / record.total >= 0.7 ? 'bg-green-500' : 'bg-orange-500'}`}
                            style={{ width: `${(record.score / record.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-slate-400 text-sm font-medium">
                      {new Date(record.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
