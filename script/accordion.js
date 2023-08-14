let faq = document.querySelectorAll('.faqs .container-main');

faq.forEach((accordion) =>{

    //new, pushing p
    let x = accordion.querySelector('::scope .faq-body > p);
    let isActive = false;
    accordion.onclick = () =>{

        isActive = isActive? false:true;
        x.style.display = (isActive) ? 'none':'block';
        faq.forEach((content) =>{
            content.classList.remove('active');
        })
        if(!isActive){
        accordion.classList.add('active');
        }
    };
  
});
