import type { MovieResponse } from '../types';

export async function searchMovies({search}: {search: string}){
    try{
        const response = await fetch(`${import.meta.env.VITE_MOVIES_API}?s=${search}&apikey=${import.meta.env.VITE_MOVIES_API_KEY}`);
        const json = await response.json();
        const movies = json.Search;
        return movies.map((movie: MovieResponse) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster
        }))
    }catch(error){
        throw new Error('No hay peliculas para mostrar')
    }
}