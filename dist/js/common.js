
$(document).ready(function(){

  $('#tabs a').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link_active').removeClass('product-tabs__link_active');
    $('.product-tabs__active').removeClass('product-tabs__active');
    $(this).addClass('product-tabs__link_active');
    // $( $(this).href )
    $($(this).attr('href')).addClass('product-tabs__active');
  });

})
