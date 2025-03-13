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
