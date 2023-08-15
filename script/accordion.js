let faq = document.querySelectorAll('.faqs .container-main');

console.log('accordion script start');

faq.forEach((accordion) =>{
    
    // new, pushing p
    let x = accordion.querySelector(':scope .faq-body > p');
    accordion.isActive = false;

    accordion.onclick = () =>{

        console.log('before: ', accordion.isActive);

        faq.forEach((content) =>{

            content.classList.remove('active');

            if(accordion === content) {
                console.log('same obj');
                return;
            }
            content.isActive = false;
            
        })
        
        console.log(accordion.isActive);
        console.log('flip',accordion.isActive? false:true);

        accordion.isActive = accordion.isActive? false:true;


        console.log('after: ',accordion.isActive); 

        if(accordion.isActive){
            accordion.classList.add('active');
        }
    };
  
});