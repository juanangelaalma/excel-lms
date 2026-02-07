export interface SimulatorTask {
    id: number
    title: string
    description: string
    initialData: (string | number | null)[][]
    targetCell: { row: number; col: number }
    expectedResult: number | string
    acceptedFormulas?: string[] // Optional: specific formulas accepted
    hints: string[]
    xpReward: number
}

export const pertemuan03Tasks: SimulatorTask[] = [
    {
        id: 1,
        title: 'Task 1: Calculate Total Sales',
        description: 'In cell B5, calculate the total of all monthly sales using the SUM function.',
        initialData: [
            ['Month', 'Sales'],
            ['January', 50000],
            ['February', 65000],
            ['March', 48000],
            ['Total', null],
        ],
        targetCell: { row: 4, col: 1 },
        expectedResult: 163000,
        acceptedFormulas: ['=SUM(B2:B4)', '=B2+B3+B4'],
        hints: [
            'Use the SUM function to add multiple cells',
            'Try: =SUM(B2:B4)',
            'Make sure you\'re selecting the sales values, not the month names!'
        ],
        xpReward: 15,
    },
    {
        id: 2,
        title: 'Task 2: Calculate Average Score',
        description: 'In cell B7, find the average quiz score using the AVERAGE function.',
        initialData: [
            ['Quiz', 'Score'],
            ['Quiz 1', 85],
            ['Quiz 2', 92],
            ['Quiz 3', 78],
            ['Quiz 4', 88],
            ['Quiz 5', 95],
            ['Average', null],
        ],
        targetCell: { row: 6, col: 1 },
        expectedResult: 87.6,
        acceptedFormulas: ['=AVERAGE(B2:B6)'],
        hints: [
            'Use the AVERAGE function to calculate the mean',
            'Formula: =AVERAGE(B2:B6)',
            'AVERAGE adds all values and divides by count'
        ],
        xpReward: 15,
    },
    {
        id: 3,
        title: 'Task 3: Count Products',
        description: 'In cell B8, count how many products have a price entered using COUNT.',
        initialData: [
            ['Product', 'Price'],
            ['Laptop', 5000000],
            ['Mouse', 150000],
            ['Keyboard', 500000],
            ['Monitor', 2000000],
            ['Headset', 750000],
            ['Webcam', null],
            ['Count', null],
        ],
        targetCell: { row: 7, col: 1 },
        expectedResult: 5,
        acceptedFormulas: ['=COUNT(B2:B7)'],
        hints: [
            'COUNT only counts cells with numbers',
            'Use: =COUNT(B2:B7)',
            'Empty cells are not counted!'
        ],
        xpReward: 15,
    },
    {
        id: 4,
        title: 'Task 4: Find Highest Temperature',
        description: 'In cell B8, find the maximum temperature using the MAX function.',
        initialData: [
            ['Day', 'Temperature (°C)'],
            ['Monday', 28],
            ['Tuesday', 31],
            ['Wednesday', 27],
            ['Thursday', 33],
            ['Friday', 29],
            ['Saturday', 32],
            ['Highest', null],
        ],
        targetCell: { row: 7, col: 1 },
        expectedResult: 33,
        acceptedFormulas: ['=MAX(B2:B7)'],
        hints: [
            'MAX finds the largest value in a range',
            'Use: =MAX(B2:B7)',
            'Which day had the hottest temperature?'
        ],
        xpReward: 15,
    },
    {
        id: 5,
        title: 'Task 5: Find Lowest Price',
        description: 'In cell B6, find the minimum price using the MIN function.',
        initialData: [
            ['Item', 'Price'],
            ['Coffee', 25000],
            ['Tea', 15000],
            ['Juice', 20000],
            ['Water', 10000],
            ['Cheapest', null],
        ],
        targetCell: { row: 5, col: 1 },
        expectedResult: 10000,
        acceptedFormulas: ['=MIN(B2:B5)'],
        hints: [
            'MIN finds the smallest value in a range',
            'Use: =MIN(B2:B5)',
            'Which drink is the most affordable?'
        ],
        xpReward: 15,
    },
]
