fetch("http://localhost:8080/product")
.then(data=>data.json())
.then(data=>{
    console.log(data["_embedded"]["products"][1]["productName"])
})