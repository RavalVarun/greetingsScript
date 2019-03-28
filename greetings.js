var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Hello,Thanks for stoppoing by, </br> Have a Good Evening!";
}
else if (hourNow > 12) {
  greeting = "Hello,Thanks for stoppoing by, </br> Have a Good Afternoon!";
}

else if (hourNow > 0) {
  greeting = "Hello,Thanks for stoppoing by, </br> Have a Good Morning!";
}

else {
  greeting = " Hello,Thanks for stoppoing by, </br> Welcome!";
}

document.write ('<h3>' + greeting + '</h3>' );