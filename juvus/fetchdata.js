//we are not actually fetching data just pretending like there is a backend

import {users,tools,User,Tool} from './data.js';

function fetchData()//pretending to fetch data from data base
{
    users.push(new User('Nitish Anand',1111,'manager'));
    users.push(new User('Debraj Som',2222,'unitHead'));
    users.push(new User('Ayush Raj',3333));
    users.push(new User('Indronil Roy',4444));

    tools.push(new Tool('Screw Driver','A15'));
    tools.push(new Tool('Pipe','B16'));
    tools.push(new Tool('Plus','C17'));
    tools.push(new Tool('Plus','C17'));
}

export {fetchData};
