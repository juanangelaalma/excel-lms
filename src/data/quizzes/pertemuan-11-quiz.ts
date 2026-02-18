import { QuizQuestion } from '@/types'

export const pertemuan11Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa perbedaan utama antara SUMIF dan SUMIFS?',
        options: [
            'SUMIF lebih cepat dari SUMIFS',
            'SUMIF untuk satu kriteria, SUMIFS untuk banyak kriteria',
            'SUMIF untuk angka, SUMIFS untuk text',
            'Tidak ada perbedaan, keduanya sama'
        ],
        correctAnswer: 1,
        explanation: 'SUMIF digunakan untuk menjumlahkan dengan satu kriteria, sedangkan SUMIFS dapat menangani banyak kriteria (logika AND).'
    },
    {
        id: 2,
        question: 'Dalam formula =SUMIF(A2:A10, "Laptop", C2:C10), apa fungsi dari C2:C10?',
        options: [
            'Range yang dicek untuk kriteria',
            'Range yang dijumlahkan',
            'Range untuk hasil',
            'Range untuk kriteria kedua'
        ],
        correctAnswer: 1,
        explanation: 'Parameter ketiga dalam SUMIF (sum_range) adalah range yang akan dijumlahkan jika kriteria terpenuhi.'
    },
    {
        id: 3,
        question: 'Bagaimana cara menggunakan COUNTIF untuk menghitung cell dengan nilai lebih dari 100?',
        options: [
            '=COUNTIF(A1:A10, 100)',
            '=COUNTIF(A1:A10, ">100")',
            '=COUNTIF(A1:A10, >100)',
            '=COUNTIF(A1:A10, GREATER(100))'
        ],
        correctAnswer: 1,
        explanation: 'Operator harus ditulis dalam quotes: ">100". Tanpa quotes akan error.'
    },
    {
        id: 4,
        question: 'Apa fungsi wildcard (*) dalam COUNTIF?',
        options: [
            'Menghitung semua cell',
            'Mencocokkan karakter apapun (banyak karakter)',
            'Mencocokkan satu karakter saja',
            'Mengalikan hasil dengan angka'
        ],
        correctAnswer: 1,
        explanation: 'Wildcard (*) match 0 atau lebih karakter apapun. Contoh: "Jkt*" akan match "Jkt", "Jakarta", "Jkt-Pusat". Untuk satu karakter gunakan (?).'
    },
    {
        id: 5,
        question: 'Apa yang dimaksud dengan "criteria_range" dalam SUMIFS?',
        options: [
            'Range yang dijumlahkan',
            'Range yang dicek untuk kriteria',
            'Range untuk hasil akhir',
            'Range untuk error handling'
        ],
        correctAnswer: 1,
        explanation: 'Criteria_range adalah range yang akan dicek apakah memenuhi kriteria atau tidak. Sum_range adalah yang dijumlahkan.'
    }
]
