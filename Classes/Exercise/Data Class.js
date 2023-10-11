class Request {

    // method (String)
    // uri (String)
    // version (String)
    // message (String)
    // response (String)
    // fulfilled (Boolean)
    constructor(method, uri, version, message){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;    
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);
