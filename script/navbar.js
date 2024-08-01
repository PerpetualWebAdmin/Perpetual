//Navigation Bar
const navlist = document.querySelector(".navlist");
const navitem = document.querySelectorAll(".nav-item");

navlist.querySelectorAll(":scope > .nav-item").forEach((item, index) => {
  item.setAttribute("data-index", index);
  item.setAttribute("data-hover", "false");
});

navlist.addEventListener("mouseover", (e) => {
  try {
    navlist.querySelectorAll(":scope > .nav-item").forEach((item) => {
      item.setAttribute("data-hover", "false");
    });
    e.target.closest(".nav-item").setAttribute("data-hover", "true");
  } catch (error) {}

  refresh();
});

navlist.addEventListener("mouseleave", (e) => {
  navlist.querySelectorAll(":scope > .nav-item").forEach((item) => {
    item.setAttribute("data-hover", "false");
  });

  refresh();
});

navlist.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.tagName != "LABEL") return;
  let target_index = e.target.closest(".nav-item").getAttribute("data-index");
  target_index =
    target_index == navlist.getAttribute("data-active-index")
      ? ""
      : target_index;
  navlist.setAttribute("data-active-index", target_index);

  refresh();
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-item")) {
    navlist.setAttribute("data-active-index", "");
    navsub.setAttribute("data-active", "false");
  }
  refresh();
});

const navsub = document.querySelector(".nav-sub-item");
navsub.addEventListener("mouseover", (e) => {
  try {
    navsub.setAttribute("data-hover", "true");
  } catch (error) {}
});
navsub.addEventListener("mouseleave", (e) => {
  try {
    navsub.setAttribute("data-hover", "false");
  } catch (error) {
    console.log(error);
  }
});

navsub.addEventListener("click", (e) => {
  let active = navsub.getAttribute("data-active");
  active = active == "true" ? "false" : "true";
  navsub.setAttribute("data-active", active);
});

//Navham
const navham = document.querySelector(".navham");
const navlink = document.querySelectorAll(".nav-link");

navham.addEventListener("click", () => {
  navham.classList.toggle("active");
  navlist.classList.toggle("active");
});

navlink.forEach((link) => {
  link.addEventListener("click", () => {
    navlist.classList.remove("active");
    navham.classList.remove("active");
  });
});

//Refresh
const refresh = () => {
  let active_index = navlist.getAttribute("data-active-index");
  navlist.querySelectorAll(".nav-item").forEach((item) => {
    if (!item.querySelector(":scope > .progsub")) return;
    if (item.getAttribute("data-index") == active_index) {
      item.setAttribute("data-active", "true");
      item.setAttribute("data-toggle", "on");
    } else {
      item.setAttribute("data-active", "false");
      item.setAttribute("data-toggle", "off");
    }
    if (active_index == "" && item.getAttribute("data-hover") == "true") {
      item.setAttribute("data-active", "true");
    }
  });
};
