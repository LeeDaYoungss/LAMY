//document.addEventListener('DOMContentLoaded',()=>{

  const btt = document.querySelector('#go-top');
  //btt.classList.add('active');

  window.addEventListener('scroll',()=>{
    // let scrollAmt = window.pageYOffset;
    let scrollAmt = window.scrollY;

    if(scrollAmt > 300){
      btt.classList.add('active');
    }else{
      btt.classList.remove('active');
    }
  });

  btt.addEventListener('click',(e)=>{
    e.preventDefault();
    //window.scrollTo(0,0); 
    window.scrollTo({
      letf:0,
      top:0,
      behavior:'smooth'
    }); 
  });

  /*
  window.scrollTo(0,100); //가로, 세로축
  scrollTo(0,0) 스크롤을 생성
  scrollBy(0,20); 스크롤 생성,
  */



//})
