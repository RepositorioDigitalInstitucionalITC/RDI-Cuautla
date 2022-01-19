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





// Moon Event 
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
        document.getElementById('login-dark').classList.add('dark-login');
        // 
        document.getElementById('dark-Lhelp').classList.add('dark-font');


        // Doc 
        // PDF Content PDF
        document.getElementById('ConnPDF-dark').classList.add('dark-background');
        document.getElementById('fontPDF-dark').style.color = BCV_500;
        document.getElementById('dark-fill').classList.add('dark-fill');
        // BoxShaw
        document.getElementById('preview-dark').classList.add('boxshaw-dark');
        // Font Doc
        document.getElementById('item-title-dark').style.color = PCV_200;
        document.getElementById('font-wh1').style.color = WHCV_500;
        document.getElementById('font-wh2').style.color = WHCV_500;
        document.getElementById('font-wh3').style.color = WHCV_500;
        document.getElementById('font-wh4').style.color = WHCV_500;

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
        document.getElementById('login-dark').classList.remove('dark-login');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');

        // Doc
        // PDF Content PDF
        document.getElementById('ConnPDF-dark').classList.remove('dark-background');
        document.getElementById('fontPDF-dark').style.color = WHCV_500;
        document.getElementById('dark-fill').classList.remove('dark-fill');
        // BoxShaw
        document.getElementById('preview-dark').classList.remove('boxshaw-dark');
        // Font Doc
        document.getElementById('item-title-dark').style.color = PCV_500;
        document.getElementById('font-wh1').style.color = BCV_500;
        document.getElementById('font-wh2').style.color = BCV_500;
        document.getElementById('font-wh3').style.color = BCV_500;
        document.getElementById('font-wh4').style.color = BCV_500;

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
        document.getElementById('login-dark').classList.add('dark-login');
        document.getElementById('dark-Lhelp').classList.add('dark-font');


        // Doc
        // PDF Content PDF
        document.getElementById('ConnPDF-dark').classList.add('dark-background');
        document.getElementById('fontPDF-dark').style.color = BCV_500;
        document.getElementById('dark-fill').classList.add('dark-fill');
        // BoxShaw
        document.getElementById('preview-dark').classList.add('boxshaw-dark');
        // Font Doc
        document.getElementById('item-title-dark').style.color = PCV_200;
        document.getElementById('font-wh1').style.color = WHCV_500;
        document.getElementById('font-wh2').style.color = WHCV_500;
        document.getElementById('font-wh3').style.color = WHCV_500;
        document.getElementById('font-wh4').style.color = WHCV_500;

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
        document.getElementById('login-dark').classList.remove('dark-login');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');

        // Doc
        // PDF Content PDF
        document.getElementById('ConnPDF-dark').classList.remove('dark-background');
        document.getElementById('fontPDF-dark').style.color = WHCV_500;
        document.getElementById('dark-fill').classList.remove('dark-fill');
        // BoxShaw
        document.getElementById('preview-dark').classList.remove('boxshaw-dark');
        // Font Doc
        document.getElementById('item-title-dark').style.color = PCV_500;
        document.getElementById('font-wh1').style.color = BCV_500;
        document.getElementById('font-wh2').style.color = BCV_500;
        document.getElementById('font-wh3').style.color = BCV_500;
        document.getElementById('font-wh4').style.color = BCV_500;

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
    document.getElementById('login-dark').classList.add('dark-login');
    document.getElementById('dark-Lhelp').classList.add('dark-font');

    // Doc
    // PDF Content PDF
    document.getElementById('ConnPDF-dark').classList.add('dark-background');
    document.getElementById('fontPDF-dark').style.color = BCV_500;
    document.getElementById('dark-fill').classList.add('dark-fill');
    // BoxShaw
    document.getElementById('preview-dark').classList.add('boxshaw-dark');
    // Font Doc
    document.getElementById('item-title-dark').style.color = PCV_200;
    document.getElementById('font-wh1').style.color = WHCV_500;
    document.getElementById('font-wh2').style.color = WHCV_500;
    document.getElementById('font-wh3').style.color = WHCV_500;
    document.getElementById('font-wh4').style.color = WHCV_500;

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
    document.getElementById('login-dark').classList.remove('dark-login');
    document.getElementById('dark-Lhelp').classList.remove('dark-font');

    // Doc
    // PDF Content PDF
    document.getElementById('ConnPDF-dark').classList.remove('dark-background');
    document.getElementById('fontPDF-dark').style.color = WHCV_500;
    document.getElementById('dark-fill').classList.remove('dark-fill');
    // BoxShaw
    document.getElementById('preview-dark').classList.remove('boxshaw-dark');
    // Font Doc
    document.getElementById('item-title-dark').style.color = PCV_500;
    document.getElementById('font-wh1').style.color = BCV_500;
    document.getElementById('font-wh2').style.color = BCV_500;
    document.getElementById('font-wh3').style.color = BCV_500;
    document.getElementById('font-wh4').style.color = BCV_500;


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