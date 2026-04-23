import axios from "axios";
import type { geoData, Search } from "../types";
import { z } from "zod"
import { useMemo, useState } from "react";
// import {object, string, number, type InferOutput, parse} from "valibot"


//Valibot
// const WeatherSchema = object({
//     name: string(),
//     main: object({
//         temp: number(),
//         temp_max: number(),
//         temp_min: number(),
//     })
// })

// type Weather = InferOutput<typeof WeatherSchema>

//Type Guard OR Assertion
// function isWeatherResponse(weather : unknown): weather is Weather{
//     return (
//         Boolean(weather) &&
//          typeof weather === 'object' &&
//          typeof (weather as Weather).name === 'string' &&
//          typeof (weather as Weather).main.temp === 'number' &&
//          typeof (weather as Weather).main.temp_max === 'number' &&
//          typeof (weather as Weather).main.temp_min === 'number'
//     )
// }

//zod
const WeatherSchema = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
    })
})

export type Weather = z.infer<typeof WeatherSchema>

export default function useWeather() {

    const initialState = {
        name: '',
        main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0,
        }
    }
    const [weather, setWeather] = useState<Weather>(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchWeather = async (search: Search) => {
        const apiKey = import.meta.env.VITE_API_KEY;
        setLoading(true)
        setWeather(initialState)
        try {
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`
            const { data } = await axios<geoData[]>(geoUrl);
            if(!data[0]){
                setError(true)
            }
            const { lat, lon } = data[0];
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

            //Zod
            const { data: weatherResult } = await axios(weatherUrl)
            const result = WeatherSchema.safeParse(weatherResult);
            if (result.success) {
                setWeather(result.data)
            }

            //Castear el type - no recomendado
            // const {data} = await axios<geoData[]>(geoUrl); // Default is GET axios.get(geoUrl) / axios(geoUrl, {method:'get'})
            // const {lat, lon} = data[0];

            //Type Guard
            // const {data:weather} = await axios(weatherUrl); 
            // const result = isWeatherResponse(weather)
            // if(result){
            //     console.log(weather.name);
            // }
            
            //Valibot
            // const {data:weatherResult} = await axios(weatherUrl)
            // const result = parse(WeatherSchema, weatherResult)
            // console.log(result);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const hasWeatherData = useMemo(() => weather.name, [weather])

    return {
        weather,
        loading,
        error,
        hasWeatherData,
        fetchWeather,
    }
}