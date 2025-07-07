
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    HandCoins, TrendingUp, Tags, Users, FileText, CheckCircle, Info,
    PhoneForwarded, MessagesSquare,
    CalendarCheck, ListChecks, Database, AlertCircle,
    AlertTriangle, Search, Lightbulb, UserCheck as PersonaUserCheck, Heart,
    ThumbsUp, Instagram, Send, Video, Award as AwardIcon,
    CheckSquare, UserPlus,
    Sparkles as SparkleIcon,
    MessageSquarePlus
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-left max-w-6xl w-full">
        <Card className="bg-background/30">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2">
                    <HandCoins />
                    O que fizemos
                </CardTitle>
                <CardDescription>Ações estratégicas iniciais com o acelerador de empresas.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                    <Tags className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                    <p><b>Ajuste no valor da sessão:</b> Reduzimos de R$80,00 para R$60,00 para facilitar a captação inicial e gerar prova social, impactando a margem da empresa, não o repasse.</p>
                </div>
                <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                    <p><b>Sessões avulsas:</b> Adotamos temporariamente para facilitar a adesão inicial, além dos pacotes.</p>
                </div>
                <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                    <p><b>Ajustes no site:</b> Mudamos a "promessa" e a estrutura para melhor comunicação.</p>
                </div>
                <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                    <p><b>Foco do marketing:</b> Direcionamos para o nicho de ansiedade e estresse, sem deixar de atender outras demandas.</p>
                </div>
            </CardContent>
        </Card>

        <div className="space-y-6">
            <Card className="bg-background/30">
                 <CardHeader>
                    <CardTitle className="font-headline text-primary flex items-center gap-2">
                        <TrendingUp />
                        Situação Atual
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                    <p>Mantemos a opção de sessões avulsas para quem está começando, mas <b>estimulamos a migração para pacotes mensais</b>, que oferecem vantagens como a 5ª sessão gratuita em meses com cinco semanas.</p>
                    <p>Iniciamos o <b>reajuste gradual dos valores</b>, que agora variam entre R$79,99 e R$129,90, dependendo do dia, horário e modalidade (avulso ou mensal).</p>
                    <p>O repasse para vocês segue sendo <b>50% do valor da sessão</b>.</p>
                    <p><b>Ampliamos os nichos de atuação</b>, com a construção de novas landing pages (LPs) para demandas como conflitos de relacionamento e luto, além dos temas iniciais.</p>
                </CardContent>
            </Card>
            <div className="mt-4">
                <PriceChart />
                <p className="text-xs text-muted-foreground mt-2 text-center flex items-center justify-center gap-1"><Info size={12}/> Tabela atualizada de valores em anexo.</p>
            </div>
        </div>
    </div>
);


export const ComunicacaoSlide = () => (
    <div className="max-w-5xl mx-auto text-left w-full">
        <p className="mb-8 text-center text-lg text-muted-foreground">
            Sabemos que a rotina de vocês é intensa, e respeitamos profundamente cada uma das jornadas individuais. Ao mesmo tempo, gostaríamos de conversar com carinho sobre algo que pode nos ajudar a fortalecer ainda mais a confiança dos pacientes e a fluidez interna da nossa equipe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background/30 hover:shadow-lg transition-shadow">
                <CardHeader>
                    <CardTitle className="font-headline text-primary flex items-center gap-2">
                        <PhoneForwarded />
                        1. Contato com os pacientes
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p>Muitos dos nossos pacientes ainda têm dúvidas ou inseguranças ao buscar atendimento online. Por isso, pedimos que, sempre que receberem um novo encaminhamento, façam uma <b>apresentação rápida no mesmo dia</b> (ou, no máximo, em até 24h).</p>
                    <p className="mt-2 text-sm text-muted-foreground p-3 bg-muted/50 rounded-lg">Essa atitude simples ajuda muito a gerar segurança e mostrar o cuidado que temos com cada pessoa desde o início. Lembrando que o pagamento acontece antes da primeira sessão, o que reforça ainda mais a importância desse acolhimento inicial.</p>
                </CardContent>
            </Card>
            <Card className="bg-background/30 hover:shadow-lg transition-shadow">
                <CardHeader>
                    <CardTitle className="font-headline text-primary flex items-center gap-2">
                        <MessagesSquare />
                        2. Respostas internas
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p>Também queremos pedir <b>mais agilidade na resposta às comunicações internas</b> — como enquetes, decisões e mensagens no grupo.</p>
                    <p className="mt-2 text-sm text-muted-foreground p-3 bg-muted/50 rounded-lg">Sabemos que, muitas vezes, enviamos mensagens fora do horário comercial, e não esperamos respostas nesses horários. Fazemos isso apenas para que a informação já esteja ali quando puderem visualizar.</p>
                     <p className="mt-2 text-sm text-secondary-foreground font-semibold p-3 bg-primary/10 rounded-lg">Tudo isso acontece porque estamos numa fase em que a agilidade faz muita diferença no crescimento da clínica — vocês são nossa <b>equipe alfa</b>. Nosso objetivo nunca é sobrecarregar, mas sim facilitar a construção coletiva.</p>
                </CardContent>
            </Card>
        </div>
    </div>
);

