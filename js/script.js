const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const checkbox = document.getElementById("dark-mode-checkbox");

  if (prefersDarkScheme.matches) {
    document.getElementById("dark-mode-checkbox").checked = true;
    document.body.classList.add('dark-theme');
  } else {
    document.getElementById("dark-mode-checkbox").checked = false;
    document.body.classList.remove('dark-theme');
  }
  checkbox.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
  })

  document.addEventListener("DOMContentLoaded", function() {
    let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,
  
      collapse: true
  });
  })


  document
  .querySelector(".header__burger_btn")
  .addEventListener("click", function () {

    document.body.classList.toggle("stop-scroll");
    document.querySelector(".nav__menu").classList.toggle("nav--active");
    document.querySelector(".header__burger_btn").classList.toggle("active");
  });

document.querySelectorAll(".header-link").forEach(function(elem){
  elem.addEventListener("click", function () {
    document.body.classList.remove("stop-scroll");
    document.querySelector(".nav__menu").classList.remove("nav--active");
    document.querySelector(".header__burger_btn").classList.remove("active");
  });
})

tippy('#binding_i', {
  content: 'Обложка + пружина + картон',
});
tippy('#wide_print_i', {
  content: 'Cтоимость Ч/Б и цветной печати одинакова',
});



