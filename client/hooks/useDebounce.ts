import {useCallback, useRef} from "react";

export default function useDebounce(callback:Function){
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const debounce = useCallback((...args: string[]) => {

        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            callback(...args);
        }, 250);
    }, []);
    return debounce;
}