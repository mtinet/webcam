var video;

function setup() {
  createCanvas(,0);
  background(51);
  video = createCapture(VIDEO);
  video.size(800,600);
  video.hide();

}

function draw() {
  image(video, 0, 0, width, height);
}
  
