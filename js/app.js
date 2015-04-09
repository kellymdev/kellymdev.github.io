var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Add the image to the overlay
$overlay.append($image);

// Add the overlay to the dom
$("body").append($overlay);

// Add the caption to the overlay
$overlay.append($caption);

// Capture the click event on a link to an image
$("#gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);

  $overlay.show();

  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

// Hide the overlay when it is clicked
$overlay.click(function() {
  $overlay.hide();
});