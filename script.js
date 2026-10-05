document.addEventListener("DOMContentLoaded", function () {

    const heroSection = document.querySelector("#hero-section");
    const heroHeading = document.querySelector(".hero-heading-animation");
    const heroPara = document.querySelector(".hero-para-animation");

    const heroObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                heroHeading.classList.add("show");

                setTimeout(function () {
                    heroPara.classList.add("show");
                }, 500);

                heroObserver.unobserve(heroSection);
            }
        });
    }, {
        threshold: 0.2
    });

    heroObserver.observe(heroSection);

    const aboutSection = document.querySelector("#about-section");
    const aboutLabel = document.querySelector(".about-label-animation");
    const aboutHeading = document.querySelector(".about-heading-animation");
    const aboutPara = document.querySelector(".about-para-animation");
    const aboutCards = document.querySelectorAll(".icon-box .col-lg-4");

    const aboutObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                aboutLabel.classList.add("show");

                setTimeout(function () {
                    aboutHeading.classList.add("show");
                }, 400);

                setTimeout(function () {
                    aboutPara.classList.add("show");
                }, 800);

                setTimeout(function () {
                    aboutCards[0].classList.add("show");
                }, 1200);

                setTimeout(function () {
                    aboutCards[1].classList.add("show");
                }, 1500);

                setTimeout(function () {
                    aboutCards[2].classList.add("show");
                }, 1800);

                aboutObserver.unobserve(aboutSection);
            }
        });
    }, {
        threshold: 0.2
    });

    aboutObserver.observe(aboutSection);

    const supplierSection = document.querySelector("#supplier-section");
    const supplierHeading = document.querySelector(".supplier-heading-animation");
    const supplierPara = document.querySelector(".supplier-para-animation");
    const supplierCard = document.querySelector(".supplier-card-animation");

    const supplierObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                supplierHeading.classList.add("show");

                setTimeout(function () {
                    supplierPara.classList.add("show");
                }, 400);

                setTimeout(function () {
                    supplierCard.classList.add("show");
                }, 800);

                supplierObserver.unobserve(supplierSection);
            }
        });
    }, {
        threshold: 0.2
    });

    supplierObserver.observe(supplierSection);

    const contactSection = document.querySelector("#contact-section");
    const contactLabel = document.querySelector(".contact-label-animation");
    const contactHeading = document.querySelector(".contact-heading-animation");
    const contactPara = document.querySelector(".contact-para-animation");
    const contactPhone = document.querySelector(".contact-phone-animation");
    const contactEmail = document.querySelector(".contact-email-animation");

    const contactObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                contactLabel.classList.add("show");

                setTimeout(function () {
                    contactHeading.classList.add("show");
                }, 400);

                setTimeout(function () {
                    contactPara.classList.add("show");
                }, 800);

                setTimeout(function () {
                    contactPhone.classList.add("show");
                }, 1200);

                setTimeout(function () {
                    contactEmail.classList.add("show");
                }, 1600);

                contactObserver.unobserve(contactSection);
            }
        });
    }, {
        threshold: 0.2
    });

    contactObserver.observe(contactSection);
});

