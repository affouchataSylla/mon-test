$(document).ready(function () {

    /* ===== Smooth scroll ===== */
    $(".learn-more").on("click", function (e) {
        e.preventDefault();

        const target = $("#about");
        if (target.length) {
            $("html, body").animate(
                { scrollTop: target.offset().top },
                800
            );
        }
    });

    /* ===== ScrollReveal ===== */
    if (typeof ScrollReveal !== "undefined") {
        ScrollReveal().reveal(".section", {
            delay: 200,
            distance: "60px",
            duration: 1000,
            origin: "bottom",
            easing: "ease-in-out",
            reset: false
        });
    }

    /* ===== Slider Témoignages ===== */
    let index = 0;
    const slides = $(".slide");
    const dots = $(".dot");

    if (slides.length > 0) {
        setInterval(function () {
            slides.removeClass("active");
            dots.removeClass("active");

            index = (index + 1) % slides.length;

            slides.eq(index).addClass("active");
            dots.eq(index).addClass("active");
        }, 4000);
    }

});








