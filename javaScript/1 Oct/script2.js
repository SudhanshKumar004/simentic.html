function data(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#number').value;
    let psw = document.querySelector('#psw').value;
    let psw2 = document.querySelector('#psw2').value;

    console.log(name);
    console.log(email);
    console.log(number);
    console.log(psw);
    console.log(psw2);


    if(name === ""){
        document.querySelector('#errorname').innerHTML = "Please enter your name";
        let selectname = document.querySelector('#name');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";
        return false;
    }
    if(email === ""){
        document.querySelector('#erroremail').innerHTML = "Please enter your email";
        let selectemail = document.querySelector('#email');
        selectemail.style.borderColor = "red";
        selectemail.style.outlineColor = "red";
        return false;
    }

    else if(!(email.includes('@') && email.includes('.com'))){
        document.querySelector('#erroremail').innerHTML = "Enter valid email.";
        let selectemail = document.querySelector('#email');
        selectemail.style.borderColor = "red";
        selectemail.style.outlineColor = "red";
        return false;
    }

    if(number === ""){
        document.querySelector('#errornumber').innerHTML = "Please enter your number";
        let selectnumber = document.querySelector('#number');
        selectnumber.style.borderColor = "red";
        selectnumber.style.outlineColor = "red";
        return false;
    }

    else if(number.length !== 10){
        document.querySelector('#errornumber').innerHTML = "Please enter 10 digit number";
        let selectnumber = document.querySelector('#number');
        selectnumber.style.borderColor = "red";
        selectnumber.style.outlineColor = "red";
        return false;
    }

     else if(isNaN(number)){
        document.querySelector('#errornumber').innerHTML = "Please enter numbers only";
        let selectnumber = document.querySelector('#number');
        selectnumber.style.borderColor = "red";
        selectnumber.style.outlineColor = "red";
        return false;
    }

    if(psw === ""){
        document.querySelector('#errorpsw').innerHTML = "Please enter your Password";
        let selectpsw = document.querySelector('#psw');
        selectpsw.style.borderColor = "red";
        selectpsw.style.outlineColor = "red";
        return false;
    }
    if(psw2 === ""){
        document.querySelector('#errorname5').innerHTML = "Please confirm your Password";
        let selectpsw2 = document.querySelector('#psw2');
        selectpsw2.style.borderColor = "red";
        selectpsw2.style.outlineColor = "red";
        return false;
    } 

}

function s(arg){
    console.log(arg);
    let selectedinput = document.querySelector(`#${arg}`);
    console.log(selectedinput);
    selectedinput.style.borderColor = "black";
    selectedinput.style.outlineColor = "black";

    // let selectederrordiv = document.querySelector(`#error${arg}`);
    // selectederrordiv.innerHTML = "";
    // selectederrordiv.style.borderColor = "red";
    // selectederrordiv.style.outlineColor = "red";



}