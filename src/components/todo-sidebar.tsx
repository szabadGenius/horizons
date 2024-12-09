import { Home, Settings, ListTodo } from "lucide-react";
import { Link } from "react-router-dom";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "ToDo",
        url: "/todos",
        icon: ListTodo,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
];

// https://ui.shadcn.com/docs/components/sidebar

export function ToDoSidebar() {
    return (
        <Sidebar side="right" collapsible="icon" variant="sidebar">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Horizons</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
