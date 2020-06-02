/* eslint-disable */
// js Document

// Created on   : 23/05/2018.
// Theme Name   : Charles-Business-Consulting HTML Template.
// Version      : 1.0.
// Author       : @CreativeGigs.
// Developed by : Jubayer al hasan. (jubayer.hasan1991@gmail.com)


(function ($) {
  "use strict";


  $(document).on('ready', function () {

    // -------------------- Navigation Scroll
    $(window).on('scroll', function () {
      var sticky = $('.theme-menu-wrapper'),
        scroll = $(window).scrollTop();
      if (scroll >= 190) sticky.addClass('fixed');
      else sticky.removeClass('fixed');

    });

    //Smooth Scroll//
    $('.navbar-nav .nav-link').on('click', function(e) {
      e.preventDefault()
      var hash = this.hash
      var position = $(hash).offset().top
      $('html').animate(
        {
          scrollTop: position - 80
        },
        1000
      )
    })

     //Smooth Scroll//
     $('.theme-button-one').on('click', function(e) {
      e.preventDefault()
      var hash = this.hash
      var position = $(hash).offset().top
      $('html').animate(
        {
          scrollTop: position - 80
        },
        1000
      )
    })
    
    // ------------------------------ Theme Menu 
    var menu= $("#mega-menu-holder");
    if(menu.length) {
      menu.slimmenu({
        resizeWidth: '991',
        animSpeed:'medium',
        indentChildren: true,
      });
    }

    // ------------------------------- WOW Animation 
    var wow = new WOW({
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 80,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
    });
    wow.init();

    // -------------------- Remove Placeholder When Focus Or Click
    $("input,textarea").each(function () {
      $(this).data('holder', $(this).attr('placeholder'));
      $(this).on('focusin', function () {
        $(this).attr('placeholder', '');
      });
      $(this).on('focusout', function () {
        $(this).attr('placeholder', $(this).data('holder'));
      });
    });

    var topMenuHeight = menu.outerHeight()+15,
    // All list items
    menuItems = menu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    
    //Check to see if the window is top if not then display button
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }

      // Get container scroll position
      var fromTop = $(this).scrollTop()+topMenuHeight;

      // Get id of current scroll item
      var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
          return this;
      });
      // Get the id of the current element
      cur = cur[cur.length-1];
      var id = cur && cur.length ? cur[0].id : "";
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#"+id+"']").parent().addClass("active");
    });
    //Click event to scroll to top
    $('.scroll-top').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 1500);
      return false;
    });

    // ----------------------------- Counter Function
    appear({
      elements: function elements(){
        return $('.timer')
      },
      appear: function appear(el){
        $(el).countTo('restart');
      },
      bounds: 200,
      reappear: true
    });
  });


  // $(window).on('load', function () { // makes sure the whole site is loaded

  //   // -------------------- Site Preloader
  //   $('.lds-dual-ring').fadeOut(); // will first fade out the loading animation
  //   $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  //   $('body').delay(350).css({ 'overflow': 'visible' });
  // })

})(jQuery)