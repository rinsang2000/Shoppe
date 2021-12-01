var btnRegister = document.getElementById('btn-register')
var modal = document.querySelector('.modal')
var modalOverlay = document.querySelector('.modal__overlay')
btnRegister.onclick = function(){
    modal.style.display='inline-flex';
}
modalOverlay.onclick = function(){
    modal.style.display='none';
}
var btnLogin = document.getElementById('btn-login')
var modal2 = document.querySelector('.modal2')
var modalOverlay2 = document.querySelector('.modal__overlay2')
btnLogin.onclick = function(){
    modal2.style.display='inline-flex';
}
modalOverlay2.onclick = function(){
    modal2.style.display='none';
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSildes(n){
    showSlides(slideIndex += n);
}
function currentSlides(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.querySelectorAll('.mySlides')
    var dots =  document.querySelectorAll('.dot')
    console.log(slides.length)
    if(n > slides.length){
        slideIndex= 1;
    }
    if(n < 1 ){
        slideIndex =slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","")
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex -1].className += " active"
}

var slideIndex = 0;
showSlides();
function showSlides(){
    var i;
    var slides = document.querySelectorAll('.mySlides')
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++
    if(slideIndex > slides.length){
        slideIndex = 1
    }
    slides[slideIndex -1].style.display = "block"
    
    setTimeout(showSlides, 5000)
}
