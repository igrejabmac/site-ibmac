// ============================================================
// Mesma ideia do galeria.js: reúne cada arquivo para download
// (cada um criado pelo painel de edição) numa lista só.
// ============================================================
const fs = require("fs");
const path = require("path");

module.exports = function () {
  const pasta = path.join(__dirname, "downloads");

  if (!fs.existsSync(pasta)) return [];

  return fs
    .readdirSync(pasta)
    .filter((arquivo) => arquivo.endsWith(".json"))
    .map((arquivo) => {
      const conteudo = fs.readFileSync(path.join(pasta, arquivo), "utf8");
      return JSON.parse(conteudo);
    })
    .sort((a, b) => (a.ordem || 0) - (b.ordem || 0));
};
