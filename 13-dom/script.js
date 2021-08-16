"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

btnsOpenModal.forEach((btn) => {
    btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);

// document.getElementById("section--1");
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// console.log(document.getElementsByClassName("btn"));

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.textContent = "We use cookies";
// message.innerHTML =
//     "We use cookies <button class='btn btn--close-cookie'>Got it!</button>";
// header.after(message);
// //header.append(message.cloneNode(true));

// document
//     .querySelector(".btn--close-cookie")
//     .addEventListener("click", function () {
//         message.remove();
//     });

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor());

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//     console.log("LINK", e.target, e.currentTarget);
//     this.style.backgroundColor = randomColor();
//     //e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//     console.log("CONTAINER", e.target, e.currentTarget);
//     this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//     console.log("NAV", e.target, e.currentTarget);
//     this.style.backgroundColor = randomColor();
// });

// Page navigation

btnScrollTo.addEventListener("click", function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log("Section 1", s1coords);

    console.log("Link: ", e.target.getBoundingClientRect());

    console.log(
        "Current scroll position",
        window.pageXOffset,
        window.pageYOffset
    );

    console.log(
        "Viewport",
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    // window.scrollTo({
    //     left: s1coords.left, // + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: "smooth",
    // });

    section1.scrollIntoView({ behavior: "smooth" });
});

// document.querySelectorAll(".nav__link").forEach((elm) => {
//     elm.addEventListener("click", function (e) {
//         e.preventDefault();
//         const id = this.getAttribute("href");
//         console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");
        console.log(id);
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});

const h1 = document.querySelector("h1");
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// h1.closest("h1").style.background = "var(--gradient-primary)";

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//     if (el !== h1) el.style.transform = "scale(0.5)";
// });

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");

    console.log(clicked);
    if (!clicked) return;

    if (clicked) {
        tabs.forEach((t) => t.classList.remove("operations__tab--active"));
        tabsContent.forEach((c) =>
            c.classList.remove("operations__content--active")
        );

        clicked.classList.add("operations__tab--active");
        document
            .querySelector(`.operations__content--${clicked.dataset.tab}`)
            .classList.add("operations__content--active");
    }
});

const nav = document.querySelector(".nav");

const handleHover = function (e) {
    // console.log(this, e.currentTarget);
    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");
        siblings.forEach((el) => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
};

// nav.addEventListener("mouseover", function (e) {
//     handleHover(e, 0.5);
// });

// nav.addEventListener("mouseout", function (e) {
//     handleHover(e, 1);
// });

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

// document.addEventListener("scroll", function () {
//     console.log(window.scrollY);

//     if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//     else nav.classList.remove("sticky");
// });

// const obsCallback = function (entries, observer) {
//     entries.forEach((entry) => {

//     });
// };

// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector(".header");

const stickyNav = function (entries) {
    const [entry] = entries;
    //console.log(entry);

    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${nav.getBoundingClientRect().height}px`,
});
headerObserver.observe(header);

const allSections = document.querySelectorAll(".section");

const revealObserver = function (entries, obsever) {
    const [entry] = entries;
    //console.log(entry);

    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    sectionObserver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealObserver, {
    root: null,
    threshold: 0.15,
});
allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});

const imgObserverHandler = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.setAttribute("src", entry.target.dataset.src);

    entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
    });

    imgObserver.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(imgObserverHandler, {
    root: null,
    threshold: 0,
    rootMargin: "200px",
});
document.querySelectorAll(".features__img").forEach((img) => {
    imgObserver.observe(img);
    console.log("Add img");
});
