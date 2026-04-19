import { QuizQuestion } from '@/types'

export const pertemuan05Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa kegunaan utama dari fungsi VLOOKUP?',
        options: [
            'Menghitung jumlah sel dalam satu kolom',
            'Mencari nilai di kolom paling kiri tabel dan mengembalikan nilai dari kolom lain',
            'Mengubah format angka menjadi mata uang',
            'Membuat grafik otomatis'
        ],
        correctAnswer: 1,
        explanation: 'VLOOKUP (Vertical Lookup) mencari nilai kunci di kolom pertama (paling kiri) dari rentang yang ditentukan dan mengambil data dari kolom yang ditentukan di baris yang sama.'
    },
    {
        id: 2,
        question: 'Dalam formula =VLOOKUP(A2, D2:F10, 3, FALSE), angka 3 merujuk pada:',
        options: [
            'Baris ketiga dalam tabel',
            'Kolom ketiga dalam rentang D2:F10',
            'Nilai yang dicari adalah angka 3',
            'Jumlah kriteria pencarian'
        ],
        correctAnswer: 1,
        explanation: 'Angka 3 adalah col_index_num, yang menentukan kolom mana dalam range (table_array) yang datanya ingin diambil. Dalam range D2:F10, kolom 1 adalah D, 2 adalah E, dan 3 adalah F.'
    },
    {
        id: 3,
        question: 'Apa perbedaan mendasar antara VLOOKUP dan HLOOKUP?',
        options: [
            'VLOOKUP untuk angka, HLOOKUP untuk teks',
            'VLOOKUP mencari secara vertikal (kolom), HLOOKUP mencari secara horizontal (baris)',
            'HLOOKUP lebih cepat daripada VLOOKUP',
            'VLOOKUP hanya untuk Excel versi lama'
        ],
        correctAnswer: 1,
        explanation: 'VLOOKUP mencari data di kolom (vertikal), sedangkan HLOOKUP mencari data di baris (horizontal).'
    },
    {
        id: 4,
        question: 'Mengapa sering disarankan menggunakan "FALSE" sebagai argumen [range_lookup] di VLOOKUP?',
        options: [
            'Agar Excel tidak lambat',
            'Untuk memastikan pencarian yang "Exact Match" (sama persis)',
            'Agar Excel mencari nilai yang mendekati',
            'Karena FALSE adalah nilai default'
        ],
        correctAnswer: 1,
        explanation: 'FALSE (atau 0) memberitahu Excel untuk hanya mengembalikan hasil jika nilai yang dicari ditemukan sama persis. Jika TRUE, Excel akan mencari nilai yang mendekati (cocok untuk rentang nilai seperti pajak/grade).'
    },
    {
        id: 5,
        question: 'Apa keunggulan XLOOKUP dibandingkan VLOOKUP?',
        options: [
            'XLOOKUP bisa mencari data ke arah kiri (kolom referensi tidak harus di paling kiri)',
            'XLOOKUP tidak memerlukan argumen "FALSE" untuk exact match secara default',
            'XLOOKUP lebih tahan terhadap perubahan kolom (insert/delete)',
            'Semua jawaban di atas benar'
        ],
        correctAnswer: 3,
        explanation: 'XLOOKUP adalah fungsi modern yang memperbaiki banyak keterbatasan VLOOKUP, termasuk kemampuan mencari ke kiri, default exact match, dan fleksibilitas range.'
    }
]
