let currentIndex = 0;

function projectSlide(direction) {
  const project = document.querySelector(".carousel-project");
  const items = document.querySelectorAll(".project-item");

  const itemWidth = items[0].offsetWidth; 
  currentIndex = (currentIndex + direction + items.length) % items.length;
  project.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
