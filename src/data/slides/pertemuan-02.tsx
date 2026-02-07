import { Slide } from '@/types'
import { TipBox } from '@/components/lesson/TipBox'
import { CodeBlock } from '@/components/lesson/CodeBlock'

export const pertemuan02Slides: Slide[] = [
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 2',
        content: <div>
            <h2 className="text-4xl font-bold mb-4">Data Entry & Formatting</h2>
            <p className="text-xl">Input data, formatting cells, dan membuat tabel profesional 📊</p>
        </div>
    },
    {
        id: 2,
        type: 'content',
        title: 'Tipe Data di Excel',
        content: <div className="space-y-4">
            <p>Excel mengenali beberapa tipe data:</p>
            <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-bg-accent p-3 rounded">
                    <h4 className="font-bold">🔢 Number</h4>
                    <p className="text-sm">123, 45.67, -100</p>
                    <p className="text-xs text-text-secondary">Bisa dipakai untuk kalkulasi</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <h4 className="font-bold">✏️ Text</h4>
                    <p className="text-sm">"Nama", "Jakarta"</p>
                    <p className="text-xs text-text-secondary">Tidak bisa dikalkulasi</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <h4 className="font-bold">📅 Date</h4>
                    <p className="text-sm">01/15/2024</p>
                    <p className="text-xs text-text-secondary">Bisa dihitung selisihnya</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <h4 className="font-bold">⏰ Time</h4>
                    <p className="text-sm">14:30:00</p>
                    <p className="text-xs text-text-secondary">Format jam menit detik</p>
                </div>
            </div>
            <TipBox type="tip">
                Jika angka dimulai dengan ' (petik), Excel akan treat sebagai text!
            </TipBox>
        </div>
    },
    {
        id: 3,
        type: 'content',
        title: 'Number Formatting',
        content: <div className="space-y-4">
            <p>Format angka untuk tampilan yang lebih profesional:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>General:</strong> 1234.5</li>
                <li><strong>Number:</strong> 1,234.50 (dengan decimals & thousands separator)</li>
                <li><strong>Currency:</strong> Rp 1,234.50</li>
                <li><strong>Percentage:</strong> 75% (angka 0.75 ditampilkan sebagai 75%)</li>
                <li><strong>Accounting:</strong> Rp 1,234.50 (aligned dengan simbol currency)</li>
            </ul>
            <TipBox type="info">
                Akses via Home Tab → Number group atau Ctrl + 1
            </TipBox>
        </div>
    },
    {
        id: 4,
        type: 'content',
        title: 'Date Formatting',
        content: <div className="space-y-4">
            <p>Format tanggal bisa disesuaikan:</p>
            <div className="space-y-2 ml-4">
                <div className="flex gap-3">
                    <span className="font-mono bg-bg-accent px-3 py-1 rounded">15/01/2024</span>
                    <span className="text-text-secondary">→ DD/MM/YYYY</span>
                </div>
                <div className="flex gap-3">
                    <span className="font-mono bg-bg-accent px-3 py-1 rounded">Jan 15, 2024</span>
                    <span className="text-text-secondary">→ MMM DD, YYYY</span>
                </div>
                <div className="flex gap-3">
                    <span className="font-mono bg-bg-accent px-3 py-1 rounded">Monday, January 15, 2024</span>
                    <span className="text-text-secondary">→ Long format</span>
                </div>
            </div>
            <TipBox type="warning">
                Excel menyimpan tanggal sebagai angka! 1 = 1 Januari 1900
            </TipBox>
        </div>
    },
    {
        id: 5,
        type: 'content',
        title: 'Cell Alignment',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">📐 Horizontal Alignment</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Left (default untuk text)</li>
                <li>Center</li>
                <li>Right (default untuk number)</li>
                <li>Justify</li>
            </ul>
            <h3 className="font-bold text-lg mt-3">↕️ Vertical Alignment</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Top</li>
                <li>Middle</li>
                <li>Bottom</li>
            </ul>
            <TipBox type="tip">
                Gunakan "Wrap Text" untuk membuat text multi-line dalam 1 cell!
            </TipBox>
        </div>
    },
    {
        id: 6,
        type: 'content',
        title: 'Font Formatting',
        content: <div className="space-y-4">
            <p>Buat data Anda lebih readable:</p>
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <h4 className="font-bold">Text Style:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-sm mt-2">
                        <li>Bold: <CodeBlock code="Ctrl + B" /></li>
                        <li>Italic: <CodeBlock code="Ctrl + I" /></li>
                        <li>Underline: <CodeBlock code="Ctrl + U" /></li>
                        <li>Strikethrough</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold">Text Properties:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-sm mt-2">
                        <li>Font type (Arial, Calibri...)</li>
                        <li>Font size (8, 10, 12, 14...)</li>
                        <li>Font color</li>
                        <li>Background color</li>
                    </ul>
                </div>
            </div>
        </div>
    },
    {
        id: 7,
        type: 'content',
        title: 'Borders & Lines',
        content: <div className="space-y-4">
            <p>Tambahkan borders untuk memisahkan data:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>All Borders:</strong> Kotak di sekeliling semua cell</li>
                <li><strong>Outline:</strong> Hanya border luar dari selection</li>
                <li><strong>Thick Outside Border:</strong> Border tebal di luar</li>
                <li><strong>Top/Bottom Border:</strong> Garis horizontal saja</li>
                <li><strong>Left/Right Border:</strong> Garis vertikal saja</li>
            </ul>
            <TipBox type="tip">
                Akses cepat: Alt + H → B untuk border options
            </TipBox>
        </div>
    },
    {
        id: 8,
        type: 'content',
        title: 'Cell Colors',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">🎨 Fill Color vs Font Color</h3>
            <div className="space-y-3 mt-3">
                <div className="bg-yellow-100 p-3 rounded border-2 border-yellow-300">
                    <p className="font-bold">Fill Color (Background)</p>
                    <p className="text-sm">Warna latar belakang cell</p>
                </div>
                <div className="bg-bg-accent p-3 rounded">
                    <p className="font-bold text-duo-blue">Font Color</p>
                    <p className="text-sm">Warna text/numbers</p>
                </div>
            </div>
            <TipBox type="info">
                Gunakan color coding untuk kategorisasi data (hijau = approved, merah = rejected)
            </TipBox>
        </div>
    },
    {
        id: 9,
        type: 'content',
        title: 'Format Painter',
        content: <div className="space-y-4">
            <p>Copy formatting dari satu cell ke cell lain:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Select cell dengan formatting yang mau dicopy</li>
                <li>Klik Format Painter (🖌️ icon di Home tab)</li>
                <li>Klik atau drag pada cell target</li>
            </ol>
            <TipBox type="tip">
                Double-click Format Painter untuk apply ke multiple cells!
            </TipBox>
        </div>
    },
    {
        id: 10,
        type: 'content',
        title: 'Excel Tables',
        content: <div className="space-y-4">
            <p>Convert range menjadi Table untuk fitur extra:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Select data range</li>
                <li>Home Tab → Format as Table</li>
                <li>Pilih table style</li>
                <li>Checklist "My table has headers"</li>
            </ol>
            <h4 className="font-bold mt-3">✨ Keuntungan Table:</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Auto filter buttons</li>
                <li>Structured references dalam formula</li>
                <li>Auto-expand saat add data baru</li>
                <li>Built-in total row</li>
            </ul>
        </div>
    },
    {
        id: 11,
        type: 'content',
        title: 'Column Width & Row Height',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">📏 Resize Columns/Rows</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Manual:</strong> Drag border antara column/row headers</li>
                <li><strong>Auto-fit:</strong> Double-click border untuk auto-size</li>
                <li><strong>Set specific size:</strong> Right-click header → Column Width / Row Height</li>
            </ul>
            <TipBox type="tip">
                Select semua cells (Ctrl+A) lalu auto-fit untuk resize semua columns sekaligus!
            </TipBox>
        </div>
    },
    {
        id: 12,
        type: 'content',
        title: 'Merge Cells',
        content: <div className="space-y-4">
            <p>Gabungkan beberapa cells menjadi satu:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Select cells yang mau digabung</li>
                <li>Home Tab → Merge & Center</li>
            </ol>
            <h4 className="font-bold mt-3">Options:</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li><strong>Merge & Center:</strong> Gabung + center</li>
                <li><strong>Merge Across:</strong> Gabung horizontal saja</li>
                <li><strong>Merge Cells:</strong> Gabung tanpa center</li>
                <li><strong>Unmerge:</strong> Pisahkan kembali</li>
            </ul>
            <TipBox type="warning">
                Merge cells bisa bikin formula error! Pakai dengan hati-hati.
            </TipBox>
        </div>
    },
    {
        id: 13,
        type: 'transition',
        title: 'Selesai! 🎉',
        content: <div className="text-center space-y-4">
            <p className="text-lg">Excellent! Sekarang Anda bisa membuat tabel yang profesional!</p>
            <div className="bg-duo-green/10 p-6 rounded-lg">
                <p className="font-bold text-xl mb-2">Yang sudah dipelajari:</p>
                <ul className="text-left list-disc list-inside space-y-1 ml-4">
                    <li>Tipe data di Excel (Number, Text, Date, Time)</li>
                    <li>Number & date formatting</li>
                    <li>Alignment & font formatting</li>
                    <li>Borders & colors</li>
                    <li>Excel Tables</li>
                    <li>Merge cells & resize</li>
                </ul>
            </div>
            <TipBox type="success">
                Formatting yang baik = Data lebih mudah dibaca = Keputusan lebih cepat! 📊
            </TipBox>
        </div>
    }
]
