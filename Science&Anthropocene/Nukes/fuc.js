const btn = document.querySelector(".btn");

let cuBtn;
const buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    console.log(this.id);
    cuBtn = this.id;
    document.querySelector(`.${cuBtn}`).classList.toggle("open");
  };
}
