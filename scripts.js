(function() {
    const navBtn = document.querySelector(".nav-btn");
    const allLinks = document.querySelector(".links-full");
    const arrowBtn = document.querySelector(".arrow-btn");
    const nextBtn = document.querySelector(".next");
    const offTwo = document.querySelector(".off-links-two");
    const offThree = document.querySelector(".off-links-three");
    const offFour = document.querySelector(".off-links-four");
    const allAnchorTags = document.querySelectorAll("a");
    allAnchorTags.forEach(a => {
        a.addEventListener("click", rearrangeDom);
    });

    navBtn.addEventListener("click", showMobilePhoneLinks);
    arrowBtn.addEventListener("click", hideMobilePhoneLinks);
    nextBtn.addEventListener("click", showHiddenLinks);
    window.addEventListener("resize", rearrangeDom);

    function showMobilePhoneLinks() {
        hide(navBtn);
        arrowBtn.classList.add("arrowstyles");
        allLinks.style.animation = "translate-in 500ms forwards";
    }
    function hideMobilePhoneLinks() {
        arrowBtn.classList.remove("arrowstyles");
        allLinks.style.animation = "translate-out 500ms forwards";
        show(navBtn);
    }

    function showHiddenLinks() {
        nextBtn.classList.toggle("rotate");
        if (innerWidth >= 400 && innerWidth < 600) {
            if (offTwo.style.display == "flex") {
                offTwo.style.display = "none";
            } else {
                offTwo.style.display = "flex";
            }
        }
        else if (innerWidth >= 600 && innerWidth < 700) {
            if (offThree.style.display == "flex") {
                offThree.style.display = "none";
            } else {
                offThree.style.display = "flex";
            }
        }
        else if (innerWidth >= 700) {
            if (offFour.style.display == "flex") {
                offFour.style.display = "none";
            } else {
                offFour.style.display = "flex";
            }
            console.log(offFour.style.display);
        }
        if (innerWidth > 800) {}
    }

    function rearrangeDom() {
        // let pageWidth = innerWidth;
        arrowBtn.classList.remove("arrowstyles");
        if (innerWidth >= 400) {
            allLinks.style.transform = "translateX(0)";
            arrowBtn.classList.remove("arrowstyles");
            allLinks.style.animation = "translate-in 500ms forwards";
            hide(navBtn);
            if (nextBtn.classList.contains("rotate")) {
                nextBtn.classList.remove("rotate");
            }
            if (offTwo.style.display == "flex") {
                offTwo.style.display = "none";
            }
            if (offThree.style.display == "flex") {
                offThree.style.display = "none";
            }
            if (offFour.style.display == "flex") {
                offFour.style.display = "none";
            }
        } else {
            show(navBtn);
            allLinks.style.animation = "translate-out 500ms forwards";
        }
    }

    function hide(el) {
        el.style.display = "none";
    }
    function show(el) {
        let display = '';
        if (el == navBtn) display = 'inline-block';
        else if (el == allLinks) display = "flex";
        else display = "block";

        el.style.display = display;
    }
}());