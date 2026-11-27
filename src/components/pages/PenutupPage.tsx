import React, { useState } from "react";
import { TEACHER_INFO } from "../../data/gameConfig";
import { LogoMark } from "../TempleArt";

interface PenutupPageProps {
  onPlayAgain: () => void;
}

export const PenutupPage: React.FC<PenutupPageProps> = ({ onPlayAgain }) => {
  const [hasExited, setHasExited] = useState(false);

  return (
    <section className="animate-page-enter flex flex-col items-center justify-center min-h-[calc(100dvh-5.5rem)] w-full py-6">
      <div className="w-full max-w-2xl bg-[#FDF8EE] border-2 border-[#D99B26] rounded-3xl p-6 sm:p-8 shadow-xl text-center space-y-6">
        {/* Logo Sederhana: Gerbang Kuil + Kunci Emas */}
        <div className="flex flex-col items-center gap-2">
          <LogoMark className="w-16 h-16" />
          <h1 className="font-display text-3xl sm:text-4xl text-[#5A3414]">
            Petualangan Selesai!
          </h1>
        </div>

        {/* Ucapan Selamat & Pesan Penutup */}
        <div className="space-y-3">
          <p className="text-[19px] sm:text-[20px] font-semibold text-[#24160C] leading-relaxed">
            Selamat! Kamu telah menuntaskan seluruh misi di Kuil Harta Karun dan mempelajari unsur-unsur Barisan Aritmetika.
          </p>
          <div className="rounded-2xl bg-[#EEF7EF] border border-[#3A5F3E]/40 p-4">
            <p className="text-[18px] font-medium text-[#1E5631] leading-relaxed">
              {TEACHER_INFO.tindakLanjut}
            </p>
          </div>
        </div>

        {/* Kredit */}
        <div className="rounded-2xl bg-[#F5ECE0] border border-[#C89B54]/50 p-4 text-left space-y-1.5 text-[16px] text-[#24160C]">
          <p className="font-bold text-[#5A3414]">Kredit:</p>
          <p>
            Materi dan soal dibuat oleh {TEACHER_INFO.namaGuru} (acuan buku teks Matematika).
          </p>
          <p>Ikon dan ilustrasi dibuat dengan SVG/CSS.</p>
          <p>Audio dihasilkan dengan Web Audio API.</p>
        </div>

        {/* Pesan Keluar (jika tombol Keluar ditekan) */}
        {hasExited && (
          <div
            className="rounded-2xl bg-[#FEF3D6] border-2 border-[#D99B26] p-4"
            role="status"
          >
            <p className="text-[18px] font-bold text-[#5A3414]">
              Terima kasih sudah bermain, sampai jumpa di petualangan berikutnya!
            </p>
          </div>
        )}

        {/* Tombol Main Lagi & Keluar (hanya 2 tombol ini sesuai ketentuan) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
          <button
            type="button"
            onClick={onPlayAgain}
            className="min-h-[52px] min-w-[180px] px-7 py-3 rounded-xl bg-[#D99B26] hover:bg-[#E7AA33] active:scale-[0.98] text-[#1E1108] font-bold text-[18px] shadow-[0_4px_0_#8C5808] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A3414]"
          >
            Main Lagi
          </button>

          <button
            type="button"
            onClick={() => setHasExited(true)}
            className="min-h-[52px] min-w-[160px] px-7 py-3 rounded-xl bg-[#4A2E1A] hover:bg-[#5E3C23] text-[#FDF8EE] font-semibold text-[18px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A3414]"
          >
            Keluar
          </button>
        </div>
      </div>
    </section>
  );
};
