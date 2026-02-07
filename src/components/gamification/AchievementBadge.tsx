import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { Achievement } from '@/data/achievements'

interface AchievementBadgeProps {
    achievement: Achievement
    isUnlocked: boolean
    className?: string
}

export function AchievementBadge({ achievement, isUnlocked, className = '' }: AchievementBadgeProps) {
    const categoryColors = {
        learning: 'from-duo-green to-duo-blue',
        mastery: 'from-duo-blue to-duo-purple',
        dedication: 'from-duo-orange to-error',
        excellence: 'from-duo-purple to-duo-pink',
    }

    return (
        <motion.div
            whileHover={isUnlocked ? { scale: 1.05, y: -5 } : {}}
            className={`relative ${className}`}
        >
            <div
                className={`
                    p-6 rounded-xl text-center transition-all
                    ${isUnlocked
                        ? `bg-gradient-to-br ${categoryColors[achievement.category]} text-white shadow-lg`
                        : 'bg-gray-100 text-gray-400 border-2 border-gray-300'
                    }
                `}
            >
                {/* Icon */}
                <div className="text-5xl mb-3 relative">
                    {isUnlocked ? (
                        achievement.icon
                    ) : (
                        <div className="relative">
                            <span className="opacity-30">{achievement.icon}</span>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Lock className="w-8 h-8 text-gray-500" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Title */}
                <h4 className="font-bold text-lg mb-1">
                    {achievement.title}
                </h4>

                {/* Description */}
                <p className={`text-sm mb-2 ${isUnlocked ? 'opacity-90' : ''}`}>
                    {achievement.description}
                </p>

                {/* Requirement */}
                <p className={`text-xs ${isUnlocked ? 'opacity-75' : 'text-text-secondary'}`}>
                    {achievement.requirement}
                </p>

                {/* XP Badge */}
                {isUnlocked && (
                    <div className="mt-3 inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                        +{achievement.xpReward} XP
                    </div>
                )}
            </div>

            {/* Locked overlay */}
            {!isUnlocked && (
                <div className="absolute inset-0 bg-gray-200/50 rounded-xl backdrop-blur-[2px] pointer-events-none" />
            )}
        </motion.div>
    )
}
