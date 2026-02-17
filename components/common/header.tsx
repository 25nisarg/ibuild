import { CompassIcon, HomeIcon, SparkleIcon, SparklesIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                <SparkleIcon className="size-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
                i<span className="text-primary">Build</span>This
            </span>
        </Link>
    )
}
export default function Header() {
    const isSignedIn = false;
    return (
        <header className="sticky top-0 z-50 bg-background/95 border-b backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="wrapper px-12">
                <div className="flex h-16 items-center justify-between">
                    <Logo />
                    <nav className="flex items-center gap-1">
                        <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"><HomeIcon className="size-4" />Home</Link>
                        <Link href="/explore" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"><CompassIcon className="size-4" />Explore</Link>
                        <div className="flex items-center gap-3">
                            {isSignedIn ? <Button asChild>
                                <Link href="/submit">
                                    <SparklesIcon className="size-4" />
                                    Submit Project
                                </Link>
                            </Button> : <>
                                <Button variant="ghost">Sign In</Button>
                                <Button>Sign Up</Button>

                            </>
                            }
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}