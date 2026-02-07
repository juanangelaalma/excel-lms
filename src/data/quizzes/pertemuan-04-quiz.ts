import { QuizQuestion } from '@/types'

export const pertemuan04Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa hasil dari formula =IF(10 > 5, "Benar", "Salah")?',
        options: [
            '"Benar"',
            '"Salah"',
            'TRUE',
            '#VALUE! error'
        ],
        correctAnswer: 0,
        explanation: 'Karena 10 > 5 adalah TRUE, maka IF akan mengembalikan nilai yang kedua yaitu "Benar".'
    },
    {
        id: 2,
        question: 'Dalam Nested IF untuk grading (A, B, C, D), urutan kondisi yang benar adalah:',
        options: [
            'Dari yang terkecil ke terbesar (60, 75, 90)',
            'Dari yang terbesar ke terkecil (90, 75, 60)',
            'Urutan tidak penting',
            'Harus seleading dengan abjad (A ke D)'
        ],
        correctAnswer: 1,
        explanation: 'Nested IF harus dimulai dari kondisi terbesar ke terkecil agar logic check benar. Jika kita cek dari kecil, nilai 90 akan kena di check pertama (>=60) dan langsung return C.'
    },
    {
        id: 3,
        question: 'Fungsi AND akan mengembalikan TRUE jika:',
        options: [
            'Salah satu kondisi TRUE',
            'Semua kondisi TRUE',
            'Minimal 2 kondisi TRUE',
            'Tidak ada kondisi yang TRUE'
        ],
        correctAnswer: 1,
        explanation: 'AND memerlukan SEMUA kondisi bernilai TRUE agar hasilnya TRUE. Jika ada satu saja yang FALSE, hasil AND adalah FALSE.'
    },
    {
        id: 4,
        question: 'Kapan sebaiknya menggunakan OR dalam IF?',
        options: [
            'Ketika semua kondisi harus terpenuhi',
            'Ketika salah satu kondisi saja sudah cukup',
            'Ketika tidak ada kondisi yang terpenuhi',
            'OR tidak bisa digunakan dalam IF'
        ],
        correctAnswer: 1,
        explanation: 'OR digunakan ketika kita ingin action dilakukan jika MINIMAL SATU dari beberapa kondisi terpenuhi. Contoh: diskon jika VIP ATAU belanja >1 juta.'
    },
    {
        id: 5,
        question: 'Apa fungsi dari IFERROR?',
        options: [
            'Menghindari error dalam formula',
            'Menampilkan pesan custom jika formula menghasilkan error',
            'Menghapus error dari spreadsheet',
            'Mem-fix formula yang salah'
        ],
        correctAnswer: 1,
        explanation: 'IFERROR tidak mencegah error, tapi menangkap error dan menampilkan nilai custom (text atau angka) sebagai gantinya. Ini membuat spreadsheet lebih user-friendly.'
    }
]
