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