export const fixedHeader = () => {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", (e) => {

        if (window.pageYOffset > 0) {
            header.classList.add("header--fixed");
        } else {
            header.classList.remove("header--fixed");
        }
    });
};