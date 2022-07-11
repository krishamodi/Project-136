status="";
function setup(){
    canvas=createCanvas(300,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380)
    video.hide();
}

function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Dectecting Objects";
    object_name=document.getElementById("object_name").value;
}

function draw(){
image(video,0,0,380,300);
}