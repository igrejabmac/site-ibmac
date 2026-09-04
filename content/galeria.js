// ============================================================
// Este arquivo NÃO é editado pelo painel (Decap CMS).
// Ele só faz um trabalho automático: olha dentro da pasta
// /content/galeria, lê cada arquivo .json que tiver lá dentro
// (cada um representa UMA foto, criada quando alguém usa o
// painel de edição) e devolve tudo junto como uma lista única,
// para o site conseguir mostrar a galeria inteira.
// ============================================================
const fs = require("fs");
const path = require("path");

module.exports = function () {
  const pasta = path.join(__dirname, "galeria");

  // Se a pasta ainda não existir (ex: primeira vez rodando o site), devolve lista vazia
  if (!fs.existsSync(pasta)) return [];

  return fs
    .readdirSync(pasta)                 // lista todos os arquivos da pasta
    .filter((arquivo) => arquivo.endsWith(".json")) // ignora qualquer coisa que não seja .json
    .map((arquivo) => {
      const conteudo = fs.readFileSync(path.join(pasta, arquivo), "utf8");
      return JSON.parse(conteudo);      // transforma o texto do arquivo em um objeto usável
    })
    .sort((a, b) => (a.ordem || 0) - (b.ordem || 0)); // ordena pelo campo "ordem"
};
