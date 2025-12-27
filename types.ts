export interface Session {
  id: number;
  title: string;
  subtitle: string;
  lectureContent: LectureSection[];
  labContent: LabSimulation; // Changed to a single continuous simulation object per session
  topics?: string[]; // Added optional topics
}

export interface LectureSection {
  heading: string;
  content: string; // Now much longer
  subSections?: { title: string; text: string }[]; // For deeper hierarchy
  bulletPoints?: string[];
  codeSnippet?: string;
  importantBox?: string; // For emphasized takeaways
  imageAlt?: string; // Added for RAG section
}

export interface LabSimulation {
  projectTitle: string; // The continuous project name (e.g., "Nexus Project")
  goal: string;
  steps: LabStep[];
}

export interface LabStep {
  id: number;
  title: string;
  description: string;
  initialCode?: string; // Code showing in the editor before action
  userPromptHint: string; // Hint for what the user *should* type
  simulatedOutput: string; // What appears in the terminal/console after execution
  finalCode?: string; // How the code transforms after the AI action
  explanation: string; // Why this result happened
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export enum ViewMode {
  LECTURE = 'LECTURE',
  LAB = 'LAB'
}