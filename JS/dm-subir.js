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
var WCV_500 = ' #AD9706';
var WCV_200 = ' #DED59B';
var TCV_700 = '#046531';
var SCV_500 = '#F2B90F';
var TCV_500 = '#06A852';
var DCV_200 = '#D6A1B4';
var DCV_500 = '#991344';
var SUCV_500 = '#1AAC54';
var SUCV_200 = '#A3DEBB';
var ICV_200 = '#A1B9DF';
var ICV_500 = '#1550AF';
// #1550AF


// Moon Event 
switchButton.addEventListener('click', () => {
    // Ocultar moon
    switchButton.style.display = 'none';
    // Mostrar sol
    document.getElementById('sol').style.display = 'block';
    // Activamos el darkmode
    document.body.classList.toggle('dark');


    if (localStorage.getItem('Responsivedeploy') == 'true') {
        document.getElementById('menu').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        document.getElementById('header-sec-l').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        // Icons
        document.getElementById('close-icon').style.display = 'none';
        document.getElementById('menu-icon').style.display = 'block';
    }



    if (document.body.classList.contains('dark')) {
        // Agregamos todas las clases necesarias al click
        localStorage.setItem('theme', 'true');

        // check darks
        document.getElementById('contente-check').classList.remove('check');
        document.getElementById('contente-check').classList.add('check-dark');
        document.getElementById('radio').classList.remove('radio__radio');
        document.getElementById('radio').classList.add('radio-dark');



        // Header RDI-dark 
        document.getElementById('header-sec-l').classList.add('menu-dark');
        document.getElementById('dark-header').classList.add('dark');
        document.getElementById('RDI-dark').classList.add('dark');
        document.getElementById('dark-Lhelp').classList.add('dark-font');
        // User
        document.getElementById('user-dark').style.color = PCV_500;
        document.getElementById('up-dark').style.fill = PCV_500;
        document.getElementById('dowm-dark').style.fill = PCV_500;

        // Menu flotante
        document.getElementById('menu').style.backgroundColor = BCV_400;
        document.getElementById('menu').style.border = '3px solid #F9F9F9';
        document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
        // Menu´s Font
        document.getElementById('dark-wh-1').style.color = WHCV_500;
        document.getElementById('dark-wh-2').style.color = WHCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_200;
        // Menu´s Icon
        document.getElementById('icon-dark-perfil').style.fill = WHCV_500;
        document.getElementById('icon-dark-doc').style.fill = WHCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_200;

        // Section
        document.getElementById('head-dark').classList.add('dark-headline');
        document.getElementById('font-dark').classList.add('dark');


        // Steps 
        // Labes
        document.getElementById('label-descrip-1').classList.add('descrip-steps');
        document.getElementById('label-descrip-2').classList.add('descrip-steps');
        document.getElementById('label-descrip-3').classList.add('descrip-steps');
        document.getElementById('label-descrip-4').classList.add('descrip-steps-w');
        document.getElementById('label-descrip-5').classList.add('descrip-steps-w7');
        document.getElementById('label-descrip-6').classList.add('descrip-steps-w7');
        document.getElementById('label-descrip-7').classList.add('descrip-steps-w7');
        // Cuadros
        document.getElementById('cuadro-descrip-1').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-2').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-3').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-4').classList.add('bg-steps-w');
        document.getElementById('cuadro-descrip-5').classList.add('bg-steps-ns');
        document.getElementById('cuadro-descrip-6').classList.add('bg-steps-ns');
        document.getElementById('cuadro-descrip-7').classList.add('bg-steps-ns');
        // Numeros
        document.getElementById('num-cuadro-1').classList.add('color-num');
        document.getElementById('num-cuadro-2').classList.add('color-num');
        document.getElementById('num-cuadro-3').classList.add('color-num');
        document.getElementById('num-cuadro-4').classList.add('color-num-w');
        // Lines
        document.getElementById('line-1').classList.add('lines-select');
        document.getElementById('line-2').classList.add('lines-select');
        document.getElementById('line-3').classList.add('lines-select');
        document.getElementById('line-4').classList.add('lines-select');

        // Legends
        document.getElementById('legend-dark-1').classList.add('legend-drak');
        document.getElementById('legend-dark-2').classList.add('legend-drak');
        // Fieldset
        document.getElementById('fieldset-dark-1').classList.add('fieldset-drak');
        document.getElementById('fieldset-dark-2').classList.add('fieldset-drak');


        // Subir Archivos
        document.getElementById('document-w').classList.add('font-wh');
        document.getElementById('select-docum').classList.add('font-wh');
        document.getElementById('select-docum').classList.add('input-documen-dark');
        document.getElementById('icon-w').classList.add('icon-w');
        // Descipcion De Archivos
        document.getElementById('descrip-w').classList.add('font-wh');
        document.getElementById('input-descrip').classList.add('input-dark');
        document.getElementById('descrip-1').classList.add('infor-ic2');
        // Embargo 
        document.getElementById('embargo-w').classList.add('font-wh');
        document.getElementById('input-dark-2').classList.add('input-dark');
        // Motivo
        document.getElementById('motivo-w').classList.add('font-wh');
        document.getElementById('textarea-dark').classList.add('input-dark');
        document.getElementById('descrip-2').classList.add('infor-ic2');
        // Button ADD
        document.getElementById('button-add').classList.add('border-w');

        // Title
        document.getElementById('title-bc-1').classList.add('color-bc');
        document.getElementById('title-bc-2').classList.add('color-bc');
        document.getElementById('title-bc-3').classList.add('color-bc');
        document.getElementById('title-bc-4').classList.add('color-bc');
        document.getElementById('title-bc-5').classList.add('color-bc');
        // Header Table
        document.getElementById('header-1').classList.add('bg-sc');
        document.getElementById('header-2').classList.add('bg-sc');
        document.getElementById('header-3').classList.add('bg-sc');
        document.getElementById('header-4').classList.add('bg-sc');
        document.getElementById('header-5').classList.add('bg-sc');
        document.getElementById('header-6').classList.add('bg-sc');
        // Button
        document.getElementById('delete-doc').classList.add('border-w');

        // buttons
        document.getElementById('back-button').classList.add('border-w');
        // 
        document.getElementById('save-button').classList.add('button-save');
        // 
        document.getElementById('next-button').classList.add('button-next');

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
        // Header
        document.getElementById('header-sec-l').classList.remove('menu-dark');
        document.getElementById('dark-header').classList.remove('dark');
        document.getElementById('RDI-dark').classList.remove('dark');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');
        // User
        document.getElementById('user-dark').style.color = SCV_500;
        document.getElementById('up-dark').style.fill = SCV_500;
        document.getElementById('dowm-dark').style.fill = SCV_500;

        // Menu flotante
        document.getElementById('menu').style.backgroundColor = WHCV_500;
        document.getElementById('menu').style.border = '3px solid #A4B0C3';
        document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
        // Menu´s Font
        document.getElementById('dark-wh-1').style.color = BCV_500;
        document.getElementById('dark-wh-2').style.color = BCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_500;
        // Menu´s Icon
        document.getElementById('icon-dark-perfil').style.fill = BCV_500;
        document.getElementById('icon-dark-doc').style.fill = BCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_500;

        // Section
        document.getElementById('head-dark').classList.remove('dark-headline');
        document.getElementById('font-dark').classList.remove('dark');

        // Steps 
        // Labes
        document.getElementById('label-descrip-1').classList.remove('descrip-steps');
        document.getElementById('label-descrip-2').classList.remove('descrip-steps');
        document.getElementById('label-descrip-3').classList.remove('descrip-steps');
        document.getElementById('label-descrip-4').classList.remove('descrip-steps-w');
        document.getElementById('label-descrip-5').classList.remove('descrip-steps-w7');
        document.getElementById('label-descrip-6').classList.remove('descrip-steps-w7');
        document.getElementById('label-descrip-7').classList.remove('descrip-steps-w7');
        // Cuadros
        document.getElementById('cuadro-descrip-1').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-2').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-3').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-4').classList.remove('bg-steps-w');
        document.getElementById('cuadro-descrip-5').classList.remove('bg-steps-ns');
        document.getElementById('cuadro-descrip-6').classList.remove('bg-steps-ns');
        document.getElementById('cuadro-descrip-7').classList.remove('bg-steps-ns');
        // Numeros
        document.getElementById('num-cuadro-1').classList.remove('color-num');
        document.getElementById('num-cuadro-2').classList.remove('color-num');
        document.getElementById('num-cuadro-3').classList.remove('color-num');
        document.getElementById('num-cuadro-4').classList.remove('color-num-w');
        // Lines
        document.getElementById('line-1').classList.remove('lines-select');
        document.getElementById('line-2').classList.remove('lines-select');
        document.getElementById('line-3').classList.remove('lines-select');
        document.getElementById('line-4').classList.remove('lines-select');

        // Legends
        document.getElementById('legend-dark-1').classList.remove('legend-drak');
        document.getElementById('legend-dark-2').classList.remove('legend-drak');
        // Fieldset
        document.getElementById('fieldset-dark-1').classList.remove('fieldset-drak');
        document.getElementById('fieldset-dark-2').classList.remove('fieldset-drak');


        // Subir Archivos
        document.getElementById('document-w').classList.remove('font-wh');
        document.getElementById('select-docum').classList.remove('font-wh');
        document.getElementById('select-docum').classList.remove('input-documen-dark');
        document.getElementById('icon-w').classList.remove('icon-w');
        // Descipcion De Archivos
        document.getElementById('descrip-w').classList.remove('font-wh');
        document.getElementById('input-descrip').classList.remove('input-dark');
        document.getElementById('descrip-1').classList.remove('infor-ic2');
        // Embargo 
        document.getElementById('embargo-w').classList.remove('font-wh');
        document.getElementById('input-dark-2').classList.remove('input-dark');
        // Motivo
        document.getElementById('motivo-w').classList.remove('font-wh');
        document.getElementById('textarea-dark').classList.remove('input-dark');
        document.getElementById('descrip-2').classList.remove('infor-ic2');
        // Button ADD
        document.getElementById('button-add').classList.remove('border-w');

        // Title
        document.getElementById('title-bc-1').classList.remove('color-bc');
        document.getElementById('title-bc-2').classList.remove('color-bc');
        document.getElementById('title-bc-3').classList.remove('color-bc');
        document.getElementById('title-bc-4').classList.remove('color-bc');
        document.getElementById('title-bc-5').classList.remove('color-bc');
        // Header Table
        document.getElementById('header-1').classList.remove('bg-sc');
        document.getElementById('header-2').classList.remove('bg-sc');
        document.getElementById('header-3').classList.remove('bg-sc');
        document.getElementById('header-4').classList.remove('bg-sc');
        document.getElementById('header-5').classList.remove('bg-sc');
        document.getElementById('header-6').classList.remove('bg-sc');
        // Button
        document.getElementById('delete-doc').classList.remove('border-w');

        // buttons
        document.getElementById('back-button').classList.remove('border-w');
        // 
        document.getElementById('save-button').classList.remove('button-save');
        // 
        document.getElementById('next-button').classList.remove('button-next');

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




// Sun Event 
switchButton2.addEventListener('click', () => {
    // Ocultar moon
    switchButton.style.display = 'block';
    // Mostrar sol
    document.getElementById('sol').style.display = 'none';
    // Al clic quitamos el darkmode
    document.body.classList.remove('dark');

    if (localStorage.getItem('Responsivedeploy') == 'true') {
        document.getElementById('menu').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        document.getElementById('header-sec-l').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        // Icons
        document.getElementById('close-icon').style.display = 'none';
        document.getElementById('menu-icon').style.display = 'block';
    }


    if (document.body.classList.contains('dark')) {
        // Agregamos todas las clases necesarias al click
        localStorage.setItem('theme', 'true');

        // Header 
        document.getElementById('header-sec-l').classList.add('menu-dark');
        document.getElementById('dark-header').classList.add('dark');
        document.getElementById('RDI-dark').classList.add('dark');
        document.getElementById('dark-Lhelp').classList.add('dark-font');
        // User
        document.getElementById('user-dark').style.color = PCV_500;
        document.getElementById('up-dark').style.fill = PCV_500;
        document.getElementById('dowm-dark').style.fill = PCV_500;

        // Menu flotante
        document.getElementById('menu').style.backgroundColor = BCV_400;
        document.getElementById('menu').style.border = '3px solid #F9F9F9';
        document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
        // Menu´s Font
        document.getElementById('dark-wh-1').style.color = WHCV_500;
        document.getElementById('dark-wh-2').style.color = WHCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_200;
        // Menu´s Icon
        document.getElementById('icon-dark-perfil').style.fill = WHCV_500;
        document.getElementById('icon-dark-doc').style.fill = WHCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_200;

        // Section
        document.getElementById('head-dark').classList.add('dark-headline');
        document.getElementById('font-dark').classList.add('dark');
        // Steps 
        // Labes
        document.getElementById('label-descrip-1').classList.add('descrip-steps');
        document.getElementById('label-descrip-2').classList.add('descrip-steps');
        document.getElementById('label-descrip-3').classList.add('descrip-steps');
        document.getElementById('label-descrip-4').classList.add('descrip-steps-w');
        document.getElementById('label-descrip-5').classList.add('descrip-steps-w7');
        document.getElementById('label-descrip-6').classList.add('descrip-steps-w7');
        document.getElementById('label-descrip-7').classList.add('descrip-steps-w7');
        // Cuadros
        document.getElementById('cuadro-descrip-1').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-2').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-3').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-4').classList.add('bg-steps-w');
        document.getElementById('cuadro-descrip-5').classList.add('bg-steps-ns');
        document.getElementById('cuadro-descrip-6').classList.add('bg-steps-ns');
        document.getElementById('cuadro-descrip-7').classList.add('bg-steps-ns');
        // Numeros
        document.getElementById('num-cuadro-1').classList.add('color-num');
        document.getElementById('num-cuadro-2').classList.add('color-num');
        document.getElementById('num-cuadro-3').classList.add('color-num');
        document.getElementById('num-cuadro-4').classList.add('color-num-w');
        // Lines
        document.getElementById('line-1').classList.add('lines-select');
        document.getElementById('line-2').classList.add('lines-select');
        document.getElementById('line-3').classList.add('lines-select');
        document.getElementById('line-4').classList.add('lines-select');

        // Legends
        document.getElementById('legend-dark-1').classList.add('legend-drak');
        document.getElementById('legend-dark-2').classList.add('legend-drak');
        // Fieldset
        document.getElementById('fieldset-dark-1').classList.add('fieldset-drak');
        document.getElementById('fieldset-dark-2').classList.add('fieldset-drak');


        // Subir Archivos
        document.getElementById('document-w').classList.add('font-wh');
        document.getElementById('select-docum').classList.add('font-wh');
        document.getElementById('select-docum').classList.add('input-documen-dark');
        document.getElementById('icon-w').classList.add('icon-w');
        // Descipcion De Archivos
        document.getElementById('descrip-w').classList.add('font-wh');
        document.getElementById('input-descrip').classList.add('input-dark');
        document.getElementById('descrip-1').classList.add('infor-ic2');
        // Embargo 
        document.getElementById('embargo-w').classList.add('font-wh');
        document.getElementById('input-dark-2').classList.add('input-dark');
        // Motivo
        document.getElementById('motivo-w').classList.add('font-wh');
        document.getElementById('textarea-dark').classList.add('input-dark');
        document.getElementById('descrip-2').classList.add('infor-ic2');
        // Button ADD
        document.getElementById('button-add').classList.add('border-w');

        // Title
        document.getElementById('title-bc-1').classList.add('color-bc');
        document.getElementById('title-bc-2').classList.add('color-bc');
        document.getElementById('title-bc-3').classList.add('color-bc');
        document.getElementById('title-bc-4').classList.add('color-bc');
        document.getElementById('title-bc-5').classList.add('color-bc');
        // Header Table
        document.getElementById('header-1').classList.add('bg-sc');
        document.getElementById('header-2').classList.add('bg-sc');
        document.getElementById('header-3').classList.add('bg-sc');
        document.getElementById('header-4').classList.add('bg-sc');
        document.getElementById('header-5').classList.add('bg-sc');
        document.getElementById('header-6').classList.add('bg-sc');
        // Button
        document.getElementById('delete-doc').classList.add('border-w');

        // buttons
        document.getElementById('back-button').classList.add('border-w');
        // 
        document.getElementById('save-button').classList.add('button-save');
        // 
        document.getElementById('next-button').classList.add('button-next');

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

        // check darks
        document.getElementById('contente-check').classList.remove('check-dark');
        document.getElementById('contente-check').classList.add('check');
        document.getElementById('radio').classList.remove('radio-dark');
        document.getElementById('radio').classList.add('radio__radio');

        // Header
        document.getElementById('header-sec-l').classList.remove('menu-dark');
        document.getElementById('dark-header').classList.remove('dark');
        document.getElementById('RDI-dark').classList.remove('dark');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');
        // User
        document.getElementById('user-dark').style.color = SCV_500;
        document.getElementById('up-dark').style.fill = SCV_500;
        document.getElementById('dowm-dark').style.fill = SCV_500;

        // Menu flotante
        document.getElementById('menu').style.backgroundColor = WHCV_500;
        document.getElementById('menu').style.border = '3px solid #A4B0C3';
        document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
        // Menu´s Font
        document.getElementById('dark-wh-1').style.color = BCV_500;
        document.getElementById('dark-wh-2').style.color = BCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_500;
        // Menu´s Icon
        document.getElementById('icon-dark-perfil').style.fill = BCV_500;
        document.getElementById('icon-dark-doc').style.fill = BCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_500;

        // Section
        document.getElementById('head-dark').classList.remove('dark-headline');
        document.getElementById('font-dark').classList.remove('dark');

        // Steps 
        // Labes
        document.getElementById('label-descrip-1').classList.remove('descrip-steps');
        document.getElementById('label-descrip-2').classList.remove('descrip-steps');
        document.getElementById('label-descrip-3').classList.remove('descrip-steps');
        document.getElementById('label-descrip-4').classList.remove('descrip-steps-w');
        document.getElementById('label-descrip-5').classList.remove('descrip-steps-w7');
        document.getElementById('label-descrip-6').classList.remove('descrip-steps-w7');
        document.getElementById('label-descrip-7').classList.remove('descrip-steps-w7');
        // Cuadros
        document.getElementById('cuadro-descrip-1').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-2').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-3').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-4').classList.remove('bg-steps-w');
        document.getElementById('cuadro-descrip-5').classList.remove('bg-steps-ns');
        document.getElementById('cuadro-descrip-6').classList.remove('bg-steps-ns');
        document.getElementById('cuadro-descrip-7').classList.remove('bg-steps-ns');
        // Numeros
        document.getElementById('num-cuadro-1').classList.remove('color-num');
        document.getElementById('num-cuadro-2').classList.remove('color-num');
        document.getElementById('num-cuadro-3').classList.remove('color-num');
        document.getElementById('num-cuadro-4').classList.remove('color-num-w');
        // Lines
        document.getElementById('line-1').classList.remove('lines-select');
        document.getElementById('line-2').classList.remove('lines-select');
        document.getElementById('line-3').classList.remove('lines-select');
        document.getElementById('line-4').classList.remove('lines-select');

        // Legends
        document.getElementById('legend-dark-1').classList.remove('legend-drak');
        document.getElementById('legend-dark-2').classList.remove('legend-drak');
        // Fieldset
        document.getElementById('fieldset-dark-1').classList.remove('fieldset-drak');
        document.getElementById('fieldset-dark-2').classList.remove('fieldset-drak');


        // Subir Archivos
        document.getElementById('document-w').classList.remove('font-wh');
        document.getElementById('select-docum').classList.remove('font-wh');
        document.getElementById('select-docum').classList.remove('input-documen-dark');
        document.getElementById('icon-w').classList.remove('icon-w');
        // Descipcion De Archivos
        document.getElementById('descrip-w').classList.remove('font-wh');
        document.getElementById('input-descrip').classList.remove('input-dark');
        document.getElementById('descrip-1').classList.remove('infor-ic2');
        // Embargo 
        document.getElementById('embargo-w').classList.remove('font-wh');
        document.getElementById('input-dark-2').classList.remove('input-dark');
        // Motivo
        document.getElementById('motivo-w').classList.remove('font-wh');
        document.getElementById('textarea-dark').classList.remove('input-dark');
        document.getElementById('descrip-2').classList.remove('infor-ic2');
        // Button ADD
        document.getElementById('button-add').classList.remove('border-w');

        // Title
        document.getElementById('title-bc-1').classList.remove('color-bc');
        document.getElementById('title-bc-2').classList.remove('color-bc');
        document.getElementById('title-bc-3').classList.remove('color-bc');
        document.getElementById('title-bc-4').classList.remove('color-bc');
        document.getElementById('title-bc-5').classList.remove('color-bc');
        // Header Table
        document.getElementById('header-1').classList.remove('bg-sc');
        document.getElementById('header-2').classList.remove('bg-sc');
        document.getElementById('header-3').classList.remove('bg-sc');
        document.getElementById('header-4').classList.remove('bg-sc');
        document.getElementById('header-5').classList.remove('bg-sc');
        document.getElementById('header-6').classList.remove('bg-sc');
        // Button
        document.getElementById('delete-doc').classList.remove('border-w');

        // buttons
        document.getElementById('back-button').classList.remove('border-w');
        // 
        document.getElementById('save-button').classList.remove('button-save');
        // 
        document.getElementById('next-button').classList.remove('button-next');

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
});








