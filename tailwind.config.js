/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                // Duolingo-inspired brand colors
                'duo-green': '#58CC02',
                'duo-blue': '#1CB0F6',
                'duo-orange': '#FF9600',
                'duo-purple': '#CE82FF',
                'excel-green': '#107C41',

                // Backgrounds
                'bg-primary': '#FFFFFF',
                'bg-secondary': '#F7F7F7',
                'bg-accent': '#FFF9E5',
                'bg-success': '#E8F5E9',
                'bg-error': '#FFEBEE',

                // Text
                'text-primary': '#3C3C3C',
                'text-secondary': '#777777',
                'text-disabled': '#AFAFAF',

                // Feedback
                success: '#58CC02',
                error: '#FF4B4B',
                warning: '#FFC800',
                info: '#1CB0F6',

                // Locked state
                'locked-bg': '#E5E5E5',
                'locked-text': '#AFAFAF',
                'locked-border': '#D1D1D1',
            },
            borderRadius: {
                'sm': '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                'full': '9999px',
            },
            spacing: {
                '1': '4px',
                '2': '8px',
                '3': '12px',
                '4': '16px',
                '6': '24px',
                '8': '32px',
                '12': '48px',
                '16': '64px',
            },
            boxShadow: {
                'sm': '0 2px 4px rgba(0, 0, 0, 0.06)',
                'md': '0 4px 12px rgba(0, 0, 0, 0.08)',
                'success': '0 4px 12px rgba(88, 204, 2, 0.15)',
                'hover': '0 8px 20px rgba(0, 0, 0, 0.12)',
            },
            fontFamily: {
                sans: ['Inter', 'Open Sans', 'system-ui', 'sans-serif'],
                heading: ['Nunito', 'DIN Rounded', 'Quicksand', 'sans-serif'],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
}
