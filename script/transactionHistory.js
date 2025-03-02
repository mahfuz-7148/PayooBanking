document
  .getElementById("transactionHistoryCard")
    .addEventListener("click", function () {
      document.getElementById("addMoney").style.display = "none";
      document.getElementById("cashOut").style.display = "none";
      document.getElementById("transactionHistory").style.display = "block";
  });