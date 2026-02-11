"use client";

import React from 'react'; 
import { motion } from 'framer-motion';
import {
    HandCoins, CalendarDays, Target, Activity, HeartHandshake,
    Megaphone, LayoutDashboard, FileText, RefreshCw, Star,
    Rocket, TrendingUp, Users, CheckCircle, Info, AlertCircle, Sparkles, Flag
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Logo from "@/components/logo";

export const WelcomeSlideSecond = () => (
    <div className="text-center">
      <div className="flex justify-center mb-8">
        <Logo className="w-48 h-48" />
      </div>
      <h1 className="text-5xl font-headline text-primary mb-2">
        Segundo All Hands
      </h1>
      <p className="text-2xl font-headline text-secondary-foreground">
        Contexto Geral
      </p>
      <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
        Desde o início, a clínica cresceu muito. Esse crescimento exige mais organização, clareza de processos e alinhamento entre todos. Hoje vamos mostrar como estamos estruturando o que será essencial para 2026.
      </p>
    </div>
);

export const AjusteValorSlide = () => (
    <div className="max-w-4xl mx-auto text-left w-full">
        <Card className="bg-background/30 border-primary/20">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <HandCoins className="w-8 h-8" />
                    Ajuste de Valor (R$ 59,99)
                </CardTitle>
                <CardDescription>Apresentado por Gustavo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-lg mb-4">Estamos implementando um ajuste estratégico no valor base para novos pacientes.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <TrendingUp className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                            <span><b>Objetivo:</b> Aumentar a taxa de conversão e volume de pacientes.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Users className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                            <span><b>Impacto:</b> Maior acessibilidade para o público-alvo inicial.</span>
                        </li>
                    </ul>
                </div>
                <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Importante</AlertTitle>
                    <AlertDescription>
                        Este movimento visa fortalecer nossa base de clientes e gerar mais oportunidades de atendimento para todo o time.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    </div>
);

export const AgendaOrganizadaSlide = () => (
    <div className="max-w-4xl mx-auto text-left w-full">
        <Card className="bg-background/30">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <CalendarDays className="w-8 h-8" />
                    Agenda Organizada
                </CardTitle>
                <CardDescription>Apresentado por Kamila</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-lg">A agenda é nosso principal instrumento: disponibilidade, direcionamento, cobranças e liberação de atendimento.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-bold flex items-center gap-2 mb-2">
                            <CheckCircle className="text-primary w-5 h-5" />
                            Importância
                        </h4>
                        <p className="text-sm">Mantê-la atualizada é fundamental para evitar impactos no paciente e no financeiro.</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-bold flex items-center gap-2 mb-2">
                            <AlertCircle className="text-accent w-5 h-5" />
                            Compromisso 2026
                        </h4>
                         <p className="text-sm">Precisamos de cuidado e atenção constante com a agenda para o bom funcionamento da clínica.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
);

export const Expectativas2026Slide = () => (
    <div className="max-w-5xl mx-auto text-left w-full">
        <Card className="bg-background/30 border-accent/20">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <Rocket className="w-8 h-8" />
                    O que esperamos para 2026
                </CardTitle>
                <CardDescription>Gustavo, Kamila e Gabriel</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <Target className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold">Presença Digital</h4>
                            <p className="text-sm text-muted-foreground">Fortalecimento do Instagram e criação de autoridade digital para a marca e para os profissionais.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Star className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold">Novos Projetos</h4>
                            <p className="text-sm text-muted-foreground">Expansão de serviços e novas modalidades de atendimento.</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                     <div className="p-4 bg-accent/5 rounded-lg border border-accent/10">
                        <p className="text-sm font-semibold italic">&quot;Nossa visão para 2026 é consolidar a Deep Saúde como referência em agilidade e qualidade no atendimento psicológico online.&quot;</p>
                     </div>
                </div>
            </CardContent>
        </Card>
    </div>
);

export const Movimentos2025Slide = () => (
    <div className="max-w-4xl mx-auto text-left w-full">
        <Card className="bg-background/30">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <Activity className="w-8 h-8" />
                    Movimentos feitos em 2025
                </CardTitle>
                <CardDescription>Apresentado por Gustavo</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative border-l-2 border-primary/20 ml-4 pl-8 space-y-8 py-4">
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                        <h4 className="font-bold">Início da Operação</h4>
                        <p className="text-sm text-muted-foreground">Início das estratégias de ads e primeiros atendimentos.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                        <h4 className="font-bold">Ajustes de Processos</h4>
                        <p className="text-sm text-muted-foreground">Otimização do fluxo de captação e triagem.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                        <h4 className="font-bold">Crescimento da Equipe</h4>
                        <p className="text-sm text-muted-foreground">Boas-vindas a novos talentos (Vocês!).</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
);

export const SucessoClienteSlide = () => (
    <div className="max-w-4xl mx-auto text-left w-full">
        <Card className="bg-background/30 border-primary/20">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <HeartHandshake className="w-8 h-8" />
                    Sucesso do Cliente
                </CardTitle>
                <CardDescription>Apresentado por Kamila</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-lg font-semibold text-accent">Estratégico e Humano</p>
                <p>Sucesso do cliente é o paciente se sentir acolhido, cuidado e lembrado. Não é apenas fazer a sessão.</p>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                     <p className="text-sm"><b>Bruna</b> assumiu esse papel, enviando mensagens periódicas e pedindo feedbacks, mostrando que a Deep Saúde se importa com quem está do outro lado.</p>
                </div>
            </CardContent>
        </Card>
    </div>
);

export const MarketingSlide = () => (
    <div className="max-w-4xl mx-auto text-left w-full">
        <Card className="bg-background/30">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <Megaphone className="w-8 h-8" />
                    Marketing e Presença
                </CardTitle>
                <CardDescription>Apresentado por Kamila</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <h4 className="font-bold text-secondary-foreground">Marketing Humano</h4>
                        <p className="text-sm text-muted-foreground">As pessoas querem saber quem são as psicólogas e quem está por trás da clínica.</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-bold text-secondary-foreground mb-2">Sua Presença Importa</h4>
                        <p className="text-sm text-muted-foreground">Em 2026, a participação de vocês (fotos, vídeos) ajuda a criar conexão e confiança. Não é obrigação, mas faz toda a diferença.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
);

export const SetoresEstrelaGuiaSlide = () => (
    <div className="max-w-5xl mx-auto text-left w-full">
        <Card className="bg-background/30 border-accent/20">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <LayoutDashboard className="w-8 h-8" />
                    Setores Estrela Guia & Notion
                </CardTitle>
                <CardDescription>Apresentado por Gabriel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Divisão de Setores</h4>
                        <p className="text-sm text-muted-foreground">Cada braço da empresa focado em um KPI (indicador) principal para o sucesso coletivo.</p>
                        <div className="p-3 bg-accent/10 rounded border border-accent/20 text-sm">
                            <b>Próximas KRs:</b> Metas claras para o próximo trimestre.
                        </div>
                    </div>
                    <div className="space-y-4">
                         <h4 className="font-bold text-lg">Centralização no Notion</h4>
                         <p className="text-sm text-muted-foreground">Tudo o que você precisa em um só lugar: documentos, contratos, processos e comunicação.</p>
                         <div className="flex items-center gap-2 text-primary font-semibold">
                            <Star className="w-5 h-5 fill-primary" />
                            A Estrela Guia nos mantém no caminho certo.
                         </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
);

export const ContratosSlide = () => (
    <div className="max-w-4xl mx-auto text-left w-full">
        <Card className="bg-background/30">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <FileText className="w-8 h-8" />
                    Contratos
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-lg">Estamos elaborando contratos com apoio jurídico tanto para vocês quanto para os pacientes.</p>
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <h4 className="font-bold mb-2 flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        Objetivos
                    </h4>
                    <p className="text-sm text-muted-foreground">Trazer mais clareza, segurança e alinhamento de expectativas para todos. Apresentaremos tudo em breve.</p>
                </div>
            </CardContent>
        </Card>
    </div>
);

export const ReunioesRecorrentesSlide = () => (
    <div className="max-w-4xl mx-auto text-left w-full">
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <RefreshCw className="w-8 h-8" />
                    Reuniões All Hands Recorrentes
                </CardTitle>
                <CardDescription>Apresentado por Gabriel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg">A partir de agora, teremos um momento fixo de encontro.</p>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-background p-3 rounded-full border border-primary/20 shadow-sm">
                        <CalendarDays className="w-5 h-5 text-accent" />
                        <span className="font-semibold">Periodicidade Definida</span>
                    </div>
                    <div className="flex items-center gap-2 bg-background p-3 rounded-full border border-primary/20 shadow-sm">
                        <Users className="w-5 h-5 text-accent" />
                        <span className="font-semibold">Troca de Experiências</span>
                    </div>
                    <div className="flex items-center gap-2 bg-background p-3 rounded-full border border-primary/20 shadow-sm">
                        <Target className="w-5 h-5 text-accent" />
                        <span className="font-semibold">Alinhamento de Metas</span>
                    </div>
                </div>
                <p className="text-center font-headline text-2xl text-primary pt-8">Juntos, vamos mais longe!</p>
            </CardContent>
        </Card>
    </div>
);

export const EstrategiaSetoresSlide = () => (
    <div className="max-w-5xl mx-auto text-left w-full">
        <Card className="bg-background/30 border-accent/20">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <LayoutDashboard className="w-8 h-8" />
                    Divisão Estratégica das Áreas
                </CardTitle>
                <CardDescription>Apresentado por Gabriel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <p className="text-base text-muted-foreground">
                    &quot;Para crescermos de forma saudável, precisamos de especialização. A estratégia por trás dessa nova divisão é garantir que cada parte vital da empresa tenha um guardião focado.&quot;
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
                         <div className="flex items-center gap-2 mb-2 font-bold text-primary">
                             <TrendingUp className="w-5 h-5" />
                             Crescimento & Finanças
                         </div>
                         <p className="text-sm text-muted-foreground">É o pilar que garante os recursos e a chegada de novos pacientes. Sem isso, a máquina para.</p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
                         <div className="flex items-center gap-2 mb-2 font-bold text-primary">
                             <HeartHandshake className="w-5 h-5" />
                             Marca & Cuidado Clínico
                         </div>
                         <p className="text-sm text-muted-foreground">É a casa técnica. Onde se garante a excelência do atendimento, a qualidade dos profissionais e a força da nossa marca.</p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
                         <div className="flex items-center gap-2 mb-2 font-bold text-primary">
                             <Activity className="w-5 h-5" />
                             Produto & Tecnologia
                         </div>
                         <p className="text-sm text-muted-foreground">É o pilar da infraestrutura. A missão aqui é construir as ferramentas e sistemas para que os outros dois setores funcionem sem atrito.</p>
                    </div>
                </div>
                 <Alert className="bg-accent/10 border-accent/20">
                    <Info className="h-4 w-4 text-accent" />
                    <AlertTitle>Organização e Segurança</AlertTitle>
                    <AlertDescription className="text-muted-foreground">
                       Isso traz segurança para vocês. Agora, fica claro quem resolve o financeiro, quem resolve o suporte técnico e quem dá o suporte clínico.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    </div>
);

export const LiderancaSlide = () => (
    <div className="max-w-6xl mx-auto text-left w-full overflow-y-auto max-h-[70vh] pr-2">
        <Card className="bg-background/30 border-primary/20">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <Users className="w-8 h-8" />
                    Liderança por Setor
                </CardTitle>
                <CardDescription>Quem procurar e quando?</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Kamila */}
                <div className="flex flex-col gap-4 p-4 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3">
                         <div className="bg-primary/10 p-2 rounded-full">
                            <Sparkles className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                             <h4 className="font-bold text-sm leading-tight">Kamila Carvalho</h4>
                             <p className="text-xs text-muted-foreground">CEO (Chief Executive Officer)</p>
                         </div>
                    </div>
                    <div className="space-y-2 flex-grow">
                        <p className="text-xs font-semibold text-accent">Foco: Visão, Marca, Experiência do Paciente e da Equipe</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Guardiã da identidade e estratégia da marca. Cuida da Jornada do Paciente e da Equipe, liderando a felicidade do cliente e gestão dos profissionais.
                        </p>
                    </div>
                    <div className="mt-auto pt-3 border-t border-primary/5">
                        <p className="text-[10px] font-bold text-primary mb-1">QUANDO PROCURAR:</p>
                        <p className="text-[10px] text-muted-foreground">
                            Sugestões sobre propósito, tom de voz da marca, ideias para experiência de acolhimento ou dúvidas sobre a comunidade Deep.
                        </p>
                    </div>
                </div>

                {/* Gabriel */}
                <div className="flex flex-col gap-4 p-4 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
                     <div className="flex items-center gap-3">
                         <div className="bg-primary/10 p-2 rounded-full">
                            <Activity className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                             <h4 className="font-bold text-sm leading-tight">Gabriel Barbosa</h4>
                             <p className="text-xs text-muted-foreground">CTO & Líder de Operações</p>
                         </div>
                    </div>
                    <div className="space-y-2 flex-grow">
                        <p className="text-xs font-semibold text-accent">Foco: Tecnologia, Produto e Operações</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Lidera a estrutura que faz a clínica funcionar. Responsável pela plataforma, segurança de dados, engenharia de software e toda a operação da empresa.
                        </p>
                    </div>
                     <div className="mt-auto pt-3 border-t border-primary/5">
                        <p className="text-[10px] font-bold text-primary mb-1">QUANDO PROCURAR:</p>
                        <p className="text-[10px] text-muted-foreground">
                            Problemas na plataforma, dúvidas sobre processos, construção de produtos, melhoria de fluxos ou segurança de dados.
                        </p>
                    </div>
                </div>

                {/* Gustavo */}
                <div className="flex flex-col gap-4 p-4 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
                     <div className="flex items-center gap-3">
                         <div className="bg-primary/10 p-2 rounded-full">
                            <TrendingUp className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                             <h4 className="font-bold text-sm leading-tight">Gustavo Mannarino</h4>
                             <p className="text-xs text-muted-foreground">CFO (Chief Financial Officer)</p>
                         </div>
                    </div>
                     <div className="space-y-2 flex-grow">
                        <p className="text-xs font-semibold text-accent">Foco: Sustentabilidade e Finanças</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Responsável pela saúde do negócio, planejamento econômico, precificação e conformidade. Lidera captação financeira e parcerias estratégicas.
                        </p>
                    </div>
                     <div className="mt-auto pt-3 border-t border-primary/5">
                        <p className="text-[10px] font-bold text-primary mb-1">QUANDO PROCURAR:</p>
                        <p className="text-[10px] text-muted-foreground">
                             Repasses, dúvidas contratuais, questões fiscais, parcerias, palestras ou entendimento de modelos de pacotes e precificação.
                        </p>
                    </div>
                </div>

            </CardContent>
        </Card>
    </div>
);

