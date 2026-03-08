import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
    Star, Play, Calendar, Clock, ChevronLeft, MessageSquare, Eye, RefreshCcw, Globe, Film, Users, Edit,
} from "lucide-react";

import { getMovieById, getSimilarMovies, getContentOrigins } from "@/lib/movies";
import { Button } from "@radix-ui/themes";
import { MovieRow } from "@/components/movie-row";

const originLabels: Record<string, string> = {
    ...Object.fromEntries(getContentOrigins().map(origin => [origin, origin.toUpperCase()]))
}

interface MoviePageProps {
    params: Promise<{ id: string }>
}

export default async function MoviePage({ params }: MoviePageProps) {

    const { id } = await params
    const movie = getMovieById(id)

    if (!movie) {
        notFound()
    }

    const similarMovies = getSimilarMovies(movie);

    return (

        <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={movie.backdrop || movie.poster}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
            </div>

            {/* Back button and Edit button */}
            <div className="relative container mx-auto px-4 pt-6 flex justify-between items-center">
                <Button
                    variant="classic"
                    size="1"
                    color="tomato"
                    highContrast
                    asChild
                    className="gap-2 text-foreground/80 hover:text-foreground"
                >
                    <Link href="/">
                        <ChevronLeft className="h-4 w-4" />
                        Back
                    </Link>
                </Button>
                <Button
                    variant="classic"
                    size="1"
                    color="tomato"
                    highContrast
                    asChild
                    className="gap-2"
                >
                    <Link href={`/dashboard/movies/${movie.id}`}>
                        <Edit className="h-4 w-4" />
                        Edit
                    </Link>
                </Button>
            </div>
        </section>
    )
}