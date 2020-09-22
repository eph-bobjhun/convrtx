$(window).scroll(function() {
  var hT = $('#tax_compliance').offset().top - 700,
  hH = $('#tax_compliance').outerHeight(),
  wH = $(window).height(),
  wS = $(this).scrollTop();
  console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    $('#tax_compliance .slide-from-left').addClass('executable');
    $('#tax_compliance .slide-from-top').addClass('executable');
    $('#tax_compliance .fade-in').addClass('executable');
  }
});

$(window).scroll(function() {
  var hT = $('#tax_return').offset().top - 1200,
  hH = $('#tax_return').outerHeight(),
  wH = $(window).height(),
  wS = $(this).scrollTop();
  console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    $('#tax_return .slide-from-bottom').addClass('executable');
  }
});

$(window).scroll(function() {
  var hT = $('#tax_expert').offset().top - 600,
  hH = $('#tax_expert').outerHeight(),
  wH = $(window).height(),
  wS = $(this).scrollTop();
  console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    $('#tax_expert .fade-in').addClass('executable');
  }
});

$(window).scroll(function() {
  var hT = $('#get_quote').offset().top - 1000,
  hH = $('#get_quote').outerHeight(),
  wH = $(window).height(),
  wS = $(this).scrollTop();
  console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    $('#get_quote .slide-from-top').addClass('executable');
  }
});

$(window).scroll(function() {
  var hT = $('#what_we_do').offset().top - 700,
  hH = $('#what_we_do').outerHeight(),
  wH = $(window).height(),
  wS = $(this).scrollTop();
  console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    $('#what_we_do .fade-in').addClass('executable');
  }
});

$(window).scroll(function() {
  var hT = $('#download').offset().top - 700,
  hH = $('#download').outerHeight(),
  wH = $(window).height(),
  wS = $(this).scrollTop();
  console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    $('#download .rotate').addClass('executable');
  }
});
