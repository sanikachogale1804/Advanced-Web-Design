fetch("http://localhost:8080/users")
.then(data=>data.json())
.then(data=>{
console.log(data);
data["_embedded:"]

}

)