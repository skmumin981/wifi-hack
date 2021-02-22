 document.getElementById('icon2').addEventListener('click',function() {
     document.getElementById('pop').style.display = "none";
 });
 document.getElementById('btn').addEventListener('click',function() {
     document.getElementById('pop').style.display = "flex";
 });
document.getElementById('icon3').addEventListener('click',function(){
    document.getElementById('sec').style.display = "none";
});
document.querySelector('#bolt').addEventListener('click',function(){
      var x=   document.getElementById('sec').style.display = "flex";
});
let clock = document.getElementById('clock');
setInterval(function(){
let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
}, 1000)
let dates = document.getElementById('dates');
let future = new Date();
let getting = future.toLocaleDateString();
dates.innerHTML = getting;
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
};