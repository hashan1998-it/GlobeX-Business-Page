import { useEffect, useState } from 'react';

export const useWindowInnerWidth = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => setInnerWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return innerWidth;
};
