import { useState } from 'react'
import { achievements, getAchievementsByCategory } from '@/data/achievements'
import { AchievementBadge } from './AchievementBadge'
import { useGame } from '@/contexts/GameContext'

interface AchievementGalleryProps {
    className?: string
}

export function AchievementGallery({ className = '' }: AchievementGalleryProps) {
    const { gameState } = useGame()
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'learning' | 'mastery' | 'dedication' | 'excellence'>('all')

    const categories = [
        { id: 'all', label: 'All', icon: '🏆' },
        { id: 'learning', label: 'Learning', icon: '📚' },
        { id: 'mastery', label: 'Mastery', icon: '💎' },
        { id: 'dedication', label: 'Dedication', icon: '🔥' },
        { id: 'excellence', label: 'Excellence', icon: '⭐' },
    ] as const

    const filteredAchievements = selectedCategory === 'all'
        ? achievements
        : getAchievementsByCategory(selectedCategory)

    const unlockedCount = gameState.achievements.unlocked.length
    const totalCount = achievements.length

    return (
        <div className={className}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold">🏅 Achievements</h2>
                    <p className="text-text-secondary">
                        {unlockedCount}/{totalCount} Unlocked ({Math.round((unlockedCount / totalCount) * 100)}%)
                    </p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`
                            px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all
                            ${selectedCategory === category.id
                                ? 'bg-duo-green text-white shadow-md'
                                : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                            }
                        `}
                    >
                        {category.icon} {category.label}
                    </button>
                ))}
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredAchievements.map((achievement) => (
                    <AchievementBadge
                        key={achievement.id}
                        achievement={achievement}
                        isUnlocked={gameState.achievements.unlocked.includes(achievement.id)}
                    />
                ))}
            </div>

            {filteredAchievements.length === 0 && (
                <div className="text-center py-12 text-text-secondary">
                    <p className="text-lg">No achievements in this category yet.</p>
                </div>
            )}
        </div>
    )
}
