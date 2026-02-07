import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
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

    const currentTask = tasks?.[currentTaskIndex]
    const {
        setCellValue,
        getCellValue,
        getCellFormula,
        getAllCellValues
    } = useSpreadsheet(currentTask?.initialData || [])

    const gridData = getAllCellValues()

    // Update formula bar when cell selection changes
    useEffect(() => {
        if (selectedCell) {
            const formula = getCellFormula(selectedCell.row, selectedCell.col)
            const value = getCellValue(selectedCell.row, selectedCell.col)
            setFormulaValue(formula || String(value || ''))
        }
    }, [selectedCell])

    const handleCellSelect = (row: number, col: number) => {
        setSelectedCell({ row, col })
    }

    const handleCellEdit = (row: number, col: number, value: string) => {
        setCellValue(row, col, value)
        setFeedback(null)
    }

    const handleFormulaSubmit = () => {
        if (selectedCell && formulaValue) {
            setCellValue(selectedCell.row, selectedCell.col, formulaValue)
            setFormulaValue('')
            setFeedback(null)
        }
    }

    const handleCheckAnswer = () => {
        if (!currentTask) return

        const { targetCell, expectedResult, acceptedFormulas } = currentTask
        const cellValue = getCellValue(targetCell.row, targetCell.col)
        const cellFormula = getCellFormula(targetCell.row, targetCell.col)

        // Check by value
        const valueMatch = cellValue === expectedResult

        // Check by formula (if specified)
        let formulaMatch = !acceptedFormulas
        if (acceptedFormulas && cellFormula) {
            const normalizedFormula = cellFormula.toUpperCase().replace(/\s/g, '')
            formulaMatch = acceptedFormulas.some(
                formula => formula.toUpperCase().replace(/\s/g, '') === normalizedFormula
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
            setCurrentTaskIndex(currentTaskIndex + 1)
            setFeedback(null)
            setShowHint(false)
            setSelectedCell(null)
        }
    }

    const handleComplete = () => {
        // Navigate to quiz
        navigate(`/quiz/${pertemuanId}`)
    }

    if (!pertemuan) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="container py-16 text-center">
                    <h1 className="text-3xl font-bold mb-4">Pertemuan not found</h1>
                    <p className="text-text-secondary">Invalid pertemuan ID: {id}</p>
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
                        No simulator tasks available for this pertemuan yet.
                    </p>
                    <button
                        onClick={() => navigate(`/quiz/${pertemuanId}`)}
                        className="bg-duo-green text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        Skip to Quiz
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
                        🎮 Excel Simulator - {pertemuan.title}
                    </h1>
                    <p className="text-text-secondary">
                        Practice your skills with hands-on tasks!
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
                            hints={currentTask.hints}
                            feedback={feedback}
                            showHint={showHint}
                            onToggleHint={() => setShowHint(!showHint)}
                            onCheck={handleCheckAnswer}
                            onNext={handleNextTask}
                            onComplete={handleComplete}
                        />
                    </div>

                    {/* Right: Spreadsheet */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 overflow-hidden">
                            <FormulaBar
                                selectedCell={selectedCell}
                                value={formulaValue}
                                onChange={setFormulaValue}
                                onSubmit={handleFormulaSubmit}
                            />
                            <div className="p-4">
                                <SpreadsheetGrid
                                    data={gridData}
                                    selectedCell={selectedCell}
                                    onCellSelect={handleCellSelect}
                                    onCellEdit={handleCellEdit}
                                    getCellFormula={getCellFormula}
                                />
                            </div>
                        </div>

                        <div className="mt-4 text-sm text-text-secondary bg-white p-4 rounded-lg border">
                            <p className="font-semibold mb-2">💡 Tips:</p>
                            <ul className="space-y-1">
                                <li>• Click a cell to select it</li>
                                <li>• Double-click to edit directly</li>
                                <li>• Use the formula bar to enter formulas</li>
                                <li>• Press Enter to confirm, Escape to cancel</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <MobileNav />
        </div>
    )
}
