const welcomeDisplay=document.querySelector('.workerName');
const issueBtn=document.querySelector('.issueBtn');
const returnBtn=document.querySelector('.returnBtn');
const issueTool=document.querySelector('.issueTool');
const returnType=document.querySelector('.returnType');
const returnId=document.querySelector('.returnID');
const toolMessage=document.querySelector('.toolMessage');

import {Tool,currentUser,removeTool,addTool,addTransaction,tools} from './data.js';


issueBtn.addEventListener('click',function()
{
    let result=tools.find((e)=>e.type.toUpperCase()==issueTool.value.toUpperCase());
    if (result)
    {
        toolMessage.innerHTML=`Tool successfully issued. Tool Type:${result.type} Tool ID:${result.id}.`;
        removeTool(result);
        addTransaction(currentUser,result,"Issue");
    }
    else
    {
        toolMessage.innerHTML=`No ${issueTool.value} available.`;
    }
    toolMessage.style.opacity=1;
    setTimeout(()=>toolMessage.style.opacity=0,3000);
    issueTool.value='';
});

returnBtn.addEventListener('click',function()
{
    if (returnId.value==='' || returnType.value==='')
        return;
    addTool(returnType.value,returnId.value);
    addTransaction(currentUser,new Tool(returnType.value,returnId.value),"Return");
    returnType.value='';
    returnId.value='';
    toolMessage.innerHTML='Tool successfully returned';
    toolMessage.style.opacity=1;
    setTimeout(()=>toolMessage.style.opacity=0,3000);
});


function displayWorkerPage()
{
    welcomeDisplay.innerHTML=`Welcome , ${currentUser.name} <br> <div class="post">Worker</div>`;

}

export {displayWorkerPage};
