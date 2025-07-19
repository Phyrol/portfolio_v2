import {useEffect, useState} from "react";

/**
 * Helper for using media queries in React state
 * @param query The media query. e.g. (min-width: 640px)
 * @returns If the document matches the media query string
 */
export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);

        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
};
