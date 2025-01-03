fetch("http://localhost:8080/restaurants")
.then(data=>data.json())
.then(data=>{
    console.log(data["_embedded"]["restaurants"]);
    data["_embedded"]["restaurants"].forEach(()=>{
        
    })
  
})