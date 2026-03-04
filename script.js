const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;

    faders.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < trigger){
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});