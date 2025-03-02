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

        const transactionHistoryContent = document.getElementById(
          "transactionHistoryContent"
        );
        const p = document.createElement("p");
        p.innerHTML = `
         <p class="text-gray-800 font-medium mt-5 mx-5"> Cashout your balance ${cashAmount} and Bank account number ${cashAccountNumber}</p>
        `;
        transactionHistoryContent.appendChild(p);
      } else {
        window.alert("enter the valid pin number");
      }
    } else {
      window.alert("enter the valid Account Number");
    }
  });
