//  JAI BHOOLENATH PLEASE HAARNE MT DENA


const usrInput = document.querySelector('input');
const addBtn= document.querySelector('button');
let deleteItem = document.querySelector('ion-icon');


const AddItems =()=>{
    let newItem = document.createElement('li');
    newItem.innerHTML=usrInput.value;
    let ionicon = document.createElement('ion-icon');
    ionicon.name="trash-outline";
    newItem.append(ionicon);
    const ul= document.querySelector('ul');
    ul.append(newItem);
    usrInput.value='';

    ionicon.addEventListener('click',()=>{
    ionicon.parentElement.remove();
    });
}

const removeItem=()=>{
 deleteItem = document.querySelector('ion-icon');
// const li = deleteItem.parentElement;
deleteItem.parentElement.remove();
}


addBtn.addEventListener('click',AddItems);
deleteItem.addEventListener('click',removeItem);
