//html elements
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// static variables
const width = canvas.width;
const height =canvas.height

// build play area
ctx.fillStyle ="black";
ctx.fillRect(0,0,width,height);

// draw the current state of the canvas
function draw()
{
// draw/redraw play area
    ctx.fillStyle ="black";
    ctx.fillRect(0,0,width,height);

// draw/redraw ball
    ctx.fillStyle="white";
    ctx.fillRect(ball_move.x,ball_move.y,ball_size,ball_size);

// --draw paddle--
// draw left paddle
    ctx.fillRect(paddle_offset,left_paddle_top,paddle_width,paddle_height);

    ctx.fillRect((width - paddle_offset - paddle_width),right_paddle_top,paddle_width,paddle_height);
}



// -------BALL-----------
// (global) dictate the ball size
const ball_size = 10;
// (global) dictates starting position of the ball
var ball_move = { x:20 , y:30 }

// (global) horizontal nand vertical rate of change
var x_speed = 5;
var y_speed = 3;



//update the ball's current xy
function update_ball()
{
    ball_move.x += x_speed;
    ball_move.y += y_speed;
}

function ball_bounce()
{
// (Local) ball object to track the sides of the ball
    var ball = {
        left: ball_move.x,
        right: ball_move.x + ball_size,
        top: ball_move.y,
        bottom: ball_move.y + ball_size
    }

// if the ball hits the left/right side of the canvas
    if(ball.left < 0 || ball.right > width)
    {
// reverse the travel direction
        x_speed = -x_speed
    };
// if the ball hits the top/ bottom side of the canvas
    if(ball.top < 0 || ball.right > height)
    {
// reverse the travel direction
        y_speed = -y_speed
    };

}



//~~~~~~PADDLE~~~~~~

const paddle_width = 5; 
const paddle_height = 50;
const paddle_offset = 10;

var left_paddle_top = 30;
var right_paddle_top = 30;




//main game loop
function game_loop()
{
    draw();
    update_ball();
    ball_bounce();
    setTimeout(game_loop, 30);
}

// call main loop to start the game
game_loop();