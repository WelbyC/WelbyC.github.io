

var api = "https://api.giphy.com/v1/gifs/search?";

var apiKey = "&api_key=dc6zaTOxFJmzC";

var query = "&q=rainbow";




function setup() {
  noCanvas();
  // the entire url from variables above
  var url = api + apiKey + query;
  //gets us the json with the gifs
  loadJSON(url, gotData);
}

function gotData(giphy) {
  //the loop goes through the JSON andlinks all the gifs in the section
  for(var i = 0; i<giphy.data.length;i++){
  createImg(giphy.data[i].images.original.url);
  }
}

function draw(){

}