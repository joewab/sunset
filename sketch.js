var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;
var brightness;
var bird;

var skyR;
var skyG;
var skyB;

function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};
    
    //TASK: intialise a moon object with an extra property for brightness
    
    moon = {
        x: 750,
        y: 70,
        diameter: 80,
        brightness: 0
    };
    
    bird = {
      x: 150,
      y: tree.y - 150,
      birdBodyWidth: 50,
      birdBodyHeight: 35,
        //left x value
      //birdBeak1: (bird.x + (bird.birdBodyWidth/2)),
        //top y value
      //birdBeak2: (bird.y - (bird.birdBodyHeight/2)),
        //bottom y value
      //birdBeak3: (bird.y + (bird.birdBodyHeight/2)),
        //right x value
      //birdBeak4: (bird.x + (bird.birdBodyWidth/2) + 10),
        
    };
    
    skyR = 150;
    skyG = 200;
    skyB = 255;


	//set the initial darkness
	darkness = 0;
}



function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.


	//draw the sky
	background(skyR, skyG, skyB);
	noStroke();
    

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);
    
    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour

	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    //tree
    
    //trunk
    fill(150, 100, 50);
    rect (tree.x - (tree.trunkWidth/2), tree.y - tree.trunkHeight, tree.trunkWidth, tree.trunkHeight);
    
    //canopy
    fill (50, 250, 70);
    ellipse (tree.x, tree.y - tree.trunkHeight, tree.canopyWidth, tree.canopyHeight);

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it
    
    //darkness
    fill (0, 0, 50, darkness);
    rect (0, 0, width, height);
    
    //moon
    fill(250, 250, 250, moon.brightness);
    ellipse(moon.x, moon.y, moon.diameter);
    
     //stars
    stroke (250, 250, 250, moon.brightness);
    strokeWeight(5);
    point (50, 50);
    point (150, 150);
    point (150, 50);
    point (350, 60);
    point (750, 300);
    point (330, 200);
    point (70, 300);
    point (500, 80);
    point (550, 100);
    point (610, 150);
    
    //bird
    
    fill (255, 0, 0);
    stroke (0);
    strokeWeight(3);
    ellipse (bird.x, bird.y, bird.birdBodyWidth, bird.birdBodyHeight);
    fill (255, 255, 0);
    triangle ((bird.x + (bird.birdBodyWidth/2)-2), (bird.y - (bird.birdBodyHeight/2)+2), (bird.x + (bird.birdBodyWidth/2)-2), (bird.y + (bird.birdBodyHeight/2)-2), (bird.x + (bird.birdBodyWidth/2) + 20), bird.y);
    fill (255);
    ellipse (bird.x + 5, bird.y - 1, 8, 8);
    point (bird.x + 5, bird.y - 1);
    
    
    darkness = mouseX/4
    
    sun.y = max(70, mouseX);
    
    moon.brightness = mouseX/4;
    
    bird.x = max(150, mouseX * 2);
    bird.y = min(tree.y - 150, (tree.y - 150)/(mouseX / 200));
    
    skyB = min(255, 255/(mouseX/50));
    skyG = min(200, 200/(mouseX/50));


}