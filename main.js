
document.addEventListener("DOMContentLoaded" , function(){
    var icon = document.querySelector(".small-icon");
    var content = document.querySelector(".small-nav");
    var current = "click1";

    icon.onclick = function(){
        if(current == "click1"){
            this.innerHTML ="<i class='fas fa-stream'></i>";
            content.style.display ="block";
            current ="click2";
        }
        else if( current == "click2"){
            this.innerHTML= "<i class='fas fa-bars'></i>";
            content.style.display="none";
            current ="click1";
        }
    }
},false)


window.onscroll = function(){myScroll()};

var nav = document.querySelector(".header");
var sticky = nav.offsetTop;

function myScroll(){
if(window.pageYOffset >= 70){
    nav.classList.add("sticky");
}

else{
    nav.classList.remove("sticky");
}

}





var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}





function show(){
    let to = document.querySelector(".map");
    let link =document.getElementById("link-come");
    link.onmouseover =function(){
    to.style.visibility ="visible";
    }
  

}
function hide(){
    let to = document.querySelector(".map");
    let link =document.getElementById("link-come");
    link.onmouseout =function(){
    to.style.visibility ="hidden";
    }
}




