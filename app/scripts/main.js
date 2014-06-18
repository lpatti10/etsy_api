

var item = '';

etsyitems.results.forEach (function (a) {
	item = '<li><img src="' + a.Images[0].url_170x135 + '" /><h4>' + a.title + '</h4><h5>' + a.user_id + '</h5><a href="#">' + '$' + a.price + ' ' + a.currency_code +'</a>';
	item += '</li>';
	$('#tile').append(item);
});









/*

var $newdiv1 = $( "<div id='object1'/>" ),
  newdiv2 = document.createElement( "div" ),
  existingdiv1 = document.getElementById( "foo" );
 
$( "body" ).append( $newdiv1, [ newdiv2, existingdiv1 ] );


etsyitems.forEach (function (a) {
	item = '<li><img src="' + a.url_170x135 + '" /><h4>' + a.title + '</h4><h5>' + a.user_id + '</h5><a>' + a.price + '</a>';
	item += '</li>';
  $('#tile').append(item);
});







// jQuery .append(), the selector expression preceding the method is the container into which the content is inserted.

		<h2>Greetings</h2>
		<div class="container">
		  <div class="inner">Hello</div>
		  <div class="inner">Goodbye</div>
		</div>
		
		$( ".inner" ).append( "<p>Test</p>" );

		<h2>Greetings</h2>
		<div class="container">
		  <div class="inner">
		    Hello
		    <p>Test</p>
		  </div>
		  <div class="inner">
		    Goodbye
		    <p>Test</p>
		  </div>
		</div>






//tuesday class example...


  <ul id="tracks"></ul>

 
// Uses the SoundCloud API and loops through each track returned and injects them onto the page inside of the #tracks element.
var track = '';
rocktracks.forEach (function (a) {
  track = '<li><img src="' + a.artwork_url + '" /><p>' + a.title + '</p>';
  if (a.stream_url) {
    track += '<audio controls src="' + a.stream_url;
  }
  track += '</li>';
  $('#tracks').append(track);
});

//accordion hmwk...

		$('header').on('click', function () {
		  $(this).parent().removeClass('hidden').siblings().addClass('hidden');
		});


//wood array hmwk...

		items.forEach (function(a) {
		  a.materials.forEach(function(b){
		    if (b=="wood") {
		    console.log(a.title + " is made of wood.");
		    }
		  })
		});

*/