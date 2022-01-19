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

        // Fieldset
        document.getElementById('fieldset').classList.add('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #141927';
        // Descrip
        document.getElementById('descrip').style.backgroundColor = ICV_200;
        document.getElementById('dark-font').style.color = BCV_500;

        // Select
        document.getElementById('label-dark').style.color = WHCV_500;
        document.getElementById('select-dark-1').classList.add('select-dark');

        // Buttons
        document.getElementById('cancel-dark').classList.add('cancel-button-dark');
        document.getElementById('next-dark').classList.add('next-button-dark');

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

        // Fieldset
        document.getElementById('fieldset').classList.remove('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #F9F9F9';
        // Descrip
        document.getElementById('descrip').style.backgroundColor = ICV_500;
        document.getElementById('dark-font').style.color = WHCV_500;

        // Select
        document.getElementById('label-dark').style.color = BCV_500;
        document.getElementById('select-dark-1').classList.remove('select-dark');

        // Buttons
        document.getElementById('cancel-dark').classList.remove('cancel-button-dark');
        document.getElementById('next-dark').classList.remove('next-button-dark');

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

        // Fieldset
        document.getElementById('fieldset').classList.add('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #141927';
        // Descrip
        document.getElementById('descrip').style.backgroundColor = ICV_200;
        document.getElementById('dark-font').style.color = BCV_500;


        // Select
        document.getElementById('label-dark').style.color = WHCV_500;
        document.getElementById('select-dark-1').classList.add('select-dark');


        // Buttons
        document.getElementById('cancel-dark').classList.add('cancel-button-dark');
        document.getElementById('next-dark').classList.add('next-button-dark');

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


        // Fieldset
        document.getElementById('fieldset').classList.remove('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #F9F9F9';
        // Descrip
        document.getElementById('descrip').style.backgroundColor = ICV_500;
        document.getElementById('dark-font').style.color = WHCV_500;

        // Select
        document.getElementById('label-dark').style.color = BCV_500;
        document.getElementById('select-dark-1').classList.remove('select-dark');

        // Buttons
        document.getElementById('cancel-dark').classList.remove('cancel-button-dark');
        document.getElementById('next-dark').classList.remove('next-button-dark');

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

    // Fieldset
    document.getElementById('fieldset').classList.add('fieldset-dark');
    // Legend
    document.getElementById('legend').style.border = '2px solid #141927';
    // Descrip
    document.getElementById('descrip').style.backgroundColor = ICV_200;
    document.getElementById('dark-font').style.color = BCV_500;


    // Select
    document.getElementById('label-dark').style.color = WHCV_500;
    document.getElementById('select-dark-1').classList.add('select-dark');

    // Buttons
    document.getElementById('cancel-dark').classList.add('cancel-button-dark');
    document.getElementById('next-dark').classList.add('next-button-dark');

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



    // Fieldset
    document.getElementById('fieldset').classList.remove('fieldset-dark');
    // Legend
    document.getElementById('legend').style.border = '2px solid #F9F9F9';
    // Descrip
    document.getElementById('descrip').style.backgroundColor = ICV_500;
    document.getElementById('dark-font').style.color = WHCV_500;


    // Select
    document.getElementById('label-dark').style.color = BCV_500;
    document.getElementById('select-dark-1').classList.remove('select-dark');

    // Buttons
    document.getElementById('cancel-dark').classList.remove('cancel-button-dark');
    document.getElementById('next-dark').classList.remove('next-button-dark');

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