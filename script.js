
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
if(menuBtn && nav){
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const message=document.querySelector('#form-message');
    message.textContent='Thank you! Your enquiry has been received. We will get back to you shortly.';
    message.style.color='#26734d';
    form.reset();
  });
}
