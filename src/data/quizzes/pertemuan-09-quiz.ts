import { QuizQuestion } from '@/types'

export const pertemuan09Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa yang dimaksud dengan Excel serial date system?',
        options: [
            'Sistem untuk membuat nomor seri otomatis',
            'Sistem penyimpanan tanggal sebagai angka, dimulai dari 1 = 1 Januari 1900',
            'Format tanggal internasional (ISO 8601)',
            'Sistem untuk mengatur urutan tanggal'
        ],
        correctAnswer: 1,
        explanation: 'Excel menyimpan tanggal sebagai serial number. Angka 1 = 1 Januari 1900, 2 = 2 Januari 1900, dst. Ini memungkinkan operasi matematika pada tanggal.'
    },
    {
        id: 2,
        question: 'Apa perbedaan antara TODAY() dan NOW()?',
        options: [
            'TODAY() mengembalikan tanggal, NOW() mengembalikan tanggal + waktu',
            'Tidak ada perbedaan, keduanya sama',
            'TODAY() untuk weekday, NOW() untuk semua hari',
            'NOW() lebih cepat dari TODAY()'
        ],
        correctAnswer: 0,
        explanation: 'TODAY() hanya mengembalikan tanggal saat ini (tanpa waktu), sedangkan NOW() mengembalikan tanggal dan waktu saat ini.'
    },
    {
        id: 3,
        question: 'Untuk menghitung umur seseorang dalam tahun, formula mana yang benar?',
        options: [
            '=TODAY() - tanggal_lahir',
            '=DATEDIF(tanggal_lahir, TODAY(), "Y")',
            '=YEAR(TODAY()) - YEAR(tanggal_lahir)',
            '=AGE(tanggal_lahir)'
        ],
        correctAnswer: 1,
        explanation: 'DATEDIF dengan parameter "Y" adalah cara yang tepat untuk menghitung umur dalam tahun penuh. TODAY() - tanggal_lahir hanya menghasilkan jumlah hari.'
    },
    {
        id: 4,
        question: 'Apa fungsi dari =EOMONTH(A1, 0)?',
        options: [
            'Mengembalikan tanggal awal bulan dari A1',
            'Mengembalikan tanggal akhir bulan yang sama dengan A1',
            'Mengembalikan jumlah hari dalam bulan A1',
            'Mengembalikan tanggal akhir tahun'
        ],
        correctAnswer: 1,
        explanation: 'EOMONTH(date, 0) mengembalikan tanggal terakhir dari bulan yang sama. Parameter 0 = bulan yang sama, 1 = bulan depan, -1 = bulan lalu.'
    },
    {
        id: 5,
        question: 'Apa yang dihitung oleh NETWORKDAYS?',
        options: [
            'Semua hari antara dua tanggal',
            'Hanya hari Senin-Jumat (hari kerja), tidak termasuk akhir pekan',
            'Hanya hari weekend (Sabtu-Minggu)',
            'Hari libur nasional'
        ],
        correctAnswer: 1,
        explanation: 'NETWORKDAYS menghitung jumlah hari kerja (Senin-Jumat) antara dua tanggal, otomatis tidak termasuk akhir pekan. Bisa juga ditambahkan parameter untuk tidak termasuk hari libur nasional.'
    }
]
