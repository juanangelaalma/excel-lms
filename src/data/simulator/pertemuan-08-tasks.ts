import { SimulatorTask } from '@/types'

export const pertemuan08Tasks: SimulatorTask[] = [
    {
        id: 1,
        title: 'Relative Reference — Hitung Total Per Baris',
        description: 'Di sel D2, hitung total penjualan (Qty × Harga) untuk produk pertama. Gunakan relative reference sehingga formula bisa disalin ke D3 dan D4 secara otomatis.',
        initialData: [
            ['Produk', 'Qty', 'Harga', 'Total'],
            ['Laptop', 2, 8500000, ''],
            ['Mouse', 5, 150000, ''],
            ['Keyboard', 3, 350000, ''],
        ],
        targetCell: { row: 1, col: 3 },
        expectedResult: 17000000,
        acceptedFormulas: [
            '=B2*C2',
            '=B2 * C2',
            '=C2*B2',
            '=C2 * B2',
        ],
        hints: [
            'Gunakan operator * untuk perkalian',
            'Qty ada di kolom B, Harga ada di kolom C',
            'Formula: =B2*C2 (relative — tidak perlu $)'
        ],
        xpReward: 15
    },
    {
        id: 2,
        title: 'Absolute Reference — Terapkan Diskon Tetap',
        description: 'Di sel E2, hitung harga setelah diskon untuk baris pertama. Diskon ada di sel B6 dan HARUS dikunci dengan absolute reference ($B$6) agar tidak bergeser saat formula disalin.',
        initialData: [
            ['Produk', 'Harga Asli', 'Diskon', 'Harga Diskon'],
            ['Laptop', 8500000, '', ''],
            ['Mouse', 150000, '', ''],
            ['Keyboard', 350000, '', ''],
            ['Monitor', 3200000, '', ''],
            ['Tarif Diskon', 0.1, null, null],
        ],
        targetCell: { row: 1, col: 3 },
        expectedResult: 7650000,
        acceptedFormulas: [
            '=B2-(B2*$B$6)',
            '=B2 - (B2 * $B$6)',
            '=B2*(1-$B$6)',
            '=B2 * (1 - $B$6)',
        ],
        hints: [
            'Tarif diskon ada di B6 — harus dikunci dengan $B$6',
            'Harga setelah diskon = Harga Asli - (Harga Asli × Diskon)',
            'Formula: =B2-(B2*$B$6)',
            'Jangan lupa tanda $ agar B6 tidak bergeser saat disalin!'
        ],
        xpReward: 25
    },
    {
        id: 3,
        title: 'Absolute Reference — Persentase dari Total',
        description: 'Di sel C2, hitung persentase penjualan Laptop terhadap total keseluruhan. Total ada di B6 dan harus dikunci dengan $B$6. Hasil dalam desimal (misal: 0.45 bukan 45%).',
        initialData: [
            ['Produk', 'Penjualan', 'Persentase'],
            ['Laptop', 4500000, ''],
            ['Mouse', 750000, ''],
            ['Keyboard', 1050000, ''],
            ['Monitor', 3200000, ''],
            ['TOTAL', 9500000, null],
        ],
        targetCell: { row: 1, col: 2 },
        expectedResult: 0.47368421052631576,
        acceptedFormulas: [
            '=B2/$B$6',
            '=B2 / $B$6',
            '=B2/B6',
        ],
        hints: [
            'Persentase = Penjualan per produk ÷ Total semua produk',
            'Total ada di B6 — harus dikunci agar saat disalin ke B3, B4, dst. tetap merujuk ke B6',
            'Gunakan $B$6 untuk mengunci baris dan kolom',
            'Formula: =B2/$B$6'
        ],
        xpReward: 25
    },
    {
        id: 4,
        title: 'Mengenal Named Range — Kalkulasi PPN',
        description: 'Di sel C2, hitung PPN (Pajak Pertambahan Nilai) untuk produk pertama. Nilai PPN (11%) sudah ada di B5 dengan nama range "TarifPPN". Gunakan named range tersebut langsung di formula!',
        initialData: [
            ['Produk', 'Harga', 'PPN (11%)'],
            ['Laptop', 8500000, ''],
            ['Mouse', 150000, ''],
            ['Keyboard', 350000, ''],
            ['TarifPPN', 0.11, null],
        ],
        targetCell: { row: 1, col: 2 },
        expectedResult: 935000,
        acceptedFormulas: [
            '=B2*TarifPPN',
            '=B2 * TarifPPN',
            '=B2*$B$5',
            '=B2 * $B$5',
            '=B2*0.11',
        ],
        hints: [
            'TarifPPN adalah Named Range yang merujuk ke sel B5 (nilai 0.11)',
            'Kamu bisa langsung ketik nama range di formula: =B2*TarifPPN',
            'Atau bisa juga gunakan absolute reference: =B2*$B$5',
            'PPN = Harga × Tarif PPN'
        ],
        xpReward: 30
    }
]
