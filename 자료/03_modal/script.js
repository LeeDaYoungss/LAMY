const imgs = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('#lightbox-overlay');
const lightboxImage = document.querySelector('#lightbox-image');

for(let img of imgs){
  img.addEventListener('click',(ev)=>{
    ev.preventDefault();
    // let bigImg = img.getAttribute('data-lightbox');
    let bigImg = ev.target.getAttribute('data-lightbox');
    console.log(bigImg);
    lightboxImage.setAttribute('src', bigImg);
    lightbox.classList.add('visible');
  });
}

lightbox.addEventListener('click',()=>{
  lightbox.classList.remove('visible');
});