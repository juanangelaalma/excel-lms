import { QuizQuestion } from '@/types'

export const pertemuan08Quiz: QuizQuestion[] = [
    {
        id: 1,
        question: 'Apa yang terjadi pada formula =A2+B2 di sel C2 jika formula tersebut disalin ke sel C3?',
        options: [
            'Formula tetap =A2+B2 (tidak berubah)',
            'Formula berubah menjadi =A3+B3',
            'Formula berubah menjadi =$A$2+$B$2',
            'Formula menghasilkan error #REF!'
        ],
        correctAnswer: 1,
        explanation: 'Karena A2 dan B2 adalah Relative Reference, saat formula disalin satu baris ke bawah (dari C2 ke C3), semua referensinya ikut bergeser satu baris menjadi =A3+B3.'
    },
    {
        id: 2,
        question: 'Apa arti tanda dollar ($) dalam referensi sel $A$1?',
        options: [
            'Referensi ke sel yang berisi nilai mata uang Dollar',
            'Referensi absolut yang mengunci kolom A dan baris 1 agar tidak bergeser',
            'Referensi ke sel A1 di sheet Dollar',
            'Formula khusus untuk kalkulasi keuangan'
        ],
        correctAnswer: 1,
        explanation: 'Tanda $ mengunci dimensi yang ada di depannya. $A$1 berarti kolom A ($A) dan baris 1 ($1) keduanya dikunci, sehingga tidak bergeser ke mana pun saat formula disalin.'
    },
    {
        id: 3,
        question: 'Shortcut keyboard apa yang digunakan untuk toggle antara Relative, Absolute, dan Mixed Reference di Excel?',
        options: [
            'Ctrl + $ (Dollar)',
            'Shift + F4',
            'F4',
            'Alt + $'
        ],
        correctAnswer: 2,
        explanation: 'Tekan F4 saat kursor berada di dalam referensi sel untuk toggle: A1 → $A$1 → A$1 → $A1 → A1. Ini adalah shortcut yang wajib dihapal untuk efisiensi!'
    },
    {
        id: 4,
        question: 'Manakah yang merupakan contoh Mixed Reference dengan kolom dikunci?',
        options: [
            '$A$1',
            'A1',
            '$A1',
            'A$1'
        ],
        correctAnswer: 2,
        explanation: '$A1 adalah Mixed Reference di mana kolom A dikunci (karena ada $ sebelum A), namun baris 1 bebas bergeser. Berbeda dengan A$1 yang mengunci baris, bukan kolom.'
    },
    {
        id: 5,
        question: 'Kamu ingin membuat tabel perkalian 5×5. Formula di mana yang paling tepat untuk diletakkan di sel B2 (lalu disalin ke semua sel) agar baris pertama dan kolom pertama menjadi acuan?',
        options: [
            '=A2 * B1',
            '=$A2 * B$1',
            '=A2 * $B$1',
            '=$A$2 * $B$1'
        ],
        correctAnswer: 1,
        explanation: '=$A2 * B$1 adalah jawabannya. $A2 mengunci kolom A (header baris) agar tidak bergeser ke kanan. B$1 mengunci baris 1 (header kolom) agar tidak bergeser ke bawah. Hasilnya, saat disalin ke mana pun, referensi tetap benar!'
    },
    {
        id: 6,
        question: 'Apa manfaat utama menggunakan Named Ranges dalam formula?',
        options: [
            'Membuat Excel berjalan lebih cepat',
            'Membuat formula lebih mudah dibaca dan dipahami maknanya',
            'Mengunci nilai sel agar tidak bisa diubah',
            'Membuat referensi sel menjadi berwarna'
        ],
        correctAnswer: 1,
        explanation: 'Named Range menggantikan referensi sel (seperti $D$1) dengan nama yang bermakna (seperti TarifPPN). Formula =Penjualan*TarifPPN jauh lebih mudah dipahami daripada =B2*$D$1, terutama saat formula diaudit orang lain.'
    },
    {
        id: 7,
        question: 'Di mana letak Name Box yang digunakan untuk membuat Named Range dengan cepat?',
        options: [
            'Di tab Formulas > Name Manager',
            'Di kotak kecil sebelah kiri Formula Bar (biasanya menampilkan alamat sel aktif)',
            'Di menu Insert > Name',
            'Di tab Home > Cell Reference'
        ],
        correctAnswer: 1,
        explanation: 'Name Box adalah kotak kecil yang terletak di pojok kiri atas worksheet, tepat di sebelah kiri Formula Bar. Biasanya menampilkan alamat sel aktif (seperti "A1"). Klik kotak itu, ketik nama, lalu Enter untuk membuat Named Range secara instan!'
    },
    {
        id: 8,
        question: 'Named Range yang sudah dibuat bersifat seperti tipe referensi apa?',
        options: [
            'Relative Reference — bisa bergeser',
            'Mixed Reference — setengah terkunci',
            'Absolute Reference — selalu menunjuk ke range yang sama',
            'Tergantung cara pembuatannya'
        ],
        correctAnswer: 2,
        explanation: 'Secara default, Named Range bersifat Absolute. Formula =VLOOKUP(A2, DataProduk, 2, 0) akan selalu merujuk ke range bernama DataProduk meskipun formula tersebut disalin ke baris mana pun.'
    }
]
