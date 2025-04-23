function showNotification(message, type) {
  const notification = $("#notification");
  const notificationMessage = $("#notificationMessage");

  notificationMessage.text(message);
  notification.removeClass("success error show").addClass(type).addClass("show");

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.removeClass("show");
  }, 3000);
}

$(document).ready(function () {
  $("#contactForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 12,
        digits: true
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Your name must be at least 3 characters long"
      },
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address"
      },
      phone: {
        required: "Please enter your phone number",
        minlength: "Your phone number must be at least 12 digits long",
        digits: "Please enter a valid phone number (digits only)"
      },
      message: {
        required: "Please enter your message",
        minlength: "Your message must be at least 10 characters long"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "php/process.php",
        data: $(form).serialize(),
        success: function (response) {
          if (response.trim() === "Success") {
            showNotification("Message sent successfully!", "success");
            $("#contactForm")[0].reset();
          } else {
            showNotification(response, "error");
          }
        },
        error: function () {
          showNotification("An error occurred. Please try again.", "error");
        }
      });
    }
  });
});