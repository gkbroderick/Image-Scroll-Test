var imageList = [
  './imgs/Tri1.png',
  './imgs/Tri2.png',
  './imgs/Tri3.png'
];

//adapted from css-tricks https://css-tricks.com/snippets/jquery/image-preloader/
$.preloadImages = function(array) {
  for (var i = 0; i < array.length; i++) {
    $("<img />").attr("src", array[i]);
  }
}
$.preloadImages(imageList);


$(window).scroll(function(e) {
  var breakpoints = [500, 1000];
  var fromTop = $(window).scrollTop();
  console.log(fromTop);

  //first intermedate break
  if ((fromTop > breakpoints[0]) && (breakpoints[1] > fromTop)) {
    $('#img1').attr('src', imageList[1]);
  }
  //final break
  else if (fromTop > breakpoints[1]) {
    $('#img1').attr('src', imageList[2]);
  }
  //re-initial
  else {
    $('#img1').attr('src', imageList[0]);
  }

});
