import { useMediaQuery } from "usehooks-ts";

export default function useIsMobile() {
    return useMediaQuery(`(max-width: 768px)`);
}

