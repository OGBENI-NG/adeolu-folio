import animation from "./animation.js"
const navbarToggle = document.getElementById("navbar-toggle")
const sidenav = document.getElementById("sidenav")
//Navbar 
navbarToggle.addEventListener("click", () => {
  if(navbarToggle.classList.toggle("active")){
    sidenav.style.width = "60%"
  } else {
    sidenav.style.width = "0"
  }
  
})
// Name, intro animation
animation(); // Call the animation function once when the page loads
setInterval(animation, 2000); // Call the animation function every 2 seconds


//overlay close
window.onclick = (e) => {{
    if(e.target.id === 'overlay') {
        featuresOverlay.style.width = "0%"
    }
}}

let containerEl = document.querySelector(".portfolio-item");
// 2. Passing the configuration object inline
//https://www.kunkalabs.com/mixitup/docs/configuration-object/
let mixer = mixitup(containerEl, {
  animation: {
    effects: "fade translateZ(-100px)",
    effectsIn: "fade translateY(-100%)",
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
  }
});
// fancybox insilaze & options //
$("[data-fancybox]").fancybox({
  loop: true,
  hash: true,
  transitionEffect: "slide",
  /* zoom VS next////////////////////
  clickContent - i modify the deafult - now when you click on the image you go to the next image - i more like this approach than zoom on desktop (This idea was in the classic/first lightbox) */
  clickContent: function(current, event) {
    return current.type === "image" ? "next" : false;
  }
});