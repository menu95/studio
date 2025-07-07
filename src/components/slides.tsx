
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/logo";
import PriceChart from "@/components/price-chart";
import FeedbackForm from "@/components/feedback-form";

export const WelcomeSlide = () => (
    <div className="text-center">
      <div className="flex justify-center mb-8">
        <Logo className="w-48 h-48" />
      </div>
      <h1 className="text-5xl font-headline text-primary mb-2">
        Deep Insights
      </h1>
      <p className="text-2xl font-headline text-secondary-foreground">
        Pauta reunião de equipe
      </p>
      <p className="text-lg text-muted-foreground mt-4">
        08 de Julho de 2025
      </p>
    </div>
  );

export const ProcessosSlide = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-left max-w-6xl">
        <div>
            <p className="mb-4">Na primeira reunião, explicamos que contratamos um "acelerador de empresas" e que algumas coisas mudariam temporariamente para construirmos nossa marca e confiança.</p>
            <h3 className="text-xl font-headline mt-4 mb-2 text-primary">O que fizemos:</h3>
            <ul className="space-y-2 list-disc list-inside">
                <li>Ajuste no valor da sessão de R$80 para R$60 para facilitar a captação (sem impacto no repasse).</li>
                <li>Adoção de sessões avulsas para facilitar a adesão inicial.</li>
                <li>Ajustes na "promessa" e estrutura no site.</li>
                <li>Marketing direcionado para ansiedade e estresse.</li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-headline mt-6 lg:mt-0 mb-2 text-primary">Situação Atual:</h3>
            <ul className="space-y-2 list-disc list-inside">
                <li>Mantemos sessões avulsas, mas estimulamos pacotes mensais (com vantagens como 5ª sessão grátis).</li>
                <li>Reajuste gradual dos valores (agora entre R$79,99 - R$129,90).</li>
                <li>O repasse para vocês segue sendo 50% do valor da sessão.</li>
                <li>Ampliação de nichos: conflitos de relacionamento e luto.</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">(Em anexo: tabela atualizada de valores)</p>
            <div className="mt-4">
                <PriceChart />
            </div>
        </div>
    </div>
);


export const ComunicacaoSlide = () => (
    <div className="max-w-4xl mx-auto text-left">
        <p className="mb-8 text-center">Sabemos que a rotina de vocês é intensa, e respeitamos profundamente. Gostaríamos de conversar com carinho sobre algo que pode fortalecer ainda mais a confiança dos pacientes e a fluidez da nossa equipe.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">1. Contato com os pacientes</h3>
                <p>Muitos pacientes têm inseguranças ao buscar atendimento online. Pedimos que, ao receberem um novo encaminhamento, façam uma apresentação rápida no mesmo dia (ou em até 24h).</p>
                <p className="mt-2 text-sm text-muted-foreground">Essa atitude simples gera segurança e mostra nosso cuidado desde o início. O pagamento ocorre antes da primeira sessão, reforçando a importância do acolhimento.</p>
            </div>
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">2. Respostas internas</h3>
                <p>Pedimos mais agilidade na resposta às comunicações internas (enquetes, decisões). Não esperamos respostas fora do horário comercial, mas a agilidade nesta fase de crescimento é crucial.</p>
                <p className="mt-2 text-sm text-muted-foreground">Nosso objetivo é facilitar a construção coletiva desse projeto, que está nascendo com tanto cuidado.</p>
            </div>
        </div>
    </div>
);

export const AgendaSlide = () => (
    <div className="max-w-4xl mx-auto text-left">
        <p className="text-lg text-center mb-6">
            Para a organização dos processos financeiros e de repasse, é fundamental que cada psicóloga mantenha sua agenda no Google atualizada.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">Por que é tão importante?</h3>
                <p className="mb-2">A agenda é a ferramenta que usamos para:</p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Acompanhar atendimentos realizados e agendados;</li>
                    <li>Fazer a cobrança correta dos pacientes;</li>
                    <li>Controlar os repasses com precisão.</li>
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">Informações incorretas podem gerar erros no financeiro.</p>
            </div>
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">O que pedimos:</h3>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Criem (ou usem) uma agenda no Google;</li>
                    <li>Mantenham os atendimentos sempre registrados;</li>
                    <li>Registrem todas as mudanças (faltas, cancelamentos, etc).</li>
                </ul>
            </div>
        </div>
    </div>
);

