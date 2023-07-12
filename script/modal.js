const imgs = document.querySelectorAll('.imgs > img');
const openImgs = document.querySelector('.open-imgs');
const hiddenImgs = document.querySelector('.hidden-imgs');
const image = document.querySelector('.open-imgs > img');
const modalTitle = document.querySelector('.modal-title');

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
