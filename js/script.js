const mainMenu = document.querySelectorAll('.menu');
const header = document.querySelector('.menubar_wrap');
const initHeight = header.offsetHeight;
let tallestHeight = 0;

for(let mm of mainMenu){
	//서브메뉴의 높이구하기
	let smHeight = mm.querySelector('.sub_menu').offsetHeight;	

	if(smHeight > tallestHeight){
		tallestHeight = smHeight;
	}
	let headerHeight = tallestHeight + initHeight + 50;
	
	mm.addEventListener('mouseover',()=>{
		header.style.height = `${headerHeight}px`;
	});
	mm.addEventListener('mouseout',()=>{
		header.style.height = `${initHeight}px`;
	});	
}



/* MAIN BANNER */

const slideWrapper = document.querySelector('.slidewrapper');
const slideContainer = document.querySelector('.slidecontainer');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const gap = 50;
const slideCount = slides.length;
let currentIdx = 0;
let timer;

let slideWidth = slideWrapper.offsetWidth;
//복사본 생성
    //증가하면서 기존요소의 뒤쪽에 생성
    for(var i = 0;i<slideCount;i++){
      var cloneSlide = slides[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      slideContainer.appendChild(cloneSlide);
  }
  //차감하면서 기존 요소의 앞쪽에 생성
  for(var i = slideCount -1; i>=0 ; i--){
      var cloneSlide = slides[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      slideContainer.prepend(cloneSlide);
  }

//슬라이드 너비
const newslidesCount = document.querySelectorAll('.slide').length;
console.log(newslidesCount);

slideContainer.style.width = `${slideWidth*newslidesCount +gap*newslidesCount-1}px`;

function showSlide(idx){
  for(let slide of slides){
    slide.classList.remove('active');
  }
  
  slideContainer.style.left = `${(slideWidth + gap) * -idx}px`;

  currentIdx = idx;

  if(currentIdx == slideCount || currentIdx == -slideCount){
    setTimeout(function(){
        slideContainer.classList.remove('animated');
        slideContainer.style.left = '0px';
        currentIdx = 0;
    },500);
    //다음 클릭시 transition이 작동하도록 다시 animated 클래스명 추가
    setTimeout(function(){
      slideContainer.classList.add('animated');
    },600);
  }  

}
showSlide(0);

function setSlide(){
  let ulMoveAmt = `${-(slideCount * slideWidth + gap*slideCount)}px`;

  slideContainer.style.transform = `translateX(${ulMoveAmt})`;
  slideContainer.classList.add('animated');
}
setSlide();


nextBtn.addEventListener('click',()=>{
  showSlide(currentIdx + 1);

})
prevBtn.addEventListener('click',()=>{
  showSlide(currentIdx -1);
})


/* NEW ITEM */

const tabMenu = document.querySelectorAll('.tab_menu a'); 
const tabContent = document.querySelectorAll('#tab_content > div'); 

tabMenu.forEach((item, index)=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();

    for(let m of tabMenu){
      m.classList.remove('active');
    }
    e.target.classList.add('active');

    for(let tc of tabContent){
      tc.classList.remove('active');
    }
    tabContent[index].classList.add('active');
  })
})