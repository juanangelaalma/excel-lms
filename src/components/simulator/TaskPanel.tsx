import { motion } from 'framer-motion'
import { Lightbulb, CheckCircle, XCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import ExelMascot from '@/components/mascot/ExelMascot'
import { TipBox } from '@/components/lesson/TipBox'

interface TaskPanelProps {
    taskNumber: number;
    totalTasks: number;
    title: string;
    description: string;
    targetCellRef: string;  // e.g. "B5"
    xpReward: number;
    hints: string[];
    feedback: 'idle' | 'correct' | 'incorrect' | null;
    showHint: boolean;
    isTransitioning: boolean;
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
    targetCellRef,
    xpReward,
    hints,
    feedback,
    showHint,
    isTransitioning,
    onToggleHint,
    onCheck,
    onNext,
    onComplete,
}: TaskPanelProps) {
    const isLastTask = taskNumber === totalTasks
    const progress = (taskNumber / totalTasks) * 100

    return (
        <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <div>
                    <p className="text-sm text-text-secondary font-semibold">
                        Task {taskNumber} dari {totalTasks}
                    </p>
                    <h3 className="text-xl font-heading font-bold text-excel-green leading-tight">
                        {title}
                    </h3>
                </div>
                <ExelMascot
                    state={
                        isTransitioning ? 'encouraging' :
                            feedback === 'correct' ? 'celebrating' :
                                feedback === 'incorrect' ? 'sympathetic' :
                                    'encouraging'
                    }
                    size="sm"
                />
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                    className="bg-duo-green h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Task description */}
            <p className="text-base mb-3 leading-relaxed">{description}</p>

            {/* Target cell reminder */}
            <div className="flex items-center gap-2 mb-5 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                <span className="text-lg">✏️</span>
                <p className="text-sm font-semibold text-amber-800">
                    Klik cell <code className="bg-amber-100 px-1 rounded font-mono">{targetCellRef}</code> lalu ketik formula di formula bar di atas
                </p>
            </div>

            {/* XP reward */}
            <div className="flex items-center gap-1 mb-5">
                <span className="text-xs text-text-secondary">Hadiah:</span>
                <span className="text-xs font-bold text-duo-green">+{xpReward} XP ⭐</span>
            </div>

            {/* Hints Section */}
            <div className="mb-5">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onToggleHint}
                    className="mb-3"
                >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    {showHint ? 'Sembunyikan Petunjuk' : 'Tampilkan Petunjuk'}
                </Button>

                {showHint && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-2"
                    >
                        {hints.map((hint, index) => (
                            <TipBox key={index} variant="tip">
                                <strong>Petunjuk {index + 1}:</strong> {hint}
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
                    className="mb-5"
                >
                    {feedback === 'correct' ? (
                        <TipBox variant="success">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Luar biasa! 🎉</p>
                                    <p>Jawaban kamu benar! Klik "Task Berikutnya" untuk lanjut.</p>
                                </div>
                            </div>
                        </TipBox>
                    ) : (
                        <TipBox variant="warning">
                            <div className="flex items-center gap-2">
                                <XCircle className="w-5 h-5 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Belum tepat 🤔</p>
                                    <p>Cek kembali formula kamu dan coba lagi. Butuh petunjuk?</p>
                                </div>
                            </div>
                        </TipBox>
                    )}
                </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
                {isTransitioning ? (
                    <Button disabled className="flex-1 opacity-70">
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Memuat soal berikutnya...
                    </Button>
                ) : (
                    <>
                        {feedback !== 'correct' && (
                            <Button onClick={onCheck} className="flex-1">
                                ✅ Cek Jawaban
                            </Button>
                        )}

                        {feedback === 'correct' && !isLastTask && onNext && (
                            <Button onClick={onNext} className="flex-1">
                                Task Berikutnya →
                            </Button>
                        )}

                        {feedback === 'correct' && isLastTask && onComplete && (
                            <Button onClick={onComplete} className="flex-1">
                                Selesai & Ikuti Quiz 🎯
                            </Button>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
