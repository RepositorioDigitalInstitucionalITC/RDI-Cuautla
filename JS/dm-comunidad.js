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
        document.getElementById('login-dark').classList.add('dark');
        // 
        document.getElementById('dark-Lhelp').classList.add('dark-font');

        // Section
        document.getElementById('dark-headline').classList.add('dark-background');
        document.getElementById('dark-FH').classList.add('dark-font');
        document.getElementById('dark-headline2').classList.add('dark-background');
        document.getElementById('dark-FH2').classList.add('dark-font');


        // organims-dark
        document.getElementById('organims-dark').style.backgroundColor = BCV_400;

        // Labels  
        document.getElementById('sub-label-1').classList.add('font-wh');
        document.getElementById('sub-label-2').classList.add('font-wh');
        document.getElementById('sub-label-3').classList.add('font-wh');
        document.getElementById('sub-label-4').classList.add('font-wh');
        document.getElementById('sub-label-5').classList.add('font-wh');
        document.getElementById('sub-label-6').classList.add('font-wh');
        document.getElementById('sub-label-7').classList.add('font-wh');
        document.getElementById('sub-label-8').classList.add('font-wh');
        document.getElementById('sub-label-9').classList.add('font-wh');
        document.getElementById('sub-label-10').classList.add('font-wh');
        document.getElementById('sub-label-11').classList.add('font-wh');
        document.getElementById('sub-label-12').classList.add('font-wh');
        document.getElementById('sub-label-13').classList.add('font-wh');
        document.getElementById('sub-label-14').classList.add('font-wh');
        document.getElementById('sub-label-15').classList.add('font-wh');
        document.getElementById('sub-label-16').classList.add('font-wh');
        // Boxshadow
        document.getElementById('organims-dark').classList.add('bg-boxsaw');

        // Slider
        document.getElementById('slider-dark').style.backgroundColor = BCV_200;
        // Cards
        document.getElementById('content-dark').style.backgroundColor = BCV_400;
        document.getElementById('content1-dark').style.backgroundColor = BCV_400;
        document.getElementById('content2-dark').style.backgroundColor = BCV_400;
        // font cards
        document.getElementById('font-wh-1').classList.add('font-wh');
        document.getElementById('font-wh-2').classList.add('font-wh');
        document.getElementById('font-wh-3').classList.add('font-wh');
        document.getElementById('font-wh-4').classList.add('font-wh');
        document.getElementById('font-wh-5').classList.add('font-wh');
        document.getElementById('font-wh-6').classList.add('font-wh');
        document.getElementById('font-wh-7').classList.add('font-wh');
        document.getElementById('font-wh-8').classList.add('font-wh');
        document.getElementById('font-wh-9').classList.add('font-wh');
        document.getElementById('font-wh-10').classList.add('font-wh');
        document.getElementById('font-wh-11').classList.add('font-wh');
        document.getElementById('font-wh-12').classList.add('font-wh');

        // Hover Organims
        document.getElementById('list-dark-2').classList.add('list-dark');
        document.getElementById('list-dark-3').classList.add('list-dark');
        document.getElementById('list-dark-4').classList.add('list-dark');
        document.getElementById('list-dark-5').classList.add('list-dark');

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
        document.getElementById('dark-a-1').classList.add('dark-font');
        document.getElementById('dark-a-2').classList.add('dark-font');
        document.getElementById('dark-a-3').classList.add('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.add('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = WCV_700;
        document.getElementById('dark-thel').style.fill = TCV_700;

    } else {

        document.getElementById('header-sec-l').classList.remove('menu-dark');
        document.getElementById('dark-header').classList.remove('dark');
        document.getElementById('RDI-dark').classList.remove('dark');
        document.getElementById('login-dark').classList.remove('dark');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');

        // Section
        document.getElementById('dark-headline').classList.remove('dark-background');
        document.getElementById('dark-FH').classList.remove('dark-font');
        document.getElementById('dark-headline2').classList.remove('dark-background');
        document.getElementById('dark-FH2').classList.remove('dark-font');

        // organims-dark
        document.getElementById('organims-dark').style.backgroundColor = WHCV_500;


        // Labels  
        document.getElementById('sub-label-1').classList.remove('font-wh');
        document.getElementById('sub-label-2').classList.remove('font-wh');
        document.getElementById('sub-label-3').classList.remove('font-wh');
        document.getElementById('sub-label-4').classList.remove('font-wh');
        document.getElementById('sub-label-5').classList.remove('font-wh');
        document.getElementById('sub-label-6').classList.remove('font-wh');
        document.getElementById('sub-label-7').classList.remove('font-wh');
        document.getElementById('sub-label-8').classList.remove('font-wh');
        document.getElementById('sub-label-9').classList.remove('font-wh');
        document.getElementById('sub-label-10').classList.remove('font-wh');
        document.getElementById('sub-label-11').classList.remove('font-wh');
        document.getElementById('sub-label-12').classList.remove('font-wh');
        document.getElementById('sub-label-13').classList.remove('font-wh');
        document.getElementById('sub-label-14').classList.remove('font-wh');
        document.getElementById('sub-label-15').classList.remove('font-wh');
        document.getElementById('sub-label-16').classList.remove('font-wh');

        // Boxshadow
        document.getElementById('organims-dark').classList.remove('bg-boxsaw');
        // Slider
        document.getElementById('slider-dark').style.backgroundColor = BCV_500;
        // Cards
        document.getElementById('content-dark').style.backgroundColor = WHCV_500;
        document.getElementById('content1-dark').style.backgroundColor = WHCV_500;
        document.getElementById('content2-dark').style.backgroundColor = WHCV_500;
        // font cards
        document.getElementById('font-wh-1').classList.remove('font-wh');
        document.getElementById('font-wh-2').classList.remove('font-wh');
        document.getElementById('font-wh-3').classList.remove('font-wh');
        document.getElementById('font-wh-4').classList.remove('font-wh');
        document.getElementById('font-wh-5').classList.remove('font-wh');
        document.getElementById('font-wh-6').classList.remove('font-wh');
        document.getElementById('font-wh-7').classList.remove('font-wh');
        document.getElementById('font-wh-8').classList.remove('font-wh');
        document.getElementById('font-wh-9').classList.remove('font-wh');
        document.getElementById('font-wh-10').classList.remove('font-wh');
        document.getElementById('font-wh-11').classList.remove('font-wh');
        document.getElementById('font-wh-12').classList.remove('font-wh');

        // Icons Menu
        document.getElementById('icon-menu-dark').classList.remove('dark-fill');
        document.getElementById('close-menu-dark').classList.remove('dark-fill');

        // Hover Organims
        document.getElementById('list-dark-2').classList.remove('list-dark');
        document.getElementById('list-dark-3').classList.remove('list-dark');
        document.getElementById('list-dark-4').classList.remove('list-dark');
        document.getElementById('list-dark-5').classList.remove('list-dark');



        // Footer
        document.getElementById('dark-footer').classList.remove('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');

        // Etiqueeta a
        document.getElementById('dark-a-1').classList.remove('dark-font');
        document.getElementById('dark-a-2').classList.remove('dark-font');
        document.getElementById('dark-a-3').classList.remove('dark-font');
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
        document.getElementById('dark-Lhelp').classList.add('dark-font');
        // Section
        document.getElementById('dark-headline').classList.add('dark-background');
        document.getElementById('dark-FH').classList.add('dark-font');
        document.getElementById('dark-headline2').classList.add('dark-background');
        document.getElementById('dark-FH2').classList.add('dark-font');
        // organims-dark
        document.getElementById('organims-dark').style.backgroundColor = BCV_400;

        // Labels  
        document.getElementById('sub-label-1').classList.add('font-wh');
        document.getElementById('sub-label-2').classList.add('font-wh');
        document.getElementById('sub-label-3').classList.add('font-wh');
        document.getElementById('sub-label-4').classList.add('font-wh');
        document.getElementById('sub-label-5').classList.add('font-wh');
        document.getElementById('sub-label-6').classList.add('font-wh');
        document.getElementById('sub-label-7').classList.add('font-wh');
        document.getElementById('sub-label-8').classList.add('font-wh');
        document.getElementById('sub-label-9').classList.add('font-wh');
        document.getElementById('sub-label-10').classList.add('font-wh');
        document.getElementById('sub-label-11').classList.add('font-wh');
        document.getElementById('sub-label-12').classList.add('font-wh');
        document.getElementById('sub-label-13').classList.add('font-wh');
        document.getElementById('sub-label-14').classList.add('font-wh');
        document.getElementById('sub-label-15').classList.add('font-wh');
        document.getElementById('sub-label-16').classList.add('font-wh');
        // Boxshadow
        document.getElementById('organims-dark').classList.add('bg-boxsaw');

        // Slider
        document.getElementById('slider-dark').style.backgroundColor = BCV_200;
        // Cards
        document.getElementById('content-dark').style.backgroundColor = BCV_400;
        document.getElementById('content1-dark').style.backgroundColor = BCV_400;
        document.getElementById('content2-dark').style.backgroundColor = BCV_400;
        // font cards
        document.getElementById('font-wh-1').classList.add('font-wh');
        document.getElementById('font-wh-2').classList.add('font-wh');
        document.getElementById('font-wh-3').classList.add('font-wh');
        document.getElementById('font-wh-4').classList.add('font-wh');
        document.getElementById('font-wh-5').classList.add('font-wh');
        document.getElementById('font-wh-6').classList.add('font-wh');
        document.getElementById('font-wh-7').classList.add('font-wh');
        document.getElementById('font-wh-8').classList.add('font-wh');
        document.getElementById('font-wh-9').classList.add('font-wh');
        document.getElementById('font-wh-10').classList.add('font-wh');
        document.getElementById('font-wh-11').classList.add('font-wh');
        document.getElementById('font-wh-12').classList.add('font-wh');


        // Icons Menu
        document.getElementById('icon-menu-dark').classList.add('dark-fill');
        document.getElementById('close-menu-dark').classList.add('dark-fill');

        // Hover Organims
        document.getElementById('list-dark-2').classList.add('list-dark');
        document.getElementById('list-dark-3').classList.add('list-dark');
        document.getElementById('list-dark-4').classList.add('list-dark');
        document.getElementById('list-dark-5').classList.add('list-dark');

        // Footer
        document.getElementById('dark-footer').classList.add('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.add('dark-icon-bg');
        // Etiqueeta a
        document.getElementById('dark-a-1').classList.add('dark-font');
        document.getElementById('dark-a-2').classList.add('dark-font');
        document.getElementById('dark-a-3').classList.add('dark-font');
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
        document.getElementById('dark-Lhelp').classList.remove('dark-font');

        // Section
        document.getElementById('dark-headline').classList.remove('dark-background');
        document.getElementById('dark-FH').classList.remove('dark-font');
        document.getElementById('dark-headline2').classList.remove('dark-background');
        document.getElementById('dark-FH2').classList.remove('dark-font');

        // organims-dark
        document.getElementById('organims-dark').style.backgroundColor = WHCV_500;


        // Labels  
        document.getElementById('sub-label-1').classList.remove('font-wh');
        document.getElementById('sub-label-2').classList.remove('font-wh');
        document.getElementById('sub-label-3').classList.remove('font-wh');
        document.getElementById('sub-label-4').classList.remove('font-wh');
        document.getElementById('sub-label-5').classList.remove('font-wh');
        document.getElementById('sub-label-6').classList.remove('font-wh');
        document.getElementById('sub-label-7').classList.remove('font-wh');
        document.getElementById('sub-label-8').classList.remove('font-wh');
        document.getElementById('sub-label-9').classList.remove('font-wh');
        document.getElementById('sub-label-10').classList.remove('font-wh');
        document.getElementById('sub-label-11').classList.remove('font-wh');
        document.getElementById('sub-label-12').classList.remove('font-wh');
        document.getElementById('sub-label-13').classList.remove('font-wh');
        document.getElementById('sub-label-14').classList.remove('font-wh');
        document.getElementById('sub-label-15').classList.remove('font-wh');
        document.getElementById('sub-label-16').classList.remove('font-wh');

        // Boxshadow
        document.getElementById('organims-dark').classList.remove('bg-boxsaw');


        // Slider
        document.getElementById('slider-dark').style.backgroundColor = BCV_500;
        // Cards
        document.getElementById('content-dark').style.backgroundColor = WHCV_500;
        document.getElementById('content1-dark').style.backgroundColor = WHCV_500;
        document.getElementById('content2-dark').style.backgroundColor = WHCV_500;
        // font cards
        document.getElementById('font-wh-1').classList.remove('font-wh');
        document.getElementById('font-wh-2').classList.remove('font-wh');
        document.getElementById('font-wh-3').classList.remove('font-wh');
        document.getElementById('font-wh-4').classList.remove('font-wh');
        document.getElementById('font-wh-5').classList.remove('font-wh');
        document.getElementById('font-wh-6').classList.remove('font-wh');
        document.getElementById('font-wh-7').classList.remove('font-wh');
        document.getElementById('font-wh-8').classList.remove('font-wh');
        document.getElementById('font-wh-9').classList.remove('font-wh');
        document.getElementById('font-wh-10').classList.remove('font-wh');
        document.getElementById('font-wh-11').classList.remove('font-wh');
        document.getElementById('font-wh-12').classList.remove('font-wh');

        // Icons Menu
        document.getElementById('icon-menu-dark').classList.remove('dark-fill');
        document.getElementById('close-menu-dark').classList.remove('dark-fill');

        // Hover Organims
        document.getElementById('list-dark-2').classList.remove('list-dark');
        document.getElementById('list-dark-3').classList.remove('list-dark');
        document.getElementById('list-dark-4').classList.remove('list-dark');
        document.getElementById('list-dark-5').classList.remove('list-dark');


        // Footer
        document.getElementById('dark-footer').classList.remove('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');
        // Etiqueeta a
        document.getElementById('dark-a-1').classList.remove('dark-font');
        document.getElementById('dark-a-2').classList.remove('dark-font');
        document.getElementById('dark-a-3').classList.remove('dark-font');
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
    document.getElementById('login-dark').classList.add('dark');
    document.getElementById('dark-Lhelp').classList.add('dark-font');

    // Section
    document.getElementById('dark-headline').classList.add('dark-background');
    document.getElementById('dark-FH').classList.add('dark-font');
    document.getElementById('dark-headline2').classList.add('dark-background');
    document.getElementById('dark-FH2').classList.add('dark-font');

    // organims-dark
    document.getElementById('organims-dark').style.backgroundColor = BCV_400;

    // Labels  
    document.getElementById('sub-label-1').classList.add('font-wh');
    document.getElementById('sub-label-2').classList.add('font-wh');
    document.getElementById('sub-label-3').classList.add('font-wh');
    document.getElementById('sub-label-4').classList.add('font-wh');
    document.getElementById('sub-label-5').classList.add('font-wh');
    document.getElementById('sub-label-6').classList.add('font-wh');
    document.getElementById('sub-label-7').classList.add('font-wh');
    document.getElementById('sub-label-8').classList.add('font-wh');
    document.getElementById('sub-label-9').classList.add('font-wh');
    document.getElementById('sub-label-10').classList.add('font-wh');
    document.getElementById('sub-label-11').classList.add('font-wh');
    document.getElementById('sub-label-12').classList.add('font-wh');
    document.getElementById('sub-label-13').classList.add('font-wh');
    document.getElementById('sub-label-14').classList.add('font-wh');
    document.getElementById('sub-label-15').classList.add('font-wh');
    document.getElementById('sub-label-16').classList.add('font-wh');

    // Boxshadow
    document.getElementById('organims-dark').classList.add('bg-boxsaw');


    // Slider
    document.getElementById('slider-dark').style.backgroundColor = BCV_200;
    // Cards
    document.getElementById('content-dark').style.backgroundColor = BCV_400;
    document.getElementById('content1-dark').style.backgroundColor = BCV_400;
    document.getElementById('content2-dark').style.backgroundColor = BCV_400;
    // font cards
    document.getElementById('font-wh-1').classList.add('font-wh');
    document.getElementById('font-wh-2').classList.add('font-wh');
    document.getElementById('font-wh-3').classList.add('font-wh');
    document.getElementById('font-wh-4').classList.add('font-wh');
    document.getElementById('font-wh-5').classList.add('font-wh');
    document.getElementById('font-wh-6').classList.add('font-wh');
    document.getElementById('font-wh-7').classList.add('font-wh');
    document.getElementById('font-wh-8').classList.add('font-wh');
    document.getElementById('font-wh-9').classList.add('font-wh');
    document.getElementById('font-wh-10').classList.add('font-wh');
    document.getElementById('font-wh-11').classList.add('font-wh');
    document.getElementById('font-wh-12').classList.add('font-wh');

    // Icons Menu
    document.getElementById('icon-menu-dark').classList.add('dark-fill');
    document.getElementById('close-menu-dark').classList.add('dark-fill');

    // Hover Organim
    document.getElementById('list-dark-2').classList.add('list-dark');
    document.getElementById('list-dark-3').classList.add('list-dark');
    document.getElementById('list-dark-4').classList.add('list-dark');
    document.getElementById('list-dark-5').classList.add('list-dark');

    // Footer
    document.getElementById('dark-footer').classList.add('dark-background');
    // Icon Footer
    document.getElementById('dark-doc-foot').classList.add('dark-icon-bg');
    document.getElementById('dark-doc1-foot').classList.add('dark-icon-bg');
    document.getElementById('dark-doc2-foot').classList.add('dark-icon-bg');
    // Etiqueeta a
    document.getElementById('dark-a-1').classList.add('dark-font');
    document.getElementById('dark-a-2').classList.add('dark-font');
    document.getElementById('dark-a-3').classList.add('dark-font');
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


    document.getElementById('header-sec-l').classList.remove('menu-dark');
    document.getElementById('dark-header').classList.remove('dark');
    document.getElementById('RDI-dark').classList.remove('dark');
    document.getElementById('login-dark').classList.remove('dark');
    document.getElementById('dark-Lhelp').classList.remove('dark-font');

    // Section
    document.getElementById('dark-headline').classList.remove('dark-background');
    document.getElementById('dark-FH').classList.remove('dark-font');
    document.getElementById('dark-headline2').classList.remove('dark-background');
    document.getElementById('dark-FH2').classList.remove('dark-font');

    // organims-dark
    document.getElementById('organims-dark').style.backgroundColor = WHCV_500;

    // Labels  
    document.getElementById('sub-label-1').classList.remove('font-wh');
    document.getElementById('sub-label-2').classList.remove('font-wh');
    document.getElementById('sub-label-3').classList.remove('font-wh');
    document.getElementById('sub-label-4').classList.remove('font-wh');
    document.getElementById('sub-label-5').classList.remove('font-wh');
    document.getElementById('sub-label-6').classList.remove('font-wh');
    document.getElementById('sub-label-7').classList.remove('font-wh');
    document.getElementById('sub-label-8').classList.remove('font-wh');
    document.getElementById('sub-label-9').classList.remove('font-wh');
    document.getElementById('sub-label-10').classList.remove('font-wh');
    document.getElementById('sub-label-11').classList.remove('font-wh');
    document.getElementById('sub-label-12').classList.remove('font-wh');
    document.getElementById('sub-label-13').classList.remove('font-wh');
    document.getElementById('sub-label-14').classList.remove('font-wh');
    document.getElementById('sub-label-15').classList.remove('font-wh');
    document.getElementById('sub-label-16').classList.remove('font-wh');

    // Boxshadow
    document.getElementById('organims-dark').classList.remove('bg-boxsaw');

    // Slider
    document.getElementById('slider-dark').style.backgroundColor = BCV_500;
    // Cards
    document.getElementById('content-dark').style.backgroundColor = WHCV_500;
    document.getElementById('content1-dark').style.backgroundColor = WHCV_500;
    document.getElementById('content2-dark').style.backgroundColor = WHCV_500;
    // font cards
    document.getElementById('font-wh-1').classList.remove('font-wh');
    document.getElementById('font-wh-2').classList.remove('font-wh');
    document.getElementById('font-wh-3').classList.remove('font-wh');
    document.getElementById('font-wh-4').classList.remove('font-wh');
    document.getElementById('font-wh-5').classList.remove('font-wh');
    document.getElementById('font-wh-6').classList.remove('font-wh');
    document.getElementById('font-wh-7').classList.remove('font-wh');
    document.getElementById('font-wh-8').classList.remove('font-wh');
    document.getElementById('font-wh-9').classList.remove('font-wh');
    document.getElementById('font-wh-10').classList.remove('font-wh');
    document.getElementById('font-wh-11').classList.remove('font-wh');
    document.getElementById('font-wh-12').classList.remove('font-wh');

    // Icons Menu
    document.getElementById('icon-menu-dark').classList.remove('dark-fill');
    document.getElementById('close-menu-dark').classList.remove('dark-fill');

    // Hover Organims
    document.getElementById('list-dark-2').classList.remove('list-dark');
    document.getElementById('list-dark-3').classList.remove('list-dark');
    document.getElementById('list-dark-4').classList.remove('list-dark');
    document.getElementById('list-dark-5').classList.remove('list-dark');

    // Footer
    document.getElementById('dark-footer').classList.remove('dark-background');
    // Icon Footer
    document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
    document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
    document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');
    // Etiqueeta a
    document.getElementById('dark-a-1').classList.remove('dark-font');
    document.getElementById('dark-a-2').classList.remove('dark-font');
    document.getElementById('dark-a-3').classList.remove('dark-font');
    // Copy R
    document.getElementById('dark-copy').classList.remove('dark-font');
    // Icons Contactenos
    document.getElementById('dark-messa').style.fill = SCV_500;
    document.getElementById('dark-thel').style.fill = TCV_500;

}