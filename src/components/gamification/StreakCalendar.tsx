import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { useGame } from '@/contexts/GameContext'

interface StreakCalendarProps {
    className?: string
}

export function StreakCalendar({ className = '' }: StreakCalendarProps) {
    const { gameState } = useGame()

    // Generate last 7 weeks (49 days) for calendar view
    const today = new Date()
    const days: { date: Date; isActive: boolean; isToday: boolean }[] = []

    for (let i = 48; i >= 0; i--) {
        const date = new Date(today)
        date.setDate(date.getDate() - i)

        const lastActive = new Date(gameState.stats.lastActiveDate)
        const isActive = date <= lastActive && date >= new Date(lastActive.getTime() - gameState.stats.streakDays * 24 * 60 * 60 * 1000)
        const isToday = date.toDateString() === today.toDateString()

        days.push({ date, isActive, isToday })
    }

    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    return (
        <div className={className}>
            <div className="flex items-center gap-3 mb-4">
                <Flame className="w-6 h-6 text-duo-orange" />
                <div>
                    <h3 className="font-bold text-lg">{gameState.stats.streakDays}-Day Streak!</h3>
                    <p className="text-sm text-text-secondary">
                        Longest: {gameState.stats.longestStreak} days • {gameState.stats.streakFreezes} freezes left
                    </p>
                </div>
            </div>

            {/* Week day labels */}
            <div className="grid grid-cols-7 gap-2 mb-2">
                {weekDays.map((day) => (
                    <div key={day} className="text-xs text-center text-text-secondary font-semibold">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2">
                {days.map((day, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.01 }}
                        className={`
                            aspect-square rounded-md flex items-center justify-center text-xs font-semibold
                            ${day.isActive ? 'bg-duo-orange text-white' : 'bg-gray-100 text-gray-400'}
                            ${day.isToday ? 'ring-2 ring-duo-green ring-offset-2' : ''}
                        `}
                        title={day.date.toLocaleDateString()}
                    >
                        {day.isActive && <Flame className="w-3 h-3" />}
                        {day.isToday && !day.isActive && '•'}
                    </motion.div>
                ))}
            </div>

            <div className="mt-4 flex items-center gap-4 text-xs text-text-secondary">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-duo-orange"></div>
                    Active Day
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-gray-100"></div>
                    Missed Day
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded ring-2 ring-duo-green"></div>
                    Today
                </div>
            </div>
        </div>
    )
}
