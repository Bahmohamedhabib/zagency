'use server'

import nodemailer from 'nodemailer'

export async function sendContactEmail(formData: FormData) {
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    // Validation simple
    if (!name || !phone || !message) {
        return { success: false, message: 'Veuillez remplir tous les champs obligatoires.' }
    }

    // Configuration du transporteur SMTP
    // Utilisation explicite des ports pour éviter les ambigüités
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: process.env.EMAIL_USER,
            // Suppression automatique des espaces au cas où l'utilisateur en a laissé
            pass: process.env.EMAIL_PASS?.replace(/\s+/g, ''),
        },
    })

    try {
        console.log('--- DIAGNOSTIC EMAIL ---')
        console.log('USER:', process.env.EMAIL_USER)
        // Ne jamais logger le mot de passe entier pour sécurité
        const passLength = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0
        console.log('PASS configured (length):', passLength)

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email || undefined,
            subject: `📧 NOUVEAU MESSAGE: ${name} - ${subject}`,
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #0A192F; border-bottom: 2px solid #F97316; padding-bottom: 10px;">Nouveau Message Contact</h2>
            
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Email:</strong> ${email || 'Non renseigné'}</p>
            <p><strong>Objet:</strong> ${subject}</p>
            
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #0A192F;">Message:</h3>
                <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #666;">Envoyé depuis le site web Z'AGENCY.</p>
        </div>
      `,
        }

        // Vérifie la connexion avant d'envoyer
        await transporter.verify()
        console.log('Connexion SMTP OK.')

        await transporter.sendMail(mailOptions)
        console.log('Email envoyé avec succès.')

        return { success: true, message: 'Message envoyé avec succès !' }
    } catch (error: any) {
        console.error('--- ERREUR NODEMAILER ---')
        console.error(error)

        let errorMessage = "Erreur technique inconnue."
        if (error.code === 'EAUTH') {
            errorMessage = "Échec d'authentification. Vérifiez votre email et votre mot de passe d'application dans .env.local (assurez-vous d'utiliser un Mot de passe d'application Google, pas votre mot de passe normal)."
        } else if (error.response) {
            errorMessage = `Erreur SMTP: ${error.response}`
        } else if (error.message) {
            errorMessage = error.message
        }

        return { success: false, message: `Oups ! ${errorMessage}` }
    }
}
