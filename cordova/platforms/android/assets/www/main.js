

var cards = $('.cardstack');
var cardIndex = 0;
var moreDetailSwitched = false;


cards.hammer().on('swipeleft', function(ev) {
	leftSwipe();
});
cards.hammer().on('swiperight', function(ev) {
	rightSwipe();
});
cards.hammer().on('tap', function(ev) {
	detailToggle();
});


function cycleCard()
{
	if (cardIndex == cards.length -1)
	{
		cardIndex = 0;
	}
	else
	{
		cardIndex++;
	}
}
function detailToggle()
{
	if (moreDetailSwitched == false)
	{
		moreDetailSwitched = true;
	}
	else
	{
		moreDetailSwitched = false;
	}
}
$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

function leftSwipe()
{
	$(cards[cardIndex]).css('display','none');
	cycleCard();
	$(cards[cardIndex]).css('display','block');
	console.log('card changed');
}	
function rightSwipe()
{
	$(cards[cardIndex]).css('display','none');
	cycleCard();
	$(cards[cardIndex]).css('display','block');
	console.log('card changed');
}
