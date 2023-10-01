function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let res  = "";
  
  let textRefact = text.toLocaleLowerCase().split(' ');

  

if(convention === 'Camel Case'){

   res += textRefact.shift();
   textRefact.forEach(element => {
       res += element[0].toUpperCase() + element.substring(1)
   });
}
  else if (convention === 'Pascal Case') {
    
    textRefact.forEach(element => {
      res += element[0].toUpperCase() + element.substring(1)
  });

} else {
    res = 'Error!';
  }
  
  document.getElementById('result').textContent = res;
  
}

