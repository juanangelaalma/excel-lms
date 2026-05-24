import { Slide } from '@/types'
import { TipBox } from '@/components/lesson/TipBox'
import { CodeBlock } from '@/components/lesson/CodeBlock'

export const pertemuan08Slides: Slide[] = [
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 8',
        content: <div>
            <h2 className="text-4xl font-bold mb-4">Cell References & Named Ranges</h2>
            <p className="text-xl">Rahasia formula yang cerdas: Relative, Absolute, Mixed & Named Ranges 🎯</p>
        </div>
    },
    {
        id: 2,
        type: 'content',
        title: 'Mengapa Cell References Penting?',
        content: <div className="space-y-4">
            <p>Saat kamu menyalin formula ke bawah atau ke samping, apakah hasilnya selalu benar? Belum tentu!</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Formula yang salah references bisa menghasilkan angka yang keliru.</li>
                <li>Memahami <strong>Relative</strong> vs <strong>Absolute</strong> reference adalah fondasi dari formula yang scalable.</li>
                <li><strong>Named Ranges</strong> membuat formula lebih mudah dibaca dan dipelihara.</li>
                <li>Kesalahan tipe reference adalah salah satu sumber bug terbanyak di Excel!</li>
            </ul>
            <TipBox variant="info">
                Menguasai references akan menghemat waktu berjam-jam saat membuat laporan dan dashboard!
            </TipBox>
        </div>
    },
    {
        id: 3,
        type: 'example',
        title: '1. Relative Reference (Default)',
        content: <div className="space-y-4">
            <p>Secara default, semua referensi sel di Excel bersifat <strong>Relatif</strong>. Artinya, ketika formula disalin, referensinya ikut bergeser secara otomatis.</p>

            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="font-semibold mb-2">Contoh:</p>
                <p className="text-sm">Sel C2 berisi: <code>=A2+B2</code></p>
                <p className="text-sm mt-1">Jika disalin ke <strong>C3</strong>, formula otomatis menjadi: <code>=A3+B3</code></p>
                <p className="text-sm mt-1">Jika disalin ke <strong>C4</strong>, formula otomatis menjadi: <code>=A4+B4</code></p>
            </div>

            <CodeBlock code="=A2+B2  // Relative reference" />
            <p className="text-sm text-text-secondary">Cocok untuk perhitungan per baris, seperti menjumlahkan nilai di setiap baris data.</p>
        </div>
    },
    {
        id: 4,
        type: 'example',
        title: '2. Absolute Reference (dengan tanda $)',
        content: <div className="space-y-4">
            <p>Tanda <strong>dollar ($)</strong> mengunci referensi agar <em>tidak bergeser</em> saat formula disalin ke mana pun.</p>

            <CodeBlock code="=$A$1  // Selalu merujuk ke A1, tidak pernah berubah" />

            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="font-semibold mb-2">Kapan digunakan?</p>
                <ul className="text-sm space-y-1 list-disc list-inside ml-2">
                    <li>Mengunci referensi ke <strong>nilai tetap</strong> (tarif pajak, nilai kurs, diskon)</li>
                    <li>Referensi ke <strong>header tabel</strong> yang tidak boleh bergeser</li>
                    <li>Rumus yang mengacu ke <strong>satu sel acuan</strong> dari banyak sel lain</li>
                </ul>
            </div>

            <p className="text-sm font-bold">Contoh Kasus: Menghitung Komisi</p>
            <CodeBlock code="=B2 * $D$1   // B2 (penjualan) × $D$1 (% komisi yang dikunci)" />
            <p className="text-sm text-text-secondary">Saat disalin ke B3, B4, dst., D1 tetap mengacu ke sel yang sama.</p>

            <TipBox variant="tip">
                Shortcut cepat: Tekan <strong>F4</strong> saat kursor berada di referensi sel untuk toggle antara mode Relative → Absolute → Mixed → Relative!
            </TipBox>
        </div>
    },
    {
        id: 5,
        type: 'example',
        title: '3. Mixed Reference (Setengah Dikunci)',
        content: <div className="space-y-4">
            <p><strong>Mixed Reference</strong> mengunci hanya salah satu dimensi — baris ATAU kolom saja.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="bg-bg-accent p-4 rounded-lg">
                    <h4 className="font-bold mb-2">$A2 — Kolom Dikunci</h4>
                    <p className="text-sm">Kolom A selalu tetap, tapi baris bisa bergeser.</p>
                    <CodeBlock code="=$A2  // Kolom A terkunci, baris bebas" />
                    <p className="text-xs text-text-secondary mt-1">Cocok untuk: formula yang disalin ke samping</p>
                </div>
                <div className="bg-bg-accent p-4 rounded-lg">
                    <h4 className="font-bold mb-2">A$2 — Baris Dikunci</h4>
                    <p className="text-sm">Baris 2 selalu tetap, tapi kolom bisa bergeser.</p>
                    <CodeBlock code="=A$2  // Baris 2 terkunci, kolom bebas" />
                    <p className="text-xs text-text-secondary mt-1">Cocok untuk: formula yang disalin ke bawah</p>
                </div>
            </div>

            <TipBox variant="info">
                Mixed reference sangat berguna untuk membuat <strong>tabel perkalian</strong> atau <strong>matriks harga</strong> dengan satu kali penulisan formula!
            </TipBox>
        </div>
    },
    {
        id: 6,
        type: 'content',
        title: 'Perbandingan: Relative vs Absolute vs Mixed',
        content: <div className="space-y-4">
            <p>Ringkasan perbedaan ketiganya:</p>
            <div className="overflow-x-auto mt-3">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-duo-blue/20">
                            <th className="border border-duo-blue/30 p-2 text-left">Tipe</th>
                            <th className="border border-duo-blue/30 p-2 text-left">Notasi</th>
                            <th className="border border-duo-blue/30 p-2 text-left">Kolom</th>
                            <th className="border border-duo-blue/30 p-2 text-left">Baris</th>
                            <th className="border border-duo-blue/30 p-2 text-left">Contoh Penggunaan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-duo-blue/30 p-2 font-medium">Relative</td>
                            <td className="border border-duo-blue/30 p-2"><code>A1</code></td>
                            <td className="border border-duo-blue/30 p-2">Bebas bergeser</td>
                            <td className="border border-duo-blue/30 p-2">Bebas bergeser</td>
                            <td className="border border-duo-blue/30 p-2">Hitung per baris (=A2+B2)</td>
                        </tr>
                        <tr className="bg-bg-accent">
                            <td className="border border-duo-blue/30 p-2 font-medium">Absolute</td>
                            <td className="border border-duo-blue/30 p-2"><code>$A$1</code></td>
                            <td className="border border-duo-blue/30 p-2">Terkunci</td>
                            <td className="border border-duo-blue/30 p-2">Terkunci</td>
                            <td className="border border-duo-blue/30 p-2">Tarif pajak, kurs (=$D$1)</td>
                        </tr>
                        <tr>
                            <td className="border border-duo-blue/30 p-2 font-medium">Mixed (Kolom)</td>
                            <td className="border border-duo-blue/30 p-2"><code>$A1</code></td>
                            <td className="border border-duo-blue/30 p-2">Terkunci</td>
                            <td className="border border-duo-blue/30 p-2">Bebas bergeser</td>
                            <td className="border border-duo-blue/30 p-2">Salin ke kanan, kolom tetap</td>
                        </tr>
                        <tr className="bg-bg-accent">
                            <td className="border border-duo-blue/30 p-2 font-medium">Mixed (Baris)</td>
                            <td className="border border-duo-blue/30 p-2"><code>A$1</code></td>
                            <td className="border border-duo-blue/30 p-2">Bebas bergeser</td>
                            <td className="border border-duo-blue/30 p-2">Terkunci</td>
                            <td className="border border-duo-blue/30 p-2">Salin ke bawah, baris tetap</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    },
    {
        id: 7,
        type: 'example',
        title: '4. Named Ranges — Referensi yang Berbicara',
        content: <div className="space-y-4">
            <p>Bayangkan formula ini:</p>
            <CodeBlock code="=B2 * $D$1" />
            <p className="text-sm">vs formula ini:</p>
            <CodeBlock code="=Penjualan * TarifPPN" />
            <p>Mana yang lebih mudah dipahami? <strong>Named Ranges</strong> memberi nama yang bermakna pada sel atau range tertentu!</p>

            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="font-semibold mb-2">Cara Membuat Named Range:</p>
                <ol className="text-sm space-y-1 list-decimal list-inside ml-2">
                    <li>Pilih sel atau range yang ingin diberi nama</li>
                    <li>Klik pada <strong>Name Box</strong> (kotak kecil di kiri atas, biasanya berisi "A1")</li>
                    <li>Ketik nama yang diinginkan (misal: <code>TarifPPN</code>)</li>
                    <li>Tekan Enter</li>
                </ol>
            </div>
            <TipBox variant="tip">
                Nama range tidak boleh mengandung spasi. Gunakan underscore (_) atau CamelCase. Contoh: <code>Tarif_PPN</code> atau <code>TarifPPN</code>.
            </TipBox>
        </div>
    },
    {
        id: 8,
        type: 'example',
        title: '5. Menggunakan Named Ranges dalam Formula',
        content: <div className="space-y-4">
            <p className="font-semibold">Contoh Skenario: Laporan Gaji Karyawan</p>
            <p className="text-sm">Sel <code>H1</code> berisi tarif pajak (misal: 5%), diberi nama <strong>TarifPajak</strong>.</p>

            <div className="space-y-3 mt-3">
                <div>
                    <p className="text-sm font-semibold">Sebelum (sulit dibaca):</p>
                    <CodeBlock code="=E2 - (E2 * $H$1)" />
                </div>
                <div>
                    <p className="text-sm font-semibold">Sesudah (langsung jelas!):</p>
                    <CodeBlock code="=GajiPokok - (GajiPokok * TarifPajak)" />
                </div>
            </div>

            <p className="font-semibold mt-4">Cara lain membuat Named Range (Cara Profesional):</p>
            <ol className="text-sm space-y-1 list-decimal list-inside ml-2">
                <li>Klik tab <strong>Formulas</strong> di Ribbon</li>
                <li>Klik <strong>Name Manager</strong> (atau Define Name)</li>
                <li>Klik <strong>New</strong>, isi Name, pilih Scope, tentukan Refers To</li>
                <li>Klik OK</li>
            </ol>

            <TipBox variant="success">
                Named Ranges juga bersifat <strong>Absolute</strong> secara default! Mereka tidak bergeser saat formula disalin.
            </TipBox>
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
                    <p className="text-sm mb-3">Fokus pada memahami perbedaan Relative vs Absolute.</p>
                    <ul className="text-xs space-y-2 list-disc list-inside">
                        <li>Buat tabel nilai murid, hitung rata-rata per murid (relative reference).</li>
                        <li>Buat kolom "Keterangan" yang mengacu ke <strong>satu sel target nilai minimum</strong> (absolute reference).</li>
                        <li>Buat Named Range untuk target nilai minimum tersebut.</li>
                    </ul>
                </div>
                <div className="border-2 border-duo-blue/30 p-4 rounded-xl bg-duo-blue/5">
                    <h3 className="font-bold text-duo-blue mb-2">Murid Advanced (Fresh Grad)</h3>
                    <p className="text-sm mb-3">Fokus pada mixed references dan Name Manager.</p>
                    <ul className="text-xs space-y-2 list-disc list-inside">
                        <li>Buat <strong>tabel harga</strong> dengan mixed references (kolom = nama produk, baris = jumlah). Satu formula untuk semua sel!</li>
                        <li>Gunakan <strong>Name Manager</strong> untuk membuat beberapa Named Ranges sekaligus.</li>
                        <li>Buat formula VLOOKUP menggunakan Named Range sebagai table_array.</li>
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
            <p className="text-lg">Selamat! Kamu sudah menguasai senjata rahasia para Excel pro!</p>
            <div className="bg-duo-green/10 p-6 rounded-lg">
                <p className="font-bold text-xl mb-2">Yang sudah dipelajari:</p>
                <ul className="text-left list-disc list-inside space-y-1 ml-4">
                    <li><strong>Relative Reference</strong> — bergeser saat disalin (A1)</li>
                    <li><strong>Absolute Reference</strong> — selalu tetap ($A$1)</li>
                    <li><strong>Mixed Reference</strong> — setengah dikunci ($A1 atau A$1)</li>
                    <li><strong>Shortcut F4</strong> untuk toggle tipe reference</li>
                    <li><strong>Named Ranges</strong> — beri nama bermakna pada sel/range</li>
                    <li><strong>Name Manager</strong> — kelola semua Named Ranges</li>
                </ul>
            </div>
            <TipBox variant="success">
                Waktunya berlatih di Task Panel Simulator! 🚀
            </TipBox>
        </div>
    }
]
