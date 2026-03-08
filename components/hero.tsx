"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Plus, Star, Info } from "lucide-react";
import { Button } from "@radix-ui/themes";
import type { Movie } from "@/lib/movies";

interface HeroProps {
    movie: Movie;
}

export default function Hero({ movie }: HeroProps) {

    return (
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={movie.backdrop || movie.poster}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/20" />
            </div>
            <div className="h-[60vh] md:h-[70vh] w-full px-4 sm:px-6 lg:px-8 py-8 max-w-8xl mx-auto">
                <div className="relative z-10 flex flex-col justify-end h-full ">
                    <div className="max-w-2xl space-y-4 ">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1 text-accent font-medium">
                                <Star className="h-4 w-4 fill-accent" />
                                {movie.ratings.myRating || movie.ratings.imdb}
                            </span>
                            <span>{movie.year}</span>
                            <span>{movie.runtime}</span>
                            {movie.ratings.imdb && (
                                <span className="flex items-center gap-1">
                                    <span className="text-[10px] bg-yellow-500/80 text-black px-1 rounded font-bold">IMDb</span>
                                    {movie.ratings.imdb}
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight text-balance">
                            {movie.title}
                        </h1>

                        <p className="text-muted-foreground text-base md:text-lg line-clamp-3 max-w-xl">
                            {movie.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {movie.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <Button asChild size="3" color="tomato" className="gap-2">
                                <Link href={`/movie/${movie.id}`}>
                                    <Info className="h-5 w-5" />
                                    View Details
                                </Link>
                            </Button>
                            {movie.trailerUrl && (
                                <Button
                                    variant="outline"
                                    size="3"
                                    className="gap-2"
                                    asChild
                                    color="tomato"
                                >
                                    <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer">
                                        <Play className="h-5 w-5" />
                                        Watch Trailer
                                    </a>
                                </Button>
                            )}
                            <Button
                                variant="outline"
                                size="3"
                                className="gap-2"
                                color="tomato"
                            >
                                <Plus className="h-5 w-5" />
                                Watchlist
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}