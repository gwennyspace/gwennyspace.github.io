/* Basic JS: nav toggle, active link highlight, fake contact submit */
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if(toggle){
    toggle.addEventListener('click', ()=> {
      navLinks.classList.toggle('open');
    });
  }

  // highlight active link based on current URL
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(a=>{
    if(window.location.pathname.endsWith(a.getAttribute('href')) || window.location.pathname.endsWith(a.getAttribute('href').replace('./',''))){
      a.classList.add('active');
    }
  });
});

// fake submit for demo
function fakeSubmit(e){
  e.preventDefault();
  alert("Thanks bestie! This is a demo form — set up a form backend to receive messages.");
  document.getElementById('contactForm').reset();
}
