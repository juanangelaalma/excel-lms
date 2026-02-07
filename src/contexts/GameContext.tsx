import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface UserProfile {
    name: string
    avatar: string
    joinDate: string
}

interface Progress {
    completedPertemuan: number[]
    currentPertemuan: number
    currentSlide: number
    quizResults: Record<number, { score: number; attempts: number; xpEarned: number }>
    simulatorResults: Record<number, { tasksCompleted: number; totalTasks: number; xpEarned: number }>
}

interface Stats {
    totalXP: number
    currentLevel: number
    xpToNextLevel: number
    totalTimeMinutes: number
    averageQuizScore: number
    streakDays: number
    lastActiveDate: string
    longestStreak: number
    streakFreezes: number
}

interface Achievements {
    unlocked: string[]
    locked: string[]
    progress: Record<string, number>
}

interface GameState {
    profile: UserProfile
    progress: Progress
    stats: Stats
    achievements: Achievements
}

interface GameContextType {
    gameState: GameState
    addXP: (amount: number) => void
    updateStreak: () => void
    completePertemuan: (pertemuanId: number, quizScore: number) => void
    unlockAchievement: (achievementId: string) => void
}

const GameContext = createContext<GameContextType | undefined>(undefined)

const INITIAL_STATE: GameState = {
    profile: {
        name: 'Learner',
        avatar: '👤',
        joinDate: new Date().toISOString(),
    },
    progress: {
        completedPertemuan: [],
        currentPertemuan: 1,
        currentSlide: 1,
        quizResults: {},
        simulatorResults: {},
    },
    stats: {
        totalXP: 0,
        currentLevel: 1,
        xpToNextLevel: 100,
        totalTimeMinutes: 0,
        averageQuizScore: 0,
        streakDays: 1,
        lastActiveDate: new Date().toISOString(),
        longestStreak: 1,
        streakFreezes: 2,
    },
    achievements: {
        unlocked: [],
        locked: [
            'first_step',
            'note_taker',
            'week_warrior',
            'quick_learner',
            'formula_ninja',
            'pivot_master',
            'perfect_score',
            'marathon_runner',
            'data_analyst',
            'automation_expert',
            'excel_master',
            'unstoppable',
        ],
        progress: {},
    },
}

