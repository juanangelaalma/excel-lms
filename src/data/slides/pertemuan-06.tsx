import { Slide } from '@/types'
import { TipBox } from '@/components/lesson/TipBox'
import { CodeBlock } from '@/components/lesson/CodeBlock'

export const pertemuan06Slides: Slide[] = [
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 6',
        content: <div>
            <h2 className="text-4xl font-bold mb-4">INDEX & MATCH</h2>
            <p className="text-xl">Advanced lookup dengan kombinasi INDEX dan MATCH 🎯</p>
        </div>
    },
    {
        id: 2,
        type: 'content',
        title: 'Mengapa INDEX & MATCH?',
        content: <div className="space-y-4">
            <p>Pada pertemuan sebelumnya, kita belajar VLOOKUP. Tapi VLOOKUP punya keterbatasan: hanya bisa mencari dari kiri ke kanan.</p>
            <p>Bagaimana jika kode pencarian ada di sebelah kanan, dan kita ingin mengambil data di sebelah kirinya?</p>
            <p>Solusinya adalah kombinasi fungsi <strong>INDEX</strong> dan <strong>MATCH</strong>!</p>
            <TipBox variant="info">
                Kombinasi INDEX & MATCH lebih cepat, fleksibel, dan tidak mudah rusak jika kita menyisipkan kolom baru!
            </TipBox>
        </div>
    },
    {
        id: 3,
        type: 'example',
        title: 'Fungsi INDEX Dasar',
        content: <div className="space-y-4">
            <p>Fungsi <strong>INDEX</strong> tugasnya adalah "Tolong ambilkan data di baris ke-X dan kolom ke-Y dari tabel ini."</p>
            <h3 className="font-bold text-lg mt-4">Syntax Dasar:</h3>
            <CodeBlock code="=INDEX(array, row_num, [column_num])" />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <ul className="text-sm space-y-2">
                    <li>📊 <strong>array:</strong> Area tabel data. (Misal: A1:D10)</li>
                    <li>⬇️ <strong>row_num:</strong> Ambil dari baris ke berapa? (Misal: 3)</li>
                    <li>➡️ <strong>column_num:</strong> Ambil dari kolom ke berapa? (Opsional)</li>
                </ul>
            </div>
            <CodeBlock code='=INDEX(A1:B5, 3, 2)' />
            <p className="text-sm mt-2">Mengambil data di baris ke-3, kolom ke-2 dari rentang A1:B5.</p>
        </div>
    },
    {
        id: 4,
        type: 'example',
        title: 'Fungsi MATCH Dasar',
        content: <div className="space-y-4">
            <p>Fungsi <strong>MATCH</strong> tugasnya adalah "Tolong cari tahu, nilai ini ada di urutan ke-berapa?"</p>
            <h3 className="font-bold text-lg mt-4">Syntax Dasar:</h3>
            <CodeBlock code="=MATCH(lookup_value, lookup_array, [match_type])" />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <ul className="text-sm space-y-2">
                    <li>🎯 <strong>lookup_value:</strong> Apa yang dicari?</li>
                    <li>📏 <strong>lookup_array:</strong> Di rentang 1 baris atau 1 kolom mana?</li>
                    <li>⚖️ <strong>match_type:</strong> 0 untuk Exact Match (sama persis).</li>
                </ul>
            </div>
            <CodeBlock code='=MATCH("Budi", A1:A10, 0)' />
            <p className="text-sm mt-2">Mencari "Budi" di A1:A10, dan menghasilkan angka urutannya (misal: baris ke-4).</p>
        </div>
    },
    {
        id: 5,
        type: 'example',
        title: 'Menggabungkan INDEX & MATCH',
        content: <div className="space-y-4">
            <p>Dengan menggabungkan keduanya, kita menggunakan MATCH untuk mencari "di baris ke berapa", lalu memberikan angka tersebut ke INDEX untuk mengambil hasilnya.</p>
            <h3 className="font-bold text-lg mt-4">Rumus Sakti:</h3>
            <CodeBlock code="=INDEX(Kolom_Hasil, MATCH(Yang_Dicari, Kolom_Pencarian, 0))" />
            <p className="mt-4 text-sm font-bold">Contoh Kasus:</p>
            <p className="text-sm">Kita ingin mencari Nama (Kolom B) berdasarkan ID (Kolom C).</p>
            <CodeBlock code='=INDEX(B2:B10, MATCH(E2, C2:C10, 0))' />
            <div className="bg-bg-accent p-4 rounded-lg mt-3 text-sm">
                <ol className="list-decimal list-inside space-y-1">
                    <li><strong>MATCH</strong> mencari ID E2 di kolom C2:C10 dan menemukan itu ada di urutan ke-3.</li>
                    <li><strong>INDEX</strong> lalu mengambil baris ke-3 dari kolom Nama (B2:B10).</li>
                </ol>
            </div>
            <TipBox variant="success">
                Perhatikan kita bisa mencari ke arah KIRI! Sesuatu yang VLOOKUP tidak bisa lakukan.
            </TipBox>
        </div>
    },
    {
        id: 6,
        type: 'content',
        title: 'Two-Way Lookup (Pencarian 2 Arah)',
        content: <div className="space-y-4">
            <p>VLOOKUP hanya mencari berdasarkan baris. Bagaimana jika kita ingin mencari berdasarkan baris DAN kolom secara bersamaan?</p>
            <p>Contoh: Mencari Harga Tiket Pesawat berdasarkan "Kota Asal" (Baris) dan "Kota Tujuan" (Kolom).</p>
            <CodeBlock code="=INDEX(Seluruh_Data, MATCH(Baris, Kolom_Baris, 0), MATCH(Kolom, Baris_Kolom, 0))" />
            <p className="mt-4">Ini adalah kombinasi 1 INDEX dan 2 MATCH!</p>
            <TipBox variant="warning">
                Two-way lookup adalah salah satu teknik paling advanced dan kuat di Excel klasik. Sering muncul di test masuk Data Analyst!
            </TipBox>
        </div>
    },
    {
        id: 7,
        type: 'content',
        title: 'Dynamic References',
        content: <div className="space-y-4">
            <p>Kenapa INDEX & MATCH disebut Dynamic References?</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Karena argumennya menunjuk langsung ke kolom yang dituju (misal B2:B10).</li>
                <li>Jika ada kolom baru disisipkan di tengah data, referensi otomatis menyesuaikan dan rumus TIDAK rusak.</li>
                <li>Tidak seperti VLOOKUP yang menggunakan "angka" kolom yang statis (contoh: ambil kolom ke-3).</li>
            </ul>
        </div>
    },
    {
        id: 8,
        type: 'content',
        title: 'Differentiated Practice 🎯',
        content: <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-duo-green/30 p-4 rounded-xl bg-duo-green/5">
                    <h3 className="font-bold text-duo-green mb-2">Murid Basic (Guru TK)</h3>
                    <p className="text-sm mb-3">Fokus pada pemahaman logika dasar.</p>
                    <ul className="text-xs space-y-2 list-disc list-inside">
                        <li>Latihan menggunakan INDEX secara mandiri</li>
                        <li>Latihan menggunakan MATCH secara mandiri</li>
                        <li>Menggabungkan INDEX & MATCH untuk pencarian sederhana (Kiri ke Kanan) menggantikan VLOOKUP</li>
                    </ul>
                </div>
                <div className="border-2 border-duo-blue/30 p-4 rounded-xl bg-duo-blue/5">
                    <h3 className="font-bold text-duo-blue mb-2">Murid Advanced (Fresh Grad)</h3>
                    <p className="text-sm mb-3">Fokus pada fleksibilitas dan Two-Way Lookup.</p>
                    <ul className="text-xs space-y-2 list-disc list-inside">
                        <li>Gunakan INDEX & MATCH untuk mencari ke arah kiri (Left Lookup)</li>
                        <li>Buat Two-Way Lookup matriks harga atau jadwal</li>
                        <li>Gunakan Named Ranges agar rumus lebih terbaca</li>
                    </ul>
                </div>
            </div>
            <TipBox variant="info">
                Gunakan dataset yang disediakan di Simulator untuk mulai praktik!
            </TipBox>
        </div>
    },
    {
        id: 9,
        type: 'transition',
        title: 'Selesai! 🎉',
        content: <div className="text-center space-y-4">
            <p className="text-lg">Kamu telah menguasai rumus rahasia para master Excel!</p>
            <div className="bg-duo-green/10 p-6 rounded-lg">
                <p className="font-bold text-xl mb-2">Yang sudah dipelajari:</p>
                <ul className="text-left list-disc list-inside space-y-1 ml-4">
                    <li>Cara kerja fungsi INDEX</li>
                    <li>Cara kerja fungsi MATCH</li>
                    <li>Menggabungkan INDEX dan MATCH</li>
                    <li>Melakukan Left-Lookup (Pencarian ke kiri)</li>
                    <li>Konsep dasar Two-Way Lookup</li>
                </ul>
            </div>
            <TipBox variant="success">
                Ayo coba praktekkan kekuatan INDEX & MATCH di Task Panel! 🚀
            </TipBox>
        </div>
    }
]
