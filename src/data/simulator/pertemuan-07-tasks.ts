import { SimulatorTask } from '@/types'

export const pertemuan07Tasks: SimulatorTask[] = [
    {
        id: 1,
        title: 'Menggabungkan Teks (CONCAT / &)',
        description: 'Gabungkan Nama Depan (A3) dan Nama Belakang (B3) ke dalam sel C3. Jangan lupa tambahkan spasi di antara kedua nama!',
        initialData: [
            ['Nama Depan', 'Nama Belakang', 'Nama Lengkap'],
            ['Budi', 'Santoso', 'Budi Santoso'],
            ['Andi', 'Wijaya', ''],
            ['Siti', 'Aminah', ''],
        ],
        targetCell: { row: 2, col: 2 },
        expectedResult: 'Andi Wijaya',
        acceptedFormulas: [
            '=A3&" "&B3',
            '=A3 & " " & B3',
            '=CONCATENATE(A3," ",B3)',
            '=CONCATENATE(A3, " ", B3)',
            '=CONCAT(A3," ",B3)'
        ],
        hints: [
            'Gunakan operator & seperti: =A3 & " " & B3',
            'Tanda kutip " " digunakan untuk memberikan spasi kosong.'
        ],
        xpReward: 20
    },
    {
        id: 2,
        title: 'Memotong dari Kiri (LEFT)',
        description: 'Ambil 3 huruf pertama dari Kode Cabang di A3, dan tampilkan hasilnya di B3.',
        initialData: [
            ['Kode Cabang', 'Kode Wilayah'],
            ['JKT-001', 'JKT'],
            ['BDG-002', ''],
            ['SBY-003', ''],
        ],
        targetCell: { row: 2, col: 1 },
        expectedResult: 'BDG',
        acceptedFormulas: [
            '=LEFT(A3, 3)',
            '=LEFT(A3,3)',
            '=LEFT($A$3, 3)'
        ],
        hints: [
            'Gunakan rumus =LEFT(teks, jumlah_karakter)',
            'Teksnya ada di A3',
            'Kita butuh 3 karakter ("BDG")'
        ],
        xpReward: 20
    },
    {
        id: 3,
        title: 'Merapikan Huruf & Spasi',
        description: 'Teks di A3 sangat berantakan (huruf kapital acak & banyak spasi). Di B3, rapikan teks tersebut menjadi huruf besar di setiap awal kata (PROPER) dan hilangkan spasi berlebih (TRIM).',
        initialData: [
            ['Data Mentah', 'Data Rapi'],
            ['  jAkartA   SeLATan  ', 'Jakarta Selatan'],
            ['   bUDI    santoso  ', ''],
        ],
        targetCell: { row: 2, col: 1 },
        expectedResult: 'Budi Santoso',
        acceptedFormulas: [
            '=PROPER(TRIM(A3))',
            '=TRIM(PROPER(A3))'
        ],
        hints: [
            'Gunakan kombinasi rumus (Nesting)',
            'Bisa gunakan TRIM(A3) untuk membersihkan spasi dulu',
            'Lalu bungkus dengan PROPER(...) untuk merapikan hurufnya.'
        ],
        xpReward: 30
    },
    {
        id: 4,
        title: 'Mengambil Data di Tengah (MID)',
        description: 'Kode Transaksi memiliki format: TRX-[Tahun]-[ID]. Ambil "Tahun" (4 digit) dari teks di A3, letakkan hasilnya di B3.',
        initialData: [
            ['Nomor Transaksi', 'Tahun'],
            ['TRX-2023-A01', '2023'],
            ['TRX-2024-B99', ''],
        ],
        targetCell: { row: 2, col: 1 },
        expectedResult: '2024',
        acceptedFormulas: [
            '=MID(A3, 5, 4)',
            '=MID(A3,5,4)',
            '=MID($A$3, 5, 4)'
        ],
        hints: [
            'Gunakan rumus =MID(teks, mulai_dari_angka_ke, jumlah_karakter)',
            'Teks di A3',
            'Tahun "2024" dimulai dari karakter ke-5 (T, R, X, -, 2...)',
            'Panjang tahun adalah 4 karakter'
        ],
        xpReward: 30
    }
]
