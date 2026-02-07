import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number
    max?: number
    showPercentage?: boolean
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ className, value = 0, max = 100, showPercentage = false, ...props }, ref) => {
        const percentage = Math.min((value / max) * 100, 100)

        return (
            <div className="w-full">
                <div
                    ref={ref}
                    className={cn(
                        "relative h-4 w-full overflow-hidden rounded-full bg-bg-secondary",
                        className
                    )}
                    {...props}
                >
                    <div
                        className="h-full bg-duo-green transition-all duration-500 ease-out"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                {showPercentage && (
                    <p className="text-sm text-text-secondary mt-1 text-right">
                        {Math.round(percentage)}%
                    </p>
                )}
            </div>
        )
    }
)
Progress.displayName = "Progress"

export { Progress }
