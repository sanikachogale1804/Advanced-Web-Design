fetch("http://localhost:8080/restaurants")
.then(data=>data.json())
.then(data=>{
    console.log(data["_embedded"]["restaurants"]);
    data["_embedded"]["restaurants"].forEach((users)=>{
        console.log(users)
        const a=document.createElement("a");
        a.textContent=users["name"]
        document.body.appendChild(a)
    })
  
})