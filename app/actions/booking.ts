'use server'

import nodemailer from 'nodemailer'

export async function sendBookingEmail(formData: FormData) {
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const service = formData.get('service') as string
    const date = formData.get('date') as string
    const time = formData.get('time') as string
    const message = formData.get('message') as string

    // Validation
    if (!name || !phone || !service || !date || !time) {
        return { success: false, message: 'Veuillez remplir tous les champs obligatoires.' }
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS?.replace(/\s+/g, ''),
        },
    })

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email || undefined,
            subject: `📅 RDV DEMANDÉ: ${name} - ${service}`,
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #0A192F; border-bottom: 2px solid #F97316; padding-bottom: 10px;">Nouvelle Demande de Rendez-vous</h2>
            
            <p><strong>Client:</strong> ${name}</p>
            <p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Email:</strong> ${email || 'Non renseigné'}</p>
            
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p style="margin: 0;"><strong>Service:</strong> ${service}</p>
                <p style="margin: 5px 0 0 0;"><strong>Date:</strong> ${date}</p>
                <p style="margin: 5px 0 0 0;"><strong>Heure:</strong> ${time}</p>
            </div>
            
            ${message ? `
            <h3>Note/Message:</h3>
            <p style="font-style: italic; background: #fff; padding: 10px; border-left: 4px solid #F97316;">${message.replace(/\n/g, '<br/>')}</p>
            ` : ''}
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #666;">Ceci est un email automatique envoyé depuis le site Z'AGENCY.</p>
        </div>
      `,
        }

        await transporter.verify()
        await transporter.sendMail(mailOptions)

        return { success: true, message: 'Votre demande de rendez-vous a été envoyée avec succès ! Nous vous recontacterons pour confirmer.' }
    } catch (error: any) {
        console.error('ERREUR BOOKING:', error)
        
        let errorMessage = "Erreur lors de l'envoi."
        if (error.code === 'EAUTH') {
            errorMessage = "Erreur d'authentification SMTP. Vérifiez les variables d'environnement."
        } else if (error.message) {
            errorMessage = error.message
        }

        return { success: false, message: `Erreur: ${errorMessage}` }
    }
}
