import Link from "next/link"
import { siteConfig } from "@/config/site"

export function Footer() {
    return (
        <footer className="bg-[#0A192F] text-white py-12">
            <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-4">
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">{siteConfig.name}</h3>
                    <p className="text-sm text-gray-300 max-w-xs">
                        {siteConfig.slogan}
                    </p>
                    <p className="text-xs text-gray-400 mt-4">
                        Non affilié à Campus France. Service indépendant.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Navigation</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="/" className="hover:text-white">Accueil</Link></li>
                        <li><Link href="/services" className="hover:text-white">Services</Link></li>
                        <li><Link href="/processus" className="hover:text-white">Processus</Link></li>
                        <li><Link href="/rendez-vous" className="hover:text-white font-bold text-[#F97316]">Prendre RDV</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>WhatsApp: {siteConfig.contact.phone}</li>
                        <li>Email: {siteConfig.contact.email}</li>
                        <li>{siteConfig.contact.address}</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Légal</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
                        <li><Link href="/confidentialite" className="hover:text-white">Politique de confidentialité</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 py-6 border-t border-gray-800 mt-8 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
            </div>
        </footer>
    )
}
