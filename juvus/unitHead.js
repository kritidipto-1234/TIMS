const welcomeMessage=document.querySelector('.unitHeadName');
const itemUsage=document.querySelector('.itemUsage');
const allUsers=document.querySelector('.allUsers');

import {currentUser,users,transactions} from './data.js';

function displayUnitHeadPage()
{
    welcomeMessage.innerHTML=`Welcome , ${currentUser.name} <br> <div class="post">Unit Head</div>`;
    itemUsage.innerHTML=transactions.reduce((acc,c)=>acc+`<div class="parameters"> <div>${c.person.name}</div> <div>${c.type}</div> <div>${c.tool.type}</div> <div>${c.date}</div> </div>`,'');
    allUsers.innerHTML=users.reduce((acc,c)=>acc+`<div class="parameters"> <div>${c.name}</div> <div>${c.type}</div> </div>`,'');
}



export {displayUnitHeadPage};