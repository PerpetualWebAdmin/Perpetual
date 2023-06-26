//Navigation Bar
const navham = document.querySelector(".navham");
const navlist = document.querySelector(".navlist");
const navItems = document.querySelectorAll('.nav-item')
const checkboxes = document.querySelectorAll('.nav-item input')

navham.addEventListener("click", () => {
    navham.classList.toggle("active");
    navlist.classList.toggle("active");

    checkboxes.forEach(n => {
      n.checked = false
    })

    navItems.forEach(n => {
      n.classList.remove('inactive')
    })
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navham.classList.remove("active");
    navlist.classList.remove("active");
  }))

//SubMenus
console.log('start of submenu');

let focusedMenu;
let mediaWidth = window.matchMedia("(max-width: 1365px)")

addEventListener("resize", (event) => {
  navItems.forEach(n => {
    n.classList.remove('inactive')
  })

  checkboxes.forEach(n => {
    n.checked = false
  })
})

checkboxes.forEach(n => n.addEventListener('change', (event) => {

  checkboxes.forEach(n => {
    if(n !== event.target) {
      n.checked = false
    }
  })

  if(!mediaWidth.matches) return // guard statement

  if (event.currentTarget.checked) {
    // element not to hide
    focusedMenu = event.currentTarget.parentElement;
    // hide all
    navItems.forEach(n => {
      if(focusedMenu !== n)
      n.classList.add('inactive')
    })
  } else {
    // show all
    navItems.forEach(n => {
      n.classList.remove('inactive')
    })
  }

}))

