import React, {useState} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json()
                setData(json)
            } catch (err) {
                setError(err)
            }
            setIsLoading(false)
         }
        fetchData()
    }, [])
    return {data, error, isLoading}
}

export default useFetch