export function GameProvider({ children }: { children: ReactNode }) {
    const [gameState, setGameState] = useState<GameState>(() => {
        const saved = localStorage.getItem('excel-lms-state')
        return saved ? JSON.parse(saved) : INITIAL_STATE
    })

    useEffect(() => {
        localStorage.setItem('excel-lms-state', JSON.stringify(gameState))
    }, [gameState])

    const calculateLevel = (xp: number): { level: number; xpToNext: number } => {
        if (xp < 100) return { level: 1, xpToNext: 100 - xp }
        if (xp < 300) return { level: 2, xpToNext: 300 - xp }
        if (xp < 600) return { level: 3, xpToNext: 600 - xp }
        if (xp < 1000) return { level: 4, xpToNext: 1000 - xp }
        if (xp < 1500) return { level: 5, xpToNext: 1500 - xp }
        return { level: 6, xpToNext: 0 }
    }

    const addXP = (amount: number) => {
        setGameState((prev) => {
            const newXP = prev.stats.totalXP + amount
            const { level, xpToNext } = calculateLevel(newXP)

            return {
                ...prev,
                stats: {
                    ...prev.stats,
                    totalXP: newXP,
                    currentLevel: level,
                    xpToNextLevel: xpToNext,
                },
            }
        })
    }

    const updateStreak = () => {
        setGameState((prev) => {
            const today = new Date().toDateString()
            const lastActive = new Date(prev.stats.lastActiveDate).toDateString()

            if (today === lastActive) {
                return prev
            }

            const yesterday = new Date()
            yesterday.setDate(yesterday.getDate() - 1)
            const yesterdayStr = yesterday.toDateString()

            let newStreakDays = prev.stats.streakDays

            if (lastActive === yesterdayStr) {
                newStreakDays += 1
            } else if (prev.stats.streakFreezes > 0) {
                newStreakDays = prev.stats.streakDays
            } else {
                newStreakDays = 1
            }

            return {
                ...prev,
                stats: {
                    ...prev.stats,
                    streakDays: newStreakDays,
                    lastActiveDate: new Date().toISOString(),
                    longestStreak: Math.max(prev.stats.longestStreak, newStreakDays),
                },
            }
        })
    }

    const completePertemuan = (pertemuanId: number, quizScore: number) => {
        setGameState((prev) => {
            const completed = [...prev.progress.completedPertemuan, pertemuanId]

            return {
                ...prev,
                progress: {
                    ...prev.progress,
                    completedPertemuan: completed,
                    currentPertemuan: pertemuanId + 1,
                },
            }
        })

        addXP(quizScore >= 90 ? 100 : 50)
    }

    const unlockAchievement = (achievementId: string) => {
        setGameState((prev) => {
            if (prev.achievements.unlocked.includes(achievementId)) {
                return prev
            }

            return {
                ...prev,
                achievements: {
                    ...prev.achievements,
                    unlocked: [...prev.achievements.unlocked, achievementId],
                    locked: prev.achievements.locked.filter((id) => id !== achievementId),
                },
            }
        })
    }

    // Auto-unlock achievements based on progress
    useEffect(() => {
        const checkAchievements = () => {
            const { completedPertemuan } = gameState.progress
            const { streakDays, longestStreak } = gameState.stats
            const quizResults = Object.values(gameState.progress.quizResults)

            // First Step - Complete 1 pertemuan
            if (completedPertemuan.length >= 1 && !gameState.achievements.unlocked.includes('first_step')) {
                unlockAchievement('first_step')
                addXP(20)
            }

            // Quick Learner - Complete Month 1 (first 4 pertemuan)
            if (completedPertemuan.length >= 4 && !gameState.achievements.unlocked.includes('quick_learner')) {
                unlockAchievement('quick_learner')
                addXP(100)
            }

            // Data Analyst - Complete Month 2 (first 8 pertemuan)
            if (completedPertemuan.length >= 8 && !gameState.achievements.unlocked.includes('data_analyst')) {
                unlockAchievement('data_analyst')
                addXP(150)
            }

            // Excel Master - Complete all 24 pertemuan
            if (completedPertemuan.length >= 24 && !gameState.achievements.unlocked.includes('excel_master')) {
                unlockAchievement('excel_master')
                addXP(300)
            }

            // Week Warrior - 7 day streak
            if (streakDays >= 7 && !gameState.achievements.unlocked.includes('week_warrior')) {
                unlockAchievement('week_warrior')
                addXP(40)
            }

            // Marathon Runner - 30 day streak
            if (longestStreak >= 30 && !gameState.achievements.unlocked.includes('marathon_runner')) {
                unlockAchievement('marathon_runner')
                addXP(200)
            }

            // Unstoppable - 100 day streak
            if (longestStreak >= 100 && !gameState.achievements.unlocked.includes('unstoppable')) {
                unlockAchievement('unstoppable')
                addXP(500)
            }

            // Note Taker - 5 perfect quiz scores
            const perfectScores = quizResults.filter(r => r.score === 100).length
            if (perfectScores >= 5 && !gameState.achievements.unlocked.includes('note_taker')) {
                unlockAchievement('note_taker')
                addXP(60)
            }

            // Perfect Score - 10 perfect quiz scores
            if (perfectScores >= 10 && !gameState.achievements.unlocked.includes('perfect_score')) {
                unlockAchievement('perfect_score')
                addXP(120)
            }
        }

        checkAchievements()
    }, [gameState.progress, gameState.stats])

    return (
        <GameContext.Provider value={{ gameState, addXP, updateStreak, completePertemuan, unlockAchievement }}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    const context = useContext(GameContext)
    if (context === undefined) {
        throw new Error('useGame must be used within a GameProvider')
    }
    return context
}
