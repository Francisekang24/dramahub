"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Film, Home, Tv, Tag, BarChart3, Menu, X, Sparkles, LayoutDashboard, Users, Search, Icon } from "lucide-react";
import { Button, TextField } from "@radix-ui/themes";

const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/movies", label: "Movies", icon: Film },
    { href: "/series", label: "Series", icon: Tv },
    { href: "/anime", label: "Anime", icon: Sparkles },
    { href: "/people", label: "People", icon: Users },
    { href: "/genres", label: "Genres", icon: Tag },
    { href: "/stats", label: "Stats", icon: BarChart3 },
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export default function Navbar() {

    const pathname = usePathname();
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (

        <header className="sticky top-0 z-50 w-full border-b border-border backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                            <Film className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="hidden md:flex font-bold text-xl">Drama<span className="text-primary">Hub</span></span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={isActive
                                        ? "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors text-primary bg-primary/10"
                                        : "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                                    }
                                >
                                    <Icon className="h-4 w-4" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    <TextField.Root placeholder="Search…"
                        className={
                            searchOpen ? "w-64 transition-width duration-300"
                                : "w-0 transition-width duration-300"
                        }>
                        <TextField.Slot>
                            <Search className="h-4 w-4" />
                        </TextField.Slot>
                    </TextField.Root>
                    <Button variant="ghost" onClick={() => setSearchOpen(!searchOpen)} color="tomato" size="2">
                        {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
                    </Button>
                    <div className="md:hidden flex items-center text-muted-foreground hover:text-foreground">
                        <Button
                            variant="ghost"
                            size="2"
                            color="tomato"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>

                </div>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={isActive
                                        ? "flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-md transition-colors text-primary bg-primary/10"
                                        : "flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                                    }
                                >
                                    <Icon className="h-5 w-5" />
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            )}
        </header>

    );
}
