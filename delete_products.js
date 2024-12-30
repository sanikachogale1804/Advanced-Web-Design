fetch("http://localhost:8080/product")
.then(data=>data.json())
.then(data=>{
    console.log(data);
    data["_embedded"]["products"].forEach((product)=>{
        console.log(product);
        const a=document.createElement("a");
        a.textContent=product("prodcutName");
        document.body.appendChild(a);

    }) 
})