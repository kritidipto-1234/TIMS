const loginBtn=document.querySelector('.loginBtn')
const nameInput=document.querySelector('.name');
const passwordInput=document.querySelector('.password');
const message=document.querySelector('.messageLogin');

import {users,updateUser, currentUser} from './data.js';
import { displayComponent } from './utility.js';
import {displayManagerPage} from './manager.js';
import {displayWorkerPage} from './worker.js';
import {displayUnitHeadPage} from './unitHead.js';



loginBtn.addEventListener('click',function()
{
    let result=users.find((e)=>e.name===nameInput.value && e.password==passwordInput.value);
    if (result)
    {
        updateUser(result);
        if (result.type==='manager')
            {displayComponent('manager',result);displayManagerPage();}
        else if (result.type==='unitHead')
            {displayComponent('unitHead',result);displayUnitHeadPage();}
        else if (result.type==='worker')
            {displayComponent('worker',result);displayWorkerPage();}
    }   
    else
    {
        message.innerHTML='Sorry no such user. Please enter correctly or register.';
        message.style.opacity=1;
        setTimeout(()=>message.style.opacity=0,1000);
    } 
    nameInput.value='';
    passwordInput.value='';
});