export const EstrelaGuiaOKRsSlide = () => (
    <div className="max-w-5xl mx-auto text-left w-full">
        <Card className="bg-background/30 border-accent/20">
             <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <Star className="w-8 h-8" />
                    O Caminho e as Metas
                </CardTitle>
                <CardDescription>Apresentado por Gabriel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/2 space-y-4">
                         <h4 className="font-bold text-xl flex items-center gap-2">
                             <Target className="w-6 h-6 text-accent" />
                             OKRs (Objetivos e Resultados Chave)
                         </h4>
                         <p className="text-muted-foreground text-sm">
                             Temos a Estrela Guia (o sonho grande lá no alto) e os KRs (os degraus concretos que vamos subir agora).
                         </p>
                         <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                            <h5 className="font-bold text-primary mb-2">Estrela Guia 2026</h5>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-accent" />
                                    Atingir 2k de vidas impactadas.
                                </li>
                                <li className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-accent" />
                                    200k vidas alcançadas.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                        <h4 className="font-bold text-xl flex items-center gap-2">
                             <Flag className="w-6 h-6 text-accent" />
                             KRs para o Primeiro Trimestre
                         </h4>
                         <div className="space-y-2">
                             <div className="flex items-start gap-3 p-2 bg-background/50 rounded border border-muted">
                                 <span className="bg-accent/20 text-accent text-xs font-bold px-2 py-1 rounded">1</span>
                                 <span className="text-sm">Implementar sistema organizacional em toda deep.</span>
                             </div>
                             <div className="flex items-start gap-3 p-2 bg-background/50 rounded border border-muted">
                                 <span className="bg-accent/20 text-accent text-xs font-bold px-2 py-1 rounded">2</span>
                                 <span className="text-sm">Alcançar 500 seguidores no instagram.</span>
                             </div>
                             <div className="flex items-start gap-3 p-2 bg-background/50 rounded border border-muted">
                                 <span className="bg-accent/20 text-accent text-xs font-bold px-2 py-1 rounded">3</span>
                                 <span className="text-sm">Lançar nossos primeiros Infoprodutos.</span>
                             </div>
                         </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
);

