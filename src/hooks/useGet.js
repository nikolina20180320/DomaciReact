import axios from "axios";
import { useEffect, useState } from "react";


export function useGet(url, params) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(undefined);
    const stringified = new URLSearchParams(params).toString();

    useEffect(() => {
        const abortController = new AbortController();
        axios.get(url + '?' + stringified, { signal: abortController.signal })
            .then(res => {
                setData(res.data);
            }).catch(setError)
            .finally(() => {
                setLoading(false);
            })
        return () => {
            abortController.abort();
        }
    }, [url, stringified])


    return { data, loading, error };
}