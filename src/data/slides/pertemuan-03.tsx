import { Slide } from '@/types'

export const pertemuan03Slides: Slide[] = [
    // Slide 1: Title
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 3',
        content: 'Mathematical Functions: SUM, AVERAGE, COUNT, MAX, MIN',
    },

    // Slide 2: Introduction
    {
        id: 2,
        type: 'content',
        title: 'Mengapa Mathematical Functions?',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    Mathematical functions adalah <strong>fondasi dasar</strong> Excel.
                    Mereka membantu Anda menganalisis data dengan cepat tanpa perhitungan manual.
                </p>
                <p>Dalam pelajaran ini, Anda akan belajar 5 fungsi paling penting:</p>
                <ul className="space-y-2">
                    <li>📊 <strong>SUM</strong> - Menjumlahkan angka</li>
                    <li>📈 <strong>AVERAGE</strong> - Menghitung rata-rata</li>
                    <li>🔢 <strong>COUNT</strong> - Menghitung nilai numerik</li>
                    <li>⬆️ <strong>MAX</strong> - Mencari nilai tertinggi</li>
                    <li>⬇️ <strong>MIN</strong> - Mencari nilai terendah</li>
                </ul>
            </div>
        ),
    },

    // Slide 3: SUM Function
    {
        id: 3,
        type: 'content',
        title: '1. SUM - Menjumlahkan Angka',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    Fungsi <strong>SUM</strong> menjumlahkan semua angka dalam range.
                </p>
                <p><strong>Syntax:</strong></p>
                <p className="font-mono bg-gray-100 p-2 rounded">
                    =SUM(number1, number2, ...)
                </p>
                <p>Anda bisa menjumlahkan cell individual atau seluruh range:</p>
            </div>
        ),
    },

    // Slide 4: SUM Examples
    {
        id: 4,
        type: 'example',
        title: 'Contoh SUM',
        content: (
            <p>Berikut berbagai cara menggunakan SUM:</p>
        ),
        examples: [
            {
                formula: '=SUM(A1, A2, A3)',
                description: 'Menjumlahkan tiga cell tertentu',
            },
            {
                formula: '=SUM(A1:A10)',
                description: 'Menjumlahkan semua nilai dari A1 sampai A10',
            },
            {
                formula: '=SUM(A1:A5, C1:C5)',
                description: 'Menjumlahkan beberapa range sekaligus',
            },
            {
                formula: '=SUM(100, 200, A1)',
                description: 'Kombinasi angka dan referensi cell',
            },
        ],
    },

    // Slide 5: AVERAGE Function
    {
        id: 5,
        type: 'content',
        title: '2. AVERAGE - Menghitung Rata-rata',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    Fungsi <strong>AVERAGE</strong> menghitung rata-rata aritmatika
                    (jumlah dibagi banyaknya data).
                </p>
                <p><strong>Syntax:</strong></p>
                <p className="font-mono bg-gray-100 p-2 rounded">
                    =AVERAGE(number1, number2, ...)
                </p>
                <p>
                    Contoh: jika ada nilai kuis 80, 90, 85, AVERAGE menghasilkan 85
                    (jumlah 255 dibagi 3).
                </p>
            </div>
        ),
    },

    // Slide 6: AVERAGE Examples
    {
        id: 6,
        type: 'example',
        title: 'Contoh AVERAGE',
        examples: [
            {
                formula: '=AVERAGE(B2:B10)',
                description: 'Menghitung rata-rata nilai dari B2 sampai B10',
            },
            {
                formula: '=AVERAGE(A1, A2, A3)',
                description: 'Rata-rata dari cell tertentu',
            },
            {
                formula: '=AVERAGE(80, 90, 85, 95)',
                description: 'Rata-rata dari nilai langsung (hasil: 87.5)',
            },
        ],
    },

    // Slide 7: COUNT Function
    {
        id: 7,
        type: 'content',
        title: '3. COUNT - Menghitung Angka',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    Fungsi <strong>COUNT</strong> menghitung berapa banyak cell yang berisi angka.
                </p>
                <p><strong>Syntax:</strong></p>
                <p className="font-mono bg-gray-100 p-2 rounded">
                    =COUNT(value1, value2, ...)
                </p>
                <p className="text-sm text-text-secondary">
                    ⚠️ Penting: COUNT hanya menghitung nilai numerik. Cell kosong dan teks diabaikan!
                </p>
            </div>
        ),
    },

    // Slide 8: COUNT Examples
    {
        id: 8,
        type: 'example',
        title: 'Contoh COUNT',
        content: (
            <p>Lihat cara kerja COUNT dengan berbagai data:</p>
        ),
        examples: [
            {
                formula: '=COUNT(A1:A10)',
                description: 'Menghitung nilai numerik dalam range A1:A10',
            },
            {
                formula: '=COUNT(100, 200, "text", 300)',
                description: 'Hasil: 3 (teks diabaikan)',
            },
        ],
    },

    // Slide 9: MAX and MIN
    {
        id: 9,
        type: 'content',
        title: '4 & 5. MAX dan MIN - Mencari Nilai Ekstrem',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    <strong>MAX</strong> mencari nilai tertinggi, <strong>MIN</strong> mencari nilai terendah.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold mb-2">MAX Syntax:</p>
                        <p className="font-mono bg-gray-100 p-2 rounded text-sm">
                            =MAX(number1, ...)
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold mb-2">MIN Syntax:</p>
                        <p className="font-mono bg-gray-100 p-2 rounded text-sm">
                            =MIN(number1, ...)
                        </p>
                    </div>
                </div>
                <p>Fungsi ini sempurna untuk mencari performa terbaik/terburuk, harga tertinggi/terendah, dll.</p>
            </div>
        ),
    },

    // Slide 10: MAX & MIN Examples
    {
        id: 10,
        type: 'example',
        title: 'MAX & MIN Examples',
        examples: [
            {
                formula: '=MAX(A1:A10)',
                description: 'Find the highest value in range',
            },
            {
                formula: '=MIN(A1:A10)',
                description: 'Find the lowest value in range',
            },
            {
                formula: '=MAX(100, 250, 175, 300)',
                description: 'Result: 300',
            },
            {
                formula: '=MIN(100, 250, 175, 300)',
                description: 'Result: 100',
            },
        ],
    },

    // Slide 11: Pro Tips
    {
        id: 11,
        type: 'tip',
        title: 'Tips & Praktik Terbaik',
        tips: [
            <>
                <strong>Gunakan range daripada cell individual:</strong>
                {' '}=SUM(A1:A100) lebih rapi daripada =SUM(A1,A2,A3,...)
            </>,
            <>
                <strong>Periksa ulang range Anda:</strong>
                {' '}Pastikan Anda memilih cell yang benar. Kesalahan umum adalah
                memilih terlalu banyak atau terlalu sedikit!
            </>,
            <>
                <strong>Cell kosong diabaikan:</strong>
                {' '}Fungsi-fungsi ini otomatis melewati cell kosong, yang biasanya
                memang yang Anda inginkan.
            </>,
            <>
                <strong>Kombinasikan fungsi:</strong>
                {' '}Anda bisa menyusun fungsi seperti =SUM(A1:A5)/COUNT(A1:A5) untuk menghitung
                rata-rata secara manual.
            </>,
        ],
    },

    // Slide 12: Real-World Example
    {
        id: 12,
        type: 'content',
        title: 'Contoh Nyata: Analisis Penjualan',
        content: (
            <div className="space-y-4">
                <p>Bayangkan Anda menganalisis data penjualan bulanan:</p>
                <div className="bg-bg-accent p-4 rounded-lg">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b-2">
                                <th className="text-left p-2">Bulan</th>
                                <th className="text-right p-2">Penjualan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="p-2">Jan</td><td className="text-right p-2">$50,000</td></tr>
                            <tr><td className="p-2">Feb</td><td className="text-right p-2">$65,000</td></tr>
                            <tr><td className="p-2">Mar</td><td className="text-right p-2">$48,000</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Anda bisa menggunakan:</p>
                <ul className="space-y-2">
                    <li>• <strong>=SUM(B2:B4)</strong> → Total penjualan: $163,000</li>
                    <li>• <strong>=AVERAGE(B2:B4)</strong> → Rata-rata: $54,333</li>
                    <li>• <strong>=MAX(B2:B4)</strong> → Bulan terbaik: $65,000</li>
                    <li>• <strong>=MIN(B2:B4)</strong> → Bulan terburuk: $48,000</li>
                </ul>
            </div>
        ),
    },

    // Slide 13: Practice Time
    {
        id: 13,
        type: 'practice',
        title: 'Waktunya Praktik!',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    Anda sudah mempelajari 5 fungsi matematika penting! 🎉
                </p>
                <p>
                    Selanjutnya, Anda akan praktik menggunakan fungsi-fungsi ini di <strong>simulator Excel interaktif</strong> kami.
                </p>
                <p>Anda akan menyelesaikan 5 tugas praktik untuk menguji pemahaman:</p>
                <ul className="space-y-2">
                    <li>✅ Tugas 1: Menghitung total dengan SUM</li>
                    <li>✅ Tugas 2: Mencari rata-rata dengan AVERAGE</li>
                    <li>✅ Tugas 3: Menghitung nilai dengan COUNT</li>
                    <li>✅ Tugas 4: Mencari nilai maksimum dengan MAX</li>
                    <li>✅ Tugas 5: Mencari nilai minimum dengan MIN</li>
                </ul>
                <p className="text-duo-green font-semibold">
                    Anda akan mendapat <strong>+15 XP</strong> untuk setiap tugas yang benar!
                </p>
            </div>
        ),
    },
]
