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
        //setAttribute is a method usko attribute ka name dena hai
        a.setAttribute("href",product["_links"]["self"]["href"]);

        a.addEventListener("click",(event)=>{

            event.preventDefault();
            fetch(product["_links"]["self"]["href"],{method:"DELETE"})
            .then(data=>data.json())
            .then(data=>console.log("deleted successfully"+data));
        })

    }) 
})