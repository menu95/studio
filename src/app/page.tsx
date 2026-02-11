
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Wind,
  BarChart,
  Users,
  CalendarDays,
  Target,
  Trophy,
  Sparkles,
  PenSquare,
  HeartHandshake,
  Home as HomeIcon,
  HandCoins,
  Activity,
  Megaphone,
  LayoutDashboard,
  FileText,
  RefreshCw,
  Rocket,
  Star
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Logo from "@/components/logo";
import {
    WelcomeSlide,
    ProcessosSlide,
    ComunicacaoSlide,
    AgendaSlide,
    PersonaSlide,
    RedesSociaisSlide,
    AppDasPsisSlide,
    ReconhecimentoSlide,
    ProximosPassosSlide
} from '@/components/slides';

import {
    WelcomeSlideSecond,
    AjusteValorSlide,
    AgendaOrganizadaSlide,
    Expectativas2026Slide,
    Movimentos2025Slide,
    SucessoClienteSlide,
    MarketingSlide,
    SetoresEstrelaGuiaSlide,
    ContratosSlide,
    ReunioesRecorrentesSlide,
    EstrategiaSetoresSlide,
    LiderancaSlide,
    EstrelaGuiaOKRsSlide,
    NotionOrganizacaoSlide,
    RituaisAllHandsSlide,
    EncerramentoSlide
} from '@/components/slides-second';

type SlideContent = {
  title: string;
  Icon: React.ElementType;
  content: React.ElementType;
};

const presentation1Slides: SlideContent[] = [
    { title: "Boas-vindas", Icon: Wind, content: WelcomeSlide },
    { title: "Tópico 1: Processos", Icon: BarChart, content: ProcessosSlide },
    { title: "Tópico 2: Agilidade na Comunicação", Icon: HeartHandshake, content: ComunicacaoSlide },
    { title: "Tópico 3: Organização da Agenda", Icon: CalendarDays, content: AgendaSlide },
    { title: "Tópico 4: Ajustes na Persona", Icon: Target, content: PersonaSlide },
    { title: "Tópico 5: Redes Sociais", Icon: Users, content: RedesSociaisSlide },
    { title: "Tópico 6: App das Psis Inteligente", Icon: Sparkles, content: AppDasPsisSlide },
    { title: "Tópico 7: Reconhecimento", Icon: Trophy, content: ReconhecimentoSlide },
    { title: "Feedback e Encerramento", Icon: PenSquare, content: ProximosPassosSlide },
];

const presentation2Slides: SlideContent[] = [
    { title: "Boas-vindas", Icon: Wind, content: WelcomeSlideSecond },
    { title: "Expectativas 2026", Icon: Rocket, content: Expectativas2026Slide },
    { title: "Contratos", Icon: FileText, content: ContratosSlide },
    { title: "Agenda Organizada", Icon: CalendarDays, content: AgendaOrganizadaSlide },
    { title: "Sucesso do Cliente", Icon: HeartHandshake, content: SucessoClienteSlide },
    { title: "Marketing", Icon: Megaphone, content: MarketingSlide },
    { title: "Ajuste de Valor", Icon: HandCoins, content: AjusteValorSlide },
    { title: "Movimentos 2025", Icon: Activity, content: Movimentos2025Slide },
    { title: "Divisão Estratégica", Icon: LayoutDashboard, content: EstrategiaSetoresSlide },
    { title: "Liderança", Icon: Users, content: LiderancaSlide },
    { title: "Estrela Guia & OKRs", Icon: Star, content: EstrelaGuiaOKRsSlide },
    { title: "Notion & Organização", Icon: FileText, content: NotionOrganizacaoSlide },
    { title: "Rituais All Hands", Icon: RefreshCw, content: RituaisAllHandsSlide },
    { title: "Encerramento", Icon: Rocket, content: EncerramentoSlide },
];

export default function Home() {
  const [selectedPresentation, setSelectedPresentation] = useState<1 | 2 | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const slides = selectedPresentation === 1 ? presentation1Slides : presentation2Slides;

  useEffect(() => {
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
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };
  
  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  if (selectedPresentation === null) {
    return (
      <main className="h-screen w-screen bg-background text-foreground flex flex-col items-center justify-center p-4 sm:p-8 font-body relative overflow-hidden">
        <div className="absolute top-6 left-6">
          <Logo className="w-20 h-20 text-primary opacity-50" />
        </div>

        <div className="max-w-4xl w-full text-center space-y-12">
            <div className="space-y-4">
                <h1 className="text-6xl font-headline text-primary">All Hands</h1>
                <p className="text-xl text-muted-foreground font-headline">Escolha a apresentação que deseja visualizar</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card
                    className="cursor-pointer hover:border-primary/50 transition-all hover:shadow-xl group bg-background/50"
                    onClick={() => { setSelectedPresentation(1); setCurrentSlide(0); }}
                >
                    <CardHeader className="text-center py-12">
                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-3xl font-headline text-primary">Primeiro All Hands</CardTitle>
                        <CardDescription className="text-lg">08 de Julho de 2025</CardDescription>
                    </CardHeader>
                </Card>

                <Card
                    className="cursor-pointer hover:border-accent/50 transition-all hover:shadow-xl group bg-background/50"
                    onClick={() => { setSelectedPresentation(2); setCurrentSlide(0); }}
                >
                    <CardHeader className="text-center py-12">
                        <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Rocket className="w-8 h-8 text-accent" />
                        </div>
                        <CardTitle className="text-3xl font-headline text-primary">Segundo All Hands</CardTitle>
                        <CardDescription className="text-lg">Amanhã, 11 de Fevereiro</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
      </main>
    );
  }

  const CurrentSlideContent = slides[currentSlide].content;
  const CurrentSlideIcon = slides[currentSlide].Icon;

  return (
    <main className="h-screen w-screen bg-background text-foreground flex flex-col items-center justify-center p-4 sm:p-8 font-body relative overflow-hidden">
      <div className="absolute top-6 left-6 flex items-center gap-4">
        <Logo className="w-20 h-20 text-primary opacity-50" />
        <Button variant="ghost" size="sm" onClick={() => setSelectedPresentation(null)} className="flex items-center gap-2">
            <HomeIcon className="w-4 h-4" />
            Menu Principal
        </Button>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedPresentation}-${currentSlide}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
             <Card className="w-full bg-transparent border-none shadow-none">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3 text-accent mb-2">
                  <CurrentSlideIcon className="h-8 w-8" />
                  <CardTitle className="text-4xl font-headline text-primary">
                    {slides[currentSlide].title}
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
      
      <motion.div
        className="w-full max-w-3xl px-4 absolute bottom-8"
        initial={{ opacity: 1 }}
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Slide Anterior">
            <ArrowLeft />
          </Button>
          <div className="flex-grow mx-4 flex items-center gap-2 text-sm text-muted-foreground">
             <span>{currentSlide + 1}</span>
            <Progress value={((currentSlide + 1) / slides.length) * 100} className="w-full h-2" />
            <span>{slides.length}</span>
          </div>
          <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Próximo Slide">
            <ArrowRight />
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
