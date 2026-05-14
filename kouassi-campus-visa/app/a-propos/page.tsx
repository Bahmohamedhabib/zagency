import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export const metadata = {
    title: "À Propos — Notre Histoire & Notre Mission | Z'AGENCY",
    description: "Z'Agency, né d'une expérience vécue. Découvrez qui nous sommes, notre mission, nos valeurs et pourquoi des centaines d'étudiants nous font confiance pour leurs projets d'études en France.",
}

const stats = [
    { value: "200+", label: "Étudiants accompagnés" },
    { value: "95%", label: "Taux de satisfaction" },
    { value: "3", label: "Packs d'accompagnement" },
    { value: "7j/7", label: "Disponibilité WhatsApp" },
]

const values = [
    {
        icon: "🔍",
        title: "Transparence",
        text: "Pas de fausses promesses. Nous vous donnons un avis honnête sur vos chances dès le premier échange. Votre temps est précieux.",
    },
    {
        icon: "⚡",
        title: "Rigueur",
        text: "Chaque virgule compte. Nous vérifions vos dossiers avec autant d'exigence que si c'était les nôtres. Zéro erreur tolérée.",
    },
    {
        icon: "💬",
        title: "Disponibilité",
        text: "Une question ? Une angoisse à minuit ? Nous sommes joignables rapidement via WhatsApp, 7 jours sur 7.",
    },
    {
        icon: "🎯",
        title: "Expertise",
        text: "Nous connaissons les rouages de Campus France et des préfectures mieux que quiconque. Notre expérience, c'est votre avantage.",
    },
    {
        icon: "🌍",
        title: "Proximité culturelle",
        text: "Nous comprenons les réalités des étudiants ivoiriens et africains. Pas de discours généraliste — un accompagnement sur-mesure.",
    },
    {
        icon: "🏆",
        title: "Résultats",
        text: "Notre succès se mesure au vôtre. Chaque admission, chaque visa obtenu est une victoire collective que nous célébrons avec vous.",
    },
]

