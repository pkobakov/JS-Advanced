function solve() {

  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const[incomeTextArea, resultTextArea] = document.querySelectorAll('textarea');
  const tableBody = document.querySelector('tbody');

  generateBtn.addEventListener('click', generateFurnitureList);

  buyBtn.addEventListener('click', buyFurniture);


  function generateFurnitureList(event){
     if (!incomeTextArea.value) {
        return;
     }

     let value = JSON.parse(incomeTextArea.value);

     for (const el of value) {
         
        let domElements = createTableElement(el);
        tableBody.appendChild(domElements);
      }
     
  }

  function createTableElement (data){
   
    let tableRow = document.createElement('tr');
    tableRow.innerHTML = "<td>" +
      `<img src= ${data.img}>` +
    "</td>" +
    "<td>" +
        `<p>${data.name}</p>` +
    "</td>" +
    "<td>" +
        `<p>${data.price}</p>` +
    "</td>" +
    "<td>" +
        `<p>${data.decFactor}</p>` +
    "</td>" +
    "<td>" +
      "<input type='checkbox'/>" +
    "</td>";

    return tableRow;

  }

  function buyFurniture(event){
    let names = [];
    let totalPrice = 0;
    let avgDecFac = 0;
    
    let selectCheckbox = Array.from(document.querySelectorAll('input[type= checkbox]')).filter(el => el.checked);
    
    selectCheckbox.forEach(el => {
       let [imgTd, nameTd, priceTd, decFactorTd, markTd] = Array.from(el.parentElement.parentElement.children);
       names.push(nameTd.children[0].textContent);
       totalPrice += Number(priceTd.children[0].textContent); 
       avgDecFac += Number(decFactorTd.children[0].textContent)/selectCheckbox.length;

    });
    
    let res = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFac}`;
    console.log(res);
    resultTextArea.value = res;
  }
}