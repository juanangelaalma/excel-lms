# Excel Master Class - Learning Management System

A Duolingo-inspired, gamified Learning Management System for Excel education featuring interactive spreadsheet simulation, comprehensive gamification, and engaging UX design.

## 🎯 Features

- ✨ **24 Interactive Lessons** - From Excel basics to advanced automation
- 🎮 **In-Browser Excel Simulator** - Practice formulas without opening Excel
- 🏆 **Gamification** - XP, levels, streaks, and achievement badges
- 📊 **Progress Tracking** - Visual dashboards and statistics
- 📱 **Mobile Responsive** - Learn on any device
- 🎨 **Beautiful UI** - Duolingo-inspired design with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
excel-lms/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Base components (Button, Card, etc.)
│   │   ├── layout/      # Header, MobileNav
│   │   └── mascot/      # Excel mascot character
│   ├── pages/           # Route pages
│   ├── contexts/        # React contexts (GameContext)
│   ├── data/            # Curriculum, slides, quizzes
│   ├── lib/             # Utilities
│   └── styles/          # Global styles
├── public/              # Static assets
└── package.json
```

## 🎨 Design System

Built with a Duolingo-inspired color palette:

- **Primary Green** (`#58CC02`) - Main CTAs and success states
- **Blue** (`#1CB0F6`) - Secondary actions and info
- **Orange** (`#FF9600`) - Streaks and highlights
- **Purple** (`#CE82FF`) - Achievements and premium features
- **Excel Green** (`#107C41`) - Brand tie-in

## 📚 Curriculum

### Bulan 1: Fundamentals (8 lessons)
- Excel interface and basics
- Mathematical and logical functions
- VLOOKUP and INDEX-MATCH
- Text functions and cell references

### Bulan 2: Intermediate (8 lessons)
- Date functions and validation
- Conditional aggregation
- Pivot Tables
- Charts and dashboards

### Bulan 3: Advanced (8 lessons)
- Power Query
- Array formulas
- Macros and VBA basics
- Final capstone project

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Formula Engine**: HyperFormula
- **Icons**: Lucide React
- **Routing**: React Router
- **State**: Zustand + React Context
- **Storage**: LocalStorage

## 🎮 Gamification System

- **XP System**: Earn points for completing lessons, quizzes, and simulator tasks
- **Levels**: 6 levels from Beginner to Master
- **Streaks**: Daily activity tracking with streak freezes
- **Achievements**: 12+ badges to unlock
- **Progress Tracking**: Visual dashboards and statistics

## 📱 Mobile Support

Fully responsive design with:
- Bottom navigation bar for mobile
- Touch-friendly interactions
- Optimized layouts for small screens
- Swipe gestures (coming soon)

## 🚧 Development Status

**Current MVP includes:**
- ✅ Complete homepage and navigation
- ✅ Learn dashboard with all 24 lessons
- ✅ Progress tracking page
- ✅ Gamification system (XP, levels, streaks)
- ✅ Responsive design
- ✅ LocalStorage persistence

**Coming Soon:**
- 🚧 Lesson content and slides
- 🚧 Interactive Excel simulator
- 🚧 Quiz functionality
- 🚧 Achievement system
- 🚧 Detailed content for all 24 pertemuan

## 📄 License

MIT License - feel free to use for educational purposes!

## 👤 Author

Created for Excel education with ❤️

---

**Start learning Excel today! 🚀**
