// Generated by CoffeeScript 1.6.3
(function() {
  var greet, person;

  person = "Luiz";

  greet = function() {
    return alert('Hello LOL');
  };

  greet = function(arg) {
    return alert("Hello " + arg);
  };

  greet = function(message, name) {
    return alert("" + message + " " + name);
  };

  greet = function(name) {
    if (name == null) {
      name = 'Stranger';
    }
    return alert(name);
  };

}).call(this);