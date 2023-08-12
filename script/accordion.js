const faqS = document.querySelectorAll('.faqs');
const containerMain = document.querySelectorAll('.container-main');


faqS.forEach(n => {
    let header = n.querySelector('.faq-header');
    header.addEventListener('click', ()=>{
        header.classList.toggle('active');

        console.log(header);
    })
});