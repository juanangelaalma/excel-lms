import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import MobileNav from '@/components/layout/MobileNav'
import { QuizFeedback } from '@/components/quiz/QuizFeedback'
import { QuizResults } from '@/components/quiz/QuizResults'
import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { useGame } from '@/contexts/GameContext'
import { getPertemuanById } from '@/data/curriculum'
import { pertemuan01Quiz } from '@/data/quizzes/pertemuan-01-quiz'
import { pertemuan02Quiz } from '@/data/quizzes/pertemuan-02-quiz'
import { pertemuan03Quiz } from '@/data/quizzes/pertemuan-03-quiz'
import { pertemuan04Quiz } from '@/data/quizzes/pertemuan-04-quiz'
import { QuizQuestion } from '@/data/quizzes/pertemuan-03-quiz'
import { triggerConfetti } from '@/lib/confetti'

// Quiz registry - add more as you create them
const quizRegistry: Record<number, QuizQuestion[]> = {
    1: pertemuan01Quiz,
    2: pertemuan02Quiz,
    3: pertemuan03Quiz,
    4: pertemuan04Quiz,
    // Add more: 5: pertemuan05Quiz, etc.
}

export default function QuizPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addXP, completePertemuan } = useGame()

    const pertemuanId = parseInt(id || '1')
    const pertemuan = getPertemuanById(pertemuanId)
    const quiz = quizRegistry[pertemuanId]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [showFeedback, setShowFeedback] = useState(false)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [quizComplete, setQuizComplete] = useState(false)

    const currentQuestion = quiz?.[currentQuestionIndex]
    const progress = quiz ? ((currentQuestionIndex + 1) / quiz.length) * 100 : 0

    const handleAnswerSelect = (answerIndex: number) => {
        if (!showFeedback) {
            setSelectedAnswer(answerIndex)
        }
    }

    const handleSubmit = () => {
        if (selectedAnswer === null || !currentQuestion) return

        setShowFeedback(true)

        if (selectedAnswer === currentQuestion.correctAnswer) {
            setCorrectAnswers(correctAnswers + 1)
        }
    }

    const handleNext = () => {
        if (!currentQuestion) return

        if (selectedAnswer === currentQuestion.correctAnswer) {
            // Correct answer, move to next
            if (currentQuestionIndex < quiz.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1)
                setSelectedAnswer(null)
                setShowFeedback(false)
            } else {
                // Last question, show results
                finishQuiz()
            }
        } else {
            // Wrong answer, retry
            setSelectedAnswer(null)
            setShowFeedback(false)
        }
    }

    const finishQuiz = () => {
        const percentage = (correctAnswers / quiz.length) * 100
        const passed = percentage >= 70

        if (passed) {
            // Award XP
            const xp = percentage === 100 ? 100 : 50
            addXP(xp)

            // Complete pertemuan and unlock next
            completePertemuan(pertemuanId, percentage)

            // Trigger confetti
            triggerConfetti()
        }

        setQuizComplete(true)
    }

    const handleRetry = () => {
        setCurrentQuestionIndex(0)
        setSelectedAnswer(null)
        setShowFeedback(false)
        setCorrectAnswers(0)
        setQuizComplete(false)
    }

    const handleContinue = () => {
        navigate('/learn')
    }

    if (!pertemuan) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="container py-16 text-center">
                    <h1 className="text-3xl font-bold mb-4">Pertemuan not found</h1>
                    <p className="text-text-secondary">Invalid pertemuan ID: {id}</p>
                </div>
                <MobileNav />
            </div>
        )
    }

    if (!quiz) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="container py-16 text-center">
                    <h1 className="text-3xl font-bold mb-4">{pertemuan.title}</h1>
                    <p className="text-text-secondary mb-8">
                        Quiz not available yet for this pertemuan.
                    </p>
                    <button
                        onClick={() => navigate('/learn')}
                        className="bg-duo-green text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        Back to Learn
                    </button>
                </div>
                <MobileNav />
            </div>
        )
    }

    if (quizComplete) {
        const percentage = Math.round((correctAnswers / quiz.length) * 100)
        const passed = percentage >= 70

        return (
            <div className="min-h-screen bg-bg-secondary">
                <Header />
                <div className="container py-8 pb-24 md:pb-8">
                    <QuizResults
                        score={correctAnswers}
                        totalQuestions={quiz.length}
                        passed={passed}

                        onRetry={handleRetry}
                        onContinue={handleContinue}
                    />
                </div>
                <MobileNav />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-bg-secondary">
            <Header />

            <div className="container py-8 pb-24 md:pb-8">
                {/* Quiz Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-heading font-bold mb-2">
                        📝 Quiz - {pertemuan.title}
                    </h1>
                    <p className="text-text-secondary">
                        Answer all questions correctly to pass (70% required)
                    </p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-text-secondary">
                            Question {currentQuestionIndex + 1} of {quiz.length}
                        </span>
                        <span className="text-sm font-semibold text-duo-green">
                            Score: {correctAnswers}/{currentQuestionIndex + (showFeedback && selectedAnswer === currentQuestion?.correctAnswer ? 1 : 0)}
                        </span>
                    </div>
                    <Progress value={progress} />
                </div>

                {/* Question Card */}
                <Card className="max-w-3xl mx-auto p-8">
                    <h2 className="text-2xl font-bold mb-6">
                        {currentQuestion?.question}
                    </h2>

                    <div className="space-y-3">
                        {currentQuestion?.options.map((option, index) => {
                            const isSelected = selectedAnswer === index
                            const isCorrect = index === currentQuestion.correctAnswer
                            const showCorrect = showFeedback && isCorrect
                            const showWrong = showFeedback && isSelected && !isCorrect

                            return (
                                <motion.button
                                    key={index}
                                    whileHover={!showFeedback ? { scale: 1.02 } : {}}
                                    whileTap={!showFeedback ? { scale: 0.98 } : {}}
                                    onClick={() => handleAnswerSelect(index)}
                                    disabled={showFeedback}
                                    className={`
                    w-full text-left p-4 rounded-lg border-2 transition-all
                    ${isSelected && !showFeedback ? 'border-duo-blue bg-duo-blue/10' : ''}
                    ${!isSelected && !showFeedback ? 'border-gray-300 hover:border-duo-blue/50' : ''}
                    ${showCorrect ? 'border-success bg-success/10' : ''}
                    ${showWrong ? 'border-error bg-error/10' : ''}
                    ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}
                  `}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`
                      w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold
                      ${isSelected && !showFeedback ? 'border-duo-blue bg-duo-blue text-white' : ''}
                      ${!isSelected && !showFeedback ? 'border-gray-400' : ''}
                      ${showCorrect ? 'border-success bg-success text-white' : ''}
                      ${showWrong ? 'border-error bg-error text-white' : ''}
                    `}>
                                            {String.fromCharCode(65 + index)}
                                        </div>
                                        <span className="flex-1">{option}</span>
                                    </div>
                                </motion.button>
                            )
                        })}
                    </div>

                    {!showFeedback && (
                        <div className="mt-6">
                            <button
                                onClick={handleSubmit}
                                disabled={selectedAnswer === null}
                                className="w-full bg-duo-green text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#4CAF02] transition-colors"
                            >
                                Submit Answer
                            </button>
                        </div>
                    )}

                    {showFeedback && currentQuestion && (
                        <QuizFeedback
                            isCorrect={selectedAnswer === currentQuestion.correctAnswer}
                            explanation={currentQuestion.explanation}
                            onNext={handleNext}
                        />
                    )}
                </Card>
            </div>

            <MobileNav />
        </div>
    )
}
