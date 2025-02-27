document
  .getElementById("cashoutBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashAccountNumber =
      document.getElementById("cashAccountNumber").value;
    const cashAmount = document.getElementById("cashAmount").value;
    const convertedAmount = Number(cashAmount);
    const cashOutpinNumber = document.getElementById("cashOutpinNumber").value;
    const mainBalance = document.getElementById("mainBalance").innerText;
    const convertedMainBalance = Number(mainBalance);
    if (cashAccountNumber.length === 11) {
      if (cashOutpinNumber === "6897") {
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById("mainBalance").innerText = sum;
      } else {
        window.alert("enter the valid pin number");
      }
    } else {
      window.alert("enter the valid Account Number");
    }
  });
