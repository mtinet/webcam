var video;

function setup() {
  createCanvas(640, 480);
  background(51);
  video = createCapture(VIDEO);
  video.size(640, 480);
  // video.hide();

}

function draw() {
  tint(50, 100, 150);
  image(video, 0, 0, mouseX, height);
}
