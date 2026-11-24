const urlBase = "https://revamp.oligilbert.dev/"

var url = location.href.toString()
var home = document.getElementById("home")
var projects = document.getElementById("projects")

function urlCheck() {
  // checks url and makes a certain part of the website visible depending on which anchor is in the url
  url = location.href.toString()
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
}

urlCheck()

var currentUrl = location.href
setInterval(function() {
  if (currentUrl != location.href) {
    currentUrl = location.href
    urlCheck()
  }
}, 175);
