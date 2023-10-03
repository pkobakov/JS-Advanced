function addItem() {
    let ul = document.getElementById('items');
    let newItemValue = document.getElementById('newItemText').value;
    let li = document.createElement('li');

    li.textContent = newItemValue;
    ul.appendChild(li);
    newItemValue = '';
}