import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { SidebarUserButtonClient } from "./_SidebarButtonClient";

export function SidebarUserButton() {
    return <Suspense>
        <SidebarUserSuspense />
    </Suspense>
}

async function SidebarUserSuspense() {
    const { userId } = await auth()
    return <SidebarUserButtonClient user={{ email: "quocanhle112@gmail.com", name: "Kayzzz", imageUrl: "" }} />
}