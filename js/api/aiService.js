import { API_CONFIG } from "./config.js";

export async function generateImage(prompt, options = {}) {
  const { width = 512, height = 512 } = options;

  try {
    const response = await fetch(`${API_CONFIG.baseUrl}/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, width, height })
    });

    if (!response.ok) throw new Error(`请求失败: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("生成错误:", error);
    throw error;
  }
}