'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/processus", label: "Processus" },
    { href: "/a-propos", label: "À propos" },
    { href: "/resident", label: "Pack Secours 🇫🇷" },
    { href: "/contact", label: "Contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    // Ferme le menu à chaque changement de page
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // Bloque le scroll du body quand le menu est ouvert
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [isOpen])

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
                <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center font-black text-xl text-[#0A192F] tracking-tight">
                        <span className="text-[#F97316]">Z'</span>AGENCY
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`hover:text-[#F97316] transition-colors ${pathname === link.href ? "text-[#F97316] font-bold" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href={siteConfig.links.whatsapp} target="_blank">
                            <Button variant="whatsapp" size="sm">WhatsApp</Button>
                        </Link>
                        <Link href="/rendez-vous">
                            <Button size="sm" className="bg-[#F97316] hover:bg-[#F97316]/90 text-white font-bold">
                                Prendre RDV
                            </Button>
                        </Link>
                    </div>

                    {/* Bouton hamburger mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-xl text-[#0A192F] hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            /* Icône X */
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            /* Icône hamburger */
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* ═══ MENU MOBILE PLEIN ÉCRAN ═══ */}
            {/* Overlay sombre */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Panneau de navigation */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* En-tête du menu */}
                <div className="flex items-center justify-between px-6 py-5 border-b">
                    <span className="font-black text-xl text-[#0A192F]">
                        <span className="text-[#F97316]">Z'</span>AGENCY
                    </span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
                        aria-label="Fermer"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Liens */}
                <nav className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold text-base transition-all
                                ${pathname === link.href
                                    ? "bg-[#F97316]/10 text-[#F97316]"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-[#0A192F]"
                                }`}
                        >
                            {link.label}
                            {pathname === link.href && (
                                <span className="ml-auto w-2 h-2 rounded-full bg-[#F97316]" />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* CTAs en bas */}
                <div className="px-4 py-6 border-t space-y-3 bg-gray-50">
                    <Link href={siteConfig.links.whatsapp} target="_blank" className="block">
                        <Button variant="whatsapp" className="w-full h-12 text-base font-bold">
                            💬 Écrire sur WhatsApp
                        </Button>
                    </Link>
                    <Link href="/rendez-vous" className="block">
                        <Button className="w-full h-12 text-base font-bold bg-[#F97316] hover:bg-[#F97316]/90 text-white">
                            📅 Prendre Rendez-vous
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
