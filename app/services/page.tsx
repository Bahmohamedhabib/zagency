import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import Link from "next/link"

export const metadata = {
    title: "Nos Services — Campus France, Visa & Aide Financière | Z'AGENCY",
    description: "Découvrez les packs Z'Agency : Pack Smart (admission), Pack Premium (visa) et Pack Golden (tout inclus). Et le Pack Secours pour les étudiants résidant en France.",
}

const mainPacks = [
    {
        id: "smart",
        name: "Pack Smart",
        badge: null,
        subtitle: "Admission",
        price: siteConfig.pricing.smart,
        description: "L'indispensable pour bien démarrer votre procédure d'études en France sans erreur.",
        features: [
            "Étude de votre dossier",
            "Conseil du choix de votre candidature",
            "Création de votre compte en ligne",
            "Montage de votre dossier",
            "Formations pour l'entretien",
            "Suivi du dossier jusqu'à l'admission",
        ],
        cta: "Choisir Smart",
        highlight: false,
        accentColor: "#0A192F",
    },
    {
        id: "golden",
        name: "Pack Golden",
        badge: "RECOMMANDÉ",
        subtitle: "Admission + Visa — Offre Complète",
        price: siteConfig.pricing.golden,
        priceNote: "Économisez 100 000 FCFA",
        description: "Bénéficiez de toutes nos offres d'admission et de visa avec une réduction de 100 000 FCFA.",
        features: [
            "Étude de votre dossier",
            "Conseil du choix de votre candidature",
            "Création de votre compte en ligne",
            "Montage de votre dossier",
            "Formations pour l'entretien",
            "Suivi du dossier jusqu'à l'admission",
            "Garantie Financière",
            "Garantie Logement",
            "Assistance pour l'achat du billet d'avion",
            "Accompagnement 3 premiers mois en France",
        ],
        cta: "Choisir Golden",
        highlight: true,
        accentColor: "#F97316",
    },
    {
        id: "premium",
        name: "Pack Premium",
        badge: null,
        subtitle: "Visa",
        price: siteConfig.pricing.premium,
        description: "Répond à tous les critères d'obtention de visa pour études en France.",
        features: [
            "Vérification des justificatifs financiers et logement",
            "Offre de Garantie Financière",
            "Offre de Garantie Logement",
            "Remplissage des informations en ligne et prise de rendez-vous à l'ambassade",
            "Assistance pour l'achat du billet d'avion",
            "Accompagnement 3 premiers mois en France",
        ],
        cta: "Choisir Premium",
        highlight: false,
        accentColor: "#0A192F",
    },
]

