// Modal - Start

const modalMenu = document.querySelector(".modal__menu");
const openModal = document.querySelector(".modal__open");
const closeModal = document.querySelector(".modal__close");

openModal.addEventListener("click", function () {
  modalMenu.classList.add("active");
});

closeModal.addEventListener("click", function () {
  modalMenu.classList.remove("active");
});

// Modal - End
