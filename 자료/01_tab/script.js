const tabMenu = document.querySelectorAll('.tab-menu a'); 
const tabContent = document.querySelectorAll('#tab-content > div'); 
/*
for(let menu of tabMenu){
  menu.addEventListener('click', e =>{
    console.log(e);
    e.preventDefault(); 
    //let target = this.getAttribute('href'); //#tabs-2
    let target = e.target.getAttribute('href'); //#tabs-2
    console.log(target);
  
    for(let tc of tabContent){
      tc.style.display = 'none';
    }
    document.querySelector(target).style.display = 'block';
  });
}
tabContent[0].style.display = 'block';
*/
/*
대상.classList.add('클래스명')  //클래스명 추가
대상.classList.remove('클래스명')  //클래스명 제거
*/
/*
tabMenu를 클릭하면 모든 tabcontent가 보이지 않도록 

for(let tm of tabMenu){
  tm.addEventListener('click',(e)=>{
    e.preventDefault();

    for(let m of tabMenu){
      m.classList.remove('active');
    }
    e.target.classList.add('active');

    let target = e.target.getAttribute('href');

    for(let tc of tabContent){
      tc.classList.remove('active');
    }
    document.querySelector(target).classList.add('active');
})
}
*/

//tabContent[2].classList.add('active');


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