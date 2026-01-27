import { useCallback, useRef, useState } from 'react'
import { searchMovies } from '../services/moviesService'

export function useMovies({search}:{search:string}){
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any | null>(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({search}: {search:string}) => {
    if(search === previousSearch.current) return;
    try{
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({search})
      setMovies(newMovies)
    }catch(error){
      setError(error)
    }finally{
      setLoading(false)
    }
  },[search])
  return{movies, getMovies, loading, error}
}