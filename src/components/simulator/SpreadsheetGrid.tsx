import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SpreadsheetGridProps {
    data: (string | number | null)[][]
    selectedCell: { row: number; col: number } | null
    targetCell?: { row: number; col: number }
    onCellSelect: (row: number, col: number) => void
    onCellEdit: (row: number, col: number, value: string) => void
    getCellFormula?: (row: number, col: number) => string | null
    onFormulaBarSync?: (value: string) => void
}

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

export function SpreadsheetGrid({
    data,
    selectedCell,
    targetCell,
    onCellSelect,
    onCellEdit,
    getCellFormula,
    onFormulaBarSync,
}: SpreadsheetGridProps) {
    const [editingCell, setEditingCell] = useState<{ row: number; col: number } | null>(null)
    const [editValue, setEditValue] = useState('')

    const handleCellClick = (row: number, col: number) => {
        // If we were editing, commit first
        if (editingCell) {
            onCellEdit(editingCell.row, editingCell.col, editValue)
            setEditingCell(null)
            setEditValue('')
        }
        onCellSelect(row, col)

        // Sync formula bar with the selected cell's content
        if (onFormulaBarSync) {
            const formula = getCellFormula ? getCellFormula(row, col) : null
            const value = data[row]?.[col]
            onFormulaBarSync(formula || (value != null ? String(value) : ''))
        }
    }

    const handleCellDoubleClick = (row: number, col: number) => {
        setEditingCell({ row, col })
        const formula = getCellFormula ? getCellFormula(row, col) : null
        const currentValue = formula || String(data[row]?.[col] || '')
        setEditValue(currentValue)
        // Also sync formula bar
        if (onFormulaBarSync) {
            onFormulaBarSync(currentValue)
        }
    }

    const commitEdit = (row: number, col: number, value: string) => {
        onCellEdit(row, col, value)
        setEditingCell(null)
        setEditValue('')
        // Sync formula bar back to empty after commit
        if (onFormulaBarSync) {
            onFormulaBarSync('')
        }
    }

    const handleEditKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            commitEdit(row, col, editValue)
        } else if (e.key === 'Escape') {
            setEditingCell(null)
            setEditValue('')
        }
    }

    const formatCellValue = (value: string | number | null): string => {
        if (value === null || value === undefined) return ''
        if (typeof value === 'number') {
            return value.toLocaleString('id-ID')
        }
        return String(value)
    }

    const numCols = Math.max(10, data[0]?.length || 10)

    return (
        <div className="overflow-x-auto border-2 border-gray-300 rounded-lg bg-white shadow-md">
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="bg-gray-200 border border-gray-300 p-0 w-12 sticky left-0 z-10" />
                        {COLUMNS.slice(0, numCols).map((col) => (
                            <th
                                key={col}
                                className="bg-gray-200 border border-gray-300 px-4 py-2 text-sm font-semibold text-center min-w-[100px]"
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className="bg-gray-200 border border-gray-300 px-3 py-2 text-sm font-semibold text-center sticky left-0 z-10">
                                {rowIndex + 1}
                            </td>
                            {Array.from({ length: numCols }, (_, colIndex) => {
                                const cell = row[colIndex] ?? null
                                const isSelected =
                                    selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                                const isEditing =
                                    editingCell?.row === rowIndex && editingCell?.col === colIndex
                                const isTarget =
                                    targetCell?.row === rowIndex && targetCell?.col === colIndex

                                return (
                                    <td
                                        key={colIndex}
                                        title={isTarget ? '← Isi cell ini!' : undefined}
                                        className={cn(
                                            'border border-gray-300 px-3 py-2 cursor-cell transition-colors relative',
                                            isTarget && !isSelected && 'ring-2 ring-inset ring-amber-400 bg-amber-50',
                                            isSelected && 'ring-2 ring-inset ring-duo-green bg-duo-green/5',
                                            !isSelected && !isTarget && 'hover:bg-gray-50'
                                        )}
                                        onClick={() => handleCellClick(rowIndex, colIndex)}
                                        onDoubleClick={() => handleCellDoubleClick(rowIndex, colIndex)}
                                    >
                                        {/* Target cell badge */}
                                        {isTarget && !isSelected && (
                                            <span className="absolute -top-1 -right-1 text-[10px] bg-amber-400 text-white rounded-full px-1 leading-tight z-10">
                                                ✏️
                                            </span>
                                        )}

                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                onKeyDown={(e) => handleEditKeyDown(e, rowIndex, colIndex)}
                                                onBlur={() => commitEdit(rowIndex, colIndex, editValue)}
                                                autoFocus
                                                className="w-full bg-transparent border-none outline-none font-mono text-sm"
                                            />
                                        ) : (
                                            <div
                                                className={cn(
                                                    'text-sm min-h-[20px]',
                                                    typeof cell === 'number' ? 'text-right font-mono' : 'text-left',
                                                    cell === null && 'text-gray-300'
                                                )}
                                            >
                                                {formatCellValue(cell)}
                                            </div>
                                        )}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
