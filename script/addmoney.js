document.getElementById('addMoney').addEventListener('click', function (event) {
    event.preventDefault()
    const amount = document.getElementById("amount").value
    const convertedAmount = Math.floor(amount)
    const pinNumber = document.getElementById("pinNumber").value
    const mainBalance = document.getElementById("mainBalance").innerText
    const convertedMainBalance = Math.floor(mainBalance);
     if (pinNumber === "6897") {
       const sum = convertedMainBalance + convertedAmount;
       document.getElementById("mainBalance").innerText = sum
     } else {
       window.alert("Need a valid mobile number");
     }
})