
import { MovieCard } from "@/components/movie-card";
import { anime as animeList } from "@/lib/movies";


export default function AnimePage() {

    return (
        <main>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">Anime</h1>
                    <p className="text-muted-foreground mt-2">
                        Here are all the animes that I have watched since I started tracking.
                    </p>
                </div>
                
                <div className="w-full mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 gap-5">
                    {animeList.map(anime => (
                        <MovieCard key={anime.id} movie={anime} />
                    ))}
                </div>
            </div>
        </main>
    );
}
