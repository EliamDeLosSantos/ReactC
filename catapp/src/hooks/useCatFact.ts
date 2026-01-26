import { useEffect, useState } from "react"
import { fetchCatFact } from "../services/factService"

export function useCatFact() {
    const [fact, setFact] = useState('')

    const refreshFact = () => {
        fetchCatFact().then(newFact => setFact(newFact))
    }

    useEffect(refreshFact, [])
    return { fact, refreshFact }
}