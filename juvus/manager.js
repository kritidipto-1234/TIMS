const welcomeDisplay=document.querySelector('.managerName');
const inventoryTools=document.querySelector('.inventoryTools');

import {tools,currentUser} from './data.js';

function displayManagerPage()
{
    welcomeDisplay.innerHTML=`Welcome , ${currentUser.name} <br> <div class="post">Manager</div>`;
    let markup='';
    tools.forEach((e,i)=>markup+=`<div class="tools"> <span>${i+1}</span> <span>${e.id}</span> <span>${e.type}</span></div>`);
    inventoryTools.innerHTML=markup;
}

export {displayManagerPage};