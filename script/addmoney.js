document
  .getElementById("addMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("accountNumber").value
    const amount = document.getElementById("amount").value;
    const convertedAmount = Number(amount);
    const pinNumber = document.getElementById("pinNumber").value;
    const mainBalance = document.getElementById("mainBalance").innerText;
    const convertedMainBalance = Number(mainBalance);
    if (accountNumber.length === 11) {
      if (pinNumber === "6897") {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("mainBalance").innerText = sum;
      } else {
        window.alert("enter the valid pin number");
      }
    } else {
      window.alert("enter the valid Account Number");
    }
  });