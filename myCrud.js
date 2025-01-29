let form=document.querySelector("form");
console.log(form);
let id=document.getElementById("id");
let name=document.getElementById("name");
let role=document.getElementById("role");
let dtable=document.getElementById("dispTable");
var add1=document.getElementById("add")
console.log(id);
console.log(name);
console.log(role);

function dis(){
    add1.style.display="none"
}
function ena(){
    add1.style.display="block"
}

form.addEventListener("click",(e)=>{
    // it is used to stop the reload
    e.preventDefault();
    // target is used to target element
    if(e.target.innerText=="Add"){
        //it should not accept blank so lets write some code
        if(id.value!=""&& name.value!="" && role.value!=""){
            // console.log(id.value);
            // console.log(name.value);
            // console.log(role.value);
            
            dtable.innerHTML+=`<tr>
                                    <td>${id.value}</td>
                                    <td>${name.value}</td>
                                    <td>${role.value}</td>
                                    <td><button id=editbutton>Edit</button></td>
                                    <td><button id=deletebutton>Delete</button></td>
                                </tr>`
            
            // let ed=document.getElementById("editbutton")
            // ed.style.fontSize="x-large"
            // ed.style.backgroundColor="blue"
            // ed.style.height="auto"
            // ed.style.width="100%"
            
            // let de=document.getElementById("deletebutton")
            // de.style.fontSize="x-large"
            // de.style.backgroundColor="Red"
            // de.style.height="auto"
            // de.style.width="100%"
            id.value=""
            name.value=""
            role.value=""

        }
    }
    // code for edit option
    else if(e.target.innerText=="Edit"){
       
        id.value=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
        name.value=e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
        role.value=e.target.parentElement.previousElementSibling.innerText;

        
        e.target.innerText="Update"
        // to disable add button
        // dis();
        let add12=add1.classList.toggle("block")
if(add12){
    add1.style.display="none"
}
else{
    add1.style.display="block"
}

       
        
    }
    // to update values in 
    else if(e.target.innerText=="Update"){
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText=id.value;
        e.target.parentElement.previousElementSibling.previousElementSibling.innerText=name.value;
        e.target.parentElement.previousElementSibling.innerText=role.value;

        e.target.innerText="Edit"
        // enables the add button
        // ena();
        let add12=add1.classList.toggle("block")
        if(add12){
            add1.style.display="none"
        }
        else{
            add1.style.display="block"
        }
        id.value=""
        name.value=""
        role.value=""

    }

    //to delete
    else if(e.target.innerText=="Delete"){
        e.target.parentElement.parentElement.remove();
    }


})

