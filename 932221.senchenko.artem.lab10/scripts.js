let frameTime = 20;

let objectMoving = false;
function changeBottom(newHeight, allTime, idElem)
{
	if (objectMoving)
		return;
	objectMoving = true;
	
	let elem = document.getElementById(idElem);
	let start = Date.now();
	let heightVeilStr = elem.style.bottom;
	let heightVeilNum;
	console.log(heightVeilStr);
	if (heightVeilStr.length == 0)
		heightVeilNum = 0;
	else
	{
		heightVeilStr.replace('vh', '');
		heightVeilNum = parseInt(heightVeilStr);
	}
	let heightForUp = newHeight - heightVeilNum;
	let countFrame = allTime / frameTime;
	let stepHeight = heightForUp / countFrame;
	
	let counterFrame = 0;
	let timer = setInterval(function() 
	{
		heightVeilNum += stepHeight;
 		elem.style.bottom = heightVeilNum + 'vh';
		
		counterFrame++;
		if (counterFrame >= countFrame) 
		{
			clearInterval(timer);
			objectMoving = false;
			return;
		}
	}, frameTime);
}

let statusLamp = false;
function switchLamp(time, ropeHeight, opacityLight)
{
	let lampElem = document.getElementById("lampRope");
	let lightElem = document.getElementById("light");
	let wizardElem = document.getElementById("wizard");
	let hatElem = document.getElementById("hat");
	let thingElem = document.getElementById("thing");
	
	let start = Date.now();
	
	let countFrame = time / frameTime;
	let stepHeight = ropeHeight / countFrame;	
	let stepLight = opacityLight / countFrame;
	let stepOpacityObject = 0;
	if (opacityLight != 0)
		stepOpacityObject = 1 / countFrame;
	if (statusLamp)
	{
		stepLight *= -1;
		stepOpacityObject *= -1;
	}
	
	
	let counterFrame = 0;
	let timer = setInterval(function() 
	{
 		addTop(lampElem, stepHeight);	
		addOpacity(lightElem, stepLight);
		addOpacity(wizardElem, stepOpacityObject);
		addOpacity(hatElem, stepOpacityObject);
		addOpacity(thingElem, stepOpacityObject);
		counterFrame++;
		
		if (counterFrame >= countFrame) 
		{
			clearInterval(timer);
			return;
		}
	}, frameTime);
	
	if (opacityLight != 0)
		statusLamp = !statusLamp;
}

function addOpacity(elem, num)
{
	let opacityStr = elem.style.opacity;
	let opacityNum = 0;
	if (opacityStr.length != 0)
	{
		opacityNum = parseFloat(opacityStr);
	}	
	opacityNum += num;
	
	elem.style.opacity = opacityNum;
}

function addTop(elem, num)
{
	let topStr = elem.style.top;
	let topNum = 0;
	if (topStr.length != 0)
	{
		topStr.replace('vh', '');
		topNum = parseFloat(topStr);
	}
	topNum += num;
 	elem.style.top = topNum + 'vh';
}

let isRabbit = false;
let trickGoingOn = false;
function trick()
{
	if (trickGoingOn)
		return;
		
	trickGoingOn = true;
	changeBottom(12, 200, 'thing');
	
	setTimeout(function()
	{
		if (isRabbit)
			document.getElementById('thing').src = "bird.png";
		else
			document.getElementById('thing').src = "rabbit.png";	
			
		isRabbit = !isRabbit;
		changeBottom(30, 200, 'thing');	
		
		trickGoingOn = false;
	}, 300);
}