window.navigation.addEventListener("navigate", (event) => {
  var url = window.location.toString()
  url = url.replace("https://revamp.oligilbert.dev/", "")
  alert(url)
})
