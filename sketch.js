var video;
let classifier;
// load the model
function preload() {
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/19dMgGoi/model.json');


}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255, 0, 0);
    video = createCapture({
        audio: false,
        video: {
            facingMode: {
                exact: "environment"
            }
        }
    });
    video.hide();
    video.size(window.innerWidth, window.innerHeight);

    classifyimage();

}


function classifyimage() {

    classifier.classify(video, gotResults);


}

function draw() {
    image(video, 0, 0);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(0,0,255);
    text(rest, width / 2, height / 2);
    text(pro, width / 2, height / 1.5);



}
var pro;
let rest;
function gotResults(error, results) {
    if (error) {
        // console.error(error);
        return;
    }

    rest = (results[0].label);
    pro = (results[0].confidence * 100);
    classifyimage();
}
