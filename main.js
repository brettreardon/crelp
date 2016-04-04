window.mySwipe = Swipe(document.getElementById('slider'));

var cards = $('.swipe-wrap');
cards.hammer().on('swipeleft', function(ev) {
	mySwipe.next();
});
cards.hammer().on('swiperight',function(ev) {
	mySwipe.prev();
});
