document
  .getElementById("cashoutBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("cashAmount").value;
    const convertedAmount = Math.floor(amount);
    const pinNumber = document.getElementById("cashOutpinNumber").value;
    const mainBalance = document.getElementById("mainBalance").innerText;
    const convertedMainBalance = Math.floor(mainBalance);
    if (amount && pinNumber) {
      if (pinNumber === "6897") {
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById("mainBalance").innerText = sum;
      } else {
        window.alert("enter the valid pin number");
      }
    } else {
      window.alert("enter the amount");
    }
  });
