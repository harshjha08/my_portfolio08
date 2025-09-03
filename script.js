var themebtn = document.getElementById("themebtn");

// ✅ Page load hote hi check karo last saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themebtn.src = "sun.png";
} else {
    themebtn.src = "moon.png";
}

// ✅ Jab button click ho
themebtn.onclick = function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themebtn.src = "sun.png";
        localStorage.setItem("theme", "dark");   // Save dark mode
    } else {
        themebtn.src = "moon.png";
        localStorage.setItem("theme", "light");  // Save light mode
    }
}