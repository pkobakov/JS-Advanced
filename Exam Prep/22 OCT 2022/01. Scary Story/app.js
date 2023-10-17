window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput= document.getElementById('last-name');
  const ageInput= document.getElementById('age');
  const storyTitleInput= document.getElementById('story-title');
  const genreInput= document.getElementById('genre');
  const storyDescriptionInput = document.getElementById('story');
  const publishBtn = document.getElementById('form-btn');

  const previewUlElement = document.getElementById('preview-list');

  const mainElement = document.getElementById('main');
  
  publishBtn.addEventListener('click', publish);



  function createPreviewElement(event){
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let storyTitle = storyTitleInput.value;
    //let genre = genreInput.value;
    let genre = genreInput.options[genreInput.selectedIndex].value;
    let story = storyDescriptionInput.value;

    if (!firstName || !lastName || !age || !storyTitle ) {
      return;
    }
    
    let articleEl = document.createElement('article');

    let listItemElement = document.createElement('li');
    listItemElement.className = 'story-info';

    
    let fullNameElement = document.createElement('h4');
    fullNameElement.textContent = `Name: ${firstName} ${lastName}`;
    
    let ageParagraphElement = document.createElement('p');
    ageParagraphElement.textContent = `Age: ${age}`;

    let titleParagraphElement = document.createElement('p');
    titleParagraphElement.textContent = `Title: ${storyTitle}`;

    let genreParagraphElement = document.createElement('p');
    genreParagraphElement.textContent = `Genre: ${genre}`;

    let storyParagraphElement = document.createElement('p');
    storyParagraphElement.textContent = story;

    let saveBth = document.createElement('button');
    saveBth.className = 'save-btn';
    saveBth.textContent = 'Save Story';
    saveBth.addEventListener('click', onSave)
    saveBth.disabled = false;

    let editBth = document.createElement('button');
    editBth.className = 'edit-btn';
    editBth.textContent = 'Edit Story';
    editBth.addEventListener('click', onEdit);
    editBth.disabled = false;


    let deleteBth = document.createElement('button');
    deleteBth.className = 'delete-btn';
    deleteBth.textContent = 'Delete Story';
    deleteBth.addEventListener('click', onDelete);
    deleteBth.disabled = false;

    articleEl.appendChild(fullNameElement);
    articleEl.appendChild(ageParagraphElement);
    articleEl.appendChild(titleParagraphElement);
    articleEl.appendChild(genreParagraphElement);
    articleEl.appendChild(storyParagraphElement);
    


    listItemElement.appendChild(articleEl);
    listItemElement.appendChild(saveBth);
    listItemElement.appendChild(editBth);
    listItemElement.appendChild(deleteBth);

    return listItemElement;
  }

  function publish(event){
    const previewListItemElement = createPreviewElement();
    previewUlElement.appendChild(previewListItemElement);
    clearInputFields();
    publishBtn.disabled = true;
    
  }

  function onEdit(event){

    let article = event.target.parentElement.children[0];
    let names = article.children[0].textContent.split(' ');
    let firstName = names[1];
    let lastName = names[2];

    let ageParagraph = article.children[1].textContent.split(' ');
    let age = ageParagraph[1];
    
    let titleParagraph = article.children[2].textContent.split(' ');
    titleParagraph.shift();
    let storyTitle = titleParagraph.join(' ');

    let genreParagraph = article.children[3].textContent.split(' ');
    let genre = genreParagraph[1];
    
    let storyParagraph = article.children[4].textContent;
    let story = storyParagraph;
    
    propagateValue(firstName, lastName, age, storyTitle, genre, story);
    onDelete(event);


  }

  function onSave(event){
    let headingElement = document.createElement('h1');
    headingElement.textContent = 'Your scary story is saved!';
    mainElement.replaceChildren(headingElement);
  }

  function onDelete(event){
      event.target.parentElement.remove();
      publishBtn.disabled = false;
  }

  
  
  function propagateValue(firstName, lastName, age, storyTitle, genre, story){
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    ageInput.value = age;
    storyTitleInput.value = storyTitle;
    genreInput.value = genre;
    storyDescriptionInput.value = story
  }

  function clearInputFields(){
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    genreInput.selectedIndex = 0;
    storyDescriptionInput.value = '';
  }

}