const timeline = [
    {
        year: "2022",
        title: "La genèse",
        desc: "Tout commence quand notre fondateur traverse lui-même le parcours du combattant : Campus France, entretien, visa, logement… Il apprend tout à la dure.",
    },
    {
        year: "2023",
        title: "Les premiers accompagnements",
        desc: "Fort de son expérience, il aide quelques amis. Les résultats parlent d'eux-mêmes : admissions, visas obtenus. Le bouche-à-oreille fait le reste.",
    },
    {
        year: "2024",
        title: "La naissance de Z'AGENCY",
        desc: "La demande explose. Z'Agency est officiellement lancée avec une équipe de conseillers pour répondre à tous les profils d'étudiants.",
    },
    {
        year: "2025",
        title: "Z'Agency En France",
        desc: "Expansion du service : le Pack Secours est créé pour aider les étudiants déjà en France face aux blocages financiers en préfecture.",
    },
]

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/* ═══ HERO ═══ */}
            <section className="relative bg-[#0A192F] text-white overflow-hidden">
                {/* Motif décoratif */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#F97316] blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-500 blur-3xl" />
                </div>

                <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">

                        {/* Texte */}
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] text-sm font-semibold px-4 py-1.5 rounded-full border border-[#F97316]/20">
                                🌟 Notre histoire
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black leading-tight">
                                Né d'une
                                <span className="block text-[#F97316]">expérience vécue.</span>
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                Z'Agency n'est pas née dans un bureau. Elle est née d'un étudiant qui a tout traversé —
                                les nuits blanches à remplir des dossiers, l'angoisse avant l'entretien, l'attente du visa.
                                Et qui a décidé que personne d'autre ne devrait subir ça seul.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <Link href="/rendez-vous">
                                    <Button size="lg" className="h-12 px-8 font-bold" style={{ backgroundColor: '#F97316' }}>
                                        Prendre RDV
                                    </Button>
                                </Link>
                                <Link href={siteConfig.links.whatsapp} target="_blank">
                                    <Button variant="whatsapp" size="lg" className="h-12 px-8">
                                        WhatsApp
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative w-full md:w-[400px] shrink-0">
                            {/* Cadre décoratif */}
                            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#F97316]/30" />
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/coach-call.png"
                                    alt="Fondateur Z'AGENCY"
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 to-transparent" />
                                {/* Badge */}
                                <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                    <p className="font-bold text-white text-sm">Fondateur & Directeur</p>
                                    <p className="text-[#F97316] text-xs">{siteConfig.name}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══ STATS ═══ */}
            <section className="bg-[#F97316] py-14">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                        {stats.map((s, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-4xl md:text-5xl font-black">{s.value}</div>
                                <div className="text-sm md:text-base font-medium opacity-90">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ MISSION ═══ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-4">Notre Mission</span>
                            <h2 className="text-3xl md:text-4xl font-black text-[#0A192F] mb-6 leading-tight">
                                Démystifier la procédure. <br />
                                <span className="text-[#F97316]">Maximiser vos chances.</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                La procédure Campus France et la demande de visa sont des parcours semés d'embuches.
                                Une simple erreur de dossier peut vous coûter une année entière. Nous sommes là pour
                                que ça n'arrive pas.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Nous ne sommes pas des magiciens — <strong className="text-[#0A192F]">nous sommes des stratèges.</strong>{" "}
                                Un dossier bien monté, un entretien bien préparé, des justificatifs financiers solides :
                                voilà la différence entre un refus et une admission.
                            </p>
                            <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                                <span className="text-2xl">🎓</span>
                                <p className="text-sm text-gray-700 font-medium">
                                    Service indépendant — Non affilié à Campus France ni à aucune ambassade.
                                </p>
                            </div>
                        </div>

                        {/* Carte citation */}
                        <div className="bg-[#0A192F] text-white rounded-2xl p-10 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F97316]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="text-6xl text-[#F97316] font-black leading-none mb-4">"</div>
                            <blockquote className="text-xl font-light leading-relaxed text-gray-200 mb-8">
                                J'ai vécu ce que vous vivez. Le stress, les formulaires, les refus.
                                Z'Agency est née pour que vous n'ayez pas à traverser ça seul.
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center text-xl font-black">Z</div>
                                <div>
                                    <p className="font-bold">Le Fondateur</p>
                                    <p className="text-gray-400 text-sm">{siteConfig.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ TIMELINE ═══ */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-4">Notre parcours</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#0A192F]">Une histoire en constante évolution</h2>
                    </div>
                    <div className="relative">
                        {/* Ligne verticale */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F97316] via-[#0A192F] to-blue-500 -translate-x-1/2" />

                        <div className="space-y-12">
                            {timeline.map((item, i) => (
                                <div key={i} className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Nœud */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-[#F97316] rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>

                                    {/* Année */}
                                    <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-end pr-16' : 'justify-start pl-16'}`}>
                                        <span className="text-5xl font-black text-[#0A192F]/10">{item.year}</span>
                                    </div>

                                    {/* Contenu */}
                                    <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                                        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                                            <span className="inline-block text-xs font-bold text-[#F97316] bg-orange-50 px-3 py-1 rounded-full mb-3">{item.year}</span>
                                            <h3 className="text-xl font-black text-[#0A192F] mb-2">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ VALEURS ═══ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-4">Ce qui nous définit</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#0A192F]">Nos valeurs fondamentales</h2>
                        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                            Ces principes guident chaque conseil que nous donnons, chaque dossier que nous construisons.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {values.map((val, i) => (
                            <div
                                key={i}
                                className="group relative bg-gray-50 hover:bg-[#0A192F] rounded-2xl p-8 border border-gray-100 hover:border-[#F97316]/30 transition-all duration-300 cursor-default overflow-hidden"
                            >
                                {/* Fond hover décoratif */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F97316]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#F97316]/10 transition-all" />

                                <div className="text-4xl mb-5">{val.icon}</div>
                                <h3 className="text-xl font-black text-[#0A192F] group-hover:text-white mb-3 transition-colors">{val.title}</h3>
                                <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{val.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA FINAL ═══ */}
            <section className="py-24 bg-[#0A192F] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#F97316] blur-3xl" />
                    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500 blur-3xl" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        Prêt à écrire votre
                        <span className="text-[#F97316] block">propre histoire ?</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                        Rejoignez les centaines d'étudiants qui ont fait confiance à Z'Agency pour réaliser leur rêve d'étudier en France.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/rendez-vous">
                            <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-xl" style={{ backgroundColor: '#F97316' }}>
                                Démarrer maintenant
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-2 rounded-xl border-white text-white hover:bg-white/10" style={{ backgroundColor: 'transparent' }}>
                                Voir nos services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}
