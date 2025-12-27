import { Session } from '../types';

export const CURRICULUM_DATA: Session[] = [
  {
    id: 1,
    title: "마인드셋 리셋 & 프로젝트 착수",
    subtitle: "코딩의 해체와 재구성: Nexus 프로젝트의 시작",
    lectureContent: [
      {
        heading: "1. 거대한 패러다임의 전환: 번역가에서 지휘자로",
        content: "우리가 알고 있던 '소프트웨어 개발'의 정의가 송두리째 바뀌고 있습니다. 지난 50년간 프로그래머의 핵심 역량은 인간의 언어(요구사항)를 기계가 이해할 수 있는 언어(C, Java, Python 등)로 번역하는 'Translator(번역가)'의 역할이었습니다. 문법(Syntax)을 외우고, 라이브러리의 사용법을 숙지하는 것이 실력이었죠. 하지만 AI 시대의 개발자는 다릅니다. 이제 기계어 번역은 AI가 수행합니다.",
        importantBox: "여러분의 역할은 이제 오케스트라의 지휘자(Conductor)입니다. 악기 하나하나를 연주하는 기술보다, 전체적인 화음을 설계하고 조율하는 능력이 중요해졌습니다.",
        subSections: [
          {
            title: "확률론적(Probabilistic) vs 결정론적(Deterministic)",
            text: "기존의 코딩은 1+1=2가 되는 결정론적 세계였습니다. 하지만 LLM 기반의 코딩은 확률론적입니다. 같은 프롬프트에도 다른 결과가 나올 수 있음을 인지하고, 이를 통제하는 기술이 필요합니다."
          },
          {
            title: "'주니어' 업무의 종말",
            text: "CRUD API 작성, 단순 UI 마크업, 유닛 테스트 작성 등 주니어 개발자가 성장하며 맡았던 업무들이 0초 만에 생성됩니다. 이는 신입 개발자에게 위기이자 기회입니다. 더 이상 '단순 코딩'으로 시간을 보낼 필요 없이, 곧바로 아키텍처와 비즈니스 로직을 고민하는 '시니어의 사고'를 훈련해야 합니다."
          }
        ]
      },
      {
        heading: "2. AI-Native 개발자의 3대 핵심 역량",
        content: "그렇다면 코딩을 안 해도 될까요? 아닙니다. 오히려 '더 잘' 알아야 합니다. AI가 짠 코드를 검증할 수 없다면, 여러분은 AI의 결과물에 갇히게 됩니다. AI-Native 개발자가 갖춰야 할 3대 핵심 역량을 정의합니다.",
        bulletPoints: [
          "Technical Literacy (기술 문해력): 모호한 비즈니스 요구사항을 AI가 이해할 수 있는 '명확한 기술 언어'로 변환하는 능력입니다. '로그인 만들어줘'가 아니라 'JWT 기반의 Access/Refresh 토큰 로직을 포함하고, Redis로 블랙리스트를 관리하는 Auth 미들웨어를 작성해줘'라고 말할 수 있어야 합니다.",
          "Code Judgment (판별력): AI는 거짓말을 합니다(Hallucination). 생성된 코드가 보안에 취약한지, 비효율적인 루프를 도는지, 레거시 패턴인지 판별하는 'Code Reviewer'로서의 눈이 필요합니다.",
          "Integration Engineering (통합 공학): 파편화된 코드 조각들을 하나의 작동하는 시스템으로 조립하는 능력입니다. AI는 나무를 잘 보지만 숲(전체 아키텍처)을 보는 능력은 여전히 인간의 몫입니다."
        ]
      },
      {
        heading: "3. Unlearning: 버려야 할 습관들",
        content: "새로운 것을 배우는 것보다 어려운 것은 익숙한 것을 버리는 것입니다. 우리는 '직접 짜야 직성이 풀리는' 장인 정신을 잠시 내려놓아야 합니다.",
        bulletPoints: [
          "문법 암기 강박: 구글링보다 AI에게 예제를 요청하는 것이 빠릅니다.",
          "처음부터 완벽한 코드 작성: 일단 AI로 초안(Draft)을 만들고, 다듬는(Refine) 방식으로 작업 흐름을 바꿔야 합니다.",
          "복붙(Copy-Paste) 지양: 이제는 스마트한 복붙이 능력입니다. 단, 내용을 100% 이해한 상태에서의 복붙이어야 합니다."
        ]
      }
    ],
    labContent: {
      projectTitle: "Project Nexus: 두 번째 뇌 만들기",
      goal: "Session 1부터 7까지, 나만의 'AI 지식 저장소(Nexus)' 서비스를 처음부터 끝까지 구축합니다. 이번 세션에서는 기획과 핵심 로직 설계를 수행합니다.",
      steps: [
        {
          id: 1,
          title: "스펙 정의 (PRD 생성)",
          description: "개발의 첫 단추는 코딩이 아니라 '정의'입니다. 모호한 아이디어를 구체적인 PRD(제품 요구 사항 정의서)로 변환합니다.",
          userPromptHint: "시니어 PM 역할로 행동해줘. 개인 지식 저장소 웹 앱인 'Nexus'의 PRD를 작성해줘. 핵심 기능: 마크다운 노트 작성, 태그 시스템, 로컬 LLM을 활용한 벡터 검색.",
          simulatedOutput: "## Project Nexus: 제품 요구사항 정의서 (PRD)\n\n### 1. 개요\nAI를 활용한 시맨틱 검색 및 요약 기능을 갖춘 개인 지식 관리 시스템.\n\n### 2. 핵심 기능\n- **노트 관리**: 마크다운을 지원하는 CRUD 기능.\n- **AI 통합**: 로컬 LLM (Llama3)을 활용한 노트 요약.\n- **벡터 검색**: ChromaDB를 활용한 RAG 파이프라인 구현.\n\n### 3. 기술 스택\n- Frontend: React + Tailwind\n- Backend: Node.js (Express) 또는 Python (FastAPI)\n- Database: PostgreSQL (메타데이터) + ChromaDB (임베딩)\n...",
          explanation: "AI에게 역할을 부여(Persona)하고 구체적인 기능을 나열하면, 개발에 필요한 스펙 문서를 체계적으로 정리해줍니다. 이 문서는 이후 코딩 단계에서 'Context'로 사용됩니다."
        },
        {
          id: 2,
          title: "아키텍처 결정 (기술 스택)",
          description: "PRD를 바탕으로 어떤 기술을 쓸지 결정합니다. AI에게 추천을 받아봅시다.",
          userPromptHint: "Nexus PRD를 바탕으로 1인 개발자에게 가장 적합한 모던 기술 스택을 추천해줘. 빠른 개발 속도와 AI 통합 용이성에 초점을 맞춰줘.",
          simulatedOutput: "빠른 개발 속도를 위한 추천 스택입니다:\n\n1. **Frontend**: Next.js 14 (App Router) - 정적/동적 렌더링 모두에 유리함.\n2. **Backend**: Python FastAPI - AI/LLM 라이브러리(LangChain 등) 생태계가 가장 풍부함.\n3. **Database**: Supabase (PostgreSQL) + pgvector - 관계형 DB와 벡터 DB를 통합 관리.\n4. **Styling**: Tailwind CSS - 빠른 UI 개발.\n\n이유: 추후 Ollama 및 RAG 라이브러리 통합을 위해서는 Python 백엔드가 필수적입니다.",
          explanation: "AI는 현재 트렌드와 프로젝트의 성격(1인 개발, AI 통합)을 고려하여 최적의 스택을 제안합니다. FastAPI와 Next.js 조합은 AI 서비스 개발의 표준에 가깝습니다."
        },
        {
          id: 3,
          title: "핵심 알고리즘 검증",
          description: "프로젝트의 핵심 기능인 '태그 추출 알고리즘'을 미리 검증해봅시다. 코드를 직접 짜지 않고 로직을 의심해봅니다.",
          userPromptHint: "마크다운 문자열에서 해시태그를 추출하는 Python 함수를 작성해줘. '#tag1 #tag-2' 같은 경우나 코드 블록 내부의 태그 같은 엣지 케이스를 고려해서 검토해줘.",
          simulatedOutput: "def extract_tags(text):\n    # 초기 생각: 단순 정규식\n    import re\n    return re.findall(r'#\\w+', text)\n\n# 비평 (CRITIQUE):\n# 위 정규식은 태그 내의 하이픈(#ai-driven)을 놓칩니다.\n# 또한 코드 블록 내부에 있는 주석(#)을 태그로 오인할 수 있습니다.\n\n# 수정된 코드 (REVISED CODE):\ndef extract_tags_robust(text):\n    # ... 코드 블록 처리 로직 추가 ...\n    pass",
          initialCode: "# 생성 대기 중...",
          finalCode: "import re\n\ndef extract_tags(text):\n    # 하이픈을 포함하도록 정규식 확장\n    tags = re.findall(r'#([\\w-]+)', text)\n    return list(set(tags)) # 중복 제거",
          explanation: "처음에는 단순한 정규식을 제안할 수 있습니다. 하지만 '엣지 케이스(Edge Case)'를 언급하며 검증을 요청하면, AI는 스스로 코드를 개선(Self-Correction)합니다. 이것이 '판별력' 훈련입니다."
        }
      ]
    }
  },
  {
    id: 2,
    title: "도구 마스터리 & 스캐폴딩",
    subtitle: "Nexus 프로젝트 환경 구축: Copilot과 함께하는 쾌속 코딩",
    lectureContent: [
      {
        heading: "1. AI 페어 프로그래밍 환경",
        content: "이제 본격적인 개발 환경을 구축할 시간입니다. VS Code와 GitHub Copilot은 단순한 자동완성 도구가 아닙니다. 여러분의 '생각의 속도'를 코딩 속도에 맞추거나, 오히려 앞서나가게 해주는 엑소 스켈레톤(Exoskeleton)입니다.",
        bulletPoints: [
          "Inline Chat (Cmd+I): 에디터 내부에서 코드를 즉시 생성/수정합니다. 주석을 달거나 변수명을 바꾸는 단순 작업부터, 함수 전체를 리팩토링하는 작업까지 수행합니다.",
          "Sidebar Chat: 프로젝트 전체의 문맥을 파악하고 아키텍처 수준의 질문을 던지는 곳입니다. '@workspace' 명령어가 핵심입니다.",
          "Ghost Text: 여러분이 타이핑을 멈춘 순간, 회색 텍스트로 나타나는 제안입니다. 탭(Tab) 키 하나로 몇 줄의 코드를 완성하는 쾌감은 중독적입니다."
        ]
      },
      {
        heading: "2. 코드를 위한 프롬프트 엔지니어링",
        content: "AI에게 코드를 시킬 때는 '인간에게 시킬 때'보다 더 구체적이어야 합니다. 좋은 프롬프트는 3C를 갖춥니다.",
        subSections: [
          { title: "Context (맥락)", text: "이 파일이 어떤 역할을 하는지, 프로젝트가 무엇인지 알려주세요. (예: 'Next.js App Router를 사용 중이고...')" },
          { title: "Constraint (제약)", text: "하지 말아야 할 것을 명시합니다. (예: '외부 라이브러리 쓰지 말고 바닐라 JS로 해', 'any 타입 쓰지 마')" },
          { title: "Chain of Thought (사고의 흐름)", text: "복잡한 로직은 단계별로 생각하라고 지시합니다. (예: '먼저 에러 처리를 하고, 그 다음에 데이터를 파싱해')" }
        ]
      },
      {
        heading: "3. 프로젝트 스캐폴딩 전략",
        content: "빈 폴더에서 프로젝트를 시작할 때 가장 막막합니다. 이제는 CLI 명령어를 검색할 필요 없이, AI에게 디렉토리 구조(Scaffolding)를 통째로 요청하세요. 표준화된 폴더 구조, tsconfig 설정, 초기 패키지 설치까지 한 번에 해결할 수 있습니다."
      }
    ],
    labContent: {
      projectTitle: "Project Nexus: 스캐폴딩",
      goal: "Nexus 프로젝트의 폴더 구조를 잡고, 핵심 데이터 모델을 정의합니다. GitHub Copilot의 Chat 기능을 시뮬레이션합니다.",
      steps: [
        {
          id: 1,
          title: "디렉토리 스캐폴딩",
          description: "Next.js 14 프로젝트 구조를 잡습니다. @workspace 명령어를 사용하는 느낌으로 진행해봅시다.",
          userPromptHint: "@workspace /scaffold FSD(Feature-Sliced Design) 원칙을 사용하여 Next.js 14 프로젝트의 견고한 폴더 구조를 만들어줘.",
          simulatedOutput: "생성된 구조:\n/src\n  /app\n    /(routes)\n      /notes\n      /search\n  /entities\n    /note\n      /model\n      /ui\n  /features\n    /create-note\n  /shared\n    /ui\n    /lib\npackage.json 파일이 업데이트되었습니다.",
          explanation: "FSD(Feature-Sliced Design) 같은 복잡한 아키텍처 패턴도 AI는 알고 있습니다. 일일이 폴더를 만드는 시간을 수십 분 절약할 수 있습니다."
        },
        {
          id: 2,
          title: "데이터 모델 설계",
          description: "Nexus의 핵심인 'Note' 객체의 TypeScript 인터페이스를 정의합니다.",
          userPromptHint: "'Note' 엔티티에 대한 TypeScript 인터페이스를 생성해줘. id, title, content, tags, createdAt, 그리고 임베딩 벡터 필드(숫자 배열)가 필요해.",
          initialCode: "// src/entities/note/model/types.ts\n\n",
          simulatedOutput: "export interface Note {\n  id: string;\n  title: string;\n  content: string;\n  tags: string[];\n  createdAt: Date;\n  updatedAt: Date;\n  // 시맨틱 검색을 위한 벡터 임베딩 (예: BERT의 경우 768차원)\n  embedding?: number[];\n}",
          finalCode: "export interface Note {\n  id: string;\n  title: string;\n  content: string;\n  tags: string[];\n  createdAt: Date;\n  updatedAt: Date;\n  embedding?: number[];\n}",
          explanation: "데이터 모델링은 비즈니스 로직의 근간입니다. 'Embedding' 필드를 잊지 않고 포함시키는 것이 이번 세션의 핵심입니다."
        },
        {
          id: 3,
          title: "API 핸들러 작성",
          description: "FastAPI 백엔드에서 노트를 저장하는 엔드포인트를 작성합니다.",
          userPromptHint: "노트를 생성하는 FastAPI 엔드포인트를 작성해줘. Supabase DB 클라이언트와 상호작용한다고 가정해. 유효성 검사에는 Pydantic을 사용해줘.",
          simulatedOutput: "from fastapi import APIRouter, HTTPException\nfrom pydantic import BaseModel\n\nrouter = APIRouter()\n\nclass NoteCreate(BaseModel):\n    title: str\n    content: str\n    tags: list[str]\n\n@router.post('/notes')\nasync def create_note(note: NoteCreate):\n    # Supabase에 삽입하는 로직\n    data = supabase.table('notes').insert(note.dict()).execute()\n    return data",
          explanation: "Pydantic 모델 정의와 API 라우팅을 한 번에 해결했습니다. 이제 이 코드를 기반으로 DB 연결 로직만 채워 넣으면 됩니다."
        }
      ]
    }
  },
  {
    id: 3,
    title: "AI 구현 사이클",
    subtitle: "Nexus 기능 구현: 핵심 로직 개발과 리팩토링",
    lectureContent: [
      {
        heading: "1. 반복-개선(Iterate-Refine) 사이클",
        content: "AI 개발의 핵심은 '한 번에 성공'이 아니라 '빠른 실패와 수정'입니다. [Draft(초안) -> Review(검토) -> Refine(개선)] 사이클을 얼마나 빨리 돌리느냐가 생산성을 좌우합니다.",
        importantBox: "Ghost Text가 제안한 코드가 마음에 들지 않으면 즉시 지우고 주석으로 의도를 다시 명확히 하세요. AI는 당신의 피드백을 통해 학습(In-context Learning)합니다.",
        bulletPoints: [
          "Draft: 대략적인 의도를 주석이나 프롬프트로 전달하여 초안 생성",
          "Review: 생성된 코드가 비즈니스 로직과 일치하는지, 타입 에러는 없는지 확인",
          "Refine: 변수명 변경, 에러 처리 추가, 성능 최적화 등을 대화형으로 요청"
        ]
      },
      {
        heading: "2. 복잡한 비즈니스 로직 다루기",
        content: "CRUD는 쉽지만, 복잡한 비즈니스 로직은 어떻게 할까요? 문제를 잘게 쪼개는 '분해(Decomposition)'가 필요합니다. AI에게 한 번에 거대한 함수를 짜라고 하면 실패할 확률이 높습니다. 함수 단위로, 모듈 단위로 나누어 지시하세요.",
        subSections: [
          { title: "모듈식 프롬프팅", text: "복잡한 계산 로직을 별도의 순수 함수(Pure Function)로 분리해달라고 요청하면 테스트와 검증이 쉬워집니다." },
          { title: "테스트 주도 생성 (TDG)", text: "구현 코드를 짜기 전에 테스트 코드를 먼저 짜달라고 하세요. 그리고 그 테스트를 통과하는 구현체를 요청하면 훨씬 견고한 코드가 나옵니다." }
        ]
      },
      {
        heading: "3. Mermaid로 시각화하기",
        content: "코드가 복잡해지면 흐름을 잃기 쉽습니다. AI에게 '이 로직을 Mermaid 시퀀스 다이어그램으로 그려줘'라고 요청하세요. 텍스트로 된 코드를 시각화하면 놓쳤던 논리적 오류가 보입니다."
      }
    ],
    labContent: {
      projectTitle: "Project Nexus: 핵심 로직",
      goal: "노트 저장 시 자동으로 태그를 추천해주는 'AI 태깅' 기능을 구현합니다. 복잡한 로직을 단계별로 구현합니다.",
      steps: [
        {
          id: 1,
          title: "로직 프롬프팅 (태그 제안)",
          description: "사용자가 노트를 작성하면, 내용을 분석해 적절한 태그 3개를 추천해주는 함수를 작성해봅니다. (가상의 LLM 호출 함수 사용)",
          userPromptHint: "Mock LLM API를 호출하여 관련 태그 3개를 반환하는 'suggestTags(content)' 함수를 만들어줘. JSON 파싱 에러 처리도 포함해줘.",
          initialCode: "// 구현 필요",
          simulatedOutput: "async function suggestTags(content: string): Promise<string[]> {\n  try {\n    const response = await mockLLM.generate(`Extract 3 tags from: ${content}`);\n    const tags = JSON.parse(response); // 위험할 수 있음\n    return tags.slice(0, 3);\n  } catch (e) {\n    console.error('Failed to generate tags', e);\n    return [];\n  }\n}",
          explanation: "기본적인 골격을 만들었습니다. 하지만 LLM의 응답이 항상 완벽한 JSON이라는 보장은 없습니다. 에러 처리가 중요합니다."
        },
        {
          id: 2,
          title: "재시도(Retry) 로직으로 개선",
          description: "LLM 호출이 실패하거나 이상한 포맷을 줄 경우를 대비해 'Retry' 로직을 추가해달라고 요청합니다.",
          userPromptHint: "/fix suggestTags 함수에 지수 백오프(exponential backoff)를 사용하는 재시도 메커니즘(최대 3회)을 추가해줘.",
          initialCode: "async function suggestTags(content: string) { ... }",
          simulatedOutput: "async function suggestTags(content: string, retries = 3): Promise<string[]> {\n  for (let i = 0; i < retries; i++) {\n    try {\n      // ... LLM 호출 ...\n      return tags;\n    } catch (e) {\n      if (i === retries - 1) return [];\n      await new Promise(r => setTimeout(r, 1000 * Math.pow(2, i)));\n    }\n  }\n}",
          explanation: "네트워크 호출이나 LLM 호출처럼 불확실한 작업에는 재시도 로직이 필수입니다. AI는 '지수 백오프' 같은 패턴을 정확히 알고 구현해줍니다."
        },
        {
          id: 3,
          title: "시각화 (Visualization)",
          description: "이 태그 추천 로직이 전체 시스템에서 어떻게 흐르는지 Mermaid 차트로 그려봅니다.",
          userPromptHint: "자동 태그 기능이 포함된 노트 저장 시나리오에 대해 User -> Frontend -> Backend -> LLM API 상호작용을 보여주는 Mermaid 시퀀스 다이어그램을 생성해줘.",
          simulatedOutput: "sequenceDiagram\n    participant User\n    participant FE as Frontend\n    participant BE as Backend\n    participant AI as LLM Service\n    User->>FE: '저장' 클릭\n    FE->>BE: POST /notes\n    BE->>AI: 태그 요청\n    AI-->>BE: ['React', 'AI', 'Code'] 반환\n    BE->>DB: 노트 + 태그 저장\n    BE-->>FE: 성공",
          explanation: "복잡한 비동기 흐름을 시각화하여 한눈에 파악할 수 있습니다. 기획 단계뿐만 아니라 개발 중간중간 문서화 용도로도 훌륭합니다."
        }
      ]
    }
  },
  {
    id: 4,
    title: "윤리 & 책임 감사",
    subtitle: "Nexus 보안 감사: Human in the Loop",
    lectureContent: [
      {
        heading: "1. 정확성의 환상",
        content: "AI가 생성한 코드는 '작동하는 것처럼' 보입니다. 이것이 가장 위험합니다. 문법적 오류가 없어도 보안적 오류(Security Hole)나 라이선스 위반 소지가 있을 수 있습니다.",
        importantBox: "AI는 스택오버플로우나 깃허브의 공개 코드를 학습했습니다. 즉, 과거의 취약한 코드 패턴(SQL Injection이 가능한 코드 등)도 학습했다는 뜻입니다.",
        bulletPoints: [
          "보안: API Key 하드코딩, SQL Injection 취약점, XSS 취약점 자동 생성 주의.",
          "법적 문제: GPL 라이선스 코드가 섞여 들어올 가능성. 기업 프로젝트라면 'Public Code Match' 기능을 꺼야 합니다.",
          "의존성: 존재하지 않는 패키지(패키지 환각)를 import 하거나, 악성 패키지를 제안할 수 있습니다."
        ]
      },
      {
        heading: "2. 감사관(Auditor)의 역할",
        content: "여러분의 역할은 이제 '작성자(Writer)'에서 '감사관(Auditor)'으로 바뀝니다. 코드를 라인 단위로 읽고 승인(Approve)하는 절차가 필요합니다. 특히 외부 입력을 처리하는 부분이나 DB 쿼리 부분은 현미경으로 보듯 살펴야 합니다."
      },
      {
        heading: "3. 방어적 프롬프팅",
        content: "애초에 안전한 코드를 생성하도록 프롬프트를 설계하세요. 'SQL 인젝션을 방지하기 위해 파라미터화된 쿼리를 사용해'라거나 '모든 HTML 입력을 살균(Sanitize)해' 같은 제약 조건을 항상 붙이는 습관을 들여야 합니다."
      }
    ],
    labContent: {
      projectTitle: "Project Nexus: 보안 감사",
      goal: "이전에 작성한 코드의 보안 취약점을 찾아내고 수정합니다. 특히 API Key 관리와 입력값 검증에 집중합니다.",
      steps: [
        {
          id: 1,
          title: "유출 탐지",
          description: "AI가 짠 DB 연결 코드를 보니 비밀번호가 그대로 노출되어 있습니다. 이를 환경변수로 바꾸도록 리팩토링합니다.",
          userPromptHint: "이 코드를 리팩토링해서 DB_PASSWORD에 process.env를 사용하도록 해줘. 비밀 정보를 절대 하드코딩하지 마.",
          initialCode: "const client = new Client({\n  user: 'admin',\n  password: 'super_secret_password_123',\n  host: 'localhost'\n});",
          simulatedOutput: "require('dotenv').config();\n\nconst client = new Client({\n  user: process.env.DB_USER,\n  password: process.env.DB_PASSWORD,\n  host: process.env.DB_HOST\n});",
          explanation: "가장 흔한 실수입니다. AI는 데모 코드를 학습했기 때문에 하드코딩하는 경향이 있습니다. 반드시 환경변수 패턴으로 수정해야 합니다."
        },
        {
          id: 2,
          title: "입력값 정제 (XSS 방지)",
          description: "사용자가 노트 내용에 <script> 태그를 넣어 해킹을 시도할 수 있습니다. 마크다운 렌더링 시 XSS 방지 처리를 추가합니다.",
          userPromptHint: "'content' 필드는 마크다운을 렌더링해. XSS 공격을 막기 위해 'dompurify'를 사용하도록 렌더링 로직을 업데이트해줘.",
          initialCode: "<div dangerouslySetInnerHTML={{ __html: marked(content) }} />",
          simulatedOutput: "import DOMPurify from 'dompurify';\n\nconst cleanHTML = DOMPurify.sanitize(marked(content));\nreturn <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;",
          explanation: "`dangerouslySetInnerHTML`은 이름 그대로 위험합니다. AI가 이를 제안했다면 즉시 Sanitize 라이브러리를 추가하라고 명령해야 합니다."
        },
        {
          id: 3,
          title: "패키지 환각 확인",
          description: "AI가 `react-markdown-renderer-awesome` 이라는 그럴싸한 라이브러리를 import 했습니다. 실제로 존재하는지 확인하는 절차를 가집니다.",
          userPromptHint: "'react-markdown-renderer-awesome'이 실제 유지보수되고 있는 패키지인지 확인해줘. 만약 아니라면, 표준적인 대안을 제안해줘.",
          simulatedOutput: "분석: 'react-markdown-renderer-awesome'은 유명하거나 표준적인 패키지가 아닌 것으로 보입니다. 환각(Hallucination)일 수 있습니다.\n\n추천: 대신 'react-markdown'이나 'remirror'를 사용하세요. 널리 사용되고 유지보수되는 라이브러리입니다.",
          explanation: "AI는 이름이 그럴듯한 가짜 패키지를 만들어내기도 합니다. `npm info`로 확인하거나, AI에게 다시 한 번 '표준적인 라이브러리 맞아?'라고 물어보는 교차 검증이 필요합니다."
        }
      ]
    }
  },
  {
    id: 5,
    title: "AI 서비스 아키텍처 & RAG",
    subtitle: "Nexus의 지능화: 내 노트를 기억하는 뇌 만들기",
    lectureContent: [
      {
        heading: "1. RAG (검색 증강 생성) 이해하기",
        content: "지금까지의 Nexus는 단순한 메모장이었습니다. 이제 RAG를 도입하여 '내가 쓴 모든 글을 기억하고 답변하는' 지능형 시스템으로 업그레이드합니다. LLM은 학습하지 않은 내 개인적인 메모 내용을 모릅니다. RAG는 시험 볼 때 '오픈북 테스트'를 하는 것과 같습니다. 질문이 들어오면 교과서(Vector DB)에서 관련 페이지를 찾아 LLM에게 건네주는 원리입니다.",
        imageAlt: "질의 -> 벡터 임베딩 -> 유사도 검색 -> 증강된 프롬프트 -> LLM",
        bulletPoints: [
          "인덱싱(Indexing): 내 메모(Text)를 숫자의 배열(Vector)로 변환하여 DB에 저장합니다.",
          "검색(Retrieval): 사용자의 질문도 벡터로 변환해, 가장 유사한 메모를 찾아냅니다.",
          "생성(Generation): 찾아낸 메모 내용을 프롬프트에 'Context'로 붙여서 LLM에게 질문합니다."
        ]
      },
      {
        heading: "2. 모던 AI 스택",
        content: "AI 서비스를 위한 새로운 인프라 스택이 필요합니다.",
        subSections: [
          { title: "Vector Database", text: "ChromaDB, Pinecone, pgvector 등 고차원 벡터를 저장하고 검색하는 전용 DB입니다." },
          { title: "Embedding Model", text: "OpenAI의 text-embedding-3이나, 무료로 쓸 수 있는 HuggingFace의 all-MiniLM-L6-v2 등이 있습니다. 텍스트의 '의미'를 숫자로 압축합니다." },
          { title: "Orchestrator", text: "LangChain이나 LlamaIndex는 이 복잡한 데이터 파이프라인을 쉽게 연결해주는 접착제 역할을 합니다." }
        ]
      },
      {
        heading: "3. 로컬 vs 클라우드",
        content: "개인정보(일기, 메모)를 다루는 Nexus 프로젝트는 보안이 중요합니다. 따라서 데이터를 OpenAI 서버로 보내지 않고, 내 컴퓨터(Local)에서 돌리는 Ollama와 로컬 벡터 DB를 사용하는 구조를 채택합니다."
      }
    ],
    labContent: {
      projectTitle: "Project Nexus: RAG 구현",
      goal: "ChromaDB와 LangChain을 사용하여 내 노트 내용을 검색하고 질문에 답하는 기능을 구현합니다.",
      steps: [
        {
          id: 1,
          title: "ChromaDB 설정 (벡터 저장소)",
          description: "로컬 Vector DB인 ChromaDB를 설정하고, 메모를 저장할 컬렉션을 만듭니다.",
          userPromptHint: "지속성(persistent) ChromaDB 클라이언트를 초기화하고 'nexus_notes'라는 컬렉션을 생성하는 Python 스크립트를 작성해줘.",
          simulatedOutput: "import chromadb\n\nclient = chromadb.PersistentClient(path='./nexus_db')\ncollection = client.get_or_create_collection(name='nexus_notes')\nprint('ChromaDB initialized at ./nexus_db')",
          explanation: "아주 간단한 코드로 강력한 벡터 검색 엔진을 준비했습니다. `PersistentClient`를 사용해 데이터가 파일로 저장되도록 했습니다."
        },
        {
          id: 2,
          title: "노트 임베딩 & 저장",
          description: "텍스트로 된 노트를 벡터(임베딩)로 변환하여 DB에 저장하는 함수를 작성합니다. 임베딩 모델은 'all-MiniLM-L6-v2'를 사용합니다.",
          userPromptHint: "텍스트를 받아 sentence-transformers로 임베딩을 생성하고 ChromaDB에 업서트(upsert)하는 'add_note_to_db' 함수를 만들어줘.",
          simulatedOutput: "from sentence_transformers import SentenceTransformer\nmodel = SentenceTransformer('all-MiniLM-L6-v2')\n\ndef add_note_to_db(note_id, text):\n    embedding = model.encode(text).tolist()\n    collection.upsert(\n        ids=[note_id],\n        documents=[text],\n        embeddings=[embedding]\n    )\n    print(f'Note {note_id} vectorised.')",
          explanation: "이제 텍스트가 기계가 이해할 수 있는 '의미 공간(Vector Space)'의 좌표로 변환되어 저장되었습니다. 검색 준비 완료입니다."
        },
        {
          id: 3,
          title: "맥락을 포함한 질의",
          description: "사용자 질문과 유사한 노트를 찾고, 이를 LLM에게 맥락으로 제공하여 답변을 생성합니다.",
          userPromptHint: "질의 함수를 작성해줘. 1. ChromaDB에서 관련 노트를 검색. 2. 프롬프트 구성: '이 노트들에 기반하여: {context}, 답변해: {query}'.",
          simulatedOutput: "def ask_nexus(query):\n    query_vec = model.encode(query).tolist()\n    results = collection.query(query_embeddings=[query_vec], n_results=3)\n    context = '\\n'.join(results['documents'][0])\n    \n    prompt = f'Context:\\n{context}\\n\\nQuestion: {query}\\nAnswer:'\n    # 여기서 prompt를 Ollama/LLM에 전달...\n    return prompt",
          explanation: "이것이 RAG의 핵심입니다. 검색된 관련 정보(Context)를 프롬프트에 끼워 넣어줌으로써, LLM은 마치 내 노트를 다 읽은 것처럼 똑똑하게 대답할 수 있습니다."
        }
      ]
    }
  },
  {
    id: 6,
    title: "모델 특화 & 파인튜닝",
    subtitle: "Nexus의 개인화: 나만의 말투를 가진 AI",
    lectureContent: [
      {
        heading: "1. 일반 모델을 넘어서",
        content: "Llama3나 GPT-4는 일반적인 지식은 뛰어나지만, 특정 도메인(예: 의학, 법률)이나 '나만의 말투', '특정 JSON 포맷'을 완벽하게 따르지는 못합니다. RAG로도 해결되지 않는 '스타일'이나 '패턴'의 문제는 Fine-Tuning(미세 조정)으로 해결해야 합니다.",
        importantBox: "RAG는 '무엇을(What)' 아느냐의 문제이고, Fine-Tuning은 '어떻게(How)' 말하느냐의 문제입니다. 이 둘은 상호 보완적입니다.",
      },
      {
        heading: "2. PEFT & LoRA (효율적 학습)",
        content: "모델 전체를 재학습시키는 Full Fine-tuning은 막대한 비용이 듭니다. 그래서 등장한 것이 LoRA(Low-Rank Adaptation)입니다. 이미 학습된 거대 모델의 파라미터는 얼려두고(Freeze), 아주 작은 추가 레이어만 학습시키는 방식입니다.",
        bulletPoints: [
          "VRAM 절약: 수십 GB가 필요한 학습을 일반 게이밍 GPU나 Colab 무료 티어(T4)에서도 가능하게 해줍니다.",
          "속도: 학습해야 할 파라미터가 1% 미만이라 학습 속도가 비약적으로 빠릅니다.",
          "교체 가능성: 여러 개의 LoRA 어댑터(예: 요약용, 코딩용, 번역용)를 만들어두고 필요할 때 갈아끼울 수 있습니다."
        ]
      },
      {
        heading: "3. 데이터 준비가 핵심이다",
        content: "모델 학습의 8할은 데이터 정제입니다. 'Instruction(지시) - Input(입력) - Output(정답)' 쌍으로 이루어진 고품질 데이터셋이 필요합니다. Nexus 프로젝트에서는 내 과거 노트들을 학습시켜, 내가 평소에 쓰는 태그 스타일이나 요약 스타일을 모방하게 만듭니다."
      }
    ],
    labContent: {
      projectTitle: "Project Nexus: 파인튜닝",
      goal: "Unsloth 라이브러리를 사용하여 Llama-3 모델을 '나만의 요약 비서'로 Fine-Tuning 하는 과정을 시뮬레이션합니다.",
      steps: [
        {
          id: 1,
          title: "데이터셋 준비",
          description: "학습 데이터는 JSONL 포맷이어야 합니다. 내 노트 데이터를 학습 가능한 형태로 변환합니다.",
          userPromptHint: "원문 노트를 Alpaca 포맷 JSONL로 변환해줘: { instruction: '이걸 요약해', input: '노트 내용...', output: '나만의 요약 스타일...' }",
          simulatedOutput: "[\n  {\n    \"instruction\": \"주요 포인트 요약해줘\",\n    \"input\": \"디자인 팀 미팅...\",\n    \"output\": \"- UX 결정사항: 다크모드 기본\\n- 액션 아이템: 피그마 업데이트\"\n  },\n  ...\n]\n// train.jsonl 파일로 저장됨",
          explanation: "데이터셋의 품질이 모델의 성능을 결정합니다. Garbage In, Garbage Out은 AI 학습의 불변의 법칙입니다."
        },
        {
          id: 2,
          title: "Unsloth로 모델 로드",
          description: "Unsloth는 학습 속도를 2배 높이고 메모리는 60% 줄여주는 최적화 라이브러리입니다. Colab 환경을 가정하고 코드를 작성합니다.",
          userPromptHint: "Unsloth FastLanguageModel을 사용해 Llama-3-8b-bnb-4bit 모델을 로드해줘.",
          initialCode: "import torch\nfrom unsloth import FastLanguageModel",
          simulatedOutput: "model, tokenizer = FastLanguageModel.from_pretrained(\n    model_name = \"unsloth/llama-3-8b-bnb-4bit\",\n    max_seq_length = 2048,\n    load_in_4bit = True,\n)\nprint(\"모델이 4-bit 양자화 상태로 로드되었습니다.\")",
          explanation: "4bit 양자화 모델을 불러와 VRAM 사용량을 최소화했습니다. 이제 가정용 GPU에서도 최신 LLM을 학습시킬 수 있습니다."
        },
        {
          id: 3,
          title: "LoRA 어댑터 부착",
          description: "모델에 학습 가능한 LoRA 어댑터를 부착합니다.",
          userPromptHint: "PEFT/LoRA 설정을 모델에 적용해줘. 타겟 모듈: q_proj, k_proj, v_proj, o_proj.",
          simulatedOutput: "model = FastLanguageModel.get_peft_model(\n    model,\n    r = 16, # Rank\n    target_modules = [\"q_proj\", \"k_proj\", \"v_proj\", \"o_proj\", \"gate_proj\", \"up_proj\", \"down_proj\"],\n    lora_alpha = 16,\n    lora_dropout = 0,\n    bias = \"none\",\n)\nprint(\"LoRA 어댑터 부착 완료. 학습 준비됨.\")",
          explanation: "이제 베이스 모델은 그대로 둔 채, 새로 붙인 LoRA 어댑터 부분만 내 데이터로 업데이트됩니다. 효율적이고 강력합니다."
        }
      ]
    }
  },
  {
    id: 7,
    title: "배포 & 추론 최적화",
    subtitle: "Nexus 배포: vLLM으로 초고속 서비스하기",
    lectureContent: [
      {
        heading: "1. 프로덕션으로 이동",
        content: "학습된 모델을 혼자 쓰는 것을 넘어, 실제 서비스로 배포하려면 'Inference(추론) 속도'와 '처리량(Throughput)'이 중요합니다. Python 코드로 `model.generate()`를 직접 호출하는 것은 느리고 비효율적입니다. 전문 서빙 엔진이 필요한 시점입니다.",
        importantBox: "운영 환경에서는 '동시 접속자'를 처리해야 합니다. GPU 메모리(VRAM)를 얼마나 효율적으로 관리하느냐가 비용과 직결됩니다.",
      },
      {
        heading: "2. vLLM & PagedAttention",
        content: "vLLM은 현재 가장 각광받는 오픈소스 서빙 엔진입니다. 운영체제의 가상 메모리 관리 기법에서 착안한 'PagedAttention' 기술을 사용해, GPU 메모리 낭비를 거의 0에 가깝게 줄였습니다. 덕분에 기존 방식보다 2~5배 많은 요청을 동시에 처리할 수 있습니다.",
      },
      {
        heading: "3. 배포를 위한 양자화",
        content: "서버 비용을 아끼기 위해 모델을 더 압축할 수 있습니다. GGUF나 AWQ 포맷이 대표적입니다.",
        subSections: [
          { title: "GGUF", text: "CPU만 있는 저렴한 서버나 맥북에서 돌릴 때 최적입니다." },
          { title: "AWQ", text: "GPU가 있는 서버에서 극강의 속도를 냅니다. 정확도 손실을 최소화하며 4비트로 압축합니다." }
        ]
      }
    ],
    labContent: {
      projectTitle: "Project Nexus: 최종 배포",
      goal: "완성된 RAG 기능과 Fine-tuned 모델을 vLLM 엔진을 통해 OpenAI 호환 API로 서빙하고, 프론트엔드와 연결합니다.",
      steps: [
        {
          id: 1,
          title: "vLLM 서버 시작",
          description: "Docker를 사용하여 vLLM 서버를 띄웁니다. 우리가 만든 LoRA 어댑터를 적용하는 것이 목표입니다.",
          userPromptHint: "vLLM을 실행하는 docker run 명령어를 생성해줘. 모델 볼륨을 마운트하고 LoRA를 활성화해줘.",
          simulatedOutput: "docker run --runtime nvidia --gpus all \\\n    -v /path/to/my/lora_adapter:/root/lora_adapter \\\n    -p 8000:8000 \\\n    vllm/vllm-openai:latest \\\n    --model unsloth/llama-3-8b-bnb-4bit \\\n    --enable-lora \\\n    --lora-modules nexus-adapter=/root/lora_adapter",
          explanation: "이제 로컬호스트 8000번 포트에서 고성능 AI API 서버가 돌아갑니다. `--enable-lora` 옵션으로 우리가 만든 커스텀 모델을 서빙합니다."
        },
        {
          id: 2,
          title: "프론트엔드 연결",
          description: "프론트엔드(Next.js)에서 이 로컬 API를 호출하도록 설정합니다. OpenAI SDK를 그대로 쓸 수 있다는 점이 vLLM의 장점입니다.",
          userPromptHint: "OpenAI JS SDK가 api.openai.com 대신 로컬 vLLM 서버를 가리키도록 설정해줘.",
          initialCode: "const openai = new OpenAI({ apiKey: '...' });",
          simulatedOutput: "import OpenAI from 'openai';\n\nconst openai = new OpenAI({\n  apiKey: 'EMPTY', // vLLM은 로컬에서 실제 키가 필요 없음\n  baseURL: 'http://localhost:8000/v1' // 로컬 서버 주소\n});\n\n// 사용법은 기존과 완전히 동일함\nconst chatCompletion = await openai.chat.completions.create({ ... });",
          explanation: "코드 변경을 최소화했습니다. `baseURL`만 바꾸면, 비싼 OpenAI API 대신 내 로컬 GPU 서버를 사용하게 됩니다. 이것이 AI 아키텍트의 설계입니다."
        },
        {
          id: 3,
          title: "최종 테스트: Nexus 가동",
          description: "Nexus 시스템 전체가 작동하는지 확인합니다. 질문을 던져봅니다.",
          userPromptHint: "테스트 프롬프트: '저번 주에 LoRA에 대해 내가 뭐라고 배웠지?' (노트가 있다고 가정)",
          simulatedOutput: "Nexus Agent 응답:\n10월 12일자 '학습 로그: 모델 최적화' 노트에 따르면:\n\n당신은 LoRA(Low-Rank Adaptation)가 사전 학습된 모델 가중치를 동결하고 학습 가능한 순위 분해 행렬을 주입한다는 것을 배웠습니다. 기록된 주요 이점은 VRAM 사용량 감소와 빠른 학습 속도였습니다.",
          explanation: "축하합니다! RAG(검색)와 Fine-tuning(스타일)이 결합된, 여러분만의 AI 두뇌 'Nexus'가 완성되었습니다."
        }
      ]
    }
  }
];