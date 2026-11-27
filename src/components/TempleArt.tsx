import React from "react";

/**
 * Logo sederhana: gerbang kuil + kunci emas (tampil di Beranda dan Penutup)
 */
export const LogoMark: React.FC<{ className?: string }> = ({
  className = "w-14 h-14",
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Atap & Pilar Gerbang Kuil */}
    <path d="M8 22L32 8L56 22H8Z" fill="#D99B26" />
    <path d="M12 22H52V26H12V22Z" fill="#B47812" />
    <rect x="14" y="26" width="8" height="28" rx="1.5" fill="#8C5A2B" />
    <rect x="42" y="26" width="8" height="28" rx="1.5" fill="#8C5A2B" />
    <rect x="10" y="52" width="44" height="6" rx="2" fill="#5C3A1E" />
    {/* Lengkungan pintu gelap */}
    <path
      d="M23 52V35C23 30.0294 27.0294 26 32 26C36.9706 26 41 30.0294 41 35V52H23Z"
      fill="#2B1A0E"
    />
    {/* Kunci Emas di tengah gerbang */}
    <circle cx="32" cy="35" r="5" fill="#F2C14E" stroke="#8C5A2B" strokeWidth="1.5" />
    <circle cx="32" cy="35" r="2" fill="#2B1A0E" />
    <rect x="30.5" y="39" width="3" height="10" rx="1" fill="#F2C14E" />
    <rect x="33" y="44" width="3.5" height="2.2" rx="0.8" fill="#F2C14E" />
    <rect x="33" y="47.2" width="2.5" height="2" rx="0.8" fill="#F2C14E" />
  </svg>
);

/**
 * Ikon Kunci Emas (terisi / kosong) untuk indikator kemajuan misi & hadiah
 */
export const GoldenKeyIcon: React.FC<{
  filled?: boolean;
  className?: string;
}> = ({ filled = true, className = "w-7 h-7" }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle
      cx="11.5"
      cy="18"
      r="7"
      fill={filled ? "#F2C14E" : "#5C4028"}
      stroke={filled ? "#9A6208" : "#8C6B4A"}
      strokeWidth="2.2"
    />
    <circle
      cx="11.5"
      cy="18"
      r="2.6"
      fill={filled ? "#78490A" : "#3B2616"}
    />
    <rect
      x="18"
      y="16"
      width="13"
      height="4"
      rx="1.5"
      fill={filled ? "#F2C14E" : "#5C4028"}
      stroke={filled ? "#9A6208" : "#8C6B4A"}
      strokeWidth="1.5"
    />
    <rect
      x="24"
      y="20"
      width="2.6"
      height="4.2"
      rx="0.8"
      fill={filled ? "#F2C14E" : "#5C4028"}
    />
    <rect
      x="28"
      y="20"
      width="2.6"
      height="5.2"
      rx="0.8"
      fill={filled ? "#F2C14E" : "#5C4028"}
    />
  </svg>
);

/**
 * Ikon Centang untuk jawaban benar
 */
export const CheckBadgeIcon: React.FC<{ className?: string }> = ({
  className = "w-12 h-12",
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="24" cy="24" r="21" fill="#2E7D32" stroke="#1B5E20" strokeWidth="3" />
    <path
      d="M14.5 24.5L21 31L34 17.5"
      stroke="#FFFFFF"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Ikon Peta Kuno untuk petunjuk / jawaban belum tepat
 */
export const MapScrollIcon: React.FC<{ className?: string }> = ({
  className = "w-12 h-12",
}) => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Gulungan Peta */}
    <rect
      x="8"
      y="12"
      width="40"
      height="32"
      rx="4"
      fill="#FDF3DC"
      stroke="#9A5B13"
      strokeWidth="2.8"
    />
    <rect x="6" y="10" width="7" height="36" rx="3.5" fill="#D99B26" stroke="#8C530A" strokeWidth="2" />
    <rect x="43" y="10" width="7" height="36" rx="3.5" fill="#D99B26" stroke="#8C530A" strokeWidth="2" />
    {/* Garis rute putus-putus */}
    <path
      d="M17 34C21 26 26 32 30 24C32 20 35 20 37 21"
      stroke="#C25912"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeDasharray="4 4"
    />
    {/* Tanda X lokasi harta */}
    <path
      d="M34 18L40 24M40 18L34 24"
      stroke="#B91C1C"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Ilustrasi Gerbang Kuil + Peti Harta Karun untuk Beranda
 */
export const TempleGateChestHero: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[290px] sm:max-w-[330px] h-auto",
}) => (
  <svg
    viewBox="0 0 320 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Ilustrasi gerbang kuil kuno dengan peti harta karun dan lumut hijau"
    role="img"
  >
    {/* Cahaya keemasan di belakang gerbang */}
    <ellipse cx="160" cy="122" rx="115" ry="76" fill="#F2C14E" fillOpacity="0.16" />

    {/* Tangga kuil */}
    <rect x="34" y="190" width="252" height="16" rx="4" fill="#5A3921" />
    <rect x="48" y="176" width="224" height="14" rx="3" fill="#70482A" />

    {/* Pilar kiri & kanan */}
    <rect x="66" y="68" width="32" height="108" rx="3" fill="#8D5E38" stroke="#5A3921" strokeWidth="2.5" />
    <rect x="222" y="68" width="32" height="108" rx="3" fill="#8D5E38" stroke="#5A3921" strokeWidth="2.5" />
    {/* Detail batu pilar */}
    <line x1="66" y1="102" x2="98" y2="102" stroke="#5A3921" strokeWidth="2" />
    <line x1="66" y1="138" x2="98" y2="138" stroke="#5A3921" strokeWidth="2" />
    <line x1="222" y1="102" x2="254" y2="102" stroke="#5A3921" strokeWidth="2" />
    <line x1="222" y1="138" x2="254" y2="138" stroke="#5A3921" strokeWidth="2" />

    {/* Atap segitiga kuil */}
    <path d="M40 62L160 16L280 62H40Z" fill="#D99B26" stroke="#7A4E0B" strokeWidth="3" strokeLinejoin="round" />
    <path d="M56 62H264V74H56V62Z" fill="#B47812" stroke="#7A4E0B" strokeWidth="2.5" />
    {/* Ornamen segitiga dalam */}
    <path d="M96 54L160 28L224 54H96Z" fill="#F2C14E" />

    {/* Lumut hijau di sudut atap & pilar */}
    <path d="M62 62C66 72 78 72 82 62H62Z" fill="#4E7A52" />
    <path d="M238 62C242 74 256 74 260 62H238Z" fill="#4E7A52" />
    <circle cx="70" cy="172" r="7" fill="#3A5F3E" />
    <circle cx="80" cy="174" r="5" fill="#4E7A52" />
    <circle cx="244" cy="173" r="6.5" fill="#3A5F3E" />

    {/* Gerbang lengkung dalam */}
    <path
      d="M108 176V115C108 86.2812 131.281 63 160 63C188.719 63 212 86.2812 212 115V176H108Z"
      fill="#26160B"
    />

    {/* Peti Harta Karun di tengah gerbang */}
    <g transform="translate(116, 118)">
      {/* Badan peti */}
      <rect x="6" y="24" width="76" height="34" rx="5" fill="#8B4A1E" stroke="#47220B" strokeWidth="3" />
      {/* Tutup peti */}
      <path
        d="M4 24C4 12 14 6 44 6C74 6 84 12 84 24H4Z"
        fill="#A45A28"
        stroke="#47220B"
        strokeWidth="3"
      />
      {/* Sabuk emas peti */}
      <rect x="18" y="8" width="10" height="50" fill="#F2C14E" stroke="#7A4E0B" strokeWidth="1.5" />
      <rect x="60" y="8" width="10" height="50" fill="#F2C14E" stroke="#7A4E0B" strokeWidth="1.5" />
      {/* Gembok emas di tengah */}
      <rect x="37" y="21" width="14" height="16" rx="3" fill="#F2C14E" stroke="#7A4E0B" strokeWidth="2" />
      <circle cx="44" cy="28" r="2.2" fill="#47220B" />
      <rect x="43" y="29" width="2" height="4" fill="#47220B" />
    </g>
  </svg>
);

