var item = '';
etsyitems.forEach (function(a){
	item = '<li><img src="' + a.url_170x135 + '" /><h4>' + a.title + '</h4><h5>' + a.user_ID + '</h5><a>' + a.price + '</a>';
	item += '</li>';
  $('#tile').append(item);
});












/*
   if (a.url_170x135) {
    item += '<img src="' + a.url_170x135;
  }

item = '<section><img src="">' + a.title + a.price + a.url_170x135 + '</section>';



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