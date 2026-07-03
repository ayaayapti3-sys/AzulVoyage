import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

const sections = document.querySelectorAll(".motion-section");

sections.forEach(function(section) {
    inView(section, function() {
        animate(
            section,
            {
                opacity: [0, 1],
                y: [50, 0]
            },
            {
                duration: 0.8,
                easing: "ease-out"
            }
        );
    });
});