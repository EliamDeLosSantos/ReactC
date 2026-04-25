import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema";
import type { Pair } from "../types";

const API_URL = 'https://min-api.cryptocompare.com'
export const getApiUrl = (url:string) => `${API_URL}${url}`

export async function getCryptos() {
    const url = getApiUrl('/data/top/mktcapfull?limit=20&tsym=USD')
    const {data: {Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    if(result.success){
        return result.data;
    }
}

export async function fetchCurrentCryptoPrice(pair:Pair) {
    const url = getApiUrl(`/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`)
    const {data: {DISPLAY}} = await axios.get(url)
    const dataToDisplay = DISPLAY[pair.criptocurrency][pair.currency]
    const result = CryptoPriceSchema.safeParse(dataToDisplay)
    if(result.success){
        return result.data;
    }
}