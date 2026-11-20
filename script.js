function showSection() {
  var i;
  for (i = 0; i < links.length; i += 1) {
    document.getElementById(links[i].href.split('#')[1]).className = 'hidden';
  }
  document.getElementById(this.href.split('#')[1]).className = 'shown';
  return false;
}

function createShowSection(links) {
  return showSection;
}
var sections = document.getElementsByClassName('nav'),
  containers = sections.getElementsByTagName('li'),
  links = containers.getElementsByTagName('a'),
  showSection = createShowSection(links),
  i;
for (i = 0; i < links.length; i += 1) {
  links[i].onclick = showSection;
}
showSection();
