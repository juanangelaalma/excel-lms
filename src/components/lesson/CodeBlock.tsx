import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
    code?: string
    formula?: string
    description?: string
    className?: string
}

export function CodeBlock({ code, formula, description, className }: CodeBlockProps) {
    const displayText = code || formula || ''
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(displayText)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className={cn('space-y-2', className)}>
            <div className="relative bg-excel-green/10 border-2 border-excel-green/30 rounded-lg p-4">
                <code className="font-mono text-sm text-excel-green font-semibold">
                    {displayText}
                </code>
                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 p-2 hover:bg-white/50 rounded-md transition-colors"
                    title="Copy formula"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-success" />
                    ) : (
                        <Copy className="w-4 h-4 text-excel-green" />
                    )}
                </button>
            </div>
            {description && (
                <p className="text-sm text-text-secondary italic">
                    {description}
                </p>
            )}
        </div>
    )
}
