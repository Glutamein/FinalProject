var form = document.getElementById('regform');
form.onsubmit = function () {
    var form = document.getElementById('regform');
    var password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    var pass8 = /(?=.{8,})/;
    var passC = /(?=.*[!@#\$%\^&\*\(\)\[\]\{\}\;:\'\"\<\>\,.\/\?])/g;


    passValidation('password', 'passError', 'Password must contain: lowercase, uppercase, number, special character, and be 8 characters long', password, pass8, passC);
    repassValidation('rePass', 'rePassError', 'Passwords are not the same');
    return false;
}

function passValidation(inputID, errorID, errorText, inputRegex, inputRegex, inputRegex) {
    var passvalue = document.getElementById('password').value;

    var inputElement = document.getElementById(inputID);
    var errorElement = document.getElementById(errorID);

    if (!inputRegex.test(passvalue)) {//if invalids
        errorElement.textContent = errorText;
        inputElement.classList.add('errorInput');
    }
    else { //is valid
        errorElement.textContent = "";
        inputElement.classList.remove('errorInput');
    }
}

function repassValidation(inputID, errorID, errorText) {
    var value = form[inputID].value;
    var passvalue = document.getElementById('password').value;

    var inputElement = document.getElementById(inputID);
    var errorElement = document.getElementById(errorID);

    if (value != passvalue) {
        errorElement.textContent = errorText;
        inputElement.classList.add('errorInput');
    }
    else { //is valid
        errorElement.textContent = "";
        inputElement.classList.remove('errorInput');
    }
}