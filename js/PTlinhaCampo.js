//linhas quadra campo

function linhas(){

		context.fillStyle = 'rgba('+ red +', '+ green +', '+ blue +', '+ alfa +')';
		context.beginPath();
		context.moveTo(100,400);
		context.lineTo(100,40);
		context.lineTo(900,40);
		context.lineTo(900,400);
		context.lineTo(100,400);
		context.closePath();
		context.fill();
		
		context.fillStyle = 'rgba('+ red2 +', '+ green2 +', '+ blue2 +', '+ alfa +')';
		context.beginPath();
		context.moveTo(105,395);
		context.lineTo(105,45);
		context.lineTo(497.5,45);
		context.lineTo(497.5,395);
		context.lineTo(105,395);
		context.closePath();
		context.fill();
		
		context.fillStyle = 'rgba('+ red2 +', '+ green2 +', '+ blue2 +', '+ alfa +')';
		context.beginPath();
		context.moveTo(502.5,395);
		context.lineTo(502.5,45);
		context.lineTo(895,45);
		context.lineTo(895,395);
		context.lineTo(502.5,395);
		context.closePath();
		context.fill();
}