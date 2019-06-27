    /* =========================================================================
    КНОПКА НАРВЕХ
    ========================================================================= */
    /* КНОПКА НАВЕРХ
    ------------------------------------------------------------------------- */
    jQuery('#up-button a').on('click', function () {
        jQuery('html, body').animate({scrollTop: '0'}, 800);
        return false;
    });

    /* Window Scroll
    ------------------------------------------------------------------------- */
    jQuery(window).scroll(function () {
        currentPosition = jQuery(window).scrollTop();
        if (currentPosition >= 300) {
            jQuery('#up-button').addClass('correct-position');
        } else {
            jQuery('#up-button').removeClass('correct-position');
        }
    });

    /* =========================================================================
    СКРОЛЛ ПО ПУНКТАМ
    ========================================================================= */
    /* СКРОЛЛ СКРОЛЛ ПО ПУНКТАМ
    ------------------------------------------------------------------------- */
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});