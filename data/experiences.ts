export type Experience = {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  image: string | null;
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'PT BADIUZZAMAN CIPTA AMANI',
    role: 'MAGANG | ASISTEN MANAJER',
    period: '25 Juni 2025 - 15 Agustus 2025',
    description: [
      'Melakukan monitoring terhadap beberapa cabang bisnis yang sedang dikembangkan.',
      'Membantu dalam menangani pekerjaan lain ketika karyawan terkait berhalangan hadir',
      'Terlibat dalam proses pembukaan cabang bisnis baru.',
      'Melakukan koordinasi dengan pihak vendor dalam pengadaan barang untuk pembukaan cabang bisnis baru',
    ],
    image: '/experiences/company-1.png',
  },
  {
    id: 2,
    company: 'BRAWIJAYA SUKABUMI (RAJABUMI)',
    role: 'STAFF SOSMA',
    period: '2024 - 2025',
    description: [
      'Melakukan koordinasi dengan pihak tempat dalam sebuah acara/kegiatan yang diadakan oleh Rajabumi. ',
    ],
    image: null,
  },
  {
    id: 3,
    company: 'KEPANITIAAN RAJABUMI GOES TO SCHOOL (RGTS) 2025',
    role: 'STAFF FUNDRAISING',
    period: '14 Desember 2024 - 13 Februari 2025',
    description: [
      'Melakukan koordinasi dengan supplier untuk pengadaan dan restock merchandise secara berkala.',
      'Menyusun laporan hasil fundraising dan menyampaikannya kepada ketua divisi fundraising dan pihak terkait. ',
      'Bertanggung jawab atas keseluruhan pencatatan dan pengelolaan penjualan merchandise fundraising.',
      'Berpartisipasi dalam promosi kampus kepada siswa sekolah serta membantu penjualan merchandise dalam kegiatan fundraising.',
    ],
    image: null,
  },
  {
    id: 4,
    company: 'KEPANITIAAN RAJABUMI GOES TO SCHOOL (RGTS) 2026',
    role: 'STAFF FUNDRAISING',
    period: '6 Desember 2025 - 17 Februari 2026',
    description: [
      'Melakukan koordinasi dengan supplier untuk pengadaan dan restock merchandise secara berkala.',
      'Menyusun laporan hasil fundraising dan menyampaikannya kepada ketua divisi  fundraising dan pihak terkait.',
      'Berpartisipasi dalam promosi kampus kepada siswa sekolah serta membantu penjualan merchandise dalam kegiatan fundraising.',
    ],
    image: null,
  },
];