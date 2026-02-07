import { QuizQuestion } from '@/types'

export const pertemuan01Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa yang dimaksud dengan "Cell" dalam Excel?',
        options: [
            'Keseluruhan file Excel',
            'Kotak tempat data yang diidentifikasi dengan huruf dan angka (contoh: A1)',
            'Baris di dalam worksheet',
            'Worksheet dalam workbook'
        ],
        correctAnswer: 1,
        explanation: 'Cell adalah kotak individual tempat data, diidentifikasi dengan kombinasi huruf kolom dan angka baris (contoh: A1, B5, C10).'
    },
    {
        id: 2,
        question: 'Keyboard shortcut apa yang digunakan untuk langsung ke cell A1?',
        options: [
            'Ctrl + Home',
            'Ctrl + End',
            'Ctrl + A',
            'Alt + Home'
        ],
        correctAnswer: 0,
        explanation: 'Ctrl + Home akan membawa cursor langsung ke cell A1, yang merupakan cell paling awal di worksheet.'
    },
    {
        id: 3,
        question: 'Tab ribbon mana yang berisi fungsi untuk membuat charts dan tables?',
        options: [
            'Home',
            'Formulas',
            'Insert',
            'Data'
        ],
        correctAnswer: 2,
        explanation: 'Tab "Insert" digunakan untuk menyisipkan berbagai elemen seperti charts, tables, shapes, dan images ke dalam worksheet.'
    },
    {
        id: 4,
        question: 'Apa fungsi dari "Freeze Panes"?',
        options: [
            'Mengunci file agar tidak bisa di edit',
            'Membuat header tetap terlihat saat scroll',
            'Menyimpan file secara otomatis',
            'Mengunci formula agar tidak berubah'
        ],
        correctAnswer: 1,
        explanation: 'Freeze Panes membuat baris atau kolom tertentu (biasanya header) tetap terlihat di layar saat kita scroll data yang panjang.'
    },
    {
        id: 5,
        question: 'Apa perbedaan antara format .xlsx dan .csv?',
        options: [
            '.xlsx lebih kecil ukuran filenya',
            '.csv bisa menyimpan formula, .xlsx tidak',
            '.xlsx menyimpan formatting dan formula, .csv hanya plain text',
            'Tidak ada perbedaan, keduanya sama'
        ],
        correctAnswer: 2,
        explanation: '.xlsx adalah format Excel yang menyimpan formatting, formula, dan fitur Excel lainnya. .csv (Comma-Separated Values) hanya menyimpan data mentah tanpa formatting, cocok untuk import/export data.'
    }
]
