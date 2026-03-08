// Types for content origin (K-Drama, C-Drama, J-Drama, etc.)
export type ContentOrigin = "kdrama" | "cdrama" | "jdrama" | "hollywood" | "bollywood" | "anime" | "other"
export type ContentType = "movie" | "series" | "anime"
export type ContentCategory = "film" | "drama" | "animation" | "documentary"

// Person types
export interface Person {
  id: string
  name: string
  image: string
  birthDate?: string
  nationality?: string
  bio?: string
}

export interface CastMember extends Person {
  character: string
}

// Rating structure
export interface DetailedRatings {
  acting: number
  visual: number
  story: number
  conclusion: number
  rewatchability: number
  overall: number // Calculated average
}

export interface ExternalRatings {
  imdb?: number
  rottenTomatoes?: number
  myRating?: number
}

// Watch tracking
export interface WatchRecord {
  date: string
  notes?: string
}

// Genre and Category types
export interface Genre {
  id: string
  name: string
  description?: string
  subgenres?: string[]
}

export interface Category {
  id: string
  name: string
  description?: string
}

// Main content interface
export interface Movie {
  id: string
  title: string
  originalTitle?: string
  year: number
  releaseDate?: string
  type: ContentType
  origin: ContentOrigin
  category?: ContentCategory
  poster: string
  backdrop?: string
  tags: string[]
  genres: string[]
  subgenres?: string[]
  description: string
  
  // People
  directors: Person[]
  producers: Person[]
  cast: CastMember[]
  
  // Runtime
  runtime: string
  episodes?: number
  seasons?: number
  
  // Ratings
  ratings: ExternalRatings
  detailedRatings?: DetailedRatings
  
  // Watch tracking
  watchedDates: WatchRecord[]
  lastWatchedDate?: string
  watchCount: number
  
  // Watchlist
  inWatchlist: boolean
  watchlistAddedDate?: string
  
  // User data
  personalReview?: string
  isLiked: boolean
  
  // Media
  trailerUrl?: string
}

// People database
export const directors: Person[] = [
  { id: "d1", name: "Denis Villeneuve", image: "https://image.tmdb.org/t/p/w185/PlFkRD7hnY2X7PGKr1hdiV6vZF.jpg", nationality: "Canadian" },
  { id: "d2", name: "Christopher Nolan", image: "https://image.tmdb.org/t/p/w185/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg", nationality: "British" },
  { id: "d3", name: "Yorgos Lanthimos", image: "https://image.tmdb.org/t/p/w185/w1CtOtbqAQK7pCfKn2JgCHilZKd.jpg", nationality: "Greek" },
  { id: "d4", name: "Bong Joon-ho", image: "https://image.tmdb.org/t/p/w185/xNOFS3gqL7Qr8V2oZUi0P7oaHik.jpg", nationality: "South Korean" },
  { id: "d5", name: "Daniel Kwan", image: "https://image.tmdb.org/t/p/w185/5qizJkAWKwBvraY4DmLU8x1ujAv.jpg", nationality: "American" },
  { id: "d6", name: "Hayao Miyazaki", image: "https://image.tmdb.org/t/p/w185/mG3cfxtA5jqDcQO4tYWzLQnfhkK.jpg", nationality: "Japanese" },
  { id: "d7", name: "Matt Reeves", image: "https://image.tmdb.org/t/p/w185/ooX3H4iQp0z4pHMfOxKBDZLoCw.jpg", nationality: "American" },
  { id: "d8", name: "Lee Jeong-hyo", image: "https://image.tmdb.org/t/p/w185/3VQa5pF7lNVr6xYFMHMiSKK1NR.jpg", nationality: "South Korean" },
  { id: "d9", name: "Hwang Dong-hyuk", image: "https://image.tmdb.org/t/p/w185/6oHlOeJFbfwmEhpIK2H3H5q5nXZ.jpg", nationality: "South Korean" },
  { id: "d10", name: "Wes Anderson", image: "https://image.tmdb.org/t/p/w185/sQxDGE4GEF0b8dqKmEX9G7W3ckd.jpg", nationality: "American" },
  { id: "d11", name: "Frank Darabont", image: "https://image.tmdb.org/t/p/w185/7LqmE3p1XTwCdNCOmBxovq210Qo.jpg", nationality: "American" },
  { id: "d12", name: "Makoto Shinkai", image: "https://image.tmdb.org/t/p/w185/hAz0mWR3s4fDjqWl2Cdmjx9PKKN.jpg", nationality: "Japanese" },
]

