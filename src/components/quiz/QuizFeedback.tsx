import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'
import { TipBox } from '@/components/lesson/TipBox'

interface QuizFeedbackProps {
    isCorrect: boolean
    explanation: string
    onNext: () => void
}

export function QuizFeedback({ isCorrect, explanation, onNext }: QuizFeedbackProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
        >
            <TipBox variant={isCorrect ? 'success' : 'warning'}>
                <div className="flex items-start gap-3">
                    {isCorrect ? (
                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    ) : (
                        <XCircle className="w-6 h-6 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                        <p className="font-semibold text-lg mb-2">
                            {isCorrect ? 'Correct! 🎉' : 'Not quite right'}
                        </p>
                        <p className="mb-4">{explanation}</p>
                        <button
                            onClick={onNext}
                            className="bg-white px-4 py-2 rounded-lg font-semibold shadow-sm hover:shadow-md transition-shadow"
                        >
                            {isCorrect ? 'Next Question →' : 'Try Again'}
                        </button>
                    </div>
                </div>
            </TipBox>
        </motion.div>
    )
}
