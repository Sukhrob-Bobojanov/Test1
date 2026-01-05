
import { GoogleGenAI, Type } from "@google/genai";
import { TestData } from "../types";

export async function generateTestFromText(content: string, variantId: number): Promise<TestData> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // 50 ta savol uchun token limitini hisobga olgan holda prompt
  const prompt = `Based on the following content, generate an educational test. 
  The test should consist of EXACTLY 50 challenging multiple-choice questions. 
  Each question must have exactly 4 options.
  Provide a clear, brief explanation for the correct answer.
  Return the result for Variant ${variantId}.
  
  Content:
  ${content}`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          questions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                question: { type: Type.STRING },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                correctAnswer: { type: Type.INTEGER },
                explanation: { type: Type.STRING }
              },
              required: ["id", "question", "options", "correctAnswer", "explanation"]
            }
          }
        },
        required: ["title", "questions"]
      }
    }
  });

  try {
    const data = JSON.parse(response.text);
    return { ...data, variantId } as TestData;
  } catch (error) {
    console.error("Gemini parse error", error);
    throw new Error("Test formatini yaratishda xatolik yuz berdi. Iltimos qayta urunib ko'ring.");
  }
}
