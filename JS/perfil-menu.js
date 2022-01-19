localStorage.setItem('deploy', 'false');

function mostrarMenu() {

    if (localStorage.getItem('deploy') == 'false') {
        document.getElementById('menu').style.display = 'block';
        document.getElementById('abajo').style.display = 'none';
        document.getElementById('up').style.display = 'block';
        localStorage.setItem('deploy', 'true');
    } else {

        document.getElementById('menu').style.display = 'none';
        document.getElementById('abajo').style.display = 'block';
        document.getElementById('up').style.display = 'none';
        localStorage.setItem('deploy', 'false');
    }
}


//Evento del input-password
var ShowPassword = document.getElementById('eye-1');
var ShowPassword2 = document.getElementById('eye-2');
var Input = document.getElementById('show-pass-1');
var Input2 = document.getElementById('show-pass-2');

ShowPassword.addEventListener('click', ShowPasswordF);
ShowPassword2.addEventListener('click', ShowPasswordF2);

function ShowPasswordF() {
    // Verificamos el tipo de input
    if (Input.type == "password") {
        // Cambiamos el tipo de input
        Input.type = "text";
        // Lo volvemos a ocultar despues de 3sg
        setTimeout("Ocultar()", 1000);
    } else {
        // Lo regresamos al tipo original
        Input.type = "password";
    }
}

function ShowPasswordF2() {
    // Verificamos el tipo de input
    if (Input2.type == "password") {
        // Cambiamos el tipo de input
        Input2.type = "text";
        // Lo volvemos a ocultar despues de 3sg
        setTimeout("Ocultar()", 1000);
    } else {
        // Lo regresamos al tipo original
        Input2.type = "password";
    }

}

function Ocultar() {
    Input.type = "password";
    Input2.type = "password";
}


// Responsive Menu
function mostrarMenuResponsive() {

    if (localStorage.getItem('Responsivedeploy') == 'false') {
        document.getElementById('menu').style.display = 'flex';
        document.getElementById('header-sec-l').style.display = 'flex';


        document.getElementById('close-icon').style.display = 'block';

        document.getElementById('menu-icon').style.display = 'none';


        localStorage.setItem('Responsivedeploy', 'true');
    } else {
        document.getElementById('menu').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        document.getElementById('header-sec-l').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
    }

}

function QuitarMenu() {
    document.getElementById('close-icon').style.display = 'none';
    document.getElementById('header-sec-l').style.display = 'none';
    document.getElementById('menu-icon').style.display = 'block';
}

// Mostar Capa

function ShowCapa() {
    document.getElementById('showoption').style.display = 'none';
    document.getElementById('capa').style.display = 'block';
    document.getElementById('content-doc').style.display = 'block';

}

function ShowCapa2() {
    document.getElementById('button-responsive').style.display = 'none'
    document.getElementById('content-doc').style.display = 'block'
    document.getElementById('capa').style.display = 'block'


}