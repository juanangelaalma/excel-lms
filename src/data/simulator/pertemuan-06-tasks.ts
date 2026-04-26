import { SimulatorTask } from '@/types'

export const pertemuan06Tasks: SimulatorTask[] = [
    {
        id: 1,
        title: 'Fungsi INDEX Dasar',
        description: 'Gunakan fungsi INDEX di cell B5 untuk mengambil nilai dari baris ke-2 dalam rentang A2:A4.',
        initialData: [
            ['Nama Kota', ''],
            ['Jakarta', ''],
            ['Surabaya', ''],
            ['Bandung', ''],
            ['Ambil Baris 2:', ''],
        ],
        targetCell: { row: 4, col: 1 },
        expectedResult: 'Surabaya',
        acceptedFormulas: [
            '=INDEX(A2:A4, 2)',
            '=INDEX(A2:A4,2)',
            '=INDEX($A$2:$A$4, 2)',
            '=INDEX(A2:A4, 2, 1)'
        ],
        hints: [
            'Array adalah rentang data A2:A4',
            'Row_num adalah 2',
            'Tidak perlu mengisi column_num jika array hanya 1 kolom'
        ],
        xpReward: 20
    },
    {
        id: 2,
        title: 'Fungsi MATCH Dasar',
        description: 'Gunakan fungsi MATCH di cell B5 untuk mencari tahu "Bandung" ada di urutan/baris ke berapa dalam rentang A2:A4. Gunakan Exact Match (0).',
        initialData: [
            ['Nama Kota', ''],
            ['Jakarta', ''],
            ['Surabaya', ''],
            ['Bandung', ''],
            ['Posisi Bandung:', ''],
        ],
        targetCell: { row: 4, col: 1 },
        expectedResult: 3,
        acceptedFormulas: [
            '=MATCH("Bandung", A2:A4, 0)',
            '=MATCH("Bandung",A2:A4,0)',
            '=MATCH("Bandung", $A$2:$A$4, 0)',
            '=MATCH(A4, A2:A4, 0)'
        ],
        hints: [
            'Lookup_value adalah teks "Bandung" (ingat tanda kutip)',
            'Lookup_array adalah A2:A4',
            'Match_type adalah 0 untuk exact match'
        ],
        xpReward: 20
    },
    {
        id: 3,
        title: 'Gabungan INDEX & MATCH (Left Lookup)',
        description: 'Cari Nama Staff (Kolom A) berdasarkan ID Staff (Kolom B). Gunakan INDEX & MATCH di cell B7 untuk ID "E02".',
        initialData: [
            ['Nama Staff', 'ID Staff'],
            ['Agus', 'E01'],
            ['Budi', 'E02'],
            ['Citra', 'E03'],
            ['', ''],
            ['Cari ID:', 'E02'],
            ['Hasil Nama:', ''],
        ],
        targetCell: { row: 6, col: 1 },
        expectedResult: 'Budi',
        acceptedFormulas: [
            '=INDEX(A2:A4, MATCH(B5, B2:B4, 0))',
            '=INDEX(A2:A4,MATCH(B5,B2:B4,0))',
            '=INDEX(A2:A4, MATCH("E02", B2:B4, 0))',
            '=INDEX($A$2:$A$4, MATCH(B5, $B$2:$B$4, 0))'
        ],
        hints: [
            'INDEX(Kolom_Hasil, MATCH(Yang_Dicari, Kolom_Pencarian, 0))',
            'Kolom Hasil adalah A2:A4',
            'Yang Dicari adalah B5 ("E02")',
            'Kolom Pencarian adalah B2:B4',
            'VLOOKUP tidak bisa melakukan ini karena ID ada di sebelah kanan!'
        ],
        xpReward: 30
    },
    {
        id: 4,
        title: 'Two-Way Lookup',
        description: 'Cari Harga Tiket di cell B7. Gunakan INDEX dan 2 MATCH. Baris: "Surabaya", Kolom: "Bisnis". Tabel harga A2:C4.',
        initialData: [
            ['Kota', 'Ekonomi', 'Bisnis'],
            ['Jakarta', 500, 1000],
            ['Surabaya', 700, 1500],
            ['Bandung', 300, 800],
            ['Tujuan:', 'Surabaya'],
            ['Kelas:', 'Bisnis'],
            ['Harga:', ''],
        ],
        targetCell: { row: 6, col: 1 },
        expectedResult: 1500,
        acceptedFormulas: [
            '=INDEX(B2:C4, MATCH(B4, A2:A4, 0), MATCH(B5, B1:C1, 0))',
            '=INDEX(B2:C4,MATCH(B4,A2:A4,0),MATCH(B5,B1:C1,0))',
            '=INDEX(A1:C4, MATCH(B4, A1:A4, 0), MATCH(B5, A1:C1, 0))'
        ],
        hints: [
            '=INDEX(Area_Harga, MATCH(Cari_Baris, Area_Baris, 0), MATCH(Cari_Kolom, Area_Kolom, 0))',
            'Area Harga: B2:C4 (atau A1:C4 jika mau lebih besar)',
            'MATCH pertama: mencari posisi "Surabaya" di A2:A4',
            'MATCH kedua: mencari posisi "Bisnis" di B1:C1'
        ],
        xpReward: 30
    }
]
