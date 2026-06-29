// ================================
// Smooth Fade-In Animation
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

// ================================
// Typing Effect
// ================================

const titles = [

    "Aspiring Full Stack Developer",
    "Java Developer",
    "Android Developer",
    "Web Developer"

];

let index = 0;
let letter = 0;
let deleting = false;

const title = document.querySelector(".hero-text h2");

function typeEffect() {

    let current = titles[index];

    if (!deleting) {

        title.textContent = current.substring(0, letter);
        letter++;

        if (letter > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;

        }

    } else {

        title.textContent = current.substring(0, letter);

        letter--;

        if (letter < 0) {

            deleting = false;

            index++;

            if (index >= titles.length)
                index = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();


// ================================
// Scroll To Top Button
// ================================

const button = document.createElement("button");

button.innerHTML = "⬆";

button.id = "topBtn";

document.body.appendChild(button);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

});

button.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ================================
// Active Navigation Link
// ================================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});