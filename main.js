document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-links a")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});
