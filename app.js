var zb = matrix.zigbee();
var isOn = true;

//discover mode- last 60 seconds
matrix.on('discover', function(){
  zb.discover();
  console.log('Searching... ');
});
//resets
matrix.on('reset', function(){
  zb.reset();
  setTimeout(function(){
    matrix.led('red').render();
  },3000);
  console.log('reset!');
  matrix.led('').render();
});
//changes color of lights
matrix.on('blue', function(){
  zb.light().color('blue', 10);
});
matrix.on('red', function(){
  zb.light().color('red', 10);
});
matrix.on('green', function(){
  zb.light().color('green', 10);
});
matrix.on('clear', function(){
  zb.light().color('yellow', 10);
});
//toggles on/off lights
matrix.on('toggle', function(){
  if(isOn){
    zb.light().fadeOut(1);
    isOn = false;
  }
  else{
    zb.light().fadeIn(1);
    isOn = true;
  }
});
//Dims lights
matrix.on('dim', function(p){
  zb.light().level(p.value, 1);
});
//lights off
matrix.on('off', function(){
  zb.light().fadeOut(1);
  isOn = false;
});
// ligts on
matrix.on('on', function(){
  zb.light().fadeIn(1);
  isOn = true;
});

