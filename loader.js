document.body.classList.add("loading");

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    setTimeout(function () {
        preloader.classList.add("hide");
        document.body.classList.remove("loading");
    }, 1500);
});