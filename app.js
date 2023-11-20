const filterItem = document.querySelector(".items");

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
    }
  };
};

const nightMode = document.querySelector("#night-mode");
const changeColor = document.querySelectorAll("#Change-color");
const changePadding = document.querySelectorAll(".item");

nightMode.addEventListener("click", () => {
  document.body.classList.toggle("bg-night-mood");
});

changeColor.forEach(function (event) {
  nightMode.addEventListener("click", () => {
    event.classList.toggle("color-white");
  });
});

changePadding.forEach(function (e) {
  nightMode.addEventListener("click", () => {
    e.classList.toggle("padding-white");
  });
});

const btnAddCart = document.querySelector(".btn-addcart");
const addCart = document.querySelector(".add-cart");

btnAddCart.addEventListener("click", () => {
  addCart.classList.toggle("show-cart");
});

const btnCancel = document.querySelector(".cancel-btn");

btnCancel.addEventListener("click", () => {
  addCart.classList.remove("show-cart");
});

const btns = document.querySelectorAll("#btns");
const count = document.querySelector(".value");

let number = 0;
btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const checkBtn = event.currentTarget.classList;

    if (checkBtn.contains("increase")) {
      number++;
    } else if (checkBtn.contains("decrease")) {
      number--;
    }
    count.innerText = number;
  });
});
