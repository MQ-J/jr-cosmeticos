import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router";
import { AppHeader } from "./components/app-header";


export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
        <SidebarInset>
        <AppHeader />
      <main className="p-4">
        <Outlet />
      </main>
        </SidebarInset>
    </SidebarProvider>
  )
}
