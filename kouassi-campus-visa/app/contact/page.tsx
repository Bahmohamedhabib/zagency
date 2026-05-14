'use client'

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react"
import { siteConfig } from "@/config/site"
import { sendContactEmail } from "@/app/actions/contact"
import Link from "next/link"

const contactInfos = [
    {
        icon: Phone,
        label: "Téléphone / WhatsApp",
        value: siteConfig.contact.phone,
        sub: "Appel & WhatsApp — 7j/7",
    },
    {
        icon: Mail,
        label: "Email",
        value: siteConfig.contact.email,
        sub: "Réponse sous 24h",
    },
    {
        icon: MapPin,
        label: "Localisation",
        value: siteConfig.contact.address,
        sub: "Service disponible partout en France & Afrique",
    },
    {
        icon: Clock,
        label: "Horaires",
        value: "Lundi – Samedi : 08h00 – 20h00",
        sub: "Heure de France (CET)",
    },
]

const subjectOptions = [
    { value: "", label: "Sélectionnez l'objet de votre demande" },
    { value: "Renseignement Général", label: "Renseignement Général" },
    { value: "Pack Smart — Admission", label: "Pack Smart — Admission (600 000 FCFA)" },
    { value: "Pack Golden — Admission + Visa", label: "Pack Golden — Admission + Visa, Recommandé (1 100 000 FCFA)" },
    { value: "Pack Premium — Visa", label: "Pack Premium — Visa (600 000 FCFA)" },
    { value: "Pack Secours — Renouvellement Titre de Séjour", label: "Pack Secours — Titre de Séjour en France (450 €)" },
    { value: "Autre", label: "Autre" },
]

export default function ContactPage() {
    const [isPending, startTransition] = useTransition()
    const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        startTransition(async () => {
            const result = await sendContactEmail(formData)
            setStatus(result)
            if (result.success) {
                (event.target as HTMLFormElement).reset()
            }
        })
    }

    return (
        <div className="flex flex-col min-h-screen">

            {/* ═══ HERO ═══ */}
            <section className="bg-[#0A192F] text-white py-20 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F97316] blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-500 blur-3xl" />
                </div>
                <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
                    <span className="inline-block bg-[#F97316]/10 text-[#F97316] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#F97316]/20 mb-6">
                        📬 On est à votre écoute
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        Contactez <span className="text-[#F97316]">Z'Agency</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl">
                        Une question sur nos packs ? Besoin d'un avis sur votre dossier ?
                        Remplissez le formulaire ou contactez-nous directement sur WhatsApp.
                        Nous répondons sous 24h.
                    </p>
                </div>
            </section>

            {/* ═══ INFOS + FORMULAIRE ═══ */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-5 gap-10">

                    {/* ─── Colonne gauche : infos ─── */}
                    <div className="md:col-span-2 space-y-6">

                        {/* WhatsApp CTA premium */}
                        <Link href={siteConfig.links.whatsapp} target="_blank" className="block group">
                            <div className="bg-[#25D366] text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-xl">
                                    <MessageCircle size={28} />
                                </div>
                                <div>
                                    <p className="font-black text-lg">Écrire sur WhatsApp</p>
                                    <p className="text-green-100 text-sm">Réponse rapide — 7j/7</p>
                                </div>
                                <span className="ml-auto text-xl group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>

                        {/* Coordonnées */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-6">
                            <h2 className="text-xl font-black text-[#0A192F]">Nos Coordonnées</h2>
                            {contactInfos.map((info, i) => {
                                const Icon = info.icon
                                return (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="bg-[#F97316]/10 p-3 rounded-xl text-[#F97316] shrink-0">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{info.label}</p>
                                            <p className="text-gray-800 font-medium">{info.value}</p>
                                            <p className="text-gray-400 text-xs mt-0.5">{info.sub}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Note pack */}
                        <div className="bg-[#0A192F] text-white rounded-2xl p-6 border border-white/5">
                            <p className="font-bold text-[#F97316] mb-2">💡 Vous ne savez pas quel pack choisir ?</p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Mentionnez simplement votre situation dans le formulaire. Nous vous orienterons
                                vers le pack le plus adapté — Smart, Golden, Premium ou Secours.
                            </p>
                        </div>
                    </div>

                    {/* ─── Formulaire ─── */}
                    <div className="md:col-span-3 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                        {status?.success ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-12 space-y-6 min-h-[500px]">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <CheckCircle2 size={48} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-[#0A192F] mb-3">Message envoyé !</h3>
                                    <p className="text-gray-600 max-w-sm">
                                        Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                                        Surveillez aussi vos spams.
                                    </p>
                                </div>
                                <Link href={siteConfig.links.whatsapp} target="_blank">
                                    <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold gap-2" size="lg">
                                        <MessageCircle size={18} />
                                        Continuer sur WhatsApp
                                    </Button>
                                </Link>
                                <Button variant="outline" onClick={() => setStatus(null)} className="text-sm">
                                    Envoyer un autre message
                                </Button>
                            </div>
                        ) : (
                            <>
                                {/* En-tête formulaire */}
                                <div className="bg-gradient-to-r from-[#0A192F] to-[#0f2a4a] text-white px-8 py-6">
                                    <h2 className="text-xl font-black">Envoyez-nous un message</h2>
                                    <p className="text-gray-400 text-sm mt-1">Tous les champs marqués * sont obligatoires.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="p-8 space-y-6">

                                    {/* Nom + Téléphone */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all"
                                                placeholder="Ex : Jean Koffi"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone / WhatsApp *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all"
                                                placeholder="+225 07..."
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email <span className="text-gray-400 font-normal">(Optionnel)</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all"
                                            placeholder="jean.koffi@example.com"
                                        />
                                    </div>

                                    {/* Objet */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Objet de la demande</label>
                                        <select
                                            name="subject"
                                            className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all cursor-pointer"
                                        >
                                            {subjectOptions.map((opt) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Votre Message *</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all resize-none"
                                            placeholder="Bonjour, je souhaite en savoir plus sur..."
                                        />
                                    </div>

                                    {/* Erreur */}
                                    {status?.message && !status.success && (
                                        <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                                            {status.message}
                                        </div>
                                    )}

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-bold h-14 rounded-xl shadow-lg shadow-[#F97316]/20 transition-all hover:scale-[1.01]"
                                        disabled={isPending}
                                    >
                                        {isPending ? (
                                            <span className="flex items-center gap-2">
                                                <span className="animate-spin">⏳</span>
                                                Envoi en cours...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                <Send size={18} />
                                                Envoyer le message
                                            </span>
                                        )}
                                    </Button>

                                    <p className="text-center text-xs text-gray-400">
                                        Vos données sont protégées et utilisées uniquement pour répondre à votre demande.
                                    </p>
                                </form>
                            </>
                        )}
                    </div>

                </div>
            </section>

            {/* ═══ CTA WHATSAPP FINAL ═══ */}
            <section className="py-16 bg-[#F97316] text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-black mb-4">Vous préférez une réponse immédiate ?</h2>
                    <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
                        Notre équipe est disponible sur WhatsApp. Écrivez-nous maintenant et obtenez une réponse rapide.
                    </p>
                    <Link href={siteConfig.links.whatsapp} target="_blank">
                        <Button size="lg" className="bg-white text-[#25D366] hover:bg-gray-100 font-black h-14 px-10 text-lg gap-3">
                            <MessageCircle size={22} />
                            Ouvrir WhatsApp
                        </Button>
                    </Link>
                </div>
            </section>

        </div>
    )
}
