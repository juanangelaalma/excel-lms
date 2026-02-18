import { QuizQuestion } from '@/types'

export const pertemuan10Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa fungsi utama dari Data Validation?',
        options: [
            'Mempercantik tampilan Excel',
            'Mencegah input data yang tidak valid dan standardisasi format',
            'Mempercepat perhitungan formula',
            'Membuat backup otomatis'
        ],
        correctAnswer: 1,
        explanation: 'Data Validation digunakan untuk mengontrol jenis data yang bisa diinput user, mencegah error, dan menjaga konsistensi data.'
    },
    {
        id: 2,
        question: 'Bagaimana cara membuat dropdown list dengan 3 pilihan: "Ya", "Tidak", "Belum"?',
        options: [
            'Source: Ya;Tidak;Belum',
            'Source: "Ya,Tidak,Belum"',
            'Source: Ya|Tidak|Belum',
            'Source: [Ya, Tidak, Belum]'
        ],
        correctAnswer: 1,
        explanation: 'Untuk dropdown list manual, gunakan koma (,) sebagai separator dan bungkus dengan quotes. Contoh: "Ya,Tidak,Belum"'
    },
    {
        id: 3,
        question: 'Apa keuntungan menggunakan Named Range untuk source dropdown?',
        options: [
            'Lebih cepat dari cell reference',
            'Lebih mudah dibaca dan maintain',
            'Tidak ada keuntungan, sama saja',
            'Hanya bisa digunakan untuk angka'
        ],
        correctAnswer: 1,
        explanation: 'Named Range lebih mudah dibaca (mis: =ListKota vs=Sheet2!$A$1:$A$10) dan lebih mudah dikelola ketika source berubah.'
    },
    {
        id: 4,
        question: 'Fungsi INDIRECT dalam dependent dropdown digunakan untuk?',
        options: [
            'Validasi input user',
            'Mereferensikan named range secara dinamis berdasarkan nilai cell',
            'Membuat dropdown lebih cepat',
            'Menghapus validasi'
        ],
        correctAnswer: 1,
        explanation: '=INDIRECT(A1) akan mereferensikan named range yang namanya sesuai dengan value di A1. Jadi dropdown bisa berubah dinamis.'
    },
    {
        id: 5,
        question: 'Apa perbedaan antara Error Alert "Stop" dan "Warning"?',
        options: [
            'Stop lebih lambat dari Warning',
            'Stop memblokir input invalid, Warning hanya peringatan tapi bisa tetap input',
            'Warning lebih strict dari Stop',
            'Tidak ada perbedaan'
        ],
        correctAnswer: 1,
        explanation: 'Stop akan benar-benar mencegah user menginput data invalid. Warning hanya memberi peringatan tapi user masih bisa lanjut input.'
    }
]
