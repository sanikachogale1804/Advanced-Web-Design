fetch("http://localhost:8080/product")
.then(data=>data.json())
.then(data=>{
    console.log(data);
    document.write(`<p>${data["page"]["size"]}</p>`)
    data["_embedded"]["products"].forEach(product=>{
        // $ means value of
        document.write(`<h1>${product["productName"]}</h1>`)
        document.write(`<p>${product["_links"]["self"]["href"]}</p>`)
        document.write(``)
    
    });

})