import axios from "axios";
import { create } from "zustand"

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    const {data: {Data}} = await axios(url)
    console.log(Data);
}


export const useCryptoStore = create(() => ({

    fetchCryptos: async () => {
        await getCryptos()
    }

}))