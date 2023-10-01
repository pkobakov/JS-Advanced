function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');
    
    btn.textContent = btn.textContent === 'More' ? 'Less' : 'More';
    
    if(text.style.display === ''){
       text.style.display = 'none'; 
    } 

    text.style.display = text.style.display === 'none' ? 'block' : 'none'; 

    
}