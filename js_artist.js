document.getElementById("read-more").addEventListener("click", function (e) {
  e.preventDefault();
  const aboutText = document.getElementById("about-text");
  aboutText.classList.toggle("expanded");
  this.textContent = aboutText.classList.contains("expanded") ? "Скрыть ↑" : "Читать больше ↓";
})


document.addEventListener("DOMContentLoaded", function () {
  const images = [
    {
      src: "https://artchive.ru/res/media/img/oy800/work/659/9262918@2x.webp",
      alt: "Окно в Париж"
    },
    {
      src: "https://artchive.ru/res/media/img/oy800/work/1e5/9413952@2x.webp",
      alt: "Разморило"
    },
    {
      src: "https://artchive.ru/res/media/img/oy1000/work/482/9413948@2x.webp",
      alt: "Лиза Монина"
    },
    {
      src: "https://artchive.ru/res/media/img/oy800/work/6ab/9344805@2x.webp",
      alt: "Бассейн"
    }
  ];

  let current = 0;
  const imgEl = document.getElementById("slider-image");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  function updateImage() {
    imgEl.src = images[current].src;
    imgEl.alt = images[current].alt;
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % images.length;
    updateImage();
  });
});

document.querySelectorAll(".fullscreenable").forEach(img => {
  img.addEventListener("click", () => {
    const dialog = document.getElementById("image-dialog");
    const dialogImg = document.getElementById("dialog-img");
    dialogImg.src = img.src;
    dialogImg.alt = img.alt;
    dialog.showModal();
  });
});
  
document.getElementById("image-dialog").addEventListener("click", () => {
  document.getElementById("image-dialog").close();
});

