import React from "react";
import { VIDEO_URL } from "../../data/gameConfig";

interface MateriPageProps {
  onStartMission: () => void;
  onBack: () => void;
  activeMissionNumber: number;
  hasActiveProgress: boolean;
}

export const MateriPage: React.FC<MateriPageProps> = ({
  onStartMission,
  onBack,
  activeMissionNumber,
  hasActiveProgress,
}) => {
  const hasVideo = VIDEO_URL.trim().length > 0;

  return (
    <section className="animate-page-enter flex flex-col gap-6 w-full">
      {/* Judul Halaman */}
      <div className="text-center space-y-1.5">
        <h1 className="font-display text-3xl sm:text-4xl text-[#F2C14E] drop-shadow-[0_2px_0_rgba(26,14,6,0.9)]">
          Materi Barisan Aritmetika
        </h1>
        <p className="text-[18px] text-[#F5E6C8]">
          Bekal pengetahuan sebelum membuka ketiga gerbang kuil.
        </p>
      </div>

      {/* Layout 2 Kolom: Kiri/Atas Definisi, Kanan/Bawah Contoh Berwarna */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        {/* Kotak Definisi */}
        <div className="bg-[#FDF8EE] border-2 border-[#D99B26] rounded-2xl p-5 sm:p-6 shadow-md flex flex-col justify-between gap-5">
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-[#5A3414]">
              Pengertian dan Unsur
            </h2>

            <p className="text-[18px] sm:text-[19px] text-[#24160C] leading-relaxed font-medium">
              Barisan aritmetika adalah barisan bilangan yang selisih antarsuku berurutan selalu tetap (disebut beda).
            </p>

            <div className="space-y-3 pt-1">
              <div className="rounded-xl bg-[#FEF3D6] border border-[#D99B26]/50 p-3.5">
                <p className="text-[18px] text-[#24160C] leading-snug">
                  <span className="font-bold text-[#9A5200]">
                    Suku pertama (a)
                  </span>{" "}
                  = bilangan pertama pada barisan.
                </p>
              </div>

              <div className="rounded-xl bg-[#E6F4E8] border border-[#3A5F3E]/45 p-3.5">
                <p className="text-[18px] text-[#24160C] leading-snug">
                  <span className="font-bold text-[#1E5631]">
                    Beda (b)
                  </span>{" "}
                  = suku berikutnya dikurangi suku sebelumnya (
                  <span className="font-semibold tabular-nums">
                    b = U2 − U1
                  </span>
                  ).
                </p>
              </div>

              <div className="rounded-xl bg-[#F5ECE0] border border-[#8C5A2B]/30 p-3.5">
                <p className="text-[18px] text-[#24160C] leading-snug">
                  <span className="font-bold text-[#5A3414]">Pola:</span>{" "}
                  <span className="font-bold text-[#1E5631]">b</span> positif berarti bertambah,{" "}
                  <span className="font-bold text-[#1E5631]">b</span> negatif berarti berkurang.
                </p>
              </div>
            </div>
          </div>

          {hasVideo && (
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-xl bg-[#3A5F3E] hover:bg-[#2E4D31] text-[#FDF8EE] font-semibold text-[18px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C14E]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 shrink-0"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Tonton Video Penjelasan</span>
            </a>
          )}
        </div>

        {/* Kotak Contoh Berwarna */}
        <div className="bg-[#FDF8EE] border-2 border-[#3A5F3E] rounded-2xl p-5 sm:p-6 shadow-md space-y-4">
          <h2 className="font-display text-2xl text-[#2B4B2F]">
            Contoh Barisan
          </h2>

          {/* Contoh 1 */}
          <div className="rounded-xl bg-[#EEF7EF] border border-[#3A5F3E]/40 p-4 space-y-1.5">
            <p className="text-[18px] font-bold text-[#24160C] tabular-nums">
              Contoh 1:{" "}
              <span className="text-[#9A5200] underline decoration-2 underline-offset-4">
                3
              </span>
              , 7, 11, 15, …
            </p>
            <p className="text-[18px] text-[#24160C]">
              <span className="font-bold text-[#9A5200]">a = 3</span>,{" "}
              <span className="font-bold text-[#1E5631]">b = 4</span>{" "}
              (bertambah 4)
            </p>
          </div>

          {/* Contoh 2 */}
          <div className="rounded-xl bg-[#FEF4E4] border border-[#D99B26]/50 p-4 space-y-1.5">
            <p className="text-[18px] font-bold text-[#24160C] tabular-nums">
              Contoh 2:{" "}
              <span className="text-[#9A5200] underline decoration-2 underline-offset-4">
                20
              </span>
              , 17, 14, 11, …
            </p>
            <p className="text-[18px] text-[#24160C]">
              <span className="font-bold text-[#9A5200]">a = 20</span>,{" "}
              <span className="font-bold text-[#1E5631]">b = −3</span>{" "}
              (berkurang 3)
            </p>
          </div>

          {/* Contoh 3 */}
          <div className="rounded-xl bg-[#FCECEC] border border-[#B91C1C]/40 p-4 space-y-1.5">
            <p className="text-[18px] font-bold text-[#24160C] tabular-nums">
              Contoh 3: 2, 4, 8, 16, …
            </p>
            <p className="text-[18px] text-[#7F1D1D] font-medium leading-snug">
              BUKAN barisan aritmetika karena selisihnya tidak tetap (2, 4, 8).
            </p>
          </div>
        </div>
      </div>

      {/* Navigasi */}
      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
        <button
          type="button"
          onClick={onBack}
          className="min-h-[50px] px-6 py-3 rounded-xl bg-[#4A2E1A] hover:bg-[#5E3C23] border-2 border-[#C89B54]/60 text-[#FDF8EE] font-semibold text-[18px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C14E]"
        >
          Kembali
        </button>

        <button
          type="button"
          onClick={onStartMission}
          className="min-h-[52px] px-8 py-3 rounded-xl bg-[#D99B26] hover:bg-[#E7AA33] active:scale-[0.98] text-[#1E1108] font-bold text-[18px] shadow-[0_4px_0_#8C5808] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FDF8EE]"
        >
          {hasActiveProgress
            ? `Lanjut Misi ${activeMissionNumber}`
            : "Mulai Misi 1"}
        </button>
      </div>
    </section>
  );
};
