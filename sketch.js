var Hypnoticball,database,position;

function setup(){
    database= firebase.database()
    createCanvas(500,500);
    Hypnoticball = createSprite(250,250,10,10);
    Hypnoticball.shapeColor = "red";
    var Hypnoticballposition= database.ref("ball/position");
    Hypnoticballposition.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
        "x": position.x + x, 
        "y": position.y + y, 
    })

}
function readposition(data){
    position= data.val()
    Hypnoticball.x = position.x
    Hypnoticball.y = position.y
}
function showerror(){
    console.log("data is not received from the database")
}