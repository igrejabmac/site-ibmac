// ======================================================
// Controla a abertura/fechamento do menu sanduíche.
// (mesmo código explicado anteriormente, agora como arquivo à parte)
// ======================================================
const botaoAbrir = document.getElementById('abrirMenu');
const botaoFechar = document.getElementById('fecharMenu');
const menuDrawer = document.getElementById('drawer');
const fundoDrawer = document.getElementById('fundoDrawer');

function abrirMenuSanduiche() {
  menuDrawer.classList.add('aberto');
  fundoDrawer.classList.add('aberto');
}

function fecharMenuSanduiche() {
  menuDrawer.classList.remove('aberto');
  fundoDrawer.classList.remove('aberto');
}

botaoAbrir.addEventListener('click', abrirMenuSanduiche);
botaoFechar.addEventListener('click', fecharMenuSanduiche);
fundoDrawer.addEventListener('click', fecharMenuSanduiche);

const linksDoDrawer = menuDrawer.querySelectorAll('a');
linksDoDrawer.forEach(function (link) {
  link.addEventListener('click', fecharMenuSanduiche);
});
