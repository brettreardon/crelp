var page = $('#page-content-wrapper');
var pageIndex = 1;
var cards;
var cardIndex = 0;
var moreDetailSwitched = false;


function beerMe()
{
	if (pageIndex != 0)
	{
		$.get("beerMe.html", function(data){
			page.html(data);
		});
		cards = $('.cardstack');
		cards.hammer().on('swipeleft', function(ev) {
			leftSwipe();
		});
		cards.hammer().on('swiperight', function(ev) {
			rightSwipe();
		});
		cards.hammer().on('tap', function(ev) {
			detailToggle();
		});
	}
}
function signIn()
{
	
}