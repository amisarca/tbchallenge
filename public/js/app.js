jQuery(function () {
  var login = function () {
    var source = $("#login-template").html();
    var context = { title: "Login", body: "You should login now!" }
    $("#cntent").html(Handlebars.compile(source)(context));
  };

  var register = function () {
    var source = $("#login-template").html();
    var context = { title: "Register", body: "You should register now!" }
    $("#cntent").html(Handlebars.compile(source)(context));
  };

  var routes = {
    '/login': login,
    '/register': register
  };

  var router = Router(routes).configure({html5history: true});

  router.init();
});
