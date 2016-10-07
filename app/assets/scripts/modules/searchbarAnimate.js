import $ from 'jquery';

function searchbarAnimate() {
  $('#new_search').on('focus', function() {
    $(this).parent('label').addClass('active');
  });
  $('#new_search').on('blur', function() {
    if($(this).val().length === 0) {
      $(this).parent('label').removeClass('active');
    }
  });
}

export default searchbarAnimate;
