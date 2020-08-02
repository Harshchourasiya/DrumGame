let crash = document.getElementById('crash');
let closed = document.getElementById('closed');
let floorTom = document.getElementById('floorTom');
let hatOpen = document.getElementById('hatOpen');
let highTom = document.getElementById('highTom');
let kick = document.getElementById('kick');
let midTom = document.getElementById('midTom');
let ride = document.getElementById('ride');
let snare = document.getElementById('snare');
let button = document.getElementById('button');

document.addEventListener("keypress", function(e){
if(e.keyCode==101){
  button.innerText=e.key.toLocaleUpperCase();
crash.play();
}
else if(e.keyCode==114){
  button.innerText=e.key.toLocaleUpperCase();
  ride.play();
}
else if(e.keyCode==102){
  button.innerText=e.key.toLocaleUpperCase();
  floorTom.play();
}
else if(e.keyCode==103){
  button.innerText=e.key.toLocaleUpperCase();
  midTom.play();
}
else if(e.keyCode==118){
  button.innerText=e.key.toLocaleUpperCase();
  kick.play();
}
else if(e.keyCode==98){
  button.innerText=e.key.toLocaleUpperCase();
  kick.play();
}
else if(e.keyCode==106){
  button.innerText=e.key.toLocaleUpperCase();
  snare.play();
}
else if(e.keyCode==105){
  button.innerText=e.key.toLocaleUpperCase();
  hatOpen.play();
}
else if(e.keyCode==107){
  button.innerText=e.key.toLocaleUpperCase();
  closed.play();
}
else{
  button.innerText="No Key " + e.key.toLocaleUpperCase();
}
});