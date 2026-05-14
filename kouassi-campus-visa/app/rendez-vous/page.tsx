'use client'

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Phone, Mail, BookOpen, Send, CheckCircle2 } from "lucide-react"
import { sendBookingEmail } from "@/app/actions/booking"

export default function AppointmentPage() {
    const [isPending, startTransition] = useTransition()
    const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        startTransition(async () => {
            const result = await sendBookingEmail(formData)
            setStatus(result)
            if (result.success) {
                (event.target as HTMLFormElement).reset()
            }
        })
    }

    return (
        <div className="min-h-screen py-16 md:py-24 bg-gray-50/50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#0A192F] mb-4">Réservez votre Consultation</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choisissez le créneau qui vous convient pour discuter de votre projet d'études en France
                        ou de votre titre de séjour. Nous vous recontacterons sous 24h pour confirmer.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="grid md:grid-cols-5">
                        {/* Info Sidebar */}
                        <div className="md:col-span-2 bg-[#0A192F] text-white p-8 md:p-12">
                            <h3 className="text-2xl font-bold mb-8">Pourquoi prendre RDV ?</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-[#F97316] p-2 rounded-lg">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <p className="text-gray-300 text-sm">Analyse gratuite de votre profil académique et de votre situation.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-[#F97316] p-2 rounded-lg">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <p className="text-gray-300 text-sm">Orientation vers le pack le mieux adapté à votre projet (Smart, Golden, Premium ou Secours).</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-[#F97316] p-2 rounded-lg">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <p className="text-gray-300 text-sm">Explication détaillée des étapes et des tarifs de chaque pack.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-[#F97316] p-2 rounded-lg">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <p className="text-gray-300 text-sm">Réponse à toutes vos questions sur Campus France, le visa et le titre de séjour.</p>
                                </li>
                            </ul>

                            <div className="mt-10 pt-8 border-t border-white/10">
                                <p className="text-sm text-gray-400">Besoin d'aide immédiate ?</p>
                                <p className="font-bold text-[#F97316] mt-2">+33 7 46 46 31 87</p>
                                <p className="text-xs text-gray-500 mt-1">WhatsApp & appel — 7j/7</p>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <div className="md:col-span-3 p-8 md:p-12">
                            {status?.success ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#0A192F] mb-2">Demande Reçue !</h3>
                                        <p className="text-gray-600">
                                            Merci pour votre confiance. Nous allons examiner votre demande et vous recontacter sous 24h pour confirmer.
                                        </p>
                                    </div>
                                    <Button 
                                        onClick={() => setStatus(null)}
                                        variant="outline"
                                        className="mt-4"
                                    >
                                        Prendre un autre rendez-vous
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-[#0A192F] flex items-center gap-2">
                                            <User size={18} className="text-[#F97316]" />
                                            Informations Personnelles
                                        </h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Nom complet"
                                                required
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A192F] outline-none transition-all"
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Téléphone / WhatsApp"
                                                required
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A192F] outline-none transition-all"
                                            />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email (Optionnel)"
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A192F] outline-none transition-all"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-[#0A192F] flex items-center gap-2">
                                            <BookOpen size={18} className="text-[#F97316]" />
                                            Type de Service
                                        </h4>
                                        <select
                                            name="service"
                                            required
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A192F] outline-none transition-all cursor-pointer"
                                        >
                                            <option value="">Sélectionnez un pack ou service</option>
                                            <option value="Consultation Gratuite">Consultation Gratuite (15 min)</option>
                                            <option value="Pack Smart">Pack Smart — Admission (600 000 FCFA)</option>
                                            <option value="Pack Golden">Pack Golden — Admission + Visa, Recommandé (1 100 000 FCFA)</option>
                                            <option value="Pack Premium">Pack Premium — Visa (600 000 FCFA)</option>
                                            <option value="Pack Secours">Pack Secours — Titre de Séjour en France (450 €)</option>
                                            <option value="Autre">Autre demande</option>
                                        </select>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-[#0A192F] flex items-center gap-2">
                                            <Calendar size={18} className="text-[#F97316]" />
                                            Disponibilité Souhaitée
                                        </h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    name="date"
                                                    required
                                                    min={new Date().toISOString().split('T')[0]}
                                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A192F] outline-none transition-all pl-10"
                                                />
                                                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            </div>
                                            <div className="relative">
                                                <input
                                                    type="time"
                                                    name="time"
                                                    required
                                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A192F] outline-none transition-all pl-10"
                                                />
                                                <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <textarea
                                            name="message"
                                            placeholder="Précisez votre situation (Optionnel)..."
                                            rows={3}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A192F] outline-none transition-all"
                                        ></textarea>
                                    </div>

                                    {status?.message && !status.success && (
                                        <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                                            {status.message}
                                        </div>
                                    )}

                                    <Button 
                                        type="submit" 
                                        size="lg" 
                                        className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-bold h-14 rounded-xl shadow-lg shadow-[#F97316]/20 transition-all hover:scale-[1.02] active:scale-[0.98]" 
                                        disabled={isPending}
                                    >
                                        {isPending ? (
                                            <span className="flex items-center gap-2">
                                                <span className="animate-spin text-xl">⏳</span>
                                                Traitement...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Réserver mon créneau
                                                <Send size={18} />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                <p className="text-center mt-8 text-sm text-gray-500">
                    Vos données sont protégées et ne seront utilisées que pour ce rendez-vous.
                </p>
            </div>
        </div>
    )
}
