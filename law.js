var btn = document.querySelectorAll("myBtn");
var para = document.querySelectorAll("faq-ans");
var isShow = false;

btn.addEventListener("click", () => {
  if (!isShow) {
    btn.innerHTML = "-";
    para.classList.add("show");
    para.classList.remove("hide");
    isShow = !isShow;
  } else {
    btn.innerHTML = "+";
    para.classList.add("hide");
    para.classList.remove("show");
    isShow = !isShow;
  }
});
