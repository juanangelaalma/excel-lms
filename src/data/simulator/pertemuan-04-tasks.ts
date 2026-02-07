import { SimulatorTask } from '@/types'

export const pertemuan04Tasks: SimulatorTask[] = [
    {
        id: 1,
        title: 'Status Kelulusan',
        description: 'Di cell C2, buat formula untuk menampilkan "Lulus" jika nilai di B2 >= 75, jika tidak tampilkan "Tidak Lulus".',
        initialData: [
            ['Nama', 'Nilai', 'Status'],
            ['Ahmad', 85, ''],
            ['Budi', 65, ''],
            ['Citra', 90, ''],
        ],
        targetCell: { row: 1, col: 2 },
        expectedResult: 'Lulus',
        acceptedFormulas: ['=IF(B2>=75,"Lulus","Tidak Lulus")', '=IF(B2>=75, "Lulus", "Tidak Lulus")'],
        hints: [
            'Gunakan fungsi IF dengan kondisi B2>=75',
            'Syntax: =IF(kondisi, nilai_jika_benar, nilai_jika_salah)',
            'Formula lengkap: =IF(B2>=75,"Lulus","Tidak Lulus")'
        ],
        xpReward: 15
    },
    {
        id: 2,
        title: 'Grade dengan Nested IF',
        description: 'Di cell C2, buat formula untuk memberikan grade: "A" jika >=90, "B" jika >=75, "C" jika >=60, dan "D" jika kurang dari 60.',
        initialData: [
            ['Nama', 'Nilai', 'Grade'],
            ['Ahmad', 92, ''],
            ['Budi', 78, ''],
            ['Citra', 65, ''],
            ['Dedi', 55, ''],
        ],
        targetCell: { row: 1, col: 2 },
        expectedResult: 'A',
        acceptedFormulas: ['=IF(B2>=90,"A",IF(B2>=75,"B",IF(B2>=60,"C","D")))', '=IF(B2>=90, "A", IF(B2>=75, "B", IF(B2>=60, "C", "D")))'],
        hints: [
            'Gunakan Nested IF - IF di dalam IF',
            'Cek kondisi dari yang terbesar: 90, lalu 75, lalu 60',
            'Formula: =IF(B2>=90,"A",IF(B2>=75,"B",IF(B2>=60,"C","D")))'
        ],
        xpReward: 15
    },
    {
        id: 3,
        title: 'Bonus dengan AND',
        description: 'Di cell D2, buat formula: jika penjualan (B2) >= 100000 DAN rating (C2) = "Baik", maka bonus 10% dari penjualan, jika tidak 0.',
        initialData: [
            ['Nama', 'Penjualan', 'Rating', 'Bonus'],
            ['Ahmad', 150000, 'Baik', ''],
            ['Budi', 80000, 'Baik', ''],
            ['Citra', 120000, 'Cukup', ''],
        ],
        targetCell: { row: 1, col: 3 },
        expectedResult: 15000,
        acceptedFormulas: ['=IF(AND(B2>=100000, C2="Baik"), B2*0.1, 0)', '=IF(AND(B2>=100000,C2="Baik"),B2*0.1,0)'],
        hints: [
            'Gunakan AND untuk meng-check 2 kondisi: B2>=100000 dan C2="Baik"',
            'Bonus = 10% dari penjualan = B2*0.1',
            'Formula: =IF(AND(B2>=100000, C2="Baik"), B2*0.1, 0)'
        ],
        xpReward: 15
    },
    {
        id: 4,
        title: 'Diskon dengan OR',
        description: 'Di cell C2, buat formula: jika customer type (B2) = "VIP" ATAU total belanja (A2) > 500000, maka "Diskon 20%", jika tidak "Diskon 5%".',
        initialData: [
            ['Total Belanja', 'Customer Type', 'Diskon'],
            [600000, 'Reguler', ''],
            [300000, 'VIP', ''],
            [400000, 'Reguler', ''],
        ],
        targetCell: { row: 1, col: 2 },
        expectedResult: 'Diskon 20%',
        acceptedFormulas: ['=IF(OR(B2="VIP", A2>500000), "Diskon 20%", "Diskon 5%")', '=IF(OR(B2="VIP",A2>500000),"Diskon 20%","Diskon 5%")'],
        hints: [
            'Gunakan OR untuk salah satu kondisi TRUE',
            'Kondisi: B2="VIP" atau A2>500000',
            'Formula: =IF(OR(B2="VIP", A2>500000), "Diskon 20%", "Diskon 5%")'
        ],
        xpReward: 15
    },
    {
        id: 5,
        title: 'Handle Error dengan IFERROR',
        description: 'Di cell C2, buat formula untuk membagi A2 dengan B2. Jika terjadi error (B2=0), tampilkan "Error" instead Error excel.',
        initialData: [
            ['Nilai 1', 'Nilai 2', 'Hasil Bagi'],
            [100, 5, ''],
            [200, 0, ''],
            [150, 10, ''],
        ],
        targetCell: { row: 1, col: 2 },
        expectedResult: 20,
        acceptedFormulas: ['=IFERROR(A2/B2,"Error")', '=IFERROR(A2/B2, "Error")'],
        hints: [
            'Gunakan IFERROR untuk handle pembagian dengan 0',
            'Syntax: =IFERROR(formula_yang_mungkin_error, nilai_jika_error)',
            'Formula: =IFERROR(A2/B2,"Error")'
        ],
        xpReward: 15
    }
]
