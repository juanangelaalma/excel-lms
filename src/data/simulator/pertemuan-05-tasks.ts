import { SimulatorTask } from '@/types'

export const pertemuan05Tasks: SimulatorTask[] = [
    {
        id: 1,
        title: 'VLOOKUP Dasar (Exact Match)',
        description: 'Gunakan VLOOKUP di cell B7 untuk mencari HARGA Produk berdasarkan ID yang ada di cell A7. Gunakan tabel referensi di A2:B4.',
        initialData: [
            ['ID Produk', 'Harga'],
            ['P01', 5000],
            ['P02', 7500],
            ['P03', 10000],
            ['', ''],
            ['Input ID', 'Hasil Harga'],
            ['P02', ''],
        ],
        targetCell: { row: 6, col: 1 },
        expectedResult: 7500,
        acceptedFormulas: [
            '=VLOOKUP(A7, A2:B4, 2, FALSE)',
            '=VLOOKUP(A7,A2:B4,2,FALSE)',
            '=VLOOKUP(A7, $A$2:$B$4, 2, FALSE)',
            '=VLOOKUP(A7,A2:B4,2,0)'
        ],
        hints: [
            'Lookup value adalah A7',
            'Table array adalah A2:B4',
            'Col index adalah 2 (kolom Harga)',
            'Gunakan FALSE untuk exact match'
        ],
        xpReward: 20
    },
    {
        id: 2,
        title: 'VLOOKUP Approximate Match',
        description: 'Tentukan Grade di cell B7 berdasarkan Nilai di A7 menggunakan tabel referensi A2:B4. Gunakan TRUE untuk range lookup.',
        initialData: [
            ['Batas Nilai', 'Grade'],
            [0, 'C'],
            [70, 'B'],
            [85, 'A'],
            ['', ''],
            ['Nilai Siswa', 'Grade'],
            [75, ''],
        ],
        targetCell: { row: 6, col: 1 },
        expectedResult: 'B',
        acceptedFormulas: [
            '=VLOOKUP(A7, A2:B4, 2, TRUE)',
            '=VLOOKUP(A7,A2:B4,2,TRUE)',
            '=VLOOKUP(A7, A2:B4, 2, 1)',
            '=VLOOKUP(A7,A2:B4,2)'
        ],
        hints: [
            'Lookup value: A7',
            'Table array: A2:B4',
            'Col index: 2',
            'Range lookup: TRUE (karena mencari dalam rentang)'
        ],
        xpReward: 20
    },
    {
        id: 3,
        title: 'HLOOKUP (Horizontal Lookup)',
        description: 'Gunakan HLOOKUP di cell B4 untuk mencari Bonus berdasarkan Rating di B3. Tabel referensi ada di B1:D2.',
        initialData: [
            ['Rating', 'A', 'B', 'C'],
            ['Bonus', 500, 300, 100],
            ['Rating Sales', 'A'],
            ['Bonus Sales', ''],
        ],
        targetCell: { row: 3, col: 1 },
        expectedResult: 500,
        acceptedFormulas: [
            '=HLOOKUP(B3, B1:D2, 2, FALSE)',
            '=HLOOKUP(B3,B1:D2,2,FALSE)',
            '=HLOOKUP(B3, B1:D2, 2, 0)'
        ],
        hints: [
            'HLOOKUP mencari secara horizontal di baris pertama',
            'Lookup value: B3',
            'Table array: B1:D2',
            'Row index: 2'
        ],
        xpReward: 20
    },
    {
        id: 4,
        title: 'VLOOKUP + IFERROR',
        description: 'Cari harga ID "P99" di cell B7. Jika ID tidak ditemukan, tampilkan pesan "Tidak Ada".',
        initialData: [
            ['ID', 'Harga'],
            ['P01', 5000],
            ['P02', 7500],
            ['', ''],
            ['', ''],
            ['Cari ID', 'Status Harga'],
            ['P99', ''],
        ],
        targetCell: { row: 6, col: 1 },
        expectedResult: 'Tidak Ada',
        acceptedFormulas: [
            '=IFERROR(VLOOKUP(A7, A2:B3, 2, FALSE), "Tidak Ada")',
            '=IFERROR(VLOOKUP(A7,A2:B3,2,FALSE),"Tidak Ada")',
            '=IFERROR(VLOOKUP(A7,A2:B3,2,0),"Tidak Ada")'
        ],
        hints: [
            'Bungkus VLOOKUP dengan fungsi IFERROR',
            'IFERROR(formula, "pesan_jika_error")',
            'ID P99 tidak ada di tabel, jadi akan menghasilkan #N/A'
        ],
        xpReward: 20
    }
]
