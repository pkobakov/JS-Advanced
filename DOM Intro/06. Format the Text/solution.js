function solve() {
  let text = document.getElementById('input').value.split('.');
  let sentences = text.filter(s => s !== '')
  let output = document.getElementById('output');

  while(sentences.length > 0){
      let paragraphText = sentences.splice(0,3).join('. ') + '.';

      let p = document.createElement('p');
      p.textContent = paragraphText;
      output.appendChild(p);
  }
}