import { useGame } from '@/contexts/GameContext'
import { TrendingUp, Clock, Award } from 'lucide-react'
import Header from '@/components/layout/Header'
import MobileNav from '@/components/layout/MobileNav'
import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { StreakCalendar } from '@/components/gamification/StreakCalendar'
import { AchievementGallery } from '@/components/gamification/AchievementGallery'

export default function ProgressPage() {
    const { gameState } = useGame()

    const completedCount = gameState.progress.completedPertemuan.length
    const overallProgress = (completedCount / 24) * 100

    return (
        <div className="min-h-screen bg-bg-secondary">
            <Header />

            <div className="container py-8 pb-24 md:pb-8">
                <h1 className="text-3xl font-heading font-bold mb-6">Your Progress 📊</h1>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card className="p-6 text-center">
                        <TrendingUp className="w-12 h-12 text-duo-green mx-auto mb-3" />
                        <p className="text-sm text-text-secondary mb-1">PROGRESS</p>
                        <p className="text-3xl font-bold mb-1">{Math.round(overallProgress)}%</p>
                        <p className="text-sm text-text-secondary">{completedCount}/24 Done</p>
                    </Card>

                    <Card className="p-6 text-center">
                        <Clock className="w-12 h-12 text-duo-blue mx-auto mb-3" />
                        <p className="text-sm text-text-secondary mb-1">TOTAL TIME</p>
                        <p className="text-3xl font-bold mb-1">{Math.round(gameState.stats.totalTimeMinutes / 60)}h</p>
                        <p className="text-sm text-text-secondary">This week: 3h</p>
                    </Card>

                    <Card className="p-6 text-center">
                        <Award className="w-12 h-12 text-duo-orange mx-auto mb-3" />
                        <p className="text-sm text-text-secondary mb-1">AVG SCORE</p>
                        <p className="text-3xl font-bold mb-1">{gameState.stats.averageQuizScore || 85}%</p>
                        <p className="text-sm text-text-secondary">⭐⭐⭐⭐⭐</p>
                    </Card>
                </div>

                <Card className="p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4">Level {gameState.stats.currentLevel} → Level {gameState.stats.currentLevel + 1}</h2>
                    <Progress
                        value={gameState.stats.totalXP}
                        max={[100, 300, 600, 1000, 1500, 2000][gameState.stats.currentLevel - 1]}
                        showPercentage
                    />
                    <p className="text-sm text-text-secondary mt-2">
                        {gameState.stats.xpToNextLevel} XP until next level! Keep going! 🚀
                    </p>
                </Card>

                <Card className="p-6 mb-6">
                    <StreakCalendar />
                </Card>

                <Card className="p-6">
                    <AchievementGallery />
                </Card>
            </div>

            <MobileNav />
        </div>
    )
}
