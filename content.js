//content.js
var decklist = ""; //initializing the decklist string
for(const li of document.getElementById("lang-EN").getElementsByTagName("li")) //looping through all the elements of the English decklist
{
	var qty = li.getAttribute("data-quantity"); 					//finding the quantity of the card
	const codeArray = li.getAttribute("data-setnum").split("-");	//getting the setcode-id of the card, splitting the data
	var set = codeArray[0];											//setcode being the first data
	var id = codeArray[1];											//id being the second data

	if(id.search('GG') > -1)	//if id contains GG
	{
		set += '-GG';			//add -GG to the setcode
		id = parseInt(id.replace('GG', ''), 10); //remove GG from the id and remove leading zeros from the id (by converting it to int)
	}
	set = set.replace('SVP', 'PR-SV');	//replace SVP into PR-SV
	decklist += "* "+qty+" "+set+" "+id+"\n";	//add line to the decklist string * qty set it carriage return
}

var elemDiv = document.createElement('div'); //creates a new div
elemDiv.style.cssText = 'position:absolute;left:30px;top:110px;height:30px;width:100px;z-index:100;'; 	//set div CSS
//inside the div, creates a PTCGL button.
//with the onclick action : write into the user clipboard what's inside the ptcgl_list element, then setting the button background to green
elemDiv.innerHTML = '<button id="ptcgl" onclick="navigator.clipboard.writeText(document.getElementById(\'ptcgl_list\').innerHTML);\
document.getElementById(\'ptcgl\').style.background=\'#7beda3\';">PTCGL</button>';
//inserting this new div just before the content div
document.body.insertBefore(elemDiv, document.getElementById("content"));

var ptcgl_list = document.createElement('div');	//creates a new div
ptcgl_list.hidden = true;						//hidding the div
ptcgl_list.innerHTML = decklist;				//div text beeing the PTCGL decklist retrieved when clicking the button
ptcgl_list.id = 'ptcgl_list';					//setting the div id to ptcgl_list
document.body.insertBefore(ptcgl_list, document.getElementById("content"));	//inserting this new div just before the content div