export const producers: Person[] = [
  { id: "p1", name: "Emma Thomas", image: "https://image.tmdb.org/t/p/w185/rB4HaX1qU2f6p5D1pX3w8I1KN4B.jpg", nationality: "British" },
  { id: "p2", name: "Mary Parent", image: "https://image.tmdb.org/t/p/w185/jMiI58ALW5p9fj0hZGKBHT1tzMy.jpg", nationality: "American" },
  { id: "p3", name: "Toshio Suzuki", image: "https://image.tmdb.org/t/p/w185/5e2TN7rJXNLB7bKc8k6j9G5W5sZ.jpg", nationality: "Japanese" },
]

export const actors: Person[] = [
  { id: "a1", name: "Timothée Chalamet", image: "https://image.tmdb.org/t/p/w185/BE2sdjpgsa2rNTFa66f7upkaOP.jpg", nationality: "American" },
  { id: "a2", name: "Zendaya", image: "https://image.tmdb.org/t/p/w185/oayZv8f8MnUoQgMwxnqwNgwYazh.jpg", nationality: "American" },
  { id: "a3", name: "Cillian Murphy", image: "https://image.tmdb.org/t/p/w185/dm6V24NjjvjMiCtbMkc8Y2GO7yk.jpg", nationality: "Irish" },
  { id: "a4", name: "Emma Stone", image: "https://image.tmdb.org/t/p/w185/2hwXbPW2ffnXUe1Um0WXHG0cTwb.jpg", nationality: "American" },
  { id: "a5", name: "Song Kang-ho", image: "https://image.tmdb.org/t/p/w185/dXuPpS2TLAguxdoYxlqC1JrPsyw.jpg", nationality: "South Korean" },
  { id: "a6", name: "Michelle Yeoh", image: "https://image.tmdb.org/t/p/w185/5WIS2VPNQN7VH1C4aBPEMBqSX9f.jpg", nationality: "Malaysian" },
  { id: "a7", name: "Robert Pattinson", image: "https://image.tmdb.org/t/p/w185/wDoLvVvTTbwqS4cRNvH1U6fLw1P.jpg", nationality: "British" },
  { id: "a8", name: "Hyun Bin", image: "https://image.tmdb.org/t/p/w185/qXPipLWtOUBqkgeHHBcRmwgHjCZ.jpg", nationality: "South Korean" },
  { id: "a9", name: "Son Ye-jin", image: "https://image.tmdb.org/t/p/w185/yv0HQ3sGOz0aTXY1hLlnv9P6Jq6.jpg", nationality: "South Korean" },
  { id: "a10", name: "Lee Jung-jae", image: "https://image.tmdb.org/t/p/w185/pVQ96T6x1bhDIGvjCSpVxprjfGo.jpg", nationality: "South Korean" },
]

// Genres database
export const genres: Genre[] = [
  { id: "g1", name: "Sci-Fi", subgenres: ["Space Opera", "Cyberpunk", "Time Travel", "Dystopian"] },
  { id: "g2", name: "Drama", subgenres: ["Family Drama", "Legal Drama", "Medical Drama", "Period Drama"] },
  { id: "g3", name: "Comedy", subgenres: ["Romantic Comedy", "Dark Comedy", "Slapstick", "Satire"] },
  { id: "g4", name: "Action", subgenres: ["Martial Arts", "Superhero", "Spy", "War"] },
  { id: "g5", name: "Thriller", subgenres: ["Psychological", "Crime", "Mystery", "Horror"] },
  { id: "g6", name: "Romance", subgenres: ["Melodrama", "Historical Romance", "Contemporary"] },
  { id: "g7", name: "Animation", subgenres: ["Anime", "CGI", "Stop Motion", "2D"] },
  { id: "g8", name: "Fantasy", subgenres: ["High Fantasy", "Urban Fantasy", "Dark Fantasy"] },
  { id: "g9", name: "Horror", subgenres: ["Supernatural", "Slasher", "Psychological Horror"] },
  { id: "g10", name: "Documentary", subgenres: ["Nature", "True Crime", "Historical", "Social"] },
]

