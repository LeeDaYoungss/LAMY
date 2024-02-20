const mainMenu = document.querySelectorAll('.menu > li');
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