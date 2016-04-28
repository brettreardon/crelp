var matches = $('.matches-expand');
var matchesToggled = false;
var matchesGlyph = $('#matchExpand');
matches.on('click', function(ev) {
	toggleMatches();
});

$( document ).ready(function() {
    var beers = getBeers(true);
	if (beers != '-1')
	{
		for (i=0;i<beers.length;i++)
		{
			var lineBreak = $("<div></div>");
			$(lineBreak).addClass('line-break');
			
			tmpElement = $($('.hide').clone());
			$(tmpElement).find('img').attr('src',beers[i].img);
			$(tmpElement).find('.name').html(beers[i].name);
			$(tmpElement).find('.brewery').html(beers[i].brewery);
			$(tmpElement).find('.abv').html("ABV: "+beers[i].ABV);
			$(tmpElement).find('.ibu').html("IBU: "+beers[i].bitterness);
			$(tmpElement).find('.type').html(beers[i].type);
			$(tmpElement).find('.dark').html("Dark: "+ beers[i].darkness);
			tmpElement.removeClass('hide');
			$('.matches').append(tmpElement);
			$('.matches').append(lineBreak);
		}
	}
	
});


function toggleMatches()
{
	if (matchesToggled)
	{
		/*$('.matches').css({
			'max-height':'0vh'
			});*/

		matchesToggled = false;
		$('.matches').addClass('hide');
		$(matchesGlyph).addClass('glyphicon-triangle-bottom');
		$(matchesGlyph).removeClass('glyphicon-triangle-top');
	}
	else
	{
		//$('.matches').css('transform','scaleY(1)');
		//$('.matches').css({'max-height':'100vh'});
		$('.matches').removeClass('hide');
		matchesToggled = true;
		$(matchesGlyph).removeClass('glyphicon-triangle-bottom');
		$(matchesGlyph).addClass('glyphicon-triangle-top');
	}
	
}




