import { useEffect, useState } from "react";

type useCatImageProps = {
    fact:string
}

export function useCatImage({ fact }:useCatImageProps) {
    const [catImage, setCatImage] = useState()

    const GetImageCatApiUrl = (imageRelatedWord: string) => `https://cataas.com/cat/says/${imageRelatedWord}?json=true`;

    useEffect(() => {
        if (!fact) return;
        const firstWord = fact.split(' ')[0];
        // const first3Word = factResponse.split(' ', 3).join(' ');
        // const first3Word = factResponse.split(' ').slice(0,3).join(' ');
        // console.log(first3Word);
        fetch(GetImageCatApiUrl(firstWord))
            .then(res => res.json())
            .then(data => setCatImage(data.url))
        console.log(firstWord);
    }, [fact])

    return { catImage }
}