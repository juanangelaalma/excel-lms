import { Link } from 'react-router-dom'
import { useGame } from '@/contexts/GameContext'
import { Flame, Zap, Trophy } from 'lucide-react'

export default function Header() {
    const { gameState } = useGame()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <span className="text-2xl">📊</span>
                    <span className="font-heading text-xl font-bold text-excel-green">
                        Excel Master Class
                    </span>
                </Link>

                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link
                        to="/learn"
                        className="text-text-primary hover:text-duo-green transition-colors"
                    >
                        Learn
                    </Link>
                    <Link
                        to="/progress"
                        className="text-text-primary hover:text-duo-green transition-colors"
                    >
                        Progress
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-3">
                        <div className="flex items-center space-x-1 bg-duo-orange/10 px-3 py-1 rounded-full">
                            <Flame className="w-4 h-4 text-duo-orange" />
                            <span className="font-bold text-duo-orange">{gameState.stats.streakDays}</span>
                        </div>

                        <div className="flex items-center space-x-1 bg-duo-blue/10 px-3 py-1 rounded-full">
                            <Zap className="w-4 h-4 text-duo-blue" />
                            <span className="font-bold text-duo-blue">{gameState.stats.totalXP}</span>
                        </div>

                        <div className="flex items-center space-x-1 bg-duo-purple/10 px-3 py-1 rounded-full">
                            <Trophy className="w-4 h-4 text-duo-purple" />
                            <span className="font-bold text-duo-purple">
                                {gameState.achievements.unlocked.length}/{gameState.achievements.locked.length + gameState.achievements.unlocked.length}
                            </span>
                        </div>
                    </div>

                    <Link
                        to="/learn"
                        className="bg-duo-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#4CAF02] transition-all shadow-md hover:shadow-success active:scale-95"
                    >
                        Mulai Gratis →
                    </Link>
                </div>
            </div>
        </header>
    )
}
