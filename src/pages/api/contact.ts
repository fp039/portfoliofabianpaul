import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Sanitize input data
const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Sanitize all input fields
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      subject: sanitizeInput(data.subject),
      message: sanitizeInput(data.message)
    };

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
      subject: `Neue Kontaktanfrage: ${sanitizedData.subject}`,
      text: `
        Name: ${sanitizedData.name}
        E-Mail: ${sanitizedData.email}
        Betreff: ${sanitizedData.subject}
        
        Nachricht:
        ${sanitizedData.message}
      `,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>E-Mail:</strong> ${sanitizedData.email}</p>
        <p><strong>Betreff:</strong> ${sanitizedData.subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${sanitizedData.message.split('\n').join('<br>')}</p>
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