export const NotionOrganizacaoSlide = () => (
    <div className="max-w-4xl mx-auto text-left w-full">
        <Card className="bg-background/30 border-primary/20">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <FileText className="w-8 h-8" />
                     A Anatomia da Empresa
                </CardTitle>
                 <CardDescription>Apresentado por Gabriel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <p className="text-lg">
                        Para organizar tudo isso, centralizamos nossa inteligência no Notion. A DeepSaúde é uma máquina complexa trabalhando para dar suporte a vocês.
                    </p>
                    <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm text-muted-foreground italic">
                            &quot;Além do Clínico, nós temos setores ativos de Produto, Marketing, Financeiro... Tem gente codando software, tem gente analisando dados, tem gente criando estratégias.&quot;
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                        <h4 className="font-bold flex items-center gap-2 text-primary">
                             <Users className="w-5 h-5" />
                             Onde vocês entram?
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Vocês fazem parte do Corpo Clínico, que fica dentro da área de Cuidado Clínico.
                        </p>
                    </div>
                     <div className="space-y-2">
                        <h4 className="font-bold flex items-center gap-2 text-primary">
                             <LayoutDashboard className="w-5 h-5" />
                             A Visão do Todo
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            É importante navegarem pelo Notion para entenderem que não estão sozinhas. Existe toda uma estrutura de bastidores trabalhando dia e noite.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
);

