//movimenta os botoes
include("PTclearCanvas.js");
include("PTtitleText.js");
include("PTlinhaCampo.js");
include("PTareaFutebol.js");
var objetos = [],
  objetoAtual = null,
  inicioX = 0,
  inicioY = 0;

function atualizar() {
  apaga();
  texto();
  linhas();

  areaFut();

  atualBotoes();
}

function atualBotoes() {
  for (var i = 0; i < objetos.length; i++) {
    //função altera cor dos botões
    if (corTime1Select.value == "1") {
      corTime1 = "#00f";
      numTime1 = "white";
    } else if (corTime1Select.value == "2") {
      corTime1 = "#f00";
      numTime1 = "white";
    } else if (corTime1Select.value == "3") {
      corTime1 = "#0f0";
      numTime1 = "white";
    } else if (corTime1Select.value == "4") {
      corTime1 = "#ff0";
      numTime1 = "black";
    } else if (corTime1Select.value == "5") {
      corTime1 = "#000";
      numTime1 = "white";
    }

    if (corTime2Select.value == "1") {
      corTime2 = "#00f";
      numTime2 = "white";
    } else if (corTime2Select.value == "2") {
      corTime2 = "#f00";
      numTime2 = "white";
    } else if (corTime2Select.value == "3") {
      corTime2 = "#0f0";
      numTime2 = "white";
    } else if (corTime2Select.value == "4") {
      corTime2 = "#ff0";
      numTime2 = "black";
    } else if (corTime2Select.value == "5") {
      corTime2 = "#000";
      numTime2 = "white";
    }

    if (i < 11) {
      objetos[i].color = corTime1;
      context.fillStyle = objetos[i].color;
      context.beginPath();
      context.arc(
        objetos[i].x,
        objetos[i].y,
        objetos[i].radius,
        0,
        2 * Math.PI,
        false
      );
      context.closePath();
      context.fill();
      context.fillStyle = numTime1;
    }
    if (i > 10 && i < 22) {
      objetos[i].color = corTime2;
      context.fillStyle = objetos[i].color;
      context.beginPath();
      context.arc(
        objetos[i].x,
        objetos[i].y,
        objetos[i].radius,
        0,
        2 * Math.PI,
        false
      );
      context.closePath();
      context.fill();
      context.fillStyle = numTime2;
    }

    //if(objetos[i].number > 9){
    if (i == 9 || i == 10 || i == 20 || i == 21) {
      context.font = "bold 0.9em Arial";
      context.fillText(
        objetos[i].number,
        objetos[i].x - (objetos[i].radius * 3) / 4,
        objetos[i].y + objetos[i].radius / 2
      );
    } else if (i == 22) {
      objetos[22].number = "⚽";
      context.fillText(
        objetos[i].number,
        objetos[i].x - objetos[i].radius,
        objetos[i].y + objetos[i].radius / 2
      );
    } else {
      context.font = "bold 1em Arial";
      context.fillText(
        objetos[i].number,
        objetos[i].x - objetos[i].radius / 2,
        objetos[i].y + objetos[i].radius / 2
      );
    }
  }
}

function iniMouse() {
  canvas.addEventListener("mousedown", doMouseDown, false);
  canvas.addEventListener("mousemove", doMouseMove, false);
  canvas.addEventListener("mouseup", doMouseUp, false);
}

function iniTouch() {
  canvas.addEventListener("touchstart", doTStart, false);
  canvas.addEventListener("touchmove", doTMove, false);
  canvas.addEventListener("touchend", doTEnd, false);
}

//criando os botões

