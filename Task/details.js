
  var user = JSON.parse(localStorage.getItem('currentUser'));

  document.getElementById("username").innerHTML = user.username;
  document.getElementById("userid").innerHTML = user.user_id;
  document.getElementById("balance").innerHTML = user.balance;

  username=user.username;
  userid=user.user_id;
  balance=user.balance;

