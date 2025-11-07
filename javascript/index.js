
//Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
})
//End of Navbar



// Event Featuress


const filterLinks = document.querySelectorAll(".filter-nav-link");


function show() {
    const showevents = document.querySelectorAll(".filter-nav");
    showevents.style.display = 'flex';
}


filterLinks.forEach((filterLink) => {
    filterLink.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelector('.filter-nav-link').
            classList.remove("active")
        filterLink.classList.add("active")

        const events = document.querySelectorAll(".event");
        events.forEach((event) => {
            event.classList.add('hide')

            if (filterLink.getAttribute("data-type") ===
                event.getAttribute("data-type")) {
                event.classList.remove('hide');
            }
        })

    })
})
// End of Event Features

//variables
const playButton = document.querySelector(".play-btn")
const videoContainer = document.querySelector(".advideo-container")
const xButton = document.querySelector(".x-btn")

playButton.addEventListener("click", () => {
    videoContainer.classList.add("show-video")
})

xButton.addEventListener("click", () => {
    videoContainer.classList.remove("show-video")
})


//controls
const hideControls = () => {
    setTimeout(() => {
        videoContainer.classList.remove("show-controls")
    },3000)
}
//End of Controls






                