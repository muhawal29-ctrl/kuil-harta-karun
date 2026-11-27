/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useReducer, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import {
  MISSIONS,
  QuestionOption,
  TOTAL_QUESTIONS,
} from "./data/gameConfig";
import { audioEngine } from "./utils/audioEngine";
import { BerandaPage } from "./components/pages/BerandaPage";
import { PetunjukPage } from "./components/pages/PetunjukPage";
import { MateriPage } from "./components/pages/MateriPage";
import { TantanganPage } from "./components/pages/TantanganPage";
import { PembahasanPage } from "./components/pages/PembahasanPage";
import { HartaKarunRefleksiPage } from "./components/pages/HartaKarunRefleksiPage";
import { PenutupPage } from "./components/pages/PenutupPage";

type PageId =
  | "beranda"
  | "petunjuk"
  | "materi"
  | "tantangan"
  | "pembahasan"
  | "refleksi"
  | "penutup";

interface GameState {
  currentPage: PageId;
  missionIndex: number;
  questionIndex: number;
  keysEarned: number;
  hasStartedMission: boolean;
  firstAttemptResults: Record<string, boolean>;
  shuffledOptions: QuestionOption[];
  lastAnswer: {
    optionId: string;
    letter: string;
    text: string;
    isCorrect: boolean;
  } | null;
  reflectionUnderstood: string;
  reflectionDifficult: string;
}

type GameAction =
  | { type: "GO_TO_PAGE"; page: PageId }
  | { type: "START_OR_RESUME_MISSION" }
  | { type: "ANSWER_QUESTION"; optionId: string }
  | { type: "RETRY_QUESTION" }
  | { type: "CONTINUE_AFTER_CORRECT" }
  | { type: "SET_REFLECTION_UNDERSTOOD"; value: string }
  | { type: "SET_REFLECTION_DIFFICULT"; value: string }
  | { type: "RESET_GAME" };

