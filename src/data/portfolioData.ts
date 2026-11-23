import heroStudioImg from '../assets/images/hero_engineer_studio_1795148152136.jpg';
import projectCloudImg from '../assets/images/project_cloud_mesh_1795148151157.jpg';
import projectLedgerImg from '../assets/images/project_ledger_system_1795148151003.jpg';
import projectCollabImg from '../assets/images/project_collab_canvas_1795148151825.jpg';
import projectEdgeImg from '../assets/images/project_edge_commerce_1795148151599.jpg';
import type {PortfolioConfig} from '../types/portfolio';

/**
 * CENTRALIZED PORTFOLIO CONTENT — HELMI HAKIMUDIN
 * All profile details, projects, skill-tree progression, experience,
 * certifications, and social links are managed from this single file.
 */
export const PORTFOLIO_DATA: PortfolioConfig = {
  profile: {
    name: 'Helmi Hakimudin',
    role: {
      en: 'Software Engineer · Full-Stack Web Developer',
      id: 'Software Engineer · Full-Stack Web Developer',
    },
    location: {
      en: 'Jakarta, Indonesia',
      id: 'Jakarta, Indonesia',
    },
    headline: {
      en: 'Crafting custom web applications, real-time systems, and scalable full-stack solutions.',
      id: 'Membangun aplikasi web kustom, sistem real-time, dan solusi full-stack yang terukur.',
    },
    bio: {
      en: 'A dedicated and skilled web developer and IT engineer experienced in custom web applications, real-time factory systems, and Infor ERP maintenance—covering custom reporting scripts and user-side troubleshooting.',
      id: 'Pengembang web dan praktisi IT yang berdedikasi dalam membangun aplikasi web kustom, sistem pabrik real-time, serta pemeliharaan ERP Infor—mencakup pembuatan custom report, skrip laporan, dan troubleshooting kendala pengguna.',
    },
    secondaryBio: {
      en: 'Passionate about collaborating with clients and cross-functional teams to deliver reliable, user-centric software solutions with optimal functionality and performance.',
      id: 'Bersemangat berkolaborasi dengan klien maupun tim lintas divisi untuk menghadirkan solusi perangkat lunak yang andal, berpusat pada pengguna, serta berkinerja optimal.',
    },
    email: 'helmihakimudin@gmail.com',
    heroImage: heroStudioImg,
    heroImageAlt: {
      en: 'Minimalist monochrome software engineering workspace of Helmi Hakimudin',
      id: 'Ruang kerja software engineering monokrom milik Helmi Hakimudin',
    },
    heroCaption: {
      en: 'Helmi Hakimudin · Full-Stack Web, Infor ERP & SQL Systems',
      id: 'Helmi Hakimudin · Web Full-Stack, ERP Infor & Sistem SQL',
    },
    resumeUrl: '#experience',
  },

  metrics: [
    {
      value: '10+ yrs',
      label: {
        en: 'Data & Software Experience',
        id: 'Pengalaman Data & Perangkat Lunak',
      },
      context: {
        en: '2012–Present across DB & full-stack roles',
        id: '2012–Sekarang di bidang basis data & full-stack',
      },
    },
    {
      value: '12+',
      label: {
        en: 'Shipped Systems & Websites',
        id: 'Sistem & Situs Web Dirilis',
      },
      context: {
        en: 'Manufacturing, HRIS, Fintech & E-Commerce',
        id: 'Manufaktur, HRIS, Keuangan & E-Commerce',
      },
    },
    {
      value: '7',
      label: {
        en: 'Verified Certifications',
        id: 'Sertifikasi Terverifikasi',
      },
      context: {
        en: 'Dicoding (React, JS, Web, AI) & SanberCode',
        id: 'Dicoding (React, JS, Web, AI) & SanberCode',
      },
    },
    {
      value: '4+ ERP',
      label: {
        en: 'Factory Web & Infor ERP',
        id: 'Sistem Web & ERP Infor',
      },
      context: {
        en: 'SIPRO, SISWA, SISQA, SIBAGUS & Infor ERP',
        id: 'SIPRO, SISWA, SISQA, SIBAGUS & ERP Infor',
      },
    },
  ],

  skillTree: {
    eras: [
      {
        id: '2018',
        year: '2012–2018',
        level: 1,
        rankTitle: {
          en: 'Admin Database & Informatics Degree',
          id: 'Admin Database & Sarjana Teknik Informatika',
        },
        xpCurrent: 1350,
        xpNext: 1500,
        summary: {
          en: 'Built internal Microsoft Access reporting apps at PT Argha Karya Prima Industry while completing B.Sc. in Informatics Engineering at STMIK Muhammadiyah Jakarta.',
          id: 'Mengembangkan aplikasi pelaporan internal Microsoft Access di PT Argha Karya Prima Industry sembari menempuh S1 Teknik Informatika di STMIK Muhammadiyah Jakarta.',
        },
      },
      {
        id: '2020',
        year: '2020–2021',
        level: 2,
        rankTitle: {
          en: 'IT Programmer & Freelance Web Editor',
          id: 'IT Programmer & Freelance Web Editor',
        },
        xpCurrent: 2550,
        xpNext: 3000,
        summary: {
          en: 'Completed SanberCode Laravel bootcamp and launched e-commerce & corporate platforms including ListrikKlik.com, PT-MTS.co.id, and GunawanWijayaGroup.co.id.',
          id: 'Menyelesaikan pelatihan Laravel SanberCode serta merilis situs e-commerce dan korporat seperti ListrikKlik.com, PT-MTS.co.id, dan GunawanWijayaGroup.co.id.',
        },
      },
      {
        id: '2022',
        year: '2021–2023',
        level: 4,
        rankTitle: {
          en: 'Fullstack Developer · Enterprise & Ed-Tech',
          id: 'Fullstack Developer · Enterprise & Ed-Tech',
        },
        xpCurrent: 4100,
        xpNext: 4500,
        summary: {
          en: 'Optimized Raaina.id, delivered GuruMigran.id & MigrantTech.id at PT Shapirre Eternal Samulos, and engineered E-Smart, E-Fin & E-Approval at PT Teknologi Api Dua Sisi.',
          id: 'Mengoptimasi Raaina.id, membangun GuruMigran.id & MigrantTech.id di PT Shapirre Eternal Samulos, serta merancang E-Smart, E-Fin & E-Approval di PT Teknologi Api Dua Sisi.',
        },
      },
      {
        id: '2024',
        year: '2023–Now',
        level: 5,
        rankTitle: {
          en: 'Software Engineer (IT Development)',
          id: 'Software Engineer (IT Development)',
        },
        xpCurrent: 5520,
        xpNext: 6000,
        summary: {
          en: 'Building real-time factory/QA web apps (SIPRO, SISWA, SISQA, SIBAGUS) and maintaining Infor ERP with custom report scripts & user troubleshooting at PT Sumber Mas Autorindo.',
          id: 'Membangun aplikasi pabrik/QA real-time (SIPRO, SISWA, SISQA, SIBAGUS) serta mengelola maintenance ERP Infor, custom report, skrip laporan, dan troubleshooting user di PT Sumber Mas Autorindo.',
        },
      },
    ],
    nodes: [
      {
        id: 'foundations',
        code: '01',
        title: {
          en: 'Database & Core Systems',
          id: 'Basis Data & Fondasi Sistem',
        },
        subtitle: {
          en: 'MySQL · SQL Server · MS Access · REST',
          id: 'MySQL · SQL Server · MS Access · REST',
        },
        targetSection: 'experience',
        statsByEra: {
          '2018': {
            tierLevel: 3,
            masteryPercent: 75,
            unlockedSkills: ['Microsoft Access', 'Data Reporting', 'Informatics Core', 'SQL Queries'],
            milestoneNote: {
              en: 'Managed company data pipelines and internal Access tools at PT Argha Karya Prima Industry.',
              id: 'Mengelola alur data perusahaan dan aplikasi internal Access di PT Argha Karya Prima Industry.',
            },
          },
          '2020': {
            tierLevel: 4,
            masteryPercent: 82,
            unlockedSkills: ['MySQL Schemas', 'Postman Testing', 'REST APIs', 'Client Specs'],
            milestoneNote: {
              en: 'Designed relational product catalogs and API integrations for corporate web clients.',
              id: 'Merancang skema katalog produk relasional dan integrasi API untuk berbagai situs klien.',
            },
          },
          '2022': {
            tierLevel: 4,
            masteryPercent: 90,
            unlockedSkills: ['HRIS & Payroll DB', 'Financial Ledgers', 'Approval Flows', 'Query Tuning'],
            milestoneNote: {
              en: 'Structured multi-role enterprise data models for E-Smart, E-Fin, and E-Approval.',
              id: 'Menyusun model data enterprise multi-peran untuk sistem E-Smart, E-Fin, dan E-Approval.',
            },
          },
          '2024': {
            tierLevel: 5,
            masteryPercent: 96,
            unlockedSkills: ['Infor ERP', 'Custom Report Scripts', 'MySQL + SQL Server', 'QC Audit Logs'],
            milestoneNote: {
              en: 'Maintaining Infor ERP, authoring custom report scripts, and managing MySQL & SQL Server factory pipelines.',
              id: 'Menangani maintenance ERP Infor, membuat custom report & skrip laporan, serta mengelola basis data MySQL & SQL Server.',
            },
          },
        },
      },
      {
        id: 'frontend',
        code: '02',
        title: {
          en: 'Frontend & Interactive UI',
          id: 'Frontend & Antarmuka Interaktif',
        },
        subtitle: {
          en: 'JavaScript · React JS · jQuery · ApexChart',
          id: 'JavaScript · React JS · jQuery · ApexChart',
        },
        targetSection: 'projects',
        statsByEra: {
          '2018': {
            tierLevel: 2,
            masteryPercent: 48,
            unlockedSkills: ['HTML5', 'CSS3', 'Access Forms', 'UI Structuring'],
            milestoneNote: {
              en: 'Designed clear internal data-entry interfaces and structured management reports.',
              id: 'Merancang antarmuka input data internal yang rapi dan laporan manajemen terstruktur.',
            },
          },
          '2020': {
            tierLevel: 3,
            masteryPercent: 74,
            unlockedSkills: ['Bootstrap', 'JavaScript', 'jQuery', 'Responsive Web'],
            milestoneNote: {
              en: 'Built mobile-friendly corporate sites and storefronts for ListrikKlik.com & PT-MTS.co.id.',
              id: 'Membangun situs korporat dan toko daring responsif untuk ListrikKlik.com & PT-MTS.co.id.',
            },
          },
          '2022': {
            tierLevel: 4,
            masteryPercent: 86,
            unlockedSkills: ['AJAX Dashboards', 'Performance Tuning', 'E-Learning UI', 'Dicoding Web'],
            milestoneNote: {
              en: 'Optimized Raaina.id storefront speed and built interactive GuruMigran.id learning modules.',
              id: 'Mengoptimalkan kecepatan toko Raaina.id serta membangun modul belajar GuruMigran.id.',
            },
          },
          '2024': {
            tierLevel: 5,
            masteryPercent: 94,
            unlockedSkills: ['React JS', 'React Native', 'ApexChart', 'Live WS UI'],
            milestoneNote: {
              en: 'Earned 4 Dicoding React & JS certifications while shipping live ApexChart production monitors.',
              id: 'Meraih 4 sertifikasi Dicoding React & JS sekaligus merilis monitor produksi ApexChart live.',
            },
          },
        },
      },
      {
        id: 'backend',
        code: '03',
        title: {
          en: 'Backend & Business Logic',
          id: 'Backend & Logika Bisnis',
        },
        subtitle: {
          en: 'PHP · Laravel 8 · Node.js · Express.js',
          id: 'PHP · Laravel 8 · Node.js · Express.js',
        },
        targetSection: 'projects',
        statsByEra: {
          '2018': {
            tierLevel: 2,
            masteryPercent: 44,
            unlockedSkills: ['VBA Automation', 'Data Validation', 'Reporting Logic'],
            milestoneNote: {
              en: 'Automated recurring database validation and monthly operational reporting.',
              id: 'Mengotomatiskan validasi basis data rutin dan pelaporan operasional bulanan.',
            },
          },
          '2020': {
            tierLevel: 3,
            masteryPercent: 76,
            unlockedSkills: ['PHP', 'Laravel MVC', 'SanberCode Cert', 'Auth & CRUD'],
            milestoneNote: {
              en: 'Transitioned into full-stack PHP/Laravel web engineering with SanberCode certification.',
              id: 'Beralih ke rekayasa web full-stack PHP/Laravel dengan sertifikasi SanberCode.',
            },
          },
          '2022': {
            tierLevel: 4,
            masteryPercent: 88,
            unlockedSkills: ['Payroll Engine', 'Approval States', 'E-Fin Modules', 'REST Endpoints'],
            milestoneNote: {
              en: 'Delivered core HRIS payroll, finance, and multi-stage approval backends.',
              id: 'Mengembangkan backend inti penggajian HRIS, keuangan, dan persetujuan bertahap.',
            },
          },
          '2024': {
            tierLevel: 5,
            masteryPercent: 93,
            unlockedSkills: ['Laravel 8', 'Laravel Queues', 'Node.js & Express', 'Batch Alerts'],
            milestoneNote: {
              en: 'Running mission-critical Laravel 8 & Express.js services for SIPRO, SISWA, SISQA & SIBAGUS.',
              id: 'Mengoperasikan layanan Laravel 8 & Express.js untuk SIPRO, SISWA, SISQA & SIBAGUS.',
            },
          },
        },
      },
      {
        id: 'cloud',
        code: '04',
        title: {
          en: 'Real-Time, Hardware & AI',
          id: 'Real-Time, Scanner & AI',
        },
        subtitle: {
          en: 'WebSocket · QR Scanners · Queues · AI',
          id: 'WebSocket · Scanner QR · Queues · AI',
        },
        targetSection: 'projects',
        statsByEra: {
          '2018': {
            tierLevel: 1,
            masteryPercent: 30,
            unlockedSkills: ['Internal Ops', 'Data Accuracy'],
            milestoneNote: {
              en: 'Ensured zero-error production inventory & operational records.',
              id: 'Menjaga akurasi pencatatan inventaris dan data operasional pabrik.',
            },
          },
          '2020': {
            tierLevel: 2,
            masteryPercent: 58,
            unlockedSkills: ['SEO & Hosting', 'Custom CMS', 'Client Collaboration'],
            milestoneNote: {
              en: 'Deployed custom client web projects with reliable hosting and fast load times.',
              id: 'Meluncurkan proyek web kustom klien dengan performa stabil dan waktu muat cepat.',
            },
          },
          '2022': {
            tierLevel: 3,
            masteryPercent: 76,
            unlockedSkills: ['Speed Optimization', 'AJAX Workflows', 'Role Security'],
            milestoneNote: {
              en: 'Eliminated bottlenecks in e-commerce checkout and migrant support portals.',
              id: 'Menghilangkan hambatan performa pada situs e-commerce dan portal layanan migran.',
            },
          },
          '2024': {
            tierLevel: 5,
            masteryPercent: 92,
            unlockedSkills: ['Pusher WebSocket', 'QR Scanner Support', 'ERP Troubleshooting', 'Dicoding AI'],
            milestoneNote: {
              en: 'Resolving user-side Infor ERP issues alongside industrial QR scanners and live WebSocket alerts.',
              id: 'Menangani troubleshooting kendala ERP Infor di sisi user bersama scanner QR industri dan notifikasi WebSocket.',
            },
          },
        },
      },
    ],
  },

  projects: [
    {
      id: 'sipro-production',
      slug: 'sipro-production',
      featured: true,
      category: 'fullstack',
      categoryLabel: {
        en: 'Full-Stack · Real-Time Factory System',
        id: 'Full-Stack · Sistem Produksi Real-Time',
      },
      year: '2023–Now',
      title: 'SIPRO — Production Monitoring System',
      subtitle: {
        en: 'Real-time line monitoring, productivity analytics & scanner integration',
        id: 'Pemantauan lini produksi real-time, analitik produktivitas & integrasi scanner',
      },
      summary: {
        en: 'Built an end-to-end manufacturing monitoring platform at PT Sumber Mas Autorindo using Laravel 8, Pusher WebSocket, ApexChart, and dual MySQL/SQL Server databases with barcode scanner input.',
        id: 'Membangun platform pemantauan manufaktur end-to-end di PT Sumber Mas Autorindo menggunakan Laravel 8, Pusher WebSocket, ApexChart, serta basis data ganda MySQL/SQL Server dengan dukungan scanner.',
      },
      techStack: ['PHP', 'Laravel 8', 'JavaScript', 'Pusher WebSocket', 'ApexChart', 'MySQL', 'SQL Server'],
      imageUrl: projectCloudImg,
      imageAlt: {
        en: 'Industrial precision hardware and blue optical lines symbolizing real-time SIPRO production telemetry',
        id: 'Ilustrasi perangkat keras presisi dan jalur optik untuk sistem telemetri produksi SIPRO',
      },
      repoUrl: 'https://helmihakimudin.vercel.app/',
      demoUrl: 'https://helmihakimudin.vercel.app/',
      caseStudy: {
        problem: {
          en: 'Production supervisors relied on delayed manual tally sheets, making it difficult to spot assembly line bottlenecks or output drops during active shifts.',
          id: 'Supervisor produksi sebelumnya bergantung pada rekap manual yang tertunda sehingga sulit mendeteksi hambatan lini atau penurunan output saat shift berjalan.',
        },
        architecture: {
          en: 'Engineered a Laravel 8 backend bridging MySQL transactional records with legacy SQL Server tables, broadcasting scanned work-order events via Pusher WebSocket to live ApexChart dashboards.',
          id: 'Merancang backend Laravel 8 yang menjembatani transaksi MySQL dengan tabel SQL Server yang ada, lalu menyiarkan hasil scan produksi melalui Pusher WebSocket ke grafik ApexChart secara langsung.',
        },
        highlights: {
          en: [
            'Instant shop-floor scanner integration updating shift productivity metrics without page reloads.',
            'Interactive ApexChart dashboards visualizing target vs. actual output per production line.',
            'Seamless synchronization between MySQL web state and enterprise SQL Server records.',
          ],
          id: [
            'Integrasi scanner lantai produksi secara instan yang memperbarui metrik shift tanpa muat ulang halaman.',
            'Dashboard ApexChart interaktif yang memvisualisasikan perbandingan target dan output aktual tiap lini.',
            'Sinkronisasi mulus antara basis data web MySQL dan catatan SQL Server perusahaan.',
          ],
        },
        outcomes: [
          {
            metric: 'Real-Time',
            detail: {
              en: 'Live Pusher WebSocket updates on factory screens',
              id: 'Pembaruan langsung Pusher WebSocket di layar pabrik',
            },
          },
          {
            metric: '2 DBs',
            detail: {
              en: 'Unified MySQL & SQL Server data pipeline',
              id: 'Integrasi alur data MySQL & SQL Server',
            },
          },
          {
            metric: 'Scanner',
            detail: {
              en: 'Direct shop-floor barcode & QR workflow',
              id: 'Alur kerja pemindaian barcode & QR langsung',
            },
          },
        ],
      },
    },
    {
      id: 'sisqa-quality',
      slug: 'sisqa-quality',
      category: 'fullstack',
      categoryLabel: {
        en: 'Full-Stack · Quality Assurance System',
        id: 'Full-Stack · Sistem Informasi QA',
      },
      year: '2023–Now',
      title: 'SISQA — QA Information System',
      subtitle: {
        en: 'Incoming & Finished Goods QC inspection with WebSocket & Queue workers',
        id: 'Inspeksi QC Incoming & Finished Goods dengan WebSocket & Queue worker',
      },
      summary: {
        en: 'Developed a comprehensive quality assurance platform supporting inspection modules, NG (Not Good) defect summaries, and asynchronous Laravel Queue processing with live WebSocket alerts.',
        id: 'Mengembangkan platform penjaminan mutu menyeluruh untuk modul inspeksi, ringkasan defect NG, serta pemrosesan asinkron Laravel Queues dengan peringatan WebSocket real-time.',
      },
      techStack: ['PHP', 'Laravel 8', 'JavaScript', 'jQuery', 'WebSocket', 'Queues', 'MySQL'],
      imageUrl: projectLedgerImg,
      imageAlt: {
        en: 'Clean monochrome quality metrics tablet representing SISQA defect tracking and QC reporting',
        id: 'Tablet metrik kualitas monokrom yang merepresentasikan pelacakan QC dan laporan SISQA',
      },
      repoUrl: 'https://helmihakimudin.vercel.app/',
      demoUrl: 'https://helmihakimudin.vercel.app/',
      caseStudy: {
        problem: {
          en: 'Quality control teams needed unified traceability across Incoming material checks and Finished Goods inspections while keeping heavy NG reporting fast.',
          id: 'Tim kontrol kualitas membutuhkan keterlacakan terpadu antara pemeriksaan material Incoming dan produk Finished Goods tanpa memperlambat pembuatan laporan NG.',
        },
        architecture: {
          en: 'Built modular Laravel 8 inspection workflows backed by Laravel Queues for background summary aggregation and WebSocket notifications for immediate QC escalation.',
          id: 'Membangun modul inspeksi terstruktur di Laravel 8 dengan dukungan Laravel Queues untuk agregasi laporan di latar belakang serta notifikasi WebSocket untuk eskalasi QC seketika.',
        },
        highlights: {
          en: [
            'Dedicated workflows for QC Incoming and QC Finished Goods sign-offs.',
            'Automated NG (Not Good) defect categorization and shift summary dashboards.',
            'Background Queue workers preventing UI freezes during bulk inspection exports.',
          ],
          id: [
            'Alur kerja khusus untuk verifikasi QC Incoming dan QC Finished Goods.',
            'Kategorisasi otomatis temuan NG (Not Good) beserta ringkasan per shift.',
            'Queue worker latar belakang menjaga antarmuka tetap responsif saat ekspor data inspeksi.',
          ],
        },
        outcomes: [
          {
            metric: '2 Stages',
            detail: {
              en: 'Incoming & Finished Goods QC unified',
              id: 'QC Incoming & Finished Goods terintegrasi',
            },
          },
          {
            metric: 'Async',
            detail: {
              en: 'Laravel Queues for non-blocking reporting',
              id: 'Laravel Queues untuk pelaporan tanpa jeda',
            },
          },
          {
            metric: 'Live Alert',
            detail: {
              en: 'Instant WebSocket NG status notifications',
              id: 'Notifikasi status NG instan via WebSocket',
            },
          },
        ],
      },
    },
    {
      id: 'sibagus-siswa',
      slug: 'sibagus-siswa',
      category: 'backend',
      categoryLabel: {
        en: 'Backend & Warehouse Systems',
        id: 'Backend & Sistem Gudang',
      },
      year: '2023–Now',
      title: 'SIBAGUS & SISWA — Warehouse Suite',
      subtitle: {
        en: 'Node.js/Express QR label generator, scanner API & daily stock alerts',
        id: 'Generator label QR Node.js/Express, API scanner & notifikasi stok harian',
      },
      summary: {
        en: 'Engineered SIBAGUS in Node.js & Express.js for automated QR label generation and scanner verification, paired with SISWA (Laravel 8) for daily warehouse stock monitoring and notifications.',
        id: 'Merancang SIBAGUS dengan Node.js & Express.js untuk pembuatan label QR otomatis dan verifikasi scanner, dipadukan dengan SISWA (Laravel 8) untuk pemantauan stok gudang harian.',
      },
      techStack: ['Node.js', 'Express.js', 'PHP', 'Laravel 8', 'JavaScript', 'AJAX', 'QR Scanner'],
      imageUrl: projectEdgeImg,
      imageAlt: {
        en: 'Modular geometric blocks representing structured warehouse inventory nodes in SIBAGUS and SISWA',
        id: 'Blok geometris modular yang merepresentasikan tata kelola stok gudang SIBAGUS dan SISWA',
      },
      repoUrl: 'https://helmihakimudin.vercel.app/',
      demoUrl: 'https://helmihakimudin.vercel.app/',
      caseStudy: {
        problem: {
          en: 'Warehouse teams needed rapid QR label printing during production packaging and proactive daily alerts before critical inventory items fell below threshold.',
          id: 'Tim gudang memerlukan pencetakan label QR cepat saat pengemasan produksi serta peringatan harian proaktif sebelum stok barang kritis menipis.',
        },
        architecture: {
          en: 'Developed an Express.js microservice (SIBAGUS) for high-speed QR code generation and barcode scanner validation alongside SISWA in Laravel 8 handling scheduled stock notifications.',
          id: 'Mengembangkan layanan Express.js (SIBAGUS) untuk pembuatan kode QR cepat dan validasi scanner, berdampingan dengan SISWA di Laravel 8 yang mengirim notifikasi stok harian terjadwal.',
        },
        highlights: {
          en: [
            'Batch QR label generation formatted directly for warehouse thermal printers.',
            'Real-time scanner API verification preventing mislabeled pallet dispatches.',
            'Automated SISWA daily stock threshold notifications via AJAX & Bootstrap UI.',
          ],
          id: [
            'Pembuatan label QR massal yang langsung siap cetak pada printer termal gudang.',
            'Validasi API scanner secara langsung untuk mencegah kesalahan label palet.',
            'Notifikasi batas stok harian otomatis pada SISWA dengan antarmuka AJAX & Bootstrap.',
          ],
        },
        outcomes: [
          {
            metric: 'QR Auto',
            detail: {
              en: 'Instant label generation & scan validation',
              id: 'Pembuatan label & validasi scan instan',
            },
          },
          {
            metric: 'Daily',
            detail: {
              en: 'Proactive warehouse stock notifications',
              id: 'Notifikasi stok gudang harian proaktif',
            },
          },
          {
            metric: 'Express',
            detail: {
              en: 'Lightweight Node.js warehouse API core',
              id: 'Inti API gudang ringan berbasis Node.js',
            },
          },
        ],
      },
    },
    {
      id: 'esmart-enterprise',
      slug: 'esmart-enterprise',
      category: 'fullstack',
      categoryLabel: {
        en: 'Full-Stack · Enterprise Suite',
        id: 'Full-Stack · Rangkaian Sistem Enterprise',
      },
      year: '2022–2023',
      title: 'E-Smart, E-Fin & E-Approval Suite',
      subtitle: {
        en: 'Integrated HRIS payroll, financial management & workflow approvals',
        id: 'HRIS penggajian, manajemen keuangan & persetujuan alur kerja terpadu',
      },
      summary: {
        en: 'Delivered three interconnected enterprise web platforms at PT Teknologi Api Dua Sisi covering end-to-end HR payroll (E-Smart), corporate finance (E-Fin), and multi-tier approvals (E-Approval).',
        id: 'Menghadirkan tiga platform web enterprise terintegrasi di PT Teknologi Api Dua Sisi mencakup HRIS & penggajian (E-Smart), manajemen keuangan (E-Fin), dan sistem persetujuan (E-Approval).',
      },
      techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'REST API', 'Bootstrap'],
      imageUrl: projectCollabImg,
      imageAlt: {
        en: 'Clean architectural desktop monitor showcasing enterprise workflow layouts for E-Smart and E-Fin',
        id: 'Monitor studio menampilkan tata letak alur kerja enterprise E-Smart dan E-Fin',
      },
      repoUrl: 'https://helmihakimudin.vercel.app/',
      demoUrl: 'https://helmihakimudin.vercel.app/',
      caseStudy: {
        problem: {
          en: 'Disconnected spreadsheets across HR, finance, and management caused slow monthly payroll runs and opaque reimbursement/budget sign-offs.',
          id: 'Penggunaan spreadsheet terpisah antara HR, keuangan, dan manajemen memperlambat proses penggajian bulanan serta membuat alur persetujuan anggaran kurang transparan.',
        },
        architecture: {
          en: 'Built unified REST-connected modules handling employee lifecycle & payroll calculations (E-Smart), ledger tracking (E-Fin), and configurable multi-level approval routing (E-Approval).',
          id: 'Membangun modul terhubung via REST API untuk siklus karyawan & perhitungan gaji (E-Smart), pencatatan keuangan (E-Fin), serta perutean persetujuan bertingkat (E-Approval).',
        },
        highlights: {
          en: [
            'Automated monthly HRIS payroll calculations, attendance deductions, and payslip generation.',
            'Role-based E-Approval state machine tracking pending, approved, and revised requests.',
            'Structured financial reporting and expense reconciliation inside E-Fin.',
          ],
          id: [
            'Perhitungan gaji HRIS bulanan otomatis, potongan kehadiran, dan pembuatan slip gaji.',
            'Mesin status E-Approval berbasis peran untuk memantau pengajuan tertunda maupun disetujui.',
            'Pelaporan keuangan terstruktur dan rekonsiliasi pengeluaran di dalam E-Fin.',
          ],
        },
        outcomes: [
          {
            metric: '3 Apps',
            detail: {
              en: 'HRIS, Finance & Approval workflows unified',
              id: 'Alur HRIS, Keuangan & Persetujuan terpadu',
            },
          },
          {
            metric: 'RBAC',
            detail: {
              en: 'Multi-tier organizational approval hierarchy',
              id: 'Hierarki persetujuan organisasi bertingkat',
            },
          },
          {
            metric: 'Payroll',
            detail: {
              en: 'Automated HR & financial reporting flows',
              id: 'Otomatisasi alur laporan HR & keuangan',
            },
          },
        ],
      },
    },
    {
      id: 'raaina-gurumigran',
      slug: 'raaina-gurumigran',
      category: 'frontend',
      categoryLabel: {
        en: 'Frontend & Web Performance',
        id: 'Frontend & Optimasi Web',
      },
      year: '2021–2022',
      title: 'Raaina.id, GuruMigran & MigrantTech',
      subtitle: {
        en: 'E-commerce speed optimization, e-learning & migrant support web apps',
        id: 'Optimasi performa e-commerce, e-learning & aplikasi dukungan migran',
      },
      summary: {
        en: 'Optimized storefront performance for Raaina.id and built accessible web experiences across GuruMigran.id (e-learning), MigrantTech.id, DoctorMigrant.id, and Samulos.co.id.',
        id: 'Mengoptimalkan performa toko daring Raaina.id serta membangun antarmuka web aksesibel untuk GuruMigran.id (e-learning), MigrantTech.id, DoctorMigrant.id, dan Samulos.co.id.',
      },
      techStack: ['JavaScript', 'jQuery', 'AJAX', 'Bootstrap', 'PHP', 'Laravel', 'MySQL'],
      imageUrl: projectCollabImg,
      imageAlt: {
        en: 'Clean responsive layout screen representing Raaina.id optimization and GuruMigran.id e-learning',
        id: 'Layar tata letak responsif untuk optimasi Raaina.id dan platform e-learning GuruMigran.id',
      },
      repoUrl: 'https://helmihakimudin.vercel.app/',
      demoUrl: 'https://helmihakimudin.vercel.app/',
      caseStudy: {
        problem: {
          en: 'High-traffic e-commerce pages suffered sluggish mobile load times while migrant worker training platforms needed clear, low-bandwidth navigation.',
          id: 'Halaman e-commerce dengan trafik tinggi mengalami waktu muat lambat di ponsel, sedangkan platform pelatihan pekerja migran membutuhkan navigasi ringan untuk koneksi terbatas.',
        },
        architecture: {
          en: 'Audited asset payloads, optimized SQL product queries and caching, and refactored interactive e-learning & registration modules for smooth mobile responsiveness.',
          id: 'Mengaudit ukuran aset, mengoptimalkan query produk SQL serta caching, dan merapikan modul pendaftaran maupun pembelajaran agar responsif di perangkat seluler.',
        },
        highlights: {
          en: [
            'Reduced page bottlenecks and asset overhead on Raaina.id e-commerce flows.',
            'Delivered structured course & assessment UI for GuruMigran.id learners.',
            'Built corporate & support portals for Samulos.co.id, DoctorMigrant.id & MigrantTech.id.',
          ],
          id: [
            'Mengurangi beban aset dan hambatan waktu muat pada alur belanja Raaina.id.',
            'Menghadirkan antarmuka materi dan evaluasi terstruktur bagi peserta GuruMigran.id.',
            'Membangun portal korporat dan layanan untuk Samulos.co.id, DoctorMigrant.id & MigrantTech.id.',
          ],
        },
        outcomes: [
          {
            metric: '5 Sites',
            detail: {
              en: 'E-commerce, Ed-Tech & Corporate portals shipped',
              id: 'Portal E-commerce, Ed-Tech & Korporat dirilis',
            },
          },
          {
            metric: 'Faster',
            detail: {
              en: 'Optimized Raaina.id page load performance',
              id: 'Optimasi kecepatan muat halaman Raaina.id',
            },
          },
          {
            metric: 'Mobile',
            detail: {
              en: 'Accessible UI for migrant worker learners',
              id: 'Antarmuka ramah ponsel bagi pekerja migran',
            },
          },
        ],
      },
    },
    {
      id: 'infor-erp-operations',
      slug: 'infor-erp-operations',
      category: 'backend',
      categoryLabel: {
        en: 'Enterprise ERP · Custom Reporting & Support',
        id: 'ERP Enterprise · Custom Report & Dukungan Teknis',
      },
      year: '2023–Now',
      title: 'Infor ERP Maintenance & Custom Reporting',
      subtitle: {
        en: 'Custom report design, reporting scripts & user-side ERP troubleshooting',
        id: 'Pembuatan custom report, skrip laporan & troubleshooting error sisi pengguna',
      },
      summary: {
        en: 'Serving as dedicated manpower for Infor ERP maintenance at PT Sumber Mas Autorindo—developing tailored reports, writing custom report scripts, and resolving daily operational ERP issues for end users.',
        id: 'Bertugas sebagai manpower maintenance ERP vendor Infor di PT Sumber Mas Autorindo—membuat custom report, menulis skrip khusus laporan, serta menangani troubleshooting error di sisi pengguna.',
      },
      techStack: ['Infor ERP', 'Custom Reports', 'Report Scripts', 'SQL Server', 'Troubleshooting'],
      imageUrl: projectLedgerImg,
      imageAlt: {
        en: 'Structured financial and operational ERP reporting layout representing Infor ERP customization',
        id: 'Tata letak pelaporan operasional terstruktur untuk kustomisasi laporan ERP Infor',
      },
      repoUrl: 'https://helmihakimudin.vercel.app/',
      demoUrl: 'https://helmihakimudin.vercel.app/',
      caseStudy: {
        problem: {
          en: 'Operational departments needed tailored management reports beyond standard ERP templates and rapid resolution whenever transaction or workflow errors blocked user activities.',
          id: 'Divisi operasional membutuhkan laporan manajemen khusus di luar templat bawaan ERP serta penanganan cepat setiap kali muncul kendala transaksi atau error di sisi pengguna.',
        },
        architecture: {
          en: 'Authored custom Infor ERP report layouts and backend reporting scripts querying SQL Server datasets accurately, paired with hands-on root-cause analysis for user-side ERP incidents.',
          id: 'Menyusun tata letak custom report Infor ERP dan skrip laporan yang menarik dataset SQL Server secara akurat, disertai analisis akar masalah untuk setiap insiden error pengguna.',
        },
        highlights: {
          en: [
            'Built custom operational and management reports tailored to department KPIs.',
            'Wrote and maintained custom report scripts to automate data extraction and formatting.',
            'Provided responsive user-side troubleshooting to minimize ERP workflow downtime.',
          ],
          id: [
            'Membuat custom report operasional dan manajemen yang sesuai kebutuhan KPI tiap divisi.',
            'Menulis dan memelihara skrip khusus laporan untuk otomasi pengambilan dan format data.',
            'Memberikan troubleshooting cepat atas error di sisi pengguna agar operasional tetap lancar.',
          ],
        },
        outcomes: [
          {
            metric: 'Infor ERP',
            detail: {
              en: 'Dedicated vendor ERP maintenance & support',
              id: 'Maintenance & dukungan operasional ERP Infor',
            },
          },
          {
            metric: 'Custom',
            detail: {
              en: 'Tailored reports & automated report scripts',
              id: 'Custom report & skrip laporan terotomatisasi',
            },
          },
          {
            metric: 'L1 / L2',
            detail: {
              en: 'Fast resolution for user-side ERP errors',
              id: 'Penanganan cepat error ERP di sisi pengguna',
            },
          },
        ],
      },
    },
  ],

  timeline: [
    {
      id: 'work-sumbermas',
      kind: 'work',
      period: 'May 2023 — Present',
      role: {
        en: 'Software Engineer (IT Development) & Infor ERP Support',
        id: 'Software Engineer (IT Development) & Maintenance ERP Infor',
      },
      organization: 'PT Sumber Mas Autorindo',
      location: 'Jakarta',
      description: {
        en: 'Architecting real-time production, warehouse, and QA web applications while serving as dedicated manpower for Infor ERP maintenance, custom reporting, and user troubleshooting.',
        id: 'Merancang aplikasi web produksi, gudang, dan QA secara real-time sekaligus bertugas sebagai manpower maintenance ERP vendor Infor, pembuat custom report/skrip laporan, dan troubleshooting error user.',
      },
      impacts: {
        en: [
          'Infor ERP Maintenance: Maintained vendor Infor ERP operations, built custom reports and custom report scripts, and handled user-side error troubleshooting.',
          'SIPRO (Production System): PHP (Laravel 8), JavaScript, jQuery, AJAX, Pusher WebSocket, Bootstrap, ApexChart with MySQL & SQL Server for real-time monitoring & scanner integration.',
          'SISWA (Warehouse Monitoring): Laravel 8 & AJAX platform delivering automated daily stock notifications.',
          'SISQA (QA Information System): Laravel 8, WebSocket & Queues handling inspection modules, NG summaries, and QC Incoming/Finished Goods.',
          'SIBAGUS (Warehouse Production System): Node.js & Express.js service powering QR label generation and scanner verification.',
        ],
        id: [
          'Maintenance ERP Infor: Menangani pemeliharaan ERP vendor Infor, membuat custom report beserta skrip khusus laporan, serta melakukan troubleshooting saat terjadi error di sisi pengguna.',
          'SIPRO (Sistem Produksi): PHP (Laravel 8), JavaScript, jQuery, AJAX, Pusher WebSocket, Bootstrap, ApexChart dengan MySQL & SQL Server untuk pemantauan real-time & integrasi scanner.',
          'SISWA (Pemantauan Gudang): Platform Laravel 8 & AJAX untuk notifikasi stok harian otomatis.',
          'SISQA (Sistem Informasi QA): Laravel 8, WebSocket & Queues untuk modul inspeksi, ringkasan NG, serta QC Incoming/Finished Goods.',
          'SIBAGUS (Sistem Produksi Gudang): Layanan Node.js & Express.js untuk pembuatan label QR dan dukungan scanner.',
        ],
      },
    },
    {
      id: 'work-freelance',
      kind: 'work',
      period: 'Aug 2020 — Present',
      role: {
        en: 'Freelance Web Editor & Developer',
        id: 'Freelance Web Editor & Pengembang Web',
      },
      organization: 'Inovasi Data Teknologi',
      location: 'Jakarta',
      description: {
        en: 'Collaborating directly with clients to build, customize, and maintain web applications tailored to specific business workflows.',
        id: 'Berkolaborasi langsung dengan klien untuk merancang, menyesuaikan, dan memelihara aplikasi web sesuai kebutuhan bisnis spesifik.',
      },
      impacts: {
        en: [
          'Custom website development from requirement discovery through deployment and ongoing optimization.',
        ],
        id: [
          'Pengembangan situs web kustom mulai dari penggalian kebutuhan hingga rilis dan optimasi berkelanjutan.',
        ],
      },
    },
    {
      id: 'work-apiduasisi',
      kind: 'work',
      period: 'Nov 2022 — May 2023',
      role: {
        en: 'Fullstack Developer',
        id: 'Fullstack Developer',
      },
      organization: 'PT Teknologi Api Dua Sisi',
      location: 'Jakarta',
      description: {
        en: 'Developed internal enterprise platforms streamlining human resources, financial management, and multi-stage approvals.',
        id: 'Mengembangkan platform enterprise internal untuk menyederhanakan proses HR, manajemen keuangan, dan persetujuan bertingkat.',
      },
      impacts: {
        en: [
          'E-Smart: HRIS platform automating HR workflows and monthly payroll processing.',
          'E-Fin: Financial management system for structured corporate expense and ledger tracking.',
          'E-Approval: Configurable multi-level workflow approval system.',
        ],
        id: [
          'E-Smart: Platform HRIS yang mengotomatiskan proses SDM dan penggajian bulanan.',
          'E-Fin: Sistem manajemen keuangan untuk pencatatan transaksi perusahaan yang terstruktur.',
          'E-Approval: Sistem alur persetujuan berjenjang yang fleksibel.',
        ],
      },
    },
    {
      id: 'work-shapirre',
      kind: 'work',
      period: 'Mar 2021 — Nov 2022',
      role: {
        en: 'Fullstack Developer',
        id: 'Fullstack Developer',
      },
      organization: 'PT Shapirre Eternal Samulos',
      location: 'Jakarta',
      description: {
        en: 'Built and optimized e-commerce, corporate, e-learning, and migrant support platforms across diverse client verticals.',
        id: 'Membangun dan mengoptimalkan situs e-commerce, korporat, e-learning, serta aplikasi dukungan pekerja migran.',
      },
      impacts: {
        en: [
          'Raaina.id: E-commerce storefront performance optimization and user experience tuning.',
          'GuruMigran.id & MigrantTech.id: E-learning and digital support web applications for migrant workers.',
          'DoctorMigrant.id & Samulos.co.id: Responsive corporate and informational web portals.',
        ],
        id: [
          'Raaina.id: Optimasi performa e-commerce dan penyempurnaan pengalaman belanja pengguna.',
          'GuruMigran.id & MigrantTech.id: Aplikasi web e-learning dan sistem dukungan digital bagi pekerja migran.',
          'DoctorMigrant.id & Samulos.co.id: Portal web korporat dan informasi yang responsif.',
        ],
      },
    },
    {
      id: 'work-mts',
      kind: 'work',
      period: 'Dec 2020 — Mar 2021',
      role: {
        en: 'IT Programmer',
        id: 'IT Programmer',
      },
      organization: 'PT Mentari Timur Sentosa',
      location: 'Cikarang',
      description: {
        en: 'Developed and launched commercial e-commerce and corporate web properties.',
        id: 'Mengembangkan dan meluncurkan situs e-commerce komersial serta profil perusahaan.',
      },
      impacts: {
        en: [
          'Notable deliveries: ListrikKlik.com, PT-MTS.co.id, and GunawanWijayaGroup.co.id.',
        ],
        id: [
          'Proyek utama yang dirilis: ListrikKlik.com, PT-MTS.co.id, dan GunawanWijayaGroup.co.id.',
        ],
      },
    },
    {
      id: 'work-arghakarya',
      kind: 'work',
      period: 'Jun 2012 — Jul 2020',
      role: {
        en: 'Admin Database',
        id: 'Admin Database',
      },
      organization: 'PT Argha Karya Prima Industry',
      location: 'Citeureup',
      description: {
        en: 'Developed internal desktop database applications and safeguarded operational reporting accuracy.',
        id: 'Mengembangkan aplikasi basis data internal serta menjaga akurasi input data dan pelaporan perusahaan.',
      },
      impacts: {
        en: [
          'Developed and maintained internal data applications using Microsoft Access.',
          'Managed company data input pipelines and recurring operational reporting.',
        ],
        id: [
          'Membangun dan memelihara aplikasi internal perusahaan menggunakan Microsoft Access.',
          'Mengelola alur input data perusahaan dan pelaporan operasional berkala.',
        ],
      },
    },
    {
      id: 'edu-stmik',
      kind: 'education',
      period: 'Sep 2014 — Sep 2018',
      role: {
        en: "Bachelor's Degree in Informatics Engineering",
        id: 'S1 Teknik Informatika',
      },
      organization: 'STMIK Muhammadiyah Jakarta',
      location: 'Jakarta',
      description: {
        en: 'Undergraduate degree in Informatics Engineering covering software engineering, relational databases, and web application development.',
        id: 'Pendidikan sarjana Teknik Informatika yang mencakup rekayasa perangkat lunak, basis data relasional, dan pengembangan aplikasi web.',
      },
      impacts: {
        en: [
          'Completed full-time Informatics Engineering degree while working in database administration.',
        ],
        id: [
          'Menyelesaikan studi Teknik Informatika sambil berkarier aktif di bidang administrasi basis data.',
        ],
      },
    },
    {
      id: 'cert-dicoding-react-fund',
      kind: 'certification',
      period: 'Feb 2025 — Feb 2028',
      role: {
        en: 'Belajar Fundamental Aplikasi Web dengan React',
        id: 'Belajar Fundamental Aplikasi Web dengan React',
      },
      organization: 'Dicoding Indonesia',
      location: 'Verified Credential',
      description: {
        en: 'Intermediate React web architecture covering routing, state lifecycle, REST API integration, and reusable component design.',
        id: 'Arsitektur web React tingkat menengah mencakup routing, siklus state, integrasi REST API, dan komponen modular.',
      },
      impacts: {
        en: ['React JS · State Management · SPA Routing · REST API Consumption'],
        id: ['React JS · Manajemen State · SPA Routing · Konsumsi REST API'],
      },
    },
    {
      id: 'cert-dicoding-react-app',
      kind: 'certification',
      period: 'Nov 2024 — Nov 2027',
      role: {
        en: 'Belajar Membuat Aplikasi dengan React',
        id: 'Belajar Membuat Aplikasi dengan React',
      },
      organization: 'Dicoding Indonesia',
      location: 'Verified Credential',
      description: {
        en: 'Building interactive, component-driven web applications using React and modern JavaScript.',
        id: 'Membangun aplikasi web interaktif berbasis komponen menggunakan React dan JavaScript modern.',
      },
      impacts: {
        en: ['React Components · Props & State · Event Handling'],
        id: ['Komponen React · Props & State · Event Handling'],
      },
    },
    {
      id: 'cert-dicoding-fe',
      kind: 'certification',
      period: 'Nov 2024 — Nov 2027',
      role: {
        en: 'Belajar Membuat Front-End untuk Pemula',
        id: 'Belajar Membuat Front-End untuk Pemula',
      },
      organization: 'Dicoding Indonesia',
      location: 'Verified Credential',
      description: {
        en: 'Interactive DOM manipulation, browser storage persistence, and responsive front-end engineering.',
        id: 'Manipulasi DOM interaktif, penyimpanan lokal browser, dan rekayasa front-end responsif.',
      },
      impacts: {
        en: ['DOM API · Web Storage · Responsive Interactive UI'],
        id: ['DOM API · Web Storage · Antarmuka Interaktif Responsif'],
      },
    },
    {
      id: 'cert-dicoding-js',
      kind: 'certification',
      period: 'Nov 2024 — Nov 2027',
      role: {
        en: 'Belajar Dasar Pemrograman JavaScript',
        id: 'Belajar Dasar Pemrograman JavaScript',
      },
      organization: 'Dicoding Indonesia',
      location: 'Verified Credential',
      description: {
        en: 'Core JavaScript fundamentals, asynchronous programming, functional patterns, and modular code.',
        id: 'Dasar pemrograman JavaScript, pemrograman asinkron, pola fungsional, dan kode modular.',
      },
      impacts: {
        en: ['ES6+ · Async/Await · Functional & OOP JavaScript'],
        id: ['ES6+ · Async/Await · Pemrograman Fungsional & OOP JS'],
      },
    },
    {
      id: 'cert-dicoding-ai',
      kind: 'certification',
      period: 'Nov 2024 — Nov 2027',
      role: {
        en: 'Belajar Dasar AI',
        id: 'Belajar Dasar AI',
      },
      organization: 'Dicoding Indonesia',
      location: 'Verified Credential',
      description: {
        en: 'Foundational concepts of Artificial Intelligence, machine learning workflows, and modern AI applications.',
        id: 'Konsep dasar Kecerdasan Buatan, alur kerja machine learning, dan penerapan AI modern.',
      },
      impacts: {
        en: ['AI Concepts · Machine Learning · Deep Learning Overview'],
        id: ['Konsep AI · Machine Learning · Pengantar Deep Learning'],
      },
    },
    {
      id: 'cert-dicoding-web',
      kind: 'certification',
      period: 'Jun 2022 — Jun 2025',
      role: {
        en: 'Belajar Dasar Pemrograman Web',
        id: 'Belajar Dasar Pemrograman Web',
      },
      organization: 'Dicoding Indonesia',
      location: 'Verified Credential',
      description: {
        en: 'Semantic HTML5, modern CSS layout systems (Flexbox/Grid), and responsive web standards.',
        id: 'HTML5 semantik, tata letak CSS modern (Flexbox/Grid), serta standar web responsif.',
      },
      impacts: {
        en: ['Semantic HTML5 · CSS Flexbox & Grid · Web Accessibility'],
        id: ['HTML5 Semantik · CSS Flexbox & Grid · Aksesibilitas Web'],
      },
    },
    {
      id: 'cert-sanbercode',
      kind: 'certification',
      period: 'Sep 2020 — Oct 2020',
      role: {
        en: 'Laravel Web Development',
        id: 'Laravel Web Development',
      },
      organization: 'SanberCode',
      location: 'Intensive Bootcamp',
      description: {
        en: 'Hands-on full-stack Laravel bootcamp covering MVC architecture, authentication, and database migrations.',
        id: 'Pelatihan intensif full-stack Laravel mencakup arsitektur MVC, autentikasi, dan migrasi basis data.',
      },
      impacts: {
        en: ['PHP · Laravel MVC · Eloquent ORM · Blade & REST'],
        id: ['PHP · Laravel MVC · Eloquent ORM · Blade & REST'],
      },
    },
  ],

  capabilities: [
    {
      id: 'fullstack',
      title: {
        en: 'Full-Stack & Backend Frameworks',
        id: 'Framework Full-Stack & Backend',
      },
      items: [
        {
          name: 'PHP · Laravel 8',
          detail: {
            en: 'MVC architecture, Queues, REST APIs, Eloquent ORM, production & HRIS systems',
            id: 'Arsitektur MVC, Queues, REST API, Eloquent ORM, sistem produksi & HRIS',
          },
        },
        {
          name: 'Node.js · Express.js',
          detail: {
            en: 'Warehouse API services, QR label generation, scanner integrations',
            id: 'Layanan API gudang, pembuatan label QR, integrasi perangkat scanner',
          },
        },
      ],
    },
    {
      id: 'frontend',
      title: {
        en: 'Frontend & Mobile Interfaces',
        id: 'Antarmuka Frontend & Mobile',
      },
      items: [
        {
          name: 'JavaScript · React JS · React Native',
          detail: {
            en: 'Component-driven SPAs, cross-platform UI, state management',
            id: 'SPA berbasis komponen, antarmuka lintas platform, manajemen state',
          },
        },
        {
          name: 'jQuery · AJAX · Bootstrap · ApexChart',
          detail: {
            en: 'Real-time factory dashboards, asynchronous forms, interactive data charts',
            id: 'Dashboard pabrik real-time, formulir asinkron, grafik data interaktif',
          },
        },
      ],
    },
    {
      id: 'data-realtime',
      title: {
        en: 'Databases, Infor ERP & Real-Time Tooling',
        id: 'Basis Data, ERP Infor & Perkakas Real-Time',
      },
      items: [
        {
          name: 'Infor ERP · Custom Reports & Scripts',
          detail: {
            en: 'ERP maintenance, custom report creation, reporting scripts & user-side troubleshooting',
            id: 'Maintenance ERP Infor, pembuatan custom report, skrip laporan & troubleshooting error user',
          },
        },
        {
          name: 'MySQL · SQL Server · Microsoft Access',
          detail: {
            en: 'Schema design, enterprise reporting, dual-database synchronization',
            id: 'Perancangan skema, pelaporan enterprise, sinkronisasi basis data ganda',
          },
        },
        {
          name: 'Pusher WebSocket · REST API · Postman',
          detail: {
            en: 'Live event broadcasting, API contract testing, industrial scanner workflows',
            id: 'Siaran event real-time, pengujian kontrak API, alur scanner industri',
          },
        },
      ],
    },
  ],

  socials: [
    {
      id: 'website',
      label: 'Personal Website',
      handle: 'helmihakimudin.vercel.app',
      url: 'https://helmihakimudin.vercel.app/',
      description: {
        en: 'Live web portfolio showcase and interactive project demos',
        id: 'Etalase portofolio web langsung dan demo proyek interaktif',
      },
    },
    {
      id: 'email',
      label: 'Email',
      handle: 'helmihakimudin@gmail.com',
      url: 'mailto:helmihakimudin@gmail.com',
      description: {
        en: 'Direct contact for full-stack roles, freelance projects & collaboration',
        id: 'Kontak langsung untuk peluang kerja full-stack, proyek freelance & kolaborasi',
      },
    },
    {
      id: 'github',
      label: 'GitHub',
      handle: '@helmihakimudin',
      url: 'https://github.com/helmihakimudin',
      description: {
        en: 'Source repositories, Laravel & React experiments, and GitHub Pages builds',
        id: 'Repositori kode sumber, eksperimen Laravel & React, serta rilisan GitHub Pages',
      },
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'in/helmihakimudin',
      url: 'https://linkedin.com/in/helmihakimudin',
      description: {
        en: 'Full career timeline, verified certifications & professional network',
        id: 'Riwayat karier lengkap, sertifikasi terverifikasi & jejaring profesional',
      },
    },
  ],

  ui: {
    nav: {
      home: {en: 'World', id: 'Dunia'},
      projects: {en: 'Projects', id: 'Proyek'},
      experience: {en: 'Career', id: 'Karier'},
      connect: {en: 'Connect', id: 'Kontak'},
    },
    mobileNav: {
      home: {en: 'Quest', id: 'Main'},
      projects: {en: 'Work', id: 'Proyek'},
      experience: {en: 'Career', id: 'Karier'},
      connect: {en: 'Social', id: 'Kontak'},
    },
    ctaHeader: {
      en: 'Get in Touch',
      id: 'Hubungi Saya',
    },
    heroPrimaryCta: {
      en: 'Explore Selected Work',
      id: 'Lihat Proyek Pilihan',
    },
    heroSecondaryCta: {
      en: 'Career & Certs',
      id: 'Karier & Sertifikat',
    },
    sections: {
      projectsEyebrow: {
        en: 'Shipped Production Systems',
        id: 'Sistem Produksi yang Dirilis',
      },
      projectsTitle: {
        en: 'Projects & Web Platforms',
        id: 'Proyek & Platform Web',
      },
      projectsSubtitle: {
        en: 'Custom web systems spanning real-time manufacturing & QA dashboards, warehouse QR automation, HRIS/finance suites, and e-commerce optimization. Select any project to inspect details.',
        id: 'Sistem web kustom mencakup dashboard manufaktur & QA real-time, otomasi QR gudang, sistem HRIS/keuangan, hingga optimasi e-commerce. Pilih proyek mana saja untuk melihat detailnya.',
      },
      experienceEyebrow: {
        en: 'Career, Education & Credentials',
        id: 'Karier, Pendidikan & Sertifikasi',
      },
      experienceTitle: {
        en: 'Experience & Certifications',
        id: 'Pengalaman & Sertifikasi',
      },
      capabilitiesTitle: {
        en: 'Core Technical Stack',
        id: 'Keahlian Teknis Inti',
      },
      connectEyebrow: {
        en: 'Available for Collaboration',
        id: 'Terbuka untuk Kolaborasi',
      },
      connectTitle: {
        en: 'Let us build tailored web solutions together.',
        id: 'Mari wujudkan solusi web yang tepat guna bersama.',
      },
      connectSubtitle: {
        en: 'Reach out via email or visit my live portfolio to discuss full-stack engineering roles, custom web applications, or system optimization.',
        id: 'Hubungi saya melalui email atau kunjungi situs portofolio untuk mendiskusikan peran full-stack, pengembangan web kustom, atau optimasi sistem.',
      },
    },
    filters: {
      all: {en: 'All Work', id: 'Semua'},
      fullstack: {en: 'Full-Stack', id: 'Full-Stack'},
      frontend: {en: 'Frontend', id: 'Frontend'},
      backend: {en: 'Backend', id: 'Backend'},
      allStacks: {en: 'All Stacks', id: 'Semua Teknologi'},
      resetFilters: {en: 'Reset Filters', id: 'Atur Ulang Filter'},
      emptyTitle: {en: 'No matching projects', id: 'Tidak ada proyek yang cocok'},
      emptyDesc: {
        en: 'Try clearing the technology filter or switching back to all categories.',
        id: 'Coba hapus filter teknologi atau kembalikan ke semua kategori.',
      },
    },
    modal: {
      problemTitle: {en: 'Context & Challenge', id: 'Konteks & Tantangan'},
      architectureTitle: {en: 'System Architecture', id: 'Arsitektur Sistem'},
      highlightsTitle: {en: 'Key Engineering Decisions', id: 'Keputusan Rekayasa Utama'},
      outcomesTitle: {en: 'Measured Highlights', id: 'Pencapaian Utama'},
      stackTitle: {en: 'Technology Stack', id: 'Teknologi yang Digunakan'},
      liveDemo: {en: 'Visit Portfolio', id: 'Kunjungi Situs'},
      sourceCode: {en: 'GitHub / Case Link', id: 'Tautan GitHub / Situs'},
      close: {en: 'Close case study', id: 'Tutup studi kasus'},
      readCaseStudy: {en: 'Inspect Case Study', id: 'Lihat Studi Kasus'},
    },
    timelineTabs: {
      all: {en: 'All', id: 'Semua'},
      work: {en: 'Work', id: 'Pengalaman'},
      education: {en: 'Education', id: 'Pendidikan'},
      certification: {en: 'Certifications', id: 'Sertifikasi'},
    },
    connect: {
      copyEmail: {en: 'Copy Email Address', id: 'Salin Alamat Email'},
      copiedToast: {en: 'Email copied to clipboard', id: 'Alamat email berhasil disalin'},
      directMessage: {en: 'Send Email', id: 'Kirim Email'},
    },
    footer: {
      rights: {en: 'All rights reserved.', id: 'Hak cipta dilindungi.'},
      builtWith: {
        en: 'Helmi Hakimudin · Built with React, TypeScript & Tailwind CSS · GitHub Pages Ready',
        id: 'Helmi Hakimudin · Dibangun dengan React, TypeScript & Tailwind CSS · Siap untuk GitHub Pages',
      },
      backToTop: {en: 'Back to top', id: 'Kembali ke atas'},
    },
    game: {
      eyebrow: {
        en: 'Helmi Hakimudin · Interactive CV Quest',
        id: 'Helmi Hakimudin · Petualangan CV Interaktif',
      },
      title: {
        en: 'Run, jump & unlock my engineering journey.',
        id: 'Lari, lompat & jelajahi perjalanan rekayasa saya.',
      },
      subtitle: {
        en: 'A dedicated full-stack web developer crafting custom, user-centric applications. Play through the 4 stages to unlock SIPRO, SISQA, SIBAGUS & E-Smart—or jump directly to any section below.',
        id: 'Pengembang web full-stack yang membangun aplikasi khusus sesuai kebutuhan klien. Mainkan 4 tahap untuk membuka proyek SIPRO, SISQA, SIBAGUS & E-Smart—atau langsung lompat ke bagian di bawah.',
      },
      startPrompt: {
        en: 'Helmi Hakimudin — Interactive 2D CV',
        id: 'Helmi Hakimudin — Arena CV Interaktif 2D',
      },
      startAction: {
        en: 'Start Quest',
        id: 'Mulai Petualangan',
      },
      controlsHint: {
        en: 'Use Arrow Keys / WASD + Space to jump, or tap controls below',
        id: 'Gunakan Tombol Panah / WASD + Spasi untuk melompat, atau sentuh kontrol di bawah',
      },
      stageLabel: {en: 'WORLD', id: 'DUNIA'},
      coinsLabel: {en: 'SKILLS', id: 'SKILLS'},
      blocksLabel: {en: 'PROJECTS', id: 'PROYEK'},
      soundOn: {en: 'Sound On', id: 'Suara Aktif'},
      soundOff: {en: 'Muted', id: 'Bisu'},
      reset: {en: 'Restart', id: 'Ulangi'},
      warpLabel: {en: 'Warp Stage:', id: 'Pindah Area:'},
      stages: [
        {id: 'home', code: '1-1', label: {en: 'Profile', id: 'Profil'}},
        {id: 'projects', code: '1-2', label: {en: 'Projects', id: 'Proyek'}},
        {id: 'experience', code: '1-3', label: {en: 'Career', id: 'Karier'}},
        {id: 'connect', code: '1-4', label: {en: 'Goal', id: 'Kontak'}},
      ],
      blockHitPrefix: {
        en: 'Unlocked System:',
        id: 'Sistem Terbuka:',
      },
      inspectAction: {
        en: 'Open Details',
        id: 'Buka Detail',
      },
      checkpointPrefix: {
        en: 'Career Milestone:',
        id: 'Pencapaian Karier:',
      },
      stageClearTitle: {
        en: 'Stage Clear — Quest Complete',
        id: 'Stage Clear — Petualangan Selesai',
      },
      stageClearDesc: {
        en: 'You explored Helmi Hakimudin’s interactive CV from 2012 to today. Ready to collaborate on your next web project?',
        id: 'Anda telah menjelajahi CV interaktif Helmi Hakimudin dari 2012 hingga saat ini. Siap berkolaborasi untuk proyek web berikutnya?',
      },
      playAgain: {
        en: 'Play Again',
        id: 'Main Lagi',
      },
      jumpToConnect: {
        en: 'Connect & Email',
        id: 'Kontak & Email',
      },
    },
    skillTree: {
      eyebrow: {
        en: 'Leveling Up · Competency Tree',
        id: 'Leveling Up · Pohon Keahlian',
      },
      title: {
        en: 'Engineering Progression (2012 — Present)',
        id: 'Progresi Keahlian Rekayasa (2012 — Sekarang)',
      },
      eraLabel: {
        en: 'Timeline Era:',
        id: 'Tahap Karier:',
      },
      xpUnit: {
        en: 'XP',
        id: 'XP',
      },
      levelPrefix: {
        en: 'LVL',
        id: 'LVL',
      },
      unlockedLabel: {
        en: 'Unlocked Competencies',
        id: 'Kompetensi Terbuka',
      },
      inspectRelated: {
        en: 'Explore Related Work',
        id: 'Lihat Karya Terkait',
      },
      levelUpNext: {
        en: 'Level Up Era',
        id: 'Naikkan Tahap',
      },
    },
  },
};
