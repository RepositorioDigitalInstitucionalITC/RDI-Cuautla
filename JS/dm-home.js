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
        document.getElementById('login-dark').classList.add('dark-login');
        document.getElementById('dark-Lhelp').classList.add('dark-font');

        // Input Main
        document.getElementById('input-dark').classList.add('input-main');
        document.getElementById('bg-pc').style.fill = PCV_200;



        // Section
        document.getElementById('cont-h-dark1').style.backgroundColor = PCV_200;
        document.getElementById('font-dar-1').style.color = BCV_500;

        // Organims
        document.getElementById('bg-dark').style.backgroundColor = BCV_400;

        // Button
        document.getElementById('button-num-1').style.fill = WHCV_500;
        document.getElementById('button-num-2').style.fill = WHCV_500;
        // 
        document.getElementById('button-num').style.fill = WHCV_500;
        // Font Color
        // document.getElementById('authors-1').classList.add('font-Dwh');
        // document.getElementById('authors-2').classList.add('font-Dwh');
        // document.getElementById('authors-3').classList.add('font-Dwh');
        // document.getElementById('authors-4').classList.add('font-Dwh');
        // document.getElementById('authors-5').classList.add('font-Dwh');
        // document.getElementById('authors-6').classList.add('font-Dwh');
        // document.getElementById('authors-7').classList.add('font-Dwh');
        // document.getElementById('authors-8').classList.add('font-Dwh');
        // document.getElementById('item-dark-1').classList.add('font-Dwh');
        // document.getElementById('item-dark-2').classList.add('font-Dwh');
        // document.getElementById('item-dark-3').classList.add('font-Dwh');
        // document.getElementById('item-dark-4').classList.add('font-Dwh');
        // document.getElementById('item-dark-5').classList.add('font-Dwh');
        // document.getElementById('item-dark-6').classList.add('font-Dwh');
        // document.getElementById('item-dark-7').classList.add('font-Dwh');
        // document.getElementById('item-dark-8').classList.add('font-Dwh');

        // <==========================================================>


        // Section
        document.getElementById('cont-h-dark2').style.backgroundColor = PCV_200;
        document.getElementById('font-dar-2').style.color = BCV_500;
        // Icons Community
        document.getElementById('item-Cdark-1').style.fill = WHCV_500;
        document.getElementById('item-Cdark-2').style.fill = WHCV_500;
        document.getElementById('item-Cdark-3').style.fill = WHCV_500;
        document.getElementById('item-Cdark-4').style.fill = WHCV_500;
        document.getElementById('item-Cdark-5').style.fill = WHCV_500;
        document.getElementById('item-Cdark-5').style.fill = BCV_500;
        document.getElementById('item-Cdark-6').style.fill = WHCV_500;
        document.getElementById('item-Cdark-66').style.fill = WHCV_500;
        document.getElementById('item-Cdark-7').style.fill = WHCV_500;
        document.getElementById('item-Cdark-77').style.fill = WHCV_500;
        document.getElementById('item-Cdark-8').style.fill = WHCV_500;
        // Font White
        document.getElementById('font-wh-1').style.color = WHCV_500;
        document.getElementById('font-wh-2').style.color = WHCV_500;
        document.getElementById('font-wh-3').style.color = WHCV_500;
        document.getElementById('font-wh-4').style.color = WHCV_500;
        document.getElementById('font-wh-5').style.color = WHCV_500;
        document.getElementById('font-wh-6').style.color = WHCV_500;
        document.getElementById('font-wh-7').style.color = WHCV_500;
        document.getElementById('font-wh-8').style.color = WHCV_500;

        // <==========================================================>
        // Section
        document.getElementById('cont-h-dark3').style.backgroundColor = PCV_200;
        document.getElementById('font-dar-3').style.color = BCV_500;
        // Section
        document.getElementById('cont-h-dark4').style.backgroundColor = PCV_200;
        document.getElementById('font-dar-4').style.color = BCV_500;

        // Cards Main
        document.getElementById('slider-dark').style.backgroundColor = BCV_200;
        document.getElementById('slider-dark1').style.backgroundColor = BCV_200;
        // Card BG Dark
        document.getElementById('dark-info-1').style.backgroundColor = BCV_400;
        document.getElementById('dark-info-2').style.backgroundColor = BCV_400;
        document.getElementById('dark-info-3').style.backgroundColor = BCV_400;
        document.getElementById('dark-info-4-r').style.backgroundColor = BCV_400;
        document.getElementById('dark-info-5-r').style.backgroundColor = BCV_400;
        document.getElementById('dark-info-6-r').style.backgroundColor = BCV_400;
        // Font White
        document.getElementById('title-font-1').style.color = WHCV_500;
        document.getElementById('title-font-2').style.color = WHCV_500;
        document.getElementById('title-font-3').style.color = WHCV_500;
        document.getElementById('td-font-1').style.color = WHCV_500;
        document.getElementById('td-font-2').style.color = WHCV_500;
        document.getElementById('td-font-3').style.color = WHCV_500;
        document.getElementById('date-font-1').style.color = WHCV_500;
        document.getElementById('date-font-2').style.color = WHCV_500;
        document.getElementById('date-font-3').style.color = WHCV_500;
        document.getElementById('type-dark-1').style.color = WHCV_500;
        document.getElementById('type-dark-2').style.color = WHCV_500;
        document.getElementById('type-dark-3').style.color = WHCV_500;

        // Font White
        document.getElementById('title-font-4').style.color = WHCV_500;
        document.getElementById('title-font-5').style.color = WHCV_500;
        document.getElementById('title-font-6').style.color = WHCV_500;
        document.getElementById('td-font-4').style.color = WHCV_500;
        document.getElementById('td-font-5').style.color = WHCV_500;
        document.getElementById('td-font-6').style.color = WHCV_500;
        document.getElementById('date-font-4').style.color = WHCV_500;
        document.getElementById('date-font-5').style.color = WHCV_500;
        document.getElementById('date-font-6').style.color = WHCV_500;
        document.getElementById('type-dark-4').style.color = WHCV_500;
        document.getElementById('type-dark-5').style.color = WHCV_500;
        document.getElementById('type-dark-6').style.color = WHCV_500;

        document.getElementById('bg-dark').classList.add('box-shawn');

        // Hover Organims
        document.getElementById('list-dark-1').classList.add('list-dark');
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
        document.getElementById('login-dark').classList.remove('dark-login');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');


        // Input Main
        document.getElementById('input-dark').classList.add('input-main');
        document.getElementById('bg-pc').style.fill = PCV_500;

        // Section
        document.getElementById('cont-h-dark1').style.backgroundColor = PCV_500;
        document.getElementById('font-dar-1').style.color = WHCV_500;

        // Organims
        document.getElementById('bg-dark').style.backgroundColor = WHCV_500;
        // Button
        document.getElementById('button-num-1').style.fill = BCV_500;
        document.getElementById('button-num-2').style.fill = BCV_500;
        // 
        document.getElementById('button-num').style.fill = BCV_500;
        // Font Color
        // document.getElementById('authors-1').classList.remove('font-Dwh');
        // document.getElementById('authors-2').classList.remove('font-Dwh');
        // document.getElementById('authors-3').classList.remove('font-Dwh');
        // document.getElementById('authors-4').classList.remove('font-Dwh');
        // document.getElementById('authors-5').classList.remove('font-Dwh');
        // document.getElementById('authors-6').classList.remove('font-Dwh');
        // document.getElementById('authors-7').classList.remove('font-Dwh');
        // document.getElementById('authors-8').classList.remove('font-Dwh');
        // document.getElementById('item-dark-1').classList.remove('font-Dwh');
        // document.getElementById('item-dark-2').classList.remove('font-Dwh');
        // document.getElementById('item-dark-3').classList.remove('font-Dwh');
        // document.getElementById('item-dark-4').classList.remove('font-Dwh');
        // document.getElementById('item-dark-5').classList.remove('font-Dwh');
        // document.getElementById('item-dark-6').classList.remove('font-Dwh');
        // document.getElementById('item-dark-7').classList.remove('font-Dwh');
        // document.getElementById('item-dark-8').classList.remove('font-Dwh');

        // <==========================================================>

        // Section
        document.getElementById('cont-h-dark2').style.backgroundColor = PCV_500;
        document.getElementById('font-dar-2').style.color = WHCV_500;

        // Icons Community
        document.getElementById('item-Cdark-1').style.fill = BCV_500;
        document.getElementById('item-Cdark-2').style.fill = BCV_500;
        document.getElementById('item-Cdark-3').style.fill = BCV_500;
        document.getElementById('item-Cdark-4').style.fill = BCV_500;
        document.getElementById('item-Cdark-5').style.fill = BCV_500;
        document.getElementById('item-Cdark-6').style.fill = BCV_500;
        document.getElementById('item-Cdark-66').style.fill = BCV_500;
        document.getElementById('item-Cdark-7').style.fill = BCV_500;
        document.getElementById('item-Cdark-77').style.fill = BCV_500;
        document.getElementById('item-Cdark-8').style.fill = BCV_500;
        // Font White
        document.getElementById('font-wh-1').style.color = BCV_500;
        document.getElementById('font-wh-2').style.color = BCV_500;
        document.getElementById('font-wh-3').style.color = BCV_500;
        document.getElementById('font-wh-4').style.color = BCV_500;
        document.getElementById('font-wh-5').style.color = BCV_500;
        document.getElementById('font-wh-6').style.color = BCV_500;
        document.getElementById('font-wh-7').style.color = BCV_500;
        document.getElementById('font-wh-8').style.color = BCV_500;


        // <==========================================================>

        // Section
        document.getElementById('cont-h-dark3').style.backgroundColor = PCV_500;
        document.getElementById('font-dar-3').style.color = WHCV_500;
        document.getElementById('cont-h-dark4').style.backgroundColor = PCV_500;
        document.getElementById('font-dar-4').style.color = WHCV_500;

        // Cards Main
        document.getElementById('slider-dark').style.backgroundColor = BCV_500;
        document.getElementById('slider-dark1').style.backgroundColor = BCV_500;
        // Card BG Dark
        document.getElementById('dark-info-1').style.backgroundColor = WHCV_500;
        document.getElementById('dark-info-2').style.backgroundColor = WHCV_500;
        document.getElementById('dark-info-3').style.backgroundColor = WHCV_500;
        document.getElementById('dark-info-4-r').style.backgroundColor = WHCV_500;
        document.getElementById('dark-info-5-r').style.backgroundColor = WHCV_500;
        document.getElementById('dark-info-6-r').style.backgroundColor = WHCV_500;
        // Font White
        document.getElementById('title-font-1').style.color = BCV_500;
        document.getElementById('title-font-2').style.color = BCV_500;
        document.getElementById('title-font-3').style.color = BCV_500;
        document.getElementById('td-font-1').style.color = BCV_500;
        document.getElementById('td-font-2').style.color = BCV_500;
        document.getElementById('td-font-3').style.color = BCV_500;
        document.getElementById('date-font-1').style.color = BCV_500;
        document.getElementById('date-font-2').style.color = BCV_500;
        document.getElementById('date-font-3').style.color = BCV_500;
        document.getElementById('type-dark-1').style.color = BCV_500;
        document.getElementById('type-dark-2').style.color = BCV_500;
        document.getElementById('type-dark-3').style.color = BCV_500;



        // Font White
        document.getElementById('title-font-4').style.color = BCV_500;
        document.getElementById('title-font-5').style.color = BCV_500;
        document.getElementById('title-font-6').style.color = BCV_500;
        document.getElementById('td-font-4').style.color = BCV_500;
        document.getElementById('td-font-5').style.color = BCV_500;
        document.getElementById('td-font-6').style.color = BCV_500;
        document.getElementById('date-font-4').style.color = BCV_500;
        document.getElementById('date-font-5').style.color = BCV_500;
        document.getElementById('date-font-6').style.color = BCV_500;
        document.getElementById('type-dark-4').style.color = BCV_500;
        document.getElementById('type-dark-5').style.color = BCV_500;
        document.getElementById('type-dark-6').style.color = BCV_500;

        document.getElementById('bg-dark').classList.remove('box-shawn');

        // Hover Organims
        document.getElementById('list-dark-1').classList.remove('list-dark');
        document.getElementById('list-dark-2').classList.remove('list-dark');
        document.getElementById('list-dark-3').classList.remove('list-dark');
        document.getElementById('list-dark-4').classList.remove('list-dark');
        document.getElementById('list-dark-5').classList.remove('list-dark');

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
        document.getElementById('login-dark').classList.add('dark-login');
        document.getElementById('dark-Lhelp').classList.add('dark-font');


        // Input Main
        document.getElementById('input-dark').classList.add('input-main');
        document.getElementById('bg-pc').style.fill = PCV_200;

        // Section
        document.getElementById('cont-h-dark1').style.backgroundColor = PCV_200;
        document.getElementById('font-dar-1').style.color = BCV_500;

        // Organims
        document.getElementById('bg-dark').style.backgroundColor = BCV_400;
        // Button
        document.getElementById('button-num-1').style.fill = WHCV_500;
        document.getElementById('button-num-2').style.fill = WHCV_500;
        // 
        document.getElementById('button-num').style.fill = WHCV_500;
        // Font Color
        // document.getElementById('authors-1').classList.add('font-Dwh');
        // document.getElementById('authors-2').classList.add('font-Dwh');
        // document.getElementById('authors-3').classList.add('font-Dwh');
        // document.getElementById('authors-4').classList.add('font-Dwh');
        // document.getElementById('authors-5').classList.add('font-Dwh');
        // document.getElementById('authors-6').classList.add('font-Dwh');
        // document.getElementById('authors-7').classList.add('font-Dwh');
        // document.getElementById('authors-8').classList.add('font-Dwh');
        // document.getElementById('item-dark-1').classList.add('font-Dwh');
        // document.getElementById('item-dark-2').classList.add('font-Dwh');
        // document.getElementById('item-dark-3').classList.add('font-Dwh');
        // document.getElementById('item-dark-4').classList.add('font-Dwh');
        // document.getElementById('item-dark-5').classList.add('font-Dwh');
        // document.getElementById('item-dark-6').classList.add('font-Dwh');
        // document.getElementById('item-dark-7').classList.add('font-Dwh');
        // document.getElementById('item-dark-8').classList.add('font-Dwh');

        // <==========================================================>


        // Section
        document.getElementById('cont-h-dark2').style.backgroundColor = PCV_200;
        document.getElementById('font-dar-2').style.color = BCV_500;

        // Icons Community
        document.getElementById('item-Cdark-1').style.fill = WHCV_500;
        document.getElementById('item-Cdark-2').style.fill = WHCV_500;
        document.getElementById('item-Cdark-3').style.fill = WHCV_500;
        document.getElementById('item-Cdark-4').style.fill = WHCV_500;
        document.getElementById('item-Cdark-5').style.fill = WHCV_500;
        document.getElementById('item-Cdark-5').style.fill = BCV_500;
        document.getElementById('item-Cdark-6').style.fill = WHCV_500;
        document.getElementById('item-Cdark-66').style.fill = WHCV_500;
        document.getElementById('item-Cdark-7').style.fill = WHCV_500;
        document.getElementById('item-Cdark-77').style.fill = WHCV_500;
        document.getElementById('item-Cdark-8').style.fill = WHCV_500;
        // Font White
        document.getElementById('font-wh-1').style.color = WHCV_500;
        document.getElementById('font-wh-2').style.color = WHCV_500;
        document.getElementById('font-wh-3').style.color = WHCV_500;
        document.getElementById('font-wh-4').style.color = WHCV_500;
        document.getElementById('font-wh-5').style.color = WHCV_500;
        document.getElementById('font-wh-6').style.color = WHCV_500;
        document.getElementById('font-wh-7').style.color = WHCV_500;
        document.getElementById('font-wh-8').style.color = WHCV_500;

        // <==========================================================>
        // Section
        document.getElementById('cont-h-dark3').style.backgroundColor = PCV_200;
        document.getElementById('font-dar-3').style.color = BCV_500;
        document.getElementById('cont-h-dark4').style.backgroundColor = PCV_200;
        document.getElementById('font-dar-4').style.color = BCV_500;

        // Cards Main
        document.getElementById('slider-dark').style.backgroundColor = BCV_200;
        document.getElementById('slider-dark1').style.backgroundColor = BCV_200;
        // Card BG Dark
        document.getElementById('dark-info-1').style.backgroundColor = BCV_400;
        document.getElementById('dark-info-2').style.backgroundColor = BCV_400;
        document.getElementById('dark-info-3').style.backgroundColor = BCV_400;
        document.getElementById('dark-info-4-r').style.backgroundColor = BCV_400;
        document.getElementById('dark-info-5-r').style.backgroundColor = BCV_400;
        document.getElementById('dark-info-6-r').style.backgroundColor = BCV_400;
        // Font White
        document.getElementById('title-font-1').style.color = WHCV_500;
        document.getElementById('title-font-2').style.color = WHCV_500;
        document.getElementById('title-font-3').style.color = WHCV_500;
        document.getElementById('td-font-1').style.color = WHCV_500;
        document.getElementById('td-font-2').style.color = WHCV_500;
        document.getElementById('td-font-3').style.color = WHCV_500;
        document.getElementById('date-font-1').style.color = WHCV_500;
        document.getElementById('date-font-2').style.color = WHCV_500;
        document.getElementById('date-font-3').style.color = WHCV_500;
        document.getElementById('type-dark-1').style.color = WHCV_500;
        document.getElementById('type-dark-2').style.color = WHCV_500;
        document.getElementById('type-dark-3').style.color = WHCV_500;

        // Font White
        document.getElementById('title-font-4').style.color = WHCV_500;
        document.getElementById('title-font-5').style.color = WHCV_500;
        document.getElementById('title-font-6').style.color = WHCV_500;
        document.getElementById('td-font-4').style.color = WHCV_500;
        document.getElementById('td-font-5').style.color = WHCV_500;
        document.getElementById('td-font-6').style.color = WHCV_500;
        document.getElementById('date-font-4').style.color = WHCV_500;
        document.getElementById('date-font-5').style.color = WHCV_500;
        document.getElementById('date-font-6').style.color = WHCV_500;
        document.getElementById('type-dark-4').style.color = WHCV_500;
        document.getElementById('type-dark-5').style.color = WHCV_500;
        document.getElementById('type-dark-6').style.color = WHCV_500;


        document.getElementById('bg-dark').classList.add('box-shawn');

        // Hover Organims
        document.getElementById('list-dark-1').classList.add('list-dark');
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
        document.getElementById('login-dark').classList.remove('dark-login');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');


        // Input Main
        document.getElementById('input-dark').classList.remove('input-main');
        document.getElementById('bg-pc').style.fill = PCV_500;

        // Section
        document.getElementById('cont-h-dark1').style.backgroundColor = PCV_500;
        document.getElementById('font-dar-1').style.color = WHCV_500;


        // Organims
        document.getElementById('bg-dark').style.backgroundColor = WHCV_500;
        // Button
        document.getElementById('button-num-1').style.fill = BCV_500;
        document.getElementById('button-num-2').style.fill = BCV_500;
        // 
        document.getElementById('button-num').style.fill = BCV_500;
        // Font Color
        // document.getElementById('authors-1').classList.remove('font-Dwh');
        // document.getElementById('authors-2').classList.remove('font-Dwh');
        // document.getElementById('authors-3').classList.remove('font-Dwh');
        // document.getElementById('authors-4').classList.remove('font-Dwh');
        // document.getElementById('authors-5').classList.remove('font-Dwh');
        // document.getElementById('authors-6').classList.remove('font-Dwh');
        // document.getElementById('authors-7').classList.remove('font-Dwh');
        // document.getElementById('authors-8').classList.remove('font-Dwh');
        // document.getElementById('item-dark-1').classList.remove('font-Dwh');
        // document.getElementById('item-dark-2').classList.remove('font-Dwh');
        // document.getElementById('item-dark-3').classList.remove('font-Dwh');
        // document.getElementById('item-dark-4').classList.remove('font-Dwh');
        // document.getElementById('item-dark-5').classList.remove('font-Dwh');
        // document.getElementById('item-dark-6').classList.remove('font-Dwh');
        // document.getElementById('item-dark-7').classList.remove('font-Dwh');
        // document.getElementById('item-dark-8').classList.remove('font-Dwh');

        // <==========================================================>
        // Section
        document.getElementById('cont-h-dark2').style.backgroundColor = PCV_500;
        document.getElementById('font-dar-2').style.color = WHCV_500;

        // Icons Community
        document.getElementById('item-Cdark-1').style.fill = BCV_500;
        document.getElementById('item-Cdark-2').style.fill = BCV_500;
        document.getElementById('item-Cdark-3').style.fill = BCV_500;
        document.getElementById('item-Cdark-4').style.fill = BCV_500;
        document.getElementById('item-Cdark-5').style.fill = BCV_500;
        document.getElementById('item-Cdark-6').style.fill = BCV_500;
        document.getElementById('item-Cdark-66').style.fill = BCV_500;
        document.getElementById('item-Cdark-7').style.fill = BCV_500;
        document.getElementById('item-Cdark-77').style.fill = BCV_500;
        document.getElementById('item-Cdark-8').style.fill = BCV_500;
        // Font White
        document.getElementById('font-wh-1').style.color = BCV_500;
        document.getElementById('font-wh-2').style.color = BCV_500;
        document.getElementById('font-wh-3').style.color = BCV_500;
        document.getElementById('font-wh-4').style.color = BCV_500;
        document.getElementById('font-wh-5').style.color = BCV_500;
        document.getElementById('font-wh-6').style.color = BCV_500;
        document.getElementById('font-wh-7').style.color = BCV_500;
        document.getElementById('font-wh-8').style.color = BCV_500;

        // <==========================================================>
        // Section
        document.getElementById('cont-h-dark3').style.backgroundColor = PCV_500;
        document.getElementById('font-dar-3').style.color = WHCV_500;
        document.getElementById('cont-h-dark4').style.backgroundColor = PCV_500;
        document.getElementById('font-dar-4').style.color = WHCV_500;

        // Cards Main
        document.getElementById('slider-dark').style.backgroundColor = BCV_500;
        document.getElementById('slider-dark1').style.backgroundColor = BCV_500;
        // Card BG Dark
        document.getElementById('dark-info-1').style.backgroundColor = WHCV_500;
        document.getElementById('dark-info-2').style.backgroundColor = WHCV_500;
        document.getElementById('dark-info-3').style.backgroundColor = WHCV_500;
        document.getElementById('dark-info-4-r').style.backgroundColor = WHCV_500;
        document.getElementById('dark-info-5-r').style.backgroundColor = WHCV_500;
        document.getElementById('dark-info-6-r').style.backgroundColor = WHCV_500;
        // Font White
        document.getElementById('title-font-1').style.color = BCV_500;
        document.getElementById('title-font-2').style.color = BCV_500;
        document.getElementById('title-font-3').style.color = BCV_500;
        document.getElementById('td-font-1').style.color = BCV_500;
        document.getElementById('td-font-2').style.color = BCV_500;
        document.getElementById('td-font-3').style.color = BCV_500;
        document.getElementById('date-font-1').style.color = BCV_500;
        document.getElementById('date-font-2').style.color = BCV_500;
        document.getElementById('date-font-3').style.color = BCV_500;
        document.getElementById('type-dark-1').style.color = BCV_500;
        document.getElementById('type-dark-2').style.color = BCV_500;
        document.getElementById('type-dark-3').style.color = BCV_500;


        // Font White
        document.getElementById('title-font-4').style.color = BCV_500;
        document.getElementById('title-font-5').style.color = BCV_500;
        document.getElementById('title-font-6').style.color = BCV_500;
        document.getElementById('td-font-4').style.color = BCV_500;
        document.getElementById('td-font-5').style.color = BCV_500;
        document.getElementById('td-font-6').style.color = BCV_500;
        document.getElementById('date-font-4').style.color = BCV_500;
        document.getElementById('date-font-5').style.color = BCV_500;
        document.getElementById('date-font-6').style.color = BCV_500;
        document.getElementById('type-dark-4').style.color = BCV_500;
        document.getElementById('type-dark-5').style.color = BCV_500;
        document.getElementById('type-dark-6').style.color = BCV_500;

        document.getElementById('bg-dark').classList.remove('box-shawn');
        // Hover Organims
        document.getElementById('list-dark-1').classList.remove('list-dark');
        document.getElementById('list-dark-2').classList.remove('list-dark');
        document.getElementById('list-dark-3').classList.remove('list-dark');
        document.getElementById('list-dark-4').classList.remove('list-dark');
        document.getElementById('list-dark-5').classList.remove('list-dark');


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

    // Input Main
    document.getElementById('input-dark').classList.add('input-main');
    document.getElementById('bg-pc').style.fill = PCV_200;


    // Section
    document.getElementById('cont-h-dark1').style.backgroundColor = PCV_200;
    document.getElementById('font-dar-1').style.color = BCV_500;

    // Organims
    document.getElementById('bg-dark').style.backgroundColor = BCV_400;
    // Button
    document.getElementById('button-num-1').style.fill = WHCV_500;
    document.getElementById('button-num-2').style.fill = WHCV_500;
    // 
    document.getElementById('button-num').style.fill = WHCV_500;
    // Font Color
    // document.getElementById('authors-1').classList.add('font-Dwh');
    // document.getElementById('authors-2').classList.add('font-Dwh');
    // document.getElementById('authors-3').classList.add('font-Dwh');
    // document.getElementById('authors-4').classList.add('font-Dwh');
    // document.getElementById('authors-5').classList.add('font-Dwh');
    // document.getElementById('authors-6').classList.add('font-Dwh');
    // document.getElementById('authors-7').classList.add('font-Dwh');
    // document.getElementById('authors-8').classList.add('font-Dwh');
    // document.getElementById('item-dark-1').classList.add('font-Dwh');
    // document.getElementById('item-dark-2').classList.add('font-Dwh');
    // document.getElementById('item-dark-3').classList.add('font-Dwh');
    // document.getElementById('item-dark-4').classList.add('font-Dwh');
    // document.getElementById('item-dark-5').classList.add('font-Dwh');
    // document.getElementById('item-dark-6').classList.add('font-Dwh');
    // document.getElementById('item-dark-7').classList.add('font-Dwh');
    // document.getElementById('item-dark-8').classList.add('font-Dwh');

    // <==========================================================>

    // Section
    document.getElementById('cont-h-dark2').style.backgroundColor = PCV_200;
    document.getElementById('font-dar-2').style.color = BCV_500;

    // Icons Community
    document.getElementById('item-Cdark-1').style.fill = WHCV_500;
    document.getElementById('item-Cdark-2').style.fill = WHCV_500;
    document.getElementById('item-Cdark-3').style.fill = WHCV_500;
    document.getElementById('item-Cdark-4').style.fill = WHCV_500;
    document.getElementById('item-Cdark-5').style.fill = BCV_500;
    document.getElementById('item-Cdark-6').style.fill = WHCV_500;
    document.getElementById('item-Cdark-66').style.fill = WHCV_500;
    document.getElementById('item-Cdark-7').style.fill = WHCV_500;
    document.getElementById('item-Cdark-77').style.fill = WHCV_500;
    document.getElementById('item-Cdark-8').style.fill = WHCV_500;
    // Font White
    document.getElementById('font-wh-1').style.color = WHCV_500;
    document.getElementById('font-wh-2').style.color = WHCV_500;
    document.getElementById('font-wh-3').style.color = WHCV_500;
    document.getElementById('font-wh-4').style.color = WHCV_500;
    document.getElementById('font-wh-5').style.color = WHCV_500;
    document.getElementById('font-wh-6').style.color = WHCV_500;
    document.getElementById('font-wh-7').style.color = WHCV_500;
    document.getElementById('font-wh-8').style.color = WHCV_500;

    // <==========================================================>
    // Section
    document.getElementById('cont-h-dark3').style.backgroundColor = PCV_200;
    document.getElementById('font-dar-3').style.color = BCV_500;
    document.getElementById('cont-h-dark4').style.backgroundColor = PCV_200;
    document.getElementById('font-dar-4').style.color = BCV_500;

    // Cards Main
    document.getElementById('slider-dark').style.backgroundColor = BCV_200;
    document.getElementById('slider-dark1').style.backgroundColor = BCV_200;
    // Card BG Dark
    document.getElementById('dark-info-1').style.backgroundColor = BCV_400;
    document.getElementById('dark-info-2').style.backgroundColor = BCV_400;
    document.getElementById('dark-info-3').style.backgroundColor = BCV_400;
    document.getElementById('dark-info-4-r').style.backgroundColor = BCV_400;
    document.getElementById('dark-info-5-r').style.backgroundColor = BCV_400;
    document.getElementById('dark-info-6-r').style.backgroundColor = BCV_400;
    // Font White
    document.getElementById('title-font-1').style.color = WHCV_500;
    document.getElementById('title-font-2').style.color = WHCV_500;
    document.getElementById('title-font-3').style.color = WHCV_500;
    document.getElementById('td-font-1').style.color = WHCV_500;
    document.getElementById('td-font-2').style.color = WHCV_500;
    document.getElementById('td-font-3').style.color = WHCV_500;
    document.getElementById('date-font-1').style.color = WHCV_500;
    document.getElementById('date-font-2').style.color = WHCV_500;
    document.getElementById('date-font-3').style.color = WHCV_500;
    document.getElementById('type-dark-1').style.color = WHCV_500;
    document.getElementById('type-dark-2').style.color = WHCV_500;
    document.getElementById('type-dark-3').style.color = WHCV_500;

    // Font White
    document.getElementById('title-font-4').style.color = WHCV_500;
    document.getElementById('title-font-5').style.color = WHCV_500;
    document.getElementById('title-font-6').style.color = WHCV_500;
    document.getElementById('td-font-4').style.color = WHCV_500;
    document.getElementById('td-font-5').style.color = WHCV_500;
    document.getElementById('td-font-6').style.color = WHCV_500;
    document.getElementById('date-font-4').style.color = WHCV_500;
    document.getElementById('date-font-5').style.color = WHCV_500;
    document.getElementById('date-font-6').style.color = WHCV_500;
    document.getElementById('type-dark-4').style.color = WHCV_500;
    document.getElementById('type-dark-5').style.color = WHCV_500;
    document.getElementById('type-dark-6').style.color = WHCV_500;


    document.getElementById('bg-dark').classList.add('box-shawn');

    // Hover Organims
    document.getElementById('list-dark-1').classList.add('list-dark');
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
    document.getElementById('header-sec-l').classList.remove('menu-dark');
    document.getElementById('dark-header').classList.remove('dark');
    document.getElementById('RDI-dark').classList.remove('dark');
    document.getElementById('login-dark').classList.remove('dark-login');
    document.getElementById('dark-Lhelp').classList.remove('dark-font');


    // Input Main
    document.getElementById('input-dark').classList.remove('input-main');
    document.getElementById('bg-pc').style.fill = PCV_500;

    // Section
    document.getElementById('cont-h-dark1').style.backgroundColor = PCV_500;
    document.getElementById('font-dar-1').style.color = WHCV_500;

    // Organims
    document.getElementById('bg-dark').style.backgroundColor = WHCV_500;
    // Button
    document.getElementById('button-num-1').style.fill = BCV_500;
    document.getElementById('button-num-2').style.fill = BCV_500;
    // 
    document.getElementById('button-num').style.fill = BCV_500;
    // Font Color
    // document.getElementById('authors-1').classList.remove('font-Dwh');
    // document.getElementById('authors-2').classList.remove('font-Dwh');
    // document.getElementById('authors-3').classList.remove('font-Dwh');
    // document.getElementById('authors-4').classList.remove('font-Dwh');
    // document.getElementById('authors-5').classList.remove('font-Dwh');
    // document.getElementById('authors-6').classList.remove('font-Dwh');
    // document.getElementById('authors-7').classList.remove('font-Dwh');
    // document.getElementById('authors-8').classList.remove('font-Dwh');
    // document.getElementById('item-dark-1').classList.remove('font-Dwh');
    // document.getElementById('item-dark-2').classList.remove('font-Dwh');
    // document.getElementById('item-dark-3').classList.remove('font-Dwh');
    // document.getElementById('item-dark-4').classList.remove('font-Dwh');
    // document.getElementById('item-dark-5').classList.remove('font-Dwh');
    // document.getElementById('item-dark-6').classList.remove('font-Dwh');
    // document.getElementById('item-dark-7').classList.remove('font-Dwh');
    // document.getElementById('item-dark-8').classList.remove('font-Dwh');


    // <==========================================================>
    // Section
    document.getElementById('cont-h-dark2').style.backgroundColor = PCV_500;
    document.getElementById('font-dar-2').style.color = WHCV_500;

    // Icons Community
    document.getElementById('item-Cdark-1').style.fill = BCV_500;
    document.getElementById('item-Cdark-2').style.fill = BCV_500;
    document.getElementById('item-Cdark-3').style.fill = BCV_500;
    document.getElementById('item-Cdark-4').style.fill = BCV_500;
    document.getElementById('item-Cdark-5').style.fill = BCV_500;
    document.getElementById('item-Cdark-6').style.fill = BCV_500;
    document.getElementById('item-Cdark-66').style.fill = BCV_500;
    document.getElementById('item-Cdark-7').style.fill = BCV_500;
    document.getElementById('item-Cdark-77').style.fill = BCV_500;
    document.getElementById('item-Cdark-8').style.fill = BCV_500;
    // Font White
    document.getElementById('font-wh-1').style.color = BCV_500;
    document.getElementById('font-wh-2').style.color = BCV_500;
    document.getElementById('font-wh-3').style.color = BCV_500;
    document.getElementById('font-wh-4').style.color = BCV_500;
    document.getElementById('font-wh-5').style.color = BCV_500;
    document.getElementById('font-wh-6').style.color = BCV_500;
    document.getElementById('font-wh-7').style.color = BCV_500;
    document.getElementById('font-wh-8').style.color = BCV_500;


    // <==========================================================>
    // Section
    document.getElementById('cont-h-dark3').style.backgroundColor = PCV_500;
    document.getElementById('font-dar-3').style.color = WHCV_500;
    document.getElementById('cont-h-dark4').style.backgroundColor = PCV_500;
    document.getElementById('font-dar-4').style.color = WHCV_500;

    // Cards Main
    document.getElementById('slider-dark').style.backgroundColor = BCV_500;
    document.getElementById('slider-dark1').style.backgroundColor = BCV_500;
    // Card BG Dark
    document.getElementById('dark-info-1').style.backgroundColor = WHCV_500;
    document.getElementById('dark-info-2').style.backgroundColor = WHCV_500;
    document.getElementById('dark-info-3').style.backgroundColor = WHCV_500;
    document.getElementById('dark-info-4-r').style.backgroundColor = WHCV_500;
    document.getElementById('dark-info-5-r').style.backgroundColor = WHCV_500;
    document.getElementById('dark-info-6-r').style.backgroundColor = WHCV_500;

    // Font White
    document.getElementById('title-font-1').style.color = BCV_500;
    document.getElementById('title-font-2').style.color = BCV_500;
    document.getElementById('title-font-3').style.color = BCV_500;
    document.getElementById('td-font-1').style.color = BCV_500;
    document.getElementById('td-font-2').style.color = BCV_500;
    document.getElementById('td-font-3').style.color = BCV_500;
    document.getElementById('date-font-1').style.color = BCV_500;
    document.getElementById('date-font-2').style.color = BCV_500;
    document.getElementById('date-font-3').style.color = BCV_500;
    document.getElementById('type-dark-1').style.color = BCV_500;
    document.getElementById('type-dark-2').style.color = BCV_500;
    document.getElementById('type-dark-3').style.color = BCV_500;

    // Font White
    document.getElementById('title-font-4').style.color = BCV_500;
    document.getElementById('title-font-5').style.color = BCV_500;
    document.getElementById('title-font-6').style.color = BCV_500;
    document.getElementById('td-font-4').style.color = BCV_500;
    document.getElementById('td-font-5').style.color = BCV_500;
    document.getElementById('td-font-6').style.color = BCV_500;
    document.getElementById('date-font-4').style.color = BCV_500;
    document.getElementById('date-font-5').style.color = BCV_500;
    document.getElementById('date-font-6').style.color = BCV_500;
    document.getElementById('type-dark-4').style.color = BCV_500;
    document.getElementById('type-dark-5').style.color = BCV_500;
    document.getElementById('type-dark-6').style.color = BCV_500;

    document.getElementById('bg-dark').classList.remove('box-shawn');

    // Hover Organims
    document.getElementById('list-dark-1').classList.remove('list-dark');
    document.getElementById('list-dark-2').classList.remove('list-dark');
    document.getElementById('list-dark-3').classList.remove('list-dark');
    document.getElementById('list-dark-4').classList.remove('list-dark');
    document.getElementById('list-dark-5').classList.remove('list-dark');

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