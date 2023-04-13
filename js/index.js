const carousel = document.querySelector('.carousel');
const btns = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.card');

const scroll = cards[0].clientWidth + 20;
let scrollDif = carousel.scrollWidth - carousel.clientWidth;
let position = carousel.scrollLeft;
console.log(position)


function scrollCarousel(){

    showBtn(position);

    btns.forEach(function(btn){
        btn.addEventListener('click',moveCarousel);

    })

}

scrollCarousel();

function moveCarousel(e){
    
    let move = this.classList.contains('btn-prev') ? -scroll : scroll;

    position = carousel.scrollLeft+= move;

    position < 0 && ( position = 0);

    position > scrollDif && (position = scrollDif)

    showBtn(position,scrollDif);
}

function showBtn(position,scrollDif){
    btns[0].style.display = position === 0 ? 'none' : 'block';
    btns[1].style.display = position === scrollDif ? 'none' : 'block';
}   
