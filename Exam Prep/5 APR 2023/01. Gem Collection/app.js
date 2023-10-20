window.addEventListener("load", solve);

function solve() {
 
    const gemstoneNameInput = document.getElementById('gem-name');
    const colorInput = document.getElementById('color');
    const caratsInput = document.getElementById('carats');
    const priceInput = document.getElementById('price');
    const typeInput = document.getElementById('type');

    const addGemBtn = document.getElementById('add-btn');
    addGemBtn.addEventListener('click', previewInfo);

    let previewListInfo = document.getElementById('preview-list');
    let collectionInfo = document.getElementById('collection');

    function previewInfo(){
       let gemInfoPreview = createListElement();
       previewListInfo.appendChild(gemInfoPreview);
       clearInputForm();
       addGemBtn.disabled = true;

    }

    function createListElement(){
  
       let gemName = gemstoneNameInput.value;
       let color = colorInput.value;
       let carats = caratsInput.value;
       let price = priceInput.value;
       let type = typeInput.value;

       if (!gemName || !color || !carats || !price || !type) {
        return;
       }

       let article = document.createElement('article');

       let listEl = document.createElement('li');
       listEl.className = ('gem-info');
       
       let nameH = document.createElement('h4');
       nameH.textContent = gemName;

       let colorP = document.createElement('p');
       colorP.textContent = `Color: ${color}`;

       let caratsP = document.createElement('p');
       caratsP.textContent = `Carats: ${carats}`;

       let priceP = document.createElement('p');
       priceP.textContent = `Price: ${price}$`;

       let typeP = document.createElement('p');
       typeP.textContent = `Type: ${type}`;

       let saveBtn = document.createElement('button');
       saveBtn.className = 'save-btn';
       saveBtn.textContent = 'Save to Collection';
       saveBtn.addEventListener('click', saveToCollection)

       let editBtn = document.createElement('button');
       editBtn.className = 'edit-btn';
       editBtn.textContent = 'Edit Information';
       editBtn.addEventListener('click', editInfo);

       let cancelBtn = document.createElement('button');
       cancelBtn.className = 'cancel-btn';
       cancelBtn.textContent = 'Cancel';
       cancelBtn.addEventListener('click', cancelInfo);;

       article.appendChild(nameH);
       article.appendChild(colorP);
       article.appendChild(caratsP);
       article.appendChild(priceP);
       article.appendChild(typeP);

       listEl.appendChild(article);
       listEl.appendChild(saveBtn);
       listEl.appendChild(editBtn);
       listEl.appendChild(cancelBtn);

       return listEl;
    }

    function saveToCollection(event){

       debugger
        const collectionElement = event.target.parentElement.parentElement;
        const articleEl = collectionElement.querySelector('article');

        let listEl = document.createElement('li');
        
        let collectionP = document.createElement('p');
        collectionP.className = 'collection-item';

        let name = articleEl.children[0].textContent;
        
        
        let colorP = articleEl.children[1].textContent.split(' ');
        let color = colorP[1];

        let caratsP = articleEl.children[2].textContent.split(' ');
        let carats = caratsP[1];

        let priceP = articleEl.children[3].textContent.split(' '); 
        let price = priceP[1].substring(0, priceP[1].length-1);

        let typeP = articleEl.children[4].textContent.split(' ');
        let type = typeP[1]; 

        collectionP.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;

        listEl.appendChild(collectionP);
        collectionInfo.appendChild(listEl);

        deleteSection(event);
        

    }

    function editInfo(event){
        
        let article = event.target.parentElement.children[0];

        let gemName = article.children[0].textContent;
        
        let colorP = article.children[1].textContent.split(' ');
        let color = colorP[1];

        let caratsP = article.children[2].textContent.split(' ');
        let carats = caratsP[1];

        let priceP = article.children[3].textContent.split(' ');
        let price = priceP[1].substring(0, priceP[1].length-1);

        let typeP = article.children[4].textContent.split(' ');
        let type = typeP[1];

        propagateInputs(gemName, color, carats, price, type);
        deleteSection(event);
    }

    function cancelInfo(event){
        deleteSection(event)
    }

    function propagateInputs(gemName, color, carats, price, type){
        gemstoneNameInput.value = gemName;
        colorInput.value = color;
        caratsInput.value = carats;
        priceInput.value = price;
        typeInput.value = type;
    }

    function clearInputForm(){
        gemstoneNameInput.value = '';
        colorInput.value = '';
        caratsInput.value = '';
        priceInput.value = '';
        typeInput.value = '';
    }

    function deleteSection(event){
        event.target.parentElement.remove();
        addGemBtn.disabled = false;
    }

}


    




