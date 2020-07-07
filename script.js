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



//wolves on the left side
function run0() {
    if(spot >= 1140){
        clearInterval(w0);
    }
    else {
        spot += 1;
        wolves[0].style.left = spot + "px";
    }
}

function run2() {
    if(spot >= 1140){
        clearInterval(w2);
    }
    else {
        spot += 1;
        wolves[2].style.left = spot + "px";
    }
}

function run4() {
    if(spot >= 1140){
        clearInterval(w4);
    }
    else {
        spot += 1;
        wolves[4].style.left = spot + "px";
    }
}


//wolves on right side
function run1() {
    if(spot1 <= 0){
        clearInterval(w1);
    }
    else {
        spot1 -= 1;
        wolves[1].style.left = spot1 + "px";
    }
}

function run3() {
    if(spot1 <= 0){
        clearInterval(w3);
    }
    else {
        spot1 -= 1;
        wolves[3].style.left = spot1 + "px";
    }
}

function run5() {
    if(spot1 <= 0){
        clearInterval(w5);
    }
    else {
        spot1 -= 1;
        wolves[5].style.left = spot1 + "px";
    }
}


var playerBox = {pl: player.style.left, pt: player.style.top, width: 50, height: 50};
var wolvesBox = {wl: wolves.style.left, wt: wolves.style.top, width: 50, height: 50};

function collide() {
if(playerBox.pl < wolvesBox.wl + wolvesBox.width && playerBox.pl + playerBox.width > wolvesBox.wl && playerBox.pt < wolvesBox.wt + wolvesBox.height && playerBox.pt + playerBox.height > wolvesBox.wt) {
        alert("plan A");
    } 
    else {
        alert("plan B");
    }
};
