fetch("http://localhost:8080/restaurants")
.then(data=>data.json())
.then(data=>{
    console.log(data["_embedded"]["restaurants"]);
    data["_embedded"]["restaurants"].forEach((users)=>{
       // console.log(users)
       const a=document.createElement("a")
       a.textContent=users["name"];
       document.body.appendChild(a);

       console.log(users["_links"]["self"]["href"])
       a.setAttribute("href",users["_links"]["self"]["href"])

       a.addEventListener("click",(event)=>{
            event.preventDefault();
            fetch(users["_links"]["self"]["href"],{method:"DELETE"})
            .then(data=>data.json())
            .then(data=>console.log("deleted successfullt"+data))
       })


    })
  
})