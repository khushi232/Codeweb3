
function myFunction() {
    var x = document.codewebForm.email.value;
    var y = document.codewebForm.password.value;
    var z = document.codewebForm.confirm.value;


    var atPos = x.indexOf('@');
    var dotPos = x.indexOf('.');

    if (x == "" || x == null) {
        document.getElementById('error').innerHTML = " *required";
        document.getElementById('error').style.color = "red";

    }
    else if (atPos < 1 || dotPos < atPos + 2 || dotPos > 2 >= x.length) {
        document.getElementById('error').innerHTML = " *Invalid email";
        document.getElementById('error').style.color = "red";
    }
    else if (y == "" || y == null) {
        document.getElementById('error1').innerHTML = " *required";
        document.getElementById('error1').style.color = "red";
        document.getElementById('error').style.display = "none";


    }
    else if (y.length < 6) {
        document.getElementById('error1').innerHTML = " *Must be atleast 6 characters";
        document.getElementById('error1').style.color = "red";
        document.getElementById('error').style.display = "none";
    }
    else if (z == "" || z == null) {
        document.getElementById('error2').innerHTML = " *Re-enter Password";
        document.getElementById('error2').style.color = "red";
        document.getElementById('error').style.display = "none";
        document.getElementById('error1').style.display = "none";
    }
    else if (z != y) {
        document.getElementById('error2').innerHTML = " *Not Matched";
        document.getElementById('error2').style.color = "red";
        document.getElementById('error1').style.display = "none";
        document.getElementById('error').style.display = "none";
    }
    else {
        document.codewebForm.submit()
    }
}