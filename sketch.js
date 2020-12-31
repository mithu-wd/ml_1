var video;

var vScale = 8;

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
  set(10,10,white)
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
      var w = map(bright, 0, 255, 0, vScale);
      noStroke();
      let c=color(r,g,b)
//       set(x,y,c);
//       rectMode(CENTER);
//       rect(x * vScale, y * vScale, w, w);
    }
  }

}
