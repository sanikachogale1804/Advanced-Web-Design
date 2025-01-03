fetch("http://localhost:8080/menuItems")
.then(data=>data.json())
.then(data=>{
    console.log(data["_embedded"]["menuItems"])
})