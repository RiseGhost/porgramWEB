$(document).ready(function(){  // do not delete 


// first line sets the item to a faded state immediately
$('.fadeitem').css('opacity', '0.25');

$('.fadeitem').mouseenter(function() {
	$(this).fadeTo('fast', 1)
});

$('.fadeitem').mouseleave(function() {
	$(this).fadeTo('fast', 0.25);
});


// ----------------------------------------------------------------------------
}); // do not delete
