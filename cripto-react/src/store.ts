import { create } from "zustand"
import { devtools } from "zustand/middleware";
import type { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
    cryptocurrencies: CryptoCurrency[]
    result:CryptoPrice
    loading:boolean
    fetchCryptos: () => Promise<void>
    fetchConversionCryptos: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result:null!,
    loading:false,
    fetchCryptos: async () => {
        const cryptos = await getCryptos()
        set(() => ({
            cryptocurrencies: cryptos
        }))
    },
    fetchConversionCryptos: async (pair) => {
        set(() => ({
            loading: true
        }))
        const cryptoValues = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result:cryptoValues,
            loading:false
        }))
    }
})))