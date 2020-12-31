// // var video;
// // let classifier;
// // // load the model
// // function preload() {
// //     classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/19dMgGoi/model.json');


// // }

// // function setup() {
// //     createCanvas(window.innerWidth, window.innerHeight);
// //     video = createCapture({
// //         audio: false,
// //         video: {
// //             facingMode: {
// //                 exact: "environment"
// //             }
// //         }
// //     });
// //     video.hide();

// //     classifyimage();

// // }


// // function classifyimage() {

// //     classifier.classify(video, gotResults);


// // }

// // function draw() {
// //     image(video,10,10);
// // if(rest=="scissor"){
// //     background(255,0,0);

// // }
// //  else if(rest=="stone"){
// //      background(0,255,0);



// // }
// //     else if(rest=="paper"){
    
// //     background(0,0,255);
// //     }
// // }
// // var pro;
// // let rest;
// // function gotResults(error, results) {
// //     if (error) {
// //         console.error(error);
// //         return;
// //     }

// //     rest = (results[0].label);
// //     classifyimage();
// // }

// var video;


// function setup() {
    
//     createCanvas(500, 500);
//     background("black")
//     video = createCapture({
//         audio: false,
//         video: {
//             facingMode: {
//                 exact: "environment"
//             }
//         }
//     });
//     video.hide();


// }



// function draw() {
//     image(video,0,0);
    
// //     for(let x=0;x<=video.width;x++){
// //         for(let y=0;y<=video.height;y++){
// //             video.loadPixels()
// //         let clr=get(x,y)
// //         if((clr[0]+clr[1]+clr[2])/3>=200){
// //             point(x, y)
// //             strokeWeight(0.5)
// //             stroke("red")
// //         }
        
// //         }

// //     }
// //             video.updatePixels()
//     function draw() {
//   background(51);
//   video.loadPixels();
//   for (var y = 0; y < video.height; y++) {
//     for (var x = 0; x < video.width; x++) {
//       var index = (video.width - x + 1 + (y * video.width)) * 4;
//       var r = video.pixels[index + 0];
//       var g = video.pixels[index + 1];
//       var b = video.pixels[index + 2];
//       var bright = (r + g + b) / 3;
//       var w = map(bright, 0, 255, 0, 5);
//       noStroke();
//       fill(255);
//       rectMode(CENTER);
//       rect(x * 5, y * 5, w, w);
//     }
//   }

// }
    
// }
// Daniel Shiffman
// https://youtu.be/rNqaw8LT2ZU
// http://thecodingtrain.com

var video;

var vScale = 16;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
video = createCapture({
        audio: false,
        video: {
            facingMode: {
                exact: "environment"
            }
        }
    }); 
    video.size(width / vScale, height / vScale);
}

function draw() {
  background(51);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
        fill(r,g,b)
        rect(x,y,10)
   
    }
  }

}
