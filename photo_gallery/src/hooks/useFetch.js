import { useEffect, useState } from "react"

const useFetch = (url,apiKey) => {
    const [data, setData] = useState();

    useEffect(() => {
        (async () => {
            const res = await fetch(url,apiKey);
            const dataRes = await res.json();
            setData(dataRes)

        })()
    }, [url,apiKey])
    return data
}
export default useFetch;