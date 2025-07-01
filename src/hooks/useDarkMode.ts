import { useEffect, useState } from "react";

export function useIsDarkMode() {
    const [isDarkMode, setIsDarMode] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    })

    useEffect(() => {
        const controller = new AbortController()
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            setIsDarMode(e.matches);
        });
        return () => {
            controller.abort();
        }
    }, [])

    return isDarkMode
}
