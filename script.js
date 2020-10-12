function getRadioGroupValue(){

    let radios = document.getElementsByName('type');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            check()
            checked(radios[i].value)
        }
    }

}

function check(){
    let inp = document.getElementsByName('type');
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            document.getElementById("selected").innerHTML = inp[i].dataset.name; 
        }
    }
}

function checked(value) {
    let count = document.getElementById("count").value;
    document.getElementById("result").innerHTML = `$` + count * value + `<span id="us">us</span>`; 
}

getRadioGroupValue();

