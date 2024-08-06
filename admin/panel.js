const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const div = document.createElement('div')
    div.classList.add('trial')
    console.log(div)
   
    const p = document.createElement('p')
    p.classList.add('trys')
    p.textContent = "Shit"

    const appends = div.appendChild(p)
});
