export interface QuizQuestion {
    id: number
    question: string
    options: string[]
    correctAnswer: number // index 0-3
    explanation: string
}

export const pertemuan03Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa fungsi dari formula =SUM(A1:A5)?',
        options: [
            'Mengalikan semua nilai di A1 sampai A5',
            'Menjumlahkan semua nilai di A1 sampai A5',
            'Menghitung rata-rata nilai di A1-A5',
            'Mencari nilai tertinggi di A1-A5'
        ],
        correctAnswer: 1,
        explanation: 'SUM function adds all numbers in the specified range A1 through A5.',
    },
    {
        id: 2,
        question: 'Jika cell B2:B6 berisi nilai 80, 90, 85, 95, 75, berapakah hasil dari =AVERAGE(B2:B6)?',
        options: [
            '425',
            '85',
            '90',
            '80'
        ],
        correctAnswer: 1,
        explanation: 'AVERAGE calculates the mean: (80+90+85+95+75) / 5 = 425 / 5 = 85.',
    },
    {
        id: 3,
        question: 'Apa perbedaan antara COUNT dan COUNTA?',
        options: [
            'COUNT menghitung semua cell, COUNTA hanya menghitung angka',
            'COUNT hanya menghitung angka, COUNTA menghitung cell yang tidak kosong',
            'Tidak ada perbedaan, keduanya sama',
            'COUNT untuk satu kolom, COUNTA untuk multiple columns'
        ],
        correctAnswer: 1,
        explanation: 'COUNT only counts cells with numbers, COUNTA counts all non-empty cells including text.',
    },
    {
        id: 4,
        question: 'Jika range A1:A10 berisi: 100, 250, 175, 300, 125, 200, 150, 275, 225, 180, berapakah hasil dari =MAX(A1:A10)?',
        options: [
            '100',
            '197.5',
            '300',
            '180'
        ],
        correctAnswer: 2,
        explanation: 'MAX finds the largest value in the range, which is 300.',
    },
    {
        id: 5,
        question: 'Formula mana yang BENAR untuk mencari nilai terendah di range C5:C15?',
        options: [
            '=MINIMUM(C5:C15)',
            '=LOW(C5:C15)',
            '=MIN(C5:C15)',
            '=LOWEST(C5:C15)'
        ],
        correctAnswer: 2,
        explanation: 'The correct function name is MIN, not MINIMUM, LOW, or LOWEST.',
    },
]
