'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { SignOutButton } from "@/services/clerk/components/AuthButton"
import { SignedIn } from "@/services/clerk/components/SignInStatus"
import { useClerk } from "@clerk/nextjs"
import { ChevronsUpDown, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"
import Link from "next/link"

type User = { name: string, email: string, imageUrl: string }

export function SidebarUserButtonClient({ user }: { user: User }) {
    const { isMobile, setOpenMobile } = useSidebar();
    const { openUserProfile } = useClerk()
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <SidebarMenuButton size={"lg"} className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <UserInfo {...user} />
                <ChevronsUpDown className="ml-auto group-data-[state=collapsed]:hidden" />
            </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={4} align="end" side={isMobile ? "bottom" : "right"} className="w-64 max-w-80" >
            <DropdownMenuLabel className="font-normal p-1" >
                <UserInfo {...user} />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex" onClick={() => {
                setOpenMobile(false)
                openUserProfile()
            }}>
                <UserIcon className="mr-1" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="flex" asChild>
                <Link href="/user-settings/notifications" >
                    <SettingsIcon className="mr-1" />Settings
                </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <SignedIn>
                <SignOutButton>
                    <DropdownMenuItem >
                        <LogOutIcon className="mr-1" />Log out
                    </DropdownMenuItem>
                </SignOutButton>
            </SignedIn>
        </DropdownMenuContent>
    </DropdownMenu>
}

function UserInfo({ email, imageUrl, name }: User) {
    const nameInitials = name.split("").slice(0, 2).map(str => str[0]).join("");
    return <div className="flex items-center gap-2 overflow-hidden">
        <Avatar className="rounded-full size-8" >
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback className="uppercase bg-primary text-primary-foreground " >
                {nameInitials}
            </AvatarFallback>
        </Avatar>
        <div className="flex flex-col flex-1 min-w-0 leading-tight group-data-[state=collapsed]:hidden">
            <span className="truncate text-sm font-semibold">{name}</span>
            <span className="truncate text-xs font-semibold">{email}</span>
        </div>
    </div>
}