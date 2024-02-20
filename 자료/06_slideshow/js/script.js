// 변수 지정
let sliderWrapper = document.querySelector('.slide-wrapper'),
    slideContainer = sliderWrapper.querySelector('.slide-container'),
    slides = slideContainer.querySelectorAll('li'),
    slideCount = slides.length,
    currentIdx = 0,
    timer,    
    pager = sliderWrapper.querySelector('.pager'),
    
    pagerHTML ='',
    prevBtn = sliderWrapper.querySelector('#prev'),
    nextBtn = sliderWrapper.querySelector('#next');


// 슬라이드가 있으면 가로로 배열하기, 페이저 생성하기
/*
for(let i = 0;i<slideCount;i++){
  slides[i].style.left = `${i*100}%`;
}
*/
// forEach
slides.forEach((item, i)=>{
  item.style.left = `${i*100}%`;
  pagerHTML = pagerHTML + `<a href="">${i+1}</a>`;
});

/*
  A.innerHTML = B; //A에 b를 TAG로 생성
  let C = A.innerHTML  // A안의 TAG를 변수 C 할당
*/
pager.innerHTML = pagerHTML;

let pagerBtn = pager.querySelectorAll('a');

// 슬라이드 이동 함수(이동, 페이저 업데이트, 슬라이드 활성화)

function goToSlide(idx){
  slideContainer.style.left = `${idx*-100}%`;
  currentIdx = idx;

  if(currentIdx === slideCount - 1){
    nextBtn.classList.add('disabled');
  } else{
    nextBtn.classList.remove('disabled');
  }
  //슬라이드가 처음이라면 이전 버튼이 사라진다, 처음이 아니라면 다시 나타난다.
  if(currentIdx === 0){
    prevBtn.classList.add('disabled');
  } else{
    prevBtn.classList.remove('disabled');
  } 
  //pager 업데이트
  // 모든 pagerBtn에서 active를 제거하고
  /*
  for(let 각아이템변수명 of 대상){
    각아이템변수명...
  }
  */
  for(let pb of pagerBtn){
    pb.classList.remove('active');
  }
  pagerBtn[currentIdx].classList.add('active');

  for(let slide of slides){
    slide.classList.remove('active');
  }
  slides[currentIdx].classList.add('active');

  
}
goToSlide(0);

// 좌우 버튼 클릭으로 슬라이드 이동시키기
//다음 버튼을 클릭하면 할일
//대상.addEventListener('이벤트 종류', 할일);
//할일 -> 함수 -> function(){..} -> ()=>{...}

nextBtn.addEventListener('click', ()=>{
  goToSlide(currentIdx+1);
});
prevBtn.addEventListener('click', ()=>{
  goToSlide(currentIdx-1);
});



// 페이저로 슬라이드 이동하기
pagerBtn.forEach((item,idx)=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    goToSlide(idx);
  });
});

// 자동 슬라이드 
function autoSlide(){
  timer = setInterval(()=>{
    let nextIdx = (currentIdx + 1)% slideCount;
    goToSlide(nextIdx);
  }, 4000);
  //clearInterva(이름);
}

sliderWrapper.addEventListener('mouseenter',()=>{
  clearInterval(timer);
});
sliderWrapper.addEventListener('mouseleave',()=>{
  autoSlide();
});

autoSlide();