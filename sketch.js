var object;
function setup(){
    createCanvas(400,400);

    object = createSprite(200,200,20,20);
    object.shapeColor = "red";
    
}

function draw(){
    background(255);
    
    if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,1);
    }
    else if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    

    drawSprites();
}

function changePosition(x,y){
    object.x = object.x + x;
    object.y = object.y + y;
}
