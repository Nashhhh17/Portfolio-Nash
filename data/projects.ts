export type ProjectSection = {
  heading: string;
  paragraphs: string[];
};

export type Project = {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  tech_stack: string;
  github_url: string | null;
  live_url: string | null;
  role?: string | null;
  year?: string | number | null;
  sections?: ProjectSection[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'WEBSITE YUNARA',
    description: null,
    image: '/projects/yunara.png',
    tech_stack: 'Php, CSS, Javascript, MySQL',
    github_url: 'https://github.com/Nashhhh17/dashboard_yunara',
    live_url: null,
    role: 'Frontend Developer',
    year: 2024,
    sections: [
      {
        heading: 'LATAR BELAKANG',
        paragraphs: [
          'Website platform kesehatan berbasis online, di mana pengguna dapat berkonsultasi secara langsung dengan tenaga medis tanpa harus datang ke fasilitas kesehatan secara fisik. Platform ini dirancang untuk memudahkan masyarakat umum dalam mendapatkan diagnosis awal, saran medis, hingga pembelian obat berdasarkan resep dokter secara online.',
        ],
      },
      {
        heading: 'IDENTIFIKASI MASALAH',
        paragraphs: [
          '1) Sulitnya mengakses layanan kesehatan secara langsung, terutama bagi masyarakat yang tinggal di daerah terpencil atau memiliki keterbatasan mobilitas.',
          '2) Tidak memungkinkan dalam mendatangi layanan kesehatan secara langsung karena sakit yang dialami cukup parah.',
          '3) Keinginan untuk berkonsultasi kepada tenaga medis, tetapi enggan untuk mengantre di rumah sakit/puskesmas terdekat.',
        ],
      },
      {
        heading: 'SOLUSI YANG DITAWARKAN',
        paragraphs: [
          'Untuk mengatasi semua permasalahan tersebut, kami menghadirkan solusi dengan mengembangkan web aplikasi YUNARA sehingga pengguna dapat melakukan beberapa hal seperti:',
          '1) Melakukan konsultasi secara online dengan dokter umum maupun spesialis yang sudah tersertifikasi.',
          '2) Mendapatkan edukasi kesehatan dari dokter secara langsung maupun dari artikel-artikel yang telah dipublikasikan.',
          '3) Mendapatkan resep obat dari dokter setelah berkonsultasi, serta dapat membelinya secara online maupun layanan kesehatan terdekat.'
        ],
      },
      {
        heading: 'FITUR UTAMA',
        paragraphs: [
          '1) Konsultasi Chat Dokter secara Online',
          '2) Rekam Medis Pengguna',
          '3) Toko Online untuk Pembelian Obat'
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'MOTIFY-APP',
    description: null,
    image: '/projects/motify.png',
    tech_stack: 'Dart, Firebase, Flutter',
    github_url: 'https://github.com/me-dav/Motify-App',
    live_url: null,
    role: 'Full-Stack Developer & UI/UX Design',
    year: 2025,
    sections: [
      {
        heading: 'LATAR BELAKANG',
        paragraphs: [
          'Aplikasi mobile untuk pelacakan servis sepeda motor yang membantu pengguna mengelola jadwal perawatan kendaraan, dibuat sebagai proyek akhir mata kuliah Pemrograman Mobile. Aplikasi ini berfokus pada penyederhanaan pengingat servis dan manajemen kendaraan melalui UI yang bersih dan modern.',
        ],
      },
      {
        heading: 'IDENTIFIKASI MASALAH',
        paragraphs: [
          '1) Pengguna cenderung mengandalkan perkiraan atau ingatan pribadi untuk jadwal servis, sehingga telat atau bahkan lupa servis.',
          '2) Banyak pengguna kendaraan tidak mengetahui secara pasti kapan waktu yang tepat untuk mengganti oli, kampas rem, atau komponen lain karena tidak ada pencatatan yang konsisten.',
          '3) Tidak adanya pengingat otomatis membuat kerusakan komponen sering diketahui setelah muncul gejala pada motor.',
          '4) Interval servis tiap komponen yang berbeda-beda, sehingga sulit dipantau manual satu per satu.',
          '5) Pengguna yang memiliki lebih dari satu kendaraan kesulitan mengelola jadwal servis masing-masing kendaraan secara terpisah dan bersamaan.',
        ],
      },
      {
        heading: 'SOLUSI YANG DITAWARKAN',
        paragraphs: [
          'Untuk mengatasi semua permasalahan tersebut, kami menghadirkan Aplikasi Mobile Motify-App, sehingga pengguna dapat melakukan beberapa hal seperti:',
          '1) Memantau jadwal servis kendaraan secara otomatis berdasarkan kilometer, tanpa perlu mengandalkan perkiraan atau ingatan pribadi',
          '2) Mengetahui secara pasti kapan waktu yang tepat untuk mengganti komponen-komponen pada motor melalui indikator persentase kondisi secara real-time',
          '3) Mendapatkan peringatan dini bertingkat (Aman, Waspada, Bahaya) sebelum kerusakan komponen benar-benar terjadi, sehingga dapat melakukan tindak pencegahan lebih awal',
          '4) Memantau status setiap komponen kendaraan secara otomatis dalam satu dashboard, tanpa perlu menghitung manual interval servis satu per satu',
          '5) Mengelola dan memantau jadwal servis lebih dari satu kendaraan secara terpisah dalam satu akun, tanpa ada data yang tercampur',
        ],
      },
      {
        heading: 'FITUR UTAMA',
        paragraphs: [
          '1) Autentikasi Pengguna',
          '2) Manajemen Kendaraan',
          '3) Input & Update Kilometer',
          '4) Monitoring Status Komponen',
          '5) Indikator Status Bertingkat',
          '6) Notifikasi/Pengingat',
          '7) Riwayat Servis',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'WEBSITE DAPUR BOSKI',
    description: null,
    image: '/projects/dapur-boski.png',
    tech_stack: 'Php, CSS, Javascript, Laravel',
    github_url: 'https://github.com/Rafliraihan87/dapur-boski',
    live_url: null,
    role: 'Full-Stack Developer & UI/UX Design',
    year: 2025,
    sections: [
      {
        heading: 'LATAR BELAKANG',
        paragraphs: [
          'Platform katering modern berbasis aplikasi website yang dirancang untuk memudahkan pelanggan memesan untuk berbagai acara, mulai dari kebutuhan harian, kantor, hingga perayaan.',
        ],
      },
      {
        heading: 'IDENTIFIKASI MASALAH',
        paragraphs: [
          '1) Usaha katering masih mengandalkan promosi dari mulut ke mulut atau Whatsapp saja, sehingga jangkauan pasar terbatas.',
          '2) Belum adanya media informasi resmi yang dapat menampilkan menu, harga, dan paket katering secara lengkap dan terstruktur.',
          '3) Proses pemesanan masih dilakukan manual via chat/telpon, sehingga rawan terjadinya miskomunikasi.',
          '4) Data pesanan, pelanggan, dan keuangan masih dicatat secara manual, sehingga rawan hilang atau human error.',
          '5) Pelanggan tidak dapat melacak status pesanan (diproses, dikirim, selesai).',          
        ],
      },
      {
        heading: 'SOLUSI YANG DITAWARKAN',
        paragraphs: [
          'Untuk mengatasi semua permasalahan tersebut, kami menghadirkan Platform Katering Online Dapur Boski berbasis Aplikasi Website, sehingga pengguna dapat melakukan beberapa hal seperti:',
          '1) Melihat Seluruh Informasi Harga dan Menu Katering Dapur Boski secara lengkap dan terstruktur',
          '2) Melihat Informasi Menu Berdasarkan Kategori',
          '3) Melakukan pemesanan secara Online yang kemudian tercatat di Sistem',
          '4) Melacak status pesanan dari menu yang dipesan',
          '5) Owner tidak perlu mencatat pesanan pelanggan secara manual dan tinggal melihat daftar pesanan sesuai antrian'
        ],
      },
      {
        heading: 'FITUR UTAMA',
        paragraphs: [
          '1) Halaman Informasi dan Katalog',
          '2) Pemesanan Online',
          '3) Pembayaran',
          '4) Tracking dan Riwayat Pesanan',
          '5) Testimoni/Ulasan dari Pelanggan',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'COIN CASH INVESTMENT (COCAINE)',
    description: null,
    image: '/projects/cocaine.png',
    tech_stack: 'Php, Javascript, CSS, Arduino, Laravel',
    github_url: 'https://github.com/arsaaja/cocaine-cc',
    live_url: null,
    role: 'Full-Stack Developer & Hardware Engineer',
    year: 2024,
    sections: [
      {
        heading: 'LATAR BELAKANG',
        paragraphs: [
          'Sistem Celengan Pintar berbasis Internet of Things (IoT) yang mampu mengidentifikasi nominal uang koin dan kertas secara otomatis menggunakan Sensor InfraRed dan Sensor TCS34725 yang dikendalikan oleh Mikrokontroler ESP32 dan diintegrasikan dengan Dashboard Website.',
        ],
      },
      {
        heading: 'IDENTIFIKASI MASALAH',
        paragraphs: [
          '1) Rendahnya tingkat keamanan pada celengan konvensional.',
          '2) Tidak dapat memantau jumlah saldo uang secara real-time pada celengan konvensional tanpa merusak fisik celengan.',
          '3) Rendahnya motivasi untuk menabung.',
          '4) Minimnya tindakan pencegahan ketika uang maupun fisik celengan akan dicuri oleh orang lain',
        ],
      },
      {
        heading: 'SOLUSI YANG DITAWARKAN',
        paragraphs: [
          'Untuk mengatasi semua permasalaham tersebut, kami menghadirkan Sitem Celengan Pintar Coin Cash Investment (COCAINE), sehingga pengguna dapat melakukan beberapa hal seperti:',
          '1) Memantau jumlah saldo pada celengan secara real-time, baik melalui layar OLED maupun Dashboard Website.',
          '2) Mengetahui lokasi fisik Celengan secara real-time yang ditampilkan di Dashboard Website.',
          '3) Mendapatkan fitur keamanan tambahan berupa Akses Kartu RFID untuk membuka celengan, sehingga hanya pemilik yang dapat mengakses isi celengan.',
          '4) Mendapatkan informasi berupa log aktivitas ketika ada anomali yang terjadi pada celengan.',
          '5) Dapat menambahkan target tabungan yang ingin dicapai, sehingga pengguna dapat memantau progres tabungan secara berkala.',
        ],
      },
      {
        heading: 'FITUR UTAMA',
        paragraphs: [
          '1) Monitoring Saldo Secara Real-Time',
          '2) Klasifikasi Jenis dan Jumlah Uang yang Dimasukkan',
          '3) Grafik Progres Saldo Celengan',
          '4) Keamanan Tambahan berupa RFID, Buzzer, dan GPS',
          '5) Target Tabungan',
        ],
      }
    ],
  },
];