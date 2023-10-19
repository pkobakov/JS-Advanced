window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const checkInInput = document.getElementById('date-in');
    const checkOutInput = document.getElementById('date-out');
    const numberOfGuestsInput = document.getElementById('people-count');

    const listInfoElement = document.querySelector('.info-list');
    const listConfirmationElement = document.querySelector('.confirm-list');
    const completeReservation = document.getElementById('complete-reservation')


    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', reservationInfo);
    
    function createReservationInfoElement(event){
       
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let checkInDate = checkInInput.value;
        let checkOutDate = checkOutInput.value;
        let numberOfGuests = numberOfGuestsInput.value;
        
        if (!firstName || !lastName || !checkInDate || !checkOutDate || !numberOfGuests) {
            return;
        }

        if (checkInDate > checkOutDate) {
            return;
        }

        let articleElement = document.createElement('article');
        let listItemElement = document.createElement('li');
        listItemElement.className = 'reservation-content';

        let fullNameElement = document.createElement('h3');
        fullNameElement.textContent = `Name: ${firstName} ${lastName}`;

        let checkInDatePatagraph = document.createElement('p');
        checkInDatePatagraph.textContent = `From date: ${checkInDate}`;

        let checkOutDateParagraph = document.createElement('p');
        checkOutDateParagraph.textContent = `To date: ${checkOutDate}`;

        let numberOfGuestsParagraph = document.createElement('p');
        numberOfGuestsParagraph.textContent = `For ${numberOfGuests} people`;

        let editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.disabled = false;
        editBtn.addEventListener('click', editInfo);

        let continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
        continueBtn.disabled = false;
        continueBtn.addEventListener('click', processReservation);

        articleElement.appendChild(fullNameElement);
        articleElement.appendChild(checkInDatePatagraph);
        articleElement.appendChild(checkOutDateParagraph);
        articleElement.appendChild(numberOfGuestsParagraph);

        listItemElement.appendChild(articleElement);
        listItemElement.appendChild(editBtn);
        listItemElement.appendChild(continueBtn);
        
        return listItemElement;

    }

    function reservationInfo(){
       let listItemElement = createReservationInfoElement();
       listInfoElement.appendChild(listItemElement);

       clearFields();
       nextBtn.disabled = true;
    }

    function editInfo(event){
        
        let article = event.target.parentElement.children[0];
        let names = article.children[0].textContent.split(' ');
        let firstName = names[1];
        let lastName = names[2];

        let checkInParagraph = article.children[1].textContent.split(' ');
        let checkInDate = checkInParagraph[2];

        let checkOutParagraph = article.children[2].textContent.split(' ');
        let checkOutDate = checkOutParagraph[2];

        let numberOfGuestsParagraph = article.children[3].textContent.split(' ');
        let numberOfGuests = numberOfGuestsParagraph[1];

        propagateToFormValue(firstName, lastName, checkInDate, checkOutDate, numberOfGuests);
        onDelete(event);

    }

   

    function processReservation(event){
        
        const reservationUlElement = event.target.parentElement.parentElement;
        const articleInfo = reservationUlElement.querySelector('article');
        
        let listElement = document.createElement('li');
        listElement.className = 'reservation-content';

        let article = document.createElement('article');
        article = articleInfo;

        let confirmBtn = document.createElement('button');
        confirmBtn.className = 'confirm-btn';
        confirmBtn.textContent = 'Confirm';

        let cancelBtn = document.createElement('button');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.textContent = 'Cancel';

        listElement.appendChild(article);
        listElement.appendChild(confirmBtn);
        listElement.appendChild(cancelBtn);

        listConfirmationElement.appendChild(listElement);

        cancelBtn.addEventListener('click', cancel);
        confirmBtn.addEventListener('click', aprove);        
        onDelete(event);
    }
    
    function aprove(event){
        onDelete(event);
        let cancelMessage = completeReservation.querySelector('#verification');
        cancelMessage.className = 'reservation-confirmed';
        cancelMessage.textContent = 'Confirmed.'

        completeReservation.appendChild(messageField)
    }

    function cancel(event){
        
        onDelete(event);
        let cancelMessage = completeReservation.querySelector('#verification');
        cancelMessage.className = 'reservation-cancelled';
        cancelMessage.textContent = 'Cancelled.'

        completeReservation.appendChild(messageField)
    }
    

    function propagateToFormValue(firstName, lastName, checkIn, checkOut, numberOfGuests){
        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        checkInInput.value = checkIn;
        checkOutInput.value = checkOut;
        numberOfGuestsInput.value = numberOfGuests;
    }

    function onDelete(event){
        event.target.parentElement.remove();
        nextBtn.disabled = false;
    }

    function clearFields(){
       firstNameInput.value = '';
       lastNameInput.value = '';
       checkInInput.value = '';
       checkOutInput.value = '';
       numberOfGuestsInput.value = '';
    }

}



    
    
