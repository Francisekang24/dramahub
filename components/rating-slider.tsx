"use client";

import { Star } from "lucide-react";
import { useState, type MouseEvent } from "react";

type RatingSliderProps = {
    value?: number | null; // /10 scale (e.g. 7.5)
    onChange?: (value: number | null) => void;
};

export function RatingSlider({ value, onChange }: RatingSliderProps) {
    const [internalRating, setInternalRating] = useState<number | null>(null); // /10 scale
    const isControlled = value !== undefined;
    const currentRating10 = isControlled ? value : internalRating; // /10
    const activeRating = (currentRating10 ?? 0) / 2; // convert to 0..5 star space

    const getQuarterStepRating = (
        e: MouseEvent<HTMLButtonElement>,
        star: number
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;

        // 4 values per star: 0.25, 0.5, 0.75, 1.0
        const quarter = Math.min(4, Math.max(1, Math.ceil((x / rect.width) * 4)));
        return (star - 1) + quarter * 0.25; // 0..5, step 0.25
    };

    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const setRating = (starValue: number | null) => {
        const next10 = starValue === null ? null : starValue * 2; // 0..10, step 0.5
        if (!isControlled) setInternalRating(next10);
        onChange?.(next10);
    };

    const displayRating = hoverRating ?? activeRating;

    return (
        <div className="flex items-center gap-3">
            <span className="text-sm text-accent">Rate:</span>
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => {
                    const fillPercent =
                        Math.max(0, Math.min(1, displayRating - (star - 1))) * 100;

                    return (
                        <button
                            key={star}
                            type="button"
                            onClick={(e) => {
                                const nextStar = getQuarterStepRating(e, star);
                                setRating(activeRating === nextStar ? null : nextStar);
                            }}
                            onMouseMove={(e) => setHoverRating(getQuarterStepRating(e, star))}
                            onMouseLeave={() => setHoverRating(null)}
                            className="p-0.5 transition-transform hover:scale-110"
                            aria-label={`Rate ${star} stars`}
                        >
                            <span className="relative block h-5 w-5">
                                <Star className="h-5 w-5 text-muted-foreground/40" />
                                <span
                                    className="absolute inset-0 overflow-hidden"
                                    style={{ width: `${fillPercent}%` }}
                                >
                                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                </span>
                            </span>
                        </button>
                    );
                })}
            </div>

            {currentRating10 !== null && (
                <span className="text-sm text-accent font-medium">
                    {currentRating10 % 1 === 0 ? currentRating10.toFixed(0) : currentRating10.toFixed(1)}/10
                </span>
            )}
        </div>
    );
}