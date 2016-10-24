"use strict";

/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var buttonList = document.getElementById('controls');

var lightList = [
  document.getElementById('stopLight'),
  document.getElementById('slowLight'),
  document.getElementById('goLight')
];

var stopLightPos = 0;
var slowLightPos = 1;
var goLightPos = 2;

var colorList = [
  "background-color: black",
  "background-color: red",
  "background-color: yellow",
  "background-color: green"
];

var blackPos = 0;
var redPos = 1;
var yellowPos = 2;
var greenPos = 3;

var black = "background-color: black";
var red = "background-color: red";
var yellow = "background-color: yellow";
var green = "background-color: green";

// Console log when entering a button
function logTextEnter(event) {
    if (event.target !== event.currentTarget) {
        console.log('Entered ' + event.target.textContent + ' Button');
    }
}

// Console log when leaving a button
function logTextExit(event) {
    if (event.target !== event.currentTarget) {
        console.log('Left ' + event.target.textContent + ' Button');
    }
}

// Console log on click
// var logTextClick = function(event) {
function logTextClick (event){
    if (event.target !== event.currentTarget) {
        console.log(event.target.textContent + " Clicked");

        lightList[slowLightPos].setAttribute("style", black);
        lightList[stopLightPos].setAttribute("style", black);
        lightList[goLightPos].setAttribute("style", black);

        if (event.target.textContent === "Stop") {
          lightList[slowLightPos].setAttribute("style", yellow);
          setInterval(function() {
            lightList[slowLightPos].setAttribute("style", black);
            lightList[stopLightPos].setAttribute("style", red);
          }, 4000);
        } else if (event.target.textContent === "Slow") {
            lightList[slowLightPos].setAttribute("style", yellow);
            lightList[stopLightPos].setAttribute("style", black);
        } else if (event.target.textContent === "Go") {
            lightList[goLightPos].setAttribute("style", green);
        }
    }
}


function getCurrentLight() {
  var currentTrafficLight = null;

  for (var tempLight in lightList) {
    var lightColor = tempLight.getAttribute("style");

    if (lightColor !== black) {
      currentTrafficLight = tempLight;
      break;
    }
  }

  return currentTrafficLight;
}

var position = 0;

function getNextLight(currentTrafficLight) {
  var nextTrafficLight = null;

  position = lightList.indexOf(currentTrafficLight);
  position ++;
  // If we have passed the end of the array we need to reset
  if (position > lightList.length) {
    position = 0;
  }

  nextTrafficLight = buttonList[position];

  return nextTrafficLight;
}

function switchTrafficLightColor(currentLight, nextLight) {
    currentLight.setAttribute("style", black);
    nextLight.setAttribute("style",  colorList[position]);
}

buttonList.addEventListener('mouseover', logTextEnter, false);
buttonList.addEventListener('mouseout', logTextExit, false);
buttonList.addEventListener('click', logTextClick, false);



/****
Create Object with the properties light color, light position(dom element),
is the light on, is the light next?, delay property to set wait time,

when switching lights, figure out how to trigger objects to switch




*****/
