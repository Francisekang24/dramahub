"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@radix-ui/themes";
import { Star, Eye, Plus, Play } from "lucide-react";
import type { Movie } from "@/lib/movies";

interface MovieCardProps {
    movie: Movie;
    size?: "tn" | "sm" | "md" | "lg";
}

const originLabels: Record<string, string> = {
    kdrama: "K-Drama",
    cdrama: "C-Drama",
    jdrama: "J-Drama",
    hollywood: "",
    anime: "Anime",
    other: "",
};

export function MovieCard({ movie, size = "md" }: MovieCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(movie.inWatchlist);
    const [isWatched, setIsWatched] = useState(movie.watchCount > 0);

    const sizeClasses = {
        tn: "w-24",
        sm: "w-32",
        md: "w-48",
        lg: "w-64",
    };

    const aspectRatioClasses = {
        tn: "aspect-[2/1]",
        sm: "aspect-[2/3]",
        md: "aspect-[2/3]",
        lg: "aspect-[2/3]",
    };

    const originLabel = originLabels[movie.origin] || movie.origin;

    return (
        <div
            className={`group relative shrink-0 ${sizeClasses[size]} transition-all duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/movie/${movie.id}`} className="block">
                <div
                    className={`relative overflow-hidden rounded-lg bg-muted transition-all duration-300 ${aspectRatioClasses[size]
                        } ${isHovered
                            ? "scale-105 z-20 ring-2 ring-primary shadow-xl shadow-primary/20"
                            : ""
                        }`}
                >
                    {/* Poster */}
                    <Image
                        src={movie.poster}
                        alt={movie.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 160px, 200px"
                    />

                    {/* Gradient Overlay */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="absolute bottom-0 left-0 right-0 p-3 space-y-2">
                            <h3 className="font-semibold text-foreground text-sm line-clamp-2">
                                {movie.title}
                            </h3>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span>{movie.year}</span>

                                <span className="flex items-center gap-1 text-accent">
                                    <Star className="h-3 w-3 fill-accent" />
                                    {movie.ratings.myRating || movie.ratings.imdb || 0}
                                </span>
                            </div>

                            {/* Origin */}
                            {originLabel && (
                                <span className="inline-block px-1.5 py-0.5 text-[10px] rounded bg-primary/20 text-primary font-medium">
                                    {originLabel}
                                </span>
                            )}

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1">
                                {movie.tags.slice(0, 2).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-1.5 py-0.5 text-[10px] rounded bg-muted text-muted-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Watch count */}
                            {movie.watchCount > 0 && (
                                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                    <Play className="h-2.5 w-2.5" />
                                    <span>Watched {movie.watchCount}x</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Rating badge */}
                    <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm">
                        <Star className="h-3 w-3 fill-accent text-accent" />
                        <span className="text-xs font-medium text-foreground">
                            {movie.ratings.myRating || movie.ratings.imdb || 0}
                        </span>
                    </div>

                    {/* Origin badge */}
                    {originLabel && !isHovered && (
                        <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-primary/80 backdrop-blur-sm">
                            <span className="text-[10px] font-medium text-primary-foreground">
                                {originLabel}
                            </span>
                        </div>
                    )}

                    {/* Watched indicator */}
                    {isWatched && (
                        <div className="absolute top-2 left-2 p-1.5 rounded-full bg-primary/90 backdrop-blur-sm">
                            <Eye className="h-4 w-4 text-primary-foreground" />
                        </div>
                    )}

                    {/* Series badge */}
                    {movie.type === "series" && (
                        <div className="absolute top-9 left-2 px-1.5 py-0.5 rounded bg-secondary/80 backdrop-blur-sm">
                            <span className="text-[10px] font-medium text-secondary-foreground">
                                {movie.episodes && `${movie.episodes} eps`}
                            </span>
                        </div>
                    )}
                </div>
            </Link>

            {/* //  Action Buttons
            <div
                className={`absolute top-12 right-2 flex flex-col gap-1 transition-all duration-300 z-30 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                    }`}
            >
                // Watched
                <Button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        setIsWatched(!isWatched);
                    }}
                    
                    title={isWatched ? "Mark as New watch" : "Mark as Watched"}
                    radius="full"
                    color="tomato"
                >
                    <div className="p-1.5 rounded-full bg-primary/90 backdrop-blur-sm">
                        <Eye className="h-4 w-4 text-primary-foreground" />
                    </div>
                </Button>

                // Wishlist
                <Button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        setIsWishlisted(!isWishlisted);
                    }}
                    className={`w-9 h-9 flex items-center justify-center rounded-full backdrop-blur-sm transition-colors ${isWishlisted
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/80 text-muted-foreground hover:text-foreground"
                        }`}
                    title={
                        isWishlisted ? "Remove from Watchlist" : "Add to Watchlist"
                    }
                    radius="full"
                    color="tomato"
                >
                    <Plus
                        className={`h-4 w-4 transition-transform ${isWishlisted ? "rotate-45" : ""
                            }`}
                    />
                </Button>
            </div> */}
        </div>
    );
}


