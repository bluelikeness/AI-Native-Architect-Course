import { GoogleGenAI, Type } from "@google/genai";
import { QuizQuestion } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateQuizQuestions = async (topic: string, specificTopics: string[]): Promise<QuizQuestion[]> => {
  const ai = getClient();
  if (!ai) {
    // Fallback if no API key (mock data for demo robustness)
    return getMockQuestions(topic);
  }

  const prompt = `Generate 3 distinct, challenging multiple-choice quiz questions for a coding course session about "${topic}". 
  Specific concepts to cover: ${specificTopics.join(', ')}.
  
  Focus on practical application and "gotchas", not just definition rote memorization.
  The audience is senior developers learning AI engineering.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview', // Using Flash for speed/efficiency in this interactive context
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.STRING, description: "Must be exactly one of the options" },
              explanation: { type: Type.STRING }
            },
            required: ["question", "options", "correctAnswer", "explanation"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as QuizQuestion[];
    }
    throw new Error("No text in response");
  } catch (error) {
    console.error("Failed to generate quiz:", error);
    return getMockQuestions(topic);
  }
};

// Fallback data in case API key is missing or fails
const getMockQuestions = (topic: string): QuizQuestion[] => {
  return [
    {
      question: `(Offline Mode) Regarding ${topic}, what is a key consideration?`,
      options: ["Speed only", "Accuracy only", "Balancing constraints", "Ignoring errors"],
      correctAnswer: "Balancing constraints",
      explanation: "This is a fallback question because the live AI generation failed."
    },
    {
      question: "Which tool helps most with this?",
      options: ["Notepad", "AI Assistant", "Calculator", "Abacus"],
      correctAnswer: "AI Assistant",
      explanation: "AI tools drastically improve efficiency."
    },
    {
      question: "What is the primary risk?",
      options: ["Over-reliance", "High cost", "Too much fun", "None"],
      correctAnswer: "Over-reliance",
      explanation: "Blindly trusting AI output is a major pitfall."
    }
  ];
};