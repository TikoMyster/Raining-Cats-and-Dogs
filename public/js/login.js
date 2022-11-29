$(document).ready(()=>{
    $('#password').focus(function(){
        $('.monkey').attr('src','/login-img/close.jpg');
    })
    $('.monkey').attr('src','/login-img/open.JPG');
})