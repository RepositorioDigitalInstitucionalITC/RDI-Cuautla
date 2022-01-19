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

        // Cambiar Checkbox
        document.getElementById('contente-check').classList.remove('check');
        document.getElementById('contente-check').classList.add('check-dark');
        document.getElementById('contente-check-2').classList.remove('check');
        document.getElementById('contente-check-2').classList.add('check-dark');
        document.getElementById('contente-check-3').classList.remove('check');
        document.getElementById('contente-check-3').classList.add('check-dark');

        // Dark mode Label
        document.getElementById('LCheck-1').classList.add('list-wh');
        document.getElementById('LCheck-2').classList.add('list-wh');
        document.getElementById('LCheck-3').classList.add('list-wh');


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
        document.getElementById('head-dark').classList.add('dark-background');
        document.getElementById('font-wh').style.color = BCV_500;

        // Fieldset
        document.getElementById('fieldset-dark').classList.add('border-bg-dark');
        // Legend
        document.getElementById('legend').classList.add('border-black');
        // Labels
        document.getElementById('label-wh-1').style.color = WHCV_500;
        document.getElementById('label-wh-2').style.color = WHCV_500;
        document.getElementById('label-wh-3').style.color = WHCV_500;
        document.getElementById('label-wh-4').style.color = WHCV_500;
        document.getElementById('label-wh-5').style.color = WHCV_500;
        // Inputs
        document.getElementById('input-dark-1').classList.add('input-dark');
        document.getElementById('input-dark-2').classList.add('input-dark');
        document.getElementById('input-dark-3-1').classList.add('input-dark');
        document.getElementById('input-dark-4-1').classList.add('input-dark');
        document.getElementById('input-dark-5').classList.add('input-dark');

        // Password
        document.getElementById('show-pass-1').classList.add('input-dark');
        document.getElementById('show-pass-2').classList.add('input-dark');

        // Icons Menu
        document.getElementById('icon-menu-dark').classList.add('dark-fill');
        document.getElementById('close-menu-dark').classList.add('dark-fill');





        // Fieldset ========================= 2
        document.getElementById('fieldset-dark-1').classList.add('border-bg-dark');
        // Legend
        document.getElementById('legend-1').classList.add('border-black');
        // Description
        document.getElementById('descrip').style.backgroundColor = ICV_200;
        // Font
        document.getElementById('font-bc1').style.color = BCV_500;
        // Label
        document.getElementById('label-susc-1').style.color = WHCV_500;
        // Select
        document.getElementById('select-drak-1').classList.add('input-dark');
        // Add 
        document.getElementById('add-1').style.fill = SUCV_200;

        // Remove Button
        document.getElementById('remove-button').classList.add('border-wh4');

        // Fieldset ========================= 3
        document.getElementById('fieldset-dark-2').classList.add('border-bg-dark');
        // Legend
        document.getElementById('legend-2').classList.add('border-black');
        // Label Key
        document.getElementById('new-key-1').style.color = WHCV_500;
        document.getElementById('new-key-2').style.color = WHCV_500;
        // Description
        document.getElementById('descrip-1').style.backgroundColor = ICV_200;
        // Font
        document.getElementById('font-bc1-1').style.color = BCV_500;
        // Lists
        document.getElementById('list-wh-1').style.color = WHCV_500;
        document.getElementById('list-wh-2').style.color = WHCV_500;
        document.getElementById('list-wh-3').style.color = WHCV_500;
        document.getElementById('list-wh-4').style.color = WHCV_500;
        document.getElementById('list-wh-5').style.color = WHCV_500;
        document.getElementById('list-wh-6').style.color = WHCV_500;

        // Button Save
        document.getElementById('save-change').classList.add('button-save');

        // Fieldset ========================= 4
        document.getElementById('fieldset-dark-3').classList.add('border-bg-dark');
        // Legend
        document.getElementById('legend-3').classList.add('border-black');
        // Description
        document.getElementById('descrip-2').style.backgroundColor = ICV_200;
        // Font
        document.getElementById('font-bc1-2').style.color = BCV_500;

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

        // Dark mode Label
        document.getElementById('LCheck-1').classList.remove('list-wh');
        document.getElementById('LCheck-2').classList.remove('list-wh');
        document.getElementById('LCheck-3').classList.remove('list-wh');


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
        document.getElementById('menu').style.backgroundColor = BCV_400;
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
        document.getElementById('head-dark').classList.remove('dark-background');
        document.getElementById('font-wh').style.color = WHCV_500;

        // Fieldset
        document.getElementById('fieldset-dark').classList.remove('border-bg-dark');
        // Legend
        document.getElementById('legend').classList.remove('border-black');
        // Labels
        document.getElementById('label-wh-1').style.color = BCV_500;
        document.getElementById('label-wh-2').style.color = BCV_500;
        document.getElementById('label-wh-3').style.color = BCV_500;
        document.getElementById('label-wh-4').style.color = BCV_500;
        document.getElementById('label-wh-5').style.color = BCV_500;
        // Inputs
        document.getElementById('input-dark-1').classList.remove('input-dark');
        document.getElementById('input-dark-2').classList.remove('input-dark');
        document.getElementById('input-dark-3-1').classList.remove('input-dark');
        document.getElementById('input-dark-4').classList.remove('input-dark');
        document.getElementById('input-dark-4-1').classList.remove('input-dark');
        document.getElementById('input-dark-5').classList.remove('input-dark');


        // Fieldset ========================= 2
        document.getElementById('fieldset-dark-1').classList.remove('border-bg-dark');
        // Legend
        document.getElementById('legend-1').classList.remove('border-black');
        // Description
        document.getElementById('descrip').style.backgroundColor = ICV_500;
        // Font
        document.getElementById('font-bc1').style.color = WHCV_500;
        // Label
        document.getElementById('label-susc-1').style.color = BCV_500;
        // Select
        document.getElementById('select-drak-1').classList.remove('input-dark');
        // Add 
        document.getElementById('add-1').style.fill = SUCV_500;
        // Remove Button
        document.getElementById('remove-button').classList.remove('border-wh4');

        // Fieldset ========================= 3
        document.getElementById('fieldset-dark-2').classList.remove('border-bg-dark');
        // Legend
        document.getElementById('legend-2').classList.remove('border-black');
        // Label Key
        document.getElementById('new-key-1').style.color = BCV_500;
        document.getElementById('new-key-2').style.color = BCV_500;
        // Description
        document.getElementById('descrip-1').style.backgroundColor = ICV_500;
        // Font
        document.getElementById('font-bc1-1').style.color = WHCV_500;


        // Fieldset ========================= 4
        document.getElementById('fieldset-dark-3').classList.remove('border-bg-dark');
        // Legend
        document.getElementById('legend-3').classList.remove('border-black');
        // Description
        document.getElementById('descrip-2').style.backgroundColor = ICV_500;
        // Font
        document.getElementById('font-bc1-2').style.color = WHCV_500;
        // Lists
        document.getElementById('list-wh-1').style.color = BCV_500;
        document.getElementById('list-wh-2').style.color = BCV_500;
        document.getElementById('list-wh-3').style.color = BCV_500;
        document.getElementById('list-wh-4').style.color = BCV_500;
        document.getElementById('list-wh-5').style.color = BCV_500;
        document.getElementById('list-wh-6').style.color = BCV_500;


        // Button Save
        document.getElementById('save-change').classList.remove('button-save');

        // Password
        document.getElementById('show-pass-1').classList.remove('input-dark');
        document.getElementById('show-pass-2').classList.remove('input-dark');

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


        // Cambiar Checkbox
        document.getElementById('contente-check').classList.remove('check');
        document.getElementById('contente-check').classList.add('check-dark');
        document.getElementById('contente-check-2').classList.remove('check');
        document.getElementById('contente-check-2').classList.add('check-dark');
        document.getElementById('contente-check-3').classList.remove('check');
        document.getElementById('contente-check-3').classList.add('check-dark');

        // Dark mode Label
        document.getElementById('LCheck-1').classList.add('list-wh');
        document.getElementById('LCheck-2').classList.add('list-wh');
        document.getElementById('LCheck-3').classList.add('list-wh');



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
        document.getElementById('head-dark').classList.add('dark-background');
        document.getElementById('font-wh').style.color = BCV_500;

        // Fieldset
        document.getElementById('fieldset-dark').classList.add('border-bg-dark');
        // Legend
        document.getElementById('legend').classList.add('border-black');
        // Labels
        document.getElementById('label-wh-1').style.color = WHCV_500;
        document.getElementById('label-wh-2').style.color = WHCV_500;
        document.getElementById('label-wh-3').style.color = WHCV_500;
        document.getElementById('label-wh-4').style.color = WHCV_500;
        document.getElementById('label-wh-5').style.color = WHCV_500;
        // Inputs
        document.getElementById('input-dark-1').classList.add('input-dark');
        document.getElementById('input-dark-2').classList.add('input-dark');
        document.getElementById('input-dark-3-1').classList.add('input-dark');
        document.getElementById('input-dark-4-1').classList.add('input-dark');
        document.getElementById('input-dark-5').classList.add('input-dark');
        // Font
        document.getElementById('font-bc1').style.color = BCV_500;


        // Fieldset ========================= 2
        document.getElementById('fieldset-dark-1').classList.add('border-bg-dark');
        // Legend
        document.getElementById('legend-1').classList.add('border-black');
        // Description
        document.getElementById('descrip').style.backgroundColor = ICV_200;
        // Label
        document.getElementById('label-susc-1').style.color = WHCV_500;
        // Select
        document.getElementById('select-drak-1').classList.add('input-dark');
        // Add 
        document.getElementById('add-1').style.fill = SUCV_200;

        // Remove Button
        document.getElementById('remove-button').classList.add('border-wh4');

        // Fieldset ========================= 3
        document.getElementById('fieldset-dark-2').classList.add('border-bg-dark');
        // Legend
        document.getElementById('legend-2').classList.add('border-black');
        // Label Key
        document.getElementById('new-key-1').style.color = WHCV_500;
        document.getElementById('new-key-2').style.color = WHCV_500;
        // Description
        document.getElementById('descrip-1').style.backgroundColor = ICV_200;
        // Font
        document.getElementById('font-bc1-1').style.color = BCV_500;


        // Fieldset ========================= 4
        document.getElementById('fieldset-dark-3').classList.add('border-bg-dark');
        // Legend
        document.getElementById('legend-3').classList.add('border-black');
        // Description
        document.getElementById('descrip-2').style.backgroundColor = ICV_200;
        // Font
        document.getElementById('font-bc1-2').style.color = BCV_500;
        // Lists
        document.getElementById('list-wh-1').style.color = WHCV_500;
        document.getElementById('list-wh-2').style.color = WHCV_500;
        document.getElementById('list-wh-3').style.color = WHCV_500;
        document.getElementById('list-wh-4').style.color = WHCV_500;
        document.getElementById('list-wh-5').style.color = WHCV_500;
        document.getElementById('list-wh-6').style.color = WHCV_500;

        // Button Save
        document.getElementById('save-change').classList.add('button-save');

        // Password
        document.getElementById('show-pass-1').classList.add('input-dark');
        document.getElementById('show-pass-2').classList.add('input-dark');

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
        document.getElementById('contente-check-2').classList.remove('check-dark');
        document.getElementById('contente-check-2').classList.add('check');
        document.getElementById('contente-check-3').classList.remove('check-dark');
        document.getElementById('contente-check-3').classList.add('check');

        // Dark mode Label
        document.getElementById('LCheck-1').classList.remove('list-wh');
        document.getElementById('LCheck-2').classList.remove('list-wh');
        document.getElementById('LCheck-3').classList.remove('list-wh');

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
        document.getElementById('head-dark').classList.remove('dark-background');
        document.getElementById('font-wh').style.color = WHCV_500;

        // Fieldset
        document.getElementById('fieldset-dark').classList.remove('border-bg-dark');
        // Legend
        document.getElementById('legend').classList.remove('border-black');
        // Labels
        document.getElementById('label-wh-1').style.color = BCV_500;
        document.getElementById('label-wh-2').style.color = BCV_500;
        document.getElementById('label-wh-3').style.color = BCV_500;
        document.getElementById('label-wh-4').style.color = BCV_500;
        document.getElementById('label-wh-5').style.color = BCV_500;
        // Inputs
        document.getElementById('input-dark-1').classList.remove('input-dark');
        document.getElementById('input-dark-2').classList.remove('input-dark');
        document.getElementById('input-dark-3-1').classList.remove('input-dark');
        document.getElementById('input-dark-4-1').classList.remove('input-dark');
        document.getElementById('input-dark-5').classList.remove('input-dark');


        // Fieldset ========================= 2
        document.getElementById('fieldset-dark-1').classList.remove('border-bg-dark');
        // Legend
        document.getElementById('legend-1').classList.remove('border-black');
        // Description
        document.getElementById('descrip').style.backgroundColor = ICV_500;
        // Font
        document.getElementById('font-bc1').style.color = WHCV_500;
        // Label
        document.getElementById('label-susc-1').style.color = BCV_500;
        // Select
        document.getElementById('select-drak-1').classList.remove('input-dark');
        // Add 
        document.getElementById('add-1').style.fill = SUCV_500;
        // Remove Button
        document.getElementById('remove-button').classList.remove('border-wh4');


        // Fieldset ========================= 3
        document.getElementById('fieldset-dark-2').classList.remove('border-bg-dark');
        // Legend
        document.getElementById('legend-2').classList.remove('border-black');
        // Label Key
        document.getElementById('new-key-1').style.color = BCV_500;
        document.getElementById('new-key-2').style.color = BCV_500;
        // Description
        document.getElementById('descrip-1').style.backgroundColor = ICV_500;
        // Font
        document.getElementById('font-bc1-1').style.color = WHCV_500;


        // Fieldset ========================= 4
        document.getElementById('fieldset-dark-3').classList.remove('border-bg-dark');
        // Legend
        document.getElementById('legend-3').classList.remove('border-black');
        // Description
        document.getElementById('descrip-2').style.backgroundColor = ICV_500;
        // Font
        document.getElementById('font-bc1-2').style.color = WHCV_500;
        // Lists
        document.getElementById('list-wh-1').style.color = BCV_500;
        document.getElementById('list-wh-2').style.color = BCV_500;
        document.getElementById('list-wh-3').style.color = BCV_500;
        document.getElementById('list-wh-4').style.color = BCV_500;
        document.getElementById('list-wh-5').style.color = BCV_500;
        document.getElementById('list-wh-6').style.color = BCV_500;


        // Button Save
        document.getElementById('save-change').classList.remove('button-save');

        // Password
        document.getElementById('show-pass-1').classList.remove('input-dark');
        document.getElementById('show-pass-2').classList.remove('input-dark');


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
    document.getElementById('contente-check-2').classList.remove('check');
    document.getElementById('contente-check-2').classList.add('check-dark');
    document.getElementById('contente-check-3').classList.remove('check');
    document.getElementById('contente-check-3').classList.add('check-dark');



    // Dark mode Label
    document.getElementById('LCheck-1').classList.add('list-wh');
    document.getElementById('LCheck-2').classList.add('list-wh');
    document.getElementById('LCheck-3').classList.add('list-wh');



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
    document.getElementById('head-dark').classList.add('dark-background');
    document.getElementById('font-wh').style.color = BCV_500;

    // Fieldset
    document.getElementById('fieldset-dark').classList.add('border-bg-dark');
    // Legend
    document.getElementById('legend').classList.add('border-black');
    // Labels
    document.getElementById('label-wh-1').style.color = WHCV_500;
    document.getElementById('label-wh-2').style.color = WHCV_500;
    document.getElementById('label-wh-3').style.color = WHCV_500;
    document.getElementById('label-wh-4').style.color = WHCV_500;
    document.getElementById('label-wh-5').style.color = WHCV_500;
    // Inputs
    document.getElementById('input-dark-1').classList.add('input-dark');
    document.getElementById('input-dark-2').classList.add('input-dark');
    document.getElementById('input-dark-3-1').classList.add('input-dark');

    document.getElementById('input-dark-4-1').classList.add('input-dark');
    document.getElementById('input-dark-5').classList.add('input-dark');


    // Fieldset ========================= 2
    document.getElementById('fieldset-dark-1').classList.add('border-bg-dark');
    // Legend
    document.getElementById('legend-1').classList.add('border-black');
    // Description
    document.getElementById('descrip').style.backgroundColor = ICV_200;
    // Font
    document.getElementById('font-bc1').style.color = BCV_500;
    // Label
    document.getElementById('label-susc-1').style.color = WHCV_500;
    // Select
    document.getElementById('select-drak-1').classList.add('input-dark');
    // Add 
    document.getElementById('add-1').style.fill = SUCV_200;
    // Remove Button
    document.getElementById('remove-button').classList.add('border-wh4');


    // Fieldset ========================= 3
    document.getElementById('fieldset-dark-2').classList.add('border-bg-dark');
    // Legend
    document.getElementById('legend-2').classList.add('border-black');
    // Label Key
    document.getElementById('new-key-1').style.color = WHCV_500;
    document.getElementById('new-key-2').style.color = WHCV_500;
    // Description
    document.getElementById('descrip-1').style.backgroundColor = ICV_200;
    // Font
    document.getElementById('font-bc1-1').style.color = BCV_500;

    // Fieldset ========================= 4
    document.getElementById('fieldset-dark-3').classList.add('border-bg-dark');
    // Legend
    document.getElementById('legend-3').classList.add('border-black');
    // Description
    document.getElementById('descrip-2').style.backgroundColor = ICV_200;
    // Font
    document.getElementById('font-bc1-2').style.color = BCV_500;
    // Lists
    document.getElementById('list-wh-1').style.color = WHCV_500;
    document.getElementById('list-wh-2').style.color = WHCV_500;
    document.getElementById('list-wh-3').style.color = WHCV_500;
    document.getElementById('list-wh-4').style.color = WHCV_500;
    document.getElementById('list-wh-5').style.color = WHCV_500;
    document.getElementById('list-wh-6').style.color = WHCV_500;


    // Button Save
    document.getElementById('save-change').classList.add('button-save');


    // Password
    document.getElementById('show-pass-1').classList.add('input-dark');
    document.getElementById('show-pass-2').classList.add('input-dark');


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
    document.getElementById('contente-check-2').classList.remove('check-dark');
    document.getElementById('contente-check-2').classList.add('check');
    document.getElementById('contente-check-3').classList.remove('check-dark');
    document.getElementById('contente-check-3').classList.add('check');

    // Dark mode Label
    document.getElementById('LCheck-1').classList.remove('list-wh');
    document.getElementById('LCheck-2').classList.remove('list-wh');
    document.getElementById('LCheck-3').classList.remove('list-wh');



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

    // Section 
    document.getElementById('head-dark').classList.remove('dark-background');
    document.getElementById('font-wh').style.color = WHCV_500;

    // Fieldset
    document.getElementById('fieldset-dark').classList.remove('border-bg-dark');
    // Legend
    document.getElementById('legend').classList.remove('border-black');
    // Labels
    document.getElementById('label-wh-1').style.color = BCV_500;
    document.getElementById('label-wh-2').style.color = BCV_500;
    document.getElementById('label-wh-3').style.color = BCV_500;
    document.getElementById('label-wh-4').style.color = BCV_500;
    document.getElementById('label-wh-5').style.color = BCV_500;
    // Inputs
    document.getElementById('input-dark-1').classList.remove('input-dark');
    document.getElementById('input-dark-2').classList.remove('input-dark');
    document.getElementById('input-dark-3-1').classList.remove('input-dark');

    document.getElementById('input-dark-4-1').classList.remove('input-dark');
    document.getElementById('input-dark-5').classList.remove('input-dark');


    // Fieldset ========================= 2
    document.getElementById('fieldset-dark-1').classList.remove('border-bg-dark');
    // Legend
    document.getElementById('legend-1').classList.remove('border-black');
    // Description
    document.getElementById('descrip').style.backgroundColor = ICV_500;
    // Font
    document.getElementById('font-bc1').style.color = WHCV_500;
    // Label
    document.getElementById('label-susc-1').style.color = BCV_500;
    // Select
    document.getElementById('select-drak-1').classList.remove('input-dark');
    // Add 
    document.getElementById('add-1').style.fill = SUCV_500; // Remove Button
    document.getElementById('remove-button').classList.remove('border-wh4');


    // Fieldset ========================= 3
    document.getElementById('fieldset-dark-2').classList.remove('border-bg-dark');
    // Legend
    document.getElementById('legend-2').classList.remove('border-black');
    // Label Key
    document.getElementById('new-key-1').style.color = BCV_500;
    document.getElementById('new-key-2').style.color = BCV_500;
    // Description
    document.getElementById('descrip-1').style.backgroundColor = ICV_500;
    // Font
    document.getElementById('font-bc1-1').style.color = WHCV_500;





    // Fieldset ========================= 4
    document.getElementById('fieldset-dark-3').classList.remove('border-bg-dark');
    // Legend
    document.getElementById('legend-3').classList.remove('border-black');
    // Description
    document.getElementById('descrip-2').style.backgroundColor = ICV_500;
    // Font
    document.getElementById('font-bc1-2').style.color = WHCV_500;
    // Lists
    document.getElementById('list-wh-1').style.color = BCV_500;
    document.getElementById('list-wh-2').style.color = BCV_500;
    document.getElementById('list-wh-3').style.color = BCV_500;
    document.getElementById('list-wh-4').style.color = BCV_500;
    document.getElementById('list-wh-5').style.color = BCV_500;
    document.getElementById('list-wh-6').style.color = BCV_500;


    // Button Save
    document.getElementById('save-change').classList.remove('button-save');

    // Password
    document.getElementById('show-pass-1').classList.remove('input-dark');
    document.getElementById('show-pass-2').classList.remove('input-dark');

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