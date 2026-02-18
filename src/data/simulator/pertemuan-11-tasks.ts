import { SimulatorTask } from '@/types'

export const pertemuan11Tasks: SimulatorTask[] = [
    {
        id: 1,
        title: 'Total Penjualan dengan SUMIF',
        description: 'Di cell E2, gunakan SUMIF untuk menjumlahkan total penjualan (D:D) untuk produk "Laptop" (C:C).',
        initialData: [
            ['No', 'Region', 'Produk', 'Penjualan', 'Total Laptop'],
            [1, 'Jakarta', 'Laptop', 5000000, ''],
            [2, 'Bandung', 'Mouse', 150000, ''],
            [3, 'Jakarta', 'Laptop', 7000000, ''],
            [4, 'Surabaya', 'Keyboard', 500000, ''],
        ],
        targetCell: { row: 1, col: 4 },
        expectedResult: 12000000,
        acceptedFormulas: ['=SUMIF(C:C,"Laptop",D:D)', '=SUMIF(C2:C5,"Laptop",D2:D5)', '=SUMIF(C:C, "Laptop", D:D)'],
        hints: [
            'SUMIF syntax: =SUMIF(range, criteria, sum_range)',
            'Range untuk cek adalah kolom Produk (C:C)',
            'Formula: =SUMIF(C:C, "Laptop", D:D)'
        ],
        xpReward: 15
    },
    {
        id: 2,
        title: 'Menghitung dengan COUNTIF',
        description: 'Di cell E2, hitung berapa kali produk "Laptop" muncul menggunakan COUNTIF.',
        initialData: [
            ['No', 'Region', 'Produk', 'Qty', 'Jumlah Laptop'],
            [1, 'Jakarta', 'Laptop', 5, ''],
            [2, 'Bandung', 'Mouse', 10, ''],
            [3, 'Jakarta', 'Laptop', 3, ''],
            [4, 'Surabaya', 'Laptop', 7, ''],
        ],
        targetCell: { row: 1, col: 4 },
        expectedResult: 3,
        acceptedFormulas: ['=COUNTIF(C:C,"Laptop")', '=COUNTIF(C2:C5,"Laptop")', '=COUNTIF(C:C, "Laptop")'],
        hints: [
            'COUNTIF syntax: =COUNTIF(range, criteria)',
            'Hitung di kolom Produk (C:C)',
            'Formula: =COUNTIF(C:C, "Laptop")'
        ],
        xpReward: 15
    },
    {
        id: 3,
        title: 'Rata-rata dengan AVERAGEIF',
        description: 'Di cell E2, hitung rata-rata penjualan untuk region "Jakarta" menggunakan AVERAGEIF.',
        initialData: [
            ['No', 'Region', 'Produk', 'Penjualan', 'Avg Jakarta'],
            [1, 'Jakarta', 'Laptop', 6000000, ''],
            [2, 'Bandung', 'Mouse', 150000, ''],
            [3, 'Jakarta', 'Keyboard', 4000000, ''],
            [4, 'Surabaya', 'Laptop', 5000000, ''],
        ],
        targetCell: { row: 1, col: 4 },
        expectedResult: 5000000,
        acceptedFormulas: ['=AVERAGEIF(B:B,"Jakarta",D:D)', '=AVERAGEIF(B2:B5,"Jakarta",D2:D5)', '=AVERAGEIF(B:B, "Jakarta", D:D)'],
        hints: [
            'AVERAGEIF syntax: =AVERAGEIF(range, criteria, average_range)',
            'Filter berdasarkan Region (B:B)',
            'Formula: =AVERAGEIF(B:B, "Jakarta", D:D)'
        ],
        xpReward: 15
    },
    {
        id: 4,
        title: 'SUMIFS dengan Multiple Criteria',
        description: 'Di cell F2, gunakan SUMIFS untuk menjumlahkan penjualan "Laptop" di region "Jakarta".',
        initialData: [
            ['No', 'Region', 'Produk', 'Penjualan', 'Qty', 'Total'],
            [1, 'Jakarta', 'Laptop', 5000000, 2, ''],
            [2, 'Bandung', 'Laptop', 3000000, 1, ''],
            [3, 'Jakarta', 'Mouse', 150000, 5, ''],
            [4, 'Jakarta', 'Laptop', 7000000, 3, ''],
        ],
        targetCell: { row: 1, col: 5 },
        expectedResult: 12000000,
        acceptedFormulas: ['=SUMIFS(D:D,B:B,"Jakarta",C:C,"Laptop")', '=SUMIFS(D2:D5,B2:B5,"Jakarta",C2:C5,"Laptop")', '=SUMIFS(D:D, B:B, "Jakarta", C:C, "Laptop")'],
        hints: [
            'SUMIFS syntax: =SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)',
            'Kriteria 1: Region = "Jakarta", Kriteria 2: Produk = "Laptop"',
            'Formula: =SUMIFS(D:D, B:B, "Jakarta", C:C, "Laptop")'
        ],
        xpReward: 15
    },
    {
        id: 5,
        title: 'COUNTIF dengan Operator',
        description: 'Di cell E2, hitung berapa penjualan dengan nilai > 5000000 menggunakan COUNTIF.',
        initialData: [
            ['No', 'Region', 'Produk', 'Penjualan', 'Count > 5jt'],
            [1, 'Jakarta', 'Laptop', 7000000, ''],
            [2, 'Bandung', 'Mouse', 150000, ''],
            [3, 'Jakarta', 'Keyboard', 4000000, ''],
            [4, 'Surabaya', 'Laptop', 6000000, ''],
        ],
        targetCell: { row: 1, col: 4 },
        expectedResult: 2,
        acceptedFormulas: ['=COUNTIF(D:D,">5000000")', '=COUNTIF(D2:D5,">5000000")', '=COUNTIF(D:D, ">5000000")'],
        hints: [
            'Gunakan operator dalam quotes untuk criteria',
            'Syntax: =COUNTIF(range, ">5000000")',
            'Formula: =COUNTIF(D:D, ">5000000")'
        ],
        xpReward: 15
    }
]
