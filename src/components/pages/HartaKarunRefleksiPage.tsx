import React, { useState } from "react";
import { TEACHER_INFO } from "../../data/gameConfig";
import {
  CheckBadgeIcon,
  MapScrollIcon,
  TreasureChestAnimated,
} from "../TempleArt";

interface HartaKarunRefleksiPageProps {
  score: number;
  firstAttemptCorrectCount: number;
  totalQuestions: number;
  reflectionUnderstood: string;
  reflectionDifficult: string;
  onChangeUnderstood: (value: string) => void;
  onChangeDifficult: (value: string) => void;
  onFinish: () => void;
  onRepeatMaterial: () => void;
}

export const HartaKarunRefleksiPage: React.FC<HartaKarunRefleksiPageProps> = ({
  score,
  firstAttemptCorrectCount,
  totalQuestions,
  reflectionUnderstood,
  reflectionDifficult,
  onChangeUnderstood,
  onChangeDifficult,
  onFinish,
  onRepeatMaterial,
}) => {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle"
  );

  const isPassed = score >= TEACHER_INFO.kkm;

  const handleCopyReflection = async () => {
    const textToCopy = [
      `Refleksi Belajar — ${TEACHER_INFO.judulGame}`,
      `Mata Pelajaran: ${TEACHER_INFO.mataPelajaran} (${TEACHER_INFO.kelas})`,
      `Skor Akhir: ${score}/100 (${firstAttemptCorrectCount}/${totalQuestions} benar pada percobaan pertama)`,
      `Status: ${isPassed ? "Tuntas" : "Ayo ulangi materi"}`,
      "",
      `1. Bagian apa yang sudah kamu pahami?`,
      reflectionUnderstood.trim() || "(Belum diisi)",
      "",
      `2. Bagian apa yang masih sulit?`,
      reflectionDifficult.trim() || "(Belum diisi)",
    ].join("\n");

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        setCopyStatus("copied");
      } else {
        setCopyStatus("failed");
      }
    } catch {
      setCopyStatus("failed");
    }
  };

  return (
    <section className="animate-page-enter flex flex-col gap-6 w-full">
      {/* Animasi Peti Terbuka dengan 3 Kunci & Skor Akhir */}
      <div className="flex flex-col items-center text-center gap-3">
        <TreasureChestAnimated />
        <h1 className="font-display text-3xl sm:text-4xl text-[#F2C14E] drop-shadow-[0_2px_0_rgba(26,14,6,0.9)]">
          Selamat! Kamu membuka Kuil Harta Karun.
        </h1>
      </div>

      {/* Kotak Skor & Status */}
      <div
        className={`rounded-2xl border-2 p-5 sm:p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isPassed
            ? "bg-[#EEF8EF] border-[#2E7D32]"
            : "bg-[#FFF4E5] border-[#C25912]"
        }`}
      >
        <div className="flex items-center gap-3.5">
          {isPassed ? (
            <CheckBadgeIcon className="w-12 h-12 shrink-0" />
          ) : (
            <MapScrollIcon className="w-12 h-12 shrink-0" />
          )}
          <div>
            <p className="text-[16px] font-semibold text-[#5A3414]">
              Status Pencapaian
            </p>
            <p
              className={`font-display text-2xl sm:text-3xl ${
                isPassed ? "text-[#1B5E20]" : "text-[#9B420D]"
              }`}
            >
              {isPassed ? "Tuntas" : "Ayo ulangi materi"}
            </p>
            <p className="text-[16px] text-[#24160C]">
              Benar pada percobaan pertama: {firstAttemptCorrectCount} dari{" "}
              {totalQuestions} soal
            </p>
          </div>
        </div>

        <div className="bg-[#2B1A0E] text-[#F2C14E] rounded-2xl px-6 py-3 text-center shrink-0">
          <p className="text-[14px] text-[#F5E6C8]">Skor Akhir</p>
          <p className="font-display text-4xl sm:text-5xl tabular-nums">
            {score}
          </p>
        </div>
      </div>

      {/* Kotak Rangkuman & Kotak Refleksi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        {/* Kotak Rangkuman */}
        <div className="bg-[#FDF8EE] border-2 border-[#D99B26] rounded-2xl p-5 sm:p-6 shadow-md space-y-3">
          <h2 className="font-display text-2xl text-[#5A3414]">
            Rangkuman Materi
          </h2>
          <ul className="space-y-2.5 text-[18px] text-[#24160C] leading-relaxed">
            <li>
              <span className="font-bold text-[#9A5200]">a</span> = suku pertama
            </li>
            <li>
              <span className="font-bold text-[#1E5631]">b</span> = beda (
              <span className="font-semibold tabular-nums">
                b = U<sub>n</sub> − U<sub>n−1</sub>
              </span>
              )
            </li>
            <li>
              Pola bertambah jika{" "}
              <span className="font-bold text-[#1E5631]">b</span> positif dan
              berkurang jika <span className="font-bold text-[#1E5631]">b</span>{" "}
              negatif.
            </li>
          </ul>
        </div>

        {/* Kotak Refleksi */}
        <div className="bg-[#FDF8EE] border-2 border-[#3A5F3E] rounded-2xl p-5 sm:p-6 shadow-md space-y-4">
          <h2 className="font-display text-2xl text-[#2B4B2F]">
            Refleksi Petualang
          </h2>

          <div className="space-y-1.5">
            <label
              htmlFor="refleksi-paham"
              className="block text-[18px] font-semibold text-[#24160C]"
            >
              Bagian apa yang sudah kamu pahami?
            </label>
            <textarea
              id="refleksi-paham"
              rows={2}
              value={reflectionUnderstood}
              onChange={(e) => {
                setCopyStatus("idle");
                onChangeUnderstood(e.target.value);
              }}
              placeholder="Tulis jawabanmu di sini..."
              className="w-full rounded-xl border-2 border-[#C89B54] bg-white px-3.5 py-2.5 text-[18px] text-[#24160C] placeholder:text-[#786350] focus:border-[#3A5F3E] focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="refleksi-sulit"
              className="block text-[18px] font-semibold text-[#24160C]"
            >
              Bagian apa yang masih sulit?
            </label>
            <textarea
              id="refleksi-sulit"
              rows={2}
              value={reflectionDifficult}
              onChange={(e) => {
                setCopyStatus("idle");
                onChangeDifficult(e.target.value);
              }}
              placeholder="Tulis bagian yang ingin kamu tanyakan..."
              className="w-full rounded-xl border-2 border-[#C89B54] bg-white px-3.5 py-2.5 text-[18px] text-[#24160C] placeholder:text-[#786350] focus:border-[#3A5F3E] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopyReflection}
              className="min-h-[48px] px-5 py-2.5 rounded-xl bg-[#3A5F3E] hover:bg-[#2E4D31] text-[#FDF8EE] font-semibold text-[18px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D99B26]"
            >
              Salin Refleksi
            </button>

            {copyStatus === "copied" && (
              <span className="text-[16px] font-semibold text-[#1E5631]" role="status">
                Tersalin! Siap dikirim ke guru.
              </span>
            )}
            {copyStatus === "failed" && (
              <span className="text-[16px] font-semibold text-[#9B420D]" role="status">
                Gagal menyalin otomatis. Silakan salin teks secara manual.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Tombol Navigasi Bawah */}
      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
        <button
          type="button"
          onClick={onRepeatMaterial}
          className="min-h-[50px] px-6 py-3 rounded-xl bg-[#4A2E1A] hover:bg-[#5E3C23] border-2 border-[#C89B54]/60 text-[#FDF8EE] font-semibold text-[18px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C14E]"
        >
          Ulangi Materi
        </button>

        <button
          type="button"
          onClick={onFinish}
          className="min-h-[52px] px-8 py-3 rounded-xl bg-[#D99B26] hover:bg-[#E7AA33] active:scale-[0.98] text-[#1E1108] font-bold text-[18px] shadow-[0_4px_0_#8C5808] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FDF8EE]"
        >
          Selesai
        </button>
      </div>
    </section>
  );
};
