function getTheme() {
  theme = Cookies.get("theme", { path: "/" });

  if (theme == "dark") {
    theme = "dark";
  } else {
    theme = "light";
  }

  return theme;
}

function setTheme(theme) {
  Cookies.set("theme", theme, { path: "/" });

  if (theme == "dark") {
    document.body.classList.add("dark");
    document.getElementById("avatar").src = "/images/web/avatar-dark-theme.svg";
  } else {
    document.body.classList.remove("dark");
    document.getElementById("avatar").src =
      "/images/web/avatar-light-theme.svg";
  }
}

function toggleTheme() {
  theme = getTheme();

  if (theme == "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
setTheme(getTheme());
