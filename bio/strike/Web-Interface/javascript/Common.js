function increment(elem, from, to, duration)
{
	var framesPerSecond = 100;
	var totalNumberOfFrames = duration / 1000 * framesPerSecond;
	
	var step = (to - from) / totalNumberOfFrames;
	
	var interval = setInterval(function()
	{
		if (from >= to) clearInterval(interval);
		if(from + step > to)
		{
			elem.innerText = Math.round(to);
		}
		else
		{
			elem.innerText =  Math.round(from += step);  
		}
	}, 1000 / framesPerSecond);
};
