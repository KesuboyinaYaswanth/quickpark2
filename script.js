document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "dashboard.html";
});

document.getElementById("parkingForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Parking spot added successfully!");
    window.location.href = "success.html";
});
