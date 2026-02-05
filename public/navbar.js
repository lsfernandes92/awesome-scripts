// The goal of this function is
// to dynamically create the following
// HTML structure using JavaScript:
// 
//<navbar>      
//  <a href="./index.html" class="navbar-llinks">HOME</a>
//  <div class="navbar-links">
//    <a href="https://github.com/lsfernandes92/awesome-scripts" target="_blank" class="navbar-link">GITHUB</a>
//    <a href="https://ko-fi.com/variosonrails" target="_blank" class="navbar-link">SUPPORT ME</a>
//  </div>
//</navbar>
export const prependNavbarToContainer = () => {
  
  const containerElement = document.querySelector(".container")
  const navbarElement = document.createElement("navbar")

  navbarElement.append(llinks())
  navbarElement.append(rlinks())
  containerElement.prepend(navbarElement)
}

const llinks = () => {
  const llinks = document.createElement("div")
  const homeLink = document.createElement("a")
  const aboutLink = document.createElement("a")

  homeLink.href = "./index.html"
  homeLink.classList.add("navbar-link")
  homeLink.textContent = "HOME"

  aboutLink.href = "./about.html"
  aboutLink.classList.add("navbar-link")
  aboutLink.textContent = "ABOUT"

  llinks.appendChild(homeLink)
  llinks.appendChild(aboutLink)

  return llinks
}

const rlinks = () => {
  const rlinks = document.createElement("div")
  const githubLink = document.createElement("a")
  const supportLink = document.createElement("a")

  rlinks.classList.add("navbar-rlinks")
  
  githubLink.href = "https://github.com/lsfernandes92/awesome-scripts"
  githubLink.target = "_blank"
  githubLink.classList.add("navbar-link")
  githubLink.textContent = "GITHUB"

  // supportLink.href = "https://ko-fi.com/variosonrails"
  supportLink.href = "https://buymeacoffee.com/jaggiesweekly"
  supportLink.target = "_blank"
  supportLink.classList.add("navbar-link")
  supportLink.textContent = "SUPPORT ME"

  rlinks.appendChild(githubLink)
  rlinks.appendChild(supportLink)

  return rlinks
}