const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Open and close the mobile navigation menu
menuToggle.addEventListener("click", () => {
const isOpen = navigation.classList.toggle("open");

menuToggle.setAttribute("aria-expanded", String(isOpen));

menuToggle.setAttribute(
"aria-label",
isOpen ? "Close navigation" : "Open navigation"
);
});

// Close navigation after clicking a menu link
navigation.querySelectorAll("a").forEach((link) => {
link.addEventListener("click", () => {
navigation.classList.remove("open");
menuToggle.setAttribute("aria-expanded", "false");
});
});

// Automatically update the copyright year
document.getElementById("year").textContent =
new Date().getFullYear();


