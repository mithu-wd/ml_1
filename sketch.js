var video;
let classifier;
// load the model
function preload() {
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/19dMgGoi/model.json');


}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
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
if(rest==sicssor){
    background(255,0,0);

}
 else if(rest==stone){
     background(0,255,0);



}
    else if(rest==paper){
    
    background(0,0,255);
    }
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
