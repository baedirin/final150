//Form Script
$(document).ready(function() {
  $("#first_name").focus();

  $("#appointment_form").validate({
		rules: {
        first_name: {
        required: true
        minlength: 2,
        },
        last_name: {
        required: true
        minlength: 2,
        },
        email_address: {
				required: true,
				email: true
			  },
        phone_number: {
				required: false,
				minlength: 10,
        },
        contact_date:{
        required: true,
      },
    messages: {
        first_name: {
        minlength: "Please enter a name longer than 2 characters",
        required: "Please enter your first name",
        },
        last_name: {
        minlength: "Please enter your last name",
        required: "Please enter your last name",
        },
        email_address: {
        required: "Please provide an email address"
        },
        phone_number:

        contact_date:
      },

      }
    });
)};













});
