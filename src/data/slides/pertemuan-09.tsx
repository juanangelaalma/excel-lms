import { Slide } from '@/types'
import { TipBox } from '@/components/lesson/TipBox'
import { CodeBlock } from '@/components/lesson/CodeBlock'

export const pertemuan09Slides: Slide[] = [
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 9',
        content: <div>
            <h2 className="text-4xl font-bold mb-4">Date & Time Functions</h2>
            <p className="text-xl">Menguasai perhitungan tanggal dengan DATE, DATEDIF, EOMONTH 📅</p>
        </div>
    },
    {
        id: 2,
        type: 'content',
        title: 'Mengapa Date Functions Penting?',
        content: <div className="space-y-4">
            <p>Date functions sangat berguna untuk:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>📊 Menghitung umur karyawan atau kontrak</li>
                <li>⏰ Pemantauan deadline dan jadwal proyek</li>
                <li>💰 Menghitung bunga atau denda berdasarkan hari</li>
                <li>📈 Analisis data time series</li>
                <li>🗓️ Payroll dan sistem penggajian</li>
            </ul>
            <TipBox variant="info">
                Excel menyimpan tanggal sebagai angka! 1 = 1 Januari 1900
            </TipBox>
        </div>
    },
    {
        id: 3,
        type: 'content',
        title: 'Sistem Serial Date Excel',
        content: <div className="space-y-4">
            <p>Excel menggunakan sistem serial number untuk tanggal:</p>
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <ul className="text-sm space-y-2">
                    <li><strong>1</strong> = 1 Januari 1900</li>
                    <li><strong>44927</strong> = 1 Januari 2023</li>
                    <li><strong>45292</strong> = 1 Januari 2024</li>
                </ul>
            </div>
            <p className="text-sm text-text-secondary mt-3">Makanya kita bisa melakukan operasi matematika pada tanggal!</p>
            <CodeBlock code="=TODAY() + 7  // Tanggal 7 hari dari sekarang" />
        </div>
    },
    {
        id: 4,
        type: 'example',
        title: 'DATE Function',
        content: <div className="space-y-4">
            <p>Membuat tanggal dari komponen terpisah:</p>
            <CodeBlock code="=DATE(year, month, day)" />
            <p>Contoh:</p>
            <CodeBlock code="=DATE(2024, 12, 25)  // Hasil: 25-Dec-2024" />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="text-sm"><strong>Contoh penggunaan:</strong> Saat tahun, bulan, hari ada di kolom terpisah</p>
                <p className="text-sm mt-2">A1=2024, B1=8, C1=17</p>
                <p className="text-sm">Formula: =DATE(A1, B1, C1)</p>
            </div>
        </div>
    },
    {
        id: 5,
        type: 'example',
        title: 'TODAY() & NOW()',
        content: <div className="space-y-4">
            <p>Fungsi untuk mendapatkan tanggal/waktu saat ini:</p>
            <CodeBlock code="=TODAY()  // Tanggal hari ini" />
            <CodeBlock code="=NOW()    // Tanggal + waktu sekarang" />
            <TipBox variant="warning">
                Kedua fungsi ini UPDATE otomatis setiap file dibuka atau dihitung ulang!
            </TipBox>
        </div>
    },
    {
        id: 6,
        type: 'example',
        title: 'DATEDIF Function',
        content: <div className="space-y-4">
            <p>Menghitung selisih antara 2 tanggal:</p>
            <CodeBlock code='=DATEDIF(start_date, end_date, "unit")' />
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="font-semibold mb-2">Pilihan unit:</p>
                <ul className="text-sm space-y-1">
                    <li><strong>"Y"</strong> = Tahun</li>
                    <li><strong>"M"</strong> = Bulan</li>
                    <li><strong>"D"</strong> = Hari</li>
                    <li><strong>"YM"</strong> = Bulan (tanpa hitungan tahun)</li>
                    <li><strong>"MD"</strong> = Hari (tanpa hitungan bulan dan tahun)</li>
                </ul>
            </div>
        </div>
    },
    {
        id: 7,
        type: 'example',
        title: 'DATEDIF - Contoh Praktis',
        content: <div className="space-y-4">
            <p>Menghitung umur seseorang:</p>
            <CodeBlock code='=DATEDIF("1990-05-15", TODAY(), "Y") & " tahun"' />
            <p className="text-sm text-text-secondary">Hasil: "34 tahun"</p>
            <p className="mt-4">Menghitung lama kerja dalam format lengkap:</p>
            <CodeBlock code='=DATEDIF(A2, TODAY(), "Y") & " tahun " & DATEDIF(A2, TODAY(), "YM") & " bulan"' />
        </div>
    },
    {
        id: 8,
        type: 'example',
        title: 'EOMONTH Function',
        content: <div className="space-y-4">
            <p>Mendapatkan tanggal akhir bulan:</p>
            <CodeBlock code="=EOMONTH(start_date, months)" />
            <p>Contoh:</p>
            <CodeBlock code='=EOMONTH("2024-01-15", 0)  // 31-Jan-2024' />
            <CodeBlock code='=EOMONTH("2024-01-15", 1)  // 29-Feb-2024' />
            <CodeBlock code='=EOMONTH("2024-01-15", -1) // 31-Dec-2023' />
            <TipBox variant="tip">
                Gunakan months=0 untuk akhir bulan yang sama, +1 untuk bulan depan, -1 untuk bulan lalu
            </TipBox>
        </div>
    },
    {
        id: 9,
        type: 'example',
        title: 'EOMONTH - Contoh Penggunaan',
        content: <div className="space-y-4">
            <p className="font-semibold">Praktis untuk:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Menghitung deadline pembayaran (akhir bulan)</li>
                <li>Laporan bulanan (periode 1 - akhir bulan)</li>
                <li>Kontrak yang berakhir di akhir bulan</li>
            </ul>
            <p className="mt-4">Mendapatkan tanggal awal bulan:</p>
            <CodeBlock code="=EOMONTH(A1, -1) + 1" />
            <p className="text-sm text-text-secondary">Akhir bulan lalu + 1 hari = awal bulan ini!</p>
        </div>
    },
    {
        id: 10,
        type: 'example',
        title: 'NETWORKDAYS Function',
        content: <div className="space-y-4">
            <p>Menghitung hari kerja (tidak termasuk akhir pekan & hari libur):</p>
            <CodeBlock code="=NETWORKDAYS(start_date, end_date, [holidays])" />
            <p>Contoh:</p>
            <CodeBlock code='=NETWORKDAYS("2024-01-01", "2024-01-31")' />
            <p className="text-sm text-text-secondary">Menghitung berapa hari kerja di Januari 2024</p>
            <TipBox variant="info">
                Akhir pekan = Sabtu & Minggu. Bisa tambahkan parameter holidays untuk tanggal libur!
            </TipBox>
        </div>
    },
    {
        id: 11,
        type: 'example',
        title: 'NETWORKDAYS dengan Holidays',
        content: <div className="space-y-4">
            <p>Menyertakan daftar hari libur nasional:</p>
            <CodeBlock code="=NETWORKDAYS(A2, B2, H2:H10)" />
            <p className="text-sm text-text-secondary">H2:H10 berisi daftar tanggal libur nasional</p>
            <div className="bg-bg-accent p-4 rounded-lg mt-3">
                <p className="text-sm"><strong>Berguna untuk:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                    <li>• Estimasi waktu penyelesaian proyek</li>
                    <li>• Menghitung tunjangan karyawan</li>
                    <li>• Perhitungan SLA (Service Level Agreement)</li>
                </ul>
            </div>
        </div>
    },
    {
        id: 12,
        type: 'example',
        title: 'Kombinasi Date Functions',
        content: <div className="space-y-4">
            <p>Menghitung usia dalam format lengkap:</p>
            <CodeBlock code='=DATEDIF(A1, TODAY(), "Y") & " tahun, " & DATEDIF(A1, TODAY(), "YM") & " bulan, " & DATEDIF(A1, TODAY(), "MD") & " hari"' />
            <p className="mt-4">Deadline 30 hari kerja dari sekarang:</p>
            <CodeBlock code="=WORKDAY(TODAY(), 30, holidays)" />
        </div>
    },
    {
        id: 13,
        type: 'tip',
        title: 'Format Tanggal Umum',
        content: <div className="space-y-3">
            <p className="font-semibold">Format tanggal yang sering digunakan:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>dd/mm/yyyy</strong> - 25/12/2024</li>
                <li><strong>dd-mmm-yyyy</strong> - 25-Dec-2024</li>
                <li><strong>dddd, dd mmmm yyyy</strong> - Wednesday, 25 December 2024</li>
                <li><strong>mm/dd/yyyy</strong> - 12/25/2024 (US format)</li>
            </ul>
            <TipBox variant="tip">
                Gunakan Ctrl+1 → Number → Custom untuk format kustom!
            </TipBox>
        </div>
    },
    {
        id: 14,
        type: 'transition',
        title: 'Selesai! 🎉',
        content: <div className="text-center space-y-4">
            <p className="text-lg">Luar biasa! Anda sudah menguasai Date & Time Functions!</p>
            <div className="bg-duo-green/10 p-6 rounded-lg">
                <p className="font-bold text-xl mb-2">Yang sudah dipelajari:</p>
                <ul className="text-left list-disc list-inside space-y-1 ml-4">
                    <li>Sistem serial date Excel</li>
                    <li>DATE() untuk membuat tanggal</li>
                    <li>TODAY() & NOW() untuk tanggal/waktu saat ini</li>
                    <li>DATEDIF() untuk menghitung selisih tanggal</li>
                    <li>EOMONTH() untuk akhir bulan</li>
                    <li>NETWORKDAYS() untuk hari kerja</li>
                    <li>Kombinasi date functions untuk kasus penggunaan kompleks</li>
                </ul>
            </div>
            <TipBox variant="success">
                Sekarang waktunya praktik! Mari latihan di simulator 🚀
            </TipBox>
        </div>
    }
]
