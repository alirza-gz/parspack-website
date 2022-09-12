const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".navbar-right");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

// Plan button change text
const btn1 = document.querySelector(".plan__btn.btn-one");
const btn2 = document.querySelector(".plan__btn.btn-two");
const btn3 = document.querySelector(".plan__btn.btn-three");
const btn4 = document.querySelector(".plan__btn.btn-four");

const plan = document.querySelectorAll(".plan");

btn1.addEventListener("click", (e) => {
    btn1.textContent = 'انتخاب شده';
    plan[0].style.boxShadow = '0 10px 20px 0 rgb(40 143 217 / 40%)';
    plan[0].style.border = '1px solid #288ed9';
});
btn2.addEventListener("click", (e) => {
    btn2.textContent = 'انتخاب شده';
    plan[1].style.boxShadow = '0 10px 20px 0 rgb(40 143 217 / 40%)';
    plan[1].style.border = '1px solid #288ed9';
});
btn3.addEventListener("click", (e) => {
    btn3.textContent = 'انتخاب شده';
    plan[2].style.boxShadow = '0 10px 20px 0 rgb(40 143 217 / 40%)';
    plan[2].style.border = '1px solid #288ed9';
});
btn4.addEventListener("click", (e) => {
    btn4.textContent = 'انتخاب شده';
    plan[3].style.boxShadow = '0 10px 20px 0 rgb(40 143 217 / 40%)';
    plan[3].style.border = '1px solid #288ed9';
});

// ACCORDION
const questionItems = document.querySelectorAll(".question__item");

questionItems.forEach((item) => {
    item.addEventListener("click" , function() {
        this.classList.toggle("accordion__expanded");
    });
});

// MOBILE MENU
const mobileMenu = document.querySelector(".mobile-menu-wrap");
toggler.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("show-wrap");
});

// CHILD MENU
const itemParent = document.querySelectorAll(".item-parent");
const childMenu = document.querySelectorAll(".child-menu")
itemParent.forEach((item) => {
    item.addEventListener("click", function() {
        this.classList.toggle("is-open");
    });
});


// SHOW & HIDE BTN SCROLL TO TOP 
window.onscroll = function () { isScrollTop() }
function isScrollTop() {
  const btnScrollTop = document.querySelector('.scroll-top')
  const navFixed = document.querySelector(".main-header")
  if (document.documentElement.scrollTop > 2000) {
    btnScrollTop.style.display = 'flex';
  } else {
    btnScrollTop.style.display = 'none';
  }

  if (document.documentElement.scrollTop > 1) {
    navFixed.style.position = 'fixed';
  } else {
    navFixed.style.position = 'static';
  }
}