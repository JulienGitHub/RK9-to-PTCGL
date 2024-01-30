var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position:absolute;left:30px;top:110px;height:30px;width:100px;z-index:100;margin-block-start: 1em;';
elemDiv.innerHTML = '<a href="'+window.location.href.replace('tournament', 'pairings')+'">Pairings</a><p><a href="'+window.location.href.replace('tournament', 'roster')+'">Roster</a>';
document.body.insertBefore(elemDiv, document.getElementById("content"));




