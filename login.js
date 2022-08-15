let inputs = document.querySelectorAll('input');

/*function welcome() {  
    window.location.href = 'welcome.html';
}*/

let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    input.style.borderColor = 'green';

    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
        input.style.borderColor = 'red';        
    }
    if (validity.patternMismatch) {
        errors.push ('Неверный формат заполнения поля ' + input.placeholder);
        input.style.borderColor = 'red';
    }
    if (validity.rangeOverflow) {
        let max = getAttributeValue(input, 'max');
        errors.push('Максимальное значение не может быть больше чем ' + max);
        input.style.borderColor = 'red';
    }
    if (validity.rangeUnderflow) {
        let min = getAttributeValue(input, 'min');
        errors.push('Минимальное значение не может быть меньше чем ' + min);
        input.style.borderColor = 'red';
    }  
}

function checkPass(){
    if (inputs[3].value !== inputs[4].value) {
        errors.push ('Пароли не совпадают');
        inputs[4].style.borderColor = 'red';
    }else{
        return true;
    }    
}
function checkAll(){
    errors = [];   

    for (let input of inputs) {
        checkValidity(input);
    }
    checkPass();   
            
    document.getElementById ('errorMessage').innerHTML = errors.join('. <br>');
    
    /* welcome();
    alert(`Добро пожаловать, ${inputs[0].value}!`);*/
    
}
