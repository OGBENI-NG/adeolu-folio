import animation from "./utility.js"
import { workData } from "./workData.js"
const navbarToggle = document.getElementById("navbar-toggle")
const sidenav = document.getElementById("sidenav")
const overlay = document.getElementById("overlay")
const showMoreBtn = document.getElementById("show-more-btn")
//const worksContainer = document.getElementById("works-container") 

let projectsToShow = 4
const maxProjectsToShow = workData.length

//Navbar 
navbarToggle.addEventListener("click", () => {
  if(navbarToggle.classList.toggle("active")){
    sidenav.style.width = "60%"
    sidenav.style.opacity = "1"
    overlay.style.width = "100%"
  } else {
    sidenav.style.width = "0"
    overlay.style.width = "0"
    sidenav.style.opacity = "0"

  }
  
})
//overlay close
window.onclick = (e) => {{
  if(e.target.id === 'overlay') {
    navbarToggle.classList.toggle("active")
    overlay.style.width = "0"
    sidenav.style.width = "0"
    sidenav.style.opacity = "0"
  }
}}
// Name, intro animation
animation() // Call the animation function once when the page loads
setInterval(animation, 2000) // Call the animation function every 2 seconds

document.addEventListener("click", (e) => {
  if (e.target.dataset.like) {
    handleLike(e.target.dataset.like)
  } else if  (e.target.dataset.dislike) {
    dislikeClick(e.target.dataset.dislike)
  }
})

function handleLike(likeId) {
  const targetLikeObj = workData.find(like => like.uuid === likeId)

  if (targetLikeObj.isLike) {
    // Already liked, toggle to unliked
    targetLikeObj.likes--
    targetLikeObj.isLike = false
  } else {
    // Not liked, toggle to liked and undislike if necessary
    targetLikeObj.likes++
    targetLikeObj.isLike = true

    if (targetLikeObj.isDislike) {
      targetLikeObj.dislike--
      targetLikeObj.isDislike = false
    }
  }
  render()
}

function dislikeClick(dislikeId) {
  const targetDislikeObj = workData.find(dislike => dislike.uuid === dislikeId)

  if (targetDislikeObj.isDislike) {
    // Already disliked, toggle to undisliked
    targetDislikeObj.dislike--
    targetDislikeObj.isDislike = false
  } else {
    // Not disliked, toggle to disliked and unlike if necessary
    targetDislikeObj.dislike++
    targetDislikeObj.isDislike = true

    if (targetDislikeObj.isLike) {
      targetDislikeObj.likes--
      targetDislikeObj.isLike = false
    }
  }

  render()
}

function myWorks() {
  return workData.slice(0, projectsToShow).map(function ({ img, projectName, uuid, description, projectLink, likes, dislike, isLike, isDislike }){
    const likeColor = isLike ? 'liked' : ''
    const dislikeColor = isDislike ? 'disliked' : ''

    return `
      <div class="work--overlay">
        <div class="work-img--container">
          <img src="${img}" alt="work--img" class="work-img">
        </div>
        <div class="work--details--container">
          <div class="link--container">
            <span class="project--name">${projectName}</span>
            <div class="like--container">
              <p class="likes" >
                ${likes}
                <i class="fa-solid fa-heart ${likeColor}" data-like="${uuid}" ></i>
              </p>
              <p class="likes">
                ${dislike}
                <i class="fa-solid fa-thumbs-down ${dislikeColor}" data-dislike="${uuid}"></i>
              </p>
            </div>
          </div>
          <p class="project--details">
            ${description}
            <a href="#" class="project--link">${projectLink}</a>
          </p>
        </div>
      </div>
    `
  }).join('')
}

//display project container from 
showMoreBtn.addEventListener('click', () => {
  if (projectsToShow === maxProjectsToShow) {
    projectsToShow = 4
    showMoreBtn.innerText = 'Show more'
  } else {
    projectsToShow = maxProjectsToShow
    showMoreBtn.innerText = 'Show less'
  }
  render()
})

function render() {
  document.getElementById('works-container').innerHTML = myWorks()
}
render()


