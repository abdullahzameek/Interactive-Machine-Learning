let text;
let features;
let classifier;
let imgArray = [];


function preload(){
  
  console.log("Pre load works?");
  text = loadStrings("pokemonList.txt");
  for(let i=0; i<722;i++){
    console.log("Adding an image now...");
    imgArray[i] = loadImage('../pokemon/'+i.toString()+'.png');
  }
  
}

function setup() {
  features = ml5.featureExtractor('MobileNet');
  classifier = features.classification();
  createCanvas(1280, 720);
  fill(255);
  for(let j=0; j<722; j++){
    classifier.addImage(imgArray[j],text[j],imageAdded);
}
console.log("done training"); 
}
  


function imageAdded()
{
  console.log("Training Model right now.."); 
  classifier.train();
}

function draw() {
}


