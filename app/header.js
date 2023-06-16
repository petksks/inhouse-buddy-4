/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-brand-bg p-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <img
                        src="/logo-no-background.svg"
                        alt="Logo"
                        className="h-12 w-auto"
                    />
                </Link>
                <div>
                    <Link href="/contact" passHref>
                        <span className="text-accent px-4 cursor-pointer font-brand font-extrabold">
                            Contact
                        </span>
                    </Link>
                    <Link href="/stats" passHref>
                        <span className="text-accent px-4 cursor-pointer font-brand font-extrabold">
                            Stats
                        </span>
                    </Link>
                    <Link href="/guide" passHref>
                        <span className="text-accent px-4 cursor-pointer font-brand font-extrabold">
                            Guide
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
