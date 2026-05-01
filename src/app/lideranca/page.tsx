"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  ChevronRight,
  ShieldCheck,
  Star,
  ArrowLeft,
  ArrowRight,
  Home as HomeIcon,
  LayoutDashboard,
  HeartHandshake,
  Megaphone,
  FileText,
  HandCoins,
  DollarSign,
  CalendarClock,
  CalendarDays,
  UserX,
  MessageSquare,
  Trophy,
  CheckCircle2,
  Users,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Logo from "@/components/logo";

const leadershipSlides = [
  {
    title: "Abertura",
    Icon: HeartHandshake,
    content: () => (
      <div className="text-center space-y-8 max-w-3xl">
        <h2 className="text-4xl font-headline text-primary mb-6">Obrigado pela Parceria 💙</h2>
        <div className="space-y-4 text-lg text-foreground/70 leading-relaxed italic">
          <p>"Esse encontro é para alinharmos pontos importantes que estamos estruturando na Deep."</p>
          <p>"Não é para engessar ou burocratizar, mas para criar uma estrutura sólida para o nosso crescimento."</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {["Maturidade", "Demanda", "Saúde"].map((label, i) => (
            <div key={i} className="p-5 rounded-2xl bg-primary/8 border border-primary/15">
              <div className="text-primary font-headline text-xl mb-1">{label}</div>
              <div className="text-muted-foreground text-xs uppercase tracking-tighter">
                {["Fase Atual", "Crescimento", "Organização"][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Marketing: Nova Estratégia",
    Icon: Megaphone,
    content: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-headline text-primary">Agência Especializada</h3>
            <p className="text-foreground/70">Nova parceria focada 100% na área da saúde.</p>
          </div>
          <ul className="space-y-3">
            {[
              "Gestão de Instagram Profissional",
              "Tráfego Pago (Anúncios Estratégicos)",
              "Estruturação do Processo Comercial",
              "Novas Estratégias de Crescimento"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/70">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card/60 p-6 rounded-3xl border border-border shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Users className="w-6 h-6" />
            <h4 className="font-headline text-lg">Marketing Humano</h4>
          </div>
          <p className="text-sm text-muted-foreground">Queremos contar com vocês para fotos e conteúdos pontuais (não obrigatório).</p>
          <div className="pt-4 border-t border-border italic text-primary/60 text-sm">
            "Fotos profissionais da equipe em breve."
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Formalização: Contrato",
    Icon: FileText,
    content: () => (
      <div className="text-center space-y-8 max-w-2xl">
        <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 mb-4">
          <ShieldCheck className="w-12 h-12 text-primary" />
        </div>
        <h3 className="text-3xl font-headline text-primary">Contrato de Prestação de Serviços</h3>
        <p className="text-foreground/70 text-lg">
          Elaborado com apoio jurídico para garantir clareza, segurança e alinhamento para todos os parceiros Deep.
        </p>
        <div className="flex justify-center gap-8 text-primary/50 uppercase text-[10px] tracking-widest font-bold">
          <span>Clareza</span>
          <span className="w-1 h-1 bg-primary/30 rounded-full my-auto" />
          <span>Segurança</span>
          <span className="w-1 h-1 bg-primary/30 rounded-full my-auto" />
          <span>Alinhamento</span>
        </div>
      </div>
    )
  },
  {
    title: "Novo Modelo de Cobrança",
    Icon: HandCoins,
    content: () => (
      <div className="space-y-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6">
            <div className="text-destructive text-sm font-bold uppercase mb-2 tracking-wider">Descontinuado</div>
            <h4 className="text-xl font-headline text-foreground mb-2">5ª Sessão Gratuita</h4>
            <p className="text-sm text-muted-foreground">Modelo gerava confusão em feriados e não atingiu os objetivos jurídicos/financeiros.</p>
          </div>
          <div className="bg-primary/8 border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
            <div className="text-primary text-sm font-bold uppercase mb-2 tracking-wider">Novo Padrão</div>
            <h4 className="text-xl font-headline text-primary mb-2">Cobrança Proporcional</h4>
            <p className="text-sm text-foreground/70">Pagamento pelas sessões realizadas no mês (4 ou 5 semanas).</p>
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-x-10 -translate-y-10" />
          </div>
        </div>
        <div className="bg-card/60 p-6 rounded-2xl border border-border shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <Star className="w-6 h-6 text-accent" />
            <h4 className="text-xl font-headline text-primary">Valorização Profissional</h4>
          </div>
          <p className="text-foreground/70">
            Aumento gradativo no valor das sessões. Novos pacientes já entrarão na nova tabela de preços.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Repasse & Financeiro",
    Icon: DollarSign,
    content: () => (
      <div className="text-center space-y-8">
        <div className="text-6xl font-headline text-primary mb-4">Transparência</div>
        <h3 className="text-2xl text-foreground">Modelo de Repasse Atualizado</h3>
        <p className="text-xl text-primary/80 max-w-xl mx-auto border-y border-primary/20 py-6">
          "O pagamento será baseado nos atendimentos efetivamente realizados."
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground italic">
          <CheckCircle2 className="w-4 h-4" />
          <span>Alinhamento jurídico e contábil.</span>
        </div>
      </div>
    )
  },
  {
    title: "Remarcações e Agenda",
    Icon: CalendarClock,
    content: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-headline text-primary">Essencial para o Fluxo</h3>
          <p className="text-muted-foreground">Para o novo modelo funcionar, precisamos de precisão total.</p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-primary/8 border-l-4 border-primary">
              <h5 className="font-bold text-primary text-sm mb-1">Aviso Obrigatório</h5>
              <p className="text-sm text-foreground/70">Notificar imediatamente remarcações ou cancelamentos.</p>
            </div>
            <div className="p-4 rounded-xl bg-primary/8 border-l-4 border-primary">
              <h5 className="font-bold text-primary text-sm mb-1">Agenda Atualizada</h5>
              <p className="text-sm text-foreground/70">A base da nossa cobrança é a sua agenda no sistema.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-primary/5 rounded-3xl border border-dashed border-primary/20 p-8">
          <LayoutDashboard className="w-32 h-32 text-primary/20" />
        </div>
      </div>
    )
  },
  {
    title: "Feriados e Organização",
    Icon: CalendarDays,
    content: () => (
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-headline text-primary">Previsão Mensal Antecipada</h3>
          <p className="text-muted-foreground">Evitando confusões para Psis e Pacientes.</p>
        </div>
        <div className="bg-card/60 p-8 rounded-3xl border border-border shadow-sm space-y-6">
          {[
            "Alinhamento de quantos atendimentos serão feitos antes do mês começar.",
            "Definição: Atendimento normal, remarcação ou cancelamento nos feriados.",
            "Ajuste imediato da cobrança proporcional para o paciente."
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-9 h-9 bg-primary/15 rounded-full flex items-center justify-center shrink-0 text-primary text-xs font-bold border border-primary/20">
                {i + 1}
              </div>
              <p className="text-foreground/70 pt-1">{text}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Faltas Recorrentes",
    Icon: UserX,
    content: () => (
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="p-6 bg-destructive/8 rounded-full border border-destructive/20">
          <UserX className="w-16 h-16 text-destructive" />
        </div>
        <h3 className="text-3xl font-headline text-primary">Critério de Continuidade</h3>
        <p className="text-xl text-foreground/70 max-w-xl">
          "A partir de um certo número de faltas injustificadas, poderemos avaliar a continuidade do atendimento."
        </p>
        <div className="grid grid-cols-2 gap-8 text-sm text-muted-foreground">
          <div className="space-y-2">
            <div className="h-1 bg-destructive/20 rounded-full overflow-hidden">
              <div className="w-full h-full bg-destructive/50" />
            </div>
            <span>Comprometimento Terapêutico</span>
          </div>
          <div className="space-y-2">
            <div className="h-1 bg-accent/30 rounded-full overflow-hidden">
              <div className="w-full h-full bg-accent/60" />
            </div>
            <span>Otimização de Agenda</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Comunicação: Notion",
    Icon: LayoutDashboard,
    content: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card/60 p-8 rounded-3xl border border-border shadow-sm">
          <h3 className="text-2xl font-headline text-primary mb-4">Fonte de Verdade</h3>
          <p className="text-foreground/70 mb-6">Centralização total de avisos, diretrizes e atualizações importantes.</p>
          <ul className="space-y-4">
            {[
              "Menos reuniões, mais objetividade.",
              "Registro histórico de todas as mudanças.",
              "Consultar antes de perguntar."
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6 flex flex-col justify-center">
          <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
            <p className="text-lg text-primary font-headline">"O Notion passa a ser a nossa principal fonte de informação."</p>
          </div>
          <p className="text-sm text-muted-foreground italic">Sempre que houver algo novo, será publicado por lá.</p>
        </div>
      </div>
    )
  },
  {
    title: "A Escuta",
    Icon: MessageSquare,
    content: () => (
      <div className="text-center space-y-12 max-w-2xl mx-auto">
        <h3 className="text-4xl font-headline text-primary">Queremos te ouvir</h3>
        <div className="space-y-6 text-2xl text-foreground/70 font-headline italic">
          <p>"Como você está se sentindo com a Deep hoje?"</p>
          <p>"Tem algo que você acha que podemos melhorar?"</p>
          <p>"Alguma dificuldade no dia a dia?"</p>
        </div>
        <div className="pt-8">
          <MessageSquare className="w-12 h-12 text-primary/30 mx-auto animate-pulse" />
        </div>
      </div>
    )
  },
  {
    title: "Encerramento",
    Icon: Trophy,
    content: () => (
      <div className="text-center space-y-8">
        <div className="inline-block p-5 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <Logo className="w-20 h-20 text-primary" />
        </div>
        <h2 className="text-5xl font-headline text-primary">Construindo Juntos</h2>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          "Nosso objetivo é crescer de forma estruturada e melhorar a experiência para todos. Valorizamos muito essa parceria."
        </p>
        <div className="flex justify-center gap-3 mt-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-accent fill-accent/40" />
          ))}
        </div>
      </div>
    )
  }
];

export default function LeadershipPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "deep-senior-2025") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Senha incorreta. Tente novamente.");
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    let timeout: NodeJS.Timeout;
    const handleActivity = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowControls(false), 3000);
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("click", handleActivity);
    handleActivity();

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("click", handleActivity);
      clearTimeout(timeout);
    };
  }, [isAuthenticated]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : leadershipSlides.length - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < leadershipSlides.length - 1 ? prev + 1 : 0));
  };

  if (!isAuthenticated) {
    return (
      <main className="h-screen w-screen bg-background text-foreground flex items-center justify-center p-4 font-body relative overflow-hidden">
        {/* Soft ambient blobs matching the main theme */}
        <div className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[45%] left-[35%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-md w-full relative z-10">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo className="w-16 h-16 text-primary mb-5 opacity-80" />
            <h1 className="text-3xl font-headline text-primary tracking-tight">Reunião de Alinhamento</h1>
            <div className="flex items-center gap-3 mt-2">
              <div className="h-px w-8 bg-primary/30" />
              <p className="text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase">Deep Insights · 2025</p>
              <div className="h-px w-8 bg-primary/30" />
            </div>
          </motion.div>

          {/* Login card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="bg-card/80 border-border shadow-xl backdrop-blur-sm overflow-hidden">
              {/* Top accent */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="p-8">
                <div className="flex flex-col items-center mb-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 mb-4">
                    <Lock className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-xl text-foreground font-headline">Acesso Exclusivo</h2>
                  <p className="text-muted-foreground text-sm mt-1 text-center">
                    Insira a chave de acesso para continuar.
                  </p>
                </div>
                <form onSubmit={handleAuth} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Chave de Acesso"
                      className="bg-background border-input text-foreground focus:border-primary/50 transition-all placeholder:text-muted-foreground/40 rounded-xl h-12"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-[10px] text-destructive font-bold uppercase tracking-wider pt-1"
                        >
                          {error}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all rounded-xl h-12 text-sm tracking-wide shadow-sm">
                    Entrar na Reunião <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </Card>
          </motion.div>

          {/* Back link */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="link" className="text-muted-foreground hover:text-primary text-xs transition-colors" onClick={() => window.location.href = '/'}>
              Voltar para o Painel Geral
            </Button>
          </motion.div>
        </div>
      </main>
    );
  }

  const CurrentSlideContent = leadershipSlides[currentSlide].content;
  const CurrentSlideIcon = leadershipSlides[currentSlide].Icon;

  return (
    <main className="h-screen w-screen bg-background text-foreground flex flex-col items-center justify-center p-4 sm:p-8 font-body relative overflow-hidden">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-5%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-5%] w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      {/* Top left nav */}
      <div className="absolute top-6 left-6 flex items-center gap-4 z-20">
        <Logo className="w-20 h-20 text-primary opacity-50" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <HomeIcon className="w-4 h-4" />
          Menu Principal
        </Button>
      </div>

      {/* Slide content */}
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-7xl relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Card className="w-full bg-transparent border-none shadow-none">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3 text-accent mb-2">
                  <CurrentSlideIcon className="h-8 w-8" />
                  <CardTitle className="text-4xl font-headline text-primary">
                    {leadershipSlides[currentSlide].title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-2 sm:p-6 min-h-[50vh]">
                <CurrentSlideContent />
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <motion.div
        className="w-full max-w-3xl px-4 absolute bottom-8 z-20"
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Slide Anterior">
            <ArrowLeft />
          </Button>
          <div className="flex-grow mx-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span>{currentSlide + 1}</span>
            <Progress value={((currentSlide + 1) / leadershipSlides.length) * 100} className="w-full h-2" />
            <span>{leadershipSlides.length}</span>
          </div>
          <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Próximo Slide">
            <ArrowRight />
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
