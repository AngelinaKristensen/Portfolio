function showNav() {
    const links = document.querySelector(".navLinks");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
  }