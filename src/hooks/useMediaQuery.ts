import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        // Set initial value
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        // Listener for changes
        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

        // Modern browsers
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return matches;
}
