import Link from "next/link"
import { movies, getMoviesByGenre } from "@/lib/movies"


const genres = [
    { name: "Sci-Fi", color: "from-blue-500/20 to-cyan-500/20", borderColor: "border-blue-500/30" },
    { name: "Drama", color: "from-amber-500/20 to-orange-500/20", borderColor: "border-amber-500/30" },
    { name: "Action", color: "from-red-500/20 to-pink-500/20", borderColor: "border-red-500/30" },
    { name: "Comedy", color: "from-yellow-500/20 to-lime-500/20", borderColor: "border-yellow-500/30" },
    { name: "Thriller", color: "from-purple-500/20 to-violet-500/20", borderColor: "border-purple-500/30" },
    { name: "Adventure", color: "from-emerald-500/20 to-teal-500/20", borderColor: "border-emerald-500/30" },
    { name: "Romance", color: "from-pink-500/20 to-rose-500/20", borderColor: "border-pink-500/30" },
    { name: "Animation", color: "from-indigo-500/20 to-blue-500/20", borderColor: "border-indigo-500/30" },
    { name: "Crime", color: "from-slate-500/20 to-gray-500/20", borderColor: "border-slate-500/30" },
    { name: "Fantasy", color: "from-violet-500/20 to-purple-500/20", borderColor: "border-violet-500/30" },
    { name: "Biography", color: "from-stone-500/20 to-zinc-500/20", borderColor: "border-stone-500/30" },
    { name: "History", color: "from-amber-600/20 to-yellow-600/20", borderColor: "border-amber-600/30" },
]

export default function GenresPage() {

    return (

        <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-8xl mx-auto">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">Genres</h1>
                    <p className="text-muted-foreground mt-2">
                        Explore movies and series by genre
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {genres.map((genre) => {
                        const count = getMoviesByGenre(genre.name).length
                        return (
                            <Link
                                key={genre.name}
                                href={`/genres/${genre.name.toLowerCase()}`}
                                className={`group relative overflow-hidden rounded-xl border ${genre.borderColor} bg-gradient-to-br ${genre.color} p-6 transition-all hover:scale-[1.02] hover:shadow-lg`}
                            >
                                <h3 className="text-xl font-bold text-foreground">{genre.name}</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {count} {count === 1 ? "title" : "titles"}
                                </p>
                                <div className="absolute -right-4 -bottom-4 opacity-10 text-8xl font-bold text-foreground pointer-events-none select-none">
                                    {genre.name.charAt(0)}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}