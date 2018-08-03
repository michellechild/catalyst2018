import $ from 'jquery';
import whatInput from 'what-input';
var List = require('list.js');
window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$('#chkdiscount').prop( "checked", true );
$('#tickets_promocode').css( "display", "block" );

var scheduleOptions = {
  valueNames: [ 'date', 'time', 'track', 'type' ]
};

var schedule = new List('schedule', scheduleOptions);

  // Add smooth scrolling to all links
  $("a:not('.program__link')").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

//Parsing HTML Interest Form to JSON for Google Sheets
$.fn.serializeObject = function()
{
 var o = {};
 var a = this.serializeArray();
 $.each(a, function() {
 if (o[this.name]) {
 if (!o[this.name].push) {
 o[this.name] = [o[this.name]];
 }
 o[this.name].push(this.value || '');
 } else {
 o[this.name] = this.value || '';
 }
 });
 return o;
};

var $form = $('form#interest-form'),
    url = 'https://script.google.com/macros/s/AKfycbzQbT_pAKk91t29wwv5MK3B0Wn2H0X-t5rDqt_JjDZPwm2gftw/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).then(
    $('.interest-form-wrapper').hide(),
    $('#interest-submitted').css('display','flex')
  );
})

//Copy to Clipboard

$('.copy-to-clipboard').on("click", function(){
    var value = $(this).data('clipboard-text'); //Upto this I am getting value

    var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(value).select();
      document.execCommand("copy");
      $temp.remove();

      var popup = document.getElementById("link__tooltip");
      popup.classList.toggle("show");
})
