const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

    const video = project.querySelector("video");
    const media = project.querySelector(".project-media");

    media.addEventListener("mouseenter", () => {
        video.play();
    });

    media.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

});