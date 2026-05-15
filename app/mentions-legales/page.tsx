export default function LegalPage() {
    return (
        <div className="py-16 container px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
            <div className="prose max-w-none text-gray-700 space-y-6">
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Éditeur du site</h2>
                    <p>
                        Le présent site est édité par l'entreprise individuelle Z'AGENCY.<br />
                        Siège social : Abidjan, Côte d'Ivoire.<br />
                        Email : contact@zagency.com
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">2. Hébergement</h2>
                    <p>
                        Ce site est hébergé par Vercel Inc. <br />
                        340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble des contenus (textes, images, illustrations) est la propriété exclusive de l'éditeur ou de ses partenaires. Toute reproduction est interdite sans autorisation.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Avertissement</h2>
                    <p>
                        Ce site propose un service d'accompagnement et de conseil privé. Il n'est <strong>PAS affilié à Campus France, ni aux ambassades ou consulats de France.</strong><br />
                        Nous ne délivrons pas de visas et ne garantissons pas leur obtention. La décision finale appartient aux autorités compétentes.
                    </p>
                </section>
            </div>
        </div>
    )
}
