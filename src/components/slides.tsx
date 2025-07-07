
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
            <p className="mb-4">Na primeira reunião, nós trouxemos para vocês que contratamos um "acelerador de empresas" para suporte estratégico. E que a partir disso, algumas coisas mudariam de forma temporária até que conseguíssemos fazer mais nome e criar confiança nas pessoas que nos procuravam. Os pontos foram:</p>
            <ul className="space-y-2 list-disc list-inside">
                <li>Ajuste no valor da sessão, reduzindo de R$80,00 para R$60,00 para facilitar a captação inicial e gerar prova social. Esta redução impacta a margem da empresa, não o repasse aos psicólogos.</li>
                <li>Adoção temporária do modelo de sessões avulsas, além dos pacotes, para facilitar a adesão inicial.</li>
                <li>Ajustes na "promessa" e estrutura no site.</li>
                <li>Direcionamento do marketing para um nicho específico: ansiedade e estresse, embora outras demandas continuem sendo atendidas.</li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-headline mt-6 lg:mt-0 mb-2 text-primary">Situação Atual:</h3>
            <ul className="space-y-2 list-disc list-inside">
                <li>Mantemos a opção de sessões avulsas para quem está começando, mas estimulamos a migração para pacotes mensais, que oferecem vantagens como a 5ª sessão gratuita em meses com cinco semanas.</li>
                <li>Iniciamos o reajuste gradual dos valores, que agora variam entre R$79,99 e R$129,90, dependendo do dia, horário e modalidade (avulso ou mensal).</li>
                <li>O repasse para vocês segue sendo 50% do valor da sessão.</li>
                <li>Ampliamos os nichos de atuação, com a construção de novas landing pages (LPs) para demandas como conflitos de relacionamento e luto, além dos temas iniciais.</li>
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
        <p className="mb-8 text-center">Sabemos que a rotina de vocês é intensa, e respeitamos profundamente cada uma das jornadas individuais. Ao mesmo tempo, gostaríamos de conversar com carinho sobre algo que percebemos e que pode nos ajudar a fortalecer ainda mais a confiança dos pacientes e a fluidez interna da nossa equipe.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">1. Contato com os pacientes</h3>
                <p>Muitos dos nossos pacientes ainda têm dúvidas ou inseguranças ao buscar atendimento online. Por isso, pedimos que, sempre que receberem um novo encaminhamento, façam uma apresentação rápida no mesmo dia (ou, no máximo, em até 24h).</p>
                <p className="mt-2 text-sm text-muted-foreground">Essa atitude simples ajuda muito a gerar segurança e mostrar o cuidado que temos com cada pessoa desde o início. Lembrando que o pagamento acontece antes da primeira sessão, o que reforça ainda mais a importância desse acolhimento inicial.</p>
            </div>
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">2. Respostas internas</h3>
                <p>Também queremos pedir mais agilidade na resposta às comunicações internas — como enquetes, decisões e mensagens no grupo. Sabemos que, muitas vezes, enviamos mensagens fora do horário comercial, e queremos deixar claro que não esperamos respostas nesses horários. Fazemos isso apenas para que a informação já esteja ali quando vocês puderem visualizar.</p>
                <p className="mt-2 text-sm text-muted-foreground">Tudo isso acontece porque estamos numa fase em que a agilidade faz muita diferença no crescimento da clínica — vocês são nossa equipe alfa. Nosso objetivo nunca é sobrecarregar, mas sim facilitar a construção coletiva desse projeto, que está nascendo com tanto cuidado.</p>
            </div>
        </div>
    </div>
);

export const AgendaSlide = () => (
    <div className="max-w-4xl mx-auto text-left">
        <p className="text-lg text-center mb-6">
            Para que possamos manter nossos processos organizados — especialmente no que diz respeito à parte financeira e ao repasse das sessões — é fundamental que cada psicóloga crie e mantenha atualizada sua agenda no Google.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">Por que é tão importante?</h3>
                <p className="mb-2">A agenda é a ferramenta que utilizamos para:</p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Acompanhar os atendimentos realizados e agendados;</li>
                    <li>Fazer a cobrança correta dos pacientes;</li>
                    <li>Controlar os repasses de cada profissional com precisão.</li>
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">Quando essa informação não está preenchida corretamente ou atualizada, fica difícil garantir o controle do que foi ou não atendido, e isso pode gerar erros no financeiro, o que impacta diretamente tanto a clínica quanto vocês.</p>
            </div>
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">O que pedimos:</h3>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Criem uma agenda no Google (caso ainda não tenham);</li>
                    <li>Mantenham os atendimentos sempre registrados e atualizados;</li>
                    <li>Caso haja mudanças (faltas, cancelamentos, remarcações), lembrem-se de refletir isso na agenda também.</li>
                </ul>
            </div>
        </div>
    </div>
);

