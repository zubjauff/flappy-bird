//press any button to start the game
//touch tunnel, dies  
//comment getelemtbyid


"use strict";

//getting references 
let bird = document.querySelector('.bird');
let pipe1 = document.querySelector('.pipe');
let pipe2 = document.querySelector('.pipe');
let background = document.querySelector('.background');
let reset = document.querySelector('#reset');
let instructions = document.querySelector('#instructions');
let gameOver = document.querySelector('#gameOver');
let pipes= []
let birdY=50
let flapping = false
let collision = false

//const movement of screen
let move_speed = 3;
//gravity
let gravity = 0.5;


function makePipe(){    
    let bottomHalf = document.createElement("div")
    bottomHalf.className="pipe"
    document.body.appendChild(bottomHalf)
    let h = Math.random()*60 //randomly generate
    bottomHalf.style.height= h +"vh" //randomly generate height
    bottomHalf.style.top=100-h +"vh" //position on the screen (100)
    pipes.push({div:bottomHalf,x:100,height:h})

    let topHalf = document.createElement("div")
    topHalf.className="pipe"
    document.body.appendChild(topHalf)
    let gap = 20 //+ Math.random *20 - 20+20
    topHalf.style.height= (100 - h)- gap +"vh" //randomly generate height
    // bottomHalf.style.bottom=100 +"vh" //position on the screen (100)
    pipes.push({div:topHalf,x:100,height:h})

    // bottomHalf.style.height + topHalf.style.height = 80h +"vh"

}


function movePipes(){
    moveBird()
    //use a forloop to move each pipe in the array (pipes)
    for (let i = 0; i < pipes.length; i++) {
        pipes[i].div.style.left=pipes[i].x + "vw"
        pipes[i].x--
        
        if (pipes[i].x>=30 && pipes[i].x<=34){  //bird is overlapping pipe horizontally
            if (birdY+6 > (100-pipes[i].height)){
                console.log("hit bottom")
                alert("you died")
                window.location.reload()
               
            }
            
            if (birdY<(100-pipes[i].height)- 20){
                console.log("hit top")
                alert("you died")
                window.location.reload()
            }

        }
    }
}

setInterval(movePipes,100) 
//move 1/10 of a sec
setInterval(makePipe,3500)
//make every 3.5sec


//bird.length - length of the array [1-2-3-4-5-...]


//gravity(falling)
function moveBird(){
    bird.style.top=birdY +"vh"
    if (flapping){
        birdY -- //flying
    }
    else {
        birdY ++ //grvaity
    }

    // //contact with the pole
    // if ( collision( birdY, pipes ) ) {
    //     gameOver();

    
}


//move bird 
document.addEventListener( "keydown", function ( e ) {
    flapping = true
} )

document.addEventListener( "keyup", function ( e ) {
    flapping = false
} )


 
//------------------------------------------------

// // Check for collisions
// if ( collision( bird, pipes)  ) {
//     gameOver();
// }


// function gameOver() {
//     window.console.log( "game over" );
//     playing = false;
//     restartBtn.addEventListener( 'click', restart );
// }




// let [left1, top1, right1, bottom1] = [bird],
//     [(100,0), (100,h), (105,h), (105,0)]

//     [left2, top2, right2, bottom2] = [pipes];
//     [(30,50),(30,44), (34,44), (34,50)]


// function collision( bird, pipes ) {
//     // Get the top left coords of the first div
//     let left1 = bird.getBoundingClientRect().left;
//     let top1 = bird.getBoundingClientRect().top;

//     // Get the dimensions of the first div
//     let height1 = bird.clientHeight;
//     let width1 = bird.clientWidth;

//     let bottom1 = top1 + height1;
//     let right1 = left1 + width1;
//     let left2 = pipes.getBoundingClientRect().left;
//     let top2 = pipes.getBoundingClientRect().top;
//     let height2 = pipes.clientHeight;
//     let width2 = pipes.clientWidth;
//     let bottom2 = top2 + height2;
//     let right2 = left2 + width2;

//     if ( bottom1 < top2 || top1 > bottom2 || right1 < left2 || left1 > right2 )
//     return false;
//     return true;
// }

