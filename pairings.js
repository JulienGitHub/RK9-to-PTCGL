//pairings.js
//creates new div
var elemDiv = document.createElement('div');
//apply CSS
elemDiv.style.cssText = 'position:absolute;left:30px;top:110px;height:30px;width:100px;z-index:100;';
//creates links to roster and tournament by replacing pairings in the page adress
elemDiv.innerHTML = '<a href="'+window.location.href.replace('pairings', 'roster')+'">Roster</a><p><a href="'+window.location.href.replace('pairings', 'tournament')+'">Tournament</a>';
//inserting the new div before the content div
document.body.insertBefore(elemDiv, document.getElementById("content"));




