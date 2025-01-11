let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');
let login = document.querySelector('#login-on');
let close = document.querySelector('#close-login-form');



menu.onclick =function(){
    menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}


login.onclick=function(){
  document.querySelector('.login-form-continer').classList.toggle('active');
}

close.onclick=function(){
    document.querySelector('.login-form-continer').classList.remove('active');
}


window.onscroll =function(){

    menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}






//


let btns =document.querySelector('.button');



onscroll = function(){
  if(scrollY >= 400){
    btns.style.display ='block'
  }else{
    btns.style.display ='none'
  }
}


btns.onclick=function(){
  scroll({
    top:0,
    right:0,
    behavior:"smooth",
    
  })
}