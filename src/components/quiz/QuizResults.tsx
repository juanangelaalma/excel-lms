import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import ExelMascot from '@/components/mascot/ExelMascot'
import { Trophy, Star, Clock, Target } from 'lucide-react'

interface QuizResultsProps {
    score: number
    totalQuestions: number
    passed: boolean
    timeSpent?: number
    onRetry: () => void
    onContinue: () => void
}

export function QuizResults({
    score,
    totalQuestions,
    passed,
    timeSpent,
    onRetry,
    onContinue
}: QuizResultsProps) {
    const percentage = Math.round((score / totalQuestions) * 100)
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
        >
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <ExelMascot
                    state={passed ? 'celebrating' : 'sympathetic'}
                    size="lg"
                    className="mb-6"
                />

                <h2 className="text-4xl font-heading font-bold mb-4">
                    {passed ? '🎉 Congratulations!' : '💪 Keep Trying!'}
                </h2>

                <p className="text-xl text-text-secondary mb-8">
                    {passed
                        ? 'You passed the quiz! Great job!'
                        : 'You need 70% to pass. Review the material and try again!'}
                </p>

                {/* Score Display */}
                <div className="bg-gradient-to-r from-duo-green to-duo-blue rounded-lg p-8 mb-8">
                    <div className="text-white">
                        <p className="text-sm font-semibold mb-2">YOUR SCORE</p>
                        <p className="text-6xl font-bold">{percentage}%</p>
                        <p className="text-lg mt-2">{score} out of {totalQuestions} correct</p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-bg-accent p-4 rounded-lg">
                        <Target className="w-8 h-8 text-duo-green mx-auto mb-2" />
                        <p className="text-sm text-text-secondary">Accuracy</p>
                        <p className="text-2xl font-bold">{percentage}%</p>
                    </div>

                    <div className="bg-bg-accent p-4 rounded-lg">
                        <Trophy className="w-8 h-8 text-duo-orange mx-auto mb-2" />
                        <p className="text-sm text-text-secondary">XP Earned</p>
                        <p className="text-2xl font-bold">{passed ? (percentage === 100 ? '+100' : '+50') : '0'}</p>
                    </div>

                    <div className="bg-bg-accent p-4 rounded-lg">
                        <Star className="w-8 h-8 text-duo-purple mx-auto mb-2" />
                        <p className="text-sm text-text-secondary">Status</p>
                        <p className="text-2xl font-bold">{passed ? 'PASSED' : 'FAILED'}</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center">
                    {!passed && (
                        <Button
                            onClick={onRetry}
                            variant="outline"
                            size="lg"
                        >
                            Retry Quiz
                        </Button>
                    )}

                    {passed && (
                        <Button
                            onClick={onContinue}
                            size="lg"
                        >
                            Continue to Next Lesson →
                        </Button>
                    )}

                    <Button
                        onClick={() => navigate('/learn')}
                        variant={passed ? 'outline' : 'default'}
                        size="lg"
                    >
                        Back to Dashboard
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
