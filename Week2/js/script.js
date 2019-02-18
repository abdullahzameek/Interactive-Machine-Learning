//var allows redefinitions of variables
//let doesnt allow redefinitions of variables

//var allows access of a variable from outside of its
//scope


let videoStream;
let poseNet;

function setup() {
    createCanvas(640,480);
    background(255, 0, 0);
    videoStream = createCapture(VIDEO);
    videoStream.hide() //hides the video html element

    poseNet = ml5.poseNet(video, modelLoaded);

}

function draw() {
    background(0);
    image(videoStream,0,0); //image(img, x,y, w, h)

}