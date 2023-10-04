function encodeAndDecodeMessages() {

     
    let buttons = document.querySelectorAll('button');
    let encodeButton = buttons[0];
    let decodeButton = buttons[1];

    let textAreas = document.querySelectorAll('textarea');
    let encodeTextArea = textAreas[0];
    let decodeTextArea = textAreas[1];
    
    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode(){
        let currentText = encodeTextArea.value;
        let codeMsg = '';

        for (const ch of currentText) {
            let code = ch.charCodeAt();
            code ++;
            codeMsg += String.fromCharCode(code);
        }

        decodeTextArea.value = codeMsg;
        encodeTextArea.value = '';
    }

    function decode(){
       let currentText = decodeTextArea.value;
       let decodeMsg  = '';

       for (const ch of currentText) {
        let code = ch.charCodeAt();
        code --; 
        decodeMsg += String.fromCharCode(code);
       }

       decodeTextArea.value = decodeMsg;
    }
    
}

