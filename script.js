/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');





let img1 = document.querySelector('#i1')
let shift1= document.querySelector('.shift1')
let shift2= document.querySelector('.shift2')
let img2 = document.querySelector('#i2')
let s1a = document.querySelector('#s1a')
let s1b = document.querySelector('#s1b')
let t1 = document.querySelector('#t1')
let th1 = document.querySelector('#th1')
let t2 = document.querySelector('#t2')
let th2 = document.querySelector('#th2')

let s2a = document.querySelector('#s2a')
let s2b = document.querySelector('#s2b')
let t3 = document.querySelector('#t3')
let th3 = document.querySelector('#th3')
let img3 = document.querySelector('#i3')

let s3a = document.querySelector('#s3a')
let s3b = document.querySelector('#s3b')
let t4 = document.querySelector('#t4')
let th4 = document.querySelector('#th4')
let img4 = document.querySelector('#i4')

// let s4a = document.querySelector('#s4a')
// let s4b = document.querySelector('#s4b')
// let t5 = document.querySelector('#t5')
// let th5 = document.querySelector('#th5')
// let img5 = document.querySelector('#i5')

// let s5a = document.querySelector('#s5a')
// let s5b = document.querySelector('#s5b')
// let t6 = document.querySelector('#t6')
// let th6 = document.querySelector('#th6')
// let img6 = document.querySelector('#i6')

let s6a = document.querySelector('#s6a')
let s6b = document.querySelector('#s6b')
let t7 = document.querySelector('#t7')
let th7 = document.querySelector('#th7')
let img7 = document.querySelector('#i7')

let s7a = document.querySelector('#s7a')
let s7b = document.querySelector('#s7b')
let t8 = document.querySelector('#t8')
let th8 = document.querySelector('#th8')
let img8 = document.querySelector('#i8')

let s9a = document.querySelector('#s9a')
let s9b = document.querySelector('#s9b')
let t9 = document.querySelector('#t9')
let th9 = document.querySelector('#th9')
let img9 = document.querySelector('#i9')

let s10a = document.querySelector('#s10a')
let s10b = document.querySelector('#s10b')
let t10 = document.querySelector('#t10')
let th10 = document.querySelector('#th10')
let img10 = document.querySelector('#i10')

let s11a = document.querySelector('#s11a')
let s11b = document.querySelector('#s11b')
let t11 = document.querySelector('#t11')
let th11 = document.querySelector('#th11')
let img11 = document.querySelector('#i11')

let s12a = document.querySelector('#s12a')
let s12b = document.querySelector('#s12b')
let t12 = document.querySelector('#t12')
let th12 = document.querySelector('#th12')
let img12 = document.querySelector('#i12')

let s13a = document.querySelector('#s13a')
let s13b = document.querySelector('#s13b')
let t13 = document.querySelector('#t13')
let th13 = document.querySelector('#th13')
let img13 = document.querySelector('#i13')

let s14a = document.querySelector('#s14a')
let s14b = document.querySelector('#s14b')
let t14 = document.querySelector('#t14')
let th14 = document.querySelector('#th14')
let img14 = document.querySelector('#i14')

// let nav = document.querySelector('#nav')
// let h1 = document.querySelector('#logo')
// let hvar = 0

// let slideIndex = 1; 
// showSlides(slideIndex);




// h1.addEventListener('mouseover', function(event){
// nav.style.visibility = "visible"
// nav.style.left = "100px"
// nav.style.opacity = "1"
  
// setTimeout(function(){
//    hvar = 1
//  }, 2000)  

   
// })

// h1.addEventListener('mousedown', function(event){


//   if (hvar === 0) { 
// nav.style.visibility = "visible"
// nav.style.left = "100px"
// nav.style.opacity = "1"
// hvar = 1
   
// }
  

  
//  else if (hvar === 1){


//   nav.style.opacity = "0"
// nav.style.left = "-250px"
// hvar = 0
// nav.style.visibility = "hidden"
  
