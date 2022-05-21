export const burger = (burgerSelector, navSelector, listSelector) => {
    const mediaQuery = window.matchMedia('(max-width: 1200px)');

    const burger = document.querySelector(burgerSelector),
        body = document.body,
        nav = document.querySelector(navSelector),
        wrapper = document.querySelector(".wrapper"),
        navList = nav.querySelector(listSelector);


    function handleTabletChange(e) {
        // Check if the media query is true
        if (e.matches) {
            burger.addEventListener("click", clickOnBurgerHandler);
            wrapper.addEventListener("click", clickOnWrapperHandler);
            navList.addEventListener("click", clickOnNavItem);
        } else {
            burger.removeEventListener("click", clickOnBurgerHandler);
            wrapper.removeEventListener("click", clickOnWrapperHandler);
            navList.removeEventListener("click", clickOnNavItem);
        }
    }

    function clickOnNavItem(e) {
        if (e.target.classList.contains("header__nav-item--expanded")) {
            const menu = e.target.querySelector(".header__menu");
            e.target.classList.toggle("header__nav-item--active");

            if (menu.style.maxHeight) {
                menu.style.maxHeight = "";
                menu.style.padding = "";
                menu.style.opacity = "";
                menu.style.visibility = "";
            } else {
                menu.style.maxHeight = menu.scrollHeight + 40 + "px";
                menu.style.padding = "20px 25px";
                menu.style.opacity = 1;
                menu.style.visibility = "visible";
            }
        }
    }

    function clickOnBurgerHandler(e) {
        if (e.currentTarget) {
            burger.classList.toggle(`${burgerSelector.substring(1, burgerSelector.length)}--active`)
            nav.classList.toggle(`${navSelector.substring(1, navSelector.length)}--active`)
            body.classList.toggle("lock");
        }
    }

    function clickOnWrapperHandler(e) {
        if (e.target && e.target === wrapper) {
            burger.classList.remove(`${burgerSelector.substring(1, burgerSelector.length)}--active`);
            nav.classList.remove(`${navSelector.substring(1, navSelector.length)}--active`);
            body.classList.remove("lock");
        }
    }

    mediaQuery.addListener(handleTabletChange)

    // Initial check
    handleTabletChange(mediaQuery)
};