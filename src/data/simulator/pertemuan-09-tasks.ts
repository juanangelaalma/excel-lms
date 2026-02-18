import { SimulatorTask } from '@/types'

export const pertemuan09Tasks: SimulatorTask[] = [
    {
        id: 1,
        title: 'Construct Tanggal dengan DATE',
        description: 'Di cell D2, gunakan fungsi DATE untuk membuat tanggal dari tahun (A2), bulan (B2), dan hari (C2).',
        initialData: [
            ['Tahun', 'Bulan', 'Hari', 'Tanggal Lengkap'],
            [2024, 8, 17, ''],
            [2023, 12, 25, ''],
            [2025, 1, 1, ''],
        ],
        targetCell: { row: 1, col: 3 },
        expectedResult: '2024-08-17',
        acceptedFormulas: ['=DATE(A2,B2,C2)', '=DATE(A2, B2, C2)'],
        hints: [
            'Gunakan fungsi DATE dengan 3 parameter: tahun, bulan, hari',
            'Syntax: =DATE(year, month, day)',
            'Formula lengkap: =DATE(A2, B2, C2)'
        ],
        xpReward: 15
    },
    {
        id: 2,
        title: 'Menghitung Umur dengan DATEDIF',
        description: 'Di cell C2, hitung umur (dalam tahun) dari tanggal lahir di B2 sampai hari ini. Gunakan TODAY() untuk tanggal saat ini.',
        initialData: [
            ['Nama', 'Tanggal Lahir', 'Umur (Tahun)'],
            ['Ahmad', '1990-05-15', ''],
            ['Budi', '1985-12-20', ''],
            ['Citra', '2000-03-10', ''],
        ],
        targetCell: { row: 1, col: 2 },
        expectedResult: 34,
        acceptedFormulas: ['=DATEDIF(B2,TODAY(),"Y")', '=DATEDIF(B2, TODAY(), "Y")'],
        hints: [
            'Gunakan DATEDIF dengan parameter "Y" untuk menghitung tahun',
            'TODAY() memberikan tanggal hari ini',
            'Formula: =DATEDIF(B2, TODAY(), "Y")'
        ],
        xpReward: 15
    },
    {
        id: 3,
        title: 'Akhir Bulan dengan EOMONTH',
        description: 'Di cell C2, gunakan EOMONTH untuk mencari tanggal akhir bulan dari tanggal mulai kontrak di B2.',
        initialData: [
            ['Karyawan', 'Mulai Kontrak', 'Akhir Bulan'],
            ['Ahmad', '2024-01-15', ''],
            ['Budi', '2024-02-05', ''],
            ['Citra', '2024-03-20', ''],
        ],
        targetCell: { row: 1, col: 2 },
        expectedResult: '2024-01-31',
        acceptedFormulas: ['=EOMONTH(B2,0)', '=EOMONTH(B2, 0)'],
        hints: [
            'EOMONTH dengan parameter 0 = akhir bulan yang sama',
            'EOMONTH dengan parameter 1 = akhir bulan depan',
            'Formula: =EOMONTH(B2, 0)'
        ],
        xpReward: 15
    },
    {
        id: 4,
        title: 'Menghitung Lama Kerja',
        description: 'Di cell D2, hitung berapa bulan seseorang sudah bekerja dari tanggal mulai (B2) sampai tanggal akhir (C2). Gunakan DATEDIF dengan unit "M".',
        initialData: [
            ['Karyawan', 'Mulai', 'Akhir', 'Lama (Bulan)'],
            ['Ahmad', '2023-01-01', '2024-01-01', ''],
            ['Budi', '2023-06-15', '2024-06-15', ''],
            ['Citra', '2024-01-01', '2024-08-01', ''],
        ],
        targetCell: { row: 1, col: 3 },
        expectedResult: 12,
        acceptedFormulas: ['=DATEDIF(B2,C2,"M")', '=DATEDIF(B2, C2, "M")'],
        hints: [
            'DATEDIF dengan "M" menghitung selisih dalam bulan',
            'Parameter: start_date, end_date, "M"',
            'Formula: =DATEDIF(B2, C2, "M")'
        ],
        xpReward: 15
    },
    {
        id: 5,
        title: 'Hari Kerja dengan NETWORKDAYS',
        description: 'Di cell D2, hitung berapa hari kerja (Senin-Jumat) antara tanggal mulai (B2) dan tanggal akhir (C2).',
        initialData: [
            ['Project', 'Start', 'End', 'Hari Kerja'],
            ['Project A', '2024-01-01', '2024-01-31', ''],
            ['Project B', '2024-02-01', '2024-02-29', ''],
            ['Project C', '2024-03-01', '2024-03-15', ''],
        ],
        targetCell: { row: 1, col: 3 },
        expectedResult: 23,
        acceptedFormulas: ['=NETWORKDAYS(B2,C2)', '=NETWORKDAYS(B2, C2)'],
        hints: [
            'NETWORKDAYS menghitung hari kerja (exclude weekend)',
            'Parameter: start_date, end_date',
            'Formula: =NETWORKDAYS(B2, C2)'
        ],
        xpReward: 15
    }
]
