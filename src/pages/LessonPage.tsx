import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '@/components/layout/Header'
import MobileNav from '@/components/layout/MobileNav'
import { SlideViewer } from '@/components/lesson/SlideViewer'
import { useGame } from '@/contexts/GameContext'
import { getPertemuanById } from '@/data/curriculum'
import { pertemuan01Slides } from '@/data/slides/pertemuan-01'
import { pertemuan02Slides } from '@/data/slides/pertemuan-02'
import { pertemuan03Slides } from '@/data/slides/pertemuan-03'
import { pertemuan04Slides } from '@/data/slides/pertemuan-04'
import { Slide } from '@/types'

// Slide data registry - add more as you create them
const slideRegistry: Record<number, Slide[]> = {
    1: pertemuan01Slides,
    2: pertemuan02Slides,
    3: pertemuan03Slides,
    4: pertemuan04Slides,
    // Add more: 5: pertemuan05Slides, etc.
}

export default function LessonPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addXP } = useGame()
    const [xpAwarded, setXpAwarded] = useState(false)

    const pertemuanId = parseInt(id || '1')
    const pertemuan = getPertemuanById(pertemuanId)
    const slides = slideRegistry[pertemuanId]

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

    if (!slides) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="container py-16 text-center">
                    <h1 className="text-3xl font-bold mb-4">{pertemuan.title}</h1>
                    <p className="text-text-secondary mb-8">
                        Content coming soon! Slides for this pertemuan are still being created.
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

    const handleComplete = () => {
        // Award XP for completing slides (only once)
        if (!xpAwarded) {
            const slideXP = slides.length * 5 // 5 XP per slide
            addXP(slideXP)
            setXpAwarded(true)
        }

        // Navigate to simulator or quiz based on pertemuan config
        if (pertemuan.hasSimulator) {
            navigate(`/simulator/${pertemuanId}`)
        } else {
            navigate(`/quiz/${pertemuanId}`)
        }
    }

    return (
        <div className="min-h-screen bg-bg-secondary">
            <Header />

            <div className="container py-8 pb-24 md:pb-8">
                {/* Lesson Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
                        <span>Pertemuan {pertemuanId}</span>
                        <span>•</span>
                        <span>{pertemuan.duration}</span>
                        <span>•</span>
                        <span>⚡ {pertemuan.xpReward} XP</span>
                    </div>
                    <h1 className="text-4xl font-heading font-bold mb-2">
                        {pertemuan.title}
                    </h1>
                    <p className="text-lg text-text-secondary">
                        {pertemuan.description}
                    </p>
                </div>

                {/* Slide Viewer */}
                <SlideViewer
                    slides={slides}
                    onComplete={handleComplete}
                />
            </div>

            <MobileNav />
        </div>
    )
}
