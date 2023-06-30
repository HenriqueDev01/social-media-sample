function openNav() {
  document.getElementById("side-bar-container").style.width = "40%";
  var sidebarExpandButton = document.getElementById("side-bar-expand-button");
  sidebarExpandButton.style.rotate = "0deg";
  sidebarExpandButton.onclick = closeNav;
}

function closeNav() {
  document.getElementById("side-bar-container").style.width = "0";
  var sidebarExpandButton = document.getElementById("side-bar-expand-button");
  sidebarExpandButton.style.rotate = "90deg";
  sidebarExpandButton.onclick = openNav;
}

class CssRootVars {
  constructor() {
    this.root = document.querySelector(':root');
    this.rootComputed = getComputedStyle(this.root);
  }
  getv(varname) {
    return this.rootComputed.getPropertyValue(varname);
  }

  setv(varname, value) {
    this.root.style.setProperty(varname, value);
  }
}

function getTheme() {
  return window.sessionStorage.getItem('theme') || 'darkmode';
}

function saveTheme(theme) {
  window.sessionStorage.setItem('theme', theme);
}

function toggleTheme() {
  var currentTheme = getTheme();
  var theme = (currentTheme == 'lightmode' ? 'darkmode' : 'lightmode');
  saveTheme(theme);
  applyTheme(theme);
}

function applyTheme(theme) {
  if (!theme) return;
  var r = new CssRootVars()
  var properties = [
    'primary-color', 'secondary-color', 'color',
    'bgcolor', 'divline-color', 'sidebar-color'
  ]
  for (var name of properties) {
    nv = 
    r.setv(`--${name}`, `var(--${theme}-${name})`)
  }
}

applyTheme(getTheme());