/**
 * Animasi Peti Harta Karun Terbuka dengan 3 Kunci di atasnya (Halaman 6)
 */
export const TreasureChestAnimated: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[260px] h-auto",
}) => (
  <svg
    viewBox="0 0 260 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Animasi peti harta karun terbuka dengan tiga kunci emas bercahaya"
    role="img"
  >
    {/* Cahaya harta karun */}
    <ellipse
      cx="130"
      cy="108"
      rx="92"
      ry="54"
      fill="#F2C14E"
      fillOpacity="0.32"
      className="animate-treasure-glow"
    />

    {/* 3 Kunci Emas melayang di atas peti */}
    <g transform="translate(52, 16)" className="animate-float-slow">
      <GoldenKeyIcon filled className="w-10 h-10" />
    </g>
    <g transform="translate(110, 4)" className="animate-float-slow">
      <GoldenKeyIcon filled className="w-11 h-11" />
    </g>
    <g transform="translate(168, 16)" className="animate-float-slow">
      <GoldenKeyIcon filled className="w-10 h-10" />
    </g>

    {/* Tumpukan koin emas di dalam peti */}
    <ellipse cx="130" cy="112" rx="64" ry="20" fill="#F2C14E" stroke="#9A6208" strokeWidth="2.5" />
    <circle cx="96" cy="106" r="10" fill="#FFD966" stroke="#9A6208" strokeWidth="2" />
    <circle cx="118" cy="100" r="11" fill="#F2C14E" stroke="#9A6208" strokeWidth="2" />
    <circle cx="142" cy="102" r="11" fill="#FFD966" stroke="#9A6208" strokeWidth="2" />
    <circle cx="164" cy="108" r="10" fill="#F2C14E" stroke="#9A6208" strokeWidth="2" />

    {/* Tutup peti terbuka (beranimasi) */}
    <g className="animate-chest-lid">
      <path
        d="M48 98C48 76 68 64 130 64C192 64 212 76 212 98H48Z"
        fill="#A45A28"
        stroke="#47220B"
        strokeWidth="3.5"
      />
      <rect x="74" y="66" width="14" height="32" fill="#F2C14E" stroke="#7A4E0B" strokeWidth="2" />
      <rect x="172" y="66" width="14" height="32" fill="#F2C14E" stroke="#7A4E0B" strokeWidth="2" />
    </g>

    {/* Badan bawah peti */}
    <rect
      x="50"
      y="112"
      width="160"
      height="64"
      rx="8"
      fill="#8B4A1E"
      stroke="#47220B"
      strokeWidth="3.5"
    />
    <rect x="74" y="112" width="14" height="64" fill="#F2C14E" stroke="#7A4E0B" strokeWidth="2" />
    <rect x="172" y="112" width="14" height="64" fill="#F2C14E" stroke="#7A4E0B" strokeWidth="2" />
    {/* Pelat kunci depan */}
    <rect x="118" y="110" width="24" height="24" rx="5" fill="#F2C14E" stroke="#7A4E0B" strokeWidth="2.5" />
    <circle cx="130" cy="120" r="3.2" fill="#47220B" />
    <rect x="128.5" y="122" width="3" height="6" fill="#47220B" />
  </svg>
);
