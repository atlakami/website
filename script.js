const urlBase = "https://revamp.oligilbert.dev/"

window.navigation.addEventListener("navigate", (event) => {
})

// checks url and makes a certain part of the website visible depending on which anchor is in the url
var url = window.location.toString()
var home = document.getElementById("#home")
var projects = document.getElementById("#projects")
if (home != null && projects != null) {
  if (url == (urlBase + "#home")) {
    home.style.display = "block"
    projects.style.display = "none"
  } else if (url == (urlBase + "#projects")) {
    home.style.display = "none"
    projects.style.display = "block"
  } else {
    home.style.display = "block"
    projects.style.display = "none"
  }
}
