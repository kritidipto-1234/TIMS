import {fetchData} from './fetchdata.js';
import {updateLocalStorage} from './utility.js';

class User
{
    constructor(name,password,type="worker")
    {
        this.name=name;
        this.password=password;
        this.type=type;
    }
}

class Tool
{
    constructor(type,id)
    {
        this.type=type;
        this.id=id;
    }
}

class Transaction
{
    constructor(person,tool,type)
    {
        const d=new Date();
        this.date=`${d.getUTCDate()}/${d.getUTCMonth()+1}/${d.getFullYear()}`;
        this.person=person;
        this.tool=tool;
        this.type=type;
    }
}

let users=JSON.parse(window.localStorage.getItem('users'))||[];
let tools=JSON.parse(window.localStorage.getItem('tools'))||[];
let transactions=JSON.parse(window.localStorage.getItem('transactions'))||[];

if (users.length===0)//means its first time used
{
    fetchData();
    updateLocalStorage();
}

let currentUser=undefined;

function updateUser(newUser)
{
    currentUser=newUser;
}

function addUser(userName,userPassword,type="worker")
{
    users.push(new User(userName,userPassword,type));
    updateLocalStorage();
}

function removeTool(tool)
{
    const index=tools.findIndex(e=>e.type.toUpperCase()==tool.type.toUpperCase() && e.id==tool.id);
    tools.splice(index,1);
    updateLocalStorage();
}

function addTool(toolType,toolId)
{
    tools.push(new Tool(toolType,toolId));
    updateLocalStorage();
}

function addTransaction(user,tool,type)
{
    transactions.push(new Transaction(user,tool,type));
    updateLocalStorage();
}



export {users,tools,transactions,currentUser,updateUser,addUser,removeTool,addTool,addTransaction,User,Tool};
