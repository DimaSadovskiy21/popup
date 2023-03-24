let showBtn = document.querySelector(".popup__btn");
let agreeBtn = document.getElementById("agree");
let noagreeBtn = document.getElementById("noagree");
let popupCard = document.querySelector(".popup__card");
let overline = document.querySelector(".overline");

function closeModal() {
  popupCard.classList.remove("open");
  overline.classList.remove("open");
}

showBtn.addEventListener("click", () => {
  popupCard.classList.add("open");
  overline.classList.add("open");
});

agreeBtn.addEventListener("click", () => {
  closeModal();
});

noagreeBtn.addEventListener("click", () => {
  closeModal();
});

overline.addEventListener("click", (e) => {
  if (e.target === overline) {
    closeModal();
  }
});