const OPTION_LETTERS = ["A", "B", "C", "D"];

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createInitialState(): GameState {
  return {
    currentPage: "beranda",
    missionIndex: 0,
    questionIndex: 0,
    keysEarned: 0,
    hasStartedMission: false,
    firstAttemptResults: {},
    shuffledOptions: [...MISSIONS[0].questions[0].options],
    lastAnswer: null,
    reflectionUnderstood: "",
    reflectionDifficult: "",
  };
}

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "GO_TO_PAGE":
      return {
        ...state,
        currentPage: action.page,
      };

    case "START_OR_RESUME_MISSION": {
      // Jika sudah menyelesaikan semua 3 kunci sebelumnya (misal klik "Ulangi Materi" di Halaman 6),
      // mulai ulang tantangan dari Misi 1 agar murid dapat berlatih kembali.
      if (state.keysEarned >= MISSIONS.length) {
        return {
          ...state,
          currentPage: "tantangan",
          missionIndex: 0,
          questionIndex: 0,
          keysEarned: 0,
          hasStartedMission: true,
          firstAttemptResults: {},
          shuffledOptions: [...MISSIONS[0].questions[0].options],
          lastAnswer: null,
        };
      }

      const currentQuestion =
        MISSIONS[state.missionIndex].questions[state.questionIndex];
      return {
        ...state,
        currentPage: "tantangan",
        hasStartedMission: true,
        shuffledOptions:
          state.shuffledOptions.length > 0
            ? state.shuffledOptions
            : [...currentQuestion.options],
      };
    }

    case "ANSWER_QUESTION": {
      const currentMission = MISSIONS[state.missionIndex];
      const currentQuestion = currentMission.questions[state.questionIndex];
      const optionIdx = state.shuffledOptions.findIndex(
        (opt) => opt.id === action.optionId
      );
      const selectedOption = state.shuffledOptions[optionIdx];
      const isCorrect = action.optionId === currentQuestion.correctOptionId;

      // Catat hasil percobaan pertama saja (tidak menimpa jika soal dicoba ulang)
      const hasPreviousAttempt = Object.prototype.hasOwnProperty.call(
        state.firstAttemptResults,
        currentQuestion.id
      );
      const updatedFirstAttempts = hasPreviousAttempt
        ? state.firstAttemptResults
        : {
            ...state.firstAttemptResults,
            [currentQuestion.id]: isCorrect,
          };

      const isLastQuestionInMission =
        state.questionIndex === currentMission.questions.length - 1;
      const earnedNewKey = isCorrect && isLastQuestionInMission;
      const nextKeysEarned = earnedNewKey
        ? Math.min(MISSIONS.length, state.missionIndex + 1)
        : state.keysEarned;

      return {
        ...state,
        currentPage: "pembahasan",
        keysEarned: nextKeysEarned,
        firstAttemptResults: updatedFirstAttempts,
        lastAnswer: {
          optionId: action.optionId,
          letter: OPTION_LETTERS[optionIdx] ?? "A",
          text: selectedOption?.text ?? "",
          isCorrect,
        },
      };
    }

    case "RETRY_QUESTION": {
      const currentQuestion =
        MISSIONS[state.missionIndex].questions[state.questionIndex];
      return {
        ...state,
        currentPage: "tantangan",
        shuffledOptions: shuffleArray(currentQuestion.options),
        lastAnswer: null,
      };
    }

    case "CONTINUE_AFTER_CORRECT": {
      const currentMission = MISSIONS[state.missionIndex];
      const isLastQuestionInMission =
        state.questionIndex === currentMission.questions.length - 1;

      if (!isLastQuestionInMission) {
        const nextQuestionIndex = state.questionIndex + 1;
        const nextQuestion = currentMission.questions[nextQuestionIndex];
        return {
          ...state,
          currentPage: "tantangan",
          questionIndex: nextQuestionIndex,
          shuffledOptions: [...nextQuestion.options],
          lastAnswer: null,
        };
      }

      const isLastMission = state.missionIndex === MISSIONS.length - 1;
      if (!isLastMission) {
        const nextMissionIndex = state.missionIndex + 1;
        const nextQuestion = MISSIONS[nextMissionIndex].questions[0];
        return {
          ...state,
          currentPage: "tantangan",
          missionIndex: nextMissionIndex,
          questionIndex: 0,
          shuffledOptions: [...nextQuestion.options],
          lastAnswer: null,
        };
      }

      // Semua 3 misi selesai → Halaman 6 (Kunci Harta Karun dan Refleksi)
      return {
        ...state,
        currentPage: "refleksi",
        lastAnswer: null,
      };
    }

    case "SET_REFLECTION_UNDERSTOOD":
      return {
        ...state,
        reflectionUnderstood: action.value,
      };

    case "SET_REFLECTION_DIFFICULT":
      return {
        ...state,
        reflectionDifficult: action.value,
      };

    case "RESET_GAME":
      return createInitialState();

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, undefined, createInitialState);
  const [isMuted, setIsMuted] = useState(false);

  const currentMission = MISSIONS[state.missionIndex];
  const currentQuestion = currentMission.questions[state.questionIndex];
  const isLastQuestionInMission =
    state.questionIndex === currentMission.questions.length - 1;
  const isLastMission = state.missionIndex === MISSIONS.length - 1;

  const firstAttemptCorrectCount = Object.values(
    state.firstAttemptResults
  ).filter(Boolean).length;
  const finalScore = Math.round(
    (firstAttemptCorrectCount / TOTAL_QUESTIONS) * 100
  );

  const correctOptionIndex = state.shuffledOptions.findIndex(
    (opt) => opt.id === currentQuestion.correctOptionId
  );
  const correctOptionText =
    currentQuestion.options.find(
      (opt) => opt.id === currentQuestion.correctOptionId
    )?.text ?? "";

  const handleToggleMute = () => {
    audioEngine.startOnFirstInteraction();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioEngine.setMuted(nextMuted);
  };

  const handleStartAdventure = () => {
    audioEngine.startOnFirstInteraction();
    audioEngine.playClick();
    dispatch({ type: "GO_TO_PAGE", page: "petunjuk" });
  };

  const handleSelectOption = (optionId: string) => {
    audioEngine.startOnFirstInteraction();
    const isCorrect = optionId === currentQuestion.correctOptionId;
    if (isCorrect) {
      if (isLastQuestionInMission) {
        audioEngine.playKeyEarned();
      } else {
        audioEngine.playCorrect();
      }
    } else {
      audioEngine.playWrong();
    }
    dispatch({ type: "ANSWER_QUESTION", optionId });
  };

  const handleContinueAfterCorrect = () => {
    audioEngine.startOnFirstInteraction();
    if (isLastQuestionInMission && isLastMission) {
      audioEngine.playChestOpen();
    } else {
      audioEngine.playClick();
    }
    dispatch({ type: "CONTINUE_AFTER_CORRECT" });
  };

  const handleNavigate = (page: PageId) => {
    audioEngine.startOnFirstInteraction();
    audioEngine.playClick();
    dispatch({ type: "GO_TO_PAGE", page });
  };

  return (
    <div className="temple-backdrop min-h-dvh w-full flex flex-col items-center px-4 py-4 sm:px-6 sm:py-6">
      {/* Tombol Mute/Unmute Audio yang Selalu Terlihat */}
      <div className="w-full max-w-5xl flex justify-end mb-2">
        <button
          type="button"
          onClick={handleToggleMute}
          aria-label={isMuted ? "Nyalakan musik dan suara" : "Bisukan musik dan suara"}
          aria-pressed={isMuted}
          className="inline-flex items-center gap-2 min-h-[48px] px-4 py-2 rounded-xl bg-[#3D2616]/95 hover:bg-[#52331E] border-2 border-[#D99B26]/65 text-[#F5E6C8] font-semibold text-[15px] shadow-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C14E]"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-[#F2C14E]" aria-hidden="true" />
          ) : (
            <Volume2 className="w-5 h-5 text-[#F2C14E]" aria-hidden="true" />
          )}
          <span>{isMuted ? "Suara Mati" : "Suara Aktif"}</span>
        </button>
      </div>

      {/* Kontainer Utama Responsif (360px HP hingga Desktop) */}
      <main className="w-full max-w-5xl flex-1 flex flex-col">
        {state.currentPage === "beranda" && (
          <BerandaPage onStart={handleStartAdventure} />
        )}

        {state.currentPage === "petunjuk" && (
          <PetunjukPage
            onNext={() => handleNavigate("materi")}
            onBack={() => handleNavigate("beranda")}
          />
        )}

        {state.currentPage === "materi" && (
          <MateriPage
            activeMissionNumber={state.missionIndex + 1}
            hasActiveProgress={
              state.hasStartedMission && state.keysEarned < MISSIONS.length
            }
            onStartMission={() => {
              audioEngine.startOnFirstInteraction();
              audioEngine.playClick();
              dispatch({ type: "START_OR_RESUME_MISSION" });
            }}
            onBack={() => handleNavigate("petunjuk")}
          />
        )}

        {state.currentPage === "tantangan" && (
          <TantanganPage
            mission={currentMission}
            question={currentQuestion}
            questionIndex={state.questionIndex}
            totalQuestionsInMission={currentMission.questions.length}
            shuffledOptions={state.shuffledOptions}
            keysEarned={state.keysEarned}
            onSelectOption={handleSelectOption}
            onReadMaterial={() => handleNavigate("materi")}
          />
        )}

        {state.currentPage === "pembahasan" && state.lastAnswer && (
          <PembahasanPage
            isCorrect={state.lastAnswer.isCorrect}
            missionNumber={state.missionIndex + 1}
            isLastQuestionInMission={isLastQuestionInMission}
            isLastMission={isLastMission}
            question={currentQuestion}
            selectedOptionLetter={
              state.lastAnswer.isCorrect
                ? OPTION_LETTERS[correctOptionIndex] ?? state.lastAnswer.letter
                : state.lastAnswer.letter
            }
            selectedOptionText={state.lastAnswer.text}
            correctOptionText={correctOptionText}
            onContinue={handleContinueAfterCorrect}
            onRetry={() => {
              audioEngine.startOnFirstInteraction();
              audioEngine.playClick();
              dispatch({ type: "RETRY_QUESTION" });
            }}
            onReadMaterial={() => handleNavigate("materi")}
          />
        )}

        {state.currentPage === "refleksi" && (
          <HartaKarunRefleksiPage
            score={finalScore}
            firstAttemptCorrectCount={firstAttemptCorrectCount}
            totalQuestions={TOTAL_QUESTIONS}
            reflectionUnderstood={state.reflectionUnderstood}
            reflectionDifficult={state.reflectionDifficult}
            onChangeUnderstood={(value) =>
              dispatch({ type: "SET_REFLECTION_UNDERSTOOD", value })
            }
            onChangeDifficult={(value) =>
              dispatch({ type: "SET_REFLECTION_DIFFICULT", value })
            }
            onFinish={() => handleNavigate("penutup")}
            onRepeatMaterial={() => handleNavigate("materi")}
          />
        )}

        {state.currentPage === "penutup" && (
          <PenutupPage
            onPlayAgain={() => {
              audioEngine.startOnFirstInteraction();
              audioEngine.playClick();
              dispatch({ type: "RESET_GAME" });
            }}
          />
        )}
      </main>
    </div>
  );
}
