fetch("http://localhost:8080/menuItems")
.then(data=>data.json())
.then(data=>{
    console.log(data["_embedded"]["menuItems"]);
    data["_embedded"]["menuItems"].forEach((menuItems)=>{
        //console.log(menuItems)
        const a=document.createElement("a")
        a.textContent=menuItems["name"];
        document.body.appendChild(a);

        console.log(menuItems["_links"]["self"]["href"])
        a.setAttribute("href",menuItems["_links"]["self"]["href"])

        a.addEventListener("click",(event)=>{
            event.preventDefault();
            fetch(menuItems["_links"]["self"]["href"],{method:"DELETE"})
            .then(data=>data.json())

        })

    })
})