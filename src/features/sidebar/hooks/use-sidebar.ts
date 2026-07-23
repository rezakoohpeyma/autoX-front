import { useSidebarStore } from "../store/use-sidebar-store";
import useIsMobile from "@/hooks/use-is-mobile";

export default function useSidebar() {
    const store = useSidebarStore()
    const isMobile = useIsMobile();
    
    return {
        ...store,
        collapsed: isMobile || store.isCollapsed,
        isMobile,
    }
}

