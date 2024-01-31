//tournament.js
//creates new div
var elemDiv = document.createElement('div');
//apply CSS
elemDiv.style.cssText = 'position:absolute;left:30px;top:110px;height:30px;width:100px;z-index:100;margin-block-start: 1em;';
//creates links to roster and pairings by replacing tournament in the page adress
elemDiv.innerHTML = '<a href="'+window.location.href.replace('tournament', 'pairings')+'">Pairings</a><p><a href="'+window.location.href.replace('tournament', 'roster')+'">Roster</a>';
//inserting the new div before the content div
document.body.insertBefore(elemDiv, document.getElementById("content"));




