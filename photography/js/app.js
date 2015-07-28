var $overlay = $('<div id="overlay"></div>');
var $close = $("<p>Click to close</p>");
var $image = $("<img>");
var $caption = $("<p></p>");

//$close.addClass("close");
$close.css({'text-align': 'right',
            'margin-right': '20px',
            'font-size': '0.75em'});

$overlay.append($close);

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