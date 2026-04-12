import { API_CONFIG } from "./config.js";

export async function generateImage(prompt) {
  const res = await fetch(API_CONFIG.baseUrl + "/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt,
      width: 512,
      height: 512
    })
  });
  return await res.json();
}
