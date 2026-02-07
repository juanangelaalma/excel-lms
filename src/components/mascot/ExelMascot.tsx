import { motion } from 'framer-motion'

interface ExelMascotProps {
    state?: 'happy' | 'celebrating' | 'encouraging' | 'thinking' | 'sympathetic' | 'fire'
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

export default function ExelMascot({ state = 'happy', size = 'md', className = '' }: ExelMascotProps) {
    const sizes = {
        sm: 'text-4xl',
        md: 'text-6xl',
        lg: 'text-8xl',
    }

    const expressions = {
        happy: '😊',
        celebrating: '🎉',
        encouraging: '💪',
        thinking: '🤔',
        sympathetic: '😢',
        fire: '🔥',
    }

    const animations = {
        happy: { scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] },
        celebrating: { scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] },
        encouraging: { y: [0, -10, 0] },
        thinking: { rotate: [0, 10, -10, 0] },
        sympathetic: { scale: [1, 0.95, 1] },
        fire: { scale: [1, 1.1, 1], rotate: [0, 180, 360] },
    }

    return (
        <motion.div
            className={`inline-flex items-center justify-center ${sizes[size]} ${className}`}
            animate={animations[state]}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            <div className="bg-excel-green bg-gradient-to-br from-excel-green to-duo-green p-6 rounded-full shadow-success">
                <span className="filter drop-shadow-lg">{expressions[state]}</span>
            </div>
        </motion.div>
    )
}
