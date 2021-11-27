song="";
function preload(){
song=loadSound("music.mp3");
}

leftwristX=0;
rightwristX=0;
leftwristY=0;
rightwristY=0;
leftscore=0;
rightscore=0;

function setup(){
canvas=createCanvas(600,500);
canvas.position(650,225);
video=createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video,modelLoaded);
posenet.on("pose", gotposes);
}

function modelLoaded(){
    console.log("Posenet is Initialized");
}

function gotposes(results){
if (results.length>0){
    console.log(results);
    scoreleftwrist=results[0].pose.keypoints[9].score;
    scorerightwrist=results[0].pose.keypoints[10].score;
    console.log("scoreleftwrist=" + scoreleftwrist + "scorerightwrist=" + scorerightwrist);

    rightwristX=results[0].pose.rightWrist.x;
    rightwristY=results[0].pose.rightWrist.y;
    leftwristX=results[0].pose.leftWrist.x;
    leftwristY=results[0].pose.leftWrist.y;
    console.log(rightwristX,rightwristY,leftwristX,leftwristY);
}

}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function draw(){
    image(video,0,0,600,500 );
    fill("#d20b0c");
    stroke("#d20b0c");
    if (score=0.2){
        circle(leftwristX,leftwristY,20);
    numberleftwristY=Number(leftwristY);
    finalleftwristY=floor(numberleftwristY);
    volume=finalleftwristY/500;
    document.getElementById("volume").innerHTML="Volume - " + volume;
    song.setVolume(volume);
    }


}
