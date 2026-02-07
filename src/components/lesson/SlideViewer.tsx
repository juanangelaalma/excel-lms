import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react'
import { SlideContent } from './SlideContent'
import { Slide } from '@/types'
import { Button } from '@/components/ui/Button'
import { Progress } from '@/components/ui/Progress'

interface SlideViewerProps {
    slides: Slide[]
    onComplete: () => void
    onSlideChange?: (slideIndex: number) => void
}

export function SlideViewer({ slides, onComplete, onSlideChange }: SlideViewerProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const totalSlides = slides.length
    const progress = ((currentSlide + 1) / totalSlides) * 100

    const goToNextSlide = useCallback(() => {
        if (currentSlide < totalSlides - 1) {
            setDirection(1)
            setCurrentSlide(currentSlide + 1)
        }
    }, [currentSlide, totalSlides])

    const goToPreviousSlide = useCallback(() => {
        if (currentSlide > 0) {
            setDirection(-1)
            setCurrentSlide(currentSlide - 1)
        }
    }, [currentSlide])

    // Fullscreen toggle
    const toggleFullscreen = useCallback(async () => {
        if (!document.fullscreenElement) {
            await containerRef.current?.requestFullscreen()
            setIsFullscreen(true)
        } else {
            await document.exitFullscreen()
            setIsFullscreen(false)
        }
    }, [])

    // Listen for fullscreen changes (e.g., ESC key)
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement)
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }, [])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goToNextSlide()
            if (e.key === 'ArrowLeft') goToPreviousSlide()
            if (e.key === 'f' || e.key === 'F') toggleFullscreen()
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [currentSlide, goToNextSlide, goToPreviousSlide, toggleFullscreen])

    // Notify parent of slide changes
    useEffect(() => {
        if (onSlideChange) {
            onSlideChange(currentSlide)
        }
    }, [currentSlide, onSlideChange])

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
        }),
    }

    return (
        <div
            ref={containerRef}
            className={`max-w-4xl mx-auto ${isFullscreen ? 'bg-bg-secondary p-8 h-screen flex flex-col' : ''}`}
        >
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-text-secondary">
                        Slide {currentSlide + 1} of {totalSlides}
                    </span>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-duo-green">
                            {Math.round(progress)}% Complete
                        </span>
                        <button
                            onClick={toggleFullscreen}
                            className="text-text-secondary hover:text-text-primary transition-colors p-2 hover:bg-gray-100 rounded-lg"
                            title={isFullscreen ? "Exit Fullscreen (F)" : "Fullscreen (F)"}
                        >
                            {isFullscreen ? (
                                <Minimize2 className="w-5 h-5" />
                            ) : (
                                <Maximize2 className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
                <Progress value={progress} />
            </div>

            {/* Slide Content */}
            <div className={`relative ${isFullscreen ? 'flex-1 flex items-center justify-center' : 'mb-8 min-h-[500px]'}`}>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className={`bg-white rounded-xl shadow-md border ${isFullscreen
                            ? 'w-full h-full max-h-[calc(100vh-200px)] p-12 overflow-y-auto flex items-center justify-center'
                            : 'p-8'
                            }`}
                    >
                        <div className="w-full">
                            <SlideContent slide={slides[currentSlide]} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
                <Button
                    variant="outline"
                    onClick={goToPreviousSlide}
                    disabled={currentSlide === 0}
                    className="flex items-center gap-2"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                </Button>

                <div className="text-sm text-text-secondary">
                    Use arrow keys or press F for fullscreen
                </div>

                {currentSlide < totalSlides - 1 ? (
                    <Button
                        onClick={goToNextSlide}
                        className="flex items-center gap-2"
                    >
                        Next
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                ) : (
                    <Button
                        onClick={onComplete}
                        className="flex items-center gap-2"
                    >
                        Continue to Practice
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                )}
            </div>
        </div>
    )
}
