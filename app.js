function updateClock() {
    const clock = document.getElementById("live-clock");
    if (!clock) {
        return;
    }

    const now = new Date();
    clock.textContent = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    });
}

function setupFadeIn() {
    const fadeElements = document.querySelectorAll(".fade-in");
    if (!fadeElements.length) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    fadeElements.forEach((element) => observer.observe(element));
}

function setActiveNav() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-page]").forEach((link) => {
        if (link.getAttribute("data-page") === currentPage) {
            link.classList.add("active");
        }
    });
}

function bootSite() {
    updateClock();
    setupFadeIn();
    setActiveNav();
    window.setInterval(updateClock, 1000);
}

document.addEventListener("DOMContentLoaded", bootSite);
