"use client"

import React, { useState, useEffect, useRef } from "react"

import { cn } from "../../lib/utils"

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param width - The width of each square.
 * @param height - The height of each square.
 * @param squares - The number of squares in the grid. The first element is the number of horizontal squares, and the second element is the number of vertical squares.
 * @param className - The class name of the grid.
 * @param squaresClassName - The class name of the squares.
 */
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
    width?: number
    height?: number
    squares?: [number, number] // [horizontal, vertical]
    className?: string
    squaresClassName?: string
}

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
    width = 40,
    height = 40,
    squares,
    className,
    squaresClassName,
    ...props
}: InteractiveGridPatternProps) {
    const containerRef = useRef<SVGSVGElement>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const [hoveredSquare, setHoveredSquare] = useState<number | null>(null)
    const [activeSquares, setActiveSquares] = useState<number[]>([])

    // Manage container resize mapping to dimensions
    useEffect(() => {
        if (!containerRef.current) return
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                })
            }
        })
        resizeObserver.observe(containerRef.current)
        return () => resizeObserver.disconnect()
    }, [])

    // If squares are explicitly passed we use those, otherwise we dynamically fill the container limits
    const horizontal = squares ? squares[0] : Math.ceil(dimensions.width / width)
    const vertical = squares ? squares[1] : Math.ceil(dimensions.height / height)

    // Create a beautiful random sparkling effect, now much more active
    useEffect(() => {
        if (horizontal === 0 || vertical === 0) return;
        const totalSquares = horizontal * vertical;

        const interval = setInterval(() => {
            // Pick more random squares to light up, more frequently
            const count = Math.max(4, Math.floor(Math.random() * 12));
            const newSparks = Array.from({ length: count }).map(() =>
                Math.floor(Math.random() * totalSquares)
            );

            // Activate the new sparks, keeping up to 40 recent ones
            setActiveSquares(prev => [...prev.slice(-30), ...newSparks]);

            // Remove them quickly to trigger the css slow fade decay
            setTimeout(() => {
                setActiveSquares(prev => prev.filter(s => !newSparks.includes(s)));
            }, 100);
        }, 600);

        return () => clearInterval(interval);
    }, [horizontal, vertical]);

    return (
        <svg
            ref={containerRef}
            width={squares ? width * horizontal : "100%"}
            height={squares ? height * vertical : "100%"}
            className={cn(
                "absolute inset-0 h-full w-full border border-gray-400/30",
                className
            )}
            {...props}
        >
            {horizontal > 0 && vertical > 0 && Array.from({ length: horizontal * vertical }).map((_, index) => {
                const x = (index % horizontal) * width
                const y = Math.floor(index / horizontal) * height
                const isActive = hoveredSquare === index || activeSquares.includes(index)

                return (
                    <rect
                        key={index}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        className={cn(
                            "stroke-gray-400/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-2000",
                            isActive ? "fill-gray-100/40" : "fill-transparent",
                            squaresClassName
                        )}
                        onMouseEnter={() => setHoveredSquare(index)}
                        onMouseLeave={() => setHoveredSquare(null)}
                    />
                )
            })}
        </svg>
    )
}
