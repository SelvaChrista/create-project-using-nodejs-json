const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
if(req.method==="GET"){
 fs.readFile("index.html", (err, data) =>{

    if(err) throw err;
    res.end(data);
 })
}

if(req.url="/adduser" && req.method==="POST"){
    var body ="";

    req.on("data", (chunks)=>{
        body += chunks.toString();
    })


    req.on("end", ()=>{
        const keyValuepairs = body.split("&")
        const formData = {};
        keyValuepairs.forEach((pair) =>{
            const[keyName, keyValue] = pair.split("=");
            formData[keyName] = decodeURIComponent(keyValue);
        });

        res.write(body);
        console.log(formData);
    })
  res.end();
}
});

server.listen(8080);