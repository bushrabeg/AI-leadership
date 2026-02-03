
import { GoogleGenAI, Type } from "@google/genai";
import { LeadershipPillar } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIInsights = async (data: LeadershipPillar[]) => {
  const prompt = `
    Analyze the following AI leadership data between USA and China (2026-2030 Projection):
    ${JSON.stringify(data, null, 2)}
    
    Provide a professional, visionary strategic summary in 2 paragraphs.
    The first paragraph should focus on the 'Geopolitical Shift'.
    The second paragraph should focus on 'Future Implications' for global tech.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            strategicTakeaway: { type: Type.STRING },
          },
          required: ["summary", "strategicTakeaway"],
        },
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      summary: "A significant shift in AI leadership is projected between 2026 and 2030. While the USA maintains an initial lead in high-end compute and risk management, China's massive industrial scale, energy infrastructure, and talent pipeline are expected to drive a comprehensive dominance across nearly all sectors by the end of the decade.",
      strategicTakeaway: "Strategic coordination and infrastructure investment will be the primary deciders of global AI hegemony in the coming decade."
    };
  }
};
