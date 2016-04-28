var matches = $('.matches-expand');
var matchesToggled = false;
var matchesGlyph = $('#matchExpand');
matches.on('click', function(ev) {
	toggleMatches();
});

function toggleMatches()
{
	if (matchesToggled)
	{
		$('.matches').css('transform','scaleY(0)');
		matchesToggled = false;
		$(matchesGlyph).addClass('glyphicon-triangle-bottom');
		$(matchesGlyph).removeClass('glyphicon-triangle-top');
	}
	else
	{
		$('.matches').css('transform','scaleY(1)');
		matchesToggled = true;
		$(matchesGlyph).removeClass('glyphicon-triangle-bottom');
		$(matchesGlyph).addClass('glyphicon-triangle-top');
	}
	
}


