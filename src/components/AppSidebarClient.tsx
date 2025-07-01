'use client'

import { useIsMobile } from "@/hooks/use-mobile"
import { SidebarTrigger } from "./ui/sidebar"

export default function AppSidebarClient({ children }: { children: React.ReactNode }) {
    const isMobile = useIsMobile()
    if (isMobile) {
        return <div className="flex flex-col w-full">
            <div className="p-2 border-b flex items-center gap-1">
                <SidebarTrigger />
                <span className='text-xl text-nowrap'>CodingSocial Jobs</span>
            </div>
            <div className="flex-1 flex">
                {children}
            </div>
        </div>
    }
    return children
}
