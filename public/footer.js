// The goal of this function is
// to dynamically create the following
// HTML structure using JavaScript:
// 
//<footer>
//  <div class="footer-links">
//    <a href="../index.html" class="footer-link">HOME</a>
//    <a href="https://github.com/lsfernandes92/awesome-scripts" target="_blank" class="footer-link">GITHUB</a>
//    <a href="https://ko-fi.com/variosonrails" target="_blank" class="footer-link">SUPPORT ME</a>
//  </div>
//  <p>
//    Made with <span class="footer-heart"><3</span> by 
//    <a href="https://lsfernandes92.github.io/portifolio/" target="_blank" class="me">
//      LUCAS FERNANDES
//    </a>
//  </p>
//  <h3>©Awesome Scripts 2024. All Rights Reserved.</h3>
//</footer>
export const appendFooterToContainer = () => {
  
  const containerElement = document.querySelector(".container")
  const footerElement = document.createElement("footer")

  footerElement.appendChild(links())
  footerElement.appendChild(paragraph())
  footerElement.appendChild(trademark())

  containerElement.append(footerElement)
}

const links = () => {
  const links = document.createElement("div")
  const homeLink = document.createElement("a")
  const aboutLink = document.createElement("a")
  const githubLink = document.createElement("a")
  const supportLink = document.createElement("a")

  links.classList.add("footer-links")
  
  homeLink.href = "./index.html"
  homeLink.classList.add("footer-link")
  homeLink.textContent = "HOME"

  aboutLink.href = "./about.html"
  aboutLink.classList.add("footer-link")
  aboutLink.textContent = "ABOUT"

  githubLink.href = "https://github.com/lsfernandes92/awesome-scripts"
  githubLink.target = "_blank"
  githubLink.classList.add("footer-link")
  githubLink.textContent = "GITHUB"

  // supportLink.href = "https://ko-fi.com/variosonrails"
  supportLink.href = "https://buymeacoffee.com/jaggiesweekly"
  supportLink.target = "_blank"
  supportLink.classList.add("footer-link")
  supportLink.textContent = "SUPPORT ME"

  links.appendChild(homeLink)
  links.appendChild(aboutLink)
  links.appendChild(githubLink)
  links.appendChild(supportLink)

  return links
}

const paragraph = () => {
  const paragraph = document.createElement("p")
  const heart = document.createElement("span")
  const portifolioLink = document.createElement("a")

  heart.classList.add("footer-heart")
  heart.textContent = "<3"

  portifolioLink.href = "https://lsfernandes92.github.io/portifolio/"
  portifolioLink.target = "_blank"
  portifolioLink.classList.add("me")
  portifolioLink.textContent = "LUCAS FERNANDES"

  paragraph.textContent = "Made with"
  paragraph.appendChild(heart)
  paragraph.innerHTML += "by"
  paragraph.appendChild(portifolioLink)

  return paragraph
}

const trademark = () => {
  const trademark = document.createElement("h3")

  trademark.textContent = "©Awesome Scripts 2024. All Rights Reserved."

  return trademark
}