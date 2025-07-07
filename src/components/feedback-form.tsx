"use client"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { submitFeedback } from "@/app/actions"

const formSchema = z.object({
  feedback: z.string().min(10, "Por favor, elabore um pouco mais seu feedback.").max(500, "O feedback deve ter no máximo 500 caracteres."),
})

export default function FeedbackForm() {
    const { toast } = useToast()
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          feedback: "",
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        startTransition(async () => {
            const result = await submitFeedback(values.feedback);

            if (result.success) {
                toast({
                    title: "Feedback Enviado!",
                    description: "Obrigado por sua contribuição.",
                })
                form.reset();
            } else {
                 toast({
                    title: "Erro ao enviar feedback",
                    description: "Por favor, tente novamente mais tarde.",
                    variant: "destructive",
                })
            }
        });
    }


  return (
    <Card className="h-full bg-background/50">
      <CardHeader>
        <CardTitle className="font-headline text-primary">Seu Feedback</CardTitle>
        <CardDescription>Compartilhe suas ideias e sugestões.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="feedback"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sua mensagem</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Escreva aqui suas impressões..."
                                    className="resize-none"
                                    rows={5}
                                    {...field}
                                    disabled={isPending}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Enviar Feedback
                </Button>
            </form>
        </Form>
      </CardContent>
    </Card>
  )
}
