import { QuizQuestion } from '@/types'

export const pertemuan12Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa kegunaan utama dari Pivot Table?',
        options: [
            'Membuat chart yang bagus',
            'Meringkas dan menganalisis dataset besar dengan cepat',
            'Mengedit data mentah',
            'Membuat formula otomatis'
        ],
        correctAnswer: 1,
        explanation: 'Pivot Table adalah tool powerful untuk meringkas, menganalisis, dan menjelajahi dataset besar dengan cepat tanpa mengubah data asli.'
    },
    {
        id: 2,
        question: 'Dimana kita menempatkan field untuk mengelompokkan data secara vertikal dalam Pivot Table?',
        options: [
            'Values area',
            'Filters area',
            'Rows area',
            'Columns area'
        ],
        correctAnswer: 2,
        explanation: 'Rows area digunakan untuk mengelompokkan data secara vertikal (ke bawah). Columns area untuk horizontal (ke samping).'
    },
    {
        id: 3,
        question: 'Jika data source berubah, apa yang harus dilakukan pada Pivot Table?',
        options: [
            'Buat pivot baru',
            'Refresh pivot table',
            'Hapus dan recreate',
            'Tidak perlu apa-apa, otomatis update'
        ],
        correctAnswer: 1,
        explanation: 'Pivot Table tidak otomatis update. Harus di-refresh manual (Right-click → Refresh atau Alt+F5) agar data terbaru muncul.'
    },
    {
        id: 4,
        question: 'Apa fungsi dari "Grouping" dalam Pivot Table?',
        options: [
            'Menghapus data duplikat',
            'Mengelompokkan item berdasarkan interval (misal: bulan, quarter, range angka)',
            'Membuat pivot table baru',
            'Menyembunyikan kolom'
        ],
        correctAnswer: 1,
        explanation: 'Grouping memungkinkan kita mengelompokkan dates (by month, quarter, year) atau numbers (by intervals) untuk analisis yang lebih meaningful.'
    },
    {
        id: 5,
        question: 'Field apa yang kita drag ke "Values" area untuk menghitung jumlah transaksi?',
        options: [
            'Field apapun (akan auto count)',
            'Hanya field yang berisi angka',
            'Field yang unique untuk tiap transaksi (misal: Transaction ID)',
            'Tidak bisa menghitung jumlah transaksi'
        ],
        correctAnswer: 2,
        explanation: 'Untuk count jumlah transaksi, drag field yang unique (misal ID) ke Values. Akan otomatis jadi Count. Field angka akan default ke Sum.'
    }
]


export const pertemuan13Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa perbedaan antara Calculated Field dan Calculated Item?',
        options: [
            'Tidak ada perbedaan',
            'Calculated Field membuat column baru, Calculated Item membuat row baru dalam field existing',
            'Calculated Field lebih cepat',
            'Calculated Item hanya untuk angka'
        ],
        correctAnswer: 1,
        explanation: 'Calculated Field membuat field/kolom baru di pivot. Calculated Item membuat item baru dalam field yang sudah ada (misal: item "Total" dalam field Produk).'
    },
    {
        id: 2,
        question: 'Apa fungsi dari Slicer dalam Pivot Table?',
        options: [
            'Membuat chart',
            'Filter visual yang lebih user-friendly dan bisa dipakai multiple pivots',
            'Mengurutkan data',
            'Mengelompokkan tanggal'
        ],
        correctAnswer: 1,
        explanation: 'Slicer adalah visual filter yang memudahkan user untuk filter data tanpa perlu dropdown. Bisa connect ke multiple pivot tables sekaligus.'
    },
    {
        id: 3,
        question: 'Bagaimana cara membuat Calculated Field dalam Pivot Table?',
        options: [
            'Ketik formula langsung di cell',
            'PivotTable Analyze → Fields, Items, & Sets → Calculated Field',
            'Insert → Calculated Field',
            'Tidak bisa membuat calculated field'
        ],
        correctAnswer: 1,
        explanation: 'Calculated Field dibuat melalui: PivotTable Analyze tab → Fields, Items, & Sets → Calculated Field. Lalu buat formula menggunakan field names.'
    },
    {
        id: 4,
        question: 'Apa fungsi Timeline dalam Pivot Table?',
        options: [
            'Menampilkan waktu tercepat',
            'Filter tanggal dengan visual slider (misal: by month, quarter, year)',
            'Membuat grafik timeline',
            'Mengurutkan berdasarkan tanggal'
        ],
        correctAnswer: 1,
        explanation: 'Timeline adalah filter visual khusus untuk field tanggal, memudahkan filtering by day, month, quarter, atau year dengan slider yang intuitif.'
    },
    {
        id: 5,
        question: 'Dalam "Show Values As", apa fungsi dari "% of Grand Total"?',
        options: [
            'Menampilkan persentase dari total keseluruhan',
            'Menampilkan persentase error',
            'Menampilkan grand total dalam persen',
            'Tidak ada fungsi ini'
        ],
        correctAnswer: 0,
        explanation: '"% of Grand Total" menampilkan kontribusi setiap item sebagai persentase dari total keseluruhan. Berguna untuk melihat proporsi.'
    }
]


