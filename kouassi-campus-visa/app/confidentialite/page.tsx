import { siteConfig } from "@/config/site"

export default function PrivacyPage() {
    return (
        <div className="py-16 container px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
            <div className="prose max-w-none text-gray-700 space-y-6">
                <p>
                    Votre vie privée est importante pour nous. Cette politique explique comment nous collectons et utilisons vos informations.
                </p>

                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Données collectées</h2>
                    <p>
                        Nous collectons uniquement les données que vous nous transmettez via le formulaire de contact ou lors de nos échanges WhatsApp :<br />
                        - Nom et Prénom<br />
                        - Numéro de téléphone / WhatsApp<br />
                        - Adresse email<br />
                        - Informations sur votre projet d'études
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">2. Finalité</h2>
                    <p>
                        Ces données sont utilisées exclusivement pour vous recontacter et vous proposer nos services d'accompagnement. Elles ne sont jamais vendues à des tiers.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Conservation</h2>
                    <p>
                        Vos données sont conservées pendant la durée de votre accompagnement et jusqu'à 2 ans après la fin de la relation commerciale, sauf demande de suppression de votre part.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Vos droits</h2>
                    <p>
                        Conformément à la loi, vous pouvez demander l'accès, la rectification ou la suppression de vos données en nous contactant à : {siteConfig.contact.email}.
                    </p>
                </section>
            </div>
        </div>
    )
}
