import { useMediaQuery } from "usehooks-ts";
import { useSidebarStore } from "../store/use-sidebar-store";
import { MOBILE_WIDTH } from "../config/sidebar-width";

export default function useSidebar() {
    const store = useSidebarStore()
    const isMobile = useMediaQuery(`(max-width: ${MOBILE_WIDTH}px)`);
    
    return {
        ...store,
        collapsed: isMobile || store.isCollapsed,
        isMobile,
    }
}

