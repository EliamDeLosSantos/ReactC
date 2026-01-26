const CAT_API_URL = 'https://catfact.ninja/fact';

export const fetchCatFact = async () => {
    const res = await fetch(CAT_API_URL);
    const data = await res.json();
    return data.fact;
}