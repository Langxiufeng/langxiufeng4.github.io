import { generateImage } from "../api/aiService.js";

export function initAICenter(container) {
  container.innerHTML = `
  <div class="ai-create-container">
    <div class="input-panel">
      <div class="form-group">
        <label>创作描述</label>
        <textarea id="prompt" placeholder="输入画面描述，例如：一只小橘猫在屋顶吃鱼"></textarea>
      </div>
      <div class="form-group">
        <label>风格选择</label>
        <select id="style">
          <option value="动漫风格">动漫风格</option>
          <option value="写实风格">写实风格</option>
          <option value="油画风格">油画风格</option>
        </select>
      </div>
      <div class="form-group">
        <label>尺寸比例</label>
        <select id="size">
          <option value="1:1">1:1</option>
          <option value="16:9">16:9</option>
          <option value="9:16">9:16</option>
        </select>
      </div>
      <button id="generate-btn" class="generate-btn">生成作品</button>
    </div>
    <div class="result-panel">
      <div id="result-box" class="result-box">
        <div class="placeholder">
          <p>The image is generating...</p>
          <p>Please refresh page to preview.</p>
        </div>
      </div>
      <p class="status-tip">生成成功!</p>
    </div>
  </div>
  `;

  const btn = document.getElementById("generate-btn");
  const resultBox = document.getElementById("result-box");
  const promptInput = document.getElementById("prompt");

  btn.addEventListener("click", async () => {
    const prompt = promptInput.value.trim();
    if (!prompt) return alert("请输入创作描述！");

    const size = document.getElementById("size").value.split(":").map(Number);
    const [w, h] = size;
    const width = 512 * w;
    const height = 512 * h;

    const style = document.getElementById("style").value;
    const fullPrompt = `${style}, ${prompt}`;

    btn.disabled = true;
    resultBox.innerHTML = `<div class="loading">生成中，请稍候...</div>`;

    try {
      const data = await generateImage(fullPrompt, { width, height });
      resultBox.innerHTML = `
        <img 
          src="data:image/png;base64,${data.image}" 
          alt="生成的AI图片" 
          style="max-width: 100%; border-radius: 8px;"
        />
      `;
    } catch (error) {
      resultBox.innerHTML = `<p style="color: red;">生成失败: ${error.message}</p>`;
    } finally {
      btn.disabled = false;
    }
  });
}