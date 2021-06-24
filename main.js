// $(document).ready(function() {
//     $("#img1").attr("src", ".asset/img01.jpg");
//     $("#img2").attr("src", ".asset/img02.jpg");
//     $("#img3").attr("src", ".asset/img03.jpg");
// });

var images = new Array ();
images[0] = "asset/img01.jpg";
images[1] = "asset/img02.jpg";
images[2] = "asset/img03.jpg";
images[3] = "asset/img03.jpg";
var size = images.length
var x = Math.floor(size*Math.random())

// $('#random').attr('src',image[x]);

$('.all').css('background-image', 'url('+ images[x] +')');


// $('myObject').css('background-image', 'url(' + imageUrl + ')');