

function signUp() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.username == username);
  
  if (!user) {
    var user_id=Date.now();
    alert(user_id);
    users.push({
      username: username,
      password: password,
      user_id: user_id,
      balance: 0
    });
    
    localStorage.setItem("users", JSON.stringify(users));
    alert("Register successful");
    
  } else {
    alert("Username already taken");
  }
}
const form = document.getElementById("sign-in-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.username == username && u.password == password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    
      document.getElementById("username").textContent = user.username;
      window.location.replace('./functions.html');
    } 
    else {
      alert("Invalid username or password");
      return ;
    }
});







function deposite() {
  
  let amount = parseFloat(document.getElementById("amount").value);
  
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let user = JSON.parse(localStorage.getItem("users"));
  let users = user.find(u => u.user_id == currentUser.user_id);
  
  
    currentUser.balance += amount;
    users.balance +=amount;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("users", JSON.stringify(user));
    alert("Deposite successful");
  
}

function send(){

  
  let userid = document.getElementById("userid").value;
  let amount = parseFloat(document.getElementById("amount").value);

  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let reciever = users.find(u => u.user_id == userid);

   if (reciever) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let user = users.find(u => u.user_id == currentUser.user_id);
    
    if (currentUser.balance >= amount) {
      currentUser.balance -= amount;
      user.balance-=amount;
      reciever.balance += amount;
      
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      
      localStorage.setItem("users", JSON.stringify(users));
      alert("Money sent successfully!");
    } else {
      alert("Insufficient fund");
    }
}
else {
  alert("Invalid reciever id");
}
}






 
  

















