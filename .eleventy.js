// ============================================================
// Arquivo de configuração do Eleventy (11ty)
// ------------------------------------------------------------
// O Eleventy é a ferramenta que "junta" o conteúdo (arquivos em
// /content, editados pelo Decap CMS) com os modelos visuais
// (arquivos em /_includes) e gera o site final pronto (HTML puro)
// dentro da pasta /_site. É essa pasta /_site que o Netlify publica.
// Você não precisa entender isso a fundo - é só a "engrenagem"
// por trás do painel de edição.
// ============================================================
module.exports = function (eleventyConfig) {
  // "Passthrough" = copiar arquivos sem processar.
  // Aqui, tudo que estiver em /public (CSS, imagens fixas) e a
  // pasta /admin (o painel do Decap CMS) são copiados direto para
  // a pasta final do site, sem nenhuma transformação.
  // O ": .." aqui significa "jogue o CONTEÚDO da pasta /public direto na
  // raiz do site final", por isso o CSS pode ser referenciado como
  // "/css/estilo.css" e não "/public/css/estilo.css".
  eleventyConfig.addPassthroughCopy({ public: "." });
  eleventyConfig.addPassthroughCopy("admin");
  // Evita que o Eleventy tente "processar" os arquivos do painel como
  // se fossem modelos de página - eles só precisam ser copiados como estão.
  eleventyConfig.ignores.add("admin/**");
  // As imagens que as pessoas subirem pelo painel de edição vão
  // parar em /content/imagens - também precisam ser copiadas.
  eleventyConfig.addPassthroughCopy("content/imagens");

  return {
    dir: {
      input: ".",          // onde o Eleventy procura os templates
      includes: "_includes", // onde ficam os "pedaços" reutilizáveis (cabeçalho, rodapé)
      data: "content",     // onde ficam os arquivos de conteúdo (editados pelo CMS)
      output: "_site",     // pasta final gerada, que o Netlify publica
    },
    templateFormats: ["njk", "html"], // usamos o formato Nunjucks (.njk) para os modelos
  };
};
