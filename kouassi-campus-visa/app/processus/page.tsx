import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import Link from "next/link"

export const metadata = {
    title: "Notre Processus — De l'Admission au Visa | Z'AGENCY",
    description: "Découvrez la méthodologie Z'Agency : 5 étapes claires de l'orientation initiale jusqu'à l'obtention du visa pour études en France. Rien n'est laissé au hasard.",
}

const steps = [
    {
        num: "01",
        icon: "🎯",
        tag: "Étape 1",
        title: "Orientation & Projet d'Études",
        desc: "Nous analysons votre parcours scolaire, vos ambitions et votre profil. Ensemble, nous définissons un projet d'études cohérent et sélectionnons les formations les plus adaptées pour éviter les refus pédagogiques.",
        details: ["Analyse du dossier académique", "Conseil sur le choix des universités", "Définition du projet professionnel"],
        color: "from-blue-600 to-blue-400",
    },
    {
        num: "02",
        icon: "📂",
        tag: "Étape 2",
        title: "Constitution du Dossier",
        desc: "Création de votre compte Campus France, numérisation des bulletins, diplômes et attestations. Rédaction professionnelle de vos lettres de motivation et CV pour maximiser votre impact.",
        details: ["Création compte Campus France", "Numérisation & vérification des documents", "Rédaction CV & lettres de motivation"],
        color: "from-purple-600 to-purple-400",
    },
    {
        num: "03",
        icon: "✅",
        tag: "Étape 3",
        title: "Soumission & Suivi du Dossier",
        desc: "Une fois votre dossier parfait, nous le soumettons. Nous gérons le paiement des frais Campus France et assurons un suivi rigoureux jusqu'à la validation complète par l'espace Campus France.",
        details: ["Soumission du dossier en ligne", "Gestion des frais Campus France", "Suivi jusqu'à l'admission"],
        color: "from-green-600 to-green-400",
    },
    {
        num: "04",
        icon: "🎤",
        tag: "Étape 4",
        title: "Coaching pour l'Entretien",
        desc: "L'étape cruciale. Nous vous coachons avec des simulations d'entretien réalistes : questions pièges, posture, présentation du projet professionnel. Vous arrivez le jour J en pleine confiance.",
        details: ["Simulations d'entretien en conditions réelles", "Travail sur le projet professionnel", "Conseils sur l'attitude et la posture"],
        color: "from-[#F97316] to-yellow-400",
    },
    {
        num: "05",
        icon: "✈️",
        tag: "Étape 5",
        title: "Demande de Visa & Départ",
        desc: "Après l'acceptation, place au visa. Nous vous aidons à rassembler les justificatifs financiers (garantie, AVI, garant) et d'hébergement, remplissons le formulaire France-Visas et préparons votre départ.",
        details: ["Justificatifs financiers & logement", "Remplissage formulaire France-Visas", "Prise de RDV consulaire & préparation départ"],
        color: "from-[#0A192F] to-blue-800",
    },
]

const guarantees = [
    { icon: "⚡", title: "Rapide", desc: "Processus optimisé pour ne perdre aucune session d'inscription." },
    { icon: "🔒", title: "Sécurisé", desc: "Dossier relu et vérifié avant chaque soumission." },
    { icon: "🎯", title: "Précis", desc: "Zéro erreur tolérée. Chaque détail compte pour votre admission." },
    { icon: "💬", title: "Suivi continu", desc: "Disponibilité WhatsApp 7j/7 à chaque étape du processus." },
]

export default function ProcessPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* ═══ HERO ═══ */}
            <section className="relative bg-[#0A192F] text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F97316] blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500 blur-3xl" />
                </div>
                <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                    <span className="inline-block bg-[#F97316]/10 text-[#F97316] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#F97316]/20 mb-6">
                        🗺️ Notre méthodologie
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        5 étapes vers <br />
                        <span className="text-[#F97316]">votre admission en France</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Une méthodologie éprouvée pour transformer votre rêve d'étudier en France en réalité.
                        Chaque étape est maîtrisée, rien n'est laissé au hasard.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {["01 Orientation", "02 Dossier", "03 Soumission", "04 Entretien", "05 Visa"].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
                                <span className="text-[#F97316]">●</span> {s}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ STEPS ═══ */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="relative">
                        {/* Ligne centrale verticale desktop */}
                        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-400 via-[#F97316] to-[#0A192F] -translate-x-1/2 opacity-20" />

                        <div className="space-y-16">
                            {steps.map((step, i) => {
                                const isEven = i % 2 === 0
                                return (
                                    <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>

                                        {/* Bulle numérotée centrale */}
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                                            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} text-white font-black text-lg flex items-center justify-center shadow-xl border-4 border-white`}>
                                                {step.num}
                                            </div>
                                        </div>

                                        {/* Côté gauche (ou droit si impair) — icône / numéro visuel */}
                                        <div className={`w-full md:w-5/12 flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <div className={`relative bg-gradient-to-br ${step.color} text-white rounded-3xl p-8 w-full md:w-auto md:min-w-[260px] shadow-xl`}>
                                                {/* Pastille mobile */}
                                                <div className="md:hidden inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                                                    {step.tag}
                                                </div>
                                                <div className="text-6xl mb-4">{step.icon}</div>
                                                <div className="text-6xl font-black opacity-20 absolute bottom-4 right-6 leading-none">{step.num}</div>
                                                <ul className="space-y-2">
                                                    {step.details.map((d, j) => (
                                                        <li key={j} className="flex items-center gap-2 text-sm text-white/90">
                                                            <span className="text-white font-bold">✓</span> {d}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Côté texte */}
                                        <div className={`w-full md:w-5/12 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}>
                                            <span className="hidden md:inline-block text-xs font-bold text-[#F97316] uppercase tracking-widest mb-2">{step.tag}</span>
                                            <h2 className="text-2xl md:text-3xl font-black text-[#0A192F] mb-4 leading-tight">{step.title}</h2>
                                            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ GARANTIES ═══ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-14">
                        <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-4">Notre engagement</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#0A192F]">Pourquoi notre méthode fonctionne</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {guarantees.map((g, i) => (
                            <div key={i} className="group bg-gray-50 hover:bg-[#0A192F] rounded-2xl p-7 border border-gray-100 hover:border-[#F97316]/20 transition-all duration-300 text-center">
                                <div className="text-4xl mb-4">{g.icon}</div>
                                <h3 className="text-lg font-black text-[#0A192F] group-hover:text-white mb-2 transition-colors">{g.title}</h3>
                                <p className="text-gray-500 group-hover:text-gray-300 text-sm transition-colors">{g.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="py-24 bg-[#0A192F] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#F97316] blur-3xl" />
                </div>
                <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        Prêt à démarrer <span className="text-[#F97316]">votre parcours ?</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-10">
                        Réservez une consultation gratuite. Nous analyserons votre dossier et vous orienterons vers le pack le plus adapté.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/rendez-vous">
                            <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-xl" style={{ backgroundColor: '#F97316' }}>
                                Prendre RDV maintenant
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
