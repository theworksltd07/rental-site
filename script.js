
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal .close");
const items = document.querySelectorAll(".item");

items.forEach(item => {
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector("img").src;
    modalImg.src = imgSrc;
    modal.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
