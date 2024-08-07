const form = document.querySelector("form");
const input = document.querySelector(".title");
const textarea = document.querySelector("textarea");

function AddAnnouncement() {
    const newTitle = input.value
    const newDescription = textarea.value

    const divElem = document.createElement('div')
    divElem.classList.add('trial')

    const h1Elem = document.createElement('h1')
    h1Elem.classList.add('title')
   

   divElem.appendChild(h1Elem)
   console.log(divElem)
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(input == ''){
        throw new Error('The Title Section is Empty')
    }
    if(textarea == ''){
        throw new Error('The Description Section is Empty')
    }
  AddAnnouncement();
});
