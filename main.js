var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

radiuscircle = 10;
color = "red";
widthoftheline = 1;

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e){
    mouseEvent = "mousedown";
    color = document.getElementById("color").value;
    widthoftheline = document.getElementById("widthoftheline").value;
    radiuscircle = document.getElementById("Radius").value;
}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e){
    currentmouseXposition = e.clientX - canvas.offsetLeft;
    currentmouseYposition = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        console.log("Current X and Y position of cursor = "+currentmouseXposition+","+currentmouseYposition);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthoftheline;
        ctx.arc(currentmouseXposition,currentmouseYposition,radiuscircle,0,2*Math.PI);
        ctx.stroke();
    }

}

canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

function TheJantior(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}