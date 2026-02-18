import { Slide } from '@/types'
import { TipBox } from '@/components/lesson/TipBox'
import { CodeBlock } from '@/components/lesson/CodeBlock'

export const pertemuan10Slides: Slide[] = [
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 10',
        content: <div>
            <h2 className="text-4xl font-bold mb-4">Data Validation</h2>
            <p className="text-xl">Membuat dropdown lists dan validasi input data 📋</p>
        </div>
    },
    {
        id: 2,
        type: 'content',
        title: 'Mengapa Data Validation Penting?',
        content: <div className="space-y-4">
            <p>Data validation membantu menjaga kualitas data:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>✅ Mencegah input data yang salah</li>
                <li>📋 Standardisasi format data </li>
                <li>⚡ Mempercepat data entry dengan dropdown</li>
                <li>🛡️ Melindungi formula dari input invalid</li>
                <li>📊 Memastikan data siap untuk analisis</li>
            </ul>
            <TipBox type="success">
                Data validation = gatekeeper untuk kualitas data Anda!
            </TipBox>
        </div>
    },
    {
        id: 3,
        type: 'example',
        title: 'Membuat Dropdown List',
        content: <div className="space-y-4">
            <p className="font-semibold">Langkah-langkah:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4 text-sm">
                <li>Pilih cell atau range</li>
                <li>Data Tab → Data Validation</li>
                <li>Allow: List</li>
                <li>Source: ketik items atau pilih range</li>
            </ol>
            <CodeBlock code='Source: "Jakarta,Bandung,Surabaya"' />
            <p className="text-sm text-text-secondary">Atau pilih range: =A1:A5</p>
            <TipBox type="tip">
                Pisahkan items dengan koma jika ketik manual!
            </TipBox>
        </div>
    },
    {
        id: 4,
        type: 'example',
        title: 'Validation dengan Range',
        content: <div className="space-y-4">
            <p>Menggunakan range sebagai source dropdown:</p>
            <div className="bg-bg-accent p-4 rounded-lg">
                <p className="text-sm">1. Buat list di sheet terpisah (misal: Sheet2!A1:A10)</p>
                <p className="text-sm">2. Source: =Sheet2!$A$1:$A$10</p>
                <p className="text-sm">3. Gunakan absolute reference ($) agar tidak bergeser</p>
            </div>
            <TipBox type="info">
                Keuntungan: Update list di satu tempat, dropdown otomatis update!
            </TipBox>
        </div>
    },
    {
        id: 5,
        type: 'example',
        title: 'Named Range untuk Dropdown',
        content: <div className="space-y-4">
            <p>Cara lebih profesional menggunakan Named Range:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4 text-sm">
                <li>Select range source (misal: A1:A10)</li>
                <li>Formulas Tab → Define Name</li>
                <li>Beri nama: "ListKota"</li>
                <li>Di validation source: =ListKota</li>
            </ol>
            <TipBox type="tip">
                Lebih mudah dibaca dan dikelola dibanding cell reference!
            </TipBox>
        </div>
    },
    {
        id: 6,
        type: 'example',
        title: 'Dependent Dropdown dengan INDIRECT',
        content: <div className="space-y-4">
            <p>Dropdown yang berubah berdasarkan pilihan sebelumnya:</p>
            <div className="bg-bg-accent p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Contoh: Provinsi → Kota</p>
                <p className="text-sm">1. Buat named ranges: Jakarta, Jawa_Barat, Jawa_Timur</p>
                <p className="text-sm">2. Dropdown pertama (Provinsi): List biasa</p>
                <p className="text-sm">3. Dropdown kedua source: =INDIRECT(A2)</p>
            </div>
            <CodeBlock code="=INDIRECT(A2)" />
            <p className="text-sm text-text-secondary">A2 berisi nama provinsi yang jadi nama named range</p>
        </div>
    },
    {
        id: 7,
        type: 'example',
        title: 'Custom Validation Rules',
        content: <div className="space-y-4">
            <p>Validation selain list - berbagai tipe:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                <li><strong>Whole Number</strong>: Hanya angka bulat (min-max)</li>
                <li><strong>Decimal</strong>: Angka desimal dengan range</li>
                <li><strong>Date</strong>: Tanggal dalam periode tertentu</li>
                <li><strong>Time</strong>: Waktu dalam range</li>
                <li><strong>Text Length</strong>: Panjang text (misal: max 50 char)</li>
                <li><strong>Custom</strong>: Formula sendiri!</li>
            </ul>
        </div>
    },
    {
        id: 8,
        type: 'example',
        title: 'Custom Formula Validation',
        content: <div className="space-y-4">
            <p>Validation dengan formula custom:</p>
            <CodeBlock code="=AND(A2>=18, A2<=65)" />
            <p className="text-sm">Hanya terima umur 18-65</p>
            <CodeBlock code="=LEN(A2)<=10" />
            <p className="text-sm">Max 10 karakter</p>
            <CodeBlock code="=ISNUMBER(A2)" />
            <p className="text-sm">Harus angka</p>
            <TipBox type="warning">
                Formula harus mengembalikan TRUE/FALSE!
            </TipBox>
        </div>
    },
    {
        id: 9,
        type: 'example',
        title: 'Input Message & Error Alert',
        content: <div className="space-y-4">
            <p className="font-semibold">Input Message (opsional):</p>
            <p className="text-sm text-text-secondary">Pesan yang muncul saat cell dipilih - panduan untuk user</p>
            <p className="font-semibold mt-4">Error Alert:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li><strong>Stop</strong>: Tidak bisa input data invalid (strict)</li>
                <li><strong>Warning</strong>: Peringatan tapi tetap bisa lanjut</li>
                <li><strong>Information</strong>: Hanya info saja</li>
            </ul>
        </div>
    },
    {
        id: 10,
        type: 'example',
        title: 'Circle Invalid Data',
        content: <div className="space-y-4">
            <p>Menemukan data yang tidak sesuai validation:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4 text-sm">
                <li>Data Tab → Data Validation → Circle Invalid Data</li>
                <li>Excel akan tandai (circle merah) data yang invalid</li>
                <li>Clear circles: Data Validation → Clear Validation Circles</li>
            </ol>
            <TipBox type="info">
                Berguna untuk audit data yang sudah ada!
            </TipBox>
        </div>
    },
    {
        id: 11,
        type: 'tip',
        title: 'Best Practices',
        content: <div className="space-y-3">
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>📝 Gunakan Input Message untuk panduan user</li>
                <li>🎯 Pilih Error Alert type yang sesuai (Stop vs Warning)</li>
                <li>📋 Simpan dropdown source di sheet terpisah</li>
                <li>🔤 Gunakan Named Range untuk source yang kompleks</li>
                <li>✅ Uji coba validation sebelum share file</li>
                <li>🔍 Audit rutin dengan Circle Invalid Data</li>
            </ul>
        </div>
    },
    {
        id: 12,
        type: 'transition',
        title: 'Selesai! 🎉',
        content: <div className="text-center space-y-4">
            <p className="text-lg">Luar biasa! Anda sudah menguasai Data Validation!</p>
            <div className="bg-duo-green/10 p-6 rounded-lg">
                <p className="font-bold text-xl mb-2">Yang sudah dipelajari:</p>
                <ul className="text-left list-disc list-inside space-y-1 ml-4">
                    <li>Membuat dropdown lists</li>
                    <li>Validation dengan range dan named range</li>
                    <li>Dependent dropdown dengan INDIRECT</li>
                    <li>Custom validation rules (number, date, text, formula)</li>
                    <li>Input messages dan error alerts</li>
                    <li>Circle invalid data untuk audit</li>
                </ul>
            </div>
            <TipBox type="success">
                Data validation = fondasi untuk data quality! 🎯
            </TipBox>
        </div>
    }
]
