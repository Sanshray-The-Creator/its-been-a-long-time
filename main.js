noseX = 0;
noseY = 0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/vmky179h/moustache.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300); 
    video.hide();
    posenet = ml5.poseNet(video, Utkarsh);
    posenet.on('pose', gotPoses);
}

function gotPoses(results) {
  console.log(results);
  noseX = results[0].pose.nose.x-38;
  noseY = results[0].pose.nose.y-5;
}

function Utkarsh() {
    console.log('Your PoseNet Is Successfully Loaded!');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, noseX, noseY, 80, 35);
}

function take_snapshot(){
    save('myFilterImage.png')
}