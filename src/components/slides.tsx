
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/logo";
import PriceChart from "@/components/price-chart";
import SocialScheduler from "@/components/social-scheduler";
import PresentationSummary from "@/components/presentation-summary";
import FeedbackForm from "@/components/feedback-form";

export const WelcomeSlide = () => (
  <div className="text-center">
    <div className="flex justify-center mb-8">
      <Logo className="w-48 h-48 text-primary" />
    </div>
    <h1 className="text-5xl font-headline text-primary mb-2">
      Deep Insights
    </h1>
    <p className="text-2xl font-headline text-secondary-foreground">
      Pauta Reunião de Equipe
    </p>
    <p className="text-lg text-muted-foreground mt-4">
      08 de Julho de 2025
    </p>
  </div>
);

export const ProcessosSlide = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-xl font-headline mb-4 text-primary">O que estamos fazendo e o que fizemos</h3>
      <ul className="space-y-3 list-disc list-inside text-left">
        <li>Ajuste no valor da sessão de R$80 para R$60 para facilitar a captação e gerar prova social.</li>
        <li>Adoção de sessões avulsas para facilitar a adesão inicial.</li>
        <li>Marketing direcionado para ansiedade e estresse.</li>
      </ul>
      <h3 className="text-xl font-headline mt-6 mb-4 text-primary">Situação Atual</h3>
      <ul className="space-y-3 list-disc list-inside text-left">
        <li>Estimulamos a migração para pacotes mensais (com vantagens).</li>
        <li>Reajuste gradual dos valores (R$79,99 - R$129,90).</li>
        <li>Repasse de 50% mantido para os psicólogos.</li>
        <li>Ampliação de nichos: conflitos de relacionamento e luto.</li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-headline mb-4 text-center text-primary">Evolução de Preços</h3>
      <PriceChart />
    </div>
  </div>
);

export const ComunicacaoSlide = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <h3 className="text-xl font-headline mb-4 text-primary">Contato com Pacientes</h3>
            <p>
                Muitos pacientes têm inseguranças ao buscar atendimento online. Uma apresentação rápida no mesmo dia (ou em até 24h) gera segurança e mostra nosso cuidado.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
                Lembrete: o pagamento ocorre antes da primeira sessão, reforçando a importância do acolhimento inicial.
            </p>
        </div>
        <div>
            <h3 className="text-xl font-headline mb-4 text-primary">Respostas Internas</h3>
            <p>
                Pedimos mais agilidade nas respostas internas (enquetes, decisões). Não esperamos respostas fora do horário comercial.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
                Essa agilidade é crucial para o crescimento da clínica nesta fase. Nosso objetivo é facilitar a construção coletiva.
            </p>
        </div>
    </div>
);

export const AgendaSlide = () => (
    <div>
        <p className="text-lg text-center mb-6 max-w-3xl mx-auto">
            Para a organização dos processos financeiros e de repasse, é fundamental que cada psicóloga mantenha sua agenda no Google atualizada.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
                <CardHeader><CardTitle className="font-headline text-primary">Acompanhamento</CardTitle></CardHeader>
                <CardContent>Usamos a agenda para acompanhar atendimentos realizados e agendados.</CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle className="font-headline text-primary">Cobrança</CardTitle></CardHeader>
                <CardContent>A agenda garante a cobrança correta dos pacientes.</CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle className="font-headline text-primary">Repasses</CardTitle></CardHeader>
                <CardContent>Permite o controle preciso dos repasses de cada profissional.</CardContent>
            </Card>
        </div>
        <p className="text-center mt-6 text-muted-foreground">
            Lembrem-se de registrar todas as mudanças (faltas, cancelamentos, remarcações).
        </p>
    </div>
);

export const PersonaSlide = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
            <h3 className="text-xl font-headline mb-4 text-primary">Por que isso acontece?</h3>
            <p>Ainda estamos ajustando nossas estratégias de marketing e posicionamento. A construção de autoridade leva tempo.</p>
            <p className="mt-4">Pode acontecer de chegarem pacientes que estão apenas "experimentando" ou não estão tão comprometidos. Isso é temporário.</p>
        </div>
        <div>
            <h3 className="text-xl font-headline mb-4 text-primary">O que pedimos?</h3>
            <ul className="space-y-3 list-disc list-inside">
                <li>Paciência e parceria neste início.</li>
                <li>Compreensão de que alguns perfis não refletem nosso público-alvo futuro.</li>
                <li>Confiança de que estamos trabalhando para atrair pacientes mais comprometidos e que entendem o valor da terapia.</li>
            </ul>
        </div>
    </div>
);

export const RedesSociaisSlide = () => (
    <div>
            <p className="text-lg text-center mb-6 max-w-3xl mx-auto">
            A participação nas redes sociais é opcional, mas muito relevante para nos conectar com o público e construir confiança.
        </p>
        <div className="lg:col-span-2">
            <SocialScheduler />
        </div>
    </div>
);

export const CatalogoSlide = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
            <h3 className="text-xl font-headline mb-4 text-primary">Facilitando a Conexão</h3>
            <p>Desenvolvemos um catálogo exclusivo com IA onde os pacientes podem fazer um mini teste online para encontrar a psicóloga mais alinhada com sua demanda.</p>
            <p className="mt-4">Eles também podem navegar pelos perfis e escolher diretamente a profissional com quem mais se identificam, fortalecendo o vínculo desde o início.</p>
        </div>
        <Card className="bg-background/70">
            <CardHeader>
                <CardTitle className="font-headline text-primary">Benefícios da Ferramenta</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 list-disc list-inside">
                    <li>Respeita o tempo de quem busca ajuda.</li>
                    <li>Valoriza o trabalho das psicólogas.</li>
                    <li>Torna o processo de decisão mais leve e humano.</li>
                </ul>
            </CardContent>
        </Card>
    </div>
);

export const ReconhecimentoSlide = () => (
    <div className="text-center">
    <h2 className="text-5xl font-headline text-primary drop-shadow-md">
        Todas as nossas psis foram elogiadas.
    </h2>
    <p className="text-8xl font-headline text-accent mt-4 animate-pulse">
        SEM EXCEÇÃO.
    </p>
    <p className="text-xl mt-8 text-secondary-foreground">Obrigado pelo empenho e dedicação de cada uma.</p>
  </div>
);

export const ProximosPassosSlide = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
    <div>
      <h3 className="text-2xl font-headline text-primary mb-4">Resumo e Feedback</h3>
      <p className="mb-4">Para concluir, vamos gerar um resumo dos pontos-chave da nossa conversa e abrir um espaço para seus valiosos feedbacks.</p>
      <PresentationSummary textToSummarize={`- Processos: Ajuste de valor da sessão para R$60, adoção de sessões avulsas, e marketing para ansiedade e estresse. Migração para pacotes mensais, reajuste gradual de valores, manutenção de 50% de repasse e ampliação de nichos.
- Agilidade na Comunicação: Importância do contato rápido com pacientes e respostas ágeis internamente.
- Organização da Agenda: Necessidade de manter a agenda do Google atualizada para controle financeiro.
- Ajustes na Persona: Adaptação das estratégias de marketing e paciência com o perfil dos pacientes iniciais.
- Redes Sociais: A participação é opcional mas relevante.
- Catálogo de Psis Inteligente: Ferramenta de IA para ajudar pacientes a encontrar a psicóloga ideal.
- Reconhecimento: Elogios a todas as psicólogas da equipe.`} />
    </div>
    <div>
      <FeedbackForm />
    </div>
  </div>
);
