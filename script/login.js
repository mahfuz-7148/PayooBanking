document.getElementById("loginBtn").addEventListener('click', function (event) {
    event.preventDefault()
    const mobileNumber = document.getElementById("mobileNumber").value
    const pinNumber = document.getElementById("pinNumber").value
    if (mobileNumber.length === 11 && pinNumber === "6897") {
        window.location.href = './main.html'
    } else {
      window.alert('Need a valid mobile number')
    }
})