export const PersonaSlide = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-left max-w-6xl">
        <div>
            <h3 className="text-xl font-headline mb-4 text-primary">Ajustes na comunicação com o público (persona)</h3>
            <p>Ainda estamos em fase de construção e a nossa comunicação com a persona ideal — ou seja, o perfil de paciente com quem mais desejamos e temos potencial de trabalhar — ainda não está 100% alinhada.</p>
            <h4 className="font-semibold mt-4">O que isso significa na prática?</h4>
            <p className="mb-2">Pode acontecer de chegarem até a clínica pacientes que:</p>
            <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Estão apenas “experimentando” a terapia;</li>
                <li>Não estão tão comprometidos com o processo;</li>
                <li>Ou que farão apenas uma ou poucas sessões.</li>
            </ul>
            <p className="mt-4">Sabemos que isso pode ser frustrante para quem está se dedicando com tanto cuidado ao atendimento, e queremos reforçar que essa não é a experiência que buscamos oferecer a longo prazo.</p>
            <h4 className="font-semibold mt-4">Por que isso acontece?</h4>
            <ul className="space-y-2 list-disc list-inside text-sm mt-2">
                <li>Ainda estamos ajustando nossas estratégias de marketing, linguagem e posicionamento.</li>
                <li>Estamos testando formatos e nichos com apoio da aceleradora.</li>
                <li>A construção da autoridade e da identificação com o público ideal leva tempo — e estamos nesse processo, com passos consistentes.</li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-headline mb-4 text-primary">O que pedimos?</h3>
            <ul className="space-y-3 list-disc list-inside">
                <li>Paciência e parceria nesse início.</li>
                <li>Compreensão de que alguns perfis de pacientes não refletem o público que desejamos atrair no futuro próximo.</li>
                <li>Confiança de que estamos trabalhando para, cada vez mais, atrair pessoas que:</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside mt-2 ml-6 text-sm">
                <li>Entendem o valor da terapia;</li>
                <li>Desejam um acompanhamento constante;</li>
                <li>Estão dispostas a se comprometer com o processo.</li>
            </ul>
        </div>
    </div>
);

export const RedesSociaisSlide = () => (
    <div className="max-w-5xl mx-auto text-left">
        <p className="text-center mb-6">Sabemos que esse tipo de exposição pode não ser confortável para todas, e respeitamos profundamente os limites de cada uma. Ainda assim, gostaríamos de explicar por que essa presença tem um papel tão relevante nesse momento.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">Por que é importante?</h3>
                <ul className="space-y-3 list-disc list-inside">
                    <li>As pessoas se conectam com pessoas — e, no nosso caso, com psicólogas reais, humanas e acessíveis.</li>
                    <li>Quando mostramos quem está por trás da clínica, criamos confiança e proximidade com o público, o que facilita muito a adesão ao atendimento.</li>
                    <li>Nosso Instagram é uma vitrine importante para apresentar nosso trabalho e os valores que nos guiam, e ter vocês ali fortalece a credibilidade da Deep.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-headline mb-4 text-primary">Como vocês podem participar (se sentirem à vontade):</h3>
                <ul className="space-y-3 list-disc list-inside">
                    <li>Enviando conteúdos simples com dicas, reflexões ou curiosidades sobre temas da psicologia;</li>
                    <li>Gravando vídeos curtos ou respondendo perguntas frequentes que vocês recebem;</li>
                    <li>Participando de publicações especiais, como datas comemorativas, bastidores ou histórias inspiradoras;</li>
                    <li>Permitindo que compartilhemos trechos de textos já escritos por vocês (com os devidos créditos, claro).</li>
                </ul>
            </div>
        </div>
        <p className="text-center mt-8 text-sm text-muted-foreground font-semibold">
            Importante: Nenhuma ação será obrigatória, mas toda participação — mesmo a mais simples — faz diferença nesse momento em que estamos construindo autoridade e visibilidade.
        </p>
    </div>
);

export const CatalogoSlide = () => (
    <div className="max-w-4xl mx-auto text-left">
        <p className="text-lg text-center mb-6">
            Desenvolvemos um catálogo exclusivo para facilitar a conexão entre pacientes e psicólogas, onde os pacientes podem:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background/50">
                <CardHeader>
                    <CardTitle className="font-headline text-primary">1. Fazer um mini teste online</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>O teste é simples e rápido, com perguntas direcionadas para identificar a demanda principal de quem está buscando atendimento. Ao final, o sistema sugere o psicólogo ou psicóloga mais alinhado(a) com aquela demanda específica.</p>
                </CardContent>
            </Card>
            <Card className="bg-background/50">
                <CardHeader>
                    <CardTitle className="font-headline text-primary">2. Escolher diretamente</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Além do teste, o paciente pode navegar por um espaço onde apresentamos o nosso time com nome, foto e especialidades. Isso permite que ele escolha diretamente a profissional com quem mais se identifica.</p>
                </CardContent>
            </Card>
        </div>
        <p className="text-center mt-6 text-sm text-muted-foreground">
            Essa ferramenta tem sido uma forma delicada e inteligente de respeitar o tempo de quem busca ajuda, valorizar o trabalho de vocês e tornar o processo de decisão mais leve e humano.
        </p>
    </div>
);

export const ReconhecimentoSlide = () => (
    <div className="text-center">
    <h2 className="text-5xl lg:text-7xl font-headline text-primary drop-shadow-md leading-tight">
        Todas as nossas psis foram elogiadas... <br/><span className="text-accent animate-pulse">SEM EXCEÇÃO.</span>
    </h2>
    <p className="text-xl mt-8 text-secondary-foreground">Obrigado pelo empenho e dedicação de cada uma de vocês.</p>
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

