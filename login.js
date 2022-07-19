function check() {
let firstname = document.getElementById("name");
let lastname = document.getElementById("lastname");
let login = document.getElementById("login");
let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let phone = document.getElementById("phone");
//let conditions = document.getElementById("conditions");

document.getElementById ('errorMessage').innerHTML = "";
firstname.style.borderColor = 'grey';
lastname.style.borderColor = 'grey';
login.style.borderColor = 'grey';
pass1.style.borderColor = 'grey';
pass2.style.borderColor = 'grey';
phone.style.borderColor = 'grey';

function welcome() {  
    window.location.href = '1.html';
}

    if (firstname.value =='') {
        document.getElementById ('errorMessage').innerHTML += 'Поле "Имя" не заполнено<br>';
        firstname.style.borderColor = 'red';
    }         
    else if (lastname.value =='') {
        document.getElementById ('errorMessage').innerHTML += 'Поле "Фамилия" не заполнено<br>';
        lastname.style.borderColor = 'red';
    }
    else if (login.value =='') {
        document.getElementById ('errorMessage').innerHTML += 'Поле "Логин" не заполнено<br>';
        login.style.borderColor = 'red';
    }
    else if (pass1.value =='') {
        document.getElementById ('errorMessage').innerHTML += 'Поле "Пароль" не заполнено<br>';
        pass1.style.borderColor = 'red';
    }
    else if (pass1.value.length < 6) {
        document.getElementById ('errorMessage').innerHTML += 'Слишком короткий пароль<br>';
        pass1.style.borderColor = 'red';
    }
    else if (pass1.value !== pass2.value) {
        document.getElementById ('errorMessage').innerHTML += 'Пароли не совпадают<br>';
        pass2.style.borderColor = 'red';
    }
    else if (pass2.value =='') {
        document.getElementById ('errorMessage').innerHTML += 'Поле "Повтор пароля" не заполнено<br>';
        pass2.style.borderColor = 'red';
    }
    else if (phone.value =='') {
        document.getElementById ('errorMessage').innerHTML += 'Поле "Телефон" не заполнено<br>';
        phone.style.borderColor = 'red';
    }
    
    else {               
        welcome();
        alert(`Добро пожаловать, ${firstname.value}!`);       
    }
}