// Categories database
export const categories: Category[] = [
  { id: "c1", name: "Recently Watched" },
  { id: "c2", name: "Top Rated" },
  { id: "c3", name: "K-Drama" },
  { id: "c4", name: "C-Drama" },
  { id: "c5", name: "J-Drama" },
  { id: "c6", name: "Anime" },
  { id: "c7", name: "Sci-Fi Favorites" },
  { id: "c8", name: "Award Winners" },
]

// Calculate average rating from detailed ratings
export function calculateOverallRating(ratings: Omit<DetailedRatings, 'overall'>): number {
  const values = [ratings.acting, ratings.visual, ratings.story, ratings.conclusion, ratings.rewatchability]
  return Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 10) / 10
}

// Main movies database
export const movies: Movie[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    year: 2024,
    releaseDate: "2024-03-01",
    type: "movie",
    origin: "hollywood",
    poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    tags: ["Sci-Fi", "Adventure", "Drama"],
    genres: ["Sci-Fi", "Drama"],
    subgenres: ["Space Opera"],
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    directors: [directors[0]],
    producers: [producers[1]],
    cast: [
      { ...actors[0], character: "Paul Atreides" },
      { ...actors[1], character: "Chani" },
    ],
    runtime: "166 min",
    ratings: { imdb: 8.8, rottenTomatoes: 93, myRating: 9.0 },
    detailedRatings: { acting: 9, visual: 10, story: 9, conclusion: 8, rewatchability: 9, overall: 9 },
    watchedDates: [{ date: "2024-03-15", notes: "Opening night!" }],
    lastWatchedDate: "2024-03-15",
    watchCount: 1,
    inWatchlist: false,
    personalReview: "A visual masterpiece that expands on the first film beautifully.",
    isLiked: true,
    trailerUrl: "https://www.youtube.com/watch?v=Way9Dexny3w",
  },
  {
    id: "2",
    title: "Oppenheimer",
    year: 2023,
    releaseDate: "2023-07-21",
    type: "movie",
    origin: "hollywood",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    tags: ["Drama", "Biography", "History"],
    genres: ["Drama"],
    subgenres: ["Period Drama"],
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    directors: [directors[1]],
    producers: [producers[0]],
    cast: [
      { ...actors[2], character: "J. Robert Oppenheimer" },
    ],
    runtime: "180 min",
    ratings: { imdb: 8.5, rottenTomatoes: 93, myRating: 8.5 },
    detailedRatings: { acting: 10, visual: 9, story: 9, conclusion: 8, rewatchability: 7, overall: 8.6 },
    watchedDates: [{ date: "2023-07-25" }],
    lastWatchedDate: "2023-07-25",
    watchCount: 1,
    inWatchlist: false,
    personalReview: "Nolan at his finest. Incredible performances.",
    isLiked: true,
  },
  {
    id: "3",
    title: "Poor Things",
    year: 2023,
    releaseDate: "2023-12-08",
    type: "movie",
    origin: "hollywood",
    poster: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
    tags: ["Comedy", "Drama", "Sci-Fi"],
    genres: ["Comedy", "Drama"],
    subgenres: ["Dark Comedy"],
    description: "The incredible tale about the fantastical evolution of Bella Baxter.",
    directors: [directors[2]],
    producers: [],
    cast: [
      { ...actors[3], character: "Bella Baxter" },
    ],
    runtime: "141 min",
    ratings: { imdb: 8.0, rottenTomatoes: 92 },
    watchedDates: [],
    watchCount: 0,
    inWatchlist: true,
    watchlistAddedDate: "2024-01-15",
    isLiked: false,
  },
  {
    id: "4",
    title: "Parasite",
    year: 2019,
    releaseDate: "2019-05-30",
    type: "movie",
    origin: "kdrama",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    tags: ["Thriller", "Drama", "Comedy"],
    genres: ["Thriller", "Drama"],
    subgenres: ["Psychological"],
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    directors: [directors[3]],
    producers: [],
    cast: [
      { ...actors[4], character: "Ki-taek" },
    ],
    runtime: "132 min",
    ratings: { imdb: 8.5, rottenTomatoes: 99, myRating: 9.5 },
    detailedRatings: { acting: 10, visual: 9, story: 10, conclusion: 10, rewatchability: 9, overall: 9.6 },
    watchedDates: [{ date: "2020-02-10" }, { date: "2021-06-15" }],
    lastWatchedDate: "2021-06-15",
    watchCount: 2,
    inWatchlist: false,
    personalReview: "A genre-defying masterpiece. Deserved every Oscar.",
    isLiked: true,
  },
  {
    id: "5",
    title: "Everything Everywhere All at Once",
    year: 2022,
    releaseDate: "2022-03-11",
    type: "movie",
    origin: "hollywood",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fhquRW28vRZHr26orSaFFnhYIA0.jpg",
    tags: ["Action", "Adventure", "Comedy"],
    genres: ["Action", "Comedy"],
    subgenres: ["Martial Arts"],
    description: "An aging Chinese immigrant is swept up in an insane adventure across multiverses.",
    directors: [directors[4]],
    producers: [],
    cast: [
      { ...actors[5], character: "Evelyn Wang" },
    ],
    runtime: "139 min",
    ratings: { imdb: 8.0, rottenTomatoes: 94, myRating: 8.5 },
    watchedDates: [{ date: "2022-04-20" }],
    lastWatchedDate: "2022-04-20",
    watchCount: 1,
    inWatchlist: false,
    isLiked: true,
  },
  {
    id: "6",
    title: "Spirited Away",
    year: 2001,
    releaseDate: "2001-07-20",
    type: "anime",
    origin: "jdrama",
    category: "animation",
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/6TrRCsvaKfuXtN91W3aLHPR4tG7.jpg",
    tags: ["Animation", "Fantasy", "Adventure"],
    genres: ["Animation", "Fantasy"],
    subgenres: ["Anime"],
    description: "During her family's move, a sullen 10-year-old girl wanders into a world ruled by gods and spirits.",
    directors: [directors[5]],
    producers: [producers[2]],
    cast: [],
    runtime: "125 min",
    ratings: { imdb: 8.6, rottenTomatoes: 97, myRating: 9.0 },
    detailedRatings: { acting: 8, visual: 10, story: 9, conclusion: 9, rewatchability: 10, overall: 9.2 },
    watchedDates: [{ date: "2005-01-10" }, { date: "2015-08-20" }, { date: "2022-12-25" }],
    lastWatchedDate: "2022-12-25",
    watchCount: 3,
    inWatchlist: false,
    isLiked: true,
  },
  {
    id: "7",
    title: "The Batman",
    year: 2022,
    releaseDate: "2022-03-04",
    type: "movie",
    origin: "hollywood",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    tags: ["Action", "Crime", "Drama"],
    genres: ["Action", "Drama"],
    subgenres: ["Superhero"],
    description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman investigates.",
    directors: [directors[6]],
    producers: [],
    cast: [
      { ...actors[6], character: "Bruce Wayne / Batman" },
    ],
    runtime: "176 min",
    ratings: { imdb: 7.8, rottenTomatoes: 85, myRating: 8.0 },
    watchedDates: [{ date: "2022-03-10" }],
    lastWatchedDate: "2022-03-10",
    watchCount: 1,
    inWatchlist: false,
    personalReview: "Dark, moody, and a fresh take on the character.",
    isLiked: true,
  },
  {
    id: "8",
    title: "Crash Landing on You",
    year: 2019,
    releaseDate: "2019-12-14",
    type: "series",
    origin: "kdrama",
    poster: "https://image.tmdb.org/t/p/w500/aJCt8CTlwgYCSOdEY6sGBZ35Vb9.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/aJCt8CTlwgYCSOdEY6sGBZ35Vb9.jpg",
    tags: ["Romance", "Comedy", "Drama"],
    genres: ["Romance", "Drama"],
    subgenres: ["Melodrama"],
    description: "A South Korean heiress crash-lands in North Korea where she meets an army officer.",
    directors: [directors[7]],
    producers: [],
    cast: [
      { ...actors[7], character: "Ri Jeong-hyeok" },
      { ...actors[8], character: "Yoon Se-ri" },
    ],
    runtime: "70 min/ep",
    episodes: 16,
    seasons: 1,
    ratings: { imdb: 8.7, rottenTomatoes: 100, myRating: 9.5 },
    detailedRatings: { acting: 10, visual: 9, story: 10, conclusion: 9, rewatchability: 10, overall: 9.6 },
    watchedDates: [{ date: "2020-05-01" }, { date: "2023-02-14" }],
    lastWatchedDate: "2023-02-14",
    watchCount: 2,
    inWatchlist: false,
    personalReview: "The perfect romantic K-Drama. Heartwarming and emotional.",
    isLiked: true,
  },
  {
    id: "9",
    title: "Squid Game",
    year: 2021,
    releaseDate: "2021-09-17",
    type: "series",
    origin: "kdrama",
    poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/qw3J9cNeLioOLoR68WX7z79aCdK.jpg",
    tags: ["Thriller", "Drama", "Action"],
    genres: ["Thriller", "Drama"],
    subgenres: ["Psychological"],
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in deadly children's games.",
    directors: [directors[8]],
    producers: [],
    cast: [
      { ...actors[9], character: "Seong Gi-hun" },
    ],
    runtime: "55 min/ep",
    episodes: 9,
    seasons: 2,
    ratings: { imdb: 8.0, rottenTomatoes: 95, myRating: 8.0 },
    watchedDates: [{ date: "2021-10-01" }],
    lastWatchedDate: "2021-10-01",
    watchCount: 1,
    inWatchlist: false,
    isLiked: true,
  },
  {
    id: "10",
    title: "Interstellar",
    year: 2014,
    releaseDate: "2014-11-07",
    type: "movie",
    origin: "hollywood",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    tags: ["Sci-Fi", "Adventure", "Drama"],
    genres: ["Sci-Fi", "Drama"],
    subgenres: ["Space Opera", "Time Travel"],
    description: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
    directors: [directors[1]],
    producers: [producers[0]],
    cast: [],
    runtime: "169 min",
    ratings: { imdb: 8.7, rottenTomatoes: 73, myRating: 9.5 },
    detailedRatings: { acting: 9, visual: 10, story: 10, conclusion: 10, rewatchability: 10, overall: 9.8 },
    watchedDates: [{ date: "2014-11-15" }, { date: "2020-03-20" }],
    lastWatchedDate: "2020-03-20",
    watchCount: 2,
    inWatchlist: false,
    personalReview: "Mind-bending and emotionally powerful. A modern sci-fi classic.",
    isLiked: true,
  },
  {
    id: "11",
    title: "Your Name",
    year: 2016,
    releaseDate: "2016-08-26",
    type: "anime",
    origin: "jdrama",
    category: "animation",
    poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
    tags: ["Animation", "Romance", "Fantasy"],
    genres: ["Animation", "Romance"],
    subgenres: ["Anime"],
    description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    directors: [directors[11]],
    producers: [],
    cast: [],
    runtime: "106 min",
    ratings: { imdb: 8.4, rottenTomatoes: 98, myRating: 9.0 },
    watchedDates: [{ date: "2017-04-10" }],
    lastWatchedDate: "2017-04-10",
    watchCount: 1,
    inWatchlist: false,
    isLiked: true,
  },
  {
    id: "12",
    title: "The Shawshank Redemption",
    year: 1994,
    releaseDate: "1994-09-23",
    type: "movie",
    origin: "hollywood",
    poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    tags: ["Drama", "Crime"],
    genres: ["Drama"],
    subgenres: ["Prison Drama"],
    description: "Two imprisoned men bond over years, finding solace and redemption through acts of common decency.",
    directors: [directors[10]],
    producers: [],
    cast: [],
    runtime: "142 min",
    ratings: { imdb: 9.3, rottenTomatoes: 91, myRating: 10 },
    detailedRatings: { acting: 10, visual: 8, story: 10, conclusion: 10, rewatchability: 10, overall: 9.6 },
    watchedDates: [{ date: "2010-06-20" }, { date: "2018-01-01" }, { date: "2023-09-23" }],
    lastWatchedDate: "2023-09-23",
    watchCount: 3,
    inWatchlist: false,
    personalReview: "Timeless. One of the greatest films ever made.",
    isLiked: true,
  },
  {
    id: "13",
    title: "Demon Slayer: Mugen Train",
    year: 2020,
    releaseDate: "2020-10-16",
    type: "anime",
    origin: "jdrama",
    category: "animation",
    poster: "https://image.tmdb.org/t/p/w500/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
    tags: ["Animation", "Action", "Fantasy"],
    genres: ["Animation", "Action"],
    subgenres: ["Anime", "Martial Arts"],
    description: "Tanjiro and his comrades embark on a new mission aboard the Mugen Train.",
    directors: [],
    producers: [],
    cast: [],
    runtime: "117 min",
    ratings: { imdb: 8.2, rottenTomatoes: 98, myRating: 8.5 },
    watchedDates: [{ date: "2021-05-20" }],
    lastWatchedDate: "2021-05-20",
    watchCount: 1,
    inWatchlist: false,
    isLiked: true,
  },
  {
    id: "14",
    title: "Vincenzo",
    year: 2021,
    releaseDate: "2021-02-20",
    type: "series",
    origin: "kdrama",
    poster: "https://image.tmdb.org/t/p/w500/dvXJgEDQXhL9Ouot2WkBHpQiHGd.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/q5RCvRLpVQB8E0Lj7y3lJQcSQVG.jpg",
    tags: ["Drama", "Comedy", "Crime"],
    genres: ["Drama", "Comedy"],
    subgenres: ["Legal Drama", "Dark Comedy"],
    description: "A Korean-Italian mafia lawyer gives up his position to settle a score in Korea.",
    directors: [],
    producers: [],
    cast: [],
    runtime: "80 min/ep",
    episodes: 20,
    seasons: 1,
    ratings: { imdb: 8.4, rottenTomatoes: 100, myRating: 9.0 },
    watchedDates: [{ date: "2021-05-10" }],
    lastWatchedDate: "2021-05-10",
    watchCount: 1,
    inWatchlist: false,
    isLiked: true,
  },
  {
    id: "15",
    title: "Word of Honor",
    year: 2021,
    releaseDate: "2021-02-22",
    type: "series",
    origin: "cdrama",
    poster: "https://image.tmdb.org/t/p/w500/yTn3nHoHSPK5NR7xqALfNpJLK6s.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/wTG1t38KNE8EWPQW7hTTEWW5Qf3.jpg",
    tags: ["Action", "Drama", "Romance"],
    genres: ["Action", "Drama"],
    subgenres: ["Martial Arts", "Historical Romance"],
    description: "The story of two men from opposite walks of life who become soulmates.",
    directors: [],
    producers: [],
    cast: [],
    runtime: "45 min/ep",
    episodes: 36,
    seasons: 1,
    ratings: { imdb: 8.6, myRating: 8.5 },
    watchedDates: [{ date: "2021-06-15" }],
    lastWatchedDate: "2021-06-15",
    watchCount: 1,
    inWatchlist: false,
    isLiked: true,
  },
  {
    id: "16",
    title: "The Untamed",
    year: 2019,
    releaseDate: "2019-06-27",
    type: "series",
    origin: "cdrama",
    poster: "https://image.tmdb.org/t/p/w500/bWgXp6I9dN7l6M2r4NZJfDNJdl2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7PwJMdVNxJmJKa5rLrN8H9R1xP7.jpg",
    tags: ["Fantasy", "Drama", "Romance"],
    genres: ["Fantasy", "Drama"],
    subgenres: ["High Fantasy"],
    description: "Two cultivators become soulmates while investigating mysteries in a world of martial arts.",
    directors: [],
    producers: [],
    cast: [],
    runtime: "45 min/ep",
    episodes: 50,
    seasons: 1,
    ratings: { imdb: 8.9, myRating: 9.0 },
    watchedDates: [{ date: "2020-08-10" }],
    lastWatchedDate: "2020-08-10",
    watchCount: 1,
    inWatchlist: false,
    isLiked: true,
  },
  {
    id: "17",
    title: "Alice in Borderland",
    year: 2020,
    releaseDate: "2020-12-10",
    type: "series",
    origin: "jdrama",
    poster: "https://image.tmdb.org/t/p/w500/20mOwAAPwZ1vLQkw0fvuQHiG7bO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bKxiLRPVWe2nZXCzt6JPqMYXOxF.jpg",
    tags: ["Thriller", "Sci-Fi", "Action"],
    genres: ["Thriller", "Sci-Fi"],
    subgenres: ["Dystopian"],
    description: "A gamer and his friends find themselves in a parallel Tokyo where they must compete in dangerous games.",
    directors: [],
    producers: [],
    cast: [],
    runtime: "50 min/ep",
    episodes: 16,
    seasons: 2,
    ratings: { imdb: 7.7, rottenTomatoes: 89, myRating: 8.0 },
    watchedDates: [{ date: "2021-01-05" }],
    lastWatchedDate: "2021-01-05",
    watchCount: 1,
    inWatchlist: false,
    isLiked: true,
  },
]

