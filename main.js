var page = "home";

function change_page(temp_page){
	// Changes the content of the page 
	$(".right-content").animate({
		top:"-1400px",
	}, 1000, function(){
	});

	var new_page = "#" + temp_page + "-content";
	$(new_page).animate({
		top:"0",
	}, 700, function(){
	});

	// Changes the url after #
	page = temp_page
	var extension = "#" + page
	ChangeUrl(page, extension)
}

function ChangeUrl(page, url) {
	if (typeof (history.pushState) != "undefined") {
		var obj = { Page: page, Url: url };
		history.pushState(obj, obj.Page, obj.Url);
	} else {
		alert("Browser does not support HTML5.");
	}
}

function fix_page() {
	// Get location/page extension
	var location = window.location.href.split("#")[1]

	// If there's no extension render home page
	if (location.length == 1) {
		$(".right-content").animate({
			top:"-1400px",
		}, 1000, function(){
		});

		$("#home-content").animate({
			top:"0",
		}, 700, function(){
		});
	} 
	// If extension exists render requested extension
	else {
		$(".right-content").animate({
			top:"-1400px",
		}, 1000, function(){
		});

		var new_page = "#" + location + "-content";
		$(new_page).animate({
			top:"0",
		}, 700, function(){
		});
	}
	
}

// Check what page to load on request
window.onload = fix_page();

// Make the whole div on portfolio page clickable
$(".project").click(function() {
	window.location = $(this).find("a").attr("href");
	return false;
});
