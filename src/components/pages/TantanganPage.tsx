import React from "react";
import { MissionData, MissionQuestion, QuestionOption } from "../../data/gameConfig";
import { GoldenKeyIcon } from "../TempleArt";

interface TantanganPageProps {
  mission: MissionData;
  question: MissionQuestion;
  questionIndex: number;
  totalQuestionsInMission: number;
  shuffledOptions: QuestionOption[];
  keysEarned: number;
  onSelectOption: (optionId: string) => void;
  onReadMaterial: () => void;
}

const OPTION_LETTERS = ["A", "B", "C", "D"];

export const TantanganPage: React.FC<TantanganPageProps> = ({
  mission,
  question,
  questionIndex,
  totalQuestionsInMission,
  shuffledOptions,
  keysEarned,
  onSelectOption,
  onReadMaterial,
}) => {
  return (
    <section className="animate-page-enter flex flex-col gap-5 w-full">
      {/* Bagian Atas: Judul Misi, Nama Misi, dan Indikator 3 Slot Kunci + Ikon Kunci di Kanan Atas */}
      <header className="bg-[#3D2616]/90 border-2 border-[#D99B26]/70 rounded-2xl px-4 py-3.5 sm:px-6 sm:py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-0.5 min-w-0">
          <div className="flex items-center gap-2 text-[15px] sm:text-[16px] text-[#F5E6C8]">
            <span>Soal {questionIndex + 1} dari {totalQuestionsInMission}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl text-[#F2C14E] leading-tight">
            {mission.title} — {mission.subtitle}
          </h1>
        </div>

        {/* Indikator 3 Slot Kunci + Ikon Kunci */}
        <div
          className="flex items-center gap-1.5 bg-[#26160B] border border-[#D99B26]/50 rounded-xl px-3 py-2 shrink-0"
          aria-label={`Kunci terkumpul: ${keysEarned} dari 3`}
        >
          {[0, 1, 2].map((slot) => {
            const isFilled = slot < keysEarned;
            return (
              <div
                key={slot}
                className="flex items-center justify-center"
                title={isFilled ? `Kunci ke-${slot + 1} didapat` : `Slot kunci ${slot + 1} kosong`}
              >
                <GoldenKeyIcon filled={isFilled} className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
            );
          })}
          <span className="ml-1 text-[16px] font-bold text-[#F2C14E] tabular-nums">
            {keysEarned}/3
          </span>
        </div>
      </header>

      {/* Bagian Tengah: Kartu Soal */}
      <div className="bg-[#FDF8EE] border-2 border-[#D99B26] rounded-2xl p-5 sm:p-7 shadow-lg">
        <p className="text-[19px] sm:text-[22px] font-semibold text-[#24160C] leading-relaxed">
          {question.prompt}
        </p>
      </div>

      {/* Bagian Bawah: 4 Tombol Pilihan A-D */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {shuffledOptions.map((option, idx) => {
          const letter = OPTION_LETTERS[idx] ?? String(idx + 1);
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelectOption(option.id)}
              className="group min-h-[58px] w-full text-left px-4 py-3.5 rounded-xl bg-[#FDF8EE] hover:bg-[#FEF0C7] active:scale-[0.99] border-2 border-[#C89B54] hover:border-[#9A5200] shadow-sm transition-all flex items-center gap-3.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C14E]"
            >
              <span className="w-10 h-10 rounded-lg bg-[#5A3414] group-hover:bg-[#9A5200] text-[#FDF8EE] font-bold text-[18px] flex items-center justify-center shrink-0 transition-colors">
                {letter}
              </span>
              <span className="text-[18px] sm:text-[19px] font-semibold text-[#24160C] tabular-nums leading-snug">
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tombol Baca Materi */}
      <div className="pt-1 flex justify-start">
        <button
          type="button"
          onClick={onReadMaterial}
          className="min-h-[48px] px-5 py-2.5 rounded-xl bg-[#4A2E1A] hover:bg-[#5E3C23] border-2 border-[#C89B54]/60 text-[#FDF8EE] font-semibold text-[18px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C14E]"
        >
          Baca Materi
        </button>
      </div>
    </section>
  );
};
