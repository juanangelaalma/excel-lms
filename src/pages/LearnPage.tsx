import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useGame } from '@/contexts/GameContext'
import { Flame, Zap, Trophy, Lock, CheckCircle, PlayCircle } from 'lucide-react'
import Header from '@/components/layout/Header'
import MobileNav from '@/components/layout/MobileNav'
import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { curriculum, getPertemuanByMonth } from '@/data/curriculum'

export default function LearnPage() {
    const { gameState } = useGame()
    const navigate = useNavigate()

    const currentPertemuan = curriculum.find(p => p.id === gameState.progress.currentPertemuan)
    const completedCount = gameState.progress.completedPertemuan.length
    const totalCount = curriculum.length
    const overallProgress = (completedCount / totalCount) * 100

    const isPertemuanUnlocked = (id: number) => {
        if (id === 1) return true
        return gameState.progress.completedPertemuan.includes(id - 1)
    }

    const getPertemuanStatus = (id: number): 'completed' | 'in-progress' | 'locked' => {
        if (gameState.progress.completedPertemuan.includes(id)) return 'completed'
        if (id === gameState.progress.currentPertemuan) return 'in-progress'
        return 'locked'
    }

    return (
        <div className="min-h-screen bg-bg-secondary">
            <Header />

            <div className="container py-8 pb-24 md:pb-8">
                {/* Top Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-3xl font-heading font-bold">
                                {gameState.profile.name} Level {gameState.stats.currentLevel}
                            </h1>
                            <p className="text-text-secondary">Keep up the great work! 🎉</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <Card className="text-center p-4">
                            <Flame className="w-8 h-8 text-duo-orange mx-auto mb-2" />
                            <p className="text-2xl font-bold text-duo-orange">{gameState.stats.streakDays}</p>
                            <p className="text-sm text-text-secondary">DAY STREAK</p>
                        </Card>

                        <Card className="text-center p-4">
                            <Zap className="w-8 h-8 text-duo-blue mx-auto mb-2" />
                            <p className="text-2xl font-bold text-duo-blue">{gameState.stats.totalXP}</p>
                            <p className="text-sm text-text-secondary">TOTAL XP</p>
                        </Card>

                        <Card className="text-center p-4">
                            <Trophy className="w-8 h-8 text-duo-purple mx-auto mb-2" />
                            <p className="text-2xl font-bold text-duo-purple">
                                {gameState.achievements.unlocked.length}/{gameState.achievements.locked.length + gameState.achievements.unlocked.length}
                            </p>
                            <p className="text-sm text-text-secondary">BADGES</p>
                        </Card>
                    </div>

                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="font-semibold">Level {gameState.stats.currentLevel} Progress</span>
                            <span className="text-text-secondary">
                                {gameState.stats.totalXP - (gameState.stats.currentLevel === 1 ? 0 : [0, 100, 300, 600, 1000, 1500][gameState.stats.currentLevel - 1])}
                                / {[100, 200, 300, 400, 500, 0][gameState.stats.currentLevel - 1]} XP
                            </span>
                        </div>
                        <Progress
                            value={gameState.stats.totalXP}
                            max={[100, 300, 600, 1000, 1500, 2000][gameState.stats.currentLevel - 1]}
                            className="h-6"
                        />
                    </div>
                </motion.div>

                {/* Continue Learning Card */}
                {currentPertemuan && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <h2 className="text-xl font-bold mb-3">📚 Continue where you left off...</h2>
                        <Card className="bg-gradient-to-r from-duo-green to-duo-blue text-white p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2">{currentPertemuan.title}</h3>
                                    <p className="mb-4 opacity-90">{currentPertemuan.description}</p>
                                    <div className="flex items-center gap-4 text-sm opacity-90">
                                        <span>⏱ {currentPertemuan.duration}</span>
                                        <span>⚡ {currentPertemuan.xpReward} XP</span>
                                    </div>
                                </div>
                                <Button
                                    size="lg"
                                    className="bg-white text-duo-green hover:bg-gray-100 ml-4"
                                    onClick={() => navigate(`/lesson/${currentPertemuan.id}`)}
                                >
                                    Continue →
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                )}

                {/* Overall Progress */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-3">Your Overall Progress</h2>
                    <Card className="p-4">
                        <div className="flex justify-between text-sm mb-2">
                            <span className="font-semibold">Course Completion</span>
                            <span className="text-text-secondary">{completedCount}/{totalCount} pertemuan</span>
                        </div>
                        <Progress value={overallProgress} showPercentage />
                    </Card>
                </div>

                {/* Course Modules */}
                <div className="space-y-6">
                    {[1, 2, 3].map((month) => {
                        const pertemuans = getPertemuanByMonth(month as 1 | 2 | 3)
                        const completed = pertemuans.filter(p => gameState.progress.completedPertemuan.includes(p.id)).length
                        const progress = (completed / pertemuans.length) * 100
                        const monthUnlocked = month === 1 || gameState.progress.completedPertemuan.includes((month - 1) * 8)

                        const monthTitles = {
                            1: 'BULAN 1: Fundamental & Basic Functions',
                            2: 'BULAN 2: Intermediate & Data Analysis',
                            3: 'BULAN 3: Advanced & Projects',
                        }

                        return (
                            <motion.div
                                key={month}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: month * 0.1 }}
                            >
                                <Card className={!monthUnlocked ? 'opacity-60' : ''}>
                                    <div className="p-4 border-b">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold">{monthTitles[month as 1 | 2 | 3]}</h3>
                                            {!monthUnlocked && <Lock className="w-5 h-5 text-locked-text" />}
                                        </div>
                                        <div className="mt-2">
                                            <Progress value={progress} />
                                            <p className="text-sm text-text-secondary mt-1">
                                                {completed}/{pertemuans.length} Complete
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-4 space-y-3">
                                        {pertemuans.map((pertemuan) => {
                                            const status = getPertemuanStatus(pertemuan.id)
                                            const unlocked = isPertemuanUnlocked(pertemuan.id)

                                            return (
                                                <motion.div
                                                    key={pertemuan.id}
                                                    whileHover={unlocked ? { scale: 1.02 } : {}}
                                                    className={`
                            p-4 rounded-lg border-2 transition-all
                            ${status === 'completed' ? 'border-success bg-bg-success' : ''}
                            ${status === 'in-progress' ? 'border-duo-blue bg-duo-blue/5' : ''}
                            ${status === 'locked' ? 'border-locked-border bg-locked-bg cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}
                          `}
                                                    onClick={() => unlocked && navigate(`/lesson/${pertemuan.id}`)}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                {status === 'completed' && <CheckCircle className="w-5 h-5 text-success" />}
                                                                {status === 'in-progress' && <PlayCircle className="w-5 h-5 text-duo-blue" />}
                                                                {status === 'locked' && <Lock className="w-5 h-5 text-locked-text" />}
                                                                <h4 className="font-bold">Pertemuan {pertemuan.id}</h4>
                                                            </div>
                                                            <p className="font-semibold mb-1">{pertemuan.title}</p>
                                                            <p className="text-sm text-text-secondary mb-2">{pertemuan.description}</p>
                                                            <div className="flex gap-3 text-xs text-text-secondary">
                                                                <span>⏱ {pertemuan.duration}</span>
                                                                <span>⚡ {pertemuan.xpReward} XP</span>
                                                                {pertemuan.hasSimulator && <span>🎮 Simulator</span>}
                                                            </div>
                                                        </div>

                                                        {status === 'completed' && (
                                                            <Badge variant="success">Completed ✓</Badge>
                                                        )}
                                                        {status === 'in-progress' && (
                                                            <Badge variant="info">In Progress</Badge>
                                                        )}
                                                        {status === 'locked' && (
                                                            <Badge variant="locked">Locked 🔒</Badge>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            <MobileNav />
        </div>
    )
}