export const pertemuan14Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Chart type mana yang paling cocok untuk menampilkan trend data sepanjang waktu?',
        options: [
            'Pie Chart',
            'Line Chart',
            'Doughnut Chart',
            'Radar Chart'
        ],
        correctAnswer: 1,
        explanation: 'Line Chart paling cocok untuk menampilkan trend sepanjang waktu karena bisa menunjukkan perubahan dengan jelas.'
    },
    {
        id: 2,
        question: 'Kapan sebaiknya TIDAK menggunakan Pie Chart?',
        options: [
            'Saat data lebih dari 5-7 kategori',
            'Saat ingin tampilkan proporsi',
            'Saat semua data sama besar',
            'Saat budget terbatas'
        ],
        correctAnswer: 0,
        explanation: 'Pie Chart sulit dibaca jika terlalu banyak slice (>5-7). Lebih baik gunakan Bar Chart untuk banyak kategori.'
    },
    {
        id: 3,
        question: 'Apa kegunaan dari Combo Chart?',
        options: [
            'Menggabungkan 2 data dengan scale berbeda dalam satu chart',
            'Membuat chart lebih colorful',
            'Mempercepat loading chart',
            'Hanya untuk data kombinasi text dan angka'
        ],
        correctAnswer: 0,
        explanation: 'Combo Chart memungkinkan kita menampilkan 2 tipe data dengan scale berbeda (misal: Revenue dalam bars, Margin % dalam line) dalam satu chart.'
    },
    {
        id: 4,
        question: 'Apa fungsi dari "Data Labels" dalam chart?',
        options: [
            'Memberi nama chart',
            'Menampilkan nilai data langsung di chart',
            'Label untuk axis',
            'Membuat chart title'
        ],
        correctAnswer: 1,
        explanation: 'Data Labels menampilkan nilai aktual setiap data point langsung di chart, memudahkan pembacaan tanpa perlu cek axis.'
    },
    {
        id: 5,
        question: 'Apa yang dimaksud dengan "Secondary Axis" dalam chart?',
        options: [
            'Axis cadangan jika primary rusak',
            'Axis kedua dengan scale berbeda untuk series kedua',
            'Axis untuk warna',
            'Axis horizontal tambahan'
        ],
        correctAnswer: 1,
        explanation: 'Secondary Axis memungkinkan kita menampilkan 2 data dengan scale sangat berbeda (misal: Revenue jutaan, Margin % 0-100) dalam satu chart.'
    }
]


