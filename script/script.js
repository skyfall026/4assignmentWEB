const music1 = new Audio('/Alizhan/audio/Phil France - The Swimmer.mp3');
const easter = new Audio('/Alizhan/audio/easterEgg.mp3')
$(document).ready(() => {
    music1.volume = 0.15;
    music1.play();
});
$('#assortiment').slideToggle();
$('.mayble').slideToggle();
$(document).keypress(function (e) { 
    if (e.key === 'm') {
        music1Tog();
    }
});

$('.music-box').click(function () { 
    music1Tog();
});


function music1Tog() {
    if (music1.paused == true) {
        music1.play();
    } else {
        music1.pause();
    }
};


$('#themes').click(function () { 
    $('#themes').toggleClass('dark-mode-button');    
    $('body').toggleClass('bg-dark');
    $('body').toggleClass('text-white');;
    $('.container-fluid').toggleClass('dark-mode');
    $('.anchorFix').toggleClass('text-white');
});


$('#arrowDownAssortiment').click(function () { 
    $('#assortiment').slideToggle();
    $('#arrowDownAssortiment').toggleClass('upsideDown');
});

$('#arrowDownPricelist').click(function () { 
    $('.mayble').slideToggle();
    $('#arrowDownPricelist').toggleClass('upsideDown');
});

$('#easter').mouseover(function () { 
    easter.play(); 
});