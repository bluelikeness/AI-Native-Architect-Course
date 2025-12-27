import React from 'react';
import { Session } from '../types';

interface SessionViewProps {
  session: Session;
}

const SessionView: React.FC<SessionViewProps> = ({ session }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in pb-20">
      <header className="mb-12 border-b border-gray-800 pb-8">
        <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">{session.title}</h2>
        <p className="text-2xl text-blue-400 font-light">{session.subtitle}</p>
      </header>

      {session.lectureContent.map((section, idx) => (
        <section key={idx} className="group">
          <h3 className="text-3xl font-bold text-gray-100 mb-6 flex items-center">
            <span className="w-2 h-8 bg-blue-500 mr-4 rounded-full"></span>
            {section.heading}
          </h3>
          
          <div className="text-gray-300 leading-8 text-lg mb-8 space-y-4">
             <p>{section.content}</p>
          </div>

          {section.importantBox && (
            <div className="my-8 bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded-r-lg text-blue-200 shadow-lg">
                <p className="font-semibold text-lg">💡 아키텍트 노트:</p>
                <p className="mt-2 opacity-90">{section.importantBox}</p>
            </div>
          )}
          
          {section.subSections && (
              <div className="grid gap-6 mb-8">
                  {section.subSections.map((sub, sIdx) => (
                      <div key={sIdx} className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-colors">
                          <h4 className="text-xl font-bold text-white mb-2">{sub.title}</h4>
                          <p className="text-gray-400 leading-relaxed">{sub.text}</p>
                      </div>
                  ))}
              </div>
          )}

          {section.bulletPoints && (
            <ul className="space-y-4 mb-8 bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              {section.bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300">
                  <span className="mt-2.5 w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          )}

          {section.codeSnippet && (
            <div className="mt-6 bg-[#0d1117] rounded-xl p-6 border border-gray-800 font-mono text-sm overflow-x-auto shadow-2xl relative">
              <div className="absolute top-4 right-4 flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed pt-2">{section.codeSnippet}</pre>
            </div>
          )}
          
          <div className="h-px bg-gray-800 mt-12 w-full mx-auto" />
        </section>
      ))}
    </div>
  );
};

export default SessionView;