
var wolves = document.getElementsByClassName("wolves");

wolves[0].style.top = 70 + "px";

wolves[1].style.top = 140 + "px";
wolves[1].style.left = 1140 + "px";

wolves[2].style.top = 210 + "px";

wolves[3].style.top = 280 + "px";
wolves[3].style.left = 1140 + "px";

wolves[4].style.top = 350 + "px";

wolves[5].style.top = 420 + "px";
wolves[5].style.left = 1140 + "px";

var spot = 0;

var time = setInterval(run1h, 500);

function run1() {
    if(spot >= 1140){
        clearInterval(time);
    }
    else {
        spot += 10;
        wolves[0].style.left = spot + "px";
    }