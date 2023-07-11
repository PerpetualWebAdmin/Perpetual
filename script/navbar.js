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

  document.querySelectorAll(".nav-link").forEach(n => {
    if(n.classList.contains('noHide'))
      return;
    n.addEventListener("click", () => {
    navham.classList.remove("active");
    navlist.classList.remove("active");
  })

  })

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

  document.querySelectorAll('.progsub *').forEach(n => {
    n.removeAttribute('style')
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


  const nonBasicEd = document.querySelectorAll('.progsub > ul > li:not(.noHide)')
  const basicEd = document.querySelector('.progsub .noHide')
  const basicEdArrow = basicEd.querySelector(':scope i')
  const progsubGrid = document.querySelector('.progsub > ul')
  const basicEd_sub = document.querySelector('.progsub-bsed')

  basicEd.addEventListener('click' , e => {
    if(!mediaWidth.matches) return;
    basicEdArrow.style.transform = 'rotate(180deg)'
    nonBasicEd.forEach(n => {
      n.style.display = (n.style.display == 'none')? null:'none'
    })

    progsubGrid.style.gridTemplateColumns = (progsubGrid.style.gridTemplateColumns == '')?'1fr':null;

    basicEd_sub.style.display = (basicEd_sub.style.display == '')? 'block':'';

    basicEd.style.width = (basicEd.style.width == '')? '100%': '';

    
  })

