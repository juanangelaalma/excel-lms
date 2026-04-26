import { QuizQuestion } from '@/types'

export const pertemuan07Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Operator apa yang dapat digunakan untuk menggabungkan dua teks atau lebih di Excel?',
        options: [
            '+ (Plus)',
            '* (Bintang)',
            '& (Ampersand)',
            '# (Hash)'
        ],
        correctAnswer: 2,
        explanation: 'Operator & (Ampersand) digunakan untuk menggabungkan/menyambung teks di Excel. Contoh: ="Budi" & " " & "Santoso".'
    },
    {
        id: 2,
        question: 'Jika di sel A1 berisi teks "EXCEL MASTER", apa hasil dari rumus =LOWER(A1)?',
        options: [
            'EXCEL MASTER',
            'Excel Master',
            'excel master',
            'Error'
        ],
        correctAnswer: 2,
        explanation: 'Fungsi LOWER mengubah semua huruf kapital menjadi huruf kecil.'
    },
    {
        id: 3,
        question: 'Anda memiliki nomor handphone di sel A1: "0812-3456-7890". Rumus mana yang harus digunakan untuk mengambil angka "0812"?',
        options: [
            '=LEFT(A1, 4)',
            '=RIGHT(A1, 4)',
            '=MID(A1, 0, 4)',
            '=LEFT(A1, 5)'
        ],
        correctAnswer: 0,
        explanation: 'Fungsi LEFT(teks, 4) akan mengambil 4 karakter pertama dari sebelah kiri teks tersebut, yaitu "0812".'
    },
    {
        id: 4,
        question: 'Apa fungsi utama dari rumus =TRIM(teks)?',
        options: [
            'Menghapus semua spasi di dalam teks',
            'Menghapus teks yang berduplikat',
            'Memotong teks menjadi setengah bagian',
            'Menghapus spasi di awal/akhir dan menyisakan hanya satu spasi di antara kata'
        ],
        correctAnswer: 3,
        explanation: 'TRIM sangat berguna untuk membersihkan "spasi liar" di awal atau akhir kata, dan menggabungkan spasi ganda di tengah teks menjadi spasi tunggal.'
    },
    {
        id: 5,
        question: 'Jika sel A2 berisi "apple", berapa hasil dari =LEN(A2)?',
        options: [
            '4',
            '5',
            '6',
            'a'
        ],
        correctAnswer: 1,
        explanation: 'Fungsi LEN menghitung panjang karakter. Kata "apple" terdiri dari 5 huruf (karakter), jadi hasilnya 5.'
    }
]
