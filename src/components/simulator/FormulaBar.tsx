import { cn } from '@/lib/utils'

interface FormularBarProps {
    selectedCell: { row: number; col: number } | null
    value: string
    onChange: (value: string) => void
    onSubmit: () => void
}

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

export function FormulaBar({ selectedCell, value, onChange, onSubmit }: FormularBarProps) {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            onSubmit()
        } else if (e.key === 'Escape') {
            e.preventDefault()
            onChange('')
        }
    }

    const cellRef = selectedCell
        ? `${COLUMNS[selectedCell.col]}${selectedCell.row + 1}`
        : ''

    return (
        <div className="bg-white border-b-2 border-gray-200 p-3 flex items-center gap-3">
            <div className="font-semibold text-sm bg-gray-100 px-3 py-2 rounded border min-w-[60px] text-center">
                {cellRef || 'A1'}
            </div>
            <div className="text-xl text-gray-400">ƒx</div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter value or formula (e.g., =SUM(A1:A5))"
                className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-duo-green font-mono text-sm"
            />
        </div>
    )
}
