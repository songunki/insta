
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateInstaCaption = async (title: string, summary: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Transform this blog post title and summary into an Instagram-style caption with emojis and hashtags. 
      Title: ${title}
      Summary: ${summary}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "No caption generated.";
  } catch (error) {
    console.error("Error generating caption:", error);
    return `${title}\n\n${summary}\n\n#tistory #blog`;
  }
};
