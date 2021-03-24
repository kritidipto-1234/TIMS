const components=document.querySelector('.component');
const registerBtn=document.querySelector('.register');
const logoutBtn=document.querySelectorAll('.logoutBtn');

import {currentUser, updateUser} from './data.js';
import {} from './login.js';
import {} from './register.js';
import {displayComponent} from './utility.js';
import {} from './fetchdata.js';
import {} from './manager.js';
import {} from './unitHead.js';
import {} from './worker.js';


function init()
{
    [...logoutBtn].forEach(e=>e.addEventListener('click',function(){
        updateUser(undefined);
        displayComponent('login');
    }))
}
init();
