import { cn } from '@/lib/utils'
import { Info, Lightbulb, AlertTriangle, CheckCircle } from 'lucide-react'

interface TipBoxProps {
    children: React.ReactNode
    variant?: 'tip' | 'info' | 'warning' | 'success'
    className?: string
}

export function TipBox({ children, variant = 'tip', className }: TipBoxProps) {
    const variants = {
        tip: {
            bg: 'bg-duo-purple/10',
            border: 'border-duo-purple',
            icon: Lightbulb,
            iconColor: 'text-duo-purple',
        },
        info: {
            bg: 'bg-duo-blue/10',
            border: 'border-duo-blue',
            icon: Info,
            iconColor: 'text-duo-blue',
        },
        warning: {
            bg: 'bg-duo-orange/10',
            border: 'border-duo-orange',
            icon: AlertTriangle,
            iconColor: 'text-duo-orange',
        },
        success: {
            bg: 'bg-success/10',
            border: 'border-success',
            icon: CheckCircle,
            iconColor: 'text-success',
        },
    }

    const config = variants[variant]
    const Icon = config.icon

    return (
        <div className={cn(
            'flex items-start gap-3 p-4 rounded-lg border-2',
            config.bg,
            config.border,
            className
        )}>
            <Icon className={cn('w-5 h-5 flex-shrink-0 mt-0.5', config.iconColor)} />
            <div className="flex-1 text-sm leading-relaxed">
                {children}
            </div>
        </div>
    )
}
