import { motion } from 'framer-motion'
import { Lightbulb, CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import ExelMascot from '@/components/mascot/ExelMascot'
import { TipBox } from '@/components/lesson/TipBox'

interface TaskPanelProps {
    taskNumber: number;
    totalTasks: number;
    title: string;
    description: string;
    hints: string[];
    feedback: 'idle' | 'correct' | 'incorrect' | null;
    showHint: boolean;
    onToggleHint: () => void;
    onCheck: () => void;
    onNext?: () => void;
    onComplete?: () => void;
}

export function TaskPanel({
    taskNumber,
    totalTasks,
    title,
    description,
    hints,
    feedback,
    showHint,
    onToggleHint,
    onCheck,
    onNext,
    onComplete,
}: TaskPanelProps) {
    const isLastTask = taskNumber === totalTasks

    return (
        <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-sm text-text-secondary font-semibold">
                        Task {taskNumber} of {totalTasks}
                    </p>
                    <h3 className="text-2xl font-heading font-bold text-excel-green">
                        {title}
                    </h3>
                </div>
                <ExelMascot
                    state={
                        feedback === 'correct' ? 'celebrating' :
                            feedback === 'incorrect' ? 'sympathetic' :
                                'encouraging'
                    }
                    size="sm"
                />
            </div>

            <p className="text-lg mb-6">
                {description}
            </p>

            {/* Hints Section */}
            <div className="mb-6">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onToggleHint}
                    className="mb-3"
                >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    {showHint ? 'Hide Hints' : 'Show Hints'}
                </Button>

                {showHint && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-2"
                    >
                        {hints.map((hint, index) => (
                            <TipBox key={index} variant="tip">
                                <strong>Hint {index + 1}:</strong> {hint}
                            </TipBox>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Feedback Section */}
            {feedback && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6"
                >
                    {feedback === 'correct' ? (
                        <TipBox variant="success">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                <div>
                                    <p className="font-semibold">Excellent! 🎉</p>
                                    <p>You got it right! Click Next to continue.</p>
                                </div>
                            </div>
                        </TipBox>
                    ) : (
                        <TipBox variant="warning">
                            <div className="flex items-center gap-2">
                                <XCircle className="w-5 h-5" />
                                <div>
                                    <p className="font-semibold">Not quite right</p>
                                    <p>Check your formula and try again. Need a hint?</p>
                                </div>
                            </div>
                        </TipBox>
                    )}
                </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
                {feedback !== 'correct' && (
                    <Button onClick={onCheck} className="flex-1">
                        Check Answer
                    </Button>
                )}

                {feedback === 'correct' && !isLastTask && onNext && (
                    <Button onClick={onNext} className="flex-1">
                        Next Task →
                    </Button>
                )}

                {feedback === 'correct' && isLastTask && onComplete && (
                    <Button onClick={onComplete} className="flex-1">
                        Complete & Take Quiz 🎯
                    </Button>
                )}
            </div>
        </div>
    )
}
