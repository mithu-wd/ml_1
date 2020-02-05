var video;
let classifier;
// load the model
function preload() {
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/19dMgGoi/model.json');


}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    video = createCapture({
        audio: false,
        video: {
            facingMode: {
                exact: "environment"
            }
        }
    });
    video.hide();

    classifyimage();

}


function classifyimage() {

    classifier.classify(video, gotResults);


}

function draw() {
    image(video,10,10);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text(rest, width / 2, height / 2);



}
var pro;
let rest;
function gotResults(error, results) {
    if (error) {
        console.error(error);
        return;
    }

    rest = (results[0].label);
    classifyimage();
}
