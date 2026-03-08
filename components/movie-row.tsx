"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@radix-ui/themes";
import { MovieCard } from "./movie-card";
import type { Movie } from "@/lib/movies";

interface MovieRowProps {
    title: string;
    movies: Movie[];
    showSeeAll?: boolean;
    href?: string;
}

export function MovieRow({
    title,
    movies,
    showSeeAll = true,
    href,
}: MovieRowProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const amount = direction === "left" ? -500 : 500;

        scrollRef.current.scrollBy({
            left: amount,
            behavior: "smooth",
        });
    };

    return (
        <section className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    {title}
                </h2>

                {showSeeAll && href && (
                    <Button
                        variant="ghost"
                        className="text-muted-foreground hover:text-foreground text-sm"
                        asChild
                    >
                        <Link href={href}>See all</Link>
                    </Button>
                )}
            </div>

            {/* Row container */}
            <div className="relative group">
                {/* LEFT ARROW */}
                <div className="absolute inset-y-0 left-0 z-20 flex items-center">
                    <Button
                        variant="outline"
                        size="3"
                        className="absolute left-2 inset-y-0 m-auto h-fit z-20 
                                    opacity-0 group-hover:opacity-50 hover:opacity-100
                                    transition-opacity duration-200 shadow-lg"
                        onClick={() => scroll("left")}
                        color="cyan"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                </div>

                {/* RIGHT ARROW */}
                <div className="absolute inset-y-0 right-0 z-20 flex items-center">
                    <Button
                        variant="outline"
                        size="3"
                        className="absolute right-2 inset-y-0 m-auto h-fit z-20 
                                    opacity-0 group-hover:opacity-50 hover:opacity-100
                                    transition-opacity duration-200 shadow-lg"
                        onClick={() => scroll("right")}
                        color="gray"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>

                {/* Scroll area */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scroll-smooth"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </section>
    );
}