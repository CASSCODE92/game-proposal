//Player Direction
window.onload = alert("Use the arrow keys to navigate to grandma's house and avoid the gray wolves. Good luck!");

class Block {
    x = 0
    y = 0
    wolfObject = {

    }

    constructor(wolfObj) {
        this.wolfObject = wolfObj
    }

}

//Attach DOM Element
var player = document.getElementById("player");
var wolves = document.getElementsByClassName("wolves");
var playerRedY = 625;
var playerRedX = 548;
var overEdge = false;


let wolves_0 = new Block(wolves[0])
wolves_0.y = 70;

//position player(Little Red Riding Hood) and wolves boxes
//player.style.top = 540 + "px";
//player.style.left = 625 + "px";

// wolves[0].style.top = 70 + "px";
wolves_0.wolfObject.style.top = wolves_0.y + "px";

wolves[1].style.top = 140 + "px";
wolves[1].style.left = 1140 + "px";

wolves[2].style.top = 210 + "px";

wolves[3].style.top = 280 + "px";
wolves[3].style.left = 1140 + "px";

wolves[4].style.top = 350 + "px";

wolves[5].style.top = 420 + "px";
wolves[5].style.left = 1140 + "px";

//timer for left wolves
//Parameters (function,time value in milliseconds)
var w0 = setInterval(run0, 300);
var w2 = setInterval(run2, 1000);
var w4 = setInterval(run4, 500);
//timer for right wolves
var w1 = setInterval(run0, 1700);
var w3 = setInterval(run3, 900);
var w5 = setInterval(run5, 2000);
// setInterval(function(){ alert("Hello"); }, 3000);
//Declare box's position
var spot = 0;
// var spot1 = 1140; 




//move wolves on the left side to the right
// if spot DOES NOT equal 0, take spot and SUBTRACT 5
function run0() {
    if (spot != 0) {
        spot -= 5;
        wolves[0].style.left = spot + "px";
        // left side of box will move 5 pixels to left
        // concactinating (or combining) the number with the pixels
    } 
    else if (spot == 0) {
        while (spot <= 1140) {
            spot += 15;
            wolves[0].style.left = spot + "px";
            // while the value of spot is less than or equal to 1140, add 15 pixels 
            // to the left to make it push to the right
        }
    }
}

function run1() {
    if (spot != 0) {
        spot -= 50;
        wolves[1].style.left = spot + "px";
    } 
    else if (spot == 0) {
        while (spot <= 1140) {
            spot += 50;
            wolves[1].style.left = spot + "px";
        }
    }
}

function run2() {
    if (spot != 0) {
        spot -= 40;
        wolves[2].style.left = spot + "px";
    } 
    else if (spot == 0) {
        while (spot <= 1140) {
            spot += 40;
            wolves[2].style.left = spot + "px";
        }
    }
}

function run3() {
    if (spot != 0) {
        spot -= 25;
        wolves[3].style.left = spot + "px";
    } 
    else if (spot == 0) {
        while (spot <= 1140) {
            spot += 25;
            wolves[3].style.left = spot + "px";
        }
    }
}

function run4() {
    if (spot != 0) {
        spot -= 35;
        wolves[4].style.left = spot + "px";
    } 
    else if (spot == 0) {
        while (spot <= 1140) {
            spot += 35;
            wolves[4].style.left = spot + "px";
        }
    }
}

function run5() {
    if (spot != 0) {
        spot -= 20;
        wolves[5].style.left = spot + "px";
    } 
    else if (spot == 0) {
        while (spot <= 1140) {
            spot += 20;
            wolves[5].style.left = spot + "px";
        }
    }
}

// function run2() {
//     if (spot >= 1140) {
//         clearInterval(w2);
//     } else {
//         spot += 1;
//         wolves[2].style.left = spot + "px";
//     }
// }

// function run4() {
//     if (spot >= 1140) {
//         clearInterval(w4);
//     } else {
//         spot += 10;
//         wolves[4].style.left = spot + "px";
//     }
// }


// // //move wolves on right side to the left
// // function run1() {
// //     if (spot1 <= 0) {
// //         clearInterval(w1);
// //     } else {
// //         spot1 -= 10;
// //         wolves[1].style.left = spot1 + "px";
// //     }
// // }

// function run3() {
//     if (spot1 <= 0) {
//         clearInterval(w3);
//     } else {
//         spot1 -= 10;
//         wolves[3].style.left = spot1 + "px";
//     }
// }

// function run5() {
//     if (spot1 <= 0) {
//         clearInterval(w5);
//     } else {
//         spot1 -= 1;
//         wolves[5].style.left = spot1 + "px";
//     }
// }

// box collision detection
var playerBox = {
    pl: player.style.left,
    pt: player.style.top,
    width: 50,
    height: 50
};
// var wolvesBox = {wl: wolves.style.left, wt: wolves.style.top, width: 50, height: 50};

//d=√((x_2-x_1)²+(y_2-y_1)²)

function distance(point1, point2) {
    let temp1 = point2.x - point1.x
    let temp2 = point2.y - point1.y
    let tempSum = (temp1 * temp1) + (temp2 * temp2)
    let distance = Math.sqrt(tempSum)
    return distance

}


function collide() {
    // testing functionality with alerts
    if (playerBox.pl < wolvesBox.wl + wolvesBox.width && playerBox.pl + playerBox.width > wolvesBox.wl && playerBox.pt < wolvesBox.wt + wolvesBox.height && playerBox.pt + playerBox.height > wolvesBox.wt) {
        alert("plan A");
    } else {
        alert("plan B");
    }
};



var spot2 = 540;

// function movePlayer() {
//     if (spot2 <= 0) {
//         return alert("?");
//     } else {
//         spot2 -= 1;
//         player.style.top = spot2 + "px";
//     }
// }
//player.addEventListener("click", movePlayer());

//  () => {   -is a function (eS6)
let playerRed = null;
let init = () => {
    playerRed = document.getElementById("player");
    playerRed.style.position = 'relative';
    playerRed.style.left = '625px';
    playerRed.style.top = '548px';
}


// switch statement from w3 schools
document.onkeydown = function (event) {
    switch (event.key) {
        case 'ArrowUp':
            // up arrow
            playerRedY -= 10;
            playerRed.style.top = playerRedY + 'px';
            break;
        case 'ArrowDown':
            // down arrow
            playerRedY += 10;
            playerRed.style.top = playerRedY + 'px';
            break;
        case 'ArrowRight':
            // right arrow
            playerRedX += 10;
            playerRed.style.left = playerRedX + 'px';
            break

        case 'ArrowLeft':
            // left arrow
            playerRedX -= 10;
            playerRed.style.left = playerRedX + 'px';
            break;

    }
}


function moveLeft() {
    playerRed.style.left = parseInt(playerRed.style.left) - 5 + 'px';

}

function moveUp() {
    playerRed.style.top = parseInt(playerRed.style.top) - 5 + 'px';

}

function moveRight() {
    playerRed.style.left = parseInt(playerRed.style.left) + 5 + 'px';

}

function moveDown() {
    playerRed.style.top = parseInt(playerRed.style.top) + 5 + 'px';

}

window.onload = init;