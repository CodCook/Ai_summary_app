
import { GoogleGenAI } from "@google/genai";
import { Mode } from '../types';

const getPrompt = (inputText: string, mode: Mode): string => {
  return `You are StudyBuddy, an intelligent study assistant built for students. 
Your goal is to help students understand their notes quickly and easily.

Depending on the user's request, perform ONE of the following actions:

1. **Summarize:** 
   - Read the text carefully.
   - Produce a clear, short summary using 3–5 bullet points.
   - Focus only on the most important concepts, definitions, or steps.
   - Avoid unnecessary repetition or examples.
   - Keep it concise and academic-friendly.

2. **Simplify:** 
   - Rewrite the text in simple and clear language.
   - Explain difficult or technical terms in an easy-to-understand way.
   - Keep the tone friendly, like a helpful tutor.
   - Preserve meaning but make it easier to grasp.

3. **Tag:** 
   - Identify the main topic or subject of the note (e.g., Math, Physics, Biology, History).
   - Return only 1–3 short subject tags, separated by commas.

---

**USER REQUEST**

**Input Text:**
\`\`\`
${inputText}
\`\`\`

**Mode:** ${mode}

**Instructions:**
Based on the mode selected, generate the appropriate output. Follow the output format rules strictly:
- If mode = Summarize → output bullet points starting with '*'.
- If mode = Simplify → output short paragraphs.
- If mode = Tag → output tags only, separated by commas.`;
};

export const runAnalysis = async (inputText: string, mode: Mode): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = getPrompt(inputText, mode);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return `An error occurred: ${error.message}. Please check your API key and network connection.`;
    }
    return "An unknown error occurred while processing your request.";
  }
};
