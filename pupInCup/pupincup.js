// 1
$('document').ready(function () {
   console.log('Let’s get ready to party with jQuery!');
});

// 2
$('article img').addClass('image-center');

// 3
$('article p').eq(5).remove();

// 4
let rand = Math.floor(Math.random() * 100);
$('#title').css('font-size', rand);

// 5
$('ol').append('<li>whatever you want</li>');

// 6
$('aside').children().remove();
$('aside').append(
   '<p>I apologize for all the pain i have caused with my previous list slander</p>'
);

// 7
$('input').on('keyup', function () {
   let r = $('input').eq(0).val();
   let b = $('input').eq(1).val();
   let g = $('input').eq(2).val();
   $('body').css('background-color', `rgb(${r},${b},${g})`);
});

// 8
$('img').on('click', function () {
   $(this).remove();
});
