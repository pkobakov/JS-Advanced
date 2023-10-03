function focused() {
    let inputs = document.getElementsByTagName('input');

    for (const input of inputs) {
        input.addEventListener('focus', (event)  => {
            event.target.parentElement.classList.add('focused')
        });
        input.addEventListener('blur', (event) => {
            event.target.parentElement.classList.remove('focused')
        });
    }
}