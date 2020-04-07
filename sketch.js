//create variables
var ball;
var database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,30,30);
    ball.shapeColor = "purple";
    //.ref is for reffering to the database 
var ball_position=database.ref('Ball/position');
ball_position.on("value",readPosition,showError);


}

function draw(){
    background("Black");
    //move the sprite on the following events 
    if(keyDown(LEFT_ARROW)){
        WritePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
    WritePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        WritePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        WritePosition(0,+1);
    }
    drawSprites();
}

function WritePosition(x,y){
    database.ref('Ball/position').set({
        //setting the positions
        'X':position.X+x,
        'Y':position.Y+y
    })
}
function readPosition(data){
    //
    position=data.val();
    ball.x=position.X
    ball.y=position.Y
    //in respect to the balls position

}
function showError(){
    console.log("error in reading the data")
}