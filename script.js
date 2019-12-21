$(document).ready(function () {
    alert('Структура страницы сформирована, можно приступать!');
});


$('h1').css({
    'color': 'red'
});


$(".content").addClass("necontent");
$('.necontent').css({
    'color': 'green'
});

$('#way').click(function () {
    alert('Вы нажали на элемент "way"');
});

$("div").find("span");


$('li').filter(function (index) {
    return $('strong', this).length == 1;
}).css('background-color', 'red');

$(".nani").toggleClass("nani1 nani2", false);


$(".attr").attr("class", "attrgo")