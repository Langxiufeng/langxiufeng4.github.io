import { API_CONFIG } from "./config.js";

export async function generateImage(prompt, options = {}) {
  const { width = 512, height = 512 } = options;

  try {
    const response = await fetch(`${API_CONFIG.baseUrl}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: prompt,
        width: width,
        height: height
      })
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.detail || "API请求失败");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("生成错误：", error);
    throw error;
  }
}