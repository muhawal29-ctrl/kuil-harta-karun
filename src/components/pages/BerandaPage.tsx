import React from "react";
import { TEACHER_INFO } from "../../data/gameConfig";
import { LogoMark, TempleGateChestHero } from "../TempleArt";

interface BerandaPageProps {
  onStart: () => void;
}

export const BerandaPage: React.FC<BerandaPageProps> = ({ onStart }) => {
  return (
    <section className="animate-page-enter flex flex-col justify-between min-h-[calc(100dvh-5.5rem)] w-full">
      {/* Bagian Atas: Logo Kuil & Kunci */}
      <div className="flex items-center gap-3">
        <LogoMark className="w-12 h-12 sm:w-14 sm:h-14 shrink-0" />
        <span className="font-display text-xl sm:text-2xl text-[#F2C14E] tracking-wide">
          {TEACHER_INFO.judulGame}
        </span>
      </div>

      {/* Bagian Tengah: Ilustrasi Utama, Judul Besar, Narasi, dan Tombol Mulai */}
      <div className="my-auto py-6 flex flex-col items-center text-center gap-5 sm:gap-6">
        <TempleGateChestHero />

        <div className="max-w-xl space-y-3">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2C14E] drop-shadow-[0_3px_0_rgba(26,14,6,0.9)] leading-tight">
            {TEACHER_INFO.judulGame}
          </h1>

          <div className="bg-[#FDF8EE] border-2 border-[#D99B26] rounded-2xl px-5 py-4 sm:px-7 sm:py-5 shadow-lg">
            <p className="text-[18px] sm:text-[20px] font-medium text-[#24160C] leading-relaxed">
              Selamat datang, Petualang! Kumpulkan 3 kunci untuk membuka harta karun.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onStart}
          className="w-full sm:w-auto min-w-[240px] min-h-[54px] px-8 py-3.5 rounded-xl bg-[#D99B26] hover:bg-[#E7AA33] active:scale-[0.98] text-[#1E1108] font-bold text-[18px] sm:text-[20px] shadow-[0_4px_0_#8C5808] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FDF8EE]"
        >
          Mulai Petualangan
        </button>
      </div>

      {/* Pojok Bawah: Identitas Guru dan Kelas */}
      <footer className="pt-4 border-t border-[#F2C14E]/20 flex flex-wrap items-center justify-between gap-2 text-[14px] sm:text-[15px] text-[#F5E6C8]">
        <span>
          {TEACHER_INFO.namaGuru} | {TEACHER_INFO.sekolah}
        </span>
        <span>
          {TEACHER_INFO.mataPelajaran}, {TEACHER_INFO.fase}, {TEACHER_INFO.kelas}
        </span>
      </footer>
    </section>
  );
};
