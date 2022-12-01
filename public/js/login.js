$(document).ready(()=>{
    $('#password').focus(function(){
        $('.monkey').attr('src','/images/login-img/close.jpg');
    });
    $('#password').blur(function(){
        $('.monkey').attr('src','/images/login-img/open.JPG');
    });
});