import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ═══ HERO ═══ */}
      <section className="relative bg-[#0A192F] text-white overflow-hidden min-h-[92vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="/images/france-campus.png" alt="Background" fill className="object-cover" priority />
        </div>
        {/* Lumières de fond */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-[#F97316] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-600 blur-[100px]" />
        </div>

        <div className="container mx-auto relative z-10 px-4 py-24 md:py-0">
          <div className="flex flex-col md:flex-row items-center gap-16">

            {/* Texte */}
            <div className="flex-1 text-center md:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-sm font-semibold px-4 py-2 rounded-full">
                🇫🇷 Service d'accompagnement indépendant — Côte d'Ivoire & Afrique
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
                Étudier en France,
                <span className="block text-[#F97316] mt-1">c'est votre droit.</span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
                {siteConfig.slogan} De la procédure Campus France jusqu'à votre installation en France.
                Un accompagnement <strong className="text-white">100% personnalisé</strong> pour que votre projet se réalise.
              </p>

              {/* Stats rapides */}
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                {[
                  { val: "200+", label: "Étudiants accompagnés" },
                  { val: "95%", label: "Taux de réussite" },
                  { val: "7j/7", label: "Disponibilité" },
                ].map((s, i) => (
                  <div key={i} className="text-center md:text-left">
                    <div className="text-2xl font-black text-[#F97316]">{s.val}</div>
                    <div className="text-gray-400 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/rendez-vous">
                  <Button size="lg" className="text-white font-bold h-14 px-8 text-lg rounded-xl shadow-xl shadow-[#F97316]/20" style={{ backgroundColor: '#F97316' }}>
                    Prendre Rendez-vous
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 rounded-xl border-white/30 text-white hover:bg-white/10" style={{ backgroundColor: 'transparent' }}>
                    Voir nos packs →
                  </Button>
                </Link>
                <Link href={siteConfig.links.whatsapp} target="_blank">
                  <Button variant="whatsapp" size="lg" className="h-14 px-8 text-lg rounded-xl">
                    WhatsApp
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image flottante */}
            <div className="hidden md:block relative w-[420px] shrink-0">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl border-2 border-[#F97316]/20" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image src="/images/student-laptop.png" alt="Étudiant Z'Agency" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/70 to-transparent" />
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <p className="text-white font-black text-sm">✅ Dossier validé. Visa obtenu.</p>
                  <p className="text-gray-300 text-xs mt-0.5">Konan A. — Université de Lyon 2, Promo 2024</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ BARRE DE CONFIANCE ═══ */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 font-medium">
            {["🎓 Campus France", "🛂 Visa France-Visas", "🏠 Garantie Logement", "💳 Garantie Financière", "✈️ Assistance Départ"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ POURQUOI NOUS ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16">

            {/* Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="absolute top-6 left-6 w-full h-full bg-[#F97316]/5 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video border border-gray-100">
                <Image src="/images/student-laptop.png" alt="Étudiant réussi" fill className="object-cover" />
              </div>
              {/* Badge résultat */}
              <div className="absolute -bottom-5 -right-4 bg-[#0A192F] text-white rounded-2xl p-5 shadow-2xl border border-white/10">
                <div className="text-3xl font-black text-[#F97316]">95%</div>
                <div className="text-xs text-gray-300">de réussite</div>
              </div>
            </div>

            {/* Texte */}
            <div className="w-full md:w-1/2 space-y-6">
              <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest">Pourquoi nous choisir ?</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A192F] leading-tight">
                Une simple erreur de dossier<br />peut vous coûter <span className="text-[#F97316]">une année entière.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                La procédure Campus France et la demande de visa sont semées d'embûches administratives.
                Nous sommes là pour sécuriser chaque étape — du premier document au visa obtenu.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: "🌍", text: "Expertise sur les procédures Côte d'Ivoire & Afrique" },
                  { icon: "🔎", text: "Relecture rigoureuse de chaque document du dossier" },
                  { icon: "🎤", text: "Coaching et simulation d'entretien Campus France" },
                  { icon: "💬", text: "Disponibilité WhatsApp 7j/7 — même le week-end" },
                  { icon: "✈️", text: "Accompagnement jusqu'à votre installation en France" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <span className="text-gray-800 font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/a-propos">
                <Button variant="outline" size="lg" className="mt-2">
                  En savoir plus sur nous →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OFFRES (3 PACKS + SECOURS) ═══ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-4">Nos formules</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A192F] mb-4">Nos Offres d'Accompagnement</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-14">
            De la procédure d'admission jusqu'à votre installation en France. Choisissez le pack qui correspond à votre situation.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">

            {/* Pack Smart */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300 group">
              <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 w-fit">Admission</span>
              <h3 className="text-2xl font-black text-[#0A192F] mb-2">Pack Smart</h3>
              <p className="text-3xl font-black text-[#0A192F] mb-1">{siteConfig.pricing.smart}</p>
              <p className="text-gray-500 text-sm mb-6">De l'étude de votre dossier jusqu'à l'admission.</p>
              <ul className="text-left space-y-3 mb-8 flex-1 text-sm text-gray-600">
                {["Étude de votre dossier", "Conseil & choix des formations", "Montage complet du dossier", "Formations pour l'entretien", "Suivi jusqu'à l'admission"].map((f, i) => (
                  <li key={i} className="flex gap-2 items-center"><span className="text-[#F97316] font-bold">✓</span>{f}</li>
                ))}
              </ul>
              <Link href="/services" className="mt-auto">
                <Button className="w-full group-hover:bg-[#0A192F] group-hover:text-white transition-colors" variant="outline">Voir les détails</Button>
              </Link>
            </div>

            {/* Pack Golden — RECOMMANDÉ */}
            <div className="relative bg-[#0A192F] text-white rounded-2xl shadow-2xl border-2 border-[#F97316] flex flex-col scale-[1.04] z-10 hover:scale-[1.06] transition-transform duration-300">
              <div className="bg-[#F97316] text-white text-xs font-black py-2 text-center tracking-widest rounded-t-xl">
                ⭐ RECOMMANDÉ — Pack Tout-en-Un
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="inline-block bg-[#F97316]/20 text-[#F97316] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 w-fit">Admission + Visa</span>
                <h3 className="text-2xl font-black text-white mb-2">Pack Golden</h3>
                <p className="text-3xl font-black text-[#F97316] mb-0.5">{siteConfig.pricing.golden}</p>
                <p className="text-green-400 text-xs font-semibold mb-6">🎁 Économisez 100 000 FCFA</p>
                <p className="text-gray-300 text-sm mb-6">Tous nos services d'admission et de visa réunis en une seule offre.</p>
                <ul className="text-left space-y-3 mb-8 flex-1 text-sm text-gray-200">
                  {["Tout le Pack Smart inclus", "Garantie Financière", "Garantie Logement", "Visa + Billet d'avion", "Accompagnement 3 mois en France"].map((f, i) => (
                    <li key={i} className="flex gap-2 items-center"><span className="text-[#F97316] font-bold">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/rendez-vous" className="mt-auto">
                  <Button className="w-full bg-[#F97316] hover:bg-[#F97316]/90 border-none text-white font-black text-base h-12">Choisir Golden</Button>
                </Link>
              </div>
            </div>

            {/* Pack Premium */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300 group">
              <span className="inline-block bg-orange-50 text-[#F97316] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 w-fit">Visa</span>
              <h3 className="text-2xl font-black text-[#0A192F] mb-2">Pack Premium</h3>
              <p className="text-3xl font-black text-[#0A192F] mb-1">{siteConfig.pricing.premium}</p>
              <p className="text-gray-500 text-sm mb-6">Tous les critères d'obtention du visa pour études en France.</p>
              <ul className="text-left space-y-3 mb-8 flex-1 text-sm text-gray-600">
                {["Garantie Financière", "Garantie Logement", "RDV à l'ambassade", "Assistance billet d'avion", "Accompagnement 3 mois en France"].map((f, i) => (
                  <li key={i} className="flex gap-2 items-center"><span className="text-[#F97316] font-bold">✓</span>{f}</li>
                ))}
              </ul>
              <Link href="/services" className="mt-auto">
                <Button className="w-full group-hover:bg-[#0A192F] group-hover:text-white transition-colors" variant="outline">Voir les détails</Button>
              </Link>
            </div>

          </div>

          {/* Bannière Pack Secours */}
          <div className="mt-12 relative bg-[#0A192F] text-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-[#F97316]" />
            <div className="p-8 md:p-10 flex-1 text-left">
              <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                🇫🇷 Z'Agency En France
              </span>
              <h3 className="text-2xl font-black mb-2">Pack Secours — Garantie Financière</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xl">
                Déjà en France ? Blocage financier lors de votre renouvellement de titre de séjour ?
                Nous mettons à votre disposition des garants financiers solvables et constituons votre dossier préfecture.
              </p>
              <Link href="/resident">
                <Button className="bg-[#F97316] hover:bg-[#F97316]/90 font-bold" size="lg">
                  Découvrir le Pack Secours →
                </Button>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center w-56 p-10 border-l border-white/10 shrink-0 flex-col gap-2">
              <div className="text-5xl mb-2">🏛️</div>
              <div className="text-3xl font-black text-[#F97316]">{siteConfig.pricing.secours}</div>
              <p className="text-gray-400 text-xs text-center">Toutes préfectures de France</p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ PROCESSUS APERÇU ═══ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-4">Notre méthode</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A192F]">Un processus en 5 étapes claires</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">De votre premier contact jusqu'à votre visa obtenu — tout est structuré.</p>
          </div>
          <div className="grid sm:grid-cols-5 gap-4">
            {[
              { num: "01", icon: "🎯", label: "Orientation" },
              { num: "02", icon: "📂", label: "Dossier" },
              { num: "03", icon: "✅", label: "Soumission" },
              { num: "04", icon: "🎤", label: "Entretien" },
              { num: "05", icon: "✈️", label: "Visa" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group">
                <div className="relative w-full">
                  <div className="bg-gray-50 group-hover:bg-[#0A192F] border border-gray-100 rounded-2xl p-6 text-center transition-colors duration-300">
                    <div className="text-3xl mb-2">{s.icon}</div>
                    <div className="text-xs font-black text-[#F97316]">{s.num}</div>
                    <div className="text-sm font-bold text-[#0A192F] group-hover:text-white transition-colors mt-1">{s.label}</div>
                  </div>
                  {i < 4 && <div className="hidden sm:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200 z-10" />}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/processus">
              <Button variant="outline" size="lg">Voir le processus détaillé →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-24 bg-[#F97316] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Votre rêve mérite<br />le meilleur accompagnement.
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Ne laissez pas les procédures administratives briser votre avenir.
            Nos experts sont là pour vous guider à chaque étape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rendez-vous">
              <Button size="lg" className="bg-white text-[#F97316] hover:bg-gray-100 font-black h-14 px-10 text-lg">
                Prendre Rendez-vous
              </Button>
            </Link>
            <Link href={siteConfig.links.whatsapp} target="_blank">
              <Button variant="whatsapp" size="lg" className="h-14 px-8 text-lg rounded-xl">
                WhatsApp maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