export const AgendaSlide = () => (
    <div className="max-w-5xl mx-auto text-left w-full">
        <p className="text-lg text-center mb-6 text-muted-foreground">
            Para que possamos manter nossos processos organizados — especialmente no que diz respeito à parte financeira e ao repasse das sessões — é fundamental que cada psicóloga crie e mantenha atualizada sua agenda no Google.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background/30">
                <CardHeader>
                    <CardTitle className="font-headline text-primary flex items-center gap-2">
                        <CalendarCheck />
                        Por que é tão importante?
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p className="mb-2">A agenda é a ferramenta que utilizamos para:</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><CheckCircle className="text-accent w-5 h-5 mt-0.5 flex-shrink-0" /><span>Acompanhar os atendimentos realizados e agendados;</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="text-accent w-5 h-5 mt-0.5 flex-shrink-0" /><span>Fazer a cobrança correta dos pacientes;</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="text-accent w-5 h-5 mt-0.5 flex-shrink-0" /><span>Controlar os repasses de cada profissional com precisão.</span></li>
                    </ul>
                    <Alert variant="destructive" className="mt-4 bg-destructive/10 border-destructive/20 text-destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Atenção</AlertTitle>
                        <AlertDescription>
                        Quando essa informação não está preenchida corretamente, fica difícil garantir o controle e pode gerar erros no financeiro, o que impacta diretamente tanto a clínica quanto vocês.
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>
            <Card className="bg-background/30">
                <CardHeader>
                    <CardTitle className="font-headline text-primary flex items-center gap-2">
                        <ListChecks />
                        O que pedimos
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Database className="text-accent w-5 h-5 mt-0.5 flex-shrink-0" /><span>Criem uma agenda no Google (caso ainda não tenham);</span></li>
                        <li className="flex items-start gap-3"><Database className="text-accent w-5 h-5 mt-0.5 flex-shrink-0" /><span>Mantenham os atendimentos sempre registrados e atualizados;</span></li>
                        <li className="flex items-start gap-3"><Database className="text-accent w-5 h-5 mt-0.5 flex-shrink-0" /><span>Caso haja mudanças (faltas, cancelamentos, remarcações), lembrem-se de refletir isso na agenda também.</span></li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    </div>
);

