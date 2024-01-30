var decklist = "";
for(const li of document.getElementById("lang-EN").getElementsByTagName("li"))
{
	var qty = li.getAttribute("data-quantity");
	const codeArray = li.getAttribute("data-setnum").split("-");
	var set = codeArray[0];
	var id = codeArray[1];

	if(id.search('GG') > -1)
	{
		set += '-GG';
		id = parseInt(id.replace('GG', ''), 10);
	}
	set = set.replace('SVP', 'PR-SV');
	decklist += "* "+qty+" "+set+" "+id+"\n";
}

var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position:absolute;left:30px;top:110px;height:30px;width:100px;z-index:100;';
elemDiv.innerHTML = '<button id="ptcgl" onclick="navigator.clipboard.writeText(document.getElementById(\'ptcgl_list\').innerHTML);document.getElementById(\'ptcgl\').style.background=\'#7beda3\';">PTCGL</button>';
document.body.insertBefore(elemDiv, document.getElementById("content"));
var ptcgl_list = document.createElement('div');
ptcgl_list.hidden = true;
ptcgl_list.innerHTML = decklist;
ptcgl_list.id = 'ptcgl_list';
document.body.insertBefore(ptcgl_list, document.getElementById("content"));



