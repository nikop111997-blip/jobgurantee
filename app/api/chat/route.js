import { 
  streamText, 
  convertToModelMessages, 
  createUIMessageStreamResponse, 
  toUIMessageStream 
} from 'ai';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { MLOPS_BOT_SYSTEM_PROMPT } from '@/app/lib/mlopsBotPrompt';

// 1. Initialize the OpenRouter provider
const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req) {
  try {
    const { messages } = await req.json();

    // 2. Call OpenRouter
    // In SDK 5.0, we must convert the frontend UI messages into the backend format using convertToModelMessages
    const result = streamText({
      model: openrouter('inclusionai/ling-3.0-flash-fin:free'),
      messages: await convertToModelMessages(messages),
      system: MLOPS_BOT_SYSTEM_PROMPT,
    });

    // 3. Return the streaming response using the new v5 helpers
    return createUIMessageStreamResponse({
      stream: toUIMessageStream({ stream: result.stream }),
    });
    
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch response from OpenRouter" }), 
      { status: 500 }
    );
  }
}