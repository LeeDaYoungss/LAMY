let gnbWrap = document.querySelector(".menubar");
let gnb = document.querySelectorAll(".menubar-wrapper");


for (let i = 0; i < gnb.length; i++) {
    gnb[i].addEventListener("mouseover",() => {
      gnbWrap.classList.add("on")
    });
};
