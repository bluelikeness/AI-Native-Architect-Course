import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SessionView from './components/SessionView';
import LabView from './components/LabView';
import { CURRICULUM_DATA } from './services/curriculumData';
import { ViewMode } from './types';
import { BookOpen, Terminal } from 'lucide-react';

const App: React.FC = () => {
  const [currentSessionId, setCurrentSessionId] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.LECTURE);

  const currentSession = CURRICULUM_DATA.find(s => s.id === currentSessionId) || CURRICULUM_DATA[0];

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar 
        sessions={CURRICULUM_DATA} 
        currentSessionId={currentSessionId}
        onSelectSession={(id) => {
            setCurrentSessionId(id);
            setViewMode(ViewMode.LECTURE);
            window.scrollTo(0, 0);
        }} 
      />
      
      <main className="flex-1 ml-80 min-h-screen bg-[#030712] relative flex flex-col">
        
        {/* Top Sticky Header for View Mode */}
        <div className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur-md border-b border-gray-800 px-8 py-4 flex items-center justify-between shrink-0">
           <div className="text-sm font-medium text-gray-400">
               세션 {currentSession.id} / <span className="text-gray-200">{viewMode === ViewMode.LECTURE ? '강의' : '실습'}</span>
           </div>
           
           <div className="flex bg-gray-900 p-1 rounded-lg border border-gray-800">
               <button 
                 onClick={() => setViewMode(ViewMode.LECTURE)}
                 className={`flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-all ${viewMode === ViewMode.LECTURE ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
               >
                 <BookOpen size={16} /> 강의
               </button>
               <button 
                 onClick={() => setViewMode(ViewMode.LAB)}
                 className={`flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-all ${viewMode === ViewMode.LAB ? 'bg-emerald-900/30 text-emerald-400 shadow-sm border border-emerald-500/20' : 'text-gray-400 hover:text-gray-200'}`}
               >
                 <Terminal size={16} /> 실습 시뮬레이션
               </button>
           </div>
        </div>

        {/* Content Area */}
        <div className="p-8 max-w-7xl mx-auto w-full flex-1">
          {viewMode === ViewMode.LECTURE && <SessionView session={currentSession} />}
          {viewMode === ViewMode.LAB && <LabView session={currentSession} />}
        </div>

      </main>
    </div>
  );
};

export default App;