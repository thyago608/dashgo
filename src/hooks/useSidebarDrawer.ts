import { useContext } from "react";
import { SidebarDrawerContext } from "context/SidebarDrawerContext";

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);