function botoes() {
  objetos[0] = {
    x: 110,
    y: 20,
    radius: 10,
    color: corTime1,
    number: "1",
  };
  objetos[1] = {
    x: 130,
    y: 20,
    radius: 10,
    color: corTime1,
    number: "2",
  };
  objetos[2] = {
    x: 150,
    y: 20,
    radius: 10,
    color: corTime1,
    number: "3",
  };
  objetos[3] = {
    x: 170,
    y: 20,
    radius: 10,
    color: corTime1,
    number: "4",
  };
  objetos[4] = {
    x: 190,
    y: 20,
    radius: 10,
    color: corTime1,
    number: "5",
  };
  objetos[5] = {
    x: 210,
    y: 20,
    radius: 10,
    color: corTime1,
    number: "6",
  };
  objetos[6] = {
    x: 230,
    y: 20,
    radius: 10,
    color: corTime1,
    number: "7",
  };
  objetos[7] = {
    x: 250,
    y: 20,
    radius: 10,
    color: corTime1,
    number: "8",
  };
  objetos[8] = {
    x: 270,
    y: 20,
    radius: 10,
    color: corTime1,
    number: "9",
  };
  objetos[9] = {
    x: 290,
    y: 20,
    radius: 10,
    color: corTime1,
    number: "10",
  };
  objetos[10] = {
    x: 310,
    y: 20,
    radius: 10,
    color: corTime1,
    number: "11",
  };
  objetos[11] = {
    x: 330,
    y: 20,
    radius: 10,
    color: corTime2,
    number: "1",
  };
  objetos[12] = {
    x: 350,
    y: 20,
    radius: 10,
    color: corTime2,
    number: "2",
  };
  objetos[13] = {
    x: 370,
    y: 20,
    radius: 10,
    color: corTime2,
    number: "3",
  };
  objetos[14] = {
    x: 390,
    y: 20,
    radius: 10,
    color: corTime2,
    number: "4",
  };
  objetos[15] = {
    x: 410,
    y: 20,
    radius: 10,
    color: corTime2,
    number: "5",
  };
  objetos[16] = {
    x: 430,
    y: 20,
    radius: 10,
    color: corTime2,
    number: "6",
  };
  objetos[17] = {
    x: 450,
    y: 20,
    radius: 10,
    color: corTime2,
    number: "7",
  };
  objetos[18] = {
    x: 470,
    y: 20,
    radius: 10,
    color: corTime2,
    number: "8",
  };
  objetos[19] = {
    x: 490,
    y: 20,
    radius: 10,
    color: corTime2,
    number: "9",
  };
  objetos[20] = {
    x: 510,
    y: 20,
    radius: 10,
    color: corTime2,
    number: "10",
  };
  objetos[21] = {
    x: 530,
    y: 20,
    radius: 10,
    color: corTime2,
    number: "11",
  };
  objetos[22] = {
    x: 550,
    y: 20,
    radius: 10,
    color: "",
    number: "⚽",
  };
  atualizar();
}

function doMouseDown(event) {
  for (var i = 0; i < objetos.length; i++) {
    if (
      objetos[i].x - objetos[i].radius <= event.pageX &&
      objetos[i].x + objetos[i].radius >= event.pageX &&
      objetos[i].y - objetos[i].radius <= event.pageY &&
      objetos[i].y + objetos[i].radius >= event.pageY
    ) {
      objetoAtual = objetos[i];
      inicioX = event.pageX - objetos[i].x;
      inicioY = event.pageY - objetos[i].y;
      break;
    }
  }
}

function doMouseMove(event) {
  if (objetoAtual != null) {
    objetoAtual.x = event.pageX - inicioX;
    objetoAtual.y = event.pageY - inicioY;
  }
  atualizar();
}

function doMouseUp(event) {
  objetoAtual = null;
}

function doTStart(event) {
  event.preventDefault();
  for (var i = 0; i < objetos.length; i++) {
    if (
      objetos[i].x - objetos[i].radius <= event.targetTouches[0].pageX &&
      objetos[i].x + objetos[i].radius >= event.targetTouches[0].pageX &&
      objetos[i].y - objetos[i].radius <= event.targetTouches[0].pageY &&
      objetos[i].y + objetos[i].radius >= event.targetTouches[0].pageY
    ) {
      objetoAtual = objetos[i];
      inicioX = event.targetTouches[0].pageX - objetos[i].x;
      inicioY = event.targetTouches[0].pageY - objetos[i].y;
      break;
    }
  }
}

function doTMove(event) {
  if (objetoAtual != null) {
    objetoAtual.x = event.targetTouches[0].pageX - inicioX;
    objetoAtual.y = event.targetTouches[0].pageY - inicioY;
  }
  atualizar();
}

function doTEnd(event) {
  objetoAtual = null;
}
