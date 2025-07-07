// use server'

/**
 * @fileOverview AI agent summarizing the presentation text.
 *
 * - presentationSummarizer - A function that summarizes the presentation text
 * - PresentationSummarizerInput - The input type for the presentationSummarizer function.
 * - PresentationSummarizerOutput - The return type for the presentationSummarizer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PresentationSummarizerInputSchema = z.object({
  presentationText: z.string().describe('The text content of the presentation.'),
});

export type PresentationSummarizerInput = z.infer<typeof PresentationSummarizerInputSchema>;

const PresentationSummarizerOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the presentation.'),
});

export type PresentationSummarizerOutput = z.infer<typeof PresentationSummarizerOutputSchema>;

export async function presentationSummarizer(input: PresentationSummarizerInput): Promise<PresentationSummarizerOutput> {
  return presentationSummarizerFlow(input);
}

const presentationSummarizerPrompt = ai.definePrompt({
  name: 'presentationSummarizerPrompt',
  input: {schema: PresentationSummarizerInputSchema},
  output: {schema: PresentationSummarizerOutputSchema},
  prompt: `Summarize the following presentation text, focusing on key takeaways and recommendations:\n\n{{{presentationText}}}`, 
});

const presentationSummarizerFlow = ai.defineFlow(
  {
    name: 'presentationSummarizerFlow',
    inputSchema: PresentationSummarizerInputSchema,
    outputSchema: PresentationSummarizerOutputSchema,
  },
  async input => {
    const {output} = await presentationSummarizerPrompt(input);
    return output!;
  }
);
