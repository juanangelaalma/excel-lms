import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SpreadsheetGridProps {
    data: (string | number | null)[][]
    selectedCell: { row: number; col: number } | null
    onCellSelect: (row: number, col: number) => void
    onCellEdit: (row: number, col: number, value: string) => void
    getCellFormula?: (row: number, col: number) => string | null
}

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

export function SpreadsheetGrid({
    data,
    selectedCell,
    onCellSelect,
    onCellEdit,
    getCellFormula
}: SpreadsheetGridProps) {
    const [editingCell, setEditingCell] = useState<{ row: number; col: number } | null>(null)
    const [editValue, setEditValue] = useState('')

    const handleCellClick = (row: number, col: number) => {
        onCellSelect(row, col)
        setEditingCell(null)
    }

    const handleCellDoubleClick = (row: number, col: number) => {
        setEditingCell({ row, col })
        // Check if cell has a formula, show that; otherwise show value
        const formula = getCellFormula ? getCellFormula(row, col) : null
        const currentValue = formula || String(data[row]?.[col] || '')
        setEditValue(currentValue)
    }

    const handleEditKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            onCellEdit(row, col, editValue)
            setEditingCell(null)
            setEditValue('')
        } else if (e.key === 'Escape') {
            setEditingCell(null)
            setEditValue('')
        }
    }

    const formatCellValue = (value: string | number | null): string => {
        if (value === null || value === undefined) return ''
        if (typeof value === 'number') {
            // Format numbers with commas
            return value.toLocaleString()
        }
        return String(value)
    }

    return (
        <div className="overflow-x-auto border-2 border-gray-300 rounded-lg bg-white shadow-md">
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="bg-gray-200 border border-gray-300 p-0 w-12 sticky left-0 z-10"></th>
                        {COLUMNS.slice(0, Math.max(10, data[0]?.length || 10)).map((col, index) => (
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
                            {row.map((cell, colIndex) => {
                                const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                                const isEditing = editingCell?.row === rowIndex && editingCell?.col === colIndex

                                return (
                                    <td
                                        key={colIndex}
                                        className={cn(
                                            'border border-gray-300 px-3 py-2 cursor-cell transition-colors',
                                            isSelected && 'ring-2 ring-duo-green bg-duo-green/5',
                                            !isSelected && 'hover:bg-gray-50'
                                        )}
                                        onClick={() => handleCellClick(rowIndex, colIndex)}
                                        onDoubleClick={() => handleCellDoubleClick(rowIndex, colIndex)}
                                    >
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                onKeyDown={(e) => handleEditKeyDown(e, rowIndex, colIndex)}
                                                onBlur={() => {
                                                    onCellEdit(rowIndex, colIndex, editValue)
                                                    setEditingCell(null)
                                                }}
                                                autoFocus
                                                className="w-full bg-transparent border-none outline-none font-mono text-sm"
                                            />
                                        ) : (
                                            <div className={cn(
                                                'text-sm',
                                                typeof cell === 'number' ? 'text-right font-mono' : 'text-left',
                                                cell === null && 'text-gray-400'
                                            )}>
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