// }

  
// })

th1.addEventListener('mouseover', function(event){

  s1a.style.transform = "rotate(0deg)";
  s1b.style.transform = "rotate(0deg)";
  img1.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
  t1.innerHTML = "HOUSE OF KNUCKLES IDENTITY"
})

th1.addEventListener('mouseleave', function(event){

  s1a.style.transform = "rotate(10deg)";
  s1b.style.transform = "rotate(5deg)";
  img1.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/case_smaller%20copy.jpg?v=1706664944128"
  t1.innerHTML = ""
})


th3.addEventListener('mouseover', function(event){

  s2a.style.transform = "rotate(0deg)";
  s2b.style.transform = "rotate(0deg)";
  img3.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
  img3.style.top = "0"
  t3.innerHTML = "GALERÍA DE LA RAZA BRAND"


})

th3.addEventListener('mouseleave', function(event){

  s2a.style.transform = "rotate(10deg)";
   s2b.style.transform = "rotate(5deg)";
  img3.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/Galeria-Thumbnail.png?v=1739995185613"
  img3.style.top = "-28px"
  t3.innerHTML = ""

})

th4.addEventListener('mouseover', function(event){

  s3a.style.transform = "rotate(0deg)";
  s3b.style.transform = "rotate(0deg)";
  img4.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
  img4.style.top = "0"
  t4.innerHTML = "SCANDINAVIAN<br>FESTIVAL<br>LOGO"


})

th4.addEventListener('mouseleave', function(event){

  s3a.style.transform = "rotate(10deg)";
   s3b.style.transform = "rotate(5deg)";
  img4.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/SF-Thumbnail.png?v=1739952109183"
  img4.style.top = "-50px"
  t4.innerHTML = ""

})

// th5.addEventListener('mouseover', function(event){

//   s4a.style.transform = "rotate(0deg)";
//   s4b.style.transform = "rotate(0deg)";
//   img5.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
//   img5.style.top = "0"
//   t5.innerHTML = "SCREENPRINTING"


// })

// th5.addEventListener('mouseleave', function(event){

//   s4a.style.transform = "rotate(10deg)";
//    s4b.style.transform = "rotate(5deg)";
//   img5.src = "https://cdn.glitch.com/8564ad58-5b13-41ff-b387-57c90cb9df12%2FIMG_5754.JPG?1550541189374"
//   img5.style.top = "-20px"
//   t5.innerHTML = ""

// })

// th6.addEventListener('mouseover', function(event){

//   s5a.style.transform = "rotate(0deg)";
//   s5b.style.transform = "rotate(0deg)";
//   img6.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
//   img6.style.top = "0"
//   t6.innerHTML = "EXHIBITION DESIGN"


// })

// th6.addEventListener('mouseleave', function(event){

//   s5a.style.transform = "rotate(10deg)";
//   s5b.style.transform = "rotate(5deg)";
//   img6.src = "https://cdn.glitch.com/8564ad58-5b13-41ff-b387-57c90cb9df12%2FCHECKER_2_2.gif?v=1580777230937"
//   img6.style.top = "-20px"
//   t6.innerHTML = ""

// })

th7.addEventListener('mouseover', function(event){

  s6a.style.transform = "rotate(0deg)";
  s6b.style.transform = "rotate(0deg)";
  img7.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
  img7.style.top = "0"
  t7.innerHTML = "BEGINNING TO END"


})

th7.addEventListener('mouseleave', function(event){

  s6a.style.transform = "rotate(10deg)";
  s6b.style.transform = "rotate(5deg)";
  img7.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/BTE-Thumbnail.png?v=1739995186163"
  img7.style.top = "-20px"
  t7.innerHTML = ""

})

th8.addEventListener('mouseover', function(event){

  s7a.style.transform = "rotate(0deg)";
  s7b.style.transform = "rotate(0deg)";
  img8.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
  img8.style.top = "0"



})

