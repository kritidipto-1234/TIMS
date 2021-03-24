const registerBtn=document.querySelector('.registerBtn');
const nameInput=document.querySelector('.name');
const passwordInput=document.querySelector('.password');
const message=document.querySelector('.messageLogin');

import {addUser,users} from './data.js';

registerBtn.addEventListener('click',function()
{
    if (nameInput.value==='' || passwordInput.value==='')
        return;
    if (users.find(e=>e.name==nameInput.value && e.password==passwordInput.value))
    {
        message.innerHTML='Choose a different password or name';
    }
    else 
    {
        addUser(nameInput.value,passwordInput.value);
        message.innerHTML='You are successfully registered.Remember your details';
    }
    nameInput.value='';
    passwordInput.value='';
    message.style.opacity=1;
    setTimeout(()=>message.style.opacity=0,1000);
});