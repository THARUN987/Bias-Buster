import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert bias detection AI. Analyze the provided text for various types of bias including:
- Gender bias
- Racial/ethnic bias
- Age bias
- Religious bias
- Socioeconomic bias
- Disability bias
- Other stereotypes or discriminatory language

For each biased phrase found, provide:
1. The exact biased phrase
2. The type of bias
3. A neutral alternative
4. A brief explanation

Return your analysis as a JSON array with this structure:
[
  {
    "phrase": "the exact biased phrase",
    "type": "type of bias",
    "alternative": "neutral alternative",
    "explanation": "brief explanation"
  }
]

If no bias is detected, return an empty array [].
Be thorough but fair - only flag genuinely problematic language, not every gendered or group-specific term.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: text }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    // Parse the JSON response from AI
    let biasResults;
    try {
      const jsonMatch = aiResponse.match(/\[[\s\S]*\]/);
      biasResults = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError);
      biasResults = [];
    }

    return new Response(
      JSON.stringify({ results: biasResults }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in analyze-bias function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
