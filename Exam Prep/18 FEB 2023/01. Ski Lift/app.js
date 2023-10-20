window.addEventListener('load', solve);

function solve() {
   const firstNameInput = document.getElementById('first-name');
   const lastNameInput = document.getElementById('last-name');
   const numberOfPeopleInput = document.getElementById('people-count');
   const fromDateInput = document.getElementById('from-date');
   const daysInput = document.getElementById('days-count');

   const nextStepBtn = document.getElementById('next-btn');
   nextStepBtn.addEventListener('click', ticketPreview);

   const ticketInfoList = document.querySelector('.ticket-info-list');
   const confirmTicketList = document.querySelector('.confirm-ticket');
   const bodyElement = document.querySelector('#body');



   function createTicketElement(event){
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let fromDate = fromDateInput.value;
    let forDays = daysInput.value;
    let numberOfPeople = numberOfPeopleInput.value;

    if (!firstName || !lastName || !fromDate || !forDays || ! numberOfPeople) {
        return ;
    }

    let articleElement = document.createElement('article');
    let listItemElement = document.createElement('li');
    listItemElement.className = 'ticket';

    let fullNameElement = document.createElement('h3');
    fullNameElement.textContent = `Name: ${firstName} ${lastName}`;

    let fromDateParagraph = document.createElement('p');
    fromDateParagraph.textContent = `From date: ${fromDate}`;

    let forDaysParagraph = document.createElement('p');
    forDaysParagraph.textContent = `For ${forDays} days`;

    let forPeopleParagraph = document.createElement('p');
    forPeopleParagraph.textContent = `For ${numberOfPeople} people`;

    let editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.disabled = false;
    editBtn.addEventListener('click', editInfo);

    let continueBtn = document.createElement('button');
    continueBtn.className = 'continue-btn';
    continueBtn.textContent = 'Continue';
    continueBtn.disabled = false;
    continueBtn.addEventListener('click', continueInfo);

    articleElement.appendChild(fullNameElement);
    articleElement.appendChild(fromDateParagraph);
    articleElement.appendChild(forDaysParagraph);
    articleElement.appendChild(forPeopleParagraph);

    listItemElement.appendChild(articleElement);
    listItemElement.appendChild(editBtn);
    listItemElement.appendChild(continueBtn);

    return listItemElement;
   }

   function ticketPreview(event){

    let listItemElement = createTicketElement();
    ticketInfoList.appendChild(listItemElement);
    clearForm();
    nextStepBtn.disabled = true;
   }

   function editInfo(event){
    
     let article = event.target.parentElement.children[0];
     let names = article.children[0].textContent.split(' ');
     let firstName = names[1];
     let lastName = names[2];

     let fromDate = article.children[1].textContent.split(' ');
     let date = fromDate[2];

     let forDays = article.children[2].textContent.split(' ');
     let days = forDays[1];

     let forPeople = article.children[3].textContent.split(' ');
     let people = forPeople[1];

     propagateInfo(firstName, lastName, date, days, people);
     onDelete(event);
     

   }

   function continueInfo(event){
     const confirmationElement = event.target.parentElement.parentElement;
     const articleInfo = confirmationElement.querySelector('article');

     let listElement = document.createElement('li');
     listElement.className = 'ticket-content';

     let article = document.createElement('article');
     article = articleInfo;

     let confirmBtn = document.createElement('button');
     confirmBtn.className = 'confirm-btn';
     confirmBtn.textContent = 'Confirm';
     confirmBtn.addEventListener('click', confirmTicket);

     let cancelBtn = document.createElement('button');
     cancelBtn.className = 'cancel-btn';
     cancelBtn.textContent = 'cancel';
     cancelBtn.addEventListener('click', cancelTicket);

     listElement.appendChild(article);
     listElement.appendChild(cancelBtn);
     listElement.appendChild(confirmBtn);

     confirmTicketList.appendChild(listElement);
     
     onDelete(event);
   }

   function confirmTicket(event){
     
     let divElement = bodyElement.children[0];
     divElement.innerHTML = `<h1 id="thank-you">Thank you, have a nice day!</h1>
                              <button id="back-btn">Back<button/>`

     let backBtn = divElement.querySelector('#back-btn');
     backBtn.addEventListener('click', reload);

     function reload(event){
        divElement.innerHTML = `<section id="welcome">
        <h1>Ski Lift</h1>
        <div class="home-container">
            <div class="info">
                <h1>
                <span>&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;</span> 
                    Buy tickets
                <span>&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;</span>
                 </h1>
            </div>
        </div>
    </section>

    <div id="wrapper">

        <section id="append-ticket">
            <div class="first-container"> 
                             
                <h1>Buy ticket</h1>
                
                <div class="container-text">
                    <form action="">
                        <label for="first-name">First name:</label>
                        <input type="text" id="first-name" name="first-name">

                        <label for="last-name">Last name:</label>
                        <input type="text" id="last-name" name="last-name">                     

                            <label for="people-count">Number of people:</label>
                            <input type="number" id="people-count" name="people-count" >

                            <label for="from-date">From Date:</label>
                            <input type="date" id="from-date" name="from-date">

                            <label for="people-count">Days:</label>
                            <input type="number" id="days-count" name="days-count" >
                            
                        <button id="next-btn" type="submit">Next step &#x21e8;</button>
                    </form>
                    

                </div>
            </div>
        </section>

        <section id="info-ticket">
            <div class="ticket-info-container">
                <div class="first-container"> 
                <h1>Ticket Preview</h1>
                <ul class="ticket-info-list">
                </ul>
            </div>
            </div>
        </section>

        <section id="confirm-ticket-section">
            <div class="confirm-container">
                <div class="first-container"> 
                <h1>Confirm ticket</h1>
                <ul class="confirm-ticket">
                </ul>
            </div>
            </div>
        </section>
   </div>`;
     }
     
   }

   function cancelTicket(event){
       onDelete(event)

   }

   function clearForm(event){
    firstNameInput.value = '';
    lastNameInput.value = '';
    numberOfPeopleInput.value = '';
    fromDateInput.value = '';
    daysInput.value = '';
   }

   function propagateInfo(firstName, lastName, date, days, people){
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    fromDateInput.value = date;
    daysInput.value = days;
    numberOfPeopleInput.value = people;
   }

   function onDelete(event){
    event.target.parentElement.remove();
    nextStepBtn.disabled = false;
   }


}



    
    
