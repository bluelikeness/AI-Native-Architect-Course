import React from 'react';
import { Session } from '../types';
import { BookOpen, CheckCircle, Code, Terminal, Cpu, Database, Network } from 'lucide-react';

interface SidebarProps {
  sessions: Session[];
  currentSessionId: number;
  onSelectSession: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sessions, currentSessionId, onSelectSession }) => {
  
  const getIcon = (id: number) => {
    switch(id) {
        case 1: return <BookOpen size={18} />;
        case 2: return <Code size={18} />;
        case 3: return <Terminal size={18} />;
        case 4: return <CheckCircle size={18} />;
        case 5: return <Database size={18} />;
        case 6: return <Network size={18} />;
        case 7: return <Cpu size={18} />;
        default: return <BookOpen size={18} />;
    }
  };

  return (
    <div className="w-80 bg-gray-900 border-r border-gray-800 h-screen overflow-y-auto flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          AI 아키텍트
        </h1>
        <p className="text-xs text-gray-500 mt-1">AI-Native 개발자 커리큘럼</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {sessions.map((session) => (
          <button
            key={session.id}
            onClick={() => onSelectSession(session.id)}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-200 ${
              currentSessionId === session.id
                ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-sm shadow-blue-500/10'
                : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
            }`}
          >
            <span className={currentSessionId === session.id ? 'text-blue-400' : 'text-gray-500'}>
                {getIcon(session.id)}
            </span>
            <div>
              <div className="text-xs font-semibold opacity-70 mb-0.5">SESSION {session.id.toString().padStart(2, '0')}</div>
              <div className="text-sm font-medium truncate w-48">{session.title}</div>
            </div>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-800 text-xs text-center text-gray-600">
        AI 시대의 코딩 커리큘럼
      </div>
    </div>
  );
};

export default Sidebar;