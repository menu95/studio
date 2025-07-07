'use server';

import { Resend } from 'resend';

// The Resend instance is created with the API key from environment variables.
const resend = new Resend(process.env.RESEND_API_KEY);

// The recipient email is also loaded from environment variables for easy configuration.
const toEmail = process.env.TO_EMAIL;

// This must be a domain you have verified with Resend.
// For testing purposes, Resend allows using 'onboarding@resend.dev'.
const fromEmail = 'onboarding@resend.dev'; 

/**
 * Server Action to receive feedback from the form and send it via email.
 *
 * @param feedback The feedback text submitted by the user.
 */
export async function submitFeedback(feedback: string): Promise<{ success: boolean; message: string }> {
  // Simple validation to ensure API key, recipient email, and feedback exist.
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'YOUR_RESEND_API_KEY') {
    console.error("RESEND_API_KEY is not configured.");
    return { success: false, message: "Server configuration error. Email API key not found." };
  }
  if (!toEmail) {
    console.error("TO_EMAIL is not configured in .env file.");
    return { success: false, message: "Server configuration error. Recipient email not found." };
  }
  if (!feedback) {
    return { success: false, message: "Feedback cannot be empty." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Feedback Deep Insights <${fromEmail}>`,
      to: [toEmail],
      subject: 'Novo Feedback Recebido - Deep Insights Deck',
      text: `Um novo feedback foi enviado:\n\n---\n\n${feedback}\n\n---\n\nEnviado em: ${new Date().toLocaleString()}`,
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, message: "Failed to send the email." };
    }

    console.log("Email sent successfully:", data);
    return { success: true, message: "Your feedback has been sent successfully!" };
  } catch (exception) {
    console.error("Exception sending email:", exception);
    return { success: false, message: "An unexpected error occurred." };
  }
}
