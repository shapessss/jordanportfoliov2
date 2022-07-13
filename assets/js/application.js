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


// Copyright year auto
function currentYear() {
    const d = new Date()
    const n = d.getFullYear()
    document.querySelector("copyright-span").innerHTML = '&copy; Copyright ' + n
}

currentYear()

// if (window.netlifyIdentity) {
//     window
//     .netlifyIdentity
//     .on("init", user => {
//         if (!user) {
//         window
//             .netlifyIdentity
//             .on("login", () => {
//             document.location.href = "/admin/#";
//             });
//         }
//     });
// }