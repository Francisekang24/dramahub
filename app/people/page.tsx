import Link from "next/link"
import Image from "next/image"
import { directors, producers, actors } from "@/lib/movies"
import { Film, Video, Users } from "lucide-react"

export default function PeoplePage() {
    return (

        <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-8xl mx-auto">
            <div className="space-y-2 mb-8">
                <h1 className="text-3xl font-bold text-foreground">People</h1>
                <p className="text-muted-foreground">
                    Directors, producers, and actors in your collection
                </p>
            </div>

            {/* Directors Section */}
            <section className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <Video className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold text-foreground">Directors</h2>
                    <span className="text-muted-foreground text-sm">({directors.length})</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {directors.map((person) => (
                        <Link
                            key={person.id}
                            href={`/people/${person.id}`}
                            className="group"
                        >
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, 16vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="mt-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors text-center">
                                {person.name}
                            </p>
                            {person.nationality && (
                                <p className="text-xs text-muted-foreground text-center">{person.nationality}</p>
                            )}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Producers Section */}
            <section className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <Film className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold text-foreground">Producers</h2>
                    <span className="text-muted-foreground text-sm">({producers.length})</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {producers.map((person) => (
                        <Link
                            key={person.id}
                            href={`/people/${person.id}`}
                            className="group"
                        >
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, 16vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="mt-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors text-center">
                                {person.name}
                            </p>
                            {person.nationality && (
                                <p className="text-xs text-muted-foreground text-center">{person.nationality}</p>
                            )}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Actors Section */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold text-foreground">Actors</h2>
                    <span className="text-muted-foreground text-sm">({actors.length})</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {actors.map((person) => (
                        <Link
                            key={person.id}
                            href={`/people/${person.id}`}
                            className="group"
                        >
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, 16vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="mt-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors text-center">
                                {person.name}
                            </p>
                            {person.nationality && (
                                <p className="text-xs text-muted-foreground text-center">{person.nationality}</p>
                            )}
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
