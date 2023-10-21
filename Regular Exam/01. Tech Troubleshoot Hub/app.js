window.addEventListener('load', solution);

function solution() {
  const employeeInput = document.getElementById('employee');
  const categoryInput = document.getElementById('category'); 
  const urgencyInput= document.getElementById('urgency');
  const assignetTeamInput= document.getElementById('team');
  const descriptionInput= document.getElementById('description');

  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', previewInfo); 

  const previewSection = document.querySelector('.preview-list');
  const pendingSection = document.querySelector('.pending-list');
  const resolvedSection = document.querySelector('.resolved-list');

  function previewInfo(event){
    let listItem = createListItem();
    previewSection.appendChild(listItem);
    clearInputFields();
    addBtn.disabled = true;
  }

  function editInfo(event){
    debugger
    let article = event.target.parentElement.children[0];

    let employeeEl = article.children[0].textContent.split(' ');
    employeeEl.shift();
    let employee = employeeEl.join(' ');
    
    let categoryEl = article.children[1].textContent.split(' ');
    let category = categoryEl[1];

    let urgencyEl= article.children[2].textContent.split(' ');
    let urgency = urgencyEl[1];

    let teamEl= article.children[3].textContent.split(': ');
    let team = teamEl[1];

    let descEl= article.children[4].textContent.split(' ');
    let desc = descEl[1];

   
    propagateValues(employee, category, urgency, team, desc);
    addBtn.disabled = false;
    deleteSection(event);

  }

  function pendingInfo(event){
      
      const previewSectionElement = event.target.parentElement.parentElement;
      const articleInfo = previewSectionElement.querySelector('article');

      let listItem = document.createElement('li');
      listItem.className = 'problem-content';

      let article = document.createElement('article');
      article = articleInfo;

      let resolveBtn = document.createElement('button');
      resolveBtn.className = 'resolve-btn';
      resolveBtn.addEventListener('click', resolvedInfo);
      resolveBtn.textContent = 'Resolved';

      listItem.appendChild(article);
      listItem.appendChild(resolveBtn);

      pendingSection.appendChild(listItem);
      deleteSection(event);
   }

  function resolvedInfo(event){
        const pendingSectionElement = event.target.parentElement.parentElement;
        const articleInfo = pendingSectionElement.querySelector('article');

      let listItem = document.createElement('li');
      listItem.className = 'problem-content';

      let article = document.createElement('article');
      article = articleInfo;

      let clearBtn = document.createElement('button');
      clearBtn.className = 'clear-btn';
      clearBtn.addEventListener('click', clearAll);
      clearBtn.textContent = 'Clear';

      listItem.appendChild(article);
      listItem.appendChild(clearBtn);

      resolvedSection.appendChild(listItem);
      deleteSection(event);
  }

  function createListItem(){
    // const employeeInput = document.getElementById('employee');
    // const categoryInput = document.getElementById('category'); 
    // const urgencyInput= document.getElementById('urgency');
    // const assignetTeamInput= document.getElementById('team');
    // const descriptionInput= document.getElementById('description');

    let employee = employeeInput.value;
    let category = categoryInput.value;
    let urgency = urgencyInput.value;
    let team = assignetTeamInput.value;
    let description = descriptionInput.value;

    if (!employee || !category || !urgency || !team || !description) {
      return;
    }

    let article = document.createElement('article');
    let listItem = document.createElement('li');
    listItem.className = 'problem-content';

    let employeeP = document.createElement('p');
    employeeP.textContent = `From: ${employee}`;

    let categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${category}`;

    let urgencyP = document.createElement('p');
    urgencyP.textContent = `Urgency: ${urgency}`;

    let teamP = document.createElement('p');
    teamP.textContent = `Assigned to: ${team}`;

    let descriptionP = document.createElement('p');
    descriptionP.textContent = `Description: ${description}`;

    let editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.disabled = false;
    editBtn.addEventListener('click', editInfo);

    let continueBtn = document.createElement('button');
    continueBtn.className = 'continue-btn';
    continueBtn.textContent = 'Continue';
    continueBtn.disabled = false;
    continueBtn.addEventListener('click', pendingInfo);

    article.appendChild(employeeP);
    article.appendChild(categoryP);
    article.appendChild(urgencyP);
    article.appendChild(teamP);
    article.appendChild(descriptionP);

    listItem.appendChild(article);
    listItem.appendChild(editBtn);
    listItem.appendChild(continueBtn);

    return listItem;

  }

  function deleteSection(event){
    
    event.target.parentElement.remove();
    
  }

  function clearInputFields(){
    employeeInput.value = '';
    categoryInput.value = '';
    urgencyInput.value = '';
    assignetTeamInput.value = '';
    descriptionInput.value = '';
  }

  function propagateValues(employee, category, urgency, team, desc){
    employeeInput.value = employee;
    categoryInput.value = category;
    urgencyInput.value = urgency;
    assignetTeamInput.value = team;
    descriptionInput.value = desc;
  }

  function clearAll(event){
   deleteSection(event);
  }
   

}


    
    
