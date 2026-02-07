import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'success' | 'error'
    size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-blue disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            default: "bg-duo-green text-white hover:bg-[#4CAF02] shadow-md hover:shadow-success active:scale-95",
            secondary: "bg-duo-blue text-white hover:bg-[#18A5E0] shadow-md hover:shadow-hover active:scale-95",
            outline: "border-2 border-duo-green text-duo-green hover:bg-duo-green hover:text-white",
            ghost: "text-text-primary hover:bg-bg-secondary",
            success: "bg-success text-white hover:bg-[#47B001] shadow-success",
            error: "bg-error text-white hover:bg-[#E64343] shadow-md",
        }

        const sizes = {
            default: "h-12 px-6 py-3 text-base",
            sm: "h-9 px-4 py-2 text-sm",
            lg: "h-14 px-8 py-4 text-lg",
        }

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
