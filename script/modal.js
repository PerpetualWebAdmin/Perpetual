const imgs = document.querySelectorAll('.imgs > img');
const openImgs = document.querySelector('.open-imgs');
const hiddenImgs = document.querySelector('.hidden-imgs');
const image = document.querySelector('.open-imgs > img');
const modalTitle = document.querySelector('.modal-title');
const closeModal = document.querySelector('.closetag');



imgs.forEach((e,index) =>{

    e.addEventListener('click', n =>{
        currentIndex = index
        openImgs.classList.toggle('active');
        image.src = n.target.src;

        if(n.target.alt == ''){
            modalTitle.innerHTML = 'Facilities'
        }else{
            modalTitle.innerHTML = n.target.alt;
        }
    })
})


hiddenImgs.addEventListener('click', () =>{
    openImgs.classList.remove('active');
})
closeModal.addEventListener('click', () =>{
    openImgs.classList.remove('active');
})



window.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        openImgs.classList.remove('active');
    }
} )
//Buttons
let currentIndex = -1;
const carouselButtons = document.querySelectorAll('.carousel');
carouselButtons.forEach(n =>{
    let x = 0;
    if (n.classList.contains('prev')) {
        x = -1
    } else { x = 1}

    n.addEventListener('click', () =>{
        
        try {
            image.src = imgs[currentIndex + x].src;
    
            if(imgs[currentIndex + x].alt == ''){
                modalTitle.innerHTML = 'Facilities'
            }else{
                modalTitle.innerHTML = imgs[currentIndex + x].alt;
            }
            currentIndex += x;
        } catch (error) {
            console.log(error);
        }

    })
})