function toggleMode() {
  const html = document.documentElement

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  html.classList.toggle("light");


  const image = document.querySelector("img");
  if (html.classList.contains("light")) {
    image.setAttribute('src', './assets/avatar-light.png')
  } else {
    image.setAttribute("src", "./assets/avatar.png")
  }
}
