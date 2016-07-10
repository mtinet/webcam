var video;

function setup() {
  createCanvas(800,400);
  background(51);
  video = createCapture(VIDEO);
  video.size(800,400);
  video.hide();

}

function draw() {
  image(video, 0, 0, width, height);
}
  
