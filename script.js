const urlBase = "https://revamp.oligilbert.dev/"

window.navigation.addEventListener("navigate", (event) => {
})

// checks url and makes a certain part of the website visible depending on which anchor is in the url
url = window.location.toString()
if (url == (urlBase + "#home")) {
  document.getElementById("#home").style.visibility = "visible"
  document.getElementById("#projects").style.visibility = "hidden"
} else if (url == (urlBase + "#projects")) {
  document.getElementById("#home").style.visibility = "hidden"
  document.getElementById("#projects").style.visibility = "visible"
} else {
  document.getElementById("#home").style.visibility = "visible"
  document.getElementById("#projects").style.visibility = "hidden"
}
