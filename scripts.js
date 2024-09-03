function login() {
    var email = document.getElementById('exampleInputEmail1').value;
    var pwd = document.getElementById('exampleInputPassword1').value;
    if (email === "admin" && pwd === "admin") {
        alert('Sucesso');

       
    } else {
        alert('E-mail ou senha inválidos.');
    }
}

function createUser(){
    /*
    var regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

    var name = document.getElementById('name').value
    var email = document.getElementById('exampleInputEmail1').value
    var pwd1= document.getElementById('exampleInputPassword1').value
    var pwd2 = document.getElementById('confirm-password').value
*/
   

   
}
function validarFormulario() {

    var name = document.getElementById('name').value;
    var regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;

    if (!regex.test(name)) {
        document.getElementById('response-name').innerText = "Nome inválido! Insira um nome sem números e com espaços entre palavras.";
        alert('deu red')
    } 
}



