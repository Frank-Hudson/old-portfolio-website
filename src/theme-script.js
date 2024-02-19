function toggleTheme() {
  const docMain = document.body;
  const themeText = document.getElementById("theme-icon");
  const themeTextFooter = document.getElementById("theme-icon-foot");

  docMain.classList.toggle("darkmode");

  if (themeText.innerHTML == "light_mode") {
    themeText.innerHTML = "dark_mode";
    themeTextFooter.innerHTML = "dark_mode";
  } else {
    themeText.innerHTML = "light_mode";
    themeTextFooter.innerHTML = "light_mode";
  }
}

function setDark() {
  const docMain = document.body;
  const themeText = document.getElementById("theme-icon");
  const themeTextFooter = document.getElementById("theme-icon-foot");

  docMain.classList.add("darkmode");
  themeText.innerHTML = "dark_mode";
  themeTextFooter.innerHTML = "dark_mode";
}

function setLight() {
  const docMain = document.body;
  const themeText = document.getElementById("theme-icon");
  const themeTextFooter = document.getElementById("theme-icon-foot");

  docMain.classList.remove("darkmode");
  themeText.innerHTML = "light_mode";
  themeTextFooter.innerHTML = "light_mode";
}