export const PersonaSlide = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-left max-w-6xl w-full">
        <Card className="bg-background/30">
            <CardHeader>
                <CardTitle className="font-headline text-primary">Ajustes na comunicação com o público</CardTitle>
                <CardDescription>Alinhando expectativas sobre a nossa persona atual.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Ainda estamos em fase de construção e a nossa comunicação com a persona ideal — o perfil de paciente com quem mais desejamos trabalhar — ainda não está 100% alinhada.</p>
                <h4 className="font-semibold mt-4 mb-2 text-secondary-foreground">O que isso significa na prática?</h4>
                <p className="mb-2">Pode acontecer de chegarem até a clínica pacientes que:</p>
                <ul className="space-y-2 list-inside text-sm ml-4">
                    <li className="flex gap-2"><AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" /> Estão apenas “experimentando” a terapia;</li>
                    <li className="flex gap-2"><AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" /> Não estão tão comprometidos com o processo;</li>
                    <li className="flex gap-2"><AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" /> Ou que farão apenas uma ou poucas sessões.</li>
                </ul>
                <p className="mt-4 text-muted-foreground">Sabemos que isso pode ser frustrante, e queremos reforçar que essa não é a experiência que buscamos a longo prazo.</p>

                <h4 className="font-semibold mt-4 mb-2 text-secondary-foreground">Por que isso acontece?</h4>
                <ul className="space-y-2 list-inside text-sm ml-4">
                    <li className="flex gap-2"><Search className="h-4 w-4 text-accent mt-0.5" /> Ainda estamos ajustando nossas estratégias de marketing.</li>
                    <li className="flex gap-2"><Lightbulb className="h-4 w-4 text-accent mt-0.5" /> Estamos testando formatos e nichos com apoio da aceleradora.</li>
                    <li className="flex gap-2"><PersonaUserCheck className="h-4 w-4 text-accent mt-0.5" /> A construção da autoridade e da identificação com o público ideal leva tempo.</li>
                </ul>
            </CardContent>
        </Card>
        <Card className="bg-primary/10 border-primary/20 sticky top-8">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2">
                    <Heart /> O que pedimos?
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    <li className="font-semibold">Paciência e parceria nesse início.</li>
                    <li className="font-semibold">Compreensão de que alguns perfis de pacientes não refletem o público que desejamos atrair no futuro.</li>
                    <li className="font-semibold">Confiança de que estamos trabalhando para, cada vez mais, atrair pessoas que:</li>
                </ul>
                <ul className="space-y-2 list-disc list-inside mt-4 ml-6 text-sm bg-background/50 p-4 rounded-lg">
                    <li>Entendem o valor da terapia;</li>
                    <li>Desejam um acompanhamento constante;</li>
                    <li>Estão dispostas a se comprometer com o processo.</li>
                </ul>
            </CardContent>
        </Card>
    </div>
);

export const RedesSociaisSlide = () => (
    <div className="max-w-6xl mx-auto text-left w-full">
        <p className="text-center mb-8 text-lg text-muted-foreground">Sabemos que esse tipo de exposição pode não ser confortável para todas, e respeitamos profundamente os limites de cada uma. Ainda assim, gostaríamos de explicar por que essa presença tem um papel tão relevante nesse momento.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-background/30">
                    <CardHeader>
                        <CardTitle className="font-headline text-primary flex items-center gap-2">
                            <ThumbsUp />
                            Por que é importante?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="flex items-start gap-2"><Users className="w-5 h-5 mt-1 text-accent flex-shrink-0" /><span>As pessoas se conectam com pessoas — psicólogas reais, humanas e acessíveis.</span></p>
                        <p className="flex items-start gap-2"><Instagram className="w-5 h-5 mt-1 text-accent flex-shrink-0" /><span>Nosso Instagram é uma vitrine importante para apresentar nosso trabalho e ter vocês ali fortalece a credibilidade da Deep.</span></p>
                    </CardContent>
                </Card>
                 <Card className="bg-background/30">
                    <CardHeader>
                        <CardTitle className="font-headline text-primary flex items-center gap-2">
                            <AwardIcon />
                            Como participar?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="flex items-start gap-2"><Send className="w-5 h-5 mt-1 text-accent flex-shrink-0" /><span>Enviando conteúdos, dicas ou reflexões.</span></p>
                        <p className="flex items-start gap-2"><Video className="w-5 h-5 mt-1 text-accent flex-shrink-0" /><span>Gravando vídeos curtos ou respondendo perguntas.</span></p>
                         <p className="flex items-start gap-2"><AwardIcon className="w-5 h-5 mt-1 text-accent flex-shrink-0" /><span>Participando de publicações especiais ou permitindo o uso de trechos de textos seus.</span></p>
                    </CardContent>
                </Card>
            </div>
            <div className="relative rounded-lg overflow-hidden h-full min-h-[200px] lg:min-h-full">
                 <Image src="https://placehold.co/400x600.png" alt="Exemplo de post em rede social" fill objectFit="cover" className="opacity-80" data-ai-hint="social media phone"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
                    <p className="text-white font-bold text-lg">Conectando através de histórias</p>
                    <p className="text-white/80 text-sm">Sua presença humaniza nossa marca.</p>
                 </div>
            </div>
        </div>
        <Alert className="mt-8 bg-primary/10 border-primary/20">
            <Info className="h-4 w-4 !text-primary" />
            <AlertTitle className="text-primary font-semibold">Importante</AlertTitle>
            <AlertDescription className="!text-secondary-foreground">
                Nenhuma ação será obrigatória, mas toda participação — mesmo a mais simples — faz diferença nesse momento em que estamos construindo autoridade e visibilidade.
            </AlertDescription>
        </Alert>
    </div>
);

