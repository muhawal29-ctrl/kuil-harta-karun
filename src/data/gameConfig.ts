// ============================================================================
// KONFIGURASI GURU & DATA GAME "KUIL HARTA KARUN"
// Guru dapat mengubah identitas, link video, dan daftar soal langsung di file ini.
// ============================================================================

/**
 * URL Video Penjelasan Materi (YouTube atau tautan video lain).
 * Kosongkan ("") jika tombol "Tonton Video Penjelasan" ingin disembunyikan.
 */
export const VIDEO_URL = "";

/**
 * Identitas Guru, Sekolah, dan Pembelajaran.
 */
export const TEACHER_INFO = {
  judulGame: "Kuil Harta Karun",
  namaGuru: "Sartika, S.Pd",
  sekolah: "SMKN 6 Palopo",
  mataPelajaran: "Matematika",
  fase: "Fase F",
  kelas: "Kelas XI TKJ",
  kkm: 70,
  tujuanPembelajaran: "Menjelaskan konsep barisan aritmetika beserta unsur-unsurnya.",
  tindakLanjut:
    "Tanyakan bagian yang masih sulit kepada gurumu atau diskusikan di kelas.",
};

export interface QuestionOption {
  id: string;
  text: string;
}

export interface MissionQuestion {
  id: string;
  prompt: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  wrongHint: string;
}

export interface MissionData {
  id: number;
  title: string;
  subtitle: string;
  questions: MissionQuestion[];
}

/**
 * DATA MISI DAN SOAL
 * Terdiri dari 3 Misi bertahap, masing-masing 2 soal (total 6 soal).
 */
export const MISSIONS: MissionData[] = [
  {
    id: 1,
    title: "Misi 1",
    subtitle: "Mengenali Barisan Aritmetika",
    questions: [
      {
        id: "m1-q1",
        prompt: "Manakah yang merupakan barisan aritmetika?",
        options: [
          { id: "opt-1", text: "2, 4, 8, 16, …" },
          { id: "opt-2", text: "3, 7, 11, 15, …" },
          { id: "opt-3", text: "1, 4, 9, 16, …" },
          { id: "opt-4", text: "2, 3, 5, 8, …" },
        ],
        correctOptionId: "opt-2",
        explanation:
          "Selisih tiap suku pada barisan 3, 7, 11, 15, … selalu tetap 4 (7 − 3 = 4, 11 − 7 = 4, 15 − 11 = 4), sedangkan pilihan lain selisihnya berubah-ubah.",
        wrongHint:
          "Hitung selisih suku ke-2 dikurangi suku ke-1, lalu suku ke-3 dikurangi suku ke-2. Barisan aritmetika memiliki selisih yang selalu sama.",
      },
      {
        id: "m1-q2",
        prompt: "Barisan 20, 17, 14, 11, … memiliki beda berapa?",
        options: [
          { id: "opt-1", text: "3" },
          { id: "opt-2", text: "−3" },
          { id: "opt-3", text: "17" },
          { id: "opt-4", text: "−20" },
        ],
        correctOptionId: "opt-2",
        explanation:
          "b = 17 − 20 = −3, dan 14 − 17 = −3, jadi bedanya tetap −3 (barisan berkurang 3).",
        wrongHint:
          "Gunakan rumus b = U2 − U1 (suku kedua dikurangi suku pertama). Perhatikan tanda positif atau negatif karena bilangannya menurun.",
      },
    ],
  },
  {
    id: 2,
    title: "Misi 2",
    subtitle: "Menentukan Suku Pertama (a) dan Beda (b)",
    questions: [
      {
        id: "m2-q1",
        prompt:
          "Pada barisan 5, 9, 13, 17, …, berapakah suku pertama (a) dan beda (b)?",
        options: [
          { id: "opt-1", text: "a = 5, b = 4" },
          { id: "opt-2", text: "a = 5, b = 9" },
          { id: "opt-3", text: "a = 4, b = 5" },
          { id: "opt-4", text: "a = 9, b = 4" },
        ],
        correctOptionId: "opt-1",
        explanation: "a adalah suku pertama = 5; b = 9 − 5 = 4.",
        wrongHint:
          "Suku pertama (a) adalah angka paling depan pada barisan. Lalu hitung b = U2 − U1.",
      },
      {
        id: "m2-q2",
        prompt: "Pada barisan 12, 9, 6, 3, …, berapakah a dan b?",
        options: [
          { id: "opt-1", text: "a = 12, b = 3" },
          { id: "opt-2", text: "a = 12, b = −3" },
          { id: "opt-3", text: "a = 3, b = −3" },
          { id: "opt-4", text: "a = −3, b = 12" },
        ],
        correctOptionId: "opt-2",
        explanation: "a = 12 (suku pertama); b = 9 − 12 = −3.",
        wrongHint:
          "Angka paling awal adalah a. Karena barisan turun dari 12 ke 9, hitunglah 9 − 12 untuk mendapatkan b.",
      },
    ],
  },
  {
    id: 3,
    title: "Misi 3",
    subtitle: "Melengkapi Pola Bilangan",
    questions: [
      {
        id: "m3-q1",
        prompt: "Lengkapi barisan aritmetika: 4, 9, 14, …, 24",
        options: [
          { id: "opt-1", text: "17" },
          { id: "opt-2", text: "18" },
          { id: "opt-3", text: "19" },
          { id: "opt-4", text: "20" },
        ],
        correctOptionId: "opt-3",
        explanation:
          "b = 9 − 4 = 5, sehingga suku setelah 14 adalah 14 + 5 = 19 (cek: 19 + 5 = 24).",
        wrongHint:
          "Cari beda dahulu dengan 9 − 4, lalu tambahkan beda tersebut ke bilangan 14.",
      },
      {
        id: "m3-q2",
        prompt: "Lengkapi barisan aritmetika: 30, 26, 22, …, 14",
        options: [
          { id: "opt-1", text: "16" },
          { id: "opt-2", text: "18" },
          { id: "opt-3", text: "20" },
          { id: "opt-4", text: "19" },
        ],
        correctOptionId: "opt-2",
        explanation:
          "b = 26 − 30 = −4, sehingga suku setelah 22 adalah 22 − 4 = 18 (cek: 18 − 4 = 14).",
        wrongHint:
          "Hitung b = 26 − 30. Karena hasilnya negatif, kurangi 22 dengan selisihnya dan cek apakah suku berikutnya menjadi 14.",
      },
    ],
  },
];

export const TOTAL_QUESTIONS = MISSIONS.reduce(
  (sum, mission) => sum + mission.questions.length,
  0
);
