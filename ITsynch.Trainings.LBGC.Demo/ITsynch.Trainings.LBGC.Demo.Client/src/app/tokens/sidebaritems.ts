import { SidebarItem } from "../layout/layout.models";

export const sidebarItems : SidebarItem[] = [
    {
       title: "Articles",
       routerPath: "articles",
       iconName: "description",
       routerLinkActive: "active-link"
     },
    {
        title: "Users",
        routerPath: "users",
        iconName: "account_circle",
        routerLinkActive: "active-link"
    }
];