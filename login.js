const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup')

registerLink.addEvenListener('click', ()=>{
    wrapper.classList.add('active');
})
loginLink.addEvenListener('click', ()=>{
    wrapper.classList.remove('active');
})
btnPopup.addEvenListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})