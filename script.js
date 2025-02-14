document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your trip request has been submitted.");
});



//side Nvabar 

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

//
// loader

let user  = document.getElementById("userText");

// let email = localStorage.getItem(email,email)
// user.textContent = email
window.onload = function() {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        // document.getElementById("content").style.display = "block";
    }, 2200); //
};

//gsap animation

gsap.from("#boxx",{
    y:-100,
    scale:0,
    duration:0.3,
    delay:2,
    stagger:0.3
})

gsap.from("#boxxx",{
    y:-100,
    scale:0,
    duration:0.5,
    delay:2,
    stagger:0.3
})
