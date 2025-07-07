'use server';

/**
 * Server Action para receber o feedback do formulário.
 * Atualmente, esta ação apenas registra o feedback no console do servidor.
 *
 * Para enviar um e-mail de verdade para 'gabrielfurtunatofranca@gmail.com',
 * você precisaria integrar um serviço de envio de e-mail (como Resend,
 * SendGrid, ou Nodemailer) e chamar a função de envio aqui. Isso geralmente
 * requer uma chave de API que você obteria do serviço de e-mail.
 *
 * @param feedback O texto do feedback enviado pelo usuário.
 */
export async function submitFeedback(feedback: string): Promise<{ success: boolean; message: string }> {
  console.log("--- NOVO FEEDBACK RECEBIDO ---");
  console.log(`Para: gabrielfurtunatofranca@gmail.com`);
  console.log(`Enviado em: ${new Date().toISOString()}`);
  console.log("Feedback:", feedback);
  console.log("---------------------------------");

  // Ação futura: Adicionar lógica de envio de e-mail aqui.

  return { success: true, message: "Feedback registrado no servidor." };
}