const secoursFeatures = [
    "Aide à la constitution du dossier financier",
    "Mise à disposition des garants financiers solvables",
    "Documents conformes aux exigences des préfectures",
    "Accompagnement personnalisé",
]

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero */}
            <section className="bg-[#0A192F] text-white py-20 md:py-24">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services d'Accompagnement</h1>
                    <p className="text-gray-300 text-lg md:text-xl">
                        Choisissez la formule adaptée à votre projet. De la procédure d'admission jusqu'à votre installation en France.
                    </p>
                </div>
            </section>

            {/* 3 Packs principaux */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-[#0A192F] mb-3">Nos Offres d'Accompagnement</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Pour les étudiants souhaitant partir étudier en France depuis la Côte d'Ivoire et l'Afrique.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-stretch">
                        {mainPacks.map((pack) => (
                            <div
                                key={pack.id}
                                className={`relative flex flex-col rounded-2xl shadow-xl overflow-hidden border transition-transform duration-300 hover:-translate-y-1
                                    ${pack.highlight
                                        ? 'bg-[#0A192F] text-white border-[#F97316] ring-2 ring-[#F97316]/30 scale-[1.02]'
                                        : 'bg-white text-gray-900 border-gray-100'
                                    }`}
                            >
                                {/* Badge */}
                                {pack.badge && (
                                    <div className="bg-[#F97316] text-white text-xs font-bold py-2 text-center tracking-widest uppercase">
                                        ⭐ {pack.badge}
                                    </div>
                                )}

                                <div className="p-8 flex flex-col flex-1">
                                    {/* Titre */}
                                    <div className="mb-6">
                                        <h3 className={`text-2xl font-black mb-1 ${pack.highlight ? 'text-white' : 'text-[#0A192F]'}`}>
                                            {pack.name}
                                        </h3>
                                        <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${pack.highlight ? 'bg-[#F97316]/20 text-[#F97316]' : 'bg-gray-100 text-gray-500'}`}>
                                            {pack.subtitle}
                                        </span>
                                    </div>

                                    {/* Prix */}
                                    <div className="mb-6">
                                        <div className={`text-3xl font-black ${pack.highlight ? 'text-[#F97316]' : 'text-[#0A192F]'}`}>
                                            {pack.price}
                                        </div>
                                        {pack.priceNote && (
                                            <div className="mt-1 text-xs font-semibold text-green-400 bg-green-900/30 inline-block px-2 py-0.5 rounded-full">
                                                🎁 {pack.priceNote}
                                            </div>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className={`text-sm mb-6 leading-relaxed ${pack.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                                        {pack.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {pack.features.map((feat, i) => (
                                            <li key={i} className={`flex items-start gap-3 text-sm ${pack.highlight ? 'text-gray-200' : 'text-gray-700'}`}>
                                                <span className="text-[#F97316] font-bold mt-0.5 shrink-0">✓</span>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Link href="/rendez-vous" className="mt-auto">
                                        <Button
                                            size="lg"
                                            className={`w-full font-bold ${pack.highlight
                                                ? 'bg-[#F97316] hover:bg-[#F97316]/90 text-white border-none'
                                                : ''
                                            }`}
                                            variant={pack.highlight ? 'default' : 'outline'}
                                        >
                                            {pack.cta}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Z'Agency En France — Pack Secours */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-blue-100 text-blue-700 font-semibold text-xs px-4 py-1 rounded-full uppercase tracking-widest mb-4">
                            Z'Agency En France
                        </span>
                        <h2 className="text-3xl font-bold text-[#0A192F] mb-4">Pack Secours</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Projet d'aide financière aux étudiant(e)s avec justificatifs financiers insuffisants
                            ou blocage financier en préfecture lors du renouvellement du titre de séjour.
                        </p>
                    </div>

                    <div className="relative bg-gradient-to-br from-[#0A192F] via-[#0f2a4a] to-[#0A192F] text-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Accent décoratif */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-[#F97316]" />

                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Gauche — infos */}
                            <div className="p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-1 rounded-full mb-6 w-fit">
                                    🇫🇷 Réservé aux étudiants en France
                                </div>
                                <h3 className="text-3xl font-black mb-2">Pack Secours</h3>
                                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                    Vous résidez en France et faites face à un blocage financier pour votre
                                    renouvellement de titre de séjour ? Nous vous accompagnons.
                                </p>
                                <div className="text-5xl font-black text-[#F97316] mb-3">{siteConfig.pricing.secours}</div>
                                <p className="text-gray-400 text-xs mb-8">Tarif indicatif — devis personnalisé selon votre situation</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/rendez-vous">
                                        <Button size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90 font-bold px-8">
                                            Choisir Secours
                                        </Button>
                                    </Link>
                                    <Link href={siteConfig.links.whatsapp} target="_blank">
                                        <Button variant="whatsapp" size="lg" className="px-8">
                                            WhatsApp
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Droite — features */}
                            <div className="p-10">
                                <h4 className="font-semibold text-gray-200 mb-6 text-sm uppercase tracking-wider">Ce qui est inclus</h4>
                                <ul className="space-y-5">
                                    {secoursFeatures.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-200">
                                            <span className="text-[#F97316] font-black mt-0.5 text-lg shrink-0">✓</span>
                                            <span className="text-sm leading-relaxed">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-[#F97316] text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous avez un doute sur votre choix ?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Contactez-nous gratuitement. Nous analyserons votre situation et vous orienterons vers le pack le plus adapté.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="bg-white text-[#F97316] hover:bg-gray-100 font-bold h-14 px-10 text-lg">
                                Nous contacter
                            </Button>
                        </Link>
                        <Link href={siteConfig.links.whatsapp} target="_blank">
                            <Button variant="whatsapp" size="lg" className="h-14 px-8 text-lg rounded-xl">
                                Discuter sur WhatsApp
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}