export const pertemuan15Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa fungsi utama dari Conditional Formatting?',
        options: [
            'Membuat cell berwarna random',
            'Visual formatting otomatis berdasarkan nilai cell',
            'Mengubah font style',
            'Membuat border'
        ],
        correctAnswer: 1,
        explanation: 'Conditional Formatting memberikan visual formatting otomatis berdasarkan kondisi/nilai cell, memudahkan identifikasi pola dan outlier.'
    },
    {
        id: 2,
        question: 'Kapan sebaiknya menggunakan "Color Scales"?',
        options: [
            'Untuk highlight nilai tertinggi saja',
            'Untuk membuat heatmap dan melihat distribusi nilai dalam range',
            'Untuk membuat chart',
            'Untuk print dokumen'
        ],
        correctAnswer: 1,
        explanation: 'Color Scales membuat gradient warna dari min ke max, membentuk heatmap yang memudahkan melihat distribusi dan pola nilai.'
    },
    {
        id: 3,
        question: 'Apa kegunaan "Icon Sets" dalam Conditional Formatting?',
        options: [
            'Menambah gambar ke Excel',
            'Menampilkan icon (arrows, symbols) based on nilai untuk quick visual indicator',
            'Membuat emoji',
            'Hanya untuk dekorasi'
        ],
        correctAnswer: 1,
        explanation: 'Icon Sets menampilkan icon visual indicator (arrows, traffic lights, ratings) berdasarkan nilai, memudahkan quick assessment tanpa baca angka.'
    },
    {
        id: 4,
        question: 'Bagaimana cara membuat Conditional Formatting dengan formula custom?',
        options: [
            'Tidak bisa pakai formula',
            'Pilih "New Rule" → "Use a formula to determine which cells to format"',
            'Ketik langsung di cell',
            'Gunakan macro'
        ],
        correctAnswer: 1,
        explanation: 'Untuk formula custom: New Rule → Use a formula to determine which cells to format. Formula harus return TRUE/FALSE.'
    },
    {
        id: 5,
        question: 'Apa yang terjadi jika ada multiple conditional formatting rules pada cell yang sama?',
        options: [
            'Error',
            'Yang terakhir dibuat yang dipakai',
            'Yang paling atas dalam "Manage Rules" yang priority',
            'Excel pilih random'
        ],
        correctAnswer: 2,
        explanation: 'Rules di-apply dari atas ke bawah dalam "Manage Rules". Rule paling atas punya priority tertinggi. Bisa reorder dengan drag.'
    }
]


export const pertemuan16Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa prinsip utama dalam Dashboard Design?',
        options: [
            'Semakin banyak warna semakin bagus',
            'Informasi penting harus terlihat at-a-glance tanpa perlu scroll',
            'Harus ada semua fitur Excel',
            'Semakin banyak chart semakin baik'
        ],
        correctAnswer: 1,
        explanation: 'Dashboard yang baik harus menyampaikan informasi key at-a-glance. User harus bisa langsung understand tanpa perlu scroll atau klik-klik banyak.'
    },
    {
        id: 2,
        question: 'Apa fungsi KPI (Key Performance Indicator) dalam dashboard?',
        options: [
            'Membuat dashboard lebih colorful',
            'Menampilkan metric paling penting secara prominent',
            'Hanya untuk CEO',
            'Menampilkan semua data'
        ],
        correctAnswer: 1,
        explanation: 'KPI menampilkan metric paling critical dan penting untuk business secara prominent (biasanya di bagian atas dashboard dengan angka besar).'
    },
    {
        id: 3,
        question: 'Mengapa penting menggunakan color scheme yang konsisten?',
        options: [
            'Supaya pretty',
            'Membantu user recognize pattern dan information hierarchy dengan cepat',
            'Karena wajib',
            'Tidak penting'
        ],
        correctAnswer: 1,
        explanation: 'Color scheme konsisten membantu user cepat recognize categories dan information hierarchy. Misal: merah selalu untuk negative, hijau untuk positive.'
    },
    {
        id: 4,
        question: 'Apa keuntungan menghubungkan multiple charts ke satu slicer?',
        options: [
            'Charts jadi lebih besar',
            'Semua charts di-filter sekaligus, membuat dashboard interaktif',
            'Slicer jadi lebih cepat',
            'Tidak ada keuntungan'
        ],
        correctAnswer: 1,
        explanation: 'Satu slicer yang connected ke multiple pivot/charts membuat seluruh dashboard ter-filter sekaligus, memberikan interactive experience yang powerful.'
    },
    {
        id: 5,
        question: 'Apa yang sebaiknya dihindari dalam dashboard design?',
        options: [
            'Penggunaan charts',
            'ClutterSpent, terlalu banyak informasi, dan chartjunk yang tidak perlu',
            'Warna',
            'Angka-angka'
        ],
        correctAnswer: 1,
        explanation: 'Dashboard yang baik harus clean dan focused. Hindari clutter, terlalu banyak info yang tidak penting, 3D effects, dan elemen yang hanya decorative.'
    }
]
