document.getElementById('name').addEventListener('input', function () {
    this.style.backgroundColor = '#dff7df'; // Зеленый оттенок фона
});

// Цвет формы при наведении
document.querySelector('.JSform h4').addEventListener('mouseover', function () {
    this.style.color = '#ff4500';
});
document.querySelector('.JSform h4').addEventListener('mouseout', function () {
    this.style.color = ''; // Сброс цвета
});


function checkName()
{
    var first = document.getElementById("name").value;
    var regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(first)) 
    {
        document.getElementById("name_check").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("name_check").style.color = "red";
        document.getElementById("name_check").innerHTML = "Введите от 2 до 20 символов";
        return false;
    }
}

function checkNumber()
{
    var phone = document.getElementById("number").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone))
    {
        document.getElementById("number_check").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("number_check").style.color = "red";
        document.getElementById("number_check").innerHTML = "Введите номер, как указано на подсказке";
        return false;
    }
}

function checkAdres()
{
    var dest = document.getElementById("adres").value;
    var regex = /^[a-zA-Z\s\.\,\d\ ]{5,30}$/;

    if (regex.test(dest))
    {
        document.getElementById("adres_check").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("adres_check").style.color = "red";
        document.getElementById("adres_check").innerHTML = "Введите от 5 до 30 символов";
        return false;
    }
}

function outputData() {
    var name = document.getElementById("name").value;
    var adres = document.getElementById("adres").value;
    var number = document.getElementById("number").value;
    var date = document.getElementById("date").value;
    var paymethod = document.getElementById("paymethod").value;

    if (name != "" && adres != "" && number != "" && date != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Имя: " + name + ".</br>";
        document.getElementById("summary").innerHTML += "Номер: " + number + ".</br>";
        document.getElementById("summary").innerHTML += "Адрес: " + adres + ".</br>";
        document.getElementById("summary").innerHTML += "Дата: " + date + ".</br>";
        document.getElementById("summary").innerHTML += "Метод оплаты: " + paymethod + ".";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Please, fill in all the fields...";
    }
}