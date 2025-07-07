'use server';

/**
 * @fileOverview A social media post scheduling AI agent.
 *
 * - suggestOptimalSchedule - A function that suggests an optimal social media posting schedule.
 * - SuggestOptimalScheduleInput - The input type for the suggestOptimalSchedule function.
 * - SuggestOptimalScheduleOutput - The return type for the suggestOptimalSchedule function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestOptimalScheduleInputSchema = z.object({
  platform: z
    .string()
    .describe('The social media platform (e.g., Instagram, Facebook, X).'),
  targetAudience: z.string().describe('Description of the target audience.'),
  contentType: z.string().describe('The type of content (e.g., image, video, text).'),
  postingGoals: z
    .string()
    .describe(
      'Goals for posting, such as increasing engagement, driving traffic, or building brand awareness.'
    ),
  existingData: z
    .string()
    .optional()
    .describe(
      'Optional data on past posting performance, including engagement rates, reach, and impressions.'
    ),
});
export type SuggestOptimalScheduleInput = z.infer<
  typeof SuggestOptimalScheduleInputSchema
>;

const SuggestOptimalScheduleOutputSchema = z.object({
  suggestedSchedule: z
    .string()
    .describe(
      'Suggested posting schedule with specific dates and times. Provide as valid json array of objects with date and time properties.'
    ),
  rationale: z
    .string()
    .describe('Explanation of why the suggested schedule is optimal.'),
});
export type SuggestOptimalScheduleOutput = z.infer<
  typeof SuggestOptimalScheduleOutputSchema
>;

export async function suggestOptimalSchedule(
  input: SuggestOptimalScheduleInput
): Promise<SuggestOptimalScheduleOutput> {
  return suggestOptimalScheduleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestOptimalSchedulePrompt',
  input: {schema: SuggestOptimalScheduleInputSchema},
  output: {schema: SuggestOptimalScheduleOutputSchema},
  prompt: `You are a social media marketing expert. Your task is to suggest an optimal posting schedule for social media content based on the provided information. 

Consider the following:
* Social Media Platform: {{{platform}}}
* Target Audience: {{{targetAudience}}}
* Content Type: {{{contentType}}}
* Posting Goals: {{{postingGoals}}}
* Existing Data: {{{existingData}}}

Based on this information, provide a suggested posting schedule, including specific dates and times, and a rationale for why this schedule is optimal. Return the schedule as a JSON array of objects with "date" and "time" properties. The date should be YYYY-MM-DD format and the time should be HH:MM 24h format. Ensure that the returned array is a valid JSON.

Example of the schedule array:
```json
[
  {
    "date": "2024-01-01",
    "time": "10:00"
  },
  {
    "date": "2024-01-03",
    "time": "15:00"
  }
]
```

Here is the information:
Platform: {{platform}}
Target Audience: {{targetAudience}}
Content Type: {{contentType}}
Posting Goals: {{postingGoals}}
Existing Data: {{existingData}}

Remember to respond with a JSON schedule and rationale.
`,
});

const suggestOptimalScheduleFlow = ai.defineFlow(
  {
    name: 'suggestOptimalScheduleFlow',
    inputSchema: SuggestOptimalScheduleInputSchema,
    outputSchema: SuggestOptimalScheduleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
