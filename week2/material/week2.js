let httpRequest = "httpRequest" ; 
let httpResponse = "httpResponse"; 

let content = `
In its simple form - when your browser needs a file from a web server, 
it asks for it using HTTP. The request goes to the web server computer. 
The web server's software (HTTP server) receives the request, 
finds the file, and sends it back to the browser 
with a message indicating success (200 response). If the file is not found, 
it sends a "not found" message (404 response) instead.` ;


let prosxies = [
    {name:'forward proxies'}
     , 
     {name:'reverse proxies'}]

console.log(httpRequest, httpResponse)
