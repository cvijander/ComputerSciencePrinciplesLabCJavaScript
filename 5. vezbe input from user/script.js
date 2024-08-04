function init() {
    document.getElementById('textOutput').innerHTML = "Enter your name and then click the button";
}

function clickButton() {
    var name = document.getElementById('textEntry').value;

    // var rad2 =document.getElementById('radio2').value;
    //  var rad4 =document.getElementById('radio4').value;
    // console.log(name);
    // console.log(rad2);
    // console.log(rad4);

    document.getElementById('textOutput').innerHTML = createFullName(name);

    
    var selectedRadio = document.querySelector('input[name="broj"]:checked');
    console.log(selectedRadio);
    if (selectedRadio) {
        var valueOne =selectedRadio.value;
        document.getElementById('textOutput').innerHTML = valueOne;

    }
}

function createFullName(unetoIme){
    var greeting = "Hello, " + unetoIme + '!';
    return greeting;
}

