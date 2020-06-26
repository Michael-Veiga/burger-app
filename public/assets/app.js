$(document).ready(function () {
  $("#submit-button").on("click", function () {
    var burgerInfo = {
      burgerName: $("#make_burger").val().trim(),
    };

    $.ajax("/burger/create", {
      type: "POST",
      data: burgerInfo,
    }).then(function () {
      console.log("made new burger");
      location.reload();
    });
  });

  $(".devour-button").on("click", function () {
    var devourInfo = {
      id: $(this).attr("data-id"),
    };

    $.ajax("burger/eat", {
      type: "POST",
      data: devourInfo,
    }).then(function () {
      console.log("devour the burger");
      location.reload;
    });
  });
});
