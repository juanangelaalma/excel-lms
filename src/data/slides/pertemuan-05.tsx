import { Slide } from '@/types'
import { TipBox } from '@/components/lesson/TipBox'
import { CodeBlock } from '@/components/lesson/CodeBlock'

export const pertemuan05Slides: Slide[] = [
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 5',
        content: <div>
            <h2 className="text-4xl font-bold mb-4">VLOOKUP & Lookup Functions</h2>
            <p className="text-xl">Mencari data dengan VLOOKUP, HLOOKUP, dan XLOOKUP 🔍</p>
        </div>
    },
    {
        id: 2,
        type: 'content',
        title: 'Apa itu Lookup Functions?',
        content: <div className="space-y-4">
            <p>Lookup functions digunakan untuk mencari sebuah nilai pada sebuah tabel, lalu mengambil nilai lain yang ada di baris atau kolom yang sama.</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>🧾 Mencari harga barang berdasarkan Kode Barang</li>
                <li>👨‍💼 Mencari nama karyawan berdasarkan NIK</li>
                <li>💰 Menentukan bonus berdasarkan target penjualan</li>
            </ul>
            <TipBox variant="success">
                Bayangkan Lookup itu seperti mencari nomor telepon di buku telepon perumahan!
            </TipBox>
        </div>
    },
    {
        id: 3,
        type: 'example',
        title: 'VLOOKUP (Vertical Lookup)',
        content: <div className="space-y-4">
            <p>Fungsi yang paling sering digunakan. <strong>Vertical</strong> berarti data pencariannya memanjang ke bawah (berbentuk kolom).</p>
            <h3 className="font-bold text-lg mt-4">Syntax Dasar:</h3>
            <CodeBlock code="=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])" />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <ul className="text-sm space-y-2">
                    <li>🎯 <strong>lookup_value:</strong> Apa yang dicari? (Misal: Kode "A01")</li>
                    <li>📊 <strong>table_array:</strong> Di mana mencarinya? (Misal: Tabel Referensi A1:D10)</li>
                    <li>🔢 <strong>col_index_num:</strong> Hasilnya ada di kolom ke berapa? (Misal: Kolom 2 untuk Nama)</li>
                    <li>⚖️ <strong>range_lookup:</strong> Sama persis (0/FALSE) atau mendekati (1/TRUE)?</li>
                </ul>
            </div>
        </div>
    },
    {
        id: 4,
        type: 'example',
        title: 'Contoh VLOOKUP',
        content: <div className="space-y-4">
            <p>Misalkan kita punya tabel di A1:C5 (Kode, Nama Barang, Harga). Kita ingin mencari Harga dari kode di E1.</p>
            <CodeBlock code='=VLOOKUP(E1, A1:C5, 3, FALSE)' />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <ul className="text-sm space-y-1">
                    <li><strong>E1</strong> = Kode yang kita cari</li>
                    <li><strong>A1:C5</strong> = Area tabel referensi seluruhnya</li>
                    <li><strong>3</strong> = Kita ambil dari kolom ke-3 (Harga)</li>
                    <li><strong>FALSE</strong> = Kodenya harus SAMA PERSIS</li>
                </ul>
            </div>
            <TipBox variant="warning">
                Nilai pencarian di tabel referensi (table_array) HARUS berada di kolom paling kiri!
            </TipBox>
        </div>
    },
    {
        id: 5,
        type: 'content',
        title: 'Exact vs Approximate Match',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">🔍 FALSE atau 0 (Exact Match)</h3>
            <p>Tipe ini mengharuskan data pencarian sama persis. Cocok untuk ID Karyawan, Kode Barang, NIK. Jika tidak ketemu, hasilnya #N/A.</p>
            
            <h3 className="font-bold text-lg mt-4">📉 TRUE atau 1 (Approximate Match)</h3>
            <p>Mencari nilai terdekat (lebih kecil) jika tidak menemukan yang sama persis. Sangat berguna untuk sistem rentang angka, seperti grade nilai atau komisi.</p>
            <CodeBlock code='=VLOOKUP(85, Skala_Nilai, 2, TRUE)' />
            <TipBox variant="info">
                Untuk menggunakan TRUE, data pada kolom pertama tabel referensi HARUS diurutkan dari yang terkecil hingga terbesar!
            </TipBox>
        </div>
    },
    {
        id: 6,
        type: 'example',
        title: 'HLOOKUP (Horizontal Lookup)',
        content: <div className="space-y-4">
            <p>Fungsi ini mirip VLOOKUP, tapi untuk tabel yang bentuknya menyamping (Horizontal).</p>
            <CodeBlock code="=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])" />
            <p className="mt-4">Bedanya hanya di angka baris. Kita memberitahu baris ke-berapa dari atas, bukan kolom ke-berapa dari kiri.</p>
            <CodeBlock code='=HLOOKUP("Feb", A1:G5, 2, FALSE)' />
            <p className="text-sm text-text-secondary mt-2">Mencari tulisan "Feb" dari baris paling atas, lalu mengambil nilai pada kolom tersebut di baris ke-2.</p>
        </div>
    },
    {
        id: 7,
        type: 'content',
        title: 'Kelemahan VLOOKUP ❌',
        content: <div className="space-y-4">
            <p>VLOOKUP sangat populer, tetapi memiliki beberapa limitasi:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Harus mencari dari KIRI ke KANAN. Kolom pencarian harus selalu di ujung kiri tabel referensi.</li>
                <li>Jika ada kolom baru yang disisipkan di tengah tabel referensi, VLOOKUP bisa rusak (karena <code>col_index_num</code> statis berupa angka).</li>
                <li>Secara default mencari secara Approximate (TRUE) jika parameter terakhir tidak diisi padahal kita butuh Exact Match seringnya.</li>
            </ul>
        </div>
    },
    {
        id: 8,
        type: 'example',
        title: '✨ XLOOKUP (Modern Excel)',
        content: <div className="space-y-4">
            <p>Tersedia di Excel 365, XLOOKUP mengatasi semua kelemahan VLOOKUP!</p>
            <CodeBlock code="=XLOOKUP(lookup_value, lookup_array, return_array)" />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <ul className="text-sm space-y-2">
                    <li>🎯 <strong>lookup_value:</strong> Apa yang dicari?</li>
                    <li>📏 <strong>lookup_array:</strong> Tepat di kolom pencariannya saja. (Misal: A1:A10)</li>
                    <li>🎁 <strong>return_array:</strong> Berada di kolom hasil yang mau diambil saja. (Misal: C1:C10)</li>
                </ul>
            </div>
            <TipBox variant="success">
                XLOOKUP bisa mencari dari kanan ke kiri, dan juga tidak akan rusak kalau kita sisipkan kolom baru!
            </TipBox>
        </div>
    },
    {
        id: 9,
        type: 'example',
        title: 'Menangani Error #N/A',
        content: <div className="space-y-4">
            <p>Jika data tidak ditemukan, VLOOKUP akan menghasilkan error <code>#N/A</code>. Kita bisa membersihkannya dengan <code>IFERROR</code>.</p>
            <CodeBlock code='=IFERROR(VLOOKUP(A2, DataBarang, 2, FALSE), "Tidak Ditemukan")' />
            <p className="text-sm text-text-secondary mt-2">Jika VLOOKUP error, maka muncul tulisan "Tidak Ditemukan", bukan #N/A yang jelek.</p>
            
            <p className="mt-4 font-bold">XLOOKUP Build-in Error Handling:</p>
            <CodeBlock code='=XLOOKUP(A2, ColA, ColB, "Tidak Ditemukan")' />
            <p className="text-sm text-text-secondary">XLOOKUP memiliki parameter ke-4 bawaan jika data tidak ketemu!</p>
        </div>
    },
    {
        id: 10,
        type: 'tip',
        title: 'Best Practices Lookup',
        content: <div className="space-y-3">
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>🔒 <strong>Kunci Referensi:</strong> Selalu gunakan Absolute Reference ($) untuk <code>table_array</code>, contoh: <code>$A$1:$C$100</code> agar tidak bergeser saat dicopy ke bawah!</li>
                <li>🏷️ <strong>Gunakan Named Ranges:</strong> Daripada memakai <code>$A$1:$C$100</code>, beri nama tabel tersebut "Data_Karyawan". Rumus jadi lebih mudah dibaca!</li>
                <li>🧹 <strong>Hati-hati Spasi:</strong> Jika data asal atau referensi memiliki tambahan spasi ujungnya, VLOOKUP akan gagal. Gunakan bantuan <code>TRIM()</code> jika datanya kotor.</li>
            </ul>
        </div>
    },
    {
        id: 11,
        type: 'content',
        title: 'Differentiated Practice 🎯',
        content: <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-duo-green/30 p-4 rounded-xl bg-duo-green/5">
                    <h3 className="font-bold text-duo-green mb-2">Murid Basic (Guru TK)</h3>
                    <p className="text-sm mb-3">Fokus pada akurasi pencarian data sederhana.</p>
                    <ul className="text-xs space-y-2 list-disc list-inside">
                        <li>Gunakan VLOOKUP untuk mencari Nama Murid berdasarkan ID</li>
                        <li>Gunakan VLOOKUP untuk mencari No. Telepon Orang Tua</li>
                        <li>Praktik Exact Match (FALSE) saja</li>
                    </ul>
                </div>
                <div className="border-2 border-duo-blue/30 p-4 rounded-xl bg-duo-blue/5">
                    <h3 className="font-bold text-duo-blue mb-2">Murid Advanced (Fresh Grad)</h3>
                    <p className="text-sm mb-3">Fokus pada efisiensi dan penanganan data kompleks.</p>
                    <ul className="text-xs space-y-2 list-disc list-inside">
                        <li>VLOOKUP dengan Data Validation (Dropdown)</li>
                        <li>Approximate Match untuk penentuan Grade/Bonus</li>
                        <li>Gunakan XLOOKUP untuk mencari data dari kanan ke kiri</li>
                        <li>Tangani error #N/A dengan pesan kustom</li>
                    </ul>
                </div>
            </div>
            <TipBox variant="info">
                Gunakan dataset yang disediakan di Simulator untuk mulai praktik!
            </TipBox>
        </div>
    },
    {
        id: 12,
        type: 'transition',
        title: 'Selesai! 🎉',
        content: <div className="text-center space-y-4">
            <p className="text-lg">Hebat! Anda baru saja mempelajari rumus paling ditanyakan saat interview kerja!</p>
            <div className="bg-duo-green/10 p-6 rounded-lg">
                <p className="font-bold text-xl mb-2">Yang sudah dipelajari:</p>
                <ul className="text-left list-disc list-inside space-y-1 ml-4">
                    <li>VLOOKUP dasar dan ke 4 parameternya</li>
                    <li>Exact Match (FALSE) vs Approximate Match (TRUE)</li>
                    <li>HLOOKUP untuk tabel horizontal</li>
                    <li>XLOOKUP masa depan dari lookup</li>
                    <li>Kombinasi dengan IFERROR untuk #N/A</li>
                    <li>Best practice seperti men-lock table_array</li>
                </ul>
            </div>
            <TipBox variant="success">
                Ayo coba praktekkan VLOOKUP sekarang di Task Panel! 🚀
            </TipBox>
        </div>
    }
]
