import Hero from "@/components/hero";
import { recentlyWatched, topRated, kDrama, cDrama, movies, watchlist } from "@/lib/movies";
import { MovieRow } from "@/components/movie-row";

export default function Home() {

    return (
        
            <>
                <Hero movie={movies[1]} />
                <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-8xl mx-auto">
                    <div className="mt-6">
                        {watchlist.length > 0 && <MovieRow title="My Watchlist" movies={watchlist} href="/watchlist" />}
                        <MovieRow title="Recently Watched" movies={recentlyWatched} />
                        <MovieRow title="Top Rated" movies={topRated} />
                        <MovieRow title="K-Drama" movies={kDrama} href="/dramas/kdrama" />
                        <MovieRow title="C-Drama" movies={cDrama} href="/dramas/cdrama" />
                    </div>
                </main>
            </>
            
    );
}
