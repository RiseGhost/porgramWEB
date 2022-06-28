function validate() {
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm-password').value;
    if (password != confirm_password) {
        alert("Password not match");
    } else {
        document.getElementById('formulario').submit();
    }
}