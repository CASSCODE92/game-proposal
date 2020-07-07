window.onload = alert("Press space bar to travel to grandma's house and avoid the grey wolves. Good luck!");

var player = document.getElementById("player");
var wolves = document.getElementsByClassName("wolves");

player.style.top = 540 + "px"; player.style.left = 625 + "px";

wolves[0].style.top = 70 + "px";
 
wolves[1].style.top = 140 + "px";
wolves[1].style.left = 1140 + "px";

wolves[2].style.top = 210 + "px";

wolves[3].style.top = 280 + "px";
wolves[3].style.left = 1140 + "px";

wolves[4].style.top = 350 + "px";

wolves[5].style.top = 420 + "px";
wolves[5].style.left = 1140 + "px";

var w0 = setInterval(run0, 10);
var w2 = setInterval(run2, 10);
var w4 = setInterval(run4, 10);

var w1 = setInterval(run1, 10);
var w3 = setInterval(run3, 10);
var w5 = setInterval(run5, 10);

var spot = 0;
var spot1 = 1140;

var time = setInterval(run1h, 500);

function run1() {
    if(spot >= 1140){
        clearInterval(time);
    }
    else {
        spot += 10;
        wolves[0].style.left = spot + "px";
    }

    function run2() {
        if(spot >= 1140){
            clearInterval(time);
        }
        else {
            spot += 10;
            wolves[0].style.left = spot + "px";
        }
    }
    