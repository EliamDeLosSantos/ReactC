import AdminSideBar from "@/components/admin/AdminSideBar"
import Logo from "@/components/ui/Logo"
import ToastNotification from "@/components/ui/ToastNotification"
import React from "react"

export default function RootLayout({ children }:
    Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div className="md:flex">
                <aside className="md:w-72 md:h-screen bg-white">
                    <Logo/>
                    <AdminSideBar />
                </aside>
                <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5"> 
                    {children}
                </main>
            </div>
            <ToastNotification />
        </>
    )
};

