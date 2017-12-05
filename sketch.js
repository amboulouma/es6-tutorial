var bubble = {
    x: 300,
    y: 200
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    move();
    display();
}

function display() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(bubble.x, bubble.y, 24, 24);
}

function move(){
    bubble.x = bubble.x + random(-5, 5);
    bubble.y = bubble.y + random(-5, 5);
}