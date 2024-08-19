let inputField = document.querySelectorAll('.form-control')[0];
let Addbtn = document.querySelectorAll('#button-addon2')[0];
let AlltdoArray = [];
let edit_id = null;
let addBtnText = Addbtn.innerText;
function addInfo() {
        if (edit_id != null) {
            //edit
            AlltdoArray.splice(edit_id, 1, inputField.value);
            displayInfo();
            inputField.value = "";
            Addbtn.innerText = addBtnText;
            edit_id = null;
        }
        else {
            //insert new list
            let InputValue = inputField.value;
            AlltdoArray.push(InputValue);
            displayInfo();
            inputField.value = "";
            Addbtn.innerText = addBtnText;
        }
    }

    // let InputValue = inputField.value;
    // AlltdoArray.push(InputValue);
    // displayInfo();
    // inputField.value="";

//  function saveInfo(AlltdoArray){
//     let Str = JSON.stringify(AlltdoArray);
//     localStorage.setItem('name',Str);
//  }

let listField = document.querySelectorAll('.displayInput')[0];
function displayInfo() {
    listField.innerHTML = "";
    for (i = 0; i < AlltdoArray.length; i++) {

        listField.innerHTML += `<tr>
    <th scope="row">${i + 1}</th>
    <td scope="row" class="list">${AlltdoArray[i]}</td>
    <td> 
        <span><i class="fa-regular fa-pen-to-square editbtn" onclick="editInfo(${i})"></i></span> 
        <span><i class="fa-solid fa-trash deletebtn" onclick="deleteInfo(${i})"></i></span>
    </td>
    </tr>`;

    }
}

function deleteInfo(index) {
    AlltdoArray.splice(index, 1);
    displayInfo();
}

function editInfo(index) {
    edit_id = index;
    inputField.value = AlltdoArray[edit_id];
    Addbtn.innerText = "Update";
}