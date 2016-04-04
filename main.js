

var cards = $('.cardstack');
var cardIndex = 0;

cards.hammer().on('swipeleft', function(ev) {
	$(cards[cardIndex]).css('display','none');
	cycleCard();
	$(cards[cardIndex]).css('display','block');
	console.log('card changed');
});
cards.hammer().on('swiperight', function(ev) {
	$(cards[cardIndex]).css('display','none');
	cycleCard();
	$(cards[cardIndex]).css('display','block');
	console.log('card changed');
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

