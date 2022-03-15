//loading screen


//mobile hamburger btn
const hmBtn = document.querySelector('#hmBtn');
const navMb = document.querySelector('nav.mb');
hmBtn.addEventListener('click', ()=>{
    navMb.classList.toggle('active');
})


//gallery

if(  document.querySelector('#galleryContainer') !== null){

    const galleryContainer = document.querySelector('#galleryContainer');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let count = 0;

    const itemSize = galleryItems[0].clientWidth;
    const nextBtn = document.getElementById('rightBtn');
    const prevBtn = document.getElementById('leftBtn');

    nextBtn.addEventListener('click', () => {
        if(count >= (galleryItems.length - 5 )) return;
        count++;
        galleryContainer.style.transform = "translate(" + (-itemSize * count) + "px, -50%)";
    })
    prevBtn.addEventListener('click', () => {
        if(count <= 0) return;
        count--;
        galleryContainer.style.transform = "translate(" + (-itemSize * count) + "px, -50%)";
    })
}

//to make img square
if( document.querySelector('.card img') !== null){

    const imgWidth = document.querySelector('.card img').clientWidth;
    const imgArray = document.querySelectorAll('.card img');

    const imgSquareFunc = () => {
        for( i=0; i < imgArray.length; i++){
            imgArray[i].style.height = imgWidth + 'px';
        }
    }
    
    if(window.innerWidth < 1120){
        imgSquareFunc();
    }
    
    window.addEventListener('resize', ()=>{
        if(window.innerWidth < 1120){
            imgSquareFunc();
        }
    });
}
