let button=document.querySelector(".new-emp-btn");
let pop=document.querySelector(".pop-page");
let popCross=document.querySelector(".cross");
let submitbtn=document.querySelector(".submit-btn");
let form=document.querySelector(".emp-form");
let table=document.querySelector("tbody");

let EmpObj={};

button.addEventListener("click", createAccountButton);
popCross.addEventListener("click", clickCross);
form.addEventListener("submit",  clickSubmit);

function createAccountButton(e) {
    pop.classList.remove("hide-pop");
}

function clickCross(e) {
    pop.classList.add("hide-pop");
}

//TABLE DETAILS:

function clickSubmit(e) {
     e.preventDefault();
    const sl=getId();
    const empDetails= {
        fullname: form.fullname.value,
        gender: form.gender.value,
        mail: form.mail.value,
        dob: form.dob.value,
        roll: form.roll.value 
    }

    EmpObj[sl]=empDetails;

   form.reset();
   pop.classList.add("hide-pop");
   
   tableEdit(empDetails,sl);
}

var count=1;
function getId() {
return count++;
}

function tableEdit(eD,sl) {
    let tr=document.createElement("tr");
    tr.id=sl;

    let td1=document.createElement("td");
    td1.innerText=sl;
    let td2=document.createElement("td");
    td2.innerText=eD.fullname;
    let td3=document.createElement("td");
    td3.innerText=eD.gender;
    let td4=document.createElement("td");
    td4.innerText=eD.mail;
    let td5=document.createElement("td");
    td5.innerText=eD.dob;
    let td6=document.createElement("td");
    td6.innerText=eD.roll;

    let td7=document.createElement("td");
      let e=document.createElement("button");
      e.className='material-symbols-outlined';
      e.className=e.className+" " + 'edit'+sl;
      e.innerText='Edit';
     
      let d=document.createElement("button");
      d.className='material-symbols-outlined';
      d.className=d.className+" " + 'delt'+sl;
      d.innerText='Delete';
    
      td7.append(e,d);
    tr.append(td1,td2,td3,td4,td5,td6,td7);
    table.appendChild(tr);

let dlt=document.querySelector(".delt"+sl);
let edi=document.querySelector(".edit"+sl);

    editButton(edi);

    deleteButton(dlt);
}


//EDIT INFO

let editpop=document.querySelector(".edit-pop-page");
let prefilledForm=document.querySelector(".prefilled-form");

function editButton(edi) {

edi.addEventListener("click", (e)=> {
    editpop.classList.remove("hide-pop");
   
    let editbtn=e.target;   //<button class="material-symbols-outlined edit1">Edit</button>
    let tableRow= editbtn.parentNode.parentNode;
    let i= editbtn.parentNode.parentNode.id;

        prefilledForm.fullname.value=EmpObj[i].fullname;
        prefilledForm.gender.value=EmpObj[i].gender;
        prefilledForm.mail.value=EmpObj[i].mail;
        prefilledForm.dob.value=EmpObj[i].dob;
        prefilledForm.roll.value=EmpObj[i].roll;

        displayBlanks(tableRow);

})
}

function displayBlanks(row) {
    console.log(row);
    let cells=row.getElementsByTagName("td");

    console.log(prefilledForm);
    nname=prefilledForm.fullname.value;
    const newValues= {
        newname: nname,
        //newgender: prefilledForm.gender.value,
        //newmail: prefilledForm.mail.value,
        //newdob: prefilledForm.dob.value,
        //newroll: prefilledForm.roll.value
    }
    editSubmit(row,newValues);
}

function editSubmit(row,newValues) {

prefilledForm.addEventListener("submit",  (e)=> {
    e.preventDefault();
    let cells=row.getElementsByTagName("td")
    console.log(cells[1], newValues);
    cells[1].innerText=newValues.newname;
    cells[2].innerText=newValues.newgender;
    cells[3].innerText=newValues.newmail;
    cells[4].innerText=newValues.newdob;
    cells[5].innerText=newValues.newroll;
    console.log(cells[1]);
    editpop.classList.add("hide-pop");

})
}


//DELETE INFO

function deleteButton(dlt) {
// console.log(dlt);
dlt.addEventListener("click", (e) => {
    //console.log(e);
     let deleteBtn = e.target;
     //console.log("Delete");
    // console.log(deleteBtn);
    deleteBtn.parentNode.parentNode.remove();
    
})
}



/*
function displayBlanks(row) {
    console.log(row);
    let cells=row.getElementsByTagName("td")
    let name=cells[1].innerText;
    let gender=cells[2].innerText;
    let mail=cells[3].innerText;
    let dob=cells[4].innerText;
    let roll=cells[5].innerText;
    console.log(name, gender, mail, dob, roll);

    const newValues= {
         newname: cells[1].innerText,
         gender: cells[2].innerText,
         mail: cells[3].innerText,
         dob: cells[4].innerText,
         roll: cells[5].innerText,
    }
    console.log(newValues);
    popFilled(newValues,cells)
}

function popFilled(newValues,cells) {
    console.log(newValues,cells[1]);
}
*/