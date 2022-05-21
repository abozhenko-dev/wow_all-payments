export const footerAccordion = () => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    function handleTabletChange(e) {
        // Check if the media query is true
        if (e.matches) {
            const accordionHeads = document.querySelectorAll(".footer__title");

            if (accordionHeads) {
                accordionHeads.forEach(accordionHead => {
                    accordionHead.addEventListener("click", (e) => {
                        const accordionBody = e.target.nextElementSibling;
                        e.target.classList.toggle("footer__title--active");

                        if (accordionBody.style.maxHeight) {
                            accordionBody.style.maxHeight = "";
                            accordionBody.style.padding = "";
                        } else {
                            accordionBody.style.maxHeight = accordionBody.scrollHeight + 30 + "px";
                            accordionBody.style.padding = "15px 0";
                        }
                    });
                });
            }
        }
    }

    mediaQuery.addListener(handleTabletChange)

    // Initial check
    handleTabletChange(mediaQuery)
};