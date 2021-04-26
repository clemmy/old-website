$("#contact-form>form").on("submit", function (event) {
  event.preventDefault();
  var unindexed_array = $("#contact-form>form").serializeArray();
  var formData = {};

  for (var i = 0; i < unindexed_array.length; ++i) {
    formData[unindexed_array[i].name] = unindexed_array[i].value;
  }

  var encodedEmail = "Y2xlbWVudC5ob2FuZzI0QGdtYWlsLmNvbQ==";

  $.ajax({
    url: "//formspree.io/" + atob(encodedEmail),
    method: "POST",
    data: formData,
    dataType: "json",
    success: function (data) {
      $("#send-success").html("Message was successfully sent!");
    },
    error: function (xhr, status) {
      $("#send-success").html("There was an error. Please try again.");
    },
  });
});
