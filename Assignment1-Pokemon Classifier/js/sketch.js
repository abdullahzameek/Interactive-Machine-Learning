let text;
let features = ml5.featureExtractor('MobileNet');
let classifier = features.classification();

function preload(){
  text = loadStrings("../pokemonList.txt");
  
}


function setup() {
  createCanvas(1280, 720);
  console.log("Gonna add images now");  
  for(var i=1; i<=text.length;i++){
    img = new Image();
    img.src = "pokemon/"+i.toString()+".png";
    //we need to add each pokemon image in succession
    classifier.addImage(img, text[i-1], imageAdded);
  }
  console.log("done training");
}

function imageAdded()
{
  console.log("Done addding images, gonna start training now. might take some time?"); 
  console.log("Image added, training model..");
  classifier.train();
}

function draw() {
  // console.log(text);
  console.log(text.length);
  noLoop();
}


