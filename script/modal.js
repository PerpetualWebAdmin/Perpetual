const imgs = document.querySelectorAll('.imgs > img');
const openImgs = document.querySelector('.open-imgs');
const hiddenImgs = document.querySelector('.hidden-imgs');
const image = document.querySelector('.open-imgs > img');
const modalTitle = document.querySelector('.modal-title');
const closeModal = document.querySelector('.closetag');

imgs.forEach(e =>{
    e.addEventListener('click', n =>{
        openImgs.classList.toggle('active');
        image.src = n.target.src;

        console.log(n.target.src);

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

//Buttons

const carouselButtons = document.querySelectorAll('.carousel');
carouselButtons.forEach(n =>{
    n.addEventListener('click', () =>{
        
    })
})