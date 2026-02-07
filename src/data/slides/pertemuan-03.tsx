import { Slide } from '@/components/lesson/SlideContent'

export const pertemuan03Slides: Slide[] = [
    // Slide 1: Title
    {
        id: 1,
        type: 'title',
        title: 'Pertemuan 3',
        content: 'Mathematical Functions: SUM, AVERAGE, COUNT, MAX, MIN',
    },

    // Slide 2: Introduction
    {
        id: 2,
        type: 'content',
        title: 'Why Mathematical Functions?',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    Mathematical functions are the <strong>building blocks</strong> of Excel.
                    They help you analyze data quickly without manual calculations.
                </p>
                <p>In this lesson, you'll learn the 5 most essential functions:</p>
                <ul className="space-y-2">
                    <li>📊 <strong>SUM</strong> - Add numbers together</li>
                    <li>📈 <strong>AVERAGE</strong> - Calculate the mean</li>
                    <li>🔢 <strong>COUNT</strong> - Count numeric values</li>
                    <li>⬆️ <strong>MAX</strong> - Find the highest value</li>
                    <li>⬇️ <strong>MIN</strong> - Find the lowest value</li>
                </ul>
            </div>
        ),
    },

    // Slide 3: SUM Function
    {
        id: 3,
        type: 'content',
        title: '1. SUM - Adding Numbers',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    The <strong>SUM</strong> function adds all numbers in a range.
                </p>
                <p><strong>Syntax:</strong></p>
                <p className="font-mono bg-gray-100 p-2 rounded">
                    =SUM(number1, number2, ...)
                </p>
                <p>You can add individual cells or entire ranges:</p>
            </div>
        ),
    },

    // Slide 4: SUM Examples
    {
        id: 4,
        type: 'example',
        title: 'SUM Examples',
        content: (
            <p>Here are different ways to use SUM:</p>
        ),
        examples: [
            {
                formula: '=SUM(A1, A2, A3)',
                description: 'Add three specific cells',
            },
            {
                formula: '=SUM(A1:A10)',
                description: 'Add all values from A1 to A10',
            },
            {
                formula: '=SUM(A1:A5, C1:C5)',
                description: 'Add multiple ranges together',
            },
            {
                formula: '=SUM(100, 200, A1)',
                description: 'Mix numbers and cell references',
            },
        ],
    },

    // Slide 5: AVERAGE Function
    {
        id: 5,
        type: 'content',
        title: '2. AVERAGE - Finding the Mean',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    The <strong>AVERAGE</strong> function calculates the arithmetic mean
                    (sum divided by count).
                </p>
                <p><strong>Syntax:</strong></p>
                <p className="font-mono bg-gray-100 p-2 rounded">
                    =AVERAGE(number1, number2, ...)
                </p>
                <p>
                    For example, if you have quiz scores 80, 90, 85, AVERAGE returns 85
                    (the sum 255 divided by 3).
                </p>
            </div>
        ),
    },

    // Slide 6: AVERAGE Examples
    {
        id: 6,
        type: 'example',
        title: 'AVERAGE Examples',
        examples: [
            {
                formula: '=AVERAGE(B2:B10)',
                description: 'Calculate average of values in B2 to B10',
            },
            {
                formula: '=AVERAGE(A1, A2, A3)',
                description: 'Average of specific cells',
            },
            {
                formula: '=AVERAGE(80, 90, 85, 95)',
                description: 'Average of direct values (result: 87.5)',
            },
        ],
    },

    // Slide 7: COUNT Function
    {
        id: 7,
        type: 'content',
        title: '3. COUNT - Counting Numbers',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    The <strong>COUNT</strong> function counts how many cells contain numbers.
                </p>
                <p><strong>Syntax:</strong></p>
                <p className="font-mono bg-gray-100 p-2 rounded">
                    =COUNT(value1, value2, ...)
                </p>
                <p className="text-sm text-text-secondary">
                    ⚠️ Important: COUNT only counts numeric values. Empty cells and text are ignored!
                </p>
            </div>
        ),
    },

    // Slide 8: COUNT Examples
    {
        id: 8,
        type: 'example',
        title: 'COUNT Examples',
        content: (
            <p>See how COUNT works with different data:</p>
        ),
        examples: [
            {
                formula: '=COUNT(A1:A10)',
                description: 'Count numeric values in range A1:A10',
            },
            {
                formula: '=COUNT(100, 200, "text", 300)',
                description: 'Result: 3 (text is ignored)',
            },
        ],
    },

    // Slide 9: MAX and MIN
    {
        id: 9,
        type: 'content',
        title: '4 & 5. MAX and MIN - Find Extremes',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    <strong>MAX</strong> finds the largest value, <strong>MIN</strong> finds the smallest.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold mb-2">MAX Syntax:</p>
                        <p className="font-mono bg-gray-100 p-2 rounded text-sm">
                            =MAX(number1, ...)
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold mb-2">MIN Syntax:</p>
                        <p className="font-mono bg-gray-100 p-2 rounded text-sm">
                            =MIN(number1, ...)
                        </p>
                    </div>
                </div>
                <p>These are perfect for finding top/bottom performers, highest/lowest prices, etc.</p>
            </div>
        ),
    },

    // Slide 10: MAX & MIN Examples
    {
        id: 10,
        type: 'example',
        title: 'MAX & MIN Examples',
        examples: [
            {
                formula: '=MAX(A1:A10)',
                description: 'Find the highest value in range',
            },
            {
                formula: '=MIN(A1:A10)',
                description: 'Find the lowest value in range',
            },
            {
                formula: '=MAX(100, 250, 175, 300)',
                description: 'Result: 300',
            },
            {
                formula: '=MIN(100, 250, 175, 300)',
                description: 'Result: 100',
            },
        ],
    },

    // Slide 11: Pro Tips
    {
        id: 11,
        type: 'tip',
        title: 'Pro Tips & Best Practices',
        tips: [
            <>
                <strong>Use ranges instead of individual cells:</strong>
                {' '}=SUM(A1:A100) is cleaner than =SUM(A1,A2,A3,...)
            </>,
            <>
                <strong>Double-check your ranges:</strong>
                {' '}Make sure you're selecting the correct cells. A common mistake is
                selecting one cell too many or too few!
            </>,
            <>
                <strong>Empty cells are ignored:</strong>
                {' '}These functions automatically skip blank cells, which is usually
                what you want.
            </>,
            <>
                <strong>Combine functions:</strong>
                {' '}You can nest functions like =SUM(A1:A5)/COUNT(A1:A5) to manually
                calculate an average.
            </>,
        ],
    },

    // Slide 12: Real-World Example
    {
        id: 12,
        type: 'content',
        title: 'Real-World Example: Sales Analysis',
        content: (
            <div className="space-y-4">
                <p>Imagine you're analyzing monthly sales data:</p>
                <div className="bg-bg-accent p-4 rounded-lg">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b-2">
                                <th className="text-left p-2">Month</th>
                                <th className="text-right p-2">Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="p-2">Jan</td><td className="text-right p-2">$50,000</td></tr>
                            <tr><td className="p-2">Feb</td><td className="text-right p-2">$65,000</td></tr>
                            <tr><td className="p-2">Mar</td><td className="text-right p-2">$48,000</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>You could use:</p>
                <ul className="space-y-2">
                    <li>• <strong>=SUM(B2:B4)</strong> → Total sales: $163,000</li>
                    <li>• <strong>=AVERAGE(B2:B4)</strong> → Avg sales: $54,333</li>
                    <li>• <strong>=MAX(B2:B4)</strong> → Best month: $65,000</li>
                    <li>• <strong>=MIN(B2:B4)</strong> → Worst month: $48,000</li>
                </ul>
            </div>
        ),
    },

    // Slide 13: Practice Time
    {
        id: 13,
        type: 'practice',
        title: 'Ready to Practice!',
        content: (
            <div className="space-y-4">
                <p className="text-lg">
                    You've learned the 5 essential mathematical functions! 🎉
                </p>
                <p>
                    Next, you'll practice using them in our <strong>interactive Excel simulator</strong>.
                </p>
                <p>You'll complete 5 hands-on tasks that will test your understanding:</p>
                <ul className="space-y-2">
                    <li>✅ Task 1: Calculate totals with SUM</li>
                    <li>✅ Task 2: Find averages with AVERAGE</li>
                    <li>✅ Task 3: Count values with COUNT</li>
                    <li>✅ Task 4: Find maximum values with MAX</li>
                    <li>✅ Task 5: Find minimum values with MIN</li>
                </ul>
                <p className="text-duo-green font-semibold">
                    You'll earn <strong>+15 XP</strong> for each correct task!
                </p>
            </div>
        ),
    },
]
