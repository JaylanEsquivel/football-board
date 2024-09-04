
var canvas = document.getElementById('myCanvas2');
var modalSelect = document.getElementById("sport");
var qCorSelect = document.getElementById("quadraCor");
var lCorSelect = document.getElementById("linhaCor");
var corTime1Select = document.getElementById("corTime1");
var corTime2Select = document.getElementById("corTime2");

canvas.width = 950;
canvas.height = 450;

var cw = canvas.width;
var ch = canvas.height;
var context = canvas.getContext('2d');

var corTime1 = '#00f';
var corTime2 = '#f00';

var red = 255;
var green = 255;
var blue = 255;
var alfa = 1;

var red2 = 10;
var green2 = 200;
var blue2 = 10;

include("PTdragDrop.js");
		
//combo da option de cor da quadra ou campo

qCorSelect.addEventListener( 'change', function(){
			
		if(qCorSelect.value == "1" ){
	   			red = 255;
				green = 220;
				blue = 0;

			} else if(qCorSelect.value == "2" ){
	   			red = 200;
				green = 10;
				blue = 10;
		
			} else if(qCorSelect.value == "3" ){
	   			red = 10;
				green = 200;
				blue = 10;

			} else if(qCorSelect.value == "4" ){
	   			red = 10;
				green = 10;
				blue = 200;

			} else if(qCorSelect.value == "5" ){
	   			red = 0;
				green = 0;
				blue = 0;

			} else if(qCorSelect.value == "6" ){
	   			red = 255;
				green = 255;
				blue = 255;

			} else {
	   			red = 255;
				green = 150;
				blue = 0;
			}
			atualizar();
});
		
//combo da option de cores das linhas
		
lCorSelect.addEventListener( 'change', function(){
		
		if(lCorSelect.value == "1" ){
	   			red2 = 255;
				green2 = 220;
				blue2 = 0;
		
			} else if(lCorSelect.value == "2" ){
	   			red2 = 200;
				green2 = 10;
				blue2 = 10;
				
			} else if(lCorSelect.value == "3" ){
	   			red2 = 10;
				green2 = 200;
				blue2 = 10;

				
			} else if(lCorSelect.value == "4" ){
				red2 = 0;
				green2 = 204;
				blue2 = 255;

				
			} else if(lCorSelect.value == "5" ){
	   			red2 = 0;
				green2 = 0;
				blue2 = 0;

				
			} else if(lCorSelect.value == "6" ){
	   			red2 = 255;
				green2 = 255;
				blue2 = 255;

				
			} else {
	   			red2 = 255;
				green2 = 150;
				blue2 = 0;
			}
			atualizar();
});
			
//combo da option de modalidades
		
modalSelect.addEventListener( 'change', function(){
			atualizar();
});

//combo da option de cores time A
		
corTime1Select.addEventListener( 'change', function(){
			atualizar();
});

//combo da option de cores time B
		
corTime2Select.addEventListener( 'change', function(){
			atualizar();
});