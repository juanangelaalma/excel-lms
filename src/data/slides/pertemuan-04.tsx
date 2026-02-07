// Pertemuan 4: Logical Functions (IF, AND, OR)
import { Slide } from '@/types'
import { TipBox } from '@/components/lesson/TipBox'
import { CodeBlock } from '@/components/lesson/CodeBlock'

export const pertemuan04Slides: Slide[] = [
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 4',
        content: <div>
            <h2 className="text-4xl font-bold mb-4">Logical Functions</h2>
            <p className="text-xl">IF, AND, OR, dan Nested IF untuk decision making 🧠</p>
        </div>
    },
    {
        id: 2,
        type: 'content',
        title: 'Apa itu Logical Function?',
        content: <div className="space-y-4">
            <p>Logical functions membantu Excel membuat keputusan berdasarkan kondisi:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>✅ Jika nilai &gt; 75, maka "Lulus"</li>
                <li>❌ Jika stok &lt; 10, maka "Reorder"</li>
                <li>🎯 Jika penjualan &gt; target AND kualitas bagus, maka "Bonus"</li>
            </ul>
            <TipBox variant="success">
                Logical functions = otomatisasi pengambilan keputusan!
            </TipBox>
        </div>
    },
    {
        id: 3,
        type: 'example',
        title: 'IF Function - Dasar',
        content: <div className="space-y-4">
            <h3 className="font-bold text-lg">Syntax:</h3>
            <CodeBlock code="=IF(logical_test, value_if_true, value_if_false)" />
            <p>Contoh:</p>
            <CodeBlock code='=IF(A1 >= 75, "Lulus", "Tidak Lulus")' />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="text-sm"><strong>Jika A1 = 80:</strong> → "Lulus"</p>
                <p className="text-sm"><strong>Jika A1 = 65:</strong> → "Tidak Lulus"</p>
            </div>
        </div>
    },
    {
        id: 4,
        type: 'example',
        title: 'IF dengan Angka',
        content: <div className="space-y-4">
            <p>IF bisa mengembalikan angka juga:</p>
            <CodeBlock code='=IF(B1 > 100000, B1 * 0.1, 0)' />
            <p className="text-sm text-text-secondary">Bonus 10% jika penjualan &gt; 100,000, kalau tidak dapat 0</p>
            <TipBox variant="tip">
                Pakai quotes ("...") untuk text, tanpa quotes untuk angka!
            </TipBox>
        </div>
    },
    {
        id: 5,
        type: 'example',
        title: 'Nested IF',
        content: <div className="space-y-4">
            <p>IF di dalam IF untuk multiple conditions:</p>
            <CodeBlock code='=IF(A1 >= 90, "A", IF(A1 >= 75, "B", IF(A1 >= 60, "C", "D")))' />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <ul className="text-sm space-y-1">
                    <li>≥ 90 → A</li>
                    <li>≥ 75 → B</li>
                    <li>≥ 60 → C</li>
                    <li>&lt; 60 → D</li>
                </ul>
            </div>
        </div>
    },
    {
        id: 6,
        type: 'content',
        title: 'AND Function',
        content: <div className="space-y-4">
            <p>AND mengembalikan TRUE hanya jika SEMUA kondisi TRUE:</p>
            <CodeBlock code="=AND(A1 > 75, B1 > 75)" />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="text-sm"><strong>A1=80, B1=80:</strong> → TRUE ✅</p>
                <p className="text-sm"><strong>A1=80, B1=60:</strong> → FALSE ❌</p>
                <p className="text-sm"><strong>A1=60, B1=60:</strong> → FALSE ❌</p>
            </div>
            <TipBox variant="info">
                SEMUA kondisi harus TRUE → hasil TRUE
            </TipBox>
        </div>
    },
    {
        id: 7,
        type: 'content',
        title: 'OR Function',
        content: <div className="space-y-4">
            <p>OR mengembalikan TRUE jika MINIMAL SATU kondisi TRUE:</p>
            <CodeBlock code="=OR(A1 > 75, B1 > 75)" />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="text-sm"><strong>A1=80, B1=60:</strong> → TRUE ✅</p>
                <p className="text-sm"><strong>A1=80, B1=80:</strong> → TRUE ✅</p>
                <p className="text-sm"><strong>A1=60, B1=60:</strong> → FALSE ❌</p>
            </div>
            <TipBox variant="info">
                SALAH SATU kondisi TRUE → hasil TRUE
            </TipBox>
        </div>
    },
    {
        id: 8,
        type: 'example',
        title: 'IF + AND Kombinasi',
        content: <div className="space-y-4">
            <p>Gunakan AND dalam IF untuk multiple criteria:</p>
            <CodeBlock code='=IF(AND(A1 >= 75, B1 = "Hadir"), "Lulus", "Tidak Lulus")' />
            <p className="text-sm text-text-secondary">Lulus hanya jika nilai ≥ 75 DAN kehadiran "Hadir"</p>
        </div>
    },
    {
        id: 9,
        type: 'example',
        title: 'IF +  OR Kombinasi',
        content: <div className="space-y-4">
            <p>Gunakan OR dalam IF untuk salah satu kondisi:</p>
            <CodeBlock code='=IF(OR(A1 = "VIP", B1 > 1000000), "Diskon 20%", "Diskon 5%")' />
            <p className="text-sm text-text-secondary">Diskon 20% jika VIP ATAU belanja &gt; 1 juta</p>
        </div>
    },
    {
        id: 10,
        type: 'content',
        title: 'IFERROR Function',
        content: <div className="space-y-4">
            <p>Handle error dengan IFERROR:</p>
            <CodeBlock code='=IFERROR(A1/B1, "Error: Tidak bisa bagi dengan 0")' />
            <p className="text-sm">Jika B1 = 0, akan muncul pesan error, bukan #DIV/0!</p>
            <TipBox variant="warning">
                Gunakan IFERROR untuk membuat spreadsheet lebih user-friendly!
            </TipBox>
        </div>
    },
    {
        id: 11,
        type: 'tip',
        title: 'Common Use Cases',
        content: <div className="space-y-3">
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>📝 Grading system (A, B, C, D, E)</li>
                <li>💰 Bonus calculation berdasarkan target</li>
                <li>📊 Status approval (Approved/Rejected/Pending)</li>
                <li>🎯 Discount tiers berdasarkan total belanja</li>
                <li>⚠️ Alert system (Low stock, overdue, etc)</li>
            </ul>
        </div>
    },
    {
        id: 12,
        type: 'transition',
        title: 'Selesai! 🎉',
        content: <div className="text-center space-y-4">
            <p className="text-lg">Great! Anda sudah menguasai Logical Functions!</p>
            <div className="bg-duo-green/10 p-6 rounded-lg">
                <p className="font-bold text-xl mb-2">Yang sudah dipelajari:</p>
                <ul className="text-left list-disc list-inside space-y-1 ml-4">
                    <li>IF function untuk decision making</li>
                    <li>Nested IF untuk multiple conditions</li>
                    <li>AND function (semua harus TRUE)</li>
                    <li>OR function (salah satu TRUE)</li>
                    <li>IF + AND/OR kombinasi</li>
                    <li>IFERROR untuk handle errors</li>
                </ul>
            </div>
            <TipBox variant="success">
                Sekarang Excel bisa membuat keputusan otomatis untuk Anda! 🧠
            </TipBox>
        </div>
    }
]
