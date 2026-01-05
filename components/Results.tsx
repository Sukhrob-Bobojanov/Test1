
import React from 'react';
import { TestData, UserAnswer } from '../types';
import { Check, X, RefreshCw, Award, Info } from 'lucide-react';

interface ResultsProps {
  test: TestData;
  answers: UserAnswer[];
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ test, answers, onRestart }) => {
  const correctCount = answers.reduce((acc, ans, idx) => {
    return ans.selectedOption === test.questions[idx].correctAnswer ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((correctCount / test.questions.length) * 100);

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4 pb-20">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 text-center p-12 mb-8">
        <div className="inline-flex items-center justify-center p-6 bg-indigo-50 rounded-full mb-6">
          <Award className="w-16 h-16 text-indigo-600" />
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Test Complete!</h2>
        <p className="text-slate-500 text-lg mb-8">You've successfully finished <span className="font-semibold text-slate-700">{test.title}</span></p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Score</p>
            <p className="text-3xl font-black text-indigo-600">{percentage}%</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Correct</p>
            <p className="text-3xl font-black text-green-600">{correctCount}</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Total</p>
            <p className="text-3xl font-black text-slate-700">{test.questions.length}</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Status</p>
            <p className={`text-2xl font-black ${percentage >= 70 ? 'text-green-600' : 'text-orange-500'}`}>
              {percentage >= 70 ? 'PASSED' : 'RETRY'}
            </p>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="mt-10 flex items-center gap-2 mx-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
        >
          <RefreshCw className="w-5 h-5" /> Start New Test
        </button>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-800 ml-2">Review Your Answers</h3>
        {test.questions.map((q, idx) => {
          const isCorrect = answers[idx].selectedOption === q.correctAnswer;
          const userAnswer = answers[idx].selectedOption;
          
          return (
            <div key={q.id} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                  ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
                `}>
                  {idx + 1}
                </div>
                <h4 className="text-xl font-semibold text-slate-800 pt-0.5">{q.question}</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {q.options.map((opt, oIdx) => {
                  const isSelected = userAnswer === oIdx;
                  const isAnswer = q.correctAnswer === oIdx;
                  
                  let borderClass = 'border-slate-100';
                  let bgClass = 'bg-slate-50';
                  let icon = null;

                  if (isSelected && isAnswer) {
                    borderClass = 'border-green-500';
                    bgClass = 'bg-green-50';
                    icon = <Check className="w-4 h-4 text-green-600" />;
                  } else if (isSelected && !isAnswer) {
                    borderClass = 'border-red-500';
                    bgClass = 'bg-red-50';
                    icon = <X className="w-4 h-4 text-red-600" />;
                  } else if (!isSelected && isAnswer) {
                    borderClass = 'border-green-300';
                    bgClass = 'bg-green-50/50';
                  }

                  return (
                    <div key={oIdx} className={`p-4 rounded-xl border-2 flex items-center gap-3 ${borderClass} ${bgClass}`}>
                      <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400">
                        {String.fromCharCode(65 + oIdx)}
                      </div>
                      <span className="flex-1 text-slate-700 font-medium">{opt}</span>
                      {icon}
                    </div>
                  );
                })}
              </div>

              <div className="bg-indigo-50/50 rounded-xl p-4 flex gap-3 items-start border border-indigo-100">
                <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-indigo-900 mb-1">AI Explanation</p>
                  <p className="text-indigo-800/80 leading-relaxed text-sm">{q.explanation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
