import { QuizQuestion } from '@/types'

export const pertemuan02Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa yang terjadi jika Anda mengetik \'123 di dalam cell?',
        options: [
            'Excel menampilkan error',
            'Excel menyimpannya sebagai text, bukan number',
            'Excel otomatis convert jadi number 123',
            'Excel menghapus petik dan menyimpan sebagai number'
        ],
        correctAnswer: 1,
        explanation: 'Tanda petik (\') di awal membuat Excel memperlakukan input sebagai text. Ini berguna untuk nomor ID atau nomor HP yang tidak akan dikalkulasi.'
    },
    {
        id: 2,
        question: 'Apa fungsi dari"Wrap Text"?',
        options: [
            'Menyembunyikan text yang terlalu panjang',
            'Memotong text agar muat dalam cell',
            'Membuat text menjadi multi-line dalam satu cell',
            'Mengubah ukuran font menjadi lebih kecil'
        ],
        correctAnswer: 2,
        explanation: 'Wrap Text membuat text yang panjang ditampilkan dalam beberapa baris dalam satu cell, bukan terpotong atau overflow.'
    },
    {
        id: 3,
        question: 'Bagaimana cara cepat untuk auto-fit column width sesuai dengan isi cell?',
        options: [
            'Klik kanan column header → Auto-fit',
            'Double-click border antara column headers',
            'Ctrl + A lalu Ctrl + F',
            'Home Tab → Auto-fit Column'
        ],
        correctAnswer: 1,
        explanation: 'Double-click pada border antara column headers (di bagian atas) akan otomatis menyesuaikan lebar column dengan content yang paling panjang.'
    },
    {
        id: 4,
        question: 'Apa keuntungan menggunakan "Format as Table" dibanding range biasa?',
        options: [
            'Hanya membuat tampilan lebih bagus',
            'Auto filter, structured references, dan auto-expand',
            'Membuat file lebih kecil',
            'Mencegah data di-edit'
        ],
        correctAnswer: 1,
        explanation: 'Format as Table memberikan banyak fitur: auto filter di header, structured references dalam formula, otomatis expand saat tambah data, dan bisa tambah total row.'
    },
    {
        id: 5,
        question: 'Excel menyimpan tanggal secara internal sebagai apa?',
        options: [
            'String/Text',
            'Angka (number) dimulai dari 1 = 1 Januari 1900',
            'Format khusus ISO 8601',
            'Unix timestamp'
        ],
        correctAnswer: 1,
        explanation: 'Excel menyimpan tanggal sebagai serial number, dimana 1 = 1 Januari 1900. Makanya kita bisa menghitung selisih hari dengan operasi matematika biasa.'
    }
]
