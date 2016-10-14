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
var stopLight = document.getElementById('stopLight');
var slowLight = document.getElementById('slowLight');
var goLight = document.getElementById('goLight');
var black = "background-color: black";
var red = "background-color: red";
var yellow = "background-color: yellow";
var green = "background-color: green";


// Console log when entering a button
function logTextEnter(event) {
    if (event.target !== event.currentTarget) {
        console.log('Entered ' + event.target.textContent + ' Button');
    }
};

// Console log when leaving a button
function logTextExit(event) {
    if (event.target !== event.currentTarget) {
        console.log('Left ' + event.target.textContent + ' Button');
    }
};

// Console log on click
// var logTextClick = function(event) {
function logTextClick (event){
    if (event.target !== event.currentTarget) {
        console.log(event.target.textContent + " Clicked");
        slowLight.setAttribute("style", black);
        stopLight.setAttribute("style", black);
        goLight.setAttribute("style", black);
        if (event.target.textContent === "Stop") {
            stopLight.setAttribute("style", red);
        } else if (event.target.textContent === "Slow") {
            slowLight.setAttribute("style", yellow);
        } else if (event.target.textContent === "Go") {
            goLight.setAttribute("style", green);
        }
    }
};

function runTrafficLight() {
// switch the color based on curren color after timeout
  var someThing = null;
  someThing.setTimeout = switchTrafficLightColor(getCurrentLight, getNextLight)
}

function getCurrentLight() {
  //get the current lit light using whatever and return it
  var currentTrafficLight = null;

  return currentTrafficLight;
}

function getNextLight() {
  //get the next lit light using whatever and return it
  var nextTrafficLight = null;

  return nextTrafficLight;
}

function switchTrafficLightColor(currentLight, NextLight) {
    //switch shit
}

buttonList.addEventListener('mouseover', logTextEnter, false);
buttonList.addEventListener('mouseout', logTextExit, false);
buttonList.addEventListener('click', logTextClick, false);
