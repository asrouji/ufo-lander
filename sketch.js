let elevation = -250
let rotation = 0
let speed = 2.5
let gravity = 0.01
let grassImage, skyImage, moonImage

function preload() {
  grassImage = loadImage('assets/grass.png')
  skyImage = loadImage('assets/sky.png')
  moonImage = loadImage('assets/moon.png')
}

function setup() {
  createCanvas(700, 700, WEBGL)
  noStroke()
}

function draw() {
  push()
  texture(skyImage)
  translate(0, 0, -1500)
  plane(2500, 2500)
  pop()
  directionalLight(255, 255, 255, 1, 1, -1)
  pointLight(255, 255, 255, 0, elevation-30, 0)
  drawGround()
  drawMoon()
  drawUfo()
  drawTree(125, 25, 100)
  drawTree(-125, 25, 100)
  drawTree(125, 25, 300)
  drawTree(-125, 25, 300)
  elevation += speed
  if(speed > 0.5) speed -= gravity
  if (elevation >= 190) {
    noLoop()
  }
  rotation += 1
}

function drawGround() {
  push()
  texture(grassImage)
  spotLight(255, 255, 255, 0, elevation, 0, 0, 1, 0, Math.PI/6, 3)
  translate(0, 200, 0)
  rotateX(Math.PI/2)
  plane(1020, 550)  
  pop()
}

function drawUfo() {
  push()
  translate(0, elevation, 0)
  rotateY(rotation)
  scale(1, 0.25, 1)
  ambientMaterial('lightblue')
  specularMaterial("lightgrey")
  shininess(3)
  sphere(80)
  translate(0, -80, 0)
  specularMaterial('skyblue')
  cylinder(35, 160)
  specularMaterial('grey')
  translate(0, -80, 0)
  sphere(40)
  translate(0, 240, 0)
  scale(1, 4, 1)
  emissiveMaterial('white')
  sphere(10)
  pop()
}

function drawTree(x, y, z) {
  push()
  translate(x, y, z)
  ambientMaterial('green')
  cone(30, -150)
  translate(0, 100, 0)
  ambientMaterial('brown')
  cylinder(10, 50)
  pop()
}

function drawMoon() {
  push()
  texture(moonImage)
  translate(350, -500, -550)
  sphere(100)
  pop()
}
