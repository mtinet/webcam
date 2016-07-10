var video;

function setup() {
  createCanvas(640,320);
  background(51);
  video = createCapture(VIDEO);
  video.size(640,320);
  video.hide();

}

function draw() {
  image(video, 0, 0, width, height);
}
  
