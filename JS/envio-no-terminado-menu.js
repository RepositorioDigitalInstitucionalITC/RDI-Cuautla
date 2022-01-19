localStorage.setItem('deploy', 'false');
localStorage.setItem('Responsivedeploy', 'false');

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