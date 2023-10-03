function validate() {
    const emailInputElement = document.getElementById('email');
    let regexPattern = new RegExp('[a-z]+@[a-z]+.[a-z]+');
    

    emailInputElement.addEventListener('change', (e) => {

        if (regexPattern.test(emailInputElement.value)){
            emailInputElement.className = '';
        } else{
            emailInputElement.className = 'error';
        }
    })
}