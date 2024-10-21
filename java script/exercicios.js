const mudarBotao = document.getElementById("mudar-botao");
mudarBotao.onclick = () => {
  const mudarBotaoTexto = document.getElementById("mudar-texto");
  mudarBotaoTexto.innerHTML =
    "Se não entregarem o projeto final até a data marcada, a única coisa que vocês vão conseguir compilar será uma pilha de arrependimentos!";
};

const mudarCor = document.getElementById("mudar-cor");
mudarCor.onclick = () => {
  const mudarCor = document.getElementById("cor-azul");
  mudarCor.style.backgroundColor = "blue";
};

const addTexto = document.getElementById("add-texto");
const textoAdicionado = document.getElementById("ad-texto");

// Função para adicionar o texto
addTexto.onclick = () => {
  // Adicionando o texto ao parágrafo
  textoAdicionado.textContent =
    "A beleza da vida está nas pequenas coisas que muitas vezes passam despercebidas: " +
    "o calor do sol ao amanhecer, o som suave do vento entre as árvores, ou um sorriso sincero " +
    "vindo de alguém que amamos. Esses momentos, simples e cotidianos, são os que realmente " +
    "compõem a felicidade. Às vezes, na correria do dia a dia, nos esquecemos de parar e " +
    "apreciar essas dádivas. Mas é justamente quando nos permitimos desacelerar e viver o " +
    "presente que encontramos a verdadeira paz. Afinal, a vida não é só sobre grandes " +
    "conquistas, mas sobre os detalhes que a tornam.";
};

const qtdClique = document.getElementById("cliques");
let x = 0;
const numeroadicionado = document.getElementById("numero");
qtdClique.onclick = () => {
  x++;
  numeroadicionado.textContent = x;
  console.log(numeroadicionado);
};
