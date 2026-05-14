import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import Link from "next/link"

export const metadata = {
    title: "Pack Secours — Aide Financière & Titre de Séjour Étudiant | Z'AGENCY",
    description: "Z'Agency En France : aide financière aux étudiants avec justificatifs insuffisants ou blocage en préfecture lors du renouvellement du titre de séjour.",
}

const features = [
    {
        icon: "📋",
        title: "Aide à la constitution du dossier financier",
        desc: "Nous vous guidons pas à pas dans la préparation de chaque document exigé par la préfecture.",
    },
    {
        icon: "🤝",
        title: "Mise à disposition de garants financiers solvables",
        desc: "Accédez à notre réseau de garants financiers dont les ressources sont conformes aux exigences administratives.",
    },
    {
        icon: "✅",
        title: "Documents conformes aux exigences des préfectures",
        desc: "Tous les justificatifs fournis sont vérifiés et conformes aux standards des préfectures françaises.",
    },
    {
        icon: "💬",
        title: "Accompagnement personnalisé",
        desc: "Un conseiller dédié vous suit de A à Z jusqu'à l'obtention de votre titre de séjour renouvelé.",
    },
]

const steps = [
    { num: "01", title: "Contact & Analyse", desc: "Vous nous contactez. Nous analysons votre situation administrative et vos ressources actuelles." },
    { num: "02", title: "Montage du dossier", desc: "Nous constituons l'ensemble des pièces financières requises par votre préfecture." },
    { num: "03", title: "Mise à disposition du garant", desc: "Nous vous mettons en relation avec un garant financier solvable et vous fournissons les attestations conformes." },
    { num: "04", title: "Suivi jusqu'au titre", desc: "Nous assurons le suivi de votre dossier jusqu'à l'obtention du récépissé puis du titre de séjour renouvelé." },
]

const faq = [
    {
        q: "À qui s'adresse le Pack Secours ?",
        a: "À tout étudiant étranger résidant en France qui doit renouveler son titre de séjour mention 'étudiant' et qui dispose de justificatifs financiers insuffisants ou fait face à un blocage en préfecture.",
    },
    {
        q: "Quel montant de ressources est exigé par les préfectures ?",
        a: "La préfecture exige généralement 615 € par mois (soit 7 380 €/an). Nous vous aidons à constituer les preuves correspondantes grâce à nos garants.",
    },
    {
        q: "Combien de temps à l'avance dois-je vous contacter ?",
        a: "Idéalement 2 à 3 mois avant l'expiration de votre titre, car la prise de rendez-vous en préfecture peut prendre du temps.",
    },
    {
        q: "Le service est-il disponible pour toutes les préfectures de France ?",
        a: "Oui, nous intervenons pour les dossiers déposés dans toutes les préfectures françaises.",
    },
]

export default function ResidentPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero */}
            <section className="bg-[#0A192F] text-white py-20 md:py-28">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-[#F97316]" />
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <span className="inline-block bg-blue-500/20 text-blue-300 font-semibold text-sm px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
                        🇫🇷 Z'Agency En France
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Pack Secours
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-4">
                        Projet d'aide financière aux étudiant(e)s avec justificatifs financiers insuffisants
                        ou blocage financier en préfecture lors du renouvellement du titre de séjour.
                    </p>
                    <div className="text-5xl font-black text-[#F97316] mb-8">{siteConfig.pricing.secours}</div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/rendez-vous">
                            <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-xl" style={{ backgroundColor: '#F97316' }}>
                                Choisir Secours
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

            {/* Ce qui est inclus */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#0A192F] text-center mb-4">Ce qui est inclus</h2>
                    <p className="text-gray-500 text-center mb-12">Un accompagnement complet pour sécuriser votre renouvellement de titre de séjour.</p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <div className="text-3xl shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="font-bold text-[#0A192F] mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Étapes */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#0A192F] text-center mb-4">Comment ça marche ?</h2>
                    <p className="text-gray-500 text-center mb-12">Un processus structuré pour votre tranquillité d'esprit.</p>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {steps.map((step) => (
                            <div key={step.num} className="bg-white rounded-2xl shadow-md p-7 border border-gray-100 flex flex-col gap-3">
                                <span className="text-5xl font-black text-[#F97316]/20 leading-none">{step.num}</span>
                                <h3 className="text-xl font-bold text-[#0A192F]">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tarif */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center max-w-xl">
                    <h2 className="text-3xl font-bold text-[#0A192F] mb-4">Tarif</h2>
                    <p className="text-gray-500 mb-8">Tarif indicatif — un devis personnalisé vous sera communiqué selon votre situation.</p>
                    <div className="bg-[#0A192F] text-white rounded-2xl p-10 shadow-xl flex flex-col items-center gap-6">
                        <div className="text-6xl font-black text-[#F97316]">{siteConfig.pricing.secours}</div>
                        <p className="text-gray-300 text-sm max-w-xs">
                            Contactez-nous pour une estimation selon votre préfecture et votre dossier.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="h-12 px-8 font-bold rounded-xl" style={{ backgroundColor: '#F97316' }}>
                                Demander un devis
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-[#0A192F] text-center mb-12">Questions fréquentes</h2>
                    <div className="space-y-5">
                        {faq.map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-bold text-[#0A192F] mb-2">{item.q}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-[#F97316] text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ne laissez pas expirer votre titre de séjour</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Anticipez le renouvellement et faites-vous accompagner par des experts de la procédure préfectorale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/rendez-vous">
                            <Button size="lg" className="bg-white text-[#F97316] hover:bg-gray-100 font-bold h-14 px-10 text-lg">
                                Choisir le Pack Secours
                            </Button>
                        </Link>
                        <Link href={siteConfig.links.whatsapp} target="_blank">
                            <Button variant="whatsapp" size="lg" className="h-14 px-8 text-lg rounded-xl">
                                Nous écrire sur WhatsApp
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}
