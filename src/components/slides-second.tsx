
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    HandCoins, CalendarDays, Target, Activity, HeartHandshake,
    Megaphone, LayoutDashboard, FileText, RefreshCw, Star,
    Rocket, TrendingUp, Users, CheckCircle, Info, AlertCircle
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
        Alinhamento e Estratégia
      </p>
      <p className="text-lg text-muted-foreground mt-4">
        Deep Insights
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
                <p className="text-lg">A organização da agenda é o coração da nossa operação.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-bold flex items-center gap-2 mb-2">
                            <CheckCircle className="text-primary w-5 h-5" />
                            Benefícios
                        </h4>
                        <ul className="text-sm space-y-2">
                            <li>Previsibilidade financeira</li>
                            <li>Melhor experiência do paciente</li>
                            <li>Evita conflitos de horários</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-bold flex items-center gap-2 mb-2">
                            <AlertCircle className="text-accent w-5 h-5" />
                            O que precisamos
                        </h4>
                        <ul className="text-sm space-y-2">
                            <li>Atualização em tempo real</li>
                            <li>Sinalização de faltas/remarcações</li>
                            <li>Bloqueio de horários indisponíveis</li>
                        </ul>
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
                        <p className="text-sm font-semibold italic">"Nossa visão para 2026 é consolidar a Deep Insights como referência em agilidade e qualidade no atendimento psicológico online."</p>
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
                        <p className="text-sm text-muted-foreground">Lançamento da plataforma e primeiros atendimentos.</p>
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
                    Sucesso do Cliente (Customer Success)
                </CardTitle>
                <CardDescription>Apresentado por Kamila</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-lg font-semibold text-accent">O que é sucesso do cliente para a Deep?</p>
                <p>Não é apenas o paciente fazer a sessão, mas sim ele <b>alcançar os resultados</b> que busca, sentindo-se acolhido e transformado pelo processo.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-primary mb-1">Retenção</div>
                        <p className="text-xs text-muted-foreground">Continuidade no tratamento</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-primary mb-1">Indicação</div>
                        <p className="text-xs text-muted-foreground">Pacientes felizes indicam</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-primary mb-1">Satisfação</div>
                        <p className="text-xs text-muted-foreground">Feedback positivo constante</p>
                    </div>
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
                    Marketing
                </CardTitle>
                <CardDescription>Apresentado por Kamila</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <h4 className="font-bold text-secondary-foreground">Foco atual:</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Campanhas direcionadas</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Otimização de conversão</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Novos nichos</li>
                        </ul>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-bold text-secondary-foreground mb-2">Papel da Psicóloga:</h4>
                        <p className="text-sm text-muted-foreground">Sua expertise é nosso melhor marketing. Conteúdos técnicos e humanizados atraem o público certo.</p>
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
                    Contratos (Psis e Pcts)
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-lg">Segurança jurídica para todos os envolvidos.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-border p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Para Psicólogas</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Termos de parceria</li>
                            <li>• Responsabilidades</li>
                            <li>• Fluxo de repasse</li>
                        </ul>
                    </div>
                    <div className="border border-border p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Para Pacientes</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Termos de serviço</li>
                            <li>• Política de cancelamento</li>
                            <li>• Privacidade de dados</li>
                        </ul>
                    </div>
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
