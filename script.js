// Variável para armazenar o índice atual do item visível
let currentIndex = 0;

function projectSlide(direction) {
  // Seleciona o contêiner do carrossel
  const project = document.querySelector(".carousel-project");

  // Seleciona todos os itens dentro do carrossel
  const items = document.querySelectorAll(".project-item");

  // Obtém a largura de um item (todos os itens têm a mesma largura)
  const itemWidth = items[0].offsetWidth;

  // Atualiza o índice atual, levando em consideração a direção do clique (direção pode ser 1 para avançar ou -1 para voltar)
  // O "+ items.length" garante que o índice não se torne negativo e o "%" permite que o índice "volte" para o primeiro item quando chegar ao final
  currentIndex = (currentIndex + direction + items.length) % items.length;

  // Aplica a transformação de translação no contêiner do carrossel para deslocar os itens horizontalmente
  // A transformação move o carrossel para a esquerda, com base no índice atual do item
  project.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function sendForm() {
  //Selecionando os campos do form
  const inName = document.getElementById("inName");
  const inEmail = document.getElementById("inEmail");
  const inMsg = document.getElementById("inMsg");
  const msgFeedback = document.getElementById("msgFeedback");

  //Pegando valores digitados nos campos do form
  const name = inName.value.trim();
  const email = inEmail.value.trim();
  const msg = inMsg.value.trim();

  //Avaliando se os campos estão vazios
  if (!name || !email || !msg) {
    alert("Por favor, preencha todos os campos!");
    inName.focus();
    return;
  }

  //Montando mensagem de feedback do formulário
  msgFeedback.textContent = "Mensagem enviada com Sucesso!";
  msgFeedback.classList.add("visible");

  //Temporizador para emnsagem de feedbeck
  setTimeout(() => {
    msgFeedback.classList.remove("visible");
  }, 2000);

  // Limpa os campos do formulário
  inName.value = "";
  inEmail.value = "";
  inMsg.value = "";
}

//Adicionando a função ao botão de enviar
const btnSend = document.getElementById("btnSend");
btnSend.addEventListener("click", sendForm);
