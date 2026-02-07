import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, BarChart3, User } from 'lucide-react'

export default function MobileNav() {
    const location = useLocation()

    const navItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/learn', label: 'Learn', icon: BookOpen },
        { path: '/progress', label: 'Progress', icon: BarChart3 },
        { path: '/profile', label: 'Profile', icon: User },
    ]

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
            <div className="grid grid-cols-4 h-16">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.path

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="flex flex-col items-center justify-center space-y-1 transition-colors"
                        >
                            <Icon
                                className={`w-6 h-6 ${isActive ? 'text-duo-green' : 'text-text-secondary'}`}
                            />
                            <span
                                className={`text-xs font-medium ${isActive ? 'text-duo-green' : 'text-text-secondary'}`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
