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
var DCV_200 = '#D6A1B4';
var DCV_500 = '#991344';
var SUCV_500 = '#1AAC54';
var SUCV_200 = '#A3DEBB';





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
        // 
        document.getElementById('dark-Lhelp').classList.add('dark-font');



        // Title
        document.getElementById('tertary-1').classList.add('tertary-color');
        document.getElementById('tertary-2').classList.add('tertary-color');
        // Descrip
        document.getElementById('title-descrip').classList.add('font-wh');

        // Label Inputs
        document.getElementById('label-wh-1').classList.add('font-wh');
        document.getElementById('label-wh-2').classList.add('font-wh');
        // Inputs
        document.getElementById('input-email').classList.add('input-dark');
        document.getElementById('show-pass-1').classList.add('input-dark');

        // Button
        document.getElementById('sing-button').classList.add('button-dark');
        document.getElementById('sing-button').classList.add('button-dark');

        // Label Forget
        document.getElementById('forget-label').classList.add('label-scv');

        // Recover 1 
        document.getElementById('content-modal').classList.add('bg-dark');
        document.getElementById('head-modal').classList.add('bg-ic2');
        document.getElementById('title-head-modal').classList.add('color-dark');

        // Numeros
        document.getElementById('num-1').classList.add('num-dark-1');
        document.getElementById('h4-1').classList.add('font-wh');
        document.getElementById('descrip-1').classList.add('font-wh');
        // Numeros 2
        document.getElementById('num-2').classList.add('num-dark-2');
        document.getElementById('h4-2').classList.add('color-dark');
        document.getElementById('descrip-2').classList.add('color-wh7');
        // h6
        document.getElementById('h6').classList.add('font-wh');
        // Input
        document.getElementById('modal-label-1').classList.add('font-wh');
        document.getElementById('modal-input-1').classList.add('input-dark');

        // Buton Modal
        document.getElementById('send-button').classList.add('button-dark');

        // Success
        document.getElementById('notify').classList.add('notify');

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
        document.getElementById('dark-Lhelp').classList.remove('dark-font');


        // Title
        document.getElementById('tertary-1').classList.remove('tertary-color');
        document.getElementById('tertary-2').classList.remove('tertary-color');
        // Descrip
        document.getElementById('title-descrip').classList.remove('font-wh');

        // Label Inputs
        document.getElementById('label-wh-1').classList.remove('font-wh');
        document.getElementById('label-wh-2').classList.remove('font-wh');
        // Inputs
        document.getElementById('input-email').classList.remove('input-dark');
        document.getElementById('show-pass-1').classList.remove('input-dark');

        // Button
        document.getElementById('sing-button').classList.remove('button-dark');
        document.getElementById('sing-button').classList.remove('button-dark');

        // Label Forget
        document.getElementById('forget-label').classList.remove('label-scv');

        // Recover 1 
        document.getElementById('content-modal').classList.remove('bg-dark');
        document.getElementById('head-modal').classList.remove('bg-ic2');
        document.getElementById('title-head-modal').classList.remove('color-dark');

        // Numeros
        document.getElementById('num-1').classList.remove('num-dark-1');
        document.getElementById('h4-1').classList.remove('font-wh');
        document.getElementById('descrip-1').classList.remove('font-wh');
        // Numeros 2
        document.getElementById('num-2').classList.remove('num-dark-2');
        document.getElementById('h4-2').classList.remove('color-dark');
        document.getElementById('descrip-2').classList.remove('color-wh7');
        // h6
        document.getElementById('h6').classList.remove('font-wh');
        // Input
        document.getElementById('modal-label-1').classList.remove('font-wh');
        document.getElementById('modal-input-1').classList.remove('input-dark');

        // Buton Modal
        document.getElementById('send-button').classList.remove('button-dark');


        // Success
        document.getElementById('notify').classList.remove('notify');

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
        document.getElementById('dark-Lhelp').classList.add('dark-font');


        // Title
        document.getElementById('tertary-1').classList.add('tertary-color');
        document.getElementById('tertary-2').classList.add('tertary-color');
        // Descrip
        document.getElementById('title-descrip').classList.add('font-wh');

        // Label Inputs
        document.getElementById('label-wh-1').classList.add('font-wh');
        document.getElementById('label-wh-2').classList.add('font-wh');
        // Inputs
        document.getElementById('input-email').classList.add('input-dark');
        document.getElementById('show-pass-1').classList.add('input-dark');

        // Button
        document.getElementById('sing-button').classList.add('button-dark');
        document.getElementById('sing-button').classList.add('button-dark');

        // Label Forget
        document.getElementById('forget-label').classList.add('label-scv');

        // Recover 1 
        document.getElementById('content-modal').classList.add('bg-dark');
        document.getElementById('head-modal').classList.add('bg-ic2');
        document.getElementById('title-head-modal').classList.add('color-dark');

        // Numeros
        document.getElementById('num-1').classList.add('num-dark-1');
        document.getElementById('h4-1').classList.add('font-wh');
        document.getElementById('descrip-1').classList.add('font-wh');
        // Numeros 2
        document.getElementById('num-2').classList.add('num-dark-2');
        document.getElementById('h4-2').classList.add('color-dark');
        document.getElementById('descrip-2').classList.add('color-wh7');
        // h6
        document.getElementById('h6').classList.add('font-wh');
        // Input
        document.getElementById('modal-label-1').classList.add('font-wh');
        document.getElementById('modal-input-1').classList.add('input-dark');

        // Buton Modal
        document.getElementById('send-button').classList.add('button-dark');


        // Success
        document.getElementById('notify').classList.add('notify');

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
        document.getElementById('dark-Lhelp').classList.remove('dark-font');


        // Title
        document.getElementById('tertary-1').classList.remove('tertary-color');
        document.getElementById('tertary-2').classList.remove('tertary-color');
        // Descrip
        document.getElementById('title-descrip').classList.remove('font-wh');

        // Label Inputs
        document.getElementById('label-wh-1').classList.remove('font-wh');
        document.getElementById('label-wh-2').classList.remove('font-wh');
        // Inputs
        document.getElementById('input-email').classList.remove('input-dark');
        document.getElementById('show-pass-1').classList.remove('input-dark');

        // Button
        document.getElementById('sing-button').classList.remove('button-dark');
        document.getElementById('sing-button').classList.remove('button-dark');

        // Label Forget
        document.getElementById('forget-label').classList.remove('label-scv');

        // Recover 1 
        document.getElementById('content-modal').classList.remove('bg-dark');
        document.getElementById('head-modal').classList.remove('bg-ic2');
        document.getElementById('title-head-modal').classList.remove('color-dark');

        // Numeros
        document.getElementById('num-1').classList.remove('num-dark-1');
        document.getElementById('h4-1').classList.remove('font-wh');
        document.getElementById('descrip-1').classList.remove('font-wh');
        // Numeros 2
        document.getElementById('num-2').classList.remove('num-dark-2');
        document.getElementById('h4-2').classList.remove('color-dark');
        document.getElementById('descrip-2').classList.remove('color-wh7');
        // h6
        document.getElementById('h6').classList.remove('font-wh');
        // Input
        document.getElementById('modal-label-1').classList.remove('font-wh');
        document.getElementById('modal-input-1').classList.remove('input-dark');

        // Buton Modal
        document.getElementById('send-button').classList.remove('button-dark');


        // Success
        document.getElementById('notify').classList.remove('notify');

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

    // Header
    document.getElementById('header-sec-l').classList.add('menu-dark');
    document.getElementById('dark-header').classList.add('dark');
    document.getElementById('RDI-dark').classList.add('dark');
    document.getElementById('dark-Lhelp').classList.add('dark-font');

    // Title
    document.getElementById('tertary-1').classList.add('tertary-color');
    document.getElementById('tertary-2').classList.add('tertary-color');
    // Descrip
    document.getElementById('title-descrip').classList.add('font-wh');

    // Label Inputs
    document.getElementById('label-wh-1').classList.add('font-wh');
    document.getElementById('label-wh-2').classList.add('font-wh');
    // Inputs
    document.getElementById('input-email').classList.add('input-dark');
    document.getElementById('show-pass-1').classList.add('input-dark');

    // Button
    document.getElementById('sing-button').classList.add('button-dark');
    document.getElementById('sing-button').classList.add('button-dark');

    // Label Forget
    document.getElementById('forget-label').classList.add('label-scv');

    // Recover 1 
    document.getElementById('content-modal').classList.add('bg-dark');
    document.getElementById('head-modal').classList.add('bg-ic2');
    document.getElementById('title-head-modal').classList.add('color-dark');

    // Numeros
    document.getElementById('num-1').classList.add('num-dark-1');
    document.getElementById('h4-1').classList.add('font-wh');
    document.getElementById('descrip-1').classList.add('font-wh');
    // Numeros 2
    document.getElementById('num-2').classList.add('num-dark-2');
    document.getElementById('h4-2').classList.add('color-dark');
    document.getElementById('descrip-2').classList.add('color-wh7');
    // h6
    document.getElementById('h6').classList.add('font-wh');
    // Input
    document.getElementById('modal-label-1').classList.add('font-wh');
    document.getElementById('modal-input-1').classList.add('input-dark');

    // Buton Modal
    document.getElementById('send-button').classList.add('button-dark');

    // Success
    document.getElementById('notify').classList.add('notify');


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
    document.getElementById('header-sec-l').classList.remove('menu-dark');
    document.body.classList.remove('dark');
    document.getElementById('dark-header').classList.remove('dark');
    document.getElementById('RDI-dark').classList.remove('dark');
    document.getElementById('dark-Lhelp').classList.remove('dark-font');


    // Title
    document.getElementById('tertary-1').classList.remove('tertary-color');
    document.getElementById('tertary-2').classList.remove('tertary-color');
    // Descrip
    document.getElementById('title-descrip').classList.remove('font-wh');

    // Label Inputs
    document.getElementById('label-wh-1').classList.remove('font-wh');
    document.getElementById('label-wh-2').classList.remove('font-wh');
    // Inputs
    document.getElementById('input-email').classList.remove('input-dark');
    document.getElementById('show-pass-1').classList.remove('input-dark');

    // Button
    document.getElementById('sing-button').classList.remove('button-dark');
    document.getElementById('sing-button').classList.remove('button-dark');

    // Label Forget
    document.getElementById('forget-label').classList.remove('label-scv');

    // Recover 1 
    document.getElementById('content-modal').classList.remove('bg-dark');
    document.getElementById('head-modal').classList.remove('bg-ic2');
    document.getElementById('title-head-modal').classList.remove('color-dark');

    // Numeros
    document.getElementById('num-1').classList.remove('num-dark-1');
    document.getElementById('h4-1').classList.remove('font-wh');
    document.getElementById('descrip-1').classList.remove('font-wh');
    // Numeros 2
    document.getElementById('num-2').classList.remove('num-dark-2');
    document.getElementById('h4-2').classList.remove('color-dark');
    document.getElementById('descrip-2').classList.remove('color-wh7');
    // h6
    document.getElementById('h6').classList.remove('font-wh');
    // Input
    document.getElementById('modal-label-1').classList.remove('font-wh');
    document.getElementById('modal-input-1').classList.remove('input-dark');

    // Buton Modal
    document.getElementById('send-button').classList.remove('button-dark');


    // Success
    document.getElementById('notify').classList.remove('notify');

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