export interface SimulatorTask {
    id: number
    title: string
    description: string
    initialData: (string | number | null)[][]
    targetCell: { row: number; col: number }
    expectedResult: number | string
    acceptedFormulas?: string[] // Optional: specific formulas accepted
    hints: string[]
    xpReward: number
}

export const pertemuan03Tasks: SimulatorTask[] = [
    {
        id: 1,
        title: 'Task 1: Hitung Total Penjualan',
        description: 'Di cell B5, hitung total dari semua penjualan bulanan menggunakan fungsi SUM.',
        initialData: [
            ['Bulan', 'Penjualan'],
            ['Januari', 50000],
            ['Februari', 65000],
            ['Maret', 48000],
            ['Total', ""],
        ],
        targetCell: { row: 4, col: 1 },
        expectedResult: 163000,
        acceptedFormulas: ['=SUM(B2:B4)', '=B2+B3+B4'],
        hints: [
            'Gunakan fungsi SUM untuk menjumlahkan beberapa cell',
            'Coba: =SUM(B2:B4)',
            'Pastikan Anda memilih nilai penjualan, bukan nama bulan!'
        ],
        xpReward: 15,
    },
    {
        id: 2,
        title: 'Task 2: Hitung Rata-rata Nilai',
        description: 'Di cell B7, cari rata-rata nilai quiz menggunakan fungsi AVERAGE.',
        initialData: [
            ['Quiz', 'Nilai'],
            ['Quiz 1', 85],
            ['Quiz 2', 92],
            ['Quiz 3', 78],
            ['Quiz 4', 88],
            ['Quiz 5', 95],
            ['Rata-rata', ""],
        ],
        targetCell: { row: 6, col: 1 },
        expectedResult: 87.6,
        acceptedFormulas: ['=AVERAGE(B2:B6)'],
        hints: [
            'Gunakan fungsi AVERAGE untuk menghitung rata-rata',
            'Formula: =AVERAGE(B2:B6)',
            'AVERAGE menjumlahkan semua nilai dan membagi dengan jumlahnya'
        ],
        xpReward: 15,
    },
    {
        id: 3,
        title: 'Task 3: Hitung Jumlah Produk',
        description: 'Di cell B8, hitung berapa banyak produk yang memiliki harga terisi menggunakan COUNT.',
        initialData: [
            ['Produk', 'Harga'],
            ['Laptop', 5000000],
            ['Mouse', 150000],
            ['Keyboard', 500000],
            ['Monitor', 2000000],
            ['Headset', 750000],
            ['Webcam', ""],
            ['Jumlah', ""],
        ],
        targetCell: { row: 7, col: 1 },
        expectedResult: 5,
        acceptedFormulas: ['=COUNT(B2:B7)'],
        hints: [
            'COUNT hanya menghitung cell dengan angka',
            'Gunakan: =COUNT(B2:B7)',
            'Cell kosong tidak dihitung!'
        ],
        xpReward: 15,
    },
    {
        id: 4,
        title: 'Task 4: Cari Suhu Tertinggi',
        description: 'Di cell B8, cari suhu maksimum menggunakan fungsi MAX.',
        initialData: [
            ['Hari', 'Suhu (°C)'],
            ['Senin', 28],
            ['Selasa', 31],
            ['Rabu', 27],
            ['Kamis', 33],
            ['Jumat', 29],
            ['Sabtu', 32],
            ['Tertinggi', ""],
        ],
        targetCell: { row: 7, col: 1 },
        expectedResult: 33,
        acceptedFormulas: ['=MAX(B2:B7)'],
        hints: [
            'MAX mencari nilai terbesar dalam range',
            'Gunakan: =MAX(B2:B7)',
            'Hari mana yang memiliki suhu terpanas?'
        ],
        xpReward: 15,
    },
    {
        id: 5,
        title: 'Task 5: Cari Harga Terendah',
        description: 'Di cell B6, cari harga minimum menggunakan fungsi MIN.',
        initialData: [
            ['Produk', 'Harga'],
            ['Kopi', 25000],
            ['Teh', 15000],
            ['Jus', 20000],
            ['Air', 10000],
            ['Termurah', ""],
        ],
        targetCell: { row: 5, col: 1 },
        expectedResult: 10000,
        acceptedFormulas: ['=MIN(B2:B5)'],
        hints: [
            'MIN mencari nilai terkecil dalam range',
            'Gunakan: =MIN(B2:B5)',
            'Minuman mana yang paling terjangkau?'
        ],
        xpReward: 15,
    },
]
