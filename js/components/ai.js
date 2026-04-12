import { generateImage } from "../api/aiService.js";

export function initAI(container) {
  container.innerHTML = `
  <div style="max-width:600px;margin:40px auto">
    <h2>AI 绘画生成器</h2>
    <input type="text" id="prompt" style="width:100%;padding:12px;margin:10px 0" placeholder="输入画面描述...">
    <button id="gen" style="padding:12px 24px;background:#0096fa;color:white;border:none;border-radius:6px">生成图片</button>
    <div id="loading" style="margin:10px;display:none">生成中，请等待...</div>
    <div id="result" style="margin-top:20px"></div>
  </div>`;

  const btn = document.getElementById("gen");
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");

  btn.onclick = async () => {
    const p = document.getElementById("prompt").value;
    if (!p) return alert("请输入描述");
    btn.disabled = true;
    loading.style.display = "block";
    result.innerHTML = "";
    try {
      const data = await generateImage(p);
      result.innerHTML = `<img src="data:image/png;base64,${data.image}" style="max-width:100%">`;
    } catch (e) {
      result.innerHTML = "<p style=color:red>生成失败</p>";
    } finally {
      btn.disabled = false;
      loading.style.display = "none";
    }
  };
}