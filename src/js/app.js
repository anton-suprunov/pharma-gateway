import $ from 'jquery';


const onDomReady = () => {
  $('.terms-trigger').on('click', function(){
    openPopup($(this).data('type'));
    return false
  });

  $('.popup__close, #terms-agree').on('click', function(){
    $('.popup').fadeOut();
    return false;
  });

  if (location.hash.indexOf('popup-') !== -1) {
    openPopup(location.hash.replace('#popup-', ''));
  }
};

const openPopup = (id) => {
  $('.popup[data-type="' + id + '"]').fadeIn();
}

$(onDomReady);