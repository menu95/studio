
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Wind,
  BarChart,
  MessageSquareQuote,
  Users,
  Sprout,
  HeartHandshake,
  Target,
  Trophy,
  CalendarDays,
  Sparkles,
  PenSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/logo";
import {
    WelcomeSlide,
    ProcessosSlide,
    ComunicacaoSlide,
    AgendaSlide,
    PersonaSlide,
    RedesSociaisSlide,
    CatalogoSlide,
    ReconhecimentoSlide,
    ProximosPassosSlide
} from '@/components/slides';

type SlideContent = {
  title: string;
  Icon: React.ElementType;
  content: React.ElementType;
};

const slides: SlideContent[] = [
    {
        title: "Boas-vindas",
        Icon: Wind,
        content: WelcomeSlide,
      },
      {
        title: "Tópico 1: Processos",
        Icon: BarChart,
        content: ProcessosSlide,
      },
      {
        title: "Tópico 2: Agilidade na Comunicação",
        Icon: HeartHandshake,
        content: ComunicacaoSlide,
      },
      {
        title: "Tópico 3: Organização da Agenda",
        Icon: CalendarDays,
        content: AgendaSlide,
      },
      {
        title: "Tópico 4: Ajustes na Persona",
        Icon: Target,
        content: PersonaSlide,
      },
      {
        title: "Tópico 5: Redes Sociais",
        Icon: Users,
        content: RedesSociaisSlide,
      },
      {
        title: "Tópico 6: Catálogo de Psis Inteligente",
        Icon: Sparkles,
        content: CatalogoSlide,
      },
      {
        title: "Tópico 7: Reconhecimento",
        Icon: Trophy,
        content: ReconhecimentoSlide,
      },
      {
        title: "Feedback e Encerramento",
        Icon: PenSquare,
        content: ProximosPassosSlide,
      },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const CurrentSlideContent = slides[currentSlide].content;
  const CurrentSlideIcon = slides[currentSlide].Icon;

  return (
    <main className="h-screen w-screen bg-background text-foreground flex flex-col items-center justify-center p-4 sm:p-8 font-body relative overflow-hidden">
      <div className="absolute top-6 left-6">
        <Logo className="w-20 h-20 text-primary opacity-50" />
      </div>

      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
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
      
      <div className="w-full max-w-3xl px-4 absolute bottom-8">
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
      </div>
    </main>
  );
}
