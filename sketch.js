var video;
let classifier;
// load the model
function preload() {
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/19dMgGoi/model.json');
    
    
}

function setup() {
    createCanvas(600, 600);
    background(255,0,0);
    video = createCapture({
        audio: false,
        video: {
            facingMode: {
                exact: "environment"
            }
        }
    });
      video.size(320, 240);

    classifyimage();
    
}


function classifyimage() {
    
    classifier.classify(video, gotResults);
    
    
}

function draw() {
    image(video, 0, 0);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255,0,0);
    text(rest, width/2, height/2);
    text(pro, width / 2, height /1.5);

    
    
}
var pro;
let rest;
function gotResults(error, results) {
    if (error) {
        // console.error(error);
        return;
    }
    
    rest=(results[0].label);
    pro=(results[0].confidence*100);
    classifyimage();
}
