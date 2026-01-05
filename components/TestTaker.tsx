
import React, { useState } from 'react';
import { TestData, UserAnswer } from '../types';
import { ArrowRight, ArrowLeft, Send } from 'lucide-react';

interface TestTakerProps {
  test: TestData;
  onSubmit: (answers: UserAnswer[]) => void;
}

const TestTaker: React.FC<TestTakerProps> = ({ test, onSubmit }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>(
    test.questions.map(q => ({ questionId: q.id, selectedOption: null }))
  );

  const currentQuestion = test.questions[currentIdx];
  const progress = ((currentIdx + 1) / test.questions.length) * 100;

  const handleSelect = (optionIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIdx].selectedOption = optionIdx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIdx < test.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const isAllAnswered = answers.every(a => a.selectedOption !== null);

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4 pb-20">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-indigo-600 px-8 py-6 text-white">
          <h2 className="text-2xl font-bold mb-2">{test.title}</h2>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-2 bg-indigo-400/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-medium whitespace-nowrap">
              Question {currentIdx + 1} of {test.questions.length}
            </span>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-8 leading-relaxed">
            {currentQuestion.question}
          </h3>

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center gap-4 group
                  ${answers[currentIdx].selectedOption === idx 
                    ? 'border-indigo-600 bg-indigo-50 shadow-md' 
                    : 'border-slate-100 bg-slate-50 hover:border-slate-300'}
                `}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors
                  ${answers[currentIdx].selectedOption === idx 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-slate-400 border border-slate-200 group-hover:bg-slate-100'}
                `}>
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className={`text-lg transition-colors ${answers[currentIdx].selectedOption === idx ? 'text-indigo-900 font-medium' : 'text-slate-700'}`}>
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-8 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentIdx === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 text-slate-600"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>

          {currentIdx === test.questions.length - 1 ? (
            <button
              onClick={() => onSubmit(answers)}
              disabled={!isAllAnswered}
              className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Finish Test <Send className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={answers[currentIdx].selectedOption === null}
              className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestTaker;
