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

        // Cambiar Checkbox
        document.getElementById('contente-check').classList.remove('check');
        document.getElementById('contente-check').classList.add('check-dark');
        // Label Check
        document.getElementById('LCheck-1').style.color = WHCV_500;


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
        // Posición Actual
        document.getElementById('number-1').style.color = BCV_500;
        // No Seleccionados Numbers
        document.getElementById('number-2').style.color = BCV_500;
        document.getElementById('number-3').style.color = WHCV_500;
        document.getElementById('number-4').style.color = BCV_500;
        document.getElementById('number-5').style.color = BCV_500;
        document.getElementById('number-6').style.color = BCV_500;
        document.getElementById('number-7').style.color = BCV_500;
        // Cuadros Not Select
        document.getElementById('cuadro-1').style.border = '3px solid #A1B9DF';
        document.getElementById('cuadro-2').style.border = '3px solid #A1B9DF';
        document.getElementById('cuadro-3').style.border = '3px solid #A1B9DF';
        document.getElementById('cuadro-4').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-5').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-6').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-7').style.border = '3px solid #F9F9F9';
        // Cuadros Not Select BG
        document.getElementById('cuadro-1').style.backgroundColor = PCV_200;
        document.getElementById('cuadro-2').style.backgroundColor = PCV_200;
        document.getElementById('cuadro-3').style.backgroundColor = BCV_500;
        document.getElementById('cuadro-4').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-5').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-6').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-7').style.backgroundColor = BCV_200;
        // Font Descrip
        document.getElementById('font-desc-1').style.color = ICV_200;
        document.getElementById('font-desc-2').style.color = ICV_200;
        document.getElementById('font-desc-3').style.color = WHCV_500;
        document.getElementById('font-desc-4').style.color = WHCV_700;
        document.getElementById('font-desc-5').style.color = WHCV_700;
        document.getElementById('font-desc-6').style.color = WHCV_700;
        document.getElementById('font-desc-7').style.color = WHCV_700;
        // Line
        document.getElementById('line-1').style.stroke = '#A1B9DF';
        document.getElementById('line-2').style.stroke = '#A1B9DF';
        document.getElementById('line-3').style.stroke = '#A1B9DF';


        // Fieldset
        // Body and Border
        document.getElementById('fieldset-dark-1').classList.add('fieldset-dark');
        document.getElementById('fieldset-dark-2').classList.add('fieldset-dark');
        // Legend
        document.getElementById('lengend-dark-1').style.border = '2px solid #0C0F17';
        document.getElementById('lengend-dark-2').style.border = '2px solid #0C0F17';

        // Ajustes de acceso
        document.getElementById('item-priv-dark').style.color = WHCV_500;
        document.getElementById('descrip-dark-1').style.backgroundColor = WCV_200;
        // document.getElementById('acept-dark').style.color = WHCV_500;

        // Embargo
        document.getElementById('label-date').style.color = WHCV_500;
        document.getElementById('input-dark-1').classList.add('input-dark');
        // Motivo de 
        document.getElementById('label-motivo').style.color = WHCV_500;
        document.getElementById('textarea-dark').classList.add('texta-dark');
        document.getElementById('label-descrip').style.color = PCV_200;

        // buttons
        document.getElementById('back-button').style.border = '1px solid #F9F9F9';
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
        // Label 
        document.getElementById('LCheck-1').style.color = BCV_500;

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
        // Posición Actual
        document.getElementById('number-1').style.color = WHCV_500;
        // No Seleccionados Numbers
        document.getElementById('number-2').style.color = WHCV_500;
        document.getElementById('number-3').style.color = BCV_500;
        // Cuadros Not Select
        document.getElementById('cuadro-1').style.border = '3px solid #1550AF';
        document.getElementById('cuadro-2').style.border = '3px solid #1550AF';
        document.getElementById('cuadro-3').style.border = '3px solid #1550AF';

        // Cuadros Not Select BG
        document.getElementById('cuadro-1').style.backgroundColor = ICV_500;
        document.getElementById('cuadro-2').style.backgroundColor = ICV_500;
        document.getElementById('cuadro-3').style.backgroundColor = WHCV_500;

        // Font Descrip
        document.getElementById('font-desc-1').style.color = ICV_500;
        document.getElementById('font-desc-2').style.color = ICV_500;
        document.getElementById('font-desc-3').style.color = BCV_500;

        // Line
        document.getElementById('line-1').style.stroke = '#1550AF';
        document.getElementById('line-2').style.stroke = '#1550AF';
        document.getElementById('line-3').style.stroke = '#A1B9DF';

        // Fieldset
        // Body and Border
        document.getElementById('fieldset-dark-1').classList.remove('fieldset-dark');
        document.getElementById('fieldset-dark-2').classList.remove('fieldset-dark');
        // Legend
        document.getElementById('lengend-dark-1').style.border = '2px solid #F9F9F9';
        document.getElementById('lengend-dark-2').style.border = '2px solid #F9F9F9';

        // Ajustes de acceso
        document.getElementById('item-priv-dark').style.color = BCV_500;
        document.getElementById('descrip-dark-1').style.backgroundColor = WCV_500;
        document.getElementById('acept-dark').style.color = BCV_500;

        // Embargo
        document.getElementById('label-date').style.color = BCV_500;
        document.getElementById('input-dark-1').classList.remove('input-dark');
        // Motivo de 
        document.getElementById('label-motivo').style.color = BCV_500;
        document.getElementById('textarea-dark').classList.remove('texta-dark');
        document.getElementById('label-descrip').style.color = PCV_500;

        // Icons Menu
        document.getElementById('icon-menu-dark').classList.remove('dark-fill');
        document.getElementById('close-menu-dark').classList.remove('dark-fill');

        // buttons
        document.getElementById('back-button').style.border = '1px solid #141927';
        // 
        document.getElementById('save-button').classList.remove('button-save');
        // 
        document.getElementById('next-button').classList.remove('button-next');

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

        // Cambiar Checkbox
        document.getElementById('contente-check').classList.remove('check');
        document.getElementById('contente-check').classList.add('check-dark');
        // Labels
        document.getElementById('LCheck-1').style.color = WHCV_500;
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
        // Posición Actual
        document.getElementById('number-1').style.color = BCV_500;
        // No Seleccionados Numbers
        document.getElementById('number-2').style.color = BCV_500;
        document.getElementById('number-3').style.color = WHCV_500;
        document.getElementById('number-4').style.color = BCV_500;
        document.getElementById('number-5').style.color = BCV_500;
        document.getElementById('number-6').style.color = BCV_500;
        document.getElementById('number-7').style.color = BCV_500;
        // Cuadros Not Select
        document.getElementById('cuadro-1').style.border = '3px solid #A1B9DF';
        document.getElementById('cuadro-2').style.border = '3px solid #A1B9DF';
        document.getElementById('cuadro-3').style.border = '3px solid #A1B9DF';
        document.getElementById('cuadro-4').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-5').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-6').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-7').style.border = '3px solid #F9F9F9';
        // Cuadros Not Select BG
        document.getElementById('cuadro-1').style.backgroundColor = PCV_200;
        document.getElementById('cuadro-2').style.backgroundColor = PCV_200;
        document.getElementById('cuadro-3').style.backgroundColor = BCV_500;
        document.getElementById('cuadro-4').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-5').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-6').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-7').style.backgroundColor = BCV_200;
        // Font Descrip
        document.getElementById('font-desc-1').style.color = ICV_200;
        document.getElementById('font-desc-2').style.color = ICV_200;
        document.getElementById('font-desc-3').style.color = WHCV_500;
        document.getElementById('font-desc-4').style.color = WHCV_700;
        document.getElementById('font-desc-5').style.color = WHCV_700;
        document.getElementById('font-desc-6').style.color = WHCV_700;
        document.getElementById('font-desc-7').style.color = WHCV_700;
        // Line
        document.getElementById('line-1').style.stroke = '#A1B9DF';
        document.getElementById('line-2').style.stroke = '#A1B9DF';
        document.getElementById('line-3').style.stroke = '#A1B9DF';

        // Fieldset
        // Body and Border
        document.getElementById('fieldset-dark-1').classList.add('fieldset-dark');
        document.getElementById('fieldset-dark-2').classList.add('fieldset-dark');
        // Legend
        document.getElementById('lengend-dark-1').style.border = '2px solid #0C0F17';
        document.getElementById('lengend-dark-2').style.border = '2px solid #0C0F17';

        // Ajustes de acceso
        document.getElementById('item-priv-dark').style.color = WHCV_500;
        document.getElementById('descrip-dark-1').style.backgroundColor = WCV_200;
        document.getElementById('acept-dark').style.color = WHCV_500;

        // Embargo
        document.getElementById('label-date').style.color = WHCV_500;
        document.getElementById('input-dark-1').classList.add('input-dark');
        // Motivo de 
        document.getElementById('label-motivo').style.color = WHCV_500;
        document.getElementById('textarea-dark').classList.add('texta-dark');
        document.getElementById('label-descrip').style.color = PCV_200;


        // buttons
        document.getElementById('back-button').style.border = '1px solid #F9F9F9';
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

        // Cambiar checkbox
        document.getElementById('contente-check').classList.remove('check-dark');
        document.getElementById('contente-check').classList.add('check');
        // Labels
        document.getElementById('LCheck-1').style.color = BCV_500;


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
        // Posición Actual
        document.getElementById('number-1').style.color = WHCV_500;
        // No Seleccionados Numbers
        document.getElementById('number-2').style.color = WHCV_500;
        document.getElementById('number-3').style.color = BCV_500;
        // Cuadros Not Select
        document.getElementById('cuadro-1').style.border = '3px solid #1550AF';
        document.getElementById('cuadro-2').style.border = '3px solid #1550AF';
        document.getElementById('cuadro-3').style.border = '3px solid #1550AF';

        // Cuadros Not Select BG
        document.getElementById('cuadro-1').style.backgroundColor = ICV_500;
        document.getElementById('cuadro-2').style.backgroundColor = ICV_500;
        document.getElementById('cuadro-3').style.backgroundColor = WHCV_500;

        // Font Descrip
        document.getElementById('font-desc-1').style.color = ICV_500;
        document.getElementById('font-desc-2').style.color = ICV_500;
        document.getElementById('font-desc-3').style.color = BCV_500;

        // Line
        document.getElementById('line-1').style.stroke = '#1550AF';
        document.getElementById('line-2').style.stroke = '#1550AF';
        document.getElementById('line-3').style.stroke = '#A1B9DF';

        // Cuadros Not Select
        document.getElementById('cuadro-4').style.border = '3px solid #141927';
        document.getElementById('cuadro-5').style.border = '3px solid #141927';
        document.getElementById('cuadro-6').style.border = '3px solid #141927';
        document.getElementById('cuadro-7').style.border = '3px solid #141927';
        // Cuadros Not Select BG
        document.getElementById('cuadro-4').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-5').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-6').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-7').style.backgroundColor = ICV_200;


        // Fieldset
        // Body and Border
        document.getElementById('fieldset-dark-1').classList.remove('fieldset-dark');
        document.getElementById('fieldset-dark-2').classList.remove('fieldset-dark');
        // Legend
        document.getElementById('lengend-dark-1').style.border = '2px solid #F9F9F9';
        document.getElementById('lengend-dark-2').style.border = '2px solid #F9F9F9';

        // Ajustes de acceso
        document.getElementById('item-priv-dark').style.color = BCV_500;
        document.getElementById('descrip-dark-1').style.backgroundColor = WCV_500;
        // document.getElementById('acept-dark').style.color = BCV_500;

        // Embargo
        document.getElementById('label-date').style.color = BCV_500;
        document.getElementById('input-dark-1').classList.remove('input-dark');
        // Motivo de 
        document.getElementById('label-motivo').style.color = BCV_500;
        document.getElementById('textarea-dark').classList.remove('texta-dark');
        document.getElementById('label-descrip').style.color = PCV_500;

        // buttons
        document.getElementById('back-button').style.border = '1px solid #141927';
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








