import { useCallback, useState, type ChangeEvent, type FormEvent } from "react"
import Movies from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import debounce from "just-debounce-it"

export default function App() {
  const [search, setQuery] = useState('')
  const {movies, getMovies, loading, error} = useMovies({search})

  const debouncedGetMovies = useCallback(debounce((search:string) => {
    getMovies({search})
  }, 500),[])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const {query} = Object.fromEntries(new FormData(event.currentTarget))
    // console.log(query);
    getMovies({search})
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setQuery(event.target.value)
    debouncedGetMovies(newSearch)
  }

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_MOVIES_API}?apikey=${import.meta.env.VITE_MOVIES_API_KEY}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // },[])
  return (
    <div className="py-10">
        <h1 className="text-center font-black text-5xl">
            Muvisa
        </h1>
        <div className="mt-10">
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
            <div>
              <input
                value={search}
                onChange={handleChange}
                name="query"
                id='movie'
                placeholder="Nombre de la pelicula"
                className="text-center border border-gray-400 rounded px-5 py-5 w-200 text-2xl"
              />
            </div>
            <div>
              <button className="text-center py-5 px-10 uppercase 
              font-bold bg-blue-400 hover:bg-blue-500 rounded-xl cursor-pointer
              text-white">
                Buscar
              </button>
            </div>
          </form>
        </div>
        {
          loading ? (
            <p className="text-black text-5xl text-center">Cargando...</p>
          ) : (
            error ? (
              <>
                {error.message}
              </>
            ):(
              <Movies movies={movies}/>
            )
          )
        }
    </div>
  )
};