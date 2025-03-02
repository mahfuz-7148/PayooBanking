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

        const transactionHistoryContent = document.getElementById(
          "transactionHistoryContent"
        );
        const selectBank = document.getElementById("selectBank").value
        const div = document.createElement('div')
        div.innerHTML = `
          <p class="text-gray-800 font-medium mt-5 mx-5"> Added your balance ${amount} and Bank account number ${accountNumber} from ${selectBank} </p>
          `;
        transactionHistoryContent.appendChild(div)
      } else {
        window.alert("enter the valid pin number");
      }
    } else {
      window.alert("enter the valid Account Number");
    }
  });