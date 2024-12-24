document.getElementById("calculate").addEventListener("click",()=>{
    
    let fromCurrency=document.getElementById("fromCurrency").value;
    let toCurrency=document.getElementById("toCurrency").value;
    let Amount=document.getElementById("amount").value;

    console.log(fromCurrency);
    console.log(toCurrency);
    console.log(Amount);

    fetch("https://api.exchangerate-api.com/v4/latest/"+fromCurrency)
    .then(data=>data.json())
    .then(data=>{

        let answer=data["rates"][toCurrency]*Amount;
        document.getElementById("answer").textContent=Amount+" "+fromCurrency+"="+answer+" "+toCurrency;
    });
})

