const urlBase = "https://revamp.oligilbert.dev/"

var url = window.location.toString()
var home = document.getElementById("home")
var projects = document.getElementById("projects")

function urlCheck() {
  // checks url and makes a certain part of the website visible depending on which anchor is in the url
  url = window.location.toString()
  if (home != null && projects != null) {
    if (url == (urlBase + "#home")) {
      console.log("ran to home")
      home.style.display = "block"
      projects.style.display = "none"
    } else if (url == (urlBase + "#projects")) {
      console.log("ran to projects")
      home.style.display = "none"
      projects.style.display = "block"
    } else {
      console.log("ran to else")
      home.style.display = "block"
      projects.style.display = "none"
    }
  }
}

window.navigation.addEventListener("navigate", (event) => {
  urlCheck()
})

urlCheck()
