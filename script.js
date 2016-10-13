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


// Console log when entering a button
var logTextEnter = function(event) {
    if (event.target !== event.currentTarget) {
        console.log('Entered ' + event.target.textContent + ' Button');
    }
};

// Console log when leaving a button
var logTextExit = function(event) {
    if (event.target !== event.currentTarget) {
        console.log('Left ' + event.target.textContent + ' Button');
    }
};

// Console log on click
var logTextClick = function(event) {
    if (event.target !== event.currentTarget) {
        console.log(event.target.textContent + " Clicked");
        if (event.target.textContent === "Stop") {
            stopLight.setAttribute("style", "background-color: red");
            slowLight.setAttribute("style", "background-color: black");
            goLight.setAttribute("style", "background-color: black");
        } else if (event.target.textContent === "Slow") {
            slowLight.setAttribute("style", "background-color: yellow");
            stopLight.setAttribute("style", "background-color: black");
            goLight.setAttribute("style", "background-color: black");
        } else if (event.target.textContent === "Go") {
            goLight.setAttribute("style", "background-color: green");
            slowLight.setAttribute("style", "background-color: black");
            stopLight.setAttribute("style", "background-color: black");
        } 
    }
};

buttonList.addEventListener('mouseover', logTextEnter, false);
buttonList.addEventListener('mouseout', logTextExit, false);
buttonList.addEventListener('click', logTextClick, false);
