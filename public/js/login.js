$(document).ready(()=>{
    $('#password').focus(function(){
        $('.monkey').attr('src','/login-img/close.jpg');
    });
    $('#password').blur(function(){
        $('.monkey').attr('src','/login-img/open.JPG');
    });
});