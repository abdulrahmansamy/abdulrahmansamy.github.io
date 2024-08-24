function toggleMode() {
    const currentMode = document.body.classList.contains("light");
    document.body.classList.toggle("light", !currentMode);
    document.body.classList.toggle("dark", currentMode);
  }
  
  const lightModeButton = document.getElementById("light-mode");
  const darkModeButton = document.getElementById("dark-mode");
  
  lightModeButton.addEventListener("click", toggleMode);
  darkModeButton.addEventListener("click", toggleMode);
  