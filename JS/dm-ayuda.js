var switchButton = document.getElementById('switch');
var switchButton2 = document.getElementById('sol');
var PCV_700 = '#102240';
var PCV_500 = '#1B396A';
var PCV_200 = '#A4B0C3';
var WHCV_700 = '#959595';
var WHCV_500 = '#F9F9F9';
var WHCV_200 = ' #FDFDFD';
var BCV_700 = '#0C0F17';
var BCV_500 = '#141927';
var BCV_200 = '#A1A3A9';
var BCV_400 = '#434752';
var WCV_700 = ' #685B04';
var TCV_700 = '#046531';
var SCV_500 = '#F2B90F';
var TCV_500 = '06A852';





switchButton.addEventListener('click', () => {

    // Ocultar moon
    switchButton.style.display = 'none';
    // Mostrar sol
    document.getElementById('sol').style.display = 'block';


    // Activamos el darkmode
    document.body.classList.toggle('dark');

    if (localStorage.getItem('Responsivedeploy') == 'true') {
        document.getElementById('header-sec-l').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        // Icons
        document.getElementById('close-icon').style.display = 'none';
        document.getElementById('menu-icon').style.display = 'block';
    }




    if (document.body.classList.contains('dark')) {
        // Agregamos todas las clases necesarias al click
        localStorage.setItem('theme', 'true');

        

        // Header RDI-dark 
        document.getElementById('header-sec-l').classList.add('menu-dark');
        document.getElementById('dark-header').classList.add('dark');
        document.getElementById('RDI-dark').classList.add('dark');
        document.getElementById('login-dark').classList.add('dark');

        // Secction 
        document.getElementById('headline-dark').classList.add('dark-headline');
        document.getElementById('h2-dark').classList.add('dark-h2');
        document.getElementById('help-dark').classList.add('dark-help');
        document.getElementById('h5-dark').classList.add('dark-h5');

        // Questions
        document.getElementById('respuesta1').classList.add('dark-question');
        document.getElementById('respuesta2').classList.add('dark-question');
        document.getElementById('respuesta3').classList.add('dark-question');
        document.getElementById('respuesta4').classList.add('dark-question');
        // Questios font
        document.getElementById('anwser-p-1').classList.add('dark-font-bl');
        document.getElementById('anwser-p-2').classList.add('dark-font-bl');
        document.getElementById('anwser-p-3').classList.add('dark-font-bl');
        document.getElementById('anwser-p-4').classList.add('dark-font-bl');
        // Questions icons
        document.getElementById('Fup-1').style.fill = WHCV_500;
        document.getElementById('Fdonw-1').style.fill = WHCV_500;
        document.getElementById('Fup-2').style.fill = WHCV_500;
        document.getElementById('Fdonw-2').style.fill = WHCV_500;
        document.getElementById('Fup-3').style.fill = WHCV_500;
        document.getElementById('Fdonw-3').style.fill = WHCV_500;
        document.getElementById('Fup-4').style.fill = WHCV_500;
        document.getElementById('Fdonw-4').style.fill = WHCV_500;
        // Content Questions
        document.getElementById('conte-pregunta-1').classList.add('conten-quest-dark');
        document.getElementById('conte-pregunta-2').classList.add('conten-quest-dark');
        document.getElementById('conte-pregunta-3').classList.add('conten-quest-dark');
        document.getElementById('conte-pregunta-4').classList.add('conten-quest-dark');
        // Font White Questions
        document.getElementById('sub-1').classList.add('dark-font-wh');
        document.getElementById('sub-2').classList.add('dark-font-wh');
        document.getElementById('sub-3').classList.add('dark-font-wh');
        document.getElementById('sub-4').classList.add('dark-font-wh');


        // Icons Menu
        document.getElementById('icon-menu-dark').classList.add('dark-fill');
        document.getElementById('close-menu-dark').classList.add('dark-fill');




        // Footer
        document.getElementById('dark-footer').classList.add('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.add('dark-icon-bg');
        // Etiqueeta a
        document.getElementById('dark-a1').classList.add('dark-font');
        document.getElementById('dark-a2').classList.add('dark-font');
        document.getElementById('dark-a3').classList.add('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.add('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = WCV_700;
        document.getElementById('dark-thel').style.fill = TCV_700;









    } else {
        // Removemos todas las clases necesarias al click
        localStorage.setItem('theme', 'false');
        document.getElementById('header-sec-l').classList.remove('menu-dark');
        document.getElementById('dark-header').classList.remove('dark');
        document.getElementById('RDI-dark').classList.remove('dark');
        document.getElementById('login-dark').classList.remove('dark');

        // Section
        document.getElementById('headline-dark').classList.remove('dark-headline');
        document.getElementById('h2-dark').classList.remove('dark-h2');
        document.getElementById('help-dark').classList.remove('dark-help');
        document.getElementById('h5-dark').classList.remove('dark-h5');

        // Questions
        document.getElementById('respuesta1').classList.remove('dark-question');
        document.getElementById('respuesta2').classList.remove('dark-question');
        document.getElementById('respuesta3').classList.remove('dark-question');
        document.getElementById('respuesta4').classList.remove('dark-question');
        // Questios font
        document.getElementById('anwser-p-1').classList.remove('dark-fobl-wh');
        document.getElementById('anwser-p-2').classList.remove('dark-fobl-wh');
        document.getElementById('anwser-p-3').classList.remove('dark-fobl-wh');
        document.getElementById('anwser-p-4').classList.remove('dark-fobl-wh');
        // Questions icons
        document.getElementById('Fup-1').style.fill = PCV_500;
        document.getElementById('Fdonw-1').style.fill = PCV_500;
        document.getElementById('Fup-2').style.fill = PCV_500;
        document.getElementById('Fdonw-2').style.fill = PCV_500;
        document.getElementById('Fup-3').style.fill = PCV_500;
        document.getElementById('Fdonw-3').style.fill = PCV_500;
        document.getElementById('Fup-4').style.fill = PCV_500;
        document.getElementById('Fdonw-4').style.fill = PCV_500;
        // Content Questions
        document.getElementById('conte-pregunta-1').classList.remove('conten-quest-dark');
        document.getElementById('conte-pregunta-2').classList.remove('conten-quest-dark');
        document.getElementById('conte-pregunta-3').classList.remove('conten-quest-dark');
        document.getElementById('conte-pregunta-4').classList.remove('conten-quest-dark');
        // Font White Questions
        document.getElementById('sub-1').classList.remove('dark-font-wh');
        document.getElementById('sub-2').classList.remove('dark-font-wh');
        document.getElementById('sub-3').classList.remove('dark-font-wh');
        document.getElementById('sub-4').classList.remove('dark-font-wh');

        // Icons Menu
        document.getElementById('icon-menu-dark').classList.remove('dark-fill');
        document.getElementById('close-menu-dark').classList.remove('dark-fill');


        // Footer
        document.getElementById('dark-footer').classList.remove('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');

        // Etiqueeta a
        document.getElementById('dark-a1').classList.remove('dark-font');
        document.getElementById('dark-a2').classList.remove('dark-font');
        document.getElementById('dark-a3').classList.remove('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.remove('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = SCV_500;
        document.getElementById('dark-thel').style.fill = TCV_500;



    }


});





switchButton2.addEventListener('click', () => {
    // Ocultar moon
    switchButton.style.display = 'block';
    // Mostrar sol
    document.getElementById('sol').style.display = 'none';

    // Al clic quitamos el darkmode
    document.body.classList.remove('dark');

    if (localStorage.getItem('Responsivedeploy') == 'true') {
        document.getElementById('header-sec-l').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        // Icons
        document.getElementById('close-icon').style.display = 'none';
        document.getElementById('menu-icon').style.display = 'block';
    }



    // alert('no');

    if (document.body.classList.contains('dark')) {
        // Agregamos todas las clases necesarias al click
        localStorage.setItem('theme', 'true');

        // Header 
        document.getElementById('header-sec-l').classList.add('menu-dark');
        document.getElementById('dark-header').classList.add('dark');
        document.getElementById('RDI-dark').classList.add('dark');
        document.getElementById('login-dark').classList.add('dark');

        // Secction 
        document.getElementById('headline-dark').classList.add('dark-headline');
        document.getElementById('h2-dark').classList.add('dark-h2');
        document.getElementById('help-dark').classList.add('dark-help');
        document.getElementById('h5-dark').classList.add('dark-h5');

        // Questions
        document.getElementById('respuesta1').classList.add('dark-question');
        document.getElementById('respuesta2').classList.add('dark-question');
        document.getElementById('respuesta3').classList.add('dark-question');
        document.getElementById('respuesta4').classList.add('dark-question');
        // Questios font
        document.getElementById('anwser-p-1').classList.add('dark-font-bl');
        document.getElementById('anwser-p-2').classList.add('dark-font-bl');
        document.getElementById('anwser-p-3').classList.add('dark-font-bl');
        document.getElementById('anwser-p-4').classList.add('dark-font-bl');
        // Questions icons
        document.getElementById('Fup-1').style.fill = WHCV_500;
        document.getElementById('Fdonw-1').style.fill = WHCV_500;
        document.getElementById('Fup-2').style.fill = WHCV_500;
        document.getElementById('Fdonw-2').style.fill = WHCV_500;
        document.getElementById('Fup-3').style.fill = WHCV_500;
        document.getElementById('Fdonw-3').style.fill = WHCV_500;
        document.getElementById('Fup-4').style.fill = WHCV_500;
        document.getElementById('Fdonw-4').style.fill = WHCV_500;
        // Content Questions
        document.getElementById('conte-pregunta-1').classList.add('conten-quest-dark');
        document.getElementById('conte-pregunta-2').classList.add('conten-quest-dark');
        document.getElementById('conte-pregunta-3').classList.add('conten-quest-dark');
        document.getElementById('conte-pregunta-4').classList.add('conten-quest-dark');
        // Font White Questions
        document.getElementById('sub-1').classList.add('dark-font-wh');
        document.getElementById('sub-2').classList.add('dark-font-wh');
        document.getElementById('sub-3').classList.add('dark-font-wh');
        document.getElementById('sub-4').classList.add('dark-font-wh');

        // Icons Menu
        document.getElementById('icon-menu-dark').classList.add('dark-fill');
        document.getElementById('close-menu-dark').classList.add('dark-fill');

        // Footer
        document.getElementById('dark-footer').classList.add('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.add('dark-icon-bg');
        // Etiqueeta a
        document.getElementById('dark-a1').classList.add('dark-font');
        document.getElementById('dark-a2').classList.add('dark-font');
        document.getElementById('dark-a3').classList.add('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.add('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = WCV_700;
        document.getElementById('dark-thel').style.fill = TCV_700;
    } else {
        // Removemos todas las clases necesarias al click
        localStorage.setItem('theme', 'false');
        document.getElementById('header-sec-l').classList.remove('menu-dark');
        document.getElementById('dark-header').classList.remove('dark');
        document.getElementById('RDI-dark').classList.remove('dark');
        document.getElementById('login-dark').classList.remove('dark');


        // Secction 
        document.getElementById('headline-dark').classList.remove('dark-headline');
        document.getElementById('h2-dark').classList.remove('dark-h2');
        document.getElementById('help-dark').classList.remove('dark-help');
        document.getElementById('h5-dark').classList.remove('dark-h5');

        // Questions
        document.getElementById('respuesta1').classList.remove('dark-question');
        document.getElementById('respuesta2').classList.remove('dark-question');
        document.getElementById('respuesta3').classList.remove('dark-question');
        document.getElementById('respuesta4').classList.remove('dark-question');
        // Questios font
        document.getElementById('anwser-p-1').classList.remove('dark-fobl-wh');
        document.getElementById('anwser-p-2').classList.remove('dark-fobl-wh');
        document.getElementById('anwser-p-3').classList.remove('dark-fobl-wh');
        document.getElementById('anwser-p-4').classList.remove('dark-fobl-wh');
        // Questions icons
        document.getElementById('Fup-1').style.fill = PCV_500;
        document.getElementById('Fdonw-1').style.fill = PCV_500;
        document.getElementById('Fup-2').style.fill = PCV_500;
        document.getElementById('Fdonw-2').style.fill = PCV_500;
        document.getElementById('Fup-3').style.fill = PCV_500;
        document.getElementById('Fdonw-3').style.fill = PCV_500;
        document.getElementById('Fup-4').style.fill = PCV_500;
        document.getElementById('Fdonw-4').style.fill = PCV_500;
        // Content Questions
        document.getElementById('conte-pregunta-1').classList.remove('conten-quest-dark');
        document.getElementById('conte-pregunta-2').classList.remove('conten-quest-dark');
        document.getElementById('conte-pregunta-3').classList.remove('conten-quest-dark');
        document.getElementById('conte-pregunta-4').classList.remove('conten-quest-dark');
        // Font White Questions
        document.getElementById('sub-1').classList.remove('dark-font-wh');
        document.getElementById('sub-2').classList.remove('dark-font-wh');
        document.getElementById('sub-3').classList.remove('dark-font-wh');
        document.getElementById('sub-4').classList.remove('dark-font-wh');

        // Icons Menu
        document.getElementById('icon-menu-dark').classList.remove('dark-fill');
        document.getElementById('close-menu-dark').classList.remove('dark-fill');

        // Footer
        document.getElementById('dark-footer').classList.remove('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');
        // Etiqueeta a
        document.getElementById('dark-a1').classList.remove('dark-font');
        document.getElementById('dark-a2').classList.remove('dark-font');
        document.getElementById('dark-a3').classList.remove('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.remove('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = SCV_500;
        document.getElementById('dark-thel').style.fill = TCV_500;




    }


});








// Trabajamos el localstorage para que al actualizar no se cambie

if (localStorage.getItem('theme') == 'true') {
    // Ocultar moon
    switchButton.style.display = 'none';
    // Mostrar sol
    document.getElementById('sol').style.display = 'block';


    // Agregamos al cargar valores del localstorage
    document.body.classList.toggle('dark');

    if (localStorage.getItem('Responsivedeploy') == 'true') {
        document.getElementById('header-sec-l').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        // Icons
        document.getElementById('close-icon').style.display = 'none';
        document.getElementById('menu-icon').style.display = 'block';
    }


    // Header
    document.getElementById('header-sec-l').classList.add('menu-dark');
    document.getElementById('dark-header').classList.add('dark');
    document.getElementById('RDI-dark').classList.add('dark');
    document.getElementById('login-dark').classList.add('dark');

    // Secction 
    document.getElementById('headline-dark').classList.add('dark-headline');
    document.getElementById('h2-dark').classList.add('dark-h2');
    document.getElementById('help-dark').classList.add('dark-help');
    document.getElementById('h5-dark').classList.add('dark-h5');

    // Questions
    document.getElementById('respuesta1').classList.add('dark-question');
    document.getElementById('respuesta2').classList.add('dark-question');
    document.getElementById('respuesta3').classList.add('dark-question');
    document.getElementById('respuesta4').classList.add('dark-question');
    // Questios font
    document.getElementById('anwser-p-1').classList.add('dark-font-bl');
    document.getElementById('anwser-p-2').classList.add('dark-font-bl');
    document.getElementById('anwser-p-3').classList.add('dark-font-bl');
    document.getElementById('anwser-p-4').classList.add('dark-font-bl');
    // Questions icons
    document.getElementById('Fup-1').style.fill = WHCV_500;
    document.getElementById('Fdonw-1').style.fill = WHCV_500;
    document.getElementById('Fup-2').style.fill = WHCV_500;
    document.getElementById('Fdonw-2').style.fill = WHCV_500;
    document.getElementById('Fup-3').style.fill = WHCV_500;
    document.getElementById('Fdonw-3').style.fill = WHCV_500;
    document.getElementById('Fup-4').style.fill = WHCV_500;
    document.getElementById('Fdonw-4').style.fill = WHCV_500;
    // Content Questions
    document.getElementById('conte-pregunta-1').classList.add('conten-quest-dark');
    document.getElementById('conte-pregunta-2').classList.add('conten-quest-dark');
    document.getElementById('conte-pregunta-3').classList.add('conten-quest-dark');
    document.getElementById('conte-pregunta-4').classList.add('conten-quest-dark');
    // Font White Questions
    document.getElementById('sub-1').classList.add('dark-font-wh');
    document.getElementById('sub-2').classList.add('dark-font-wh');
    document.getElementById('sub-3').classList.add('dark-font-wh');
    document.getElementById('sub-4').classList.add('dark-font-wh');
    // Icons Menu
    document.getElementById('icon-menu-dark').classList.add('dark-fill');
    document.getElementById('close-menu-dark').classList.add('dark-fill');

    // Footer
    document.getElementById('dark-footer').classList.add('dark-background');
    // Icon Footer
    document.getElementById('dark-doc-foot').classList.add('dark-icon-bg');
    document.getElementById('dark-doc1-foot').classList.add('dark-icon-bg');
    document.getElementById('dark-doc2-foot').classList.add('dark-icon-bg');
    // Etiqueeta a
    document.getElementById('dark-a1').classList.add('dark-font');
    document.getElementById('dark-a2').classList.add('dark-font');
    document.getElementById('dark-a3').classList.add('dark-font');
    // Copy R
    document.getElementById('dark-copy').classList.add('dark-font');
    // Icons Contactenos
    document.getElementById('dark-messa').style.fill = WCV_700;
    document.getElementById('dark-thel').style.fill = TCV_700;

} else {
    // Ocultar moon
    switchButton.style.display = 'block';
    // Mostrar sol
    document.getElementById('sol').style.display = 'none';




    // Quitamos al cargar valores del localstorage
    document.body.classList.remove('dark');

    // Header
    document.getElementById('header-sec-l').classList.remove('menu-dark');
    document.getElementById('dark-header').classList.remove('dark');
    document.getElementById('RDI-dark').classList.remove('dark');
    document.getElementById('login-dark').classList.remove('dark');

    // Secction 
    document.getElementById('headline-dark').classList.remove('dark-headline');
    document.getElementById('h2-dark').classList.remove('dark-h2');
    document.getElementById('help-dark').classList.remove('dark-help');
    document.getElementById('h5-dark').classList.remove('dark-h5');

    // Questions
    document.getElementById('respuesta1').classList.remove('dark-question');
    document.getElementById('respuesta2').classList.remove('dark-question');
    document.getElementById('respuesta3').classList.remove('dark-question');
    document.getElementById('respuesta4').classList.remove('dark-question');
    // Questios font
    document.getElementById('anwser-p-1').classList.remove('dark-fobl-wh');
    document.getElementById('anwser-p-2').classList.remove('dark-fobl-wh');
    document.getElementById('anwser-p-3').classList.remove('dark-fobl-wh');
    document.getElementById('anwser-p-4').classList.remove('dark-fobl-wh');
    // Questions icons
    document.getElementById('Fup-1').style.fill = PCV_500;
    document.getElementById('Fdonw-2').style.fill = PCV_500;
    document.getElementById('Fup-2').style.fill = PCV_500;
    document.getElementById('Fdonw-2').style.fill = PCV_500;
    document.getElementById('Fup-3').style.fill = PCV_500;
    document.getElementById('Fdonw-3').style.fill = PCV_500;
    document.getElementById('Fup-4').style.fill = PCV_500;
    document.getElementById('Fdonw-4').style.fill = PCV_500;
    // Content Questions
    document.getElementById('conte-pregunta-1').classList.remove('conten-quest-dark');
    document.getElementById('conte-pregunta-2').classList.remove('conten-quest-dark');
    document.getElementById('conte-pregunta-3').classList.remove('conten-quest-dark');
    document.getElementById('conte-pregunta-4').classList.remove('conten-quest-dark');
    // Font White Questions
    document.getElementById('sub-1').classList.remove('dark-font-wh');
    document.getElementById('sub-2').classList.remove('dark-font-wh');
    document.getElementById('sub-3').classList.remove('dark-font-wh');
    document.getElementById('sub-4').classList.remove('dark-font-wh');

    document.getElementById('header-sec-l').classList.remove('menu-dark');
    // Icons Menu
    document.getElementById('icon-menu-dark').classList.remove('dark-fill');
    document.getElementById('close-menu-dark').classList.remove('dark-fill');

    // Footer
    document.getElementById('dark-footer').classList.remove('dark-background');
    // Icon Footer
    document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
    document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
    document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');
    // Etiqueeta a
    document.getElementById('dark-a1').classList.remove('dark-font');
    document.getElementById('dark-a2').classList.remove('dark-font');
    document.getElementById('dark-a3').classList.remove('dark-font');
    // Copy R
    document.getElementById('dark-copy').classList.remove('dark-font');
    // Icons Contactenos
    document.getElementById('dark-messa').style.fill = SCV_500;
    document.getElementById('dark-thel').style.fill = TCV_500;

}