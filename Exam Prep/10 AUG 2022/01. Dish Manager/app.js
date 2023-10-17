window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('genderSelect'); 
  const descriptionInput = document.getElementById('task');
  const submitBtn = document.getElementById('form-btn');
  const inProgressEl = document.getElementById('in-progress');
  const finishedEl = document.getElementById('finished');
  const progressCountEl = document.getElementById('progress-count');
  const clearButton = document.getElementById('clear-btn');

  let counter = 0;

  submitBtn.addEventListener('click', addDish);
  clearButton.addEventListener('click', clearAll);

  function clearAll(){
    finishedEl.innerHTML= '';
  }

  function createInProgressEl(){

// ** check if all info from the form comes correctly:

    // console.log(firstName.value);
    // console.log(lastName.value);
    // console.log(age.value);
    // console.log(gender.value);
    // console.log(description.value);

    // ** create new html block for the 'in progress' window
    
    // 1. create every element of the block

  

    const liElement = document.createElement('li');
    liElement.className = 'each-line';

    const articleElement = document.createElement('article');
    const fullNameElement = document.createElement('h4');
    const genderAge = document.createElement('p');
    const dishDescription = document.createElement('p');

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editDish);

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Mark as complete';
    completeBtn.addEventListener('click', completeDish);

    const{
      firstNameText,
      lastNameText,
      ageText,
      genderText,
      dishDescriptionText

    } = getElementText();

    // transfer data from form to article elements

    fullNameElement.textContent = `${firstNameText} ${lastNameText}`;
    genderAge.textContent = `${genderText}, ${ageText}`;
    dishDescription.textContent = `Dish description: ${dishDescriptionText}`;


    // 2. append the elements to the parent
    
    articleElement.appendChild(fullNameElement);
    articleElement.appendChild(genderAge);
    articleElement.appendChild(dishDescription);
    articleElement.appendChild(editBtn);
    articleElement.appendChild(completeBtn);

    liElement.appendChild(articleElement);

    return liElement;


  }
  
  function editDish(event){
    // get the parent element of the article for edit;
    
    const editedDishElement = event.target.parentNode.parentNode;
    
    //create list Element for the editing 
    const headingText = editedDishElement.querySelector('h4');
    const fullNameText = headingText.textContent.split(' ');
    const firstNameText = fullNameText[0];
    const lastNameText = fullNameText[1];
    
    firstNameInput.value = firstNameText;
    lastNameInput.value = lastNameText;
    
    const genderAndAgeParagraph = editedDishElement.querySelector('p');
    const genderAndAgeText = genderAndAgeParagraph.textContent.split(', ');
    const genderText = genderAndAgeText[0];
    const ageText = genderAndAgeText[1];
    
    genderInput.value = genderText;
    ageInput.value = ageText;
    
    const dishDescriptionParagraph = editedDishElement.querySelectorAll('p')[1];
    const dishDescriptionText = dishDescriptionParagraph.textContent.split(': ')[1];
    descriptionInput.value = dishDescriptionText;
    
    removeItemFromProgress(editedDishElement);
    decrementCounter();
    
  }
  
  function removeItemFromProgress(item){ 
    inProgressEl.removeChild(item);   
  }
  
  function completeDish(event){
    // get the article element from the inProgress 
    const editedDishElement = event.target.parentNode.parentNode;
    // Clone the original inProgress article and remove the buttons from it
    const cloneDishEl = editedDishElement.cloneNode(true);
    const articleClone = cloneDishEl.querySelector('article');
    const editBtn = articleClone.querySelector('.edit-btn');
    const completeBtn = articleClone.querySelector('.complete-btn');

    articleClone.removeChild(editBtn);
    articleClone.removeChild(completeBtn);
    // Add the modified article to complete and remove the original from the inProgress 
    
    finishedEl.appendChild(cloneDishEl);
    decrementCounter();
    removeItemFromProgress(editedDishElement);
  }
  
  function addDish(event){
    
    const liItemElement = createInProgressEl();
    inProgressEl.appendChild(liItemElement);
    incrementCounter();
    clearInputFields();
    
  }
  
  function clearInputFields(){
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    genderInput.value = '' ;
    descriptionInput.value = ''; 
  }

  function getElementText(){
     if (firstNameInput.value.length > 0 &&
         lastNameInput.value.length &&
         ageInput.value &&
         genderInput.value.length &&
         descriptionInput.value.length > 0) {
      return {
        firstNameText: firstNameInput.value,
        lastNameText: lastNameInput.value,
        ageText: ageInput.value,
        genderText: genderInput.value,
        dishDescriptionText: descriptionInput.value
      };
    }
  }

  function incrementCounter(){
      counter++;
      progressCountEl.textContent = counter;
  }

  function decrementCounter(){
    counter--;
    progressCountEl.textContent = counter;
  }

}
