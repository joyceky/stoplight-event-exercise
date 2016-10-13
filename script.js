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

// Console log when entering a button
var logTextEnter = function(event) {
  if(event.target !== event.currentTarget) {
  console.log('Entered ' + event.target.textContent + ' Button');
}};

// Console log when leaving a button
var logTextExit = function(event) {
  if(event.target !== event.currentTarget) {
  console.log('Left ' + event.target.textContent + ' Button');
}};

// Console log on click
var logTextClick = function(event) {
  if(event.target !== event.currentTarget) {
  console.log(event.target.textContent);
}};

buttonList.addEventListener('mouseover', logTextEnter, false);
buttonList.addEventListener('mouseout', logTextExit, false);
buttonList.addEventListener('click', logTextClick, false);
