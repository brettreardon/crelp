function addBeer()
{
	var beerAttr = $(displayedBeer).find('.att');
	var imgSrc = $(displayedBeer).find('img').attr('src');
	var beer = {
		name: beerAttr[0].innerHTML,
		ABV: beerAttr[1].innerHTML,
		type: beerAttr[2].innerHTML,
		darkness: beerAttr[3].innerHTML,
		brewery: beerAttr[4].innerHTML,
		bitterness: beerAttr[5].innerHTML,
		img: imgSrc
		};
	var beerFound = false; //if beer is already stored in Cookies
	if (getBeers(false) != '-1')
	{
		var storedBeers = getBeers(true);
		for (i=0;i<storedBeers.length;i++)//parse the escaped text for objects
		{
			if(storedBeers[i].name == beerAttr[0].innerHTML)
			{
				beerFound=true;
				i = storedBeers.length;	//exit the loop
			}
		}
	}
	if (beerFound == false)
	{
		addBeerToCookie(beer);
	}
}
function getBeers(parsed)//if JSON.parse is to be used
{
	if(!Cookies.get('beersCookie'))
	{
		return "-1"
	}
	else if (parsed == true)
	{
		var tmp = Cookies.get('beersCookie').split('|');
		tmp.pop();
		for (i=0;i<tmp.length;i++)
		{
			tmp[i] = JSON.parse(tmp[i])
		}
		return tmp;
		//return JSON.parse(Cookies.get('beersCookie'));
	}
	else
	return Cookies.get('beersCookie');
}
function addBeerToCookie(beer)
{
	var tmpBeer;
	tmpBeer = JSON.stringify(beer);
	if (getBeers() == '-1')
	{
		Cookies.set('beersCookie', tmpBeer+'|');
	}
	else
	{
		tmpBeer = Cookies.get('beersCookie') + tmpBeer + "|";
		Cookies.set('beersCookie',tmpBeer);
	}
	
	
}

function clearCookies()
{
	Cookies.remove('beersCookie');
}