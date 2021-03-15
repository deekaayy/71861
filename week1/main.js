const body = document.body;
const list = document.querySelector('#my-list')

function addItem() {
    const input = document.querySelector('#usr-input');

    
    //check if the user has given a valid input

    const li = document.createElement('li') // create a list item to store the variables
    li.setAttribute('class', 'targets');
    li.innerText = input.value;
    list.appendChild(li);

    const button = document.createElement('button');

    button.onclick = function() {deleteItem(button.parentNode);}
    button.setAttribute('class', 'buttons');
    button.innerText = "delete";
    li.appendChild(button);

    input.value = "";
}

function deleteItem(el){
    el.remove();
}