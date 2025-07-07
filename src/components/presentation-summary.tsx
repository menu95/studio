"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { presentationSummarizer } from "@/ai/flows/presentation-summarizer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type PresentationSummaryProps = {
  textToSummarize: string
}

export default function PresentationSummary({ textToSummarize }: PresentationSummaryProps) {
  const [summary, setSummary] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSummarize = async () => {
    setIsLoading(true)
    setError(null)
    setSummary(null)
    try {
      const result = await presentationSummarizer({ presentationText: textToSummarize })
      setSummary(result.summary)
    } catch (e) {
      setError("Ocorreu um erro ao gerar o resumo. Tente novamente.")
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <Card className="h-full bg-background/50">
      <CardHeader>
        <CardTitle className="font-headline text-primary">Resumo com IA</CardTitle>
        <CardDescription>Obtenha os pontos-chave da apresentação.</CardDescription>
      </CardHeader>
      <CardContent>
        {summary && <p className="text-sm mb-4 whitespace-pre-wrap">{summary}</p>}
        {isLoading && (
          <div className="flex justify-center items-center my-4">
            <Loader2 className="animate-spin h-8 w-8 text-primary" />
          </div>
        )}
        {error && <p className="text-destructive text-sm">{error}</p>}
        <Button onClick={handleSummarize} disabled={isLoading} className="w-full">
          {isLoading ? "Gerando..." : "Gerar Resumo da Apresentação"}
        </Button>
      </CardContent>
    </Card>
  )
}
