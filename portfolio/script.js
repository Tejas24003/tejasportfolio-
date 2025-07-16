var path ='M 10 20 Q 250 20 860 20'
var finalPath = 'M 10 20 Q 250 20 860 20'

var tl = gsap.timeline()
var str = document.querySelector("#str")

str.addEventListener("mousemove",function (dets){
    path =`M 10 20 Q  ${dets.x} ${dets.y} 860 20`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power4.out"
    })

})
str.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
    
})



// Animation
tl.from(".logo a",{
    y:-30,
    duration:.5,
    opacity:0,
    // stagger:0.4,
    text:"",
})
tl.from(".left_animation a",{
    y:-50,
    duration:.5,
    opacity:0,
    // stagger:0.3,
    
})


// cursor
  var main = document.querySelector("main")
  var cursor = document.querySelector("#cursor")
  var hero = document.querySelector(".hero_sec_inner")
  main.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out"
    })

  })

  hero.addEventListener("mouseenter",function(){
   
    gsap.to("#cursor",{
        scale:7,
        opacity:1.9,
        backgroundColor:"blue",
    })
   })
  hero.addEventListener("mouseleave",function(){
    
    gsap.to("#cursor",{
        scale:1,
        opacity:1,
        backgroundColor:"white",        
    })
})

  tl.from("#namee span",{
    x:100,
    // stagger:0.5,
    opacity:0,
    duration:1,
    ease: "elastic.out(1,.1)",

})

tl.to(".h1", {
    duration: 0.8,
    text: "Frontend Developer",
    ease: "none",
  });

tl.from("#ghost",{
    y:10,
    opacity:0.8,
   duration:1.3,
   yoyo:true,
   repeat:-1, 
})
// sidebar for project menu
var cross = document.querySelector(".title-p i")
var project = document.querySelector(".project")
cross.addEventListener("click",function(){
   
    gsap.to(".side_project_menu",{
        x:350
       
    })
   })

project.addEventListener("click",function(){
   
    gsap.to(".side_project_menu",{
        x:0
       
    })
   })
//    sidebar for contact menu
var crossed = document.querySelector(".title-c i")
var contact = document.querySelector(".contact")
crossed.addEventListener("click",function(){
   
    gsap.to(".side_contact_menu",{
        x:350
       
    })
   })

contact.addEventListener("click",function(){
   
    gsap.to(".side_contact_menu",{
        x:0
       
    })
   })



