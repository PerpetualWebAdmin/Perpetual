const scrollProgressBar = document.querySelector('#progress-bar');

function scrollProgress(){
    const totalheight = document.body.scrollHeight;
    const currentDistance = document.documentElement.scrollTop;

    const windowHeight = document.documentElement.clientHeight;

    const scrolledPerecent = (currentDistance/ 
    (totalheight - windowHeight))*100;
    scrollProgressBar.style.width = Math.round(scrolledPerecent) + '%';
}


document.addEventListener('scroll', scrollProgress);