

var images = new Array ();
images[0] = "asset/img01.jpg";
images[1] = "asset/img02.jpg";
images[2] = "asset/img03.jpg";
images[3] = "asset/img03.jpg";
var size = images.length
var x = Math.floor(size*Math.random())



$('.all').css('background-image', 'url('+ images[x] +')');

//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
	currentTextInput = txtID123;
}