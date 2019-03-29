$(function(){
  var userObject = [{username:"John", password:"John2019"},{username:"Jack", password:"Jack2019"}];
  let url = "login.html";
  $("#form").submit(function(){
    var username1 = $('#username').val();
    var password1 = $('#password').val();
    for (var i = 0; i < userObject.length; i++) {
      if(username1 == userObject[i].username && password1 == userObject[i].password){
        document.location.href = url;
        return false;
      }
    }
  });
  $(".mnbtn").mousedown(function(){
    $("#itag").text('check_box');
    return false;
  });
});
