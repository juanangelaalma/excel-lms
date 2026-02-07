export interface Achievement {
    id: string
    title: string
    description: string
    icon: string
    requirement: string
    xpReward: number
    category: 'learning' | 'mastery' | 'dedication' | 'excellence'
}

export const achievements: Achievement[] = [
    {
        id: 'first_step',
        title: 'First Step',
        description: 'Complete your first lesson',
        icon: '🎯',
        requirement: 'Complete 1 pertemuan',
        xpReward: 20,
        category: 'learning',
    },
    {
        id: 'note_taker',
        title: 'Note Taker',
        description: 'Complete 5 lessons with perfect quiz scores',
        icon: '📝',
        requirement: 'Get 100% on 5 quizzes',
        xpReward: 50,
        category: 'excellence',
    },
    {
        id: 'week_warrior',
        title: 'Week Warrior',
        description: 'Maintain a 7-day streak',
        icon: '🔥',
        requirement: '7-day streak',
        xpReward: 40,
        category: 'dedication',
    },
    {
        id: 'quick_learner',
        title: 'Quick Learner',
        description: 'Complete Bulan 1 (Month 1)',
        icon: '⚡',
        requirement: 'Complete first 8 pertemuan',
        xpReward: 100,
        category: 'learning',
    },
    {
        id: 'formula_ninja',
        title: 'Formula Ninja',
        description: 'Master all basic functions',
        icon: '🥷',
        requirement: 'Complete pertemuan 3-7 with 90%+',
        xpReward: 80,
        category: 'mastery',
    },
    {
        id: 'pivot_master',
        title: 'Pivot Master',
        description: 'Ace the Pivot Tables lessons',
        icon: '📊',
        requirement: 'Complete pertemuan 12-13 perfectly',
        xpReward: 80,
        category: 'mastery',
    },
    {
        id: 'perfect_score',
        title: 'Perfect Score',
        description: 'Get 100% on 10 different quizzes',
        icon: '💯',
        requirement: '10 perfect quiz scores',
        xpReward: 100,
        category: 'excellence',
    },
    {
        id: 'marathon_runner',
        title: 'Marathon Runner',
        description: 'Maintain a 30-day streak',
        icon: '🏃',
        requirement: '30-day streak',
        xpReward: 150,
        category: 'dedication',
    },
    {
        id: 'data_analyst',
        title: 'Data Analyst',
        description: 'Complete Bulan 2 (Month 2)',
        icon: '📈',
        requirement: 'Complete pertemuan 9-16',
        xpReward: 150,
        category: 'learning',
    },
    {
        id: 'automation_expert',
        title: 'Automation Expert',
        description: 'Master macros and VBA',
        icon: '🤖',
        requirement: 'Complete pertemuan 21-22 perfectly',
        xpReward: 120,
        category: 'mastery',
    },
    {
        id: 'excel_master',
        title: 'Excel Master',
        description: 'Complete the entire course!',
        icon: '👑',
        requirement: 'Complete all 24 pertemuan',
        xpReward: 300,
        category: 'excellence',
    },
    {
        id: 'unstoppable',
        title: 'Unstoppable',
        description: 'Achieve a 100-day streak',
        icon: '💪',
        requirement: '100-day streak',
        xpReward: 500,
        category: 'dedication',
    },
]

export function getAchievementById(id: string): Achievement | undefined {
    return achievements.find(a => a.id === id)
}

export function getAchievementsByCategory(category: Achievement['category']): Achievement[] {
    return achievements.filter(a => a.category === category)
}
