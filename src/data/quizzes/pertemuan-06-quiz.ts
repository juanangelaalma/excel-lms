import { QuizQuestion } from '@/types'

export const pertemuan06Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa fungsi utama dari INDEX dalam Excel?',
        options: [
            'Mencari letak/posisi suatu nilai dalam sebuah rentang',
            'Mengambil nilai dari sebuah rentang berdasarkan posisi baris dan kolom tertentu',
            'Menjumlahkan sel berdasarkan kriteria tertentu',
            'Menggabungkan teks dari beberapa sel'
        ],
        correctAnswer: 1,
        explanation: 'Fungsi INDEX digunakan untuk mengambil atau mengembalikan sebuah nilai dalam sebuah tabel/rentang data berdasarkan nomor baris dan/atau nomor kolom yang ditentukan.'
    },
    {
        id: 2,
        question: 'Fungsi mana yang digunakan untuk menemukan nomor urut (posisi) suatu data dalam sebuah baris atau kolom?',
        options: [
            'VLOOKUP',
            'INDEX',
            'MATCH',
            'SEARCH'
        ],
        correctAnswer: 2,
        explanation: 'Fungsi MATCH mencari sebuah nilai dalam rentang (range) satu dimensi, dan mengembalikan posisi relatif nilai tersebut dalam rentang itu.'
    },
    {
        id: 3,
        question: 'Apa keuntungan utama INDEX & MATCH dibandingkan VLOOKUP biasa?',
        options: [
            'Dapat mencari data ke sebelah kiri dari kolom pencarian (Left Lookup)',
            'Tidak rentan rusak jika ada kolom baru yang disisipkan (Dynamic)',
            'Bisa memproses data lebih cepat untuk tabel yang sangat besar',
            'Semua jawaban di atas benar'
        ],
        correctAnswer: 3,
        explanation: 'Kombinasi INDEX & MATCH jauh lebih fleksibel daripada VLOOKUP: bisa mencari ke segala arah (termasuk kiri), kebal terhadap penyisipan/penghapusan kolom karena tidak pakai nomor indeks statis, dan memproses data besar lebih efisien.'
    },
    {
        id: 4,
        question: 'Jika rumusnya =INDEX(A2:A10, MATCH(D2, B2:B10, 0)), apa yang sebenarnya dilakukan rumus tersebut?',
        options: [
            'Mencari nilai D2 di kolom A, lalu mengambil hasilnya di kolom B',
            'Mencari nilai D2 di kolom B, lalu mengambil hasilnya di kolom A',
            'Menjumlahkan nilai di kolom A berdasarkan kriteria di kolom B',
            'Mencari nilai D2, lalu menampilkan posisi angkanya'
        ],
        correctAnswer: 1,
        explanation: 'Rumus ini akan menggunakan MATCH untuk mencari posisi nilai D2 di dalam rentang B2:B10. Setelah posisinya ketemu (misal baris ke-3), INDEX akan mengambil nilai di baris ke-3 dari rentang A2:A10.'
    },
    {
        id: 5,
        question: 'Angka 0 (Nol) di argumen terakhir pada fungsi MATCH (misal: MATCH(C1, A1:A10, 0)) berfungsi untuk:',
        options: [
            'Mengabaikan error',
            'Pencarian ke arah kiri',
            'Exact Match (Mencari nilai yang sama persis)',
            'Approximate Match (Mencari nilai terdekat)'
        ],
        correctAnswer: 2,
        explanation: 'Sama seperti parameter FALSE pada VLOOKUP, angka 0 pada argumen match_type dalam fungsi MATCH digunakan untuk memastikan pencarian harus "Exact Match" atau sama persis.'
    }
]
