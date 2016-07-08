var video;

function setup() {
  createCanvas(800, 480);
  background(51);
  video = createCapture(VIDEO);
  video.size(800, 480);
  video.hide();

}

function draw() {
  image(video, 0, 0, width, height);
}
  
