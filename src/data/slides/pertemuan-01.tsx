import { Slide } from '@/types'
import { TipBox } from '@/components/lesson/TipBox'
import { CodeBlock } from '@/components/lesson/CodeBlock'
import WorkbookImage from '@/data/images/pertemuan1/Workbook.jpg'
import FormulaBar from '@/data/images/pertemuan1/FormulaBar.png'

export const pertemuan01Slides: Slide[] = [
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 1',
        content: <div>
            <h2 className="text-4xl font-bold mb-4">Pengenalan & Interface Excel</h2>
            <p className="text-xl">Mengenal Excel, navigasi dasar, dan shortcuts penting ⌨️</p>
        </div>
    },
    {
        id: 2,
        type: 'content',
        title: 'Apa itu Microsoft Excel?',
        content: <div className="space-y-4">
            <p>Microsoft Excel adalah aplikasi spreadsheet yang digunakan untuk:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>📊 Mengorganisir dan menganalisis data</li>
                <li>🧮 Melakukan perhitungan otomatis dengan formula</li>
                <li>📈 Membuat visualisasi data (charts & graphs)</li>
                <li>📑 Menyimpan database sederhana</li>
                <li>📝 Membuat laporan dan dashboard</li>
            </ul>
            <TipBox variant="success">
                Excel adalah skill #1 yang diminta di 80% lowongan kerja admin dan finance!
            </TipBox>
        </div>
    },
    {
        id: 3,
        type: 'content',
        title: 'Komponen Utama Excel',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">📋 Workbook & Worksheet</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Workbook:</strong> File Excel (.xlsx)</li>
                <li><strong>Worksheet (Sheet):</strong> Halaman dalam workbook</li>
                <li>Satu workbook bisa punya banyak worksheet</li>
            </ul>

            <h3 className="font-bold text-lg mt-4">📐 Cell, Row, Column</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cell:</strong> Kotak tempat data (contoh: A1, B5)</li>
                <li><strong>Row:</strong> Baris (diidentifikasi dengan angka: 1, 2, 3...)</li>
                <li><strong>Column:</strong> Kolom (diidentifikasi dengan huruf: A, B, C...)</li>
            </ul>
        </div>
    },
    {
        id: 4,
        type: 'content',
        title: 'Komponen Utama Excel',
        content: <div className="space-y-4">
            <img src={WorkbookImage} className='w-full object-contain' alt="Komponen Utama Excel" />
        </div>
    },
    {
        id: 5,
        type: 'content',
        title: 'Quick Access Toolbar',
        content: <div className="space-y-4">
            <p>Toolbar kecil di pojok kiri atas (di atas Ribbon) yang berisi shortcut untuk perintah yang sering digunakan:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>💾 <strong>Save:</strong> Menyimpan workbook</li>
                <li>↶ <strong>Undo:</strong> Membatalkan aksi terakhir</li>
                <li>↷ <strong>Redo:</strong> Mengulangi aksi yang dibatalkan</li>
            </ul>
            <TipBox variant="tip">
                Kamu bisa customize Quick Access Toolbar dengan klik dropdown arrow di sebelah kanannya!
            </TipBox>
        </div>
    },
    {
        id: 6,
        type: 'content',
        title: 'Title Bar & Name Box',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">📌 Title Bar</h3>
            <p>Baris paling atas yang menampilkan nama file Excel yang sedang dibuka.</p>

            <h3 className="font-bold text-lg mt-4">🔤 Name Box</h3>
            <p>Kotak di sebelah kiri Formula Bar yang menampilkan:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Alamat cell yang aktif (contoh: A1, C5)</li>
                <li>Bisa digunakan untuk navigate ke cell tertentu (ketik alamat → Enter)</li>
                <li>Menampilkan nama range jika cell adalah bagian dari named range</li>
            </ul>
        </div>
    },
    {
        id: 7,
        type: 'content',
        title: 'Ribbon - Menu Utama Excel',
        content: <div className="space-y-4">
            <p>Ribbon adalah area dengan tab-tab di bagian atas yang berisi semua perintah Excel. Ribbon dibagi menjadi <strong>Tabs</strong> dan setiap tab punya <strong>Groups</strong>.</p>
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="text-sm"><strong>Struktur:</strong></p>
                <p className="text-sm ml-4">Tab → Groups → Commands (Buttons)</p>
                <p className="text-sm ml-4 mt-2">Contoh: <span className="text-excel-green">Home Tab</span> → <span className="text-duo-purple">Font Group</span> → <span className="text-duo-green">Bold Button</span></p>
            </div>
            <TipBox variant="info">
                Tekan Ctrl + F1 untuk hide/show Ribbon dan dapatkan lebih banyak ruang layar!
            </TipBox>
        </div>
    },
    {
        id: 8,
        type: 'content',
        title: 'Ribbon Tabs - Home',
        content: <div className="space-y-4">
            <p className="font-semibold text-excel-green text-lg">🏠 Home Tab</p>
            <p>Tab yang paling sering digunakan, berisi perintah dasar formatting dan editing.</p>
            <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-bg-accent p-3 rounded">
                    <p className="font-bold text-sm">Clipboard</p>
                    <p className="text-xs">Cut, Copy, Paste, Format Painter</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <p className="font-bold text-sm">Font</p>
                    <p className="text-xs">Bold, Italic, Font size, Color</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <p className="font-bold text-sm">Alignment</p>
                    <p className="text-xs">Align text, Merge cells, Wrap text</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <p className="font-bold text-sm">Number</p>
                    <p className="text-xs">Format angka, Currency, Percentage</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <p className="font-bold text-sm">Styles</p>
                    <p className="text-xs">Cell styles, Format as Table</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <p className="font-bold text-sm">Cells</p>
                    <p className="text-xs">Insert, Delete, Format cells</p>
                </div>
            </div>
        </div>
    },
    {
        id: 9,
        type: 'content',
        title: 'Ribbon Tabs - Lainnya',
        content: <div className="space-y-4">
            <p>Tab-tab lain yang penting di Ribbon:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>📊 <strong>Insert:</strong> Menambahkan tabel, chart, gambar, shapes, PivotTable</li>
                <li>📄 <strong>Page Layout:</strong> Mengatur margin, orientation, print area, themes</li>
                <li>🧮 <strong>Formulas:</strong> Insert function, formula auditing, name manager</li>
                <li>📋 <strong>Data:</strong> Sort, filter, remove duplicates, data validation</li>
                <li>👁️ <strong>View:</strong> Zoom, freeze panes, gridlines, window splitting</li>
            </ul>
            <TipBox variant="success">
                Tab ribbon akan berubah secara kontekstual! Misalnya saat select chart, akan muncul "Chart Tools" tab.
            </TipBox>
        </div>
    },
    {
        id: 10,
        type: 'content',
        title: 'Worksheet Area & Sheet Tabs',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">📊 Worksheet Area</h3>
            <p>Area utama dengan grid cells tempat kamu bekerja dengan data.</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Columns:</strong> Diidentifikasi dengan huruf (A, B, C...)</li>
                <li><strong>Rows:</strong> Diidentifikasi dengan angka (1, 2, 3...)</li>
                <li><strong>Cells:</strong> Persilangan column dan row (A1, B5, C10)</li>
            </ul>

            <h3 className="font-bold text-lg mt-4">📑 Sheet Tabs</h3>
            <p>Di bagian bawah, tempat navigasi antar worksheet dalam satu workbook:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Default: Sheet1, Sheet2, Sheet3</li>
                <li>Double-click untuk rename</li>
                <li>Right-click untuk insert, delete, atau ubah warna tab</li>
            </ul>
        </div>
    },
    {
        id: 11,
        type: 'content',
        title: 'Navigasi Dasar',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">⌨️ Keyboard Shortcuts Penting</h3>
            <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-bg-accent p-3 rounded">
                    <CodeBlock code="Ctrl + Home" />
                    <p className="text-sm mt-1">Ke cell A1</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <CodeBlock code="Ctrl + End" />
                    <p className="text-sm mt-1">Ke cell terakhir yang ada data</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <CodeBlock code="Ctrl + Arrow" />
                    <p className="text-sm mt-1">Loncat ke ujung data</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <CodeBlock code="Ctrl + Space" />
                    <p className="text-sm mt-1">Select kolom</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <CodeBlock code="Shift + Space" />
                    <p className="text-sm mt-1">Select baris</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <CodeBlock code="Ctrl + A" />
                    <p className="text-sm mt-1">Select semua</p>
                </div>
            </div>
        </div>
    },
    {
        id: 12,
        type: 'content',
        title: 'Selection & Navigation',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">📌 Cara Select Data</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Single cell:</strong> Klik pada cell</li>
                <li><strong>Range:</strong> Klik & drag atau Shift + Arrow</li>
                <li><strong>Multiple ranges:</strong> Ctrl + Klik</li>
                <li><strong>Entire row/column:</strong> Klik pada header row/column</li>
            </ul>
            <TipBox variant="info">
                Range notation: A1:D10 berarti dari cell A1 sampai D10
            </TipBox>
        </div>
    },
    {
        id: 13,
        type: 'content',
        title: 'Shortcuts Copy-Paste',
        content: <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <h4 className="font-bold">Basic Operations:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-sm mt-2">
                        <li><CodeBlock code="Ctrl + C" /> Copy</li>
                        <li><CodeBlock code="Ctrl + X" /> Cut</li>
                        <li><CodeBlock code="Ctrl + V" /> Paste</li>
                        <li><CodeBlock code="Ctrl + Z" /> Undo</li>
                        <li><CodeBlock code="Ctrl + Y" /> Redo</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold">Special:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-sm mt-2">
                        <li><CodeBlock code="Ctrl + D" /> Fill down</li>
                        <li><CodeBlock code="Ctrl + R" /> Fill right</li>
                        <li><CodeBlock code="Ctrl + +" /> Insert cell/row/column</li>
                        <li><CodeBlock code="Ctrl + -" /> Delete cell/row/column</li>
                    </ul>
                </div>
            </div>
        </div>
    },
    {
        id: 14,
        type: 'tip',
        title: 'Formula Bar',
        content: <div className="space-y-3">
            <p>Formula Bar adalah tempat di atas worksheet yang menampilkan:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Isi dari cell yang sedang dipilih</li>
                <li>Formula (kalau ada)</li>
                <li>Tempat edit data tanpa double-click cell</li>
            </ul>
            <TipBox variant="tip">
                Tekan F2 untuk edit cell secara langsung di dalam cell!
            </TipBox>
        </div>
    },
    {
        id: 15,
        type: 'content',
        title: 'Formula Bar',
        content: <div className="space-y-3">
            <img src={FormulaBar} className='w-full object-contain' alt="Formula Bar" />
        </div>
    },
    {
        id: 16,
        type: 'content',
        title: 'AutoFill & Smart Features',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">🎯 AutoFill</h3>
            <p>Drag handle kecil di pojok kanan bawah cell untuk:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copy data ke cell di bawah/samping</li>
                <li>Auto-complete series (1, 2, 3... atau Jan, Feb, Mar...)</li>
                <li>Copy formula dengan referensi yang otomatis adjust</li>
            </ul>
            <TipBox variant="success">
                Excel pintar! Ketik "Monday" lalu drag → otomatis jadi Tuesday, Wednesday...
            </TipBox>
        </div>
    },
    {
        id: 17,
        type: 'content',
        title: 'Freeze Panes',
        content: <div className="space-y-4">
            <p>Gunakan Freeze Panes untuk membuat header tetap terlihat saat scroll:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Pilih cell DI BAWAH row yang mau di-freeze</li>
                <li>View Tab → Freeze Panes → Freeze Panes</li>
                <li>Sekarang row di atasnya akan tetap terlihat!</li>
            </ol>
            <TipBox variant="info">
                Super berguna untuk dataset besar dengan header yang panjang!
            </TipBox>
        </div>
    },
    {
        id: 18,
        type: 'content',
        title: 'Save & File Formats',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">💾 Menyimpan File</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li><CodeBlock code="Ctrl + S" /> Save (simpan)</li>
                <li><strong>.xlsx:</strong> Format Excel standard (with formulas)</li>
                <li><strong>.csv:</strong> Plain text, no formatting (for import/export)</li>
                <li><strong>.xls:</strong> Format lama (Excel 2003)</li>
            </ul>
            <TipBox variant="warning">
                Selalu save berkala! Ctrl+S adalah teman terbaik Anda!
            </TipBox>
        </div>
    },
    {
        id: 19,
        type: 'tip',
        title: 'Tips Produktivitas',
        content: <div className="space-y-3">
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>🎯 Pelajari dan hapal shortcuts—10x lebih cepat dari mouse!</li>
                <li>📝 Gunakan Ctrl+F untuk Find dan Ctrl+H untuk Find & Replace</li>
                <li>🔍 Zoom in/out dengan Ctrl + Mouse Wheel</li>
                <li>📌 Rename sheet dengan double-click pada tab name</li>
                <li>🎨 Gunakan color coding untuk organize sheets</li>
            </ul>
        </div>
    },
    {
        id: 20,
        type: 'transition',
        title: 'Selesai! 🎉',
        content: <div className="text-center space-y-4">
            <p className="text-lg">Selamat! Anda sudah mengenal dasar-dasar Excel interface!</p>
            <div className="bg-duo-green/10 p-6 rounded-lg">
                <p className="font-bold text-xl mb-2">Yang sudah dipelajari:</p>
                <ul className="text-left list-disc list-inside space-y-1 ml-4">
                    <li>Komponen Excel (workbook, worksheet, cells)</li>
                    <li>Ribbon dan tabs</li>
                    <li>Keyboard shortcuts penting</li>
                    <li>Navigasi dan selection</li>
                    <li>AutoFill dan freeze panes</li>
                </ul>
            </div>
            <TipBox variant="success">
                Praktik adalah kunci! Semakin sering pakai Excel, semakin cepat terbiasa. 💪
            </TipBox>
        </div>
    }
]
