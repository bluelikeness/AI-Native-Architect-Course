import React, { useEffect, useState } from 'react';
import { Session, QuizQuestion } from '../types';
import { generateQuizQuestions } from '../services/geminiService';
import { Sparkles, RefreshCw, Check, X, AlertTriangle } from 'lucide-react';

interface QuizViewProps {
  session: Session;
}

const QuizView: React.FC<QuizViewProps> = ({ session }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const fetchQuiz = async () => {
    setLoading(true);
    setError(null);
    setShowResults(false);
    setUserAnswers({});
    try {
      // Use explicit topics if available, otherwise derive from lecture headings
      const topics = session.topics || session.lectureContent.map(s => s.heading);
      const qs = await generateQuizQuestions(session.title, topics);
      setQuestions(qs);
    } catch (err) {
      setError("Failed to generate quiz. Please check your connection or API key.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, [session.id]); // Re-fetch when session changes

  const handleSelectOption = (qIndex: number, option: string) => {
    if (showResults) return; // Disable changes after submission
    setUserAnswers(prev => ({
      ...prev,
      [qIndex]: option
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) score++;
    });
    return score;
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-blue-400 font-medium animate-pulse">Consulting AI Architect...</p>
      </div>
    );
  }

  if (error) {
    return (
        <div className="flex flex-col items-center justify-center h-96 gap-4 text-center">
            <AlertTriangle className="w-12 h-12 text-red-500" />
            <p className="text-red-400">{error}</p>
            <button 
                onClick={fetchQuiz}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white transition-colors"
            >
                Try Again
            </button>
        </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-8">
        <div>
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            AI Knowledge Check
            </h2>
            <p className="text-gray-400 text-sm mt-1">Generated specifically for {session.title}</p>
        </div>
        <button 
            onClick={fetchQuiz}
            className="text-xs flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
        >
            <RefreshCw size={14} /> Regenerate Quiz
        </button>
      </div>

      <div className="space-y-8">
        {questions.map((q, qIdx) => {
          const isCorrect = userAnswers[qIdx] === q.correctAnswer;
          const userAnswer = userAnswers[qIdx];
          
          return (
            <div key={qIdx} className="bg-gray-850 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-4">
                <span className="text-purple-500 mr-2">Q{qIdx + 1}.</span>
                {q.question}
              </h3>
              
              <div className="grid gap-3">
                {q.options.map((option, oIdx) => {
                  let btnClass = "w-full text-left p-4 rounded-lg border transition-all duration-200 ";
                  
                  if (showResults) {
                    if (option === q.correctAnswer) {
                        btnClass += "bg-green-900/30 border-green-500/50 text-green-200"; // Correct answer always green
                    } else if (option === userAnswer && option !== q.correctAnswer) {
                        btnClass += "bg-red-900/30 border-red-500/50 text-red-200"; // Wrong selection red
                    } else {
                        btnClass += "bg-gray-800 border-transparent opacity-50"; // Others dimmed
                    }
                  } else {
                    if (userAnswer === option) {
                        btnClass += "bg-purple-900/30 border-purple-500 text-purple-200";
                    } else {
                        btnClass += "bg-gray-900 border-gray-700 hover:bg-gray-800 hover:border-gray-600 text-gray-300";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(qIdx, option)}
                      disabled={showResults}
                      className={btnClass}
                    >
                      <div className="flex justify-between items-center">
                        <span>{option}</span>
                        {showResults && option === q.correctAnswer && <Check size={18} className="text-green-400" />}
                        {showResults && option === userAnswer && option !== q.correctAnswer && <X size={18} className="text-red-400" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className={`mt-4 p-4 rounded-lg text-sm ${isCorrect ? 'bg-green-900/10 text-green-300' : 'bg-red-900/10 text-red-300'}`}>
                  <p className="font-bold mb-1">{isCorrect ? "Correct!" : "Incorrect."}</p>
                  <p className="opacity-90">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!showResults && (
        <div className="mt-8 flex justify-end">
            <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(userAnswers).length !== questions.length}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
                Submit Answers
            </button>
        </div>
      )}

      {showResults && (
          <div className="mt-8 text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
              <p className="text-gray-400 mb-2">Your Score</p>
              <div className="text-4xl font-bold text-white mb-4">
                  {calculateScore()} <span className="text-gray-500 text-2xl">/ {questions.length}</span>
              </div>
              <button 
                onClick={fetchQuiz}
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                  Try New Questions
              </button>
          </div>
      )}
    </div>
  );
};

export default QuizView;