// Helper functions
export const recentlyWatched = movies.filter((m) => m.watchCount > 0).sort((a, b) => 
  new Date(b.lastWatchedDate || 0).getTime() - new Date(a.lastWatchedDate || 0).getTime()
).slice(0, 6)

export const topRated = [...movies].sort((a, b) => (b.ratings.myRating || b.ratings.imdb || 0) - (a.ratings.myRating || a.ratings.imdb || 0)).slice(0, 6)

export const watchlist = movies.filter((m) => m.inWatchlist)

export const kDrama = movies.filter((m) => m.origin === "kdrama")
export const cDrama = movies.filter((m) => m.origin === "cdrama")
export const jDrama = movies.filter((m) => m.origin === "jdrama")
export const anime = movies.filter((m) => m.type === "anime")
export const moviesList = movies.filter((m) => m.type === "movie")
export const seriesList = movies.filter((m) => m.type === "series")

export function getMovieById(id: string): Movie | undefined {
  return movies.find((m) => m.id === id)
}

export function getMoviesByGenre(genre: string): Movie[] {
  return movies.filter((m) => m.genres.some((g) => g.toLowerCase() === genre.toLowerCase()) || 
    m.tags.some((t) => t.toLowerCase() === genre.toLowerCase()))
}

export function getMoviesByOrigin(origin: ContentOrigin): Movie[] {
  return movies.filter((m) => m.origin === origin)
}

export function getMoviesByType(type: ContentType): Movie[] {
  return movies.filter((m) => m.type === type)
}

export function getSimilarMovies(movie: Movie): Movie[] {
  return movies
    .filter((m) => m.id !== movie.id && (m.genres.some((g) => movie.genres.includes(g)) || m.origin === movie.origin))
    .slice(0, 4)
}

export function getPersonById(id: string, type: 'director' | 'producer' | 'actor'): Person | undefined {
  const list = type === 'director' ? directors : type === 'producer' ? producers : actors
  return list.find((p) => p.id === id)
}

export function getAllGenres(): string[] {
  return genres.map(g => g.name)
}

export function getAllYears(): number[] {
  const years = new Set<number>()
  movies.forEach(m => years.add(m.year))
  return Array.from(years).sort((a, b) => b - a)
}

export function getContentOrigins(): ContentOrigin[] {
  const origins = new Set<ContentOrigin>()
  movies.forEach(m => origins.add(m.origin))
  return Array.from(origins)
}

export function getSubgenres(genreName: string): string[] {
  const genre = genres.find(g => g.name.toLowerCase() === genreName.toLowerCase())
  return genre?.subgenres || []
}
