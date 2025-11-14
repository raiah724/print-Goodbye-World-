import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-3bb47659/health", (c) => {
  return c.json({ status: "ok" });
});

// AI-powered challenge generation endpoint
app.post("/make-server-3bb47659/generate-challenge", async (c) => {
  try {
    const { level, language, previousChallenges } = await c.req.json();
    
    console.log(`Generating challenge for level ${level}, language: ${language}`);
    
    // Get OpenAI API key from environment
    const apiKey = Deno.env.get("OPENAI_API_KEY");
    
    if (!apiKey) {
      console.error("OpenAI API key not found in environment");
      return c.json({ 
        error: "AI service not configured. Please set OPENAI_API_KEY environment variable." 
      }, 500);
    }
    
    // Calculate difficulty based on level
    const difficulty = Math.min(10, Math.floor(level / 2) + 1);
    
    // Define challenge types based on difficulty
    let challengeType = "";
    let examples = "";
    
    if (difficulty <= 2) {
      challengeType = "basic output/print statement";
      examples = "Example: print('Hello'), console.log('Hello'), System.out.println('Hello')";
    } else if (difficulty <= 4) {
      challengeType = "variables and basic operators";
      examples = "Example: x = 5 + 3, let sum = a + b, int result = x * y";
    } else if (difficulty <= 6) {
      challengeType = "conditional statements (if/else)";
      examples = "Example: if x > 10: ..., if (condition) {...}, if (x == y) {...}";
    } else if (difficulty <= 8) {
      challengeType = "loops (for/while)";
      examples = "Example: for i in range(5), for (let i = 0; i < 5; i++), while (condition)";
    } else {
      challengeType = "complex logic (functions, arrays, nested structures)";
      examples = "Example: def function(), function myFunc() {}, array indexing, nested loops";
    }
    
    // Build the prompt for GPT
    const systemPrompt = `You are a programming challenge generator for "Ancient Coding Warriors", an educational game with ancient civilization aesthetics. Generate programming challenges that teach ${language} fundamentals through mystical, ancient-themed narratives.

The challenge should be appropriate for difficulty level ${difficulty} (1-10 scale) and focus on: ${challengeType}.

Return ONLY a valid JSON object with this EXACT structure (no markdown, no code blocks, just raw JSON):
{
  "display": "# Ancient-themed comment\\ncode with ___ placeholder",
  "solution": "exact answer expected",
  "hint": "Mystical hint about the concept",
  "difficulty": ${difficulty}
}

CRITICAL RULES:
1. Use ONLY ONE blank (___) in the code for the player to fill
2. The solution must be SHORT - typically 1-5 characters for operators, or a single keyword
3. For print challenges at level 1, display the EXACT message to print in the comment, like: # Output the words: "Ancient power"
4. Use ancient/mystical language (runes, spells, temples, energy, essence, power)
5. Make it CLEAR what the player needs to type
6. ${language} syntax must be CORRECT
7. ${examples}
8. Keep challenges SIMPLE for the difficulty level
9. The display must show incomplete code with exactly one ___ blank
10. Make each challenge unique - avoid repeating patterns`;

    const previousList = previousChallenges && previousChallenges.length > 0 
      ? `\n\nPreviously generated challenges to avoid repeating:\n${previousChallenges.slice(-5).join('\n')}`
      : '';
    
    const userPrompt = `Generate a unique ${language} challenge for level ${level} (difficulty ${difficulty}).${previousList}`;
    
    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.9, // Higher creativity for variety
        max_tokens: 500,
      }),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`OpenAI API error: ${response.status} - ${errorText}`);
      return c.json({ 
        error: `AI service error: ${response.status}`,
        details: errorText 
      }, response.status);
    }
    
    const data = await response.json();
    const content = data.choices[0].message.content.trim();
    
    console.log(`AI Response: ${content}`);
    
    // Parse the JSON response
    let challenge;
    try {
      // Remove markdown code blocks if present
      const cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      challenge = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error(`Failed to parse AI response: ${parseError.message}`);
      console.error(`Raw content: ${content}`);
      return c.json({ 
        error: "Failed to parse AI response",
        details: parseError.message,
        rawContent: content
      }, 500);
    }
    
    // Validate the challenge structure
    if (!challenge.display || !challenge.solution || !challenge.hint) {
      console.error(`Invalid challenge structure: ${JSON.stringify(challenge)}`);
      return c.json({ 
        error: "Invalid challenge structure from AI",
        challenge 
      }, 500);
    }
    
    return c.json(challenge);
    
  } catch (error) {
    console.error(`Error generating challenge: ${error.message}`);
    return c.json({ 
      error: "Failed to generate challenge",
      details: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);
