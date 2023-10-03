function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = inputText;
    ul.appendChild(li);

    let a = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');

    a.appendChild(linkText);
    a.href = '#';
    a.addEventListener('click', deleteItem);

    li.appendChild(a);
    ul.appendChild(li);

    function deleteItem(){
        li.remove();
    }   
}