// ============================================================
// data.ts — Mock data untuk Dashboard Operasional Klinik
// Semua data terpusat di sini agar mudah diganti dengan API
// ============================================================

export interface Patient {
  noAntrian: string;
  nama: string;
  noRM: string;
  stasiun: "Loket" | "Dokter" | "Farmasi" | "Selesai";
  status:
    | "Terdaftar"
    | "Di Loket"
    | "Menunggu Dokter"
    | "Di Dokter"
    | "Di Farmasi"
    | "Selesai";
  waktuMasuk: string;
}

export interface KpiData {
  pasienHariIni: number;
  rataWaktuSistem: number;
  rataWaktuSebelum: number;
  antrianAktif: number;
  throughput: number;
  satuSehatStatus: "Tersinkron" | "Gagal" | "Sinkronisasi...";
  satuSehatLastSync: string;
}

export interface StasiunAntrian {
  nama: string;
  label: string;
  mengantri: number;
  sedangDilayani: string | null;
  rataWaktuLayan: string;
  catatan: string;
}

export interface DampakItem {
  aspek: string;
  sebelum: string;
  sesudah: string;
  ikon: string; // lucide icon name
}

// --- KPI ---
export const kpiData: KpiData = {
  pasienHariIni: 53,
  rataWaktuSistem: 30,
  rataWaktuSebelum: 87,
  antrianAktif: 8,
  throughput: 6,
  satuSehatStatus: "Tersinkron",
  satuSehatLastSync: "2 menit lalu",
};

// --- Antrian Stasiun ---
export const stasiunAntrian: StasiunAntrian[] = [
  {
    nama: "loket",
    label: "Loket Pendaftaran",
    mengantri: 3,
    sedangDilayani: "Ny. Kartini",
    rataWaktuLayan: "5,1 mnt",
    catatan: "tanpa cari berkas fisik",
  },
  {
    nama: "dokter",
    label: "Pemeriksaan Dokter",
    mengantri: 2,
    sedangDilayani: "Tn. Ahmad Fauzi",
    rataWaktuLayan: "7,3 mnt",
    catatan: "template RME otomatis",
  },
  {
    nama: "farmasi",
    label: "Farmasi & Obat",
    mengantri: 3,
    sedangDilayani: "Ny. Siti Aminah",
    rataWaktuLayan: "5,0 mnt",
    catatan: "e-resep langsung",
  },
];

// --- Pasien Hari Ini ---
export const pasienHariIni: Patient[] = [
  {
    noAntrian: "A-001",
    nama: "Tn. Sukarya Wijaya",
    noRM: "RM-2024-0892",
    stasiun: "Dokter",
    status: "Di Dokter",
    waktuMasuk: "07:32",
  },
  {
    noAntrian: "A-002",
    nama: "Ny. Kartini",
    noRM: "RM-2024-1204",
    stasiun: "Loket",
    status: "Di Loket",
    waktuMasuk: "07:45",
  },
  {
    noAntrian: "A-003",
    nama: "Tn. Ahmad Fauzi",
    noRM: "RM-2024-0567",
    stasiun: "Dokter",
    status: "Menunggu Dokter",
    waktuMasuk: "07:58",
  },
  {
    noAntrian: "A-004",
    nama: "Ny. Siti Aminah",
    noRM: "RM-2024-0341",
    stasiun: "Farmasi",
    status: "Di Farmasi",
    waktuMasuk: "08:05",
  },
  {
    noAntrian: "A-005",
    nama: "Tn. Bambang Supriadi",
    noRM: "RM-2024-1087",
    stasiun: "Selesai",
    status: "Selesai",
    waktuMasuk: "08:12",
  },
  {
    noAntrian: "A-006",
    nama: "Ny. Dewi Rahayu",
    noRM: "RM-2024-0723",
    stasiun: "Loket",
    status: "Terdaftar",
    waktuMasuk: "08:20",
  },
  {
    noAntrian: "A-007",
    nama: "Tn. Hendra Wijaya",
    noRM: "RM-2024-0456",
    stasiun: "Farmasi",
    status: "Di Farmasi",
    waktuMasuk: "08:28",
  },
  {
    noAntrian: "A-008",
    nama: "Ny. Ratna Sari",
    noRM: "RM-2024-1155",
    stasiun: "Dokter",
    status: "Menunggu Dokter",
    waktuMasuk: "08:35",
  },
];

// --- Dampak Digitalisasi ---
export const dampakDigitalisasi: DampakItem[] = [
  {
    aspek: "Pencarian Rekam Medis",
    sebelum: "~3 menit (manual)",
    sesudah: "Instan (digital)",
    ikon: "FileSearch",
  },
  {
    aspek: "Dokumentasi Dokter",
    sebelum: "Manual (tulis tangan)",
    sesudah: "Template RME otomatis",
    ikon: "FileText",
  },
  {
    aspek: "Resep Obat",
    sebelum: "Kertas (manual)",
    sesudah: "e-Resep SatuSehat",
    ikon: "Pill",
  },
];

// --- Data pencarian pasien mock ---
export const daftarPasienLengkap = [
  { nama: "Tn. Sukarya Wijaya", nik: "3209xxxx0001", noRM: "RM-2024-0892" },
  { nama: "Ny. Kartini", nik: "3209xxxx0002", noRM: "RM-2024-1204" },
  { nama: "Tn. Ahmad Fauzi", nik: "3209xxxx0003", noRM: "RM-2024-0567" },
  { nama: "Ny. Siti Aminah", nik: "3209xxxx0004", noRM: "RM-2024-0341" },
  {
    nama: "Tn. Bambang Supriadi",
    nik: "3209xxxx0005",
    noRM: "RM-2024-1087",
  },
  { nama: "Ny. Dewi Rahayu", nik: "3209xxxx0006", noRM: "RM-2024-0723" },
  { nama: "Tn. Hendra Wijaya", nik: "3209xxxx0007", noRM: "RM-2024-0456" },
  { nama: "Ny. Ratna Sari", nik: "3209xxxx0008", noRM: "RM-2024-1155" },
  { nama: "Tn. Dedi Mulyadi", nik: "3209xxxx0009", noRM: "RM-2024-0290" },
  { nama: "Ny. Rina Marlina", nik: "3209xxxx0010", noRM: "RM-2024-0631" },
];