// Trabajamos el localstorage para que al actualizar no se cambie

if (localStorage.getItem('theme') == 'true') {
    // Ocultar moon
    switchButton.style.display = 'none';
    // Mostrar sol
    document.getElementById('sol').style.display = 'block';
    // Agregamos al cargar valores del localstorage
    document.body.classList.toggle('dark');

    // Cambiar Checkbox
    document.getElementById('contente-check').classList.remove('check');
    document.getElementById('contente-check').classList.add('check-dark');
    // Labels
    document.getElementById('LCheck-1').style.color = WHCV_500;


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
    // Posición Actual
    document.getElementById('number-1').style.color = BCV_500;
    // No Seleccionados Numbers
    document.getElementById('number-2').style.color = BCV_500;
    document.getElementById('number-3').style.color = WHCV_500;
    document.getElementById('number-4').style.color = BCV_500;
    document.getElementById('number-5').style.color = BCV_500;
    document.getElementById('number-6').style.color = BCV_500;
    document.getElementById('number-7').style.color = BCV_500;
    // Cuadros Not Select
    document.getElementById('cuadro-1').style.border = '3px solid #A1B9DF';
    document.getElementById('cuadro-2').style.border = '3px solid #A1B9DF';
    document.getElementById('cuadro-3').style.border = '3px solid #A1B9DF';
    document.getElementById('cuadro-4').style.border = '3px solid #F9F9F9';
    document.getElementById('cuadro-5').style.border = '3px solid #F9F9F9';
    document.getElementById('cuadro-6').style.border = '3px solid #F9F9F9';
    document.getElementById('cuadro-7').style.border = '3px solid #F9F9F9';
    // Cuadros Not Select BG
    document.getElementById('cuadro-1').style.backgroundColor = PCV_200;
    document.getElementById('cuadro-2').style.backgroundColor = PCV_200;
    document.getElementById('cuadro-3').style.backgroundColor = BCV_500;
    document.getElementById('cuadro-4').style.backgroundColor = BCV_200;
    document.getElementById('cuadro-5').style.backgroundColor = BCV_200;
    document.getElementById('cuadro-6').style.backgroundColor = BCV_200;
    document.getElementById('cuadro-7').style.backgroundColor = BCV_200;
    // Font Descrip
    document.getElementById('font-desc-1').style.color = ICV_200;
    document.getElementById('font-desc-2').style.color = ICV_200;
    document.getElementById('font-desc-3').style.color = WHCV_500;
    document.getElementById('font-desc-4').style.color = WHCV_700;
    document.getElementById('font-desc-5').style.color = WHCV_700;
    document.getElementById('font-desc-6').style.color = WHCV_700;
    document.getElementById('font-desc-7').style.color = WHCV_700;
    // Line
    document.getElementById('line-1').style.stroke = '#A1B9DF';
    document.getElementById('line-2').style.stroke = '#A1B9DF';
    document.getElementById('line-3').style.stroke = '#A1B9DF';



    // Fieldset
    // Body and Border
    document.getElementById('fieldset-dark-1').classList.add('fieldset-dark');
    document.getElementById('fieldset-dark-2').classList.add('fieldset-dark');
    // Legend
    document.getElementById('lengend-dark-1').style.border = '2px solid #141927';
    document.getElementById('lengend-dark-2').style.border = '2px solid #141927';


    // Ajustes de acceso
    document.getElementById('item-priv-dark').style.color = WHCV_500;
    document.getElementById('descrip-dark-1').style.backgroundColor = WCV_200;
    // document.getElementById('acept-dark').style.color = WHCV_500;

    // Embargo
    document.getElementById('label-date').style.color = WHCV_500;
    document.getElementById('input-dark-1').classList.add('input-dark');
    // Motivo de 
    document.getElementById('label-motivo').style.color = WHCV_500;
    document.getElementById('textarea-dark').classList.add('texta-dark');
    document.getElementById('label-descrip').style.color = PCV_200;

    // buttons
    document.getElementById('back-button').style.border = '1px solid #F9F9F9';
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

    // Cambiar checkbox
    document.getElementById('contente-check').classList.remove('check-dark');
    document.getElementById('contente-check').classList.add('check');
    // Labels
    document.getElementById('LCheck-1').style.color = BCV_500;

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
    // Posición Actual
    document.getElementById('number-1').style.color = WHCV_500;
    // No Seleccionados Numbers
    document.getElementById('number-2').style.color = WHCV_500;
    document.getElementById('number-3').style.color = BCV_500;
    // Cuadros Not Select
    document.getElementById('cuadro-1').style.border = '3px solid #1550AF';
    document.getElementById('cuadro-2').style.border = '3px solid #1550AF';
    document.getElementById('cuadro-3').style.border = '3px solid #1550AF';

    // Cuadros Not Select BG
    document.getElementById('cuadro-1').style.backgroundColor = ICV_500;
    document.getElementById('cuadro-2').style.backgroundColor = ICV_500;
    document.getElementById('cuadro-3').style.backgroundColor = WHCV_500;

    // Font Descrip
    document.getElementById('font-desc-1').style.color = ICV_500;
    document.getElementById('font-desc-2').style.color = ICV_500;
    document.getElementById('font-desc-3').style.color = BCV_500;

    // Line
    document.getElementById('line-1').style.stroke = '#1550AF';
    document.getElementById('line-2').style.stroke = '#1550AF';
    document.getElementById('line-3').style.stroke = '#A1B9DF';

    // Fieldset
    // Body and Border
    document.getElementById('fieldset-dark-1').classList.remove('fieldset-dark');
    document.getElementById('fieldset-dark-2').classList.remove('fieldset-dark');
    // Legend
    document.getElementById('lengend-dark-1').style.border = '2px solid #F9F9F9';
    document.getElementById('lengend-dark-2').style.border = '2px solid #F9F9F9';

    // Ajustes de acceso
    document.getElementById('item-priv-dark').style.color = BCV_500;
    document.getElementById('descrip-dark-1').style.backgroundColor = WCV_500;
    // document.getElementById('acept-dark').style.color = BCV_500;

    // Embargo
    document.getElementById('label-date').style.color = BCV_500;
    document.getElementById('input-dark-1').classList.remove('input-dark');
    // Motivo de 
    document.getElementById('label-motivo').style.color = BCV_500;
    document.getElementById('textarea-dark').classList.remove('texta-dark');
    document.getElementById('label-descrip').style.color = PCV_500;


    // buttons
    document.getElementById('back-button').style.border = '1px solid #141927';
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