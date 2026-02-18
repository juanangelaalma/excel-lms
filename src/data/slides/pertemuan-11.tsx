import { Slide } from '@/types'
import { TipBox } from '@/components/lesson/TipBox'
import { CodeBlock } from '@/components/lesson/CodeBlock'

export const pertemuan11Slides: Slide[] = [
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 11',
        content: <div>
            <h2 className="text-4xl font-bold mb-4">SUMIF, COUNTIF, AVERAGEIF</h2>
            <p className="text-xl">Agregasi bersyarat - Menjumlah, menghitung, rata-rata dengan kriteria 📊</p>
        </div>
    },
    {
        id: 2,
        type: 'content',
        title: 'Mengapa Conditional Functions Penting?',
        content: <div className="space-y-4">
            <p>Sangat berguna untuk analisis data dengan kriteria:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>💰 Total penjualan untuk produk tertentu</li>
                <li>📊 Jumlah karyawan per departemen</li>
                <li>📈 Rata-rata nilai siswa yang lulus</li>
                <li>🎯 Analisis per kategori, region, atau periode</li>
            </ul>
            <TipBox type="success">
                Lebih powerful dan fleksibel dibanding filter manual!
            </TipBox>
        </div>
    },
    {
        id: 3,
        type: 'example',
        title: 'SUMIF Function',
        content: <div className="space-y-4">
            <p>Menjumlahkan data yang memenuhi kriteria tertentu:</p>
            <CodeBlock code="=SUMIF(range, criteria, [sum_range])" />
            <p>Contoh: Total penjualan produk "Laptop"</p>
            <CodeBlock code='=SUMIF(A2:A10, "Laptop", C2:C10)' />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="text-sm"><strong>A2:A10</strong> = range untuk cek kriteria (Produk)</p>
                <p className="text-sm"><strong>"Laptop"</strong> = kriteria yang dicari</p>
                <p className="text-sm"><strong>C2:C10</strong> = range yang dijumlahkan (Harga)</p>
            </div>
        </div>
    },
    {
        id: 4,
        type: 'example',
        title: 'SUMIF - Berbagai Kriteria',
        content: <div className="space-y-4">
            <p>Kriteria dengan operator:</p>
            <CodeBlock code='=SUMIF(B2:B10, ">100000", C2:C10)  // Lebih dari 100k' />
            <CodeBlock code='=SUMIF(B2:B10, ">=75", C2:C10)      // Lebih dari sama dengan 75' />
            <CodeBlock code='=SUMIF(B2:B10, "<>"&"Jakarta", C2:C10) // Bukan Jakarta' />
            <TipBox type="tip">
                Untuk operator, gunakan quotes: ">&100000". Untuk reference cell: "&gt;"&A1
            </TipBox>
        </div>
    },
    {
        id: 5,
        type: 'example',
        title: 'COUNTIF Function',
        content: <div className="space-y-4">
            <p>Menghitung berapa banyak cell yang memenuhi kriteria:</p>
            <CodeBlock code="=COUNTIF(range, criteria)" />
            <p>Contoh: Berapa siswa yang dapat nilai A?</p>
            <CodeBlock code='=COUNTIF(B2:B20, "A")' />
            <p className="mt-4">Berapa produk dengan harga &gt; 1 juta?</p>
            <CodeBlock code='=COUNTIF(C2:C50, ">1000000")' />
        </div>
    },
    {
        id: 6,
        type: 'example',
        title: 'AVERAGEIF Function',
        content: <div className="space-y-4">
            <p>Menghitung rata-rata data yang memenuhi kriteria:</p>
            <CodeBlock code="=AVERAGEIF(range, criteria, [average_range])" />
            <p>Contoh: Rata-rata nilai siswa yang lulus (≥75)</p>
            <CodeBlock code='=AVERAGEIF(B2:B20, ">=75")' />
            <p className="mt-4">Rata-rata penjualan di region "Jakarta":</p>
            <CodeBlock code='=AVERAGEIF(A2:A50, "Jakarta", C2:C50)' />
        </div>
    },
    {
        id: 7,
        type: 'example',
        title: 'Wildcard dalam Criteria',
        content: <div className="space-y-4">
            <p>Gunakan wildcard untuk pencocokan sebagian:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                <li><strong>*</strong> = karakter apapun (banyak)</li>
                <li><strong>?</strong> = satu karakter apapun</li>
            </ul>
            <CodeBlock code='=COUNTIF(A2:A20, "Jkt*")     // Jkt, Jakarta, Jkt-Pusat' />
            <CodeBlock code='=SUMIF(A2:A20, "*Phone*", B2:B20) // iPhone, Smartphone' />
            <CodeBlock code='=COUNTIF(A2:A20, "A?")      // A1, A2, AB, dll' />
        </div>
    },
    {
        id: 8,
        type: 'example',
        title: 'SUMIFS - Multiple Criteria',
        content: <div className="space-y-4">
            <p>Menjumlahkan dengan BANYAK kriteria (AND logic):</p>
            <CodeBlock code="=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2, ...)" />
            <p>Contoh: Total penjualan Laptop di Jakarta</p>
            <CodeBlock code='=SUMIFS(D2:D50, A2:A50, "Laptop", B2:B50, "Jakarta")' />
            <TipBox type="info">
                SUMIFS berbeda urutan parameter! Sum_range di awal.
            </TipBox>
        </div>
    },
    {
        id: 9,
        type: 'example',
        title: 'COUNTIFS & AVERAGEIFS',
        content: <div className="space-y-4">
            <p>Sama seperti SUMIFS, tapi untuk COUNT dan AVERAGE:</p>
            <CodeBlock code='=COUNTIFS(A2:A50, "Laptop", B2:B50, "Jakarta")' />
            <p className="text-sm text-text-secondary">Berapa banyak penjualan Laptop di Jakarta?</p>
            <CodeBlock code='=AVERAGEIFS(D2:D50, A2:A50, "Laptop", C2:C50, ">5")' />
            <p className="text-sm text-text-secondary">Rata-rata harga Laptop dengan qty &gt; 5</p>
        </div>
    },
    {
        id: 10,
        type: 'example',
        title: 'Kombinasi dengan Cell Reference',
        content: <div className="space-y-4">
            <p>Gunakan cell reference untuk criteria yang dinamis:</p>
            <CodeBlock code='=SUMIF(A2:A50, E2, C2:C50)' />
            <p className="text-sm">E2 berisi kriteria yang bisa diubah user</p>
            <CodeBlock code='=SUMIFS(D2:D50, A2:A50, F2, B2:B50, G2)' />
            <p className="text-sm">F2 dan G2 sebagai filter dropdown</p>
            <TipBox type="tip">
                Bisa dikombinasikan dengan Data Validation untuk dashboard interaktif!
            </TipBox>
        </div>
    },
    {
        id: 11,
        type: 'tip',
        title: 'Perbandingan SUMIF vs SUMIFS',
        content: <div className="space-y-3">
            <div className="bg-bg-accent p-4 rounded-lg">
                <p className="font-semibold mb-2">SUMIF (Satu Kriteria):</p>
                <CodeBlock code="=SUMIF(criteria_range, criteria, sum_range)" />
            </div>
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="font-semibold mb-2">SUMIFS (Banyak Kriteria):</p>
                <CodeBlock code="=SUMIFS(sum_range, criteria_range1, criteria1, range2, criteria2, ...)" />
            </div>
            <TipBox type="warning">
                Perhatikan urutan parameter berbeda!
            </TipBox>
        </div>
    },
    {
        id: 12,
        type: 'tip',
        title: 'Contoh Penggunaan Umum',
        content: <div className="space-y-3">
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>📊 Laporan penjualan per region/produk</li>
                <li>💰 Pelacakan anggaran per departemen</li>
                <li>🎓 Analisis kinerja siswa</li>
                <li>📦 Manajemen inventori per kategori</li>
                <li>👥 Metrik HR (hitung karyawan per divisi)</li>
                <li>📈 Dashboard KPI dengan filter</li>
            </ul>
        </div>
    },
    {
        id: 13,
        type: 'transition',
        title: 'Selesai! 🎉',
        content: <div className="text-center space-y-4">
            <p className="text-lg">Luar biasa! Anda sudah menguasai Conditional Aggregation!</p>
            <div className="bg-duo-green/10 p-6 rounded-lg">
                <p className="font-bold text-xl mb-2">Yang sudah dipelajari:</p>
                <ul className="text-left list-disc list-inside space-y-1 ml-4">
                    <li>SUMIF untuk menjumlahkan dengan kriteria</li>
                    <li>COUNTIF untuk menghitung dengan kriteria</li>
                    <li>AVERAGEIF untuk rata-rata dengan kriteria</li>
                    <li>Wildcard (*  dan ?) untuk partial matching</li>
                    <li>SUMIFS/COUNTIFS/AVERAGEIFS untuk multiple criteria</li>
                    <li>Kombinasi dengan cell reference untuk filter dinamis</li>
                </ul>
            </div>
            <TipBox type="success">
                Mari praktik di simulator! 🚀
            </TipBox>
        </div>
    }
]
