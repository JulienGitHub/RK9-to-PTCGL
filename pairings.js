var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position:absolute;left:30px;top:110px;height:30px;width:100px;z-index:100;';
elemDiv.innerHTML = '<a href="'+window.location.href.replace('pairings', 'roster')+'">Roster</a><p><a href="'+window.location.href.replace('pairings', 'tournament')+'">Tournament</a>';
document.body.insertBefore(elemDiv, document.getElementById("content"));