th8.addEventListener('mouseleave', function(event){

  s7a.style.transform = "rotate(10deg)";
  s7b.style.transform = "rotate(5deg)";
  img8.src = "https://cdn.glitch.com/8564ad58-5b13-41ff-b387-57c90cb9df12%2Fstatic_by_bureiku_fox.gif?1550266240493"
  img8.style.top = "-20px"

})

th9.addEventListener('mouseover', function(event){

  s9a.style.transform = "rotate(0deg)";
  s9b.style.transform = "rotate(0deg)";
  img9.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
  img9.style.top = "0"
t9.innerHTML = "IDENTITY DISRUPTION"


})

th9.addEventListener('mouseleave', function(event){

  s9a.style.transform = "rotate(10deg)";
  s9b.style.transform = "rotate(5deg)";
  img9.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/ID-Thumbnail.png?v=1739995275914"
  img9.style.top = "-20px"
  t9.innerHTML = ""

})

th10.addEventListener('mouseover', function(event){

  s10a.style.transform = "rotate(0deg)";
  s10b.style.transform = "rotate(0deg)";
  img10.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
  img10.style.top = "0"
t10.innerHTML = "CARAVAN FOR THE CHILDREN"


})

th10.addEventListener('mouseleave', function(event){

  s10a.style.transform = "rotate(10deg)";
  s10b.style.transform = "rotate(5deg)";
  img10.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/Caravan-Thumbnail.png?v=1739952109704"
  img10.style.top = "-20px"
  t10.innerHTML = ""

})

th11.addEventListener('mouseover', function(event){

  s11a.style.transform = "rotate(0deg)";
  s11b.style.transform = "rotate(0deg)";
  img11.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
  img11.style.top = "0"
t11.innerHTML = "CITY OF VENTURA: 4TH OF JULY 2024"


})

th11.addEventListener('mouseleave', function(event){

  s11a.style.transform = "rotate(10deg)";
  s11b.style.transform = "rotate(5deg)";
  img11.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/4th-Thumbnail.png?v=1739995175571"
  img11.style.top = "-20px"
  t11.innerHTML = ""

})

th12.addEventListener('mouseover', function(event){

  s12a.style.transform = "rotate(0deg)";
  s12b.style.transform = "rotate(0deg)";
  img12.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
  img12.style.top = "0"
t12.innerHTML = "PEDAGOGY OF HOPE"


})

th12.addEventListener('mouseleave', function(event){

  s12a.style.transform = "rotate(10deg)";
  s12b.style.transform = "rotate(5deg)";
  img12.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/POH-Thumbnail.png?v=1739952112616"
  img12.style.top = "0px"
  t12.innerHTML = ""

})

th13.addEventListener('mouseover', function(event){

  s13a.style.transform = "rotate(0deg)";
  s13b.style.transform = "rotate(0deg)";
  img13.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
  img13.style.top = "0"
t13.innerHTML = "LUNADA: LITERARY LOUNGE"


})

th13.addEventListener('mouseleave', function(event){

  s13a.style.transform = "rotate(10deg)";
  s13b.style.transform = "rotate(5deg)";
  img13.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/LUNADA-Thumbnail.png?v=1739995187593"
  img13.style.top = "-20px"
  t13.innerHTML = ""

})

th14.addEventListener('mouseover', function(event){

  s14a.style.transform = "rotate(0deg)";
  s14b.style.transform = "rotate(0deg)";
  img14.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/402107790_STATIC_NOISE_400.gif?v=1706570956649"
  img14.style.top = "0"
t14.innerHTML = "CCA HOMECOMING 2022"


})

th14.addEventListener('mouseleave', function(event){

  s14a.style.transform = "rotate(10deg)";
  s14b.style.transform = "rotate(5deg)";
  img14.src = "https://cdn.glitch.global/8564ad58-5b13-41ff-b387-57c90cb9df12/Homecoming-Thumbnail.png?v=1739952939451"
  img14.style.top = "-20px"
  t14.innerHTML = ""

})





// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }



