/**
 *  Defines the LoginController controller
 *
 *  @author  Fei Wu
 *  @date    Jun 11, 2015
 *
 */

$(function(){
    if ($('.features-mobile').css('display') == 'none') {
        $("#tabs").tabs();
    }

    $('#icon-menu').click(
        function() {
            $('#nav-mobile').toggle(400);
        }
    );

    $('#tabs-1-switch').click(
        function() {
            $(this).toggleClass('active-blue');
            $('#tabs-2-switch').removeClass('active-blue');
            $('#tabs-3-switch').removeClass('active-blue');
            $('#tabs-4-switch').removeClass('active-blue');
            $('#tabs-5-switch').removeClass('active-blue');
            $('#tabs-1').toggle();
            $('#tabs-2').hide();
            $('#tabs-3').hide();
            $('#tabs-4').hide();
            $('#tabs-5').hide();
        }
    );

    $('#tabs-2-switch').click(
        function() {
            $(this).toggleClass('active-blue');
            $('#tabs-1-switch').removeClass('active-blue');
            $('#tabs-3-switch').removeClass('active-blue');
            $('#tabs-4-switch').removeClass('active-blue');
            $('#tabs-5-switch').removeClass('active-blue');
            $('#tabs-1').hide();
            $('#tabs-2').toggle();
            $('#tabs-3').hide();
            $('#tabs-4').hide();
            $('#tabs-5').hide();
        }
    );

    $('#tabs-3-switch').click(
        function() {
            $(this).toggleClass('active-blue');
            $('#tabs-2-switch').removeClass('active-blue');
            $('#tabs-1-switch').removeClass('active-blue');
            $('#tabs-4-switch').removeClass('active-blue');
            $('#tabs-5-switch').removeClass('active-blue');
            $('#tabs-1').hide();
            $('#tabs-2').hide();
            $('#tabs-3').toggle();
            $('#tabs-4').hide();
            $('#tabs-5').hide();
        }
    );

    $('#tabs-4-switch').click(
        function() {
            $(this).toggleClass('active-blue');
            $('#tabs-2-switch').removeClass('active-blue');
            $('#tabs-3-switch').removeClass('active-blue');
            $('#tabs-1-switch').removeClass('active-blue');
            $('#tabs-5-switch').removeClass('active-blue');
            $('#tabs-1').hide();
            $('#tabs-2').hide();
            $('#tabs-3').hide();
            $('#tabs-4').toggle();
            $('#tabs-5').hide();
        }
    );

    $('#tabs-5-switch').click(
        function() {
            $(this).toggleClass('active-blue').toggleClass('tabs-last-switch');
            $('#tabs-1-switch').removeClass('active-blue');
            $('#tabs-2-switch').removeClass('active-blue');
            $('#tabs-3-switch').removeClass('active-blue');
            $('#tabs-4-switch').removeClass('active-blue');
            $('#tabs-1').hide();
            $('#tabs-2').hide();
            $('#tabs-3').hide();
            $('#tabs-4').hide();
            $('#tabs-5').toggle();
        }
    );

    $('.tabs-last-switch-mobile').click(
        function() {
            $(this).toggleClass('tabs-last-switch');
        }
    );

    var theToggle = document.getElementById('icon-menu');

// based on Todd Motto functions
// http://toddmotto.com/labs/reusable-js/

// hasClass
    function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
// addClass
    function addClass(elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    }
// removeClass
    function removeClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }
// toggleClass
    function toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0 ) {
                newClass = newClass.replace( " " + className + " " , " " );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }

    theToggle.onclick = function() {
        toggleClass(this, 'on');
        return false;
    }
});