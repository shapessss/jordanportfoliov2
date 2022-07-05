const carousels = document.querySelector('.footer-global p')

const fadeIn = gsap.timeline()

fadeIn
    .set(carousels, { opacity: 0 })
    .to(carousels, { opacity: 1, stagger: 0.25, delay: 1 })

const span = carousels.querySelector('span')

for (let i = 0; i < 20; i++) {
    carousels.appendChild(
        span.cloneNode(true)
    )
}

const timeline = gsap.timeline({
    repeat: -1
})

timeline.to(carousels, {
    x: (-1 * span.clientWidth),
    duration: 6,
    ease: 'linear'
})

// Animated text
const scrollingAnimation = document.querySelectorAll("h1")

scrollingAnimation.forEach(e => {
    e.style.opacity = 0
})

const fadeAnimation = function () {
    let delay = 0.25

    scrollingAnimation.forEach(e => {
        const tagTop = e.getBoundingClientRect().top
        const tagBottom = e.getBoundingClientRect().bottom

        if (tagTop < window.innerHeight) {
            e.style.animation = `fadein 1s ${delay}s both`
            delay = delay + 0.25
        }
    })
}

fadeAnimation()

document.addEventListener("scroll", () => {
    fadeAnimation()
})

window.addEventListener("resize", () => {
    fadeAnimation()
})

// Change text on interval
// array to store strings
var words = [
    "research.",
    "UX.",
    "UI.",
    "design.",
    "personas.",
];

var i = 1 // Start at 1 because 0 is already displayed

var animInterval = window.setInterval(() => {
    document.querySelector(".interval").textContent = words[i];
    i = ++i % words.length; // Add 1 until it reaches 5, then back to 0, 1, 2...
}, 1000);