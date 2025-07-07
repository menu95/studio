'use server';

import { Resend } from 'resend';

// A instância do Resend é criada com a chave da API das variáveis de ambiente.
// Certifique-se de que a variável RESEND_API_KEY está definida no seu arquivo .env.
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'gabrielfurtunatofranca@gmail.com';
// Este deve ser um e-mail de um domínio que você verificou com o Resend.
// Para fins de teste, o Resend permite usar 'onboarding@resend.dev'.
const fromEmail = 'onboarding@resend.dev'; 

/**
 * Server Action para receber o feedback do formulário e enviá-lo por e-mail.
 *
 * @param feedback O texto do feedback enviado pelo usuário.
 */
export async function submitFeedback(feedback: string): Promise<{ success: boolean; message: string }> {
  // Validação simples para garantir que a chave da API e o feedback existem.
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'YOUR_RESEND_API_KEY') {
    console.error("RESEND_API_KEY não está configurada.");
    return { success: false, message: "Erro de configuração no servidor. A chave da API de e-mail não foi encontrada." };
  }
  if (!feedback) {
    return { success: false, message: "O feedback não pode estar vazio." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Feedback Deep Insights <${fromEmail}>`,
      to: [toEmail],
      subject: 'Novo Feedback Recebido - Deep Insights Deck',
      text: `Um novo feedback foi enviado:\n\n---\n\n${feedback}\n\n---\n\nEnviado em: ${new Date().toLocaleString()}`,
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      return { success: false, message: "Falha ao enviar o e-mail." };
    }

    console.log("E-mail enviado com sucesso:", data);
    return { success: true, message: "Seu feedback foi enviado com sucesso!" };
  } catch (exception) {
    console.error("Exceção ao enviar e-mail:", exception);
    return { success: false, message: "Ocorreu um erro inesperado." };
  }
}
