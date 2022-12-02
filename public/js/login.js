$(document).ready(()=>{
    $('#password').focus(function(){
        $('.monkey').attr('src','/images/login-img/close.png');
    });
    $('#password').blur(function(){
        $('.monkey').attr('src','/images/login-img/open.png');
    });
});