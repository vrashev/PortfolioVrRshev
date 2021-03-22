function setup() {
    createCanvas(480, 480);
    angleMode(DEGREES);
	ellipseMode(CENTER);
    rectMode(CENTER);
}

function draw() {
	//variables for each seconds, minutes, and hours
	var S = second();
    var M = minute();
    var H = hour();

	background(204,255,204);


	//whole blender
	fill(240, 240, 240, 140);
	stroke(200, 200, 200);
	strokeWeight(10);
	rect(width/2, height/2, 400, 400, 100);

	//blender base
	fill(220, 220, 220);
	noStroke();
	rect(width/2, height/2, 150, 150, 50);




	//HOURS
	//changing from 24 hour to 12 hour clock
	var H = hour()%12;
	if (H == 0) {
		H = 12;
	}

	//making pink transparent juice get larger proportionate to the hour
	noStroke();
	fill(0, 204, 204);
	rect(width/2, height/2, 33*H, 33*H, 50 + H);

	//SECONDS
	//rotate 4 oranges in the middle by seconds
	push();
	translate(width/2, height/2);
	rotate(6*S);
		for (orangeY = -40; orangeY <= 40; orangeY += 80) {
			for (orangeX = -40; orangeX <= 40; orangeX += 80) {
				//outer orange peel circle
				fill(255, 153, 51);
				ellipse(orangeX, orangeY, 70, 70);

				//inner lighter orange peel circle
				fill(255, 153, 51);
				ellipse(orangeX, orangeY, 60, 60);

				//inner orange slice sections
				fill(249, 201, 65);
				arc(orangeX, orangeY, 50, 50, 7, 72);

				fill(249, 201, 65);
				arc(orangeX, orangeY, 50, 50, 79, 144);

				fill(249, 201, 65);
				arc(orangeX, orangeY, 50, 50, 151, 216);

				fill(249, 201, 65);
				arc(orangeX, orangeY, 50, 50, 223, 288);

				fill(249, 201, 65);
				arc(orangeX, orangeY, 50, 50, 295, 360);

			}
		}
	pop();

	//MINUTES
	//rotates 2 lemons by minutes
	var Mmap = map(M, 0, 60, 0, 360);

	push();
	translate(width/2, height/2);
	rotate(Mmap);
	for (lemonX = -125; lemonX <= 125; lemonX += 250) {
			fill(240, 229, 90);
			ellipse(lemonX + 55, 0, 20, 15);

			fill(240, 229, 90);
			ellipse(lemonX - 55, 0, 20, 15);

			fill(250, 239, 100);
			ellipse(lemonX, 0, 110, 90);

			fill(255, 249, 120);
			ellipse(lemonX + 20, - 20, 30, 20);
	}
	pop();

}
