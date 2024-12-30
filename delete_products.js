fetch("http://localhost:8080/product")
.then(data=>data.json())
.then(data=>{
    console.log(data);
    data["_embedded"]["products"].forEach((product)=>{
        // console.log(product);
        const a=document.createElement("a");
        a.textContent=product["productName"];
        document.body.appendChild(a);
        //setAttribute is js method which will help you
        console.log(product["_links"]["self"]["href"]);
        a.setAttribute("href",product["_links"]["self"]["href"]);

    }) 
})