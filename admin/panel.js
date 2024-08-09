const form = document.querySelector("form");
const input = document.querySelector(".title");
const textarea = document.querySelector("textarea");
const trials = document.querySelector(".trials");

function AddAnnouncement() {
  const newTitle = input.value;
  const newDescription = textarea.value;


  //Child Component
  const divElem = document.createElement("div");
  divElem.classList.add("trial");

  const h1Elem = document.createElement("h1");
  h1Elem.classList.add("titles");
  h1Elem.innerText = newTitle;

  const paragraph = document.createElement("p");
  paragraph.classList.add("descrip");
  paragraph.innerText = newDescription;

  divElem.appendChild(h1Elem);
  divElem.appendChild(paragraph);

  //Parent Component
  trials.appendChild(divElem);

}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input === "") {
    throw new Error("The Title Section is Empty");
  }
  if (textarea == "") {
    throw new Error("The Description Section is Empty");
  }
  AddAnnouncement();
});
