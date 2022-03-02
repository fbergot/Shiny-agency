import { useState, useEffect, useRef } from "react";

/**
 * Hook for fetch data (with Abort controller)
 * @param {string} url
 * @param {RequestInit} options
 * @returns {[data: any, isLoading: boolean, error: boolean]}
 */
function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const abortControl = useRef(new AbortController());

    useEffect(() => {
        const copyAbortCurr = abortControl.current;

        async function fetchData() {
            try {
                const response = await fetch(url, {
                    ...options,
                    signal: abortControl.current.signal,
                });
                let data;
                if (response.ok) {
                    data = await response.json();
                    setData(data);
                } else {
                    console.error("Bad network response");
                    setError(true);
                }
            } catch (err) {
                if (!(err instanceof DOMException && err.code === err.ABORT_ERR)) {
                    console.error(err);
                    setError(true);
                }
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
        // cleanup: abort fetch
        return () => copyAbortCurr.abort();
    }, [url, options]);

    return [data, isLoading, error];
}

export default useFetch;
