import React, { useState, useEffect, useRef } from 'react';
import { Session, LabStep } from '../types';
import { Terminal, Play, CheckCircle, ChevronRight, AlertCircle, Code2 } from 'lucide-react';

interface LabViewProps {
  session: Session;
}

const LabView: React.FC<LabViewProps> = ({ session }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  
  const currentStep = session.labContent.steps[currentStepIndex];
  const totalSteps = session.labContent.steps.length;
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset state when step changes
    setUserInput(currentStep.initialCode || '');
    setShowResult(false);
    setTerminalLogs([`> Step ${currentStep.id} 환경 초기화 중...`, `> 준비 완료.`]);
    setIsSimulating(false);
  }, [currentStepIndex, session.id]);

  useEffect(() => {
    // Scroll terminal to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  const handleRun = () => {
    if (!userInput.trim()) return;
    
    setIsSimulating(true);
    setTerminalLogs(prev => [...prev, `> 프롬프트 실행 중...`, `> 입력 분석 중...`]);

    // Simulate AI processing delay
    setTimeout(() => {
      setIsSimulating(false);
      setShowResult(true);
      setTerminalLogs(prev => [...prev, `> 성공! 결과 생성됨.`, `> ${new Date().toLocaleTimeString()}`]);
    }, 1500);
  };

  const handleNextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-140px)] flex flex-col">
      {/* Lab Header */}
      <div className="mb-4 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            {session.labContent.projectTitle}
          </h2>
          <p className="text-gray-400 text-sm mt-1">{session.labContent.goal}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
          <span>단계 {currentStepIndex + 1} / {totalSteps}</span>
          <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Split Interface */}
      <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">
        
        {/* Left Col: Context & Instructions */}
        <div className="col-span-4 bg-gray-900 border border-gray-800 rounded-lg p-5 overflow-y-auto flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="bg-emerald-900/50 text-emerald-400 w-6 h-6 rounded flex items-center justify-center text-xs">
                {currentStep.id}
              </span>
              {currentStep.title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              {currentStep.description}
            </p>
          </div>

          <div className="mt-auto bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-2 text-yellow-400 mb-2 text-xs font-bold uppercase tracking-wider">
              <AlertCircle size={12} />
              미션 힌트
            </div>
            <p className="text-sm text-gray-400 italic">
              "{currentStep.userPromptHint}"
            </p>
          </div>
        </div>

        {/* Center/Right Col: Editor & Terminal */}
        <div className="col-span-8 flex flex-col gap-4">
          
          {/* Editor Area */}
          <div className="flex-1 bg-[#1e1e1e] rounded-lg border border-gray-700 flex flex-col overflow-hidden relative shadow-xl">
            {/* Fake Tab Bar */}
            <div className="bg-[#252526] px-4 py-2 flex items-center gap-4 border-b border-[#333]">
              <div className="flex items-center gap-2 text-sm text-blue-300 bg-[#1e1e1e] px-3 py-1 rounded-t border-t border-blue-500/50">
                <Code2 size={14} />
                <span>입력 / 프롬프트</span>
              </div>
              <div className="text-xs text-gray-500">nexus-project</div>
            </div>

            {/* Editor Content */}
            <div className="flex-1 p-0 relative">
               <textarea 
                  className="w-full h-full bg-[#1e1e1e] text-gray-300 font-mono text-sm p-4 resize-none focus:outline-none"
                  placeholder={`// 프롬프트나 코드를 여기에 입력하세요...\n// 힌트: ${currentStep.userPromptHint}`}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  spellCheck={false}
               />
               
               {/* Run Button Overlay */}
               <div className="absolute bottom-4 right-4">
                 <button 
                    onClick={handleRun}
                    disabled={isSimulating || showResult}
                    className={`flex items-center gap-2 px-6 py-2 rounded-md font-bold text-sm shadow-lg transition-all
                      ${showResult 
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-105'
                      }`}
                 >
                    {isSimulating ? (
                      <>처리중...</>
                    ) : showResult ? (
                      <><CheckCircle size={16}/> 완료됨</>
                    ) : (
                      <><Play size={16}/> AI 실행</>
                    )}
                 </button>
               </div>
            </div>
          </div>

          {/* Terminal / Result Area */}
          <div className="h-2/5 bg-black border border-gray-800 rounded-lg p-4 font-mono text-xs overflow-y-auto text-gray-300 shadow-inner flex flex-col" ref={terminalRef}>
            <div className="flex justify-between items-center mb-2 sticky top-0 bg-black pb-2 border-b border-gray-900">
               <span className="text-gray-500 font-bold">터미널 / AI 출력</span>
               {showResult && <span className="text-emerald-500 text-[10px]">● Online</span>}
            </div>

            {/* Logs */}
            {terminalLogs.map((log, i) => (
              <div key={i} className="opacity-70 mb-1">{log}</div>
            ))}

            {/* The Result Content */}
            {showResult && (
              <div className="mt-4 animate-fade-in">
                <div className="text-blue-400 font-bold mb-1">AI 생성 결과:</div>
                <div className="border-l-2 border-blue-500 pl-3 py-1 text-gray-100 whitespace-pre-wrap">
                  {currentStep.simulatedOutput}
                </div>
                
                {currentStep.finalCode && (
                   <div className="mt-4">
                      <div className="text-purple-400 font-bold mb-1">업데이트된 코드:</div>
                      <pre className="bg-gray-900 p-3 rounded text-green-300 overflow-x-auto">
                        {currentStep.finalCode}
                      </pre>
                   </div>
                )}

                <div className="mt-4 bg-emerald-900/20 p-3 rounded border border-emerald-500/30 text-emerald-200">
                  <span className="font-bold text-emerald-500 mr-2">핵심 포인트:</span>
                  {currentStep.explanation}
                </div>
              </div>
            )}
            
            {/* Loading Cursor */}
            {isSimulating && (
               <div className="mt-2 animate-pulse text-emerald-500">▌ 답변 생성 중...</div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="mt-4 flex justify-between items-center py-2">
         <button 
           onClick={handlePrevStep}
           disabled={currentStepIndex === 0}
           className="text-gray-500 hover:text-white disabled:opacity-30 disabled:hover:text-gray-500 px-4 py-2 transition-colors"
         >
           &larr; 이전 단계
         </button>

         {showResult && currentStepIndex < totalSteps - 1 && (
            <button 
              onClick={handleNextStep}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md font-medium transition-all animate-bounce-subtle"
            >
              다음 도전 <ChevronRight size={16} />
            </button>
         )}
         
         {showResult && currentStepIndex === totalSteps - 1 && (
            <div className="text-emerald-400 font-bold flex items-center gap-2">
              <CheckCircle size={18} /> 세션 완료
            </div>
         )}
      </div>
    </div>
  );
};

export default LabView;