export const CatalogoSlide = () => (
    <div className="max-w-5xl mx-auto text-left w-full">
        <p className="text-lg text-center mb-6 text-muted-foreground">
            Desenvolvemos um catálogo exclusivo para facilitar a conexão entre pacientes e psicólogas, onde os pacientes podem:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <Card className="bg-background/30 flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline text-primary flex items-center gap-2">
                        <CheckSquare /> 1. Fazer um mini teste online
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p>O teste é simples e rápido, com perguntas direcionadas para identificar a demanda principal de quem está buscando atendimento. Ao final, o sistema sugere o psicólogo ou psicóloga mais alinhado(a) com aquela demanda específica.</p>
                </CardContent>
                <CardFooter>
                     <div className="w-full h-32 relative rounded-lg overflow-hidden">
                        <Image src="https://placehold.co/600x300.png" alt="Exemplo de teste online" fill objectFit="cover" data-ai-hint="online quiz form"/>
                     </div>
                </CardFooter>
            </Card>
            <Card className="bg-background/30 flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline text-primary flex items-center gap-2">
                        <UserPlus /> 2. Escolher diretamente
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p>Além do teste, o paciente pode navegar por um espaço onde apresentamos o nosso time com nome, foto e especialidades. Isso permite que ele escolha diretamente a profissional com quem mais se identifica.</p>
                </CardContent>
                 <CardFooter>
                     <div className="w-full h-32 relative rounded-lg overflow-hidden">
                        <Image src="https://placehold.co/600x300.png" alt="Catálogo de psicólogas" fill objectFit="cover" data-ai-hint="professional profile grid"/>
                     </div>
                </CardFooter>
            </Card>
        </div>
        <p className="text-center mt-8 text-sm text-secondary-foreground font-semibold bg-accent/10 p-3 rounded-lg">
            Essa ferramenta tem sido uma forma delicada e inteligente de respeitar o tempo de quem busca ajuda, valorizar o trabalho de vocês e tornar o processo de decisão mais leve e humano.
        </p>
    </div>
);


const sparkleVariants = {
  initial: { scale: 0, opacity: 0, y: 20 },
  animate: (i: number) => ({
    scale: [0, 1, 0.5, 1],
    opacity: [0, 1, 1, 0],
    y: [20, -20, -40, -60],
    transition: {
      delay: i * 0.1,
      duration: 1.5 + Math.random(),
      repeat: Infinity,
      repeatDelay: 2,
    },
  }),
};

const Sparkle = ({ i, x, y }: { i: number; x: string; y: string }) => (
  <motion.div
    className="absolute text-accent"
    style={{ top: y, left: x }}
    variants={sparkleVariants}
    initial="initial"
    animate="animate"
    custom={i}
  >
    <SparkleIcon />
  </motion.div>
);

export const ReconhecimentoSlide = () => (
    <div className="text-center relative w-full flex flex-col items-center justify-center min-h-[40vh]">
      <h2 className="text-5xl lg:text-7xl font-headline text-primary drop-shadow-md leading-tight z-10">
        Todas as nossas psis foram elogiadas... <br/><span className="text-accent animate-pulse text-6xl lg:text-8xl">SEM EXCEÇÃO.</span>
      </h2>
      <p className="text-xl mt-8 text-secondary-foreground z-10">Obrigado pelo empenho e dedicação de cada uma de vocês.</p>
      
      <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(15)].map((_, i) => (
             <Sparkle 
                key={i} 
                i={i} 
                x={`${Math.random() * 100}%`} 
                y={`${Math.random() * 100}%`}
             />
          ))}
      </div>
  </div>
);

export const ProximosPassosSlide = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl items-center">
        <div className="space-y-4">
            <MessageSquarePlus className="w-16 h-16 text-primary mx-auto lg:mx-0"/>
            <h3 className="text-3xl font-headline text-primary mb-4 text-center lg:text-left">Feedback e Próximos Passos</h3>
            <p className="mb-4 text-lg text-muted-foreground text-center lg:text-left">Para concluir, gostaríamos de abrir um espaço para seus valiosos feedbacks. Compartilhe suas ideias, sugestões e percepções sobre os temas que conversamos.</p>
            <p className="text-base font-semibold text-secondary-foreground text-center lg:text-left">Sua opinião é fundamental para construirmos a Deep juntas.</p>
        </div>
        <div>
            <FeedbackForm />
        </div>
    </div>
);
