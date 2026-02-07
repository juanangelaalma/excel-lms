import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Target, Trophy, Star } from 'lucide-react'
import Header from '@/components/layout/Header'
import MobileNav from '@/components/layout/MobileNav'
import ExelMascot from '@/components/mascot/ExelMascot'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-bg-accent/20 to-white">
            <Header />

            {/* Hero Section */}
            <section className="container py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="mb-8 flex justify-center">
                        <ExelMascot state="happy" size="lg" />
                    </div>

                    <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-excel-green to-duo-green bg-clip-text text-transparent">
                        Excel Master Class
                    </h1>

                    <p className="text-2xl md:text-3xl text-text-primary mb-4 font-heading">
                        Dari Nol ke Excel Pro dalam 3 Bulan!
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8 text-text-secondary">
                        <span className="flex items-center gap-1">
                            <Sparkles className="w-5 h-5 text-duo-green" />
                            24 Lessons
                        </span>
                        <span className="flex items-center gap-1">
                            <Target className="w-5 h-5 text-duo-blue" />
                            Interactive
                        </span>
                        <span className="flex items-center gap-1">
                            <Trophy className="w-5 h-5 text-duo-orange" />
                            Gamified
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/learn">
                            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                                MULAI GRATIS 🚀
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            Lihat Preview
                        </Button>
                    </div>

                    <p className="text-sm text-text-secondary mt-4">
                        100% Gratis · No Signup Required
                    </p>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="container py-16">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">
                    Why Excel Master Class? 🤔
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Card hover className="text-center h-full">
                            <div className="text-5xl mb-4">🎮</div>
                            <h3 className="text-xl font-bold mb-3">Interactive Simulator</h3>
                            <p className="text-text-secondary">
                                Practice in browser! Hands-on Excel simulator tanpa perlu buka Excel.
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card hover className="text-center h-full">
                            <div className="text-5xl mb-4">📊</div>
                            <h3 className="text-xl font-bold mb-3">Real Excel Practice</h3>
                            <p className="text-text-secondary">
                                Build real projects dengan data nyata. Portfolio-ready!
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Card hover className="text-center h-full">
                            <div className="text-5xl mb-4">🏆</div>
                            <h3 className="text-xl font-bold mb-3">Gamified Learning</h3>
                            <p className="text-text-secondary">
                                XP, streaks, achievements! Belajar sambil main game.
                            </p>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Learning Path */}
            <section className="container py-16 bg-bg-secondary/30 rounded-3xl my-16">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">
                    Your 3-Month Journey 🗺️
                </h2>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-duo-green text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-bold mb-2">BULAN 1</h3>
                            <p className="text-lg font-semibold text-duo-green mb-3">📚 Basics</p>
                            <ul className="text-sm text-text-secondary space-y-1">
                                <li>• Interface</li>
                                <li>• Formulas</li>
                                <li>• Functions</li>
                            </ul>
                            <p className="text-sm font-semibold mt-3">8 lessons</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-duo-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-bold mb-2">BULAN 2</h3>
                            <p className="text-lg font-semibold text-duo-blue mb-3">📊 Analysis</p>
                            <ul className="text-sm text-text-secondary space-y-1">
                                <li>• Pivot Tables</li>
                                <li>• Charts</li>
                                <li>• Data Viz</li>
                            </ul>
                            <p className="text-sm font-semibold mt-3">8 lessons</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-duo-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-bold mb-2">BULAN 3</h3>
                            <p className="text-lg font-semibold text-duo-orange mb-3">🤖 Automation</p>
                            <ul className="text-sm text-text-secondary space-y-1">
                                <li>• Power Query</li>
                                <li>• Macros</li>
                                <li>• Final Project</li>
                            </ul>
                            <p className="text-sm font-semibold mt-3">8 lessons</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="container py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xl mb-6">
                        Join <span className="font-bold text-duo-green">2,847 learners</span> already mastering Excel! 🌟
                    </p>

                    <div className="flex justify-center items-center space-x-2 mb-4">
                        <div className="flex -space-x-2">
                            {['👨', '👩', '👨‍💼', '👩‍💼', '🧑'].map((emoji, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-duo-green/20 flex items-center justify-center border-2 border-white">
                                    {emoji}
                                </div>
                            ))}
                        </div>
                        <span className="text-text-secondary">+2,842 more</span>
                    </div>

                    <div className="flex justify-center items-center space-x-2 text-duo-orange">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-current" />
                        ))}
                        <span className="ml-2 text-text-primary font-semibold">4.9/5.0</span>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="container py-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-duo-green to-duo-blue rounded-3xl p-12 text-center text-white"
                >
                    <h2 className="text-4xl font-heading font-bold mb-4">
                        Ready to become an Excel Expert? 🚀
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Start your learning journey today!
                    </p>
                    <Link to="/learn">
                        <Button size="lg" className="bg-white text-duo-green hover:bg-gray-100 text-lg px-12">
                            MULAI BELAJAR GRATIS
                        </Button>
                    </Link>
                    <p className="text-sm mt-4 opacity-75">
                        No credit card · No signup · Start instantly
                    </p>
                </motion.div>
            </section>

            <MobileNav />
        </div>
    )
}
