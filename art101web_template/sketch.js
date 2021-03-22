var blob;
//var url = "http://the json url string you use to fetch data";

function preload() {  // using this as its good for local or remote data fetching
    loadJSON('weather.json','json',dloaded,dfail);
    //loadJSON(url,'json',dloaded,dfail);

}



function dloaded(thedata) {

  blob = thedata;  // pass the json object to global var blob
  console.log("start -- ");
  console.log(blob);

}

function dfail(thedata) {
console.log("ERROR with Data-");
console.log(thedata);
}



function setup() {
  createCanvas(1000,500);
  background(50);
  fill(255);
  noStroke();
  colorMode(RGB, 255);

//  console.log(blob);


  push();
  translate(50,150);
  //scale(1.5);
  //objlineGraph(tempArr,citiesArr);
  pop();

  push();
  translate(50,350);

  //objEllipseGraph(tempArr,citiesArr);
  pop();


}

function draw() {
//ellipse(width/2, height/2, 50, 50);
}


function objlineGraph( arr, arrtext) {
    colorMode(HSB, 100);
    var sc = 2.5;
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {

      console.log(arr[i]);

      // fill(255);
      // ellipse(i*60,200 - (arr[i]/2),arr[i],arr[i]);

      var tempC = map(arr[i],-10,115,80,0)

      //push()
    //  scale(1.2 * (i*.50));

      fill(arr[i],150,150);
      rect(i*90,0 ,10,-arr[i]);
      //rect(i*20,0+(i*20) ,10,-arr[i]);

      fill(255);
      text(arrtext[i],(i*90)-10 ,20);
      //  text(arrtext[i],(i*20)-20 ,20+(i*20));

    //  pop();

    }


}


function objEllipseGraph( arr, arrtext) {
    colorMode(HSB, 100);
    var sc = 2.5;
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {

      console.log(arr[i]);

      // fill(255);
      // ellipse(i*60,200 - (arr[i]/2),arr[i],arr[i]);

      var tempC = map(arr[i],0,110,60,0)

      //push()
    //  scale(1.2 * (i*.50));

      fill(arr[i],100,100);
    //  fill(60,100,100);
      ellipse(i*90,0-(arr[i]/2) ,arr[i],arr[i]);
      //rect(i*20,0+(i*20) ,10,-arr[i]);

      fill(255);
      text(arrtext[i],(i*90)-10 ,20);
      //  text(arrtext[i],(i*20)-20 ,20+(i*20));

    //  pop();

    }
