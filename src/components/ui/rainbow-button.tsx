import React from "react"

import { cn } from "../../lib/utils"

interface RainbowButtonProps
    extends
    React.ButtonHTMLAttributes<HTMLButtonElement> { }

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "group relative inline-flex h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl px-8 text-sm font-medium text-primary-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.125rem)_solid_transparent]",
                    "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:blur-[0.75rem] before:transition-all before:duration-500",
                    "hover:before:blur-[1.5rem]",
                    "animate-rainbow before:animate-rainbow",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        )
    }
)

RainbowButton.displayName = "RainbowButton"

export { RainbowButton }
