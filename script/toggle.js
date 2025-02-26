document.getElementById('cashOut').style.display ='none'

document.getElementById("addMoneyCard").addEventListener('click', function () {
    document.getElementById('cashOut').style.display ='none'
    document.getElementById('addMoney').style.display ='block'
})

document.getElementById("cashOutCard").addEventListener("click", function () {
    document.getElementById("cashOut").style.display = "block";
    document.getElementById("addMoney").style.display = "none";
});

