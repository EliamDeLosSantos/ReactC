import type { Movie } from "../types";

type ListMoviesProps = {
    movies: Movie[]
}
type MoviesProps = {
    movies: Movie[]
}

function ListMovies({ movies }: ListMoviesProps) {
    return (
        <div className="py-10">
            <ul className="justify-center grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {movies.map(movie => (
                    <li 
                     className="mb-10 grid justify-center"
                     key={movie.id}>
                        <h3 className="font-bold text-xl">{movie.title}</h3>
                        <p className="my-3">{movie.year}</p>
                        <img src={movie.image} alt={movie.title} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

function NoMovies() {
    return (
        <p>
            No hay peliculas para mostrar
        </p>
    )
}

export default function Movies({ movies }: MoviesProps) {
    const hasMovies = movies?.length > 0;
    return (
        <div>
            {
                hasMovies ? (
                    <ListMovies movies={movies} />
                ) : (
                    <NoMovies />
                )
            }
        </div>
    )
};

