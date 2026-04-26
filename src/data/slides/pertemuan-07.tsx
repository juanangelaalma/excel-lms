import { Slide } from '@/types'
import { TipBox } from '@/components/lesson/TipBox'
import { CodeBlock } from '@/components/lesson/CodeBlock'

export const pertemuan07Slides: Slide[] = [
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 7',
        content: <div>
            <h2 className="text-4xl font-bold mb-4">Text Functions</h2>
            <p className="text-xl">Manipulasi data teks (Text String) dengan presisi 📝</p>
        </div>
    },
    {
        id: 2,
        type: 'content',
        title: 'Mengapa Mempelajari Text Functions?',
        content: <div className="space-y-4">
            <p>Seringkali data yang kita terima dari sistem atau input orang lain tidak rapi:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nama depan dan belakang terpisah padahal butuh digabung.</li>
                <li>Kode transaksi tercampur dengan nama barang (misal: "TRX-123-LAPTOP").</li>
                <li>Banyak spasi berlebih karena salah ketik.</li>
                <li>Huruf besar/kecil tidak konsisten (misal: "aGus", "bUDI").</li>
            </ul>
            <p>Fungsi Teks membantu kita melakukan <strong>Data Cleaning</strong> tanpa perlu mengetik ulang satu per satu secara manual!</p>
        </div>
    },
    {
        id: 3,
        type: 'example',
        title: '1. Menggabungkan Teks (CONCAT / &)',
        content: <div className="space-y-4">
            <p>Fungsi paling dasar adalah menggabungkan beberapa teks menjadi satu.</p>
            <h3 className="font-bold text-lg">Menggunakan Operator "&" (Ampersand):</h3>
            <CodeBlock code='=A2 & " " & B2' />
            <p className="text-sm">Misal A2="Budi", B2="Santoso", hasilnya: "Budi Santoso". Perhatikan penambahan spasi <code>" "</code> di tengah.</p>

            <h3 className="font-bold text-lg mt-4">Menggunakan CONCATENATE atau CONCAT:</h3>
            <CodeBlock code='=CONCATENATE(A2, " ", B2)' />
            <CodeBlock code='=CONCAT(A2, " ", B2)' />
            <p className="text-sm">Hasilnya sama persis. <code>CONCAT</code> adalah versi modern dan lebih pendek dari <code>CONCATENATE</code>.</p>
        </div>
    },
    {
        id: 4,
        type: 'example',
        title: '2. Memotong Teks (LEFT, RIGHT, MID)',
        content: <div className="space-y-4">
            <p>Bagaimana jika kita hanya butuh sebagian karakter dari sebuah kode? (Misal kode: "JKT-2024-X")</p>
            
            <h3 className="font-bold">⬅️ LEFT (Ambil dari Kiri)</h3>
            <CodeBlock code="=LEFT(teks, jumlah_karakter)" />
            <CodeBlock code='=LEFT("JKT-2024-X", 3)' />
            <p className="text-sm text-text-secondary">Hasil: "JKT"</p>

            <h3 className="font-bold mt-4">➡️ RIGHT (Ambil dari Kanan)</h3>
            <CodeBlock code="=RIGHT(teks, jumlah_karakter)" />
            <CodeBlock code='=RIGHT("JKT-2024-X", 1)' />
            <p className="text-sm text-text-secondary">Hasil: "X"</p>

            <h3 className="font-bold mt-4">✂️ MID (Ambil di Tengah)</h3>
            <CodeBlock code="=MID(teks, mulai_dari_karakter_ke, jumlah_karakter)" />
            <CodeBlock code='=MID("JKT-2024-X", 5, 4)' />
            <p className="text-sm text-text-secondary">Hasil: "2024". (Mulai dari huruf ke-5, ambil sebanyak 4 huruf).</p>
        </div>
    },
    {
        id: 5,
        type: 'example',
        title: '3. Merapikan Kapitalisasi',
        content: <div className="space-y-4">
            <p>Untuk merapikan penulisan nama atau alamat, gunakan 3 fungsi ini:</p>
            
            <div className="bg-bg-accent p-4 rounded-lg space-y-4 mt-3">
                <div>
                    <h4 className="font-bold">UPPER (Kapital Semua)</h4>
                    <CodeBlock code='=UPPER("jakarta")' />
                    <p className="text-sm">Hasil: "JAKARTA"</p>
                </div>
                <div>
                    <h4 className="font-bold">LOWER (Kecil Semua)</h4>
                    <CodeBlock code='=LOWER("JAKARTA")' />
                    <p className="text-sm">Hasil: "jakarta"</p>
                </div>
                <div>
                    <h4 className="font-bold">PROPER (Kapital di Awal Kata)</h4>
                    <CodeBlock code='=PROPER("budi santoso")' />
                    <p className="text-sm">Hasil: "Budi Santoso"</p>
                </div>
            </div>
            <TipBox variant="success">
                PROPER sangat berguna untuk merapikan database nama pelanggan/siswa!
            </TipBox>
        </div>
    },
    {
        id: 6,
        type: 'example',
        title: '4. Membersihkan Spasi Liar (TRIM)',
        content: <div className="space-y-4">
            <p>Spasi ekstra di awal, akhir, atau spasi ganda di tengah sering membuat VLOOKUP menjadi error (#N/A).</p>
            <h3 className="font-bold text-lg mt-4">Syntax Dasar:</h3>
            <CodeBlock code="=TRIM(teks)" />
            <CodeBlock code='=TRIM("  Budi    Santoso  ")' />
            <p className="text-sm mt-2">Hasil: "Budi Santoso"</p>
            <p className="text-sm mt-2">TRIM menghapus spasi di awal dan akhir teks, serta menyisakan hanya 1 spasi di antara kata.</p>
            <TipBox variant="warning">
                Jika VLOOKUP sering gagal padahal kodenya sama, kemungkinan ada spasi tersembunyi. Gunakan TRIM!
            </TipBox>
        </div>
    },
    {
        id: 7,
        type: 'example',
        title: '5. Menghitung Panjang Teks (LEN)',
        content: <div className="space-y-4">
            <p>Fungsi <strong>LEN</strong> (Length) digunakan untuk menghitung jumlah karakter (termasuk spasi) dalam sebuah sel.</p>
            <CodeBlock code="=LEN(teks)" />
            <CodeBlock code='=LEN("Jakarta")' />
            <p className="text-sm mt-2">Hasil: 7</p>
            <CodeBlock code='=LEN("Budi ")' />
            <p className="text-sm mt-2">Hasil: 5 (Spasi di ujung dihitung sebagai karakter!)</p>
            <p className="text-sm mt-4 font-bold">Kapan digunakan?</p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Memvalidasi NIK KTP (harus 16 digit: <code>=IF(LEN(A2)=16, "Valid", "Tidak Valid")</code>).</li>
                <li>Dikombinasikan dengan RIGHT/LEFT untuk pemotongan teks dinamis.</li>
            </ul>
        </div>
    },
    {
        id: 8,
        type: 'content',
        title: 'Kombinasi Advanced (Nesting Functions)',
        content: <div className="space-y-4">
            <p>Kekuatan sejati Text Functions muncul saat digabungkan!</p>
            <p className="font-bold">Contoh Kasus:</p>
            <p className="text-sm">Membuat Email Karyawan dari nama depan. Format: namadepan@kantor.com. Semua harus huruf kecil.</p>
            <CodeBlock code='=LOWER(A2) & "@kantor.com"' />
            
            <p className="font-bold mt-4">Contoh Kasus 2:</p>
            <p className="text-sm">Membersihkan nama yang hurufnya acak-acakan ("  bUDi S.  ") lalu merapikannya.</p>
            <CodeBlock code='=PROPER(TRIM(A2))' />
            <p className="text-sm mt-2">Excel akan mengerjakan TRIM dulu (membersihkan spasi), baru hasilnya di-PROPER (dirapikan hurufnya).</p>
        </div>
    },
    {
        id: 9,
        type: 'content',
        title: 'Differentiated Practice 🎯',
        content: <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-duo-green/30 p-4 rounded-xl bg-duo-green/5">
                    <h3 className="font-bold text-duo-green mb-2">Murid Basic (Guru TK)</h3>
                    <p className="text-sm mb-3">Fokus pada merapikan database sederhana.</p>
                    <ul className="text-xs space-y-2 list-disc list-inside">
                        <li>Gabungkan "Nama Depan" dan "Nama Belakang" murid.</li>
                        <li>Gunakan PROPER untuk memastikan daftar nama murid tertulis rapi.</li>
                        <li>Ambil "Tahun" dari Nomor Induk Siswa (NIS) menggunakan LEFT/RIGHT.</li>
                    </ul>
                </div>
                <div className="border-2 border-duo-blue/30 p-4 rounded-xl bg-duo-blue/5">
                    <h3 className="font-bold text-duo-blue mb-2">Murid Advanced (Fresh Grad)</h3>
                    <p className="text-sm mb-3">Fokus pada dynamic data extraction.</p>
                    <ul className="text-xs space-y-2 list-disc list-inside">
                        <li>Kombinasikan LEFT/MID/RIGHT dengan FIND/SEARCH untuk memotong teks dengan panjang berbeda-beda.</li>
                        <li>Bersihkan database kotor menggunakan TRIM + UPPER/PROPER.</li>
                        <li>Ekstrak domain email menggunakan RIGHT + LEN + FIND.</li>
                    </ul>
                </div>
            </div>
            <TipBox variant="info">
                Gunakan dataset yang disediakan di Simulator untuk mulai praktik!
            </TipBox>
        </div>
    },
    {
        id: 10,
        type: 'transition',
        title: 'Selesai! 🎉',
        content: <div className="text-center space-y-4">
            <p className="text-lg">Kini kamu punya kemampuan membersihkan dan memanipulasi teks layaknya Data Analyst!</p>
            <div className="bg-duo-green/10 p-6 rounded-lg">
                <p className="font-bold text-xl mb-2">Yang sudah dipelajari:</p>
                <ul className="text-left list-disc list-inside space-y-1 ml-4">
                    <li>Menggabungkan teks dengan <code>&</code> atau <code>CONCAT</code></li>
                    <li>Memotong teks dengan <code>LEFT</code>, <code>RIGHT</code>, dan <code>MID</code></li>
                    <li>Merapikan huruf dengan <code>UPPER</code>, <code>LOWER</code>, dan <code>PROPER</code></li>
                    <li>Membersihkan spasi dengan <code>TRIM</code></li>
                    <li>Menghitung karakter dengan <code>LEN</code></li>
                </ul>
            </div>
            <TipBox variant="success">
                Waktunya berlatih membersihkan data di Task Panel Simulator! 🚀
            </TipBox>
        </div>
    }
]
