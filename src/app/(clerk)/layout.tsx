
export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div>{children}</div>
        </div>
    )
}
