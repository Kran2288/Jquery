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


$(".attr").attr("class", "attrgo");

$("input[type='checkbox']").prop({
    disabled: true
});

$('#triger').bind('click', function () {
    alert('Шла Саша по шоссе');
});

$('#triger').trigger('click');


$("#im1").hide(4000);
$("#im2").hide(10000);
$("#im1").show("slow");
$("#im2").show("slow");

$(".list").wrap("<div class='hoy'></div>");

$(".list").prepend("<li class='item'> Тест </li>");

$(".list").append("<li class='item'>Тест</li>");
