jQuery(function () {
  var login = function () {
    // Change the selected menu item to Login
    var source = $("#menu-template").html();
    var context = { loginStatus: "active", registerStatus: "inactive" }
    $("#menu").html(Handlebars.compile(source)(context));

    // Change the text on the image
    $("#carousel-text").text("Login");

    // Display the login form
    source = $("#login-form-template").html();
    $("#action-form").html(Handlebars.compile(source)(context));
  };

  var register = function () {
    // Change the selected menu item to Register
    var source = $("#menu-template").html();
    var context = { loginStatus: "inactive", registerStatus: "active" }
    $("#menu").html(Handlebars.compile(source)(context));

    // Change the text on the image
    $("#carousel-text").text("Create your account");

    // Display the register form
    source = $("#register-form-template").html();
    $("#action-form").html(Handlebars.compile(source)(context));
  };

  var routes = {
    '/login': login,
    '/register': register
  };

  var router = Router(routes).configure({html5history: true});

  router.init();
});
