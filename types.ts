
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TestData {
  variantId: number;
  title: string;
  questions: Question[];
}

export interface StudentInfo {
  fullName: string;
  group: string;
  variantId: number;
}

export interface UserAnswer {
  questionId: string;
  selectedOption: number | null;
}

export interface TestRecord {
  id: string;
  studentName: string;
  group: string;
  variantId: number;
  score: number;
  total: number;
  date: string;
}

export type AppState = 'HOME' | 'TEACHER_UPLOAD' | 'STUDENT_LOGIN' | 'LOADING' | 'TAKING' | 'RESULTS' | 'TEACHER_DASHBOARD' | 'TEACHER_LOGIN';
