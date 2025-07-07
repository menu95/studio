"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, CalendarClock } from "lucide-react"

import { suggestOptimalSchedule, SuggestOptimalScheduleOutput } from "@/ai/flows/social-media-scheduler"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const formSchema = z.object({
  platform: z.string().min(1, "Plataforma é obrigatória"),
  targetAudience: z.string().min(10, "Descreva melhor o público-alvo"),
  contentType: z.string().min(3, "Tipo de conteúdo é obrigatório"),
  postingGoals: z.string().min(10, "Descreva melhor os objetivos"),
})

type ScheduleItem = {
    date: string;
    time: string;
}

export default function SocialScheduler() {
  const [result, setResult] = useState<SuggestOptimalScheduleOutput | null>(null)
  const [schedule, setSchedule] = useState<ScheduleItem[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platform: "Instagram",
      targetAudience: "",
      contentType: "",
      postingGoals: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setError(null)
    setResult(null)
    setSchedule(null)

    try {
      const aiResult = await suggestOptimalSchedule(values)
      setResult(aiResult)
      try {
        const parsedSchedule = JSON.parse(aiResult.suggestedSchedule);
        setSchedule(parsedSchedule);
      } catch (e) {
        setError("A IA retornou um cronograma em formato inválido.")
        setSchedule(null);
      }
    } catch (e) {
      setError("Ocorreu um erro ao consultar a IA. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
        <Card className="bg-background/50">
            <CardHeader>
                <CardTitle className="font-headline text-primary">Agendador de Posts com IA</CardTitle>
                <CardDescription>Receba sugestões de horários para postar.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="platform"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Plataforma</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl><SelectTrigger><SelectValue placeholder="Selecione..." /></SelectTrigger></FormControl>
                                        <SelectContent>
                                            <SelectItem value="Instagram">Instagram</SelectItem>
                                            <SelectItem value="Facebook">Facebook</SelectItem>
                                            <SelectItem value="X">X (Twitter)</SelectItem>
                                            <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="targetAudience" render={({ field }) => (
                            <FormItem><FormLabel>Público-alvo</FormLabel><FormControl><Input placeholder="Ex: Mulheres, 25-40 anos, interessadas em autoconhecimento" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                        <FormField control={form.control} name="contentType" render={({ field }) => (
                            <FormItem><FormLabel>Tipo de Conteúdo</FormLabel><FormControl><Input placeholder="Ex: Carrossel de imagens, vídeo curto (Reels), post de texto" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                        <FormField control={form.control} name="postingGoals" render={({ field }) => (
                             <FormItem><FormLabel>Objetivos</FormLabel><FormControl><Textarea placeholder="Ex: Aumentar engajamento, gerar leads, construir autoridade" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                        <Button type="submit" disabled={isLoading} className="w-full">
                            {isLoading ? <Loader2 className="animate-spin" /> : "Sugerir Agenda"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
        <div className="flex items-center justify-center">
            {isLoading && <Loader2 className="h-12 w-12 animate-spin text-primary" />}
            {error && <p className="text-destructive">{error}</p>}
            {result && schedule && (
                <Card className="w-full bg-background/50">
                    <CardHeader>
                        <CardTitle className="font-headline text-primary flex items-center gap-2"><CalendarClock /> Agenda Sugerida</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Data</TableHead>
                                    <TableHead>Hora</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {schedule.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{new Date(item.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</TableCell>
                                        <TableCell>{item.time}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <h4 className="font-headline text-lg mt-4 text-primary">Justificativa</h4>
                        <p className="text-sm mt-2">{result.rationale}</p>
                    </CardContent>
                </Card>
            )}
        </div>
    </div>
  )
}
