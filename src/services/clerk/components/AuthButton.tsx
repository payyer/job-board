import { Button } from "@/components/ui/button"
import { SignOutButton as ClerkSignOutButton } from "@clerk/nextjs"
import { SignUpButton as ClerkSignUpButton } from "@clerk/nextjs"
import { SignInButton as ClerkSignInButton } from "@clerk/nextjs"
import { ComponentProps } from "react"


export function SignInButton({ children = <Button>Sign in</Button>, ...props }: ComponentProps<typeof ClerkSignOutButton>) {
    return <ClerkSignInButton {...props}>
        {children}
    </ClerkSignInButton>
}

export function SignUpButton({ children = <Button>Sign up</Button>, ...props }: ComponentProps<typeof ClerkSignOutButton>) {
    return <ClerkSignUpButton {...props}>
        {children}
    </ClerkSignUpButton>
}

export function SignOutButton({ children = <Button>Log out</Button>, ...props }: ComponentProps<typeof ClerkSignOutButton>) {
    return <ClerkSignOutButton {...props}>
        {children}
    </ClerkSignOutButton>
}
