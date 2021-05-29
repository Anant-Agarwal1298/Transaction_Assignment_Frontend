console.log("this is my js file");
function load(){
    console.log("Window loaded ...");
    fetch("https://dev.onebanc.ai/assignment.asmx?op=GetTransactionHistory")
    .then(result => result.json())
    .then(json => show(json.data))
}

function show(transactions){
        let table= document.getElementById('table');
        for(let i=0 ; i<transactions.length; i++){
                let obj = transactions[0];
                console.log(obj);
                let row= document.createElement('tr');
                let id= document.createElement('td');
                let startdate= document.createElement('td');
                let enddate= document.createElement('td');
                let amount= document.createElement('td');
                let direction= document.createElement('td');
                let type= document.createElement('td');
                let status= document.createElement('td');
                let description= document.createElement('td');
                id.innerHTML=obj.id;
                startdate.innerHTML=obj.startdate;
                 enddate.innerHTML=obj.enddate;
                 amount.innerHTML=obj.amount;
                 direction.innerHTML=obj.direction;
                 type.innerHTML=obj.type;
                 status.innerHTML=obj.status;
                 description.innerHTML=obj.description;
                row.appendChild(id);
                row.appendChild(startdate);
                row.appendChild(enddate);
                row.appendChild(amount);
                row.appendChild(direction);
                row.appendChild(type);
                row.appendChild(status);
                row.appendChild(description);
                table.appendChild(row);
        }
}
window.onload = load;