var video;

function setup() {
  createCanvas(640, 480);
  background(51);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

}

function draw() {
  image(video, 230, 320, width, height);
}
  
