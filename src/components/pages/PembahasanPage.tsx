import React from "react";
import { MissionQuestion } from "../../data/gameConfig";
import { CheckBadgeIcon, GoldenKeyIcon, MapScrollIcon } from "../TempleArt";

interface PembahasanPageProps {
  isCorrect: boolean;
  missionNumber: number;
  isLastQuestionInMission: boolean;
  isLastMission: boolean;
  question: MissionQuestion;
  selectedOptionLetter: string;
  selectedOptionText: string;
  correctOptionText: string;
  onContinue: () => void;
  onRetry: () => void;
  onReadMaterial: () => void;
}

export const PembahasanPage: React.FC<PembahasanPageProps> = ({
  isCorrect,
  missionNumber,
  isLastQuestionInMission,
  isLastMission,
  question,
  selectedOptionLetter,
  selectedOptionText,
  correctOptionText,
  onContinue,
  onRetry,
  onReadMaterial,
}) => {
  if (isCorrect) {
    const nextButtonLabel = !isLastQuestionInMission
      ? "Soal Berikutnya"
      : isLastMission
      ? "Buka Harta Karun"
      : "Misi Berikutnya";

    return (
      <section className="animate-page-enter flex flex-col gap-5 w-full">
        {/* Panel Umpan Balik Hijau (Benar) */}
        <div className="rounded-3xl bg-[#1F5127] border-2 border-[#68B673] p-5 sm:p-7 shadow-xl space-y-5">
          {/* Header Ikon & Pesan Utama */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
            <div className="flex items-center gap-2 shrink-0 animate-key-appear">
              <CheckBadgeIcon className="w-14 h-14" />
              <GoldenKeyIcon filled className="w-14 h-14" />
            </div>

            <div className="space-y-1">
              <p className="text-[16px] font-semibold text-[#D6F5D9]">
                Jawaban Benar
              </p>
              <h1 className="font-display text-2xl sm:text-3xl text-[#F2C14E] leading-tight">
                {isLastQuestionInMission
                  ? `Hebat! Kamu mendapat kunci ke-${missionNumber}.`
                  : `Hebat! Jawabanmu tepat.`}
              </h1>
              {!isLastQuestionInMission && (
                <p className="text-[18px] text-[#EBFCEB]">
                  Selesaikan 1 soal lagi untuk mendapat kunci ke-{missionNumber}.
                </p>
              )}
            </div>
          </div>

          {/* Kotak Kunci Jawaban & Pembahasan Langkah Penyelesaian */}
          <div className="bg-[#FDF8EE] border-2 border-[#D99B26] rounded-2xl p-5 space-y-3">
            <div className="space-y-1">
              <p className="text-[16px] font-bold text-[#1E5631]">
                Kunci Jawaban:
              </p>
              <p className="text-[19px] font-bold text-[#24160C] tabular-nums">
                {selectedOptionLetter}. {correctOptionText}
              </p>
            </div>

            <hr className="border-[#D99B26]/30" />

            <div className="space-y-1">
              <p className="text-[16px] font-bold text-[#5A3414]">
                Langkah Penyelesaian:
              </p>
              <p className="text-[18px] text-[#24160C] leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </div>

          {/* Tombol Lanjut */}
          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={onContinue}
              className="w-full sm:w-auto min-w-[220px] min-h-[52px] px-8 py-3 rounded-xl bg-[#D99B26] hover:bg-[#E7AA33] active:scale-[0.98] text-[#1E1108] font-bold text-[18px] shadow-[0_4px_0_#8C5808] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FDF8EE]"
            >
              {nextButtonLabel}
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Tampilan SALAH (Latar Jingga + Ikon Peta)
  return (
    <section className="animate-page-enter flex flex-col gap-5 w-full">
      <div className="rounded-3xl bg-[#9B420D] border-2 border-[#F59E0B] p-5 sm:p-7 shadow-xl space-y-5">
        {/* Header Ikon Peta & Pesan Utama */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
          <div className="shrink-0">
            <MapScrollIcon className="w-16 h-16" />
          </div>

          <div className="space-y-1">
            <p className="text-[16px] font-semibold text-[#FFE6C7]">
              Jawaban Belum Tepat ({selectedOptionLetter}. {selectedOptionText})
            </p>
            <h1 className="font-display text-2xl sm:text-3xl text-[#FFF7E8] leading-tight">
              Belum tepat, ayo periksa lagi selisih antarsuku.
            </h1>
          </div>
        </div>

        {/* Penjelasan Singkat Langkah Penyelesaian */}
        <div className="bg-[#FDF8EE] border-2 border-[#F59E0B] rounded-2xl p-5 space-y-2.5">
          <p className="text-[16px] font-bold text-[#9B420D]">
            Petunjuk Langkah Penyelesaian:
          </p>
          <p className="text-[18px] text-[#24160C] leading-relaxed">
            {question.wrongHint}
          </p>
        </div>

        {/* Tombol Coba Lagi & Baca Materi */}
        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
          <button
            type="button"
            onClick={onReadMaterial}
            className="min-h-[50px] px-6 py-3 rounded-xl bg-[#4A2E1A] hover:bg-[#5E3C23] border-2 border-[#FDF8EE]/50 text-[#FDF8EE] font-semibold text-[18px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FDF8EE]"
          >
            Baca Materi
          </button>

          <button
            type="button"
            onClick={onRetry}
            className="min-h-[52px] px-8 py-3 rounded-xl bg-[#F2C14E] hover:bg-[#F7CE6D] active:scale-[0.98] text-[#1E1108] font-bold text-[18px] shadow-[0_4px_0_#7A4905] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FDF8EE]"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    </section>
  );
};
