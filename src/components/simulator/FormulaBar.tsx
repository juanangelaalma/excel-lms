import { useEffect, useRef } from 'react'

interface FormularBarProps {
    selectedCell: { row: number; col: number } | null
    value: string
    onChange: (value: string) => void
    onSubmit: () => void
}

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

export function FormulaBar({ selectedCell, value, onChange, onSubmit }: FormularBarProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    // Auto-focus formula bar when a cell is selected
    useEffect(() => {
        if (selectedCell) {
            inputRef.current?.focus()
        }
    }, [selectedCell])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            onSubmit()
            // Keep focus on input so user can see the flash
            inputRef.current?.focus()
        } else if (e.key === 'Escape') {
            e.preventDefault()
            onChange('')
        }
    }

    const cellRef = selectedCell
        ? `${COLUMNS[selectedCell.col]}${selectedCell.row + 1}`
        : ''

    const showHelper = selectedCell && !value

    return (
        <div className="bg-white border-b-2 border-gray-200">
            <div className="p-3 flex items-center gap-3">
                {/* Cell reference box */}
                <div className="font-semibold text-sm bg-gray-100 px-3 py-2 rounded border min-w-[60px] text-center font-mono">
                    {cellRef || 'A1'}
                </div>

                {/* fx icon */}
                <div className="text-xl text-gray-400 select-none">ƒx</div>

                {/* Formula input */}
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={selectedCell ? `Ketik nilai atau formula untuk cell ${cellRef}...` : 'Pilih cell terlebih dahulu'}
                    className="flex-1 px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-duo-green focus:border-duo-green font-mono text-sm transition-colors"
                />

                {/* Submit button */}
                {value && (
                    <button
                        onClick={onSubmit}
                        className="bg-duo-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-duo-green/90 transition-colors flex items-center gap-1"
                    >
                        ↵ Enter
                    </button>
                )}
            </div>

            {/* Helper text */}
            {showHelper && (
                <div className="px-4 pb-2 text-xs text-duo-green font-medium animate-pulse">
                    ✏️ Ketik formula di atas (contoh: <code className="bg-green-50 px-1 rounded">=SUM(B2:B4)</code>) lalu tekan <kbd className="bg-gray-100 border px-1 rounded">Enter</kbd>
                </div>
            )}
        </div>
    )
}
