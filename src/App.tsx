import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LearnPage from './pages/LearnPage'
import LessonPage from './pages/LessonPage'
import SimulatorPage from './pages/SimulatorPage'
import QuizPage from './pages/QuizPage'
import ProgressPage from './pages/ProgressPage'
import { GameProvider } from './contexts/GameContext'

function App() {
    return (
        <GameProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/learn" element={<LearnPage />} />
                    <Route path="/lesson/:id" element={<LessonPage />} />
                    <Route path="/simulator/:id" element={<SimulatorPage />} />
                    <Route path="/quiz/:id" element={<QuizPage />} />
                    <Route path="/progress" element={<ProgressPage />} />
                </Routes>
            </Router>
        </GameProvider>
    )
}

export default App
