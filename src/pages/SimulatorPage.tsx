import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import Header from '@/components/layout/Header'
import MobileNav from '@/components/layout/MobileNav'
import { SpreadsheetGrid } from '@/components/simulator/SpreadsheetGrid'
import { FormulaBar } from '@/components/simulator/FormulaBar'
import { TaskPanel } from '@/components/simulator/TaskPanel'
import { useSpreadsheet } from '@/hooks/useSpreadsheet'
import { useGame } from '@/contexts/GameContext'
import { getPertemuanById } from '@/data/curriculum'
import { pertemuan03Tasks } from '@/data/simulator/pertemuan-03-tasks'
import { pertemuan04Tasks } from '@/data/simulator/pertemuan-04-tasks'
import { SimulatorTask } from '@/data/simulator/pertemuan-03-tasks'

// Task registry - add more as you create them
const taskRegistry: Record<number, SimulatorTask[]> = {
    3: pertemuan03Tasks,
    4: pertemuan04Tasks,
    // Add more: 5: pertemuan05Tasks, etc.
}

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

export default function SimulatorPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addXP } = useGame()

    const pertemuanId = parseInt(id || '1')
    const pertemuan = getPertemuanById(pertemuanId)
    const tasks = taskRegistry[pertemuanId]

    const [currentTaskIndex, setCurrentTaskIndex] = useState(0)
    const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null)
    const [formulaValue, setFormulaValue] = useState('')
    const [feedback, setFeedback] = useState<'idle' | 'correct' | 'incorrect' | null>(null)
    const [showHint, setShowHint] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const currentTask = tasks?.[currentTaskIndex]

    const {
        version,
        setCellValue,
        getCellValue,
        getCellFormula,
        getAllCellValues,
    } = useSpreadsheet(currentTask?.initialData || [])

    // gridData recomputes whenever version bumps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const gridData = useMemo(() => getAllCellValues(), [version])

    // Target cell reference string (e.g. "B5")
    const targetCellRef = currentTask
        ? `${COLUMNS[currentTask.targetCell.col]}${currentTask.targetCell.row + 1}`
        : 'A1'

    // Sync formula bar when cell selection changes
    useEffect(() => {
        if (selectedCell) {
            const formula = getCellFormula(selectedCell.row, selectedCell.col)
            const value = getCellValue(selectedCell.row, selectedCell.col)
            setFormulaValue(formula || (value != null ? String(value) : ''))
        }
    }, [selectedCell]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleCellSelect = (row: number, col: number) => {
        setSelectedCell({ row, col })
    }

    const handleFormulaBarSync = (value: string) => {
        setFormulaValue(value)
    }

    const handleCellEdit = (row: number, col: number, value: string) => {
        setCellValue(row, col, value)
        setFeedback(null)
        // Update formula bar to reflect formula (if the value starts with =)
        setTimeout(() => {
            const formula = getCellFormula(row, col)
            setFormulaValue(formula || value)
        }, 0)
    }

    const handleFormulaSubmit = () => {
        if (selectedCell && formulaValue !== '') {
            setCellValue(selectedCell.row, selectedCell.col, formulaValue)
            setFeedback(null)
            // Done — version bump in setCellValue triggers grid re-render
        }
    }

    const handleCheckAnswer = () => {
        if (!currentTask) return

        const { targetCell, expectedResult, acceptedFormulas } = currentTask
        const cellValue = getCellValue(targetCell.row, targetCell.col)
        const cellFormula = getCellFormula(targetCell.row, targetCell.col)

        // Numeric tolerance check
        let valueMatch = false
        if (typeof expectedResult === 'number' && typeof cellValue === 'number') {
            valueMatch = Math.abs((cellValue as number) - expectedResult) < 0.001
        } else {
            valueMatch = String(cellValue) === String(expectedResult)
        }

        // Formula check
        let formulaMatch = !acceptedFormulas
        if (acceptedFormulas && cellFormula) {
            const normalized = cellFormula.toUpperCase().replace(/\s/g, '')
            formulaMatch = acceptedFormulas.some(
                f => f.toUpperCase().replace(/\s/g, '') === normalized
            )
        }

        if (valueMatch || formulaMatch) {
            setFeedback('correct')
            addXP(currentTask.xpReward)
        } else {
            setFeedback('incorrect')
        }
    }

    const handleNextTask = () => {
        if (currentTaskIndex < tasks.length - 1) {
            setIsTransitioning(true)
            setFeedback(null)
            setShowHint(false)
            setSelectedCell(null)
            setFormulaValue('')

            // Brief delay to show the loading state, then advance
            setTimeout(() => {
                setCurrentTaskIndex(prev => prev + 1)
                setIsTransitioning(false)
            }, 600)
        }
    }

    const handleComplete = () => {
        navigate(`/quiz/${pertemuanId}`)
    }

    if (!pertemuan) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="container py-16 text-center">
                    <h1 className="text-3xl font-bold mb-4">Pertemuan tidak ditemukan</h1>
                    <p className="text-text-secondary">ID pertemuan tidak valid: {id}</p>
                </div>
                <MobileNav />
            </div>
        )
    }

    if (!tasks) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="container py-16 text-center">
                    <h1 className="text-3xl font-bold mb-4">{pertemuan.title}</h1>
                    <p className="text-text-secondary mb-8">
                        Simulator belum tersedia untuk pertemuan ini.
                    </p>
                    <button
                        onClick={() => navigate(`/quiz/${pertemuanId}`)}
                        className="bg-duo-green text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        Langsung ke Quiz
                    </button>
                </div>
                <MobileNav />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-bg-secondary">
            <Header />

            <div className="container py-8 pb-24 md:pb-8">
                {/* Simulator Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-heading font-bold mb-2">
                        🎮 Excel Simulator — {pertemuan.title}
                    </h1>
                    <p className="text-text-secondary">
                        Latih kemampuan Anda dengan tugas langsung!
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left: Task Panel */}
                    <div className="lg:col-span-1">
                        <TaskPanel
                            taskNumber={currentTaskIndex + 1}
                            totalTasks={tasks.length}
                            title={currentTask.title}
                            description={currentTask.description}
                            targetCellRef={targetCellRef}
                            xpReward={currentTask.xpReward}
                            hints={currentTask.hints}
                            feedback={feedback}
                            showHint={showHint}
                            isTransitioning={isTransitioning}
                            onToggleHint={() => setShowHint(!showHint)}
                            onCheck={handleCheckAnswer}
                            onNext={handleNextTask}
                            onComplete={handleComplete}
                        />
                    </div>

                    {/* Right: Spreadsheet — key forces remount on task change */}
                    <div className="lg:col-span-2" key={currentTaskIndex}>
                        <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 overflow-hidden">
                            <FormulaBar
                                selectedCell={selectedCell}
                                value={formulaValue}
                                onChange={setFormulaValue}
                                onSubmit={handleFormulaSubmit}
                            />
                            <div className="p-4">
                                {isTransitioning ? (
                                    <div className="flex flex-col items-center justify-center py-16 gap-4">
                                        <div className="w-10 h-10 border-4 border-duo-green border-t-transparent rounded-full animate-spin" />
                                        <p className="text-text-secondary font-medium">Memuat soal berikutnya...</p>
                                    </div>
                                ) : (
                                    <SpreadsheetGrid
                                        data={gridData}
                                        selectedCell={selectedCell}
                                        targetCell={currentTask.targetCell}
                                        onCellSelect={handleCellSelect}
                                        onCellEdit={handleCellEdit}
                                        getCellFormula={getCellFormula}
                                        onFormulaBarSync={handleFormulaBarSync}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="mt-4 text-sm text-text-secondary bg-white p-4 rounded-lg border">
                            <p className="font-semibold mb-2">💡 Cara Menggunakan:</p>
                            <ul className="space-y-1">
                                <li>• <strong>Klik cell</strong> yang ditandai 🟡 untuk memilihnya</li>
                                <li>• Ketik formula di <strong>formula bar di atas</strong>, lalu tekan <kbd className="bg-gray-100 border px-1 rounded text-xs">Enter</kbd></li>
                                <li>• Atau <strong>double-klik cell</strong> untuk edit langsung di dalam cell</li>
                                <li>• Klik <strong>"Cek Jawaban"</strong> setelah mengisi formula</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <MobileNav />
        </div>
    )
}
