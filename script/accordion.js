let faq = document.querySelectorAll('.faqs .container-main');

faq.forEach((accordion) =>{
    accordion.onclick = () =>{
        faq.forEach((content) =>{
            content.classList.remove('active');
        })
        accordion.classList.add('active');
    }
  
})
