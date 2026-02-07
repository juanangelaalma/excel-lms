import { TipBox } from './TipBox'
import { CodeBlock } from './CodeBlock'
import { Slide } from '@/types' // Import Slide from '@/types'

// No local Slide interface definition needed anymore

interface SlideContentProps {
    slide: Slide
}

export function SlideContent({ slide }: SlideContentProps) {
    switch (slide.type) {
        case 'title':
            return (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center px-4">
                    <h1 className="text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-excel-green to-duo-green bg-clip-text text-transparent">
                        {slide.title}
                    </h1>
                    {slide.content && (
                        <div className="text-2xl text-text-secondary max-w-2xl">
                            {slide.content}
                        </div>
                    )}
                </div>
            )

        case 'content':
            return (
                <div className="space-y-6">
                    {slide.title && (
                        <h2 className="text-3xl font-heading font-bold text-excel-green">
                            {slide.title}
                        </h2>
                    )}
                    <div className="prose prose-lg max-w-none">
                        {slide.content}
                    </div>
                </div>
            )

        case 'example':
            return (
                <div className="space-y-6">
                    {slide.title && (
                        <h2 className="text-3xl font-heading font-bold text-excel-green">
                            {slide.title}
                        </h2>
                    )}
                    {slide.content && (
                        <div className="prose prose-lg max-w-none mb-6">
                            {slide.content}
                        </div>
                    )}
                    {slide.examples && (
                        <div className="space-y-4">
                            {slide.examples.map((example, index) => (
                                <CodeBlock
                                    key={index}
                                    formula={example.formula}
                                    description={example.description}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )

        case 'tip':
            return (
                <div className="space-y-6">
                    {slide.title && (
                        <h2 className="text-3xl font-heading font-bold text-duo-purple">
                            💡 {slide.title}
                        </h2>
                    )}
                    {slide.content && (
                        <div className="prose prose-lg max-w-none mb-6">
                            {slide.content}
                        </div>
                    )}
                    {slide.tips && (
                        <div className="space-y-4">
                            {slide.tips.map((tip, index) => (
                                <TipBox key={index} variant="tip">
                                    {tip}
                                </TipBox>
                            ))}
                        </div>
                    )}
                </div>
            )

        case 'practice':
            return (
                <div className="space-y-6">
                    <h2 className="text-3xl font-heading font-bold text-duo-green">
                        🎮 {slide.title || 'Time to Practice!'}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        {slide.content}
                    </div>
                </div>
            )

        case 'transition':
            return (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center px-4">
                    <h2 className="text-4xl font-heading font-bold text-duo-green mb-6">
                        {slide.title || 'Great Work! 🎉'}
                    </h2>
                    <div className="prose prose-lg max-w-2xl">
                        {slide.content}
                    </div>
                </div>
            )

        default:
            return <div>Unknown slide type</div>
    }
}