export const RituaisAllHandsSlide = () => (
    <div className="max-w-4xl mx-auto text-left w-full">
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="font-headline text-primary flex items-center gap-2 text-3xl">
                    <RefreshCw className="w-8 h-8" />
                    Rituais: Transparência Radical
                </CardTitle>
                <CardDescription>Apresentado por Gabriel</CardDescription>
            </CardHeader>
             <CardContent className="space-y-6">
                 <div className="text-center space-y-4">
                     <p className="text-lg">
                        &quot;Não queremos reuniões inúteis, mas a comunicação precisa fluir.&quot;
                     </p>
                     <div className="flex justify-center">
                         <div className="bg-background p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center border-4 border-accent shadow-lg">
                             <Users className="w-10 h-10 text-primary mb-2" />
                             <span className="font-bold text-lg">All Hands</span>
                             <span className="text-xs text-muted-foreground">Todos Juntos</span>
                         </div>
                     </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="p-4 bg-background/60 rounded-lg">
                         <h4 className="font-bold mb-1">Ritual Recorrente</h4>
                         <p className="text-sm text-muted-foreground">Abertura de números, acompanhamento de metas e ajuste de rota.</p>
                     </div>
                      <div className="p-4 bg-background/60 rounded-lg">
                         <h4 className="font-bold mb-1">Cultura da Transparência</h4>
                         <p className="text-sm text-muted-foreground">Vocês vão saber se a empresa está saudável e quais são os próximos passos. Na Deep, ninguém trabalha no escuro.</p>
                     </div>
                 </div>
            </CardContent>
        </Card>
    </div>
);

export const EncerramentoSlide = () => (
    <div className="text-center max-w-4xl mx-auto">
      <div className="flex justify-center mb-8">
         <div className="bg-accent/10 p-6 rounded-full">
            <Rocket className="w-24 h-24 text-accent" />
         </div>
      </div>
      <h1 className="text-5xl font-headline text-primary mb-6">
        O Futuro
      </h1>
      <p className="text-2xl font-headline text-secondary-foreground mb-8">
        Liberdade e Estratégia
      </p>
      <div className="p-8 bg-background/40 backdrop-blur rounded-xl border border-primary/20 max-w-2xl mx-auto">
          <p className="text-xl text-muted-foreground italic leading-relaxed">
            &quot;Essa estrutura toda — setores, OKRs, Notion — foi feita para nos dar liberdade. Conseguir criar um ambiente mais estratégico e organizado para avançarmos.&quot;
          </p>
      </div>
       <p className="mt-12 text-sm text-muted-foreground">Obrigado a todos!</p>
    </div>
);
