import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // E-Mail-Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: import.meta.env.EMAIL_HOST,
      port: parseInt(import.meta.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASSWORD,
      },
    });

    // E-Mail-Optionen
    const mailOptions = {
      from: import.meta.env.EMAIL_USER,
      to: 'hello@fabian-paul.design',
      subject: `Neue Kontaktanfrage: ${data.subject}`,
      text: `
        Name: ${data.name}
        E-Mail: ${data.email}
        Betreff: ${data.subject}
        
        Nachricht:
        ${data.message}
      `,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Betreff:</strong> ${data.subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({
      message: 'E-Mail erfolgreich gesendet'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Fehler beim E-Mail-Versand:', error);
    return new Response(JSON.stringify({
      message: 'Fehler beim Senden der E-Mail'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 