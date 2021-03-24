import {users,tools,transactions} from './data.js';

function displayComponent(component,user)
{
    [...document.body.children].forEach(e=> {
        if (!e.classList.contains(component))
            e.style.display='none';
        else
            e.style.display='block';
    });
}

function updateLocalStorage()
{
    localStorage.setItem('users',JSON.stringify(users));
    localStorage.setItem('tools',JSON.stringify(tools));
    localStorage.setItem('transactions',JSON.stringify(transactions));
}

export {displayComponent,updateLocalStorage};