export const PersonaSlide = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-left max-w-5xl">
        <div>
            <h3 className="text-xl font-headline mb-4 text-primary">Ajustes na comunicação com o público</h3>
            <p>Nossa comunicação com a persona ideal ainda está em construção. Por isso, podem chegar pacientes que estão "experimentando" ou menos comprometidos. Sabemos que pode ser frustrante, mas é temporário.</p>
            <p className="mt-4 font-semibold">Por que isso acontece?</p>
            <p className="text-sm">Ainda estamos ajustando o marketing e a construção de autoridade leva tempo.</p>
        </div>
        <div>
            <h3 className="text-xl font-headline mb-4 text-primary">O que pedimos?</h3>
            <ul className="space-y-3 list-disc list-inside">
                <li>Paciência e parceria nesse início.</li>
                <li>Compreensão de que alguns perfis não refletem nosso público-alvo futuro.</li>
                <li>Confiança de que estamos trabalhando para atrair pessoas mais comprometidas e que entendem o valor da terapia.</li>
            </ul>
        </div>
    </div>
);

export const RedesSociaisSlide = () => (
    <div className="max-w-5xl mx-auto text-left">
        <p className="text-center mb-6">Sabemos que a exposição nas redes sociais pode não ser confortável para todas, e respeitamos os limites de cada uma. Ainda assim, gostaríamos de explicar por que essa presença é tão relevante agora.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">Por que é importante?</h3>
                <ul className="space-y-3 list-disc list-inside">
                    <li>Pessoas se conectam com pessoas reais, humanas e acessíveis.</li>
                    <li>Mostrar quem está por trás da clínica cria confiança e proximidade.</li>
                    <li>O Instagram é nossa vitrine e ter vocês lá fortalece nossa credibilidade.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">Como participar (se à vontade):</h3>
                <ul className="space-y-3 list-disc list-inside">
                    <li>Enviando conteúdos simples (dicas, reflexões).</li>
                    <li>Gravando vídeos curtos ou respondendo perguntas.</li>
                    <li>Participando de publicações especiais.</li>
                    <li>Permitindo o compartilhamento de trechos de textos seus (com créditos).</li>
                </ul>
            </div>
        </div>
        <p className="text-center mt-8 text-sm text-muted-foreground font-semibold">
            Importante: Nenhuma ação é obrigatória, mas toda participação faz a diferença para construirmos nossa autoridade.
        </p>
    </div>
);

export const CatalogoSlide = () => (
    <div className="max-w-4xl mx-auto text-left">
        <p className="text-lg text-center mb-6">
            Desenvolvemos um catálogo para facilitar a conexão entre pacientes e psicólogas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background/50">
                <CardHeader>
                    <CardTitle className="font-headline text-primary">1. Mini Teste Online</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Um teste rápido para identificar a demanda principal. Ao final, o sistema sugere a psicóloga mais alinhada.</p>
                </CardContent>
            </Card>
            <Card className="bg-background/50">
                <CardHeader>
                    <CardTitle className="font-headline text-primary">2. Escolha Direta</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>O paciente pode navegar pelos perfis (nome, foto, especialidades) e escolher diretamente com quem mais se identifica.</p>
                </CardContent>
            </Card>
        </div>
        <p className="text-center mt-6 text-sm text-muted-foreground">
            Essa ferramenta respeita o tempo de quem busca ajuda, valoriza o trabalho de vocês e torna o processo mais leve e humano.
        </p>
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
            <h3 className="text-2xl font-headline text-primary mb-4">Feedback</h3>
            <p className="mb-4">Para concluir, gostaríamos de abrir um espaço para seus valiosos feedbacks. Compartilhe suas ideias, sugestões e percepções sobre os temas que conversamos.</p>
            <p className="text-sm text-muted-foreground">Sua opinião é fundamental para construirmos a Deep juntas.</p>
        </div>
        <div>
            <FeedbackForm />
        </div>
    </div>
);
