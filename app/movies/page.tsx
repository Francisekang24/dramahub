"use client";

import { useState, type MouseEvent } from "react";
import { MovieCard } from "@/components/movie-card";
import { moviesList, getAllGenres, getAllYears, getContentOrigins } from "@/lib/movies";
import type { ContentOrigin } from "@/lib/movies";
import { CheckboxGroup, DropdownMenu, Button, Badge } from "@radix-ui/themes";
import { RatingSlider } from "@/components/rating-slider";


export default function MoviesPage() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (genre: string) => {
        setSelected(prev =>
            prev.includes(genre)
                ? prev.filter(g => g !== genre)
                : [...prev, genre]
        );
    };

    const [rating, setRating] = useState<number>(0)

    const clearFilters = () => {
        setSelected([]);
        setRating(0);
    };

    const filteredMovies = moviesList.filter(movie => {
        const rating = movie.ratings.myRating ?? movie.ratings.imdb ?? 0;

        const genreFilters = selected.filter(s => getAllGenres().includes(s));
        const originFilters = selected.filter(s => getContentOrigins().includes(s as ContentOrigin));
        const yearFilters = selected.filter(s => getAllYears().map(String).includes(s));

        const matchesGenre =
            genreFilters.length === 0 ||
            genreFilters.some(g => movie.genres.includes(g));

        const matchesOrigin =
            originFilters.length === 0 ||
            originFilters.includes(movie.origin);

        const matchesYear =
            yearFilters.length === 0 ||
            yearFilters.includes(movie.year.toString());

        const matchesRating = rating >= rating;

        return matchesGenre && matchesOrigin && matchesYear && matchesRating;
    });

    return (
        <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-8xl mx-auto">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">Movies</h1>
                    <p className="text-muted-foreground mt-2">
                        Here are all the movies that I have watched since I started tracking.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-4">
                    <div className="flex items-center gap-4">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button variant="soft" color="tomato">Genres</Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content color="tomato" className="h-36 overflow-y-auto">
                                <DropdownMenu.Group>
                                    {getAllGenres().map(genre => (
                                        <DropdownMenu.CheckboxItem
                                            key={genre}
                                            checked={selected.includes(genre)}
                                            onCheckedChange={() => toggle(genre)}
                                        >
                                            {genre}
                                        </DropdownMenu.CheckboxItem>
                                    ))}
                                </DropdownMenu.Group>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button variant="soft" color="tomato">Origin</Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content color="tomato" className="h-36 overflow-y-auto">
                                <DropdownMenu.Group>
                                    {getContentOrigins().map(origin => (
                                        <DropdownMenu.CheckboxItem
                                            key={origin}
                                            checked={selected.includes(origin)}
                                            onCheckedChange={() => toggle(origin)}
                                        >
                                            {origin}
                                        </DropdownMenu.CheckboxItem>
                                    ))}
                                </DropdownMenu.Group>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button variant="soft" color="tomato">Years</Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content color="tomato" className="h-36 overflow-y-auto">
                                <DropdownMenu.Group>
                                    {getAllYears().map(year => (
                                        <DropdownMenu.CheckboxItem
                                            key={year}
                                            checked={selected.includes(year.toString())}
                                            onCheckedChange={() => toggle(year.toString())}
                                        >
                                            {year}
                                        </DropdownMenu.CheckboxItem>
                                    ))}
                                </DropdownMenu.Group>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>
                    <Badge size="2" color="tomato">
                        <RatingSlider value={rating} onChange={(val) => val !== null && setRating(val)} />
                    </Badge>
                    <Button variant="outline" color="tomato" onClick={clearFilters}>Clear Filters</Button>
                </div>
                <div className="w-full mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 gap-5">
                    {filteredMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </main>
    );
}
