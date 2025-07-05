
import { Suspense } from "react";
import { SignedOut as ClerkSignOut } from "@clerk/nextjs"
import { SignedIn as ClerkSignIn } from "@clerk/nextjs"

export function SignedIn({ children }: { children?: React.ReactNode }) {
    return (
        <Suspense>
            <ClerkSignIn>
                {children}
            </ClerkSignIn>
        </Suspense>
    )
}

export function SignedOut({ children }: { children?: React.ReactNode }) {
    return (
        <Suspense>
            <ClerkSignOut>
                {children}
            </ClerkSignOut>
        </Suspense>
    )
}