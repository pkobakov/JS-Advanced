function validator(object){
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT']; 
    const uriExp = /^[\w.]+$/g;
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    const specialChars = [`<`, `>`, `\\`, `&`, `'`, `"` ];



   if (!methods.includes(object.method)) {
      throw new Error("Invalid request header: Invalid Method");
   }

   if (!object.uri || object.uri !== '*' && !object.uri.match(uriExp) ) {
    throw new Error("Invalid request header: Invalid URI");
   }

   if(!versions.includes(object.version)){
    throw new Error("Invalid request header: Invalid Version");
   }

   if (!object.hasOwnProperty('message')) {
    throw new Error("Invalid request header: Invalid Message");
   } 

   
   for (const el of object.message) {
       if (specialChars.includes(el)) {
        throw new Error("Invalid request header: Invalid Message");
       }
   }

   return object;
}

console.log(validator({
  method: 'POST',
  uri: 'home.bash',
  message: 'rm -rf /*'
  }
  ))