// Trabajamos el localstorage para que al actualizar no se cambie

if (localStorage.getItem('theme') == 'true') {
    // Ocultar moon
    switchButton.style.display = 'none';
    // Mostrar sol
    document.getElementById('sol').style.display = 'block';
    // Agregamos al cargar valores del localstorage
    document.body.classList.toggle('dark');



    // check darks
    document.getElementById('contente-check').classList.remove('check');
    document.getElementById('contente-check').classList.add('check-dark');
    document.getElementById('radio').classList.remove('radio__radio');
    document.getElementById('radio').classList.add('radio-dark');


    // Header
    document.getElementById('header-sec-l').classList.add('menu-dark');
    document.getElementById('dark-header').classList.add('dark');
    document.getElementById('RDI-dark').classList.add('dark');
    document.getElementById('dark-Lhelp').classList.add('dark-font');
    // User
    document.getElementById('user-dark').style.color = PCV_500;
    document.getElementById('up-dark').style.fill = PCV_500;
    document.getElementById('dowm-dark').style.fill = PCV_500;

    // Menu flotante
    document.getElementById('menu').style.backgroundColor = BCV_400;
    document.getElementById('menu').style.border = '3px solid #F9F9F9';
    document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
    // Menu´s Font
    document.getElementById('dark-wh-1').style.color = WHCV_500;
    document.getElementById('dark-wh-2').style.color = WHCV_500;
    document.getElementById('dark-wh-3').style.color = DCV_200;
    // Menu´s Icon
    document.getElementById('icon-dark-perfil').style.fill = WHCV_500;
    document.getElementById('icon-dark-doc').style.fill = WHCV_500;
    document.getElementById('icon-dark-close').style.fill = DCV_200;

    // Section
    document.getElementById('head-dark').classList.add('dark-headline');
    document.getElementById('font-dark').classList.add('dark');

    // Steps 
    // Labes
    document.getElementById('label-descrip-1').classList.add('descrip-steps');
    document.getElementById('label-descrip-2').classList.add('descrip-steps');
    document.getElementById('label-descrip-3').classList.add('descrip-steps');
    document.getElementById('label-descrip-4').classList.add('descrip-steps-w');
    document.getElementById('label-descrip-5').classList.add('descrip-steps-w7');
    document.getElementById('label-descrip-6').classList.add('descrip-steps-w7');
    document.getElementById('label-descrip-7').classList.add('descrip-steps-w7');
    // Cuadros
    document.getElementById('cuadro-descrip-1').classList.add('bg-steps');
    document.getElementById('cuadro-descrip-2').classList.add('bg-steps');
    document.getElementById('cuadro-descrip-3').classList.add('bg-steps');
    document.getElementById('cuadro-descrip-4').classList.add('bg-steps-w');
    document.getElementById('cuadro-descrip-5').classList.add('bg-steps-ns');
    document.getElementById('cuadro-descrip-6').classList.add('bg-steps-ns');
    document.getElementById('cuadro-descrip-7').classList.add('bg-steps-ns');
    // Numeros
    document.getElementById('num-cuadro-1').classList.add('color-num');
    document.getElementById('num-cuadro-2').classList.add('color-num');
    document.getElementById('num-cuadro-3').classList.add('color-num');
    document.getElementById('num-cuadro-4').classList.add('color-num-w');
    // Lines
    document.getElementById('line-1').classList.add('lines-select');
    document.getElementById('line-2').classList.add('lines-select');
    document.getElementById('line-3').classList.add('lines-select');
    document.getElementById('line-4').classList.add('lines-select');

    // Legends
    document.getElementById('legend-dark-1').classList.add('legend-drak');
    document.getElementById('legend-dark-2').classList.add('legend-drak');
    // Fieldset
    document.getElementById('fieldset-dark-1').classList.add('fieldset-drak');
    document.getElementById('fieldset-dark-2').classList.add('fieldset-drak');


    // Subir Archivos
    document.getElementById('document-w').classList.add('font-wh');
    document.getElementById('select-docum').classList.add('font-wh');
    document.getElementById('select-docum').classList.add('input-documen-dark');
    document.getElementById('icon-w').classList.add('icon-w');
    // Descipcion De Archivos
    document.getElementById('descrip-w').classList.add('font-wh');
    document.getElementById('input-descrip').classList.add('input-dark');
    document.getElementById('descrip-1').classList.add('infor-ic2');
    // Embargo 
    document.getElementById('embargo-w').classList.add('font-wh');
    document.getElementById('input-dark-2').classList.add('input-dark');
    // Motivo
    document.getElementById('motivo-w').classList.add('font-wh');
    document.getElementById('textarea-dark').classList.add('input-dark');
    document.getElementById('descrip-2').classList.add('infor-ic2');
    // Button ADD
    document.getElementById('button-add').classList.add('border-w');

    // Title
    document.getElementById('title-bc-1').classList.add('color-bc');
    document.getElementById('title-bc-2').classList.add('color-bc');
    document.getElementById('title-bc-3').classList.add('color-bc');
    document.getElementById('title-bc-4').classList.add('color-bc');
    document.getElementById('title-bc-5').classList.add('color-bc');
    // Header Table
    document.getElementById('header-1').classList.add('bg-sc');
    document.getElementById('header-2').classList.add('bg-sc');
    document.getElementById('header-3').classList.add('bg-sc');
    document.getElementById('header-4').classList.add('bg-sc');
    document.getElementById('header-5').classList.add('bg-sc');
    document.getElementById('header-6').classList.add('bg-sc');
    // Button
    document.getElementById('delete-doc').classList.add('border-w');

    // buttons
    document.getElementById('back-button').classList.add('border-w');
    // 
    document.getElementById('save-button').classList.add('button-save');
    // 
    document.getElementById('next-button').classList.add('button-next');



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


    // check darks
    document.getElementById('contente-check').classList.remove('check-dark');
    document.getElementById('contente-check').classList.add('check');
    document.getElementById('radio').classList.remove('radio-dark');
    document.getElementById('radio').classList.add('radio__radio');


    // Header
    document.getElementById('header-sec-l').classList.add('menu-dark');
    document.getElementById('dark-header').classList.remove('dark');
    document.getElementById('RDI-dark').classList.remove('dark');
    document.getElementById('dark-Lhelp').classList.remove('dark-font');
    // User
    document.getElementById('user-dark').style.color = SCV_500;
    document.getElementById('up-dark').style.fill = SCV_500;
    document.getElementById('dowm-dark').style.fill = SCV_500;

    // Menu flotante
    document.getElementById('menu').style.backgroundColor = WHCV_500;
    document.getElementById('menu').style.border = '3px solid #A4B0C3';
    document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
    // Menu´s Font
    document.getElementById('dark-wh-1').style.color = BCV_500;
    document.getElementById('dark-wh-2').style.color = BCV_500;
    document.getElementById('dark-wh-3').style.color = DCV_500;
    // Menu´s Icon
    document.getElementById('icon-dark-perfil').style.fill = BCV_500;
    document.getElementById('icon-dark-doc').style.fill = BCV_500;
    document.getElementById('icon-dark-close').style.fill = DCV_500;


    // Steps 
    // Labes
    document.getElementById('label-descrip-1').classList.remove('descrip-steps');
    document.getElementById('label-descrip-2').classList.remove('descrip-steps');
    document.getElementById('label-descrip-3').classList.remove('descrip-steps');
    document.getElementById('label-descrip-4').classList.remove('descrip-steps-w');
    document.getElementById('label-descrip-5').classList.remove('descrip-steps-w7');
    document.getElementById('label-descrip-6').classList.remove('descrip-steps-w7');
    document.getElementById('label-descrip-7').classList.remove('descrip-steps-w7');
    // Cuadros
    document.getElementById('cuadro-descrip-1').classList.remove('bg-steps');
    document.getElementById('cuadro-descrip-2').classList.remove('bg-steps');
    document.getElementById('cuadro-descrip-3').classList.remove('bg-steps');
    document.getElementById('cuadro-descrip-4').classList.remove('bg-steps-w');
    document.getElementById('cuadro-descrip-5').classList.remove('bg-steps-ns');
    document.getElementById('cuadro-descrip-6').classList.remove('bg-steps-ns');
    document.getElementById('cuadro-descrip-7').classList.remove('bg-steps-ns');
    // Numeros
    document.getElementById('num-cuadro-1').classList.remove('color-num');
    document.getElementById('num-cuadro-2').classList.remove('color-num');
    document.getElementById('num-cuadro-3').classList.remove('color-num');
    document.getElementById('num-cuadro-4').classList.remove('color-num-w');
    // Lines
    document.getElementById('line-1').classList.remove('lines-select');
    document.getElementById('line-2').classList.remove('lines-select');
    document.getElementById('line-3').classList.remove('lines-select');
    document.getElementById('line-4').classList.remove('lines-select');

    // Legends
    document.getElementById('legend-dark-1').classList.remove('legend-drak');
    document.getElementById('legend-dark-2').classList.remove('legend-drak');
    // Fieldset
    document.getElementById('fieldset-dark-1').classList.remove('fieldset-drak');
    document.getElementById('fieldset-dark-2').classList.remove('fieldset-drak');


    // Subir Archivos
    document.getElementById('document-w').classList.remove('font-wh');
    document.getElementById('select-docum').classList.remove('font-wh');
    document.getElementById('select-docum').classList.remove('input-documen-dark');
    document.getElementById('icon-w').classList.remove('icon-w');
    // Descipcion De Archivos
    document.getElementById('descrip-w').classList.remove('font-wh');
    document.getElementById('input-descrip').classList.remove('input-dark');
    document.getElementById('descrip-1').classList.remove('infor-ic2');
    // Embargo 
    document.getElementById('embargo-w').classList.remove('font-wh');
    document.getElementById('input-dark-2').classList.remove('input-dark');
    // Motivo
    document.getElementById('motivo-w').classList.remove('font-wh');
    document.getElementById('textarea-dark').classList.remove('input-dark');
    document.getElementById('descrip-2').classList.remove('infor-ic2');
    // Button ADD
    document.getElementById('button-add').classList.remove('border-w');

    // Title
    document.getElementById('title-bc-1').classList.remove('color-bc');
    document.getElementById('title-bc-2').classList.remove('color-bc');
    document.getElementById('title-bc-3').classList.remove('color-bc');
    document.getElementById('title-bc-4').classList.remove('color-bc');
    document.getElementById('title-bc-5').classList.remove('color-bc');
    // Header Table
    document.getElementById('header-1').classList.remove('bg-sc');
    document.getElementById('header-2').classList.remove('bg-sc');
    document.getElementById('header-3').classList.remove('bg-sc');
    document.getElementById('header-4').classList.remove('bg-sc');
    document.getElementById('header-5').classList.remove('bg-sc');
    document.getElementById('header-6').classList.remove('bg-sc');
    // Button
    document.getElementById('delete-doc').classList.remove('border-w');

    // buttons
    document.getElementById('back-button').classList.remove('border-w');
    // 
    document.getElementById('save-button').classList.remove('button-save');
    // 
    document.getElementById('next-button').classList.remove('button-next');


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