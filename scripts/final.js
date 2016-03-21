//Brittaney Nico Davis - Web 150 - 2/28/16 - Assignment 8

//Integrate at least 1 jQuery event/event handler
$(document).ready(function() {

	$('li#info').hide();
	$('li#updated').html('<b>Updated</b>');
	$('h3#portfolio').replaceWith($('h3#endeavour'));

//Use the .css() method to select and update element properties
	$('.products').css({
		'font-family': 'Arial',
  	'color': '#ffffff',
  	'font-size': '+=2'

	  });
//Use animation to animate at least 1 element on the page
$('li#personal').on('click', function() {
  $(this).animate({
    'opacity': 0.0,
    'padding-left': '+=60'},
    300

    );

  });

//Use .each() to update multiple elements
$(".contact > li").each(function() {
	$(this).addClass("foo");
		  console.log(this);
		});

//Integrate at least 1 jQuery event/event handler
$(".about-img > img").mouseover(function(){
	$(".about-img > img").attr("src", "http://edison.seattlecentral.edu/~bdavis11/web150/assignment8/imgs/hackers2.jpg");
	});

//Use the .css() method to select and update element properties
$('header').css({
		'padding': '20px',
		'background-color': '#999999',
		'border-color': '#FFFFFF',

	});
//Use effects with at least 1 element on the page
$( ".bottom-img > img" ).mouseover(function() {
	$( ".bottom-img > img" ).fadeOut( "slow", function() {
		});
	});

$("#appointment_form").validate({
	rules: {
			first_name: {
			required: true,
			minlength: 2
			},
			last_name: {
			required: true,
			minlength: 2
			},
			email_address: {
			required: true,
			email: true
			},
			phone_number: {
			required: true,
			minlength: 10
			},
			contact_date:{
			required: true,
			},
		},
		messages: {
        first_name: {
        minlength: "Please enter a name longer than 2 characters.",
        required: "Please enter your first name."
        },
        last_name: {
        minlength: "Please enter a name longer than 2 characters.",
        required: "Please enter your last name."
        },
        email_address: {
        required: "Please provide an email address."
        },
        phone_number: {
        minlength: "Please enter a phone number 10 digits in length.",
        },
        contact_date: {
        required: "Please enter a date you wish to be contacted."
        },

      }
	});
});
