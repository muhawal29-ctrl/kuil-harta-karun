import React from "react";
import { TEACHER_INFO } from "../../data/gameConfig";
import { GoldenKeyIcon } from "../TempleArt";

interface PetunjukPageProps {
  onNext: () => void;
  onBack: () => void;
}

export const PetunjukPage: React.FC<PetunjukPageProps> = ({
  onNext,
  onBack,
}) => {
  return (
    <section className="animate-page-enter flex flex-col gap-6 w-full">
      {/* Judul Halaman */}
      <div className="text-center space-y-2">
        <h1 className="font-display text-3xl sm:text-4xl text-[#F2C14E] drop-shadow-[0_2px_0_rgba(26,14,6,0.9)]">
          Petunjuk dan Misi
        </h1>
        <p className="text-[18px] text-[#F5E6C8] max-w-2xl mx-auto">
          Jauh di dalam hutan, berdiri kuil kuno yang menyimpan peti harta karun dan dijaga oleh 3 gerbang misi.
        </p>
      </div>

      {/* Konten Utama di Kotak Krem Kontras Tinggi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Tujuan Pembelajaran & Cara Bermain */}
        <div className="bg-[#FDF8EE] border-2 border-[#D99B26] rounded-2xl p-5 sm:p-6 shadow-md space-y-4">
          <div className="space-y-1.5">
            <h2 className="font-display text-2xl text-[#5A3414]">
              Tujuan Pembelajaran
            </h2>
            <p className="text-[18px] text-[#24160C] leading-relaxed">
              {TEACHER_INFO.tujuanPembelajaran}
            </p>
          </div>

          <hr className="border-[#D99B26]/30" />

          <div className="space-y-2">
            <h2 className="font-display text-2xl text-[#5A3414]">
              Cara Bermain
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-[18px] text-[#24160C] leading-relaxed">
              <li>Pelajari materi Barisan Aritmetika terlebih dahulu.</li>
              <li>Selesaikan tantangan pada Gerbang Misi 1, 2, dan 3 secara berurutan.</li>
              <li>Kumpulkan 3 kunci emas untuk membuka peti harta karun.</li>
            </ol>
          </div>
        </div>

        {/* Aturan Main */}
        <div className="bg-[#FDF8EE] border-2 border-[#3A5F3E] rounded-2xl p-5 sm:p-6 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <GoldenKeyIcon filled className="w-9 h-9 shrink-0" />
            <h2 className="font-display text-2xl text-[#2B4B2F]">
              Aturan Main
            </h2>
          </div>

          <ul className="space-y-3 text-[18px] text-[#24160C] leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#2B4B2F]" aria-hidden="true">1.</span>
              <span>Ada 3 misi bertahap, setiap misi berisi 2 soal pilihan ganda.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#2B4B2F]" aria-hidden="true">2.</span>
              <span>Klik satu pilihan jawaban yang menurutmu paling tepat.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#2B4B2F]" aria-hidden="true">3.</span>
              <span>Jika semua soal dalam satu misi dijawab benar, kamu mendapat 1 kunci emas.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#2B4B2F]" aria-hidden="true">4.</span>
              <span>Jika jawaban belum tepat, baca petunjuk dan kamu boleh mencoba lagi.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Tombol Navigasi Bawah */}
      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="min-h-[50px] px-6 py-3 rounded-xl bg-[#4A2E1A] hover:bg-[#5E3C23] border-2 border-[#C89B54]/60 text-[#FDF8EE] font-semibold text-[18px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C14E]"
        >
          Kembali
        </button>

        <button
          type="button"
          onClick={onNext}
          className="min-h-[52px] px-8 py-3 rounded-xl bg-[#D99B26] hover:bg-[#E7AA33] active:scale-[0.98] text-[#1E1108] font-bold text-[18px] shadow-[0_4px_0_#8C5808] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FDF8EE]"
        >
          Lanjut
        </button>
      </div>
    </section